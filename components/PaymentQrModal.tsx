'use client';

import { useState } from 'react';
import { QrCode, X, Copy, Check, ShieldCheck, Landmark } from 'lucide-react';

interface PaymentQrModalProps {
  amount?: number;
  purpose?: string;
}

export default function PaymentQrModal({ amount = 0, purpose = "" }: PaymentQrModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  // ĐÃ SỬA: Không để số tài khoản trong code nữa, lấy từ .env để giấu đi ạ
  // Chị thêm 3 dòng này vào file .env.local và Vercel > Settings > Environment Variables nhé
  const BANK_CONFIG = {
    bin: process.env.NEXT_PUBLIC_BANK_BIN || "",
    accountNumber: process.env.NEXT_PUBLIC_BANK_ACCOUNT || "",
    accountName: process.env.NEXT_PUBLIC_BANK_NAME || "",
  };

  const cleanPurpose = purpose
    ? purpose
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'd')
        .toUpperCase()
    : `GIA HAN BH`;

  const qrUrl = `https://img.vietqr.io/image/${BANK_CONFIG.bin}-${BANK_CONFIG.accountNumber}-qr_only.jpg?amount=${amount}&addInfo=${encodeURIComponent(cleanPurpose)}&accountName=${encodeURIComponent(BANK_CONFIG.accountName)}`;

  const handleCopyStk = () => {
    navigator.clipboard.writeText(BANK_CONFIG.accountNumber);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="font-sans text-sm">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow flex items-center justify-center gap-2 text-base"
      >
        <QrCode className="w-5 h-5 shrink-0" /> Quét mã QR nộp tiền nhanh
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col relative">
            
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center text-slate-900">
              <div className="flex items-center gap-2">
                <Landmark className="w-5 h-5 text-emerald-600" />
                <span className="font-bold text-sm uppercase">Nộp phí qua chuyển khoản</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 flex flex-col items-center text-center space-y-4">
              <p className="text-sm text-red-600 font-bold leading-normal">
                Bà con đừng chuyển vội ạ, nhắn Zalo để em kiểm tra tên + số tiền trước đã nhé, đúng rồi hãy chuyển ạ.
              </p>
              <p className="text-sm text-slate-500 leading-normal">
                Bà con mở app ngân hàng, quét mã QR dưới đây là nó tự điền thông tin cho bà con ạ.
              </p>

              <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={qrUrl} 
                  alt="Mã QR chuyển khoản" 
                  className="w-48 h-48 object-contain rounded-lg select-none"
                  loading="lazy"
                />
              </div>

              <div className="w-full bg-slate-50 border border-slate-100 p-3 rounded-xl text-left space-y-1.5 text-sm">
                <p className="text-slate-500">Ngân hàng: <span className="text-slate-900 font-bold">Vietcombank</span></p>
                <p className="text-slate-500">Chủ tài khoản: <span className="text-slate-900 font-bold uppercase">{BANK_CONFIG.accountName}</span></p>
                
                <div className="flex justify-between items-center text-slate-500">
                  <span>Số tài khoản: <span className="text-slate-900 font-bold">{BANK_CONFIG.accountNumber}</span></span>
                  <button
                    type="button"
                    onClick={handleCopyStk}
                    className="p-1 text-blue-600 hover:bg-blue-50 rounded border border-transparent"
                    title="Sao chép số tài khoản"
                  >
                    {copiedText ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {amount > 0 && (
                  <p className="text-slate-500 border-t pt-1.5 border-dashed mt-1.5">
                    Số tiền đợt này: <span className="text-red-600 font-black text-base">{new Intl.NumberFormat('vi-VN').format(amount)} đ</span>
                  </p>
                )}
                {purpose && (
                  <p className="text-slate-500 truncate">
                    Nội dung: <span className="text-blue-700 font-bold">{cleanPurpose}</span>
                  </p>
                )}
              </div>

              <div className="w-full bg-blue-50 border border-blue-100 p-3 rounded-xl flex gap-2 items-start text-left text-sm text-slate-600 leading-normal">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  Bà con chuyển xong, nhắn Zalo cho em để em kiểm tra rồi em gửi biên lai điện tử cho bà con ạ.
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}