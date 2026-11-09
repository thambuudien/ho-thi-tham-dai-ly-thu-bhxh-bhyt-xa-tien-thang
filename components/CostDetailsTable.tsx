'use client';

import { PhoneCall, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AGENT_CONFIG } from '@/config/agent';
import PaymentQrModal from '@/components/PaymentQrModal';

interface DetailedRateItem {
  order: number;
  label: string;
  discountText: string;
  cost: number;
}

interface CostDetailsTableProps {
  durationMonths: number;
  detailedRates: DetailedRateItem[];
  grandTotal: number;
  formatVnd: (val: number) => string;
}

export default function CostDetailsTable({
  durationMonths,
  detailedRates,
  grandTotal,
  formatVnd,
}: CostDetailsTableProps) {
  return (
    <div className="space-y-4 font-sans text-sm">
      
      {/* BẢNG PHÂN BỔ TIỀN CHI TIẾT - Chữ to hơn cho bà con dễ đọc */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-4">
        <div className="border-b pb-2 flex justify-between items-center text-slate-900">
          <h5 className="text-base font-bold uppercase tracking-wide flex items-center gap-1.5">
            <Award className="w-5 h-5 text-[#0B4AA2] shrink-0" />
            Chi tiết tiền từng người nhà mình
          </h5>
          <span className="text-xs font-medium bg-blue-50 border border-blue-200 text-[#0B4AA2] px-2 py-1 rounded-md">
            Thời hạn: {durationMonths} tháng
          </span>
        </div>

        <div className="space-y-2">
          {detailedRates.map((item) => (
            <div 
              key={item.order} 
              className="flex justify-between items-center p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 transition-colors"
            >
              <div>
                <p className="font-bold text-slate-900 text-sm">{item.label}</p>
                <p className="text-xs text-slate-500">{item.discountText}</p>
              </div>
              <span className="font-bold text-slate-900 text-base">{formatVnd(item.cost)}</span>
            </div>
          ))}

          <div className="pt-3.5 border-t border-dashed border-slate-200 flex justify-between items-center text-slate-900 font-bold">
            <span className="text-base">Tổng tiền nhà mình phải nộp đợt này:</span>
            <span className="text-2xl font-black text-red-600 tracking-tight">{formatVnd(grandTotal)}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 space-y-2 text-sm text-slate-600 leading-normal">
          <div className="flex items-center gap-1.5 text-slate-800 font-bold">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Quyền lợi khi bà con đóng liên tục qua bưu điện:</span>
          </div>
          <div className="flex items-start gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Đi đúng tuyến được trả 80%, còn giữ được mốc 5 năm liên tục thì được trả 100% đấy ạ.</span>
          </div>
          <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-2">
            Bà con lưu ý giúp em: Đây là số tiền tạm tính để bà con tham khảo thôi ạ. Bà con nhắn Zalo để em kiểm tra lại tên + tháng hết hạn cho chính xác rồi hãy chuyển ạ.
          </p>
        </div>
      </div>

      {/* MÃ QR - Chỉ hiện sau khi bà con đã nhắn Zalo xác nhận, để tránh chuyển nhầm ạ */}
      <div className="space-y-2">
        <p className="text-center text-sm font-bold text-red-600">
          Bà con đừng chuyển khoản vội ạ, nhắn Zalo để em kiểm tra tên + số tiền trước đã nhé, đúng rồi hãy chuyển ạ.
        </p>
        <PaymentQrModal 
          amount={grandTotal} 
          purpose={`GIA HAN BHYT HOGIADINH`} 
        />
      </div>

      {/* LIÊN HỆ QUA ZALO */}
      {/* <div className="bg-[#0B4AA2] text-white p-4 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left space-y-0.5">
          <p className="text-xs text-yellow-300 uppercase tracking-widest font-semibold">An sinh xã Tiến Thắng</p>
          <h4 className="text-lg font-bold">Để em Thắm kiểm tra giúp bà con trước khi nộp ạ</h4>
          <p className="text-sm text-white/80">{AGENT_CONFIG.serviceArea}</p>
        </div>
        <a
          href={`https://zalo.me/${AGENT_CONFIG.contact.zaloNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-5 py-3 rounded-xl flex items-center gap-2 shadow shrink-0"
        >
          <PhoneCall className="w-4 h-4" /> Nhắn Zalo cho em ạ
        </a>
      </div> */}

    </div>
  );
}