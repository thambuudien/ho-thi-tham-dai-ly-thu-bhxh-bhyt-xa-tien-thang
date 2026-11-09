'use client';

import { Calculator, Users, Calendar, UserCheck, Plus, Minus } from 'lucide-react';
import { AGENT_CONFIG } from '@/config/agent';

interface DetailedRateItem {
  order: number;
  label: string;
  discountText: string;
  cost: number;
}

interface CalculatorInputProps {
  memberCount: number;
  setMemberCount: (count: number) => void;
  alreadyRenewedCount: number;
  setAlreadyRenewedCount: (count: number) => void;
  durationMonths: 3 | 6 | 12;
  setDurationMonths: (months: 3 | 6 | 12) => void;
  detailedRates: DetailedRateItem[];
  grandTotal: number;
  formatVnd: (val: number) => string;
  copiedLink: boolean;
  setCopiedLink: (copied: boolean) => void;
}

export default function CalculatorInput({
  memberCount,
  setMemberCount,
  alreadyRenewedCount,
  setAlreadyRenewedCount,
  durationMonths,
  setDurationMonths,
  detailedRates,
  grandTotal,
  formatVnd,
  copiedLink,
  setCopiedLink,
}: CalculatorInputProps) {
  
  // Tổng nhà mình = số người đóng đợt này + số người đã đóng rồi
  const tongNhaMinh = memberCount + alreadyRenewedCount;

  const handleMemberIncrement = () => {
    if (memberCount < 15) setMemberCount(memberCount + 1);
  };
  const handleMemberDecrement = () => {
    if (memberCount > 1) setMemberCount(memberCount - 1);
  };

  const handleAlreadyIncrement = () => {
    if (alreadyRenewedCount < 10) setAlreadyRenewedCount(alreadyRenewedCount + 1);
  };
  const handleAlreadyDecrement = () => {
    if (alreadyRenewedCount > 0) setAlreadyRenewedCount(alreadyRenewedCount - 1);
  };

  const copyToClipboard = async () => {
    let memberDetailsText = "";
    detailedRates.forEach((item) => {
      memberDetailsText += `+ ${item.label} (${item.discountText}): ${formatVnd(item.cost)}\n`;
    });

    const dynamicShareUrl = `${AGENT_CONFIG.contact.website}/tinh-muc-dong-bhyt?tongNguoi=${memberCount}&daCoBHYT=${alreadyRenewedCount}&thoiHan=${durationMonths}`;

    // ĐÃ SỬA: Dùng zaloNumber để bà con bấm vào ra Zalo ngay, không dùng phoneDisplay có dấu chấm
    const text = `Dự toán phí BHYT hộ gia đình từ Đại lý bưu điện chị Hồ Thị Thắm:\nNhà mình tổng có: ${tongNhaMinh} người\nSố người đóng đợt này: ${memberCount} người\nSố người đã đóng rồi trong năm: ${alreadyRenewedCount} người\nThời hạn đóng: ${durationMonths} tháng\n\nChi tiết từng người:\n${memberDetailsText}\nTổng tiền nhà mình phải nộp đợt này: ${formatVnd(grandTotal)}\n\nBà con tự tính lại tại đây:\n${dynamicShareUrl}\n\nNhắn Zalo cho em Thắm để em kiểm tra lại giúp bà con nhé: https://zalo.me/${AGENT_CONFIG.contact.zaloNumber}`;
    
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Dự phòng cho điện thoại cũ không copy được: hiện ô để bà con tự copy
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-5 font-sans text-sm">
      <div className="flex items-center gap-2 border-b pb-2 text-[#0B4AA2] font-bold text-base uppercase tracking-wide">
        <Calculator className="w-5 h-5" />
        <h5>Nhà mình có mấy người ạ?</h5>
      </div>

      {/* Ô 1 - Số người đóng đợt này */}
      <div className="space-y-2">
        <label className="flex items-center gap-1.5 font-bold text-slate-800 text-sm">
          <Users className="w-4 h-4 text-slate-500" /> 1. Đợt này nhà mình đóng cho mấy người ạ?
        </label>
        <p className="text-xs text-slate-500">Ví dụ: Nhà có 4 người, 1 người đã đóng rồi thì đợt này chỉ đóng cho 3 người còn lại thôi ạ.</p>
        
        <div className="flex items-center max-w- bg-slate-50 border border-slate-200 rounded-xl overflow-hidden p-1">
          <button
            type="button"
            aria-label="Giảm 1 người"
            onClick={handleMemberDecrement}
            className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-amber-50 hover:text-amber-600 active:scale-95"
          >
            <Minus className="w-5 h-5" />
          </button>
          
          <input 
            type="number" 
            value={memberCount}
            aria-label="Số người gia hạn đợt này"
            className="w-full text-center bg-transparent border-none font-bold text-xl text-slate-900 focus:outline-none pointer-events-none"
            readOnly
          />
          
          <button
            type="button"
            aria-label="Thêm 1 người"
            onClick={handleMemberIncrement}
            className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-amber-50 hover:text-amber-600 active:scale-95"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Ô 2 - Số người đã đóng rồi */}
      <div className="space-y-2">
        <label className="flex items-center gap-1.5 font-bold text-amber-700 text-sm">
          <UserCheck className="w-4 h-4 text-amber-500" /> 2. Trong nhà mình đã có mấy người đóng rồi ạ?
        </label>
        <p className="text-xs text-slate-500">Nếu nhà mình chưa ai đóng thì để số 0 ạ. Nếu đã có người đóng rồi thì bấm + để chọn ạ.</p>
        
        <div className="flex items-center max-w- bg-amber-50 border border-amber-200 rounded-xl overflow-hidden p-1">
          <button
            type="button"
            aria-label="Giảm 1 người đã đóng"
            onClick={handleAlreadyDecrement}
            className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-amber-50 hover:text-amber-600 active:scale-95"
          >
            <Minus className="w-5 h-5" />
          </button>
          
          <input 
            type="number" 
            value={alreadyRenewedCount}
            aria-label="Số người đã đóng rồi"
            className="w-full text-center bg-transparent border-none font-bold text-xl text-amber-700 focus:outline-none pointer-events-none"
            readOnly
          />
          
          <button
            type="button"
            aria-label="Thêm 1 người đã đóng"
            onClick={handleAlreadyIncrement}
            className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-amber-50 hover:text-amber-600 active:scale-95"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
        {/* Hiện tổng để bà con kiểm tra mình bấm đúng chưa */}
        <p className="text-sm font-bold text-[#0B4AA2] bg-blue-50 border border-blue-100 rounded-lg p-2">
          Tổng nhà mình có: {tongNhaMinh} người ạ. Bà con kiểm tra lại giúp em nhé, đúng rồi hãy bấm copy ở dưới ạ.
        </p>
      </div>

      {/* Thời gian đóng */}
      <div className="space-y-1.5">
        <label className="flex items-center gap-1.5 font-bold text-slate-800 text-sm">
          <Calendar className="w-4 h-4 text-slate-500" /> 3. Nhà mình đóng mấy tháng ạ?
        </label>
        <div className="grid grid-cols-3 gap-2">
          {(['3', '6', '12'] as const).map((months) => {
            const parsedMonths = parseInt(months) as 3 | 6 | 12;
            return (
              <button
                key={months}
                type="button"
                onClick={() => setDurationMonths(parsedMonths)}
                className={`py-3 px-1 text-center font-bold border rounded-xl transition text-sm ${
                  durationMonths === parsedMonths 
                    ? 'bg-[#0B4AA2] text-white border-[#0B4AA2] shadow' 
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {months} tháng
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={copyToClipboard}
        className="w-full bg-[#0B4AA2] hover:bg-blue-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow flex items-center justify-center gap-2"
      >
        {copiedLink ? '✓ Đã copy rồi ạ, bà con dán vào Zalo gửi cho em nhé' : '📋 Copy kết quả gửi Zalo cho em ạ'}
      </button>
    </div>
  );
}