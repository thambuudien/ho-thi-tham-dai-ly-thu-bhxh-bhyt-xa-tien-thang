'use client';

import React, { useState } from 'react';
import { PhoneCall, ShieldCheck, CheckCircle2, Award, MessageCircle, QrCode } from 'lucide-react';
import { AGENT_CONFIG } from '@/config/agent';
import PaymentQrModal from '@/components/PaymentQrModal';

interface BhxhResultTableProps {
  incomeChoice: number;
  baseCost: number;
  discount: number;
  netPay: number;
  pension: number;
  adjustedIncome?: number;
  adjustmentFactor?: number;
  formatVnd: (val: number) => string;
}

export default function BhxhResultTable({
  incomeChoice,
  baseCost,
  discount,
  netPay,
  pension,
  adjustedIncome,
  adjustmentFactor = 1.452,
  formatVnd,
}: BhxhResultTableProps) {
  const [paymentPeriod, setPaymentPeriod] = useState<1 | 3 | 6 | 12>(1);
  const [confirmed, setConfirmed] = useState(false);

  const totalPeriodCost = netPay * paymentPeriod;
  const zaloLink = `https://zalo.me/${AGENT_CONFIG.contact.zaloNumber}`;

  const getQrPurpose = () => {
    return `NOP PHI BHXH ${paymentPeriod} THANG`;
  };

  // Nếu file cha chưa truyền adjustedIncome thì tự tính để không bị lỗi
  const calcAdjustedIncome = adjustedIncome ?? Math.round(incomeChoice * adjustmentFactor);

  return (
    <div className="space-y-4 font-sans text-xs">
      {/* KẾT QUẢ */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-4">
        <div className="flex items-center gap-2 border-b pb-2 text-slate-900 font-bold text-sm uppercase tracking-wide">
          <Award className="w-4 h-4 text-amber-500 shrink-0" />
          <h5>Kết quả dự tính lương hưu (Đóng 15 năm)</h5>
        </div>

        <div className="space-y-2.5">
          <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-50/60 border border-slate-100">
            <span className="text-slate-600">Thu nhập đăng ký làm căn cứ đóng:</span>
            <span className="font-mono font-bold text-slate-900">{formatVnd(incomeChoice)}</span>
          </div>

          {/* DÒNG MỚI: Thu nhập sau khi nhân hệ số */}
          <div className="flex justify-between items-center p-2.5 rounded-xl bg-amber-50/60 border border-amber-100">
            <span className="text-slate-600">Thu nhập sau hệ số trượt giá (x {adjustmentFactor}):</span>
            <span className="font-mono font-bold text-slate-900">{formatVnd(calcAdjustedIncome)}</span>
          </div>

          <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-50/60 border border-slate-100">
            <span className="text-slate-600">Mức đóng quy định gốc (22%):</span>
            <span className="font-mono font-bold text-slate-900">{formatVnd(baseCost)}</span>
          </div>

          <div className="flex justify-between items-center p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-100 text-emerald-900">
            <span className="font-medium">Tiền Ngân sách Nhà nước & TP hỗ trợ:</span>
            <span className="font-mono font-bold text-emerald-700">- {formatVnd(discount)}</span>
          </div>

          <div className="flex justify-between items-center p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-900 font-bold text-sm">
            <span>Số tiền bà con thực nộp hằng tháng:</span>
            <span className="font-mono text-base font-black text-blue-700">{formatVnd(netPay)} / tháng</span>
          </div>

          <div className="flex justify-between items-center p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-sm">
            <div>
              <p className="text-amber-900 font-black">Lương hưu dự kiến nhận lại:</p>
              <p className="text- text-amber-700 font-normal mt-0.5 leading-relaxed">
                * Đã nhân hệ số trượt giá <strong className="text-amber-900">{adjustmentFactor}</strong> để giữ giá trị đồng tiền.
                Đây là số dự kiến để bà con tham khảo ạ.
              </p>
            </div>
            <span className="font-mono text-base font-black text-amber-600 shrink-0">{formatVnd(pension)} / tháng</span>
          </div>
        </div>

        <div className="mt-2 pt-3 border-t border-slate-100 space-y-2 text- text-slate-600">
          <div className="flex items-center gap-1.5 text-slate-800 font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>Quyền lợi an sinh đi kèm trọn đời:</span>
          </div>
          <div className="flex items-start gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <span>Được cấp <strong>thẻ BHYT miễn phí trọn đời</strong> suốt thời gian hưởng lương hưu, quỹ BHYT chi trả lên đến 95% viện phí khi đi khám chữa bệnh.</span>
          </div>
          <div className="flex items-start gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <span>Chế độ tử tuất và trợ cấp mai táng bằng 10 tháng lương cơ sở, tương đương <strong>25.300.000 đ</strong> tại thời điểm từ trần.</span>
          </div>
        </div>
      </div>

      {/* CHỌN CHU KỲ + GIỮ LẠI NÚT QR */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-4 relative z-10">
        <div className="space-y-1.5 relative z-10">
          <label className="block font-bold text-slate-700 uppercase tracking-wide">
            Bà con muốn đóng dồn đợt này mấy tháng?
          </label>
          <div className="grid grid-cols-4 gap-2 relative z-10">
            {([1, 3, 6, 12] as const).map((period) => (
              <button
                key={period}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setPaymentPeriod(period);
                  setConfirmed(false);
                }}
                className={`relative z-10 py-2.5 px-1 text-center font-bold border rounded-xl transition cursor-pointer text- pointer-events-auto ${
                  paymentPeriod === period
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 active:bg-blue-100'
                }`}
              >
                {period === 1 ? '1 Tháng' : `${period} Tháng`}
              </button>
            ))}
          </div>
          <p className="text- text-slate-500">
            Đang chọn: <b className="text-blue-700">{paymentPeriod} tháng</b> - Tổng: <b className="text-blue-700">{formatVnd(totalPeriodCost)}</b>
          </p>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center text-slate-900 font-medium">
          <span>Tổng số tiền đóng đợt này ({paymentPeriod} tháng):</span>
          <span className="font-mono font-black text-sm text-blue-700">{formatVnd(totalPeriodCost)}</span>
        </div>

        <label className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl p-3 cursor-pointer select-none relative z-10">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="w-4 h-4 mt-0.5 accent-blue-600 shrink-0 cursor-pointer"
          />
          <span className="text- leading-relaxed text-amber-900">
            <b>Tôi đã kiểm tra kỹ:</b> đúng mức thu nhập lựa chọn ({formatVnd(incomeChoice)}), đúng số tháng ({paymentPeriod} tháng), đúng số tiền <b>{formatVnd(totalPeriodCost)}</b>.
            Nếu chưa chắc, bà con nhắn Zalo cho em Thắm để em kiểm tra giúp trước khi chuyển ạ.
          </span>
        </label>

        {!confirmed ? (
          <div className="space-y-2 relative z-10">
            <button
              type="button"
              disabled
              className="w-full bg-slate-200 text-slate-500 font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm cursor-not-allowed"
            >
              <QrCode className="w-4 h-4" /> Tích xác nhận ở trên để hiện mã QR
            </button>
            <a
              href={zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white border border-blue-200 text-blue-700 font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm"
            >
              <MessageCircle className="w-4 h-4" /> Chưa chắc - Nhắn Zalo cho em Thắm kiểm tra giúp
            </a>
          </div>
        ) : (
          <div className="relative z-10">
            <PaymentQrModal
              amount={totalPeriodCost}
              purpose={getQrPurpose()}
            />
          </div>
        )}

        <p className="text-center text- text-slate-500 leading-relaxed">
          Sau khi chuyển, bà con chụp màn hình gửi cho em qua Zalo 0978 333 963 để em gửi biên lai ngay ạ.
        </p>
      </div>

      {/* DANH THIẾP */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-4 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left space-y-0.5">
          <p className="text- text-blue-200 uppercase tracking-widest font-semibold">Tư vấn lập sổ bảo hiểm trực tuyến</p>
          <h4 className="text-base font-black">Lập sổ an sinh cùng chị Thắm</h4>
          <p className="text- text-amber-400 font-light">{AGENT_CONFIG.serviceArea}</p>
        </div>
        <a
          href={zaloLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 text-xs font-black px-4 py-2 rounded-xl flex items-center gap-1.5 shadow transition shrink-0 uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <PhoneCall className="w-3.5 h-3.5 fill-slate-950" /> Liên hệ làm sổ ngay
        </a>
      </div>
    </div>
  );
}