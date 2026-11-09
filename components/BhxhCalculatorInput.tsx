'use client';

import React from 'react';
import { Calculator, User, Users, Wallet, Copy, Check } from 'lucide-react';
import { AGENT_CONFIG } from '@/config/agent';

type SupportType = 'chinh_sach_100' | 'uu_dai_50' | 'doi_tuong_40' | 'chua_chac';

interface BhxhCalculatorInputProps {
  incomeChoice: number;
  setIncomeChoice: (val: number) => void;
  gender: 'nam' | 'nu';
  setGender: (g: 'nam' | 'nu') => void;
  supportType: SupportType;
  setSupportType: (t: SupportType) => void;
  netPayload: { netPay: number; pension: number };
  formatVnd: (val: number) => string;
  copied: boolean;
  setCopied: (c: boolean) => void;
}

export default function BhxhCalculatorInput({
  incomeChoice,
  setIncomeChoice,
  gender,
  setGender,
  supportType,
  setSupportType,
  netPayload,
  formatVnd,
  copied,
  setCopied,
}: BhxhCalculatorInputProps) {

  const suggestedIncomes = [
    1500000,
    3000000,
    5000000,
    8000000,
    10000000,
    15000000,
    20000000,
    30000000,
  ];

  const handleCopy = () => {
    const supportText =
      supportType === 'chinh_sach_100'
        ? 'Hộ nghèo / Cận nghèo tại Hà Nội'
        : supportType === 'uu_dai_50'
          ? 'Cựu chiến binh, Cựu quân nhân / CAND / TNXP tại Hà Nội'
          : supportType === 'doi_tuong_40'
            ? 'Đối tượng khác tại Hà Nội (Nhà nước 20% + TP hỗ trợ 20%)'
            : 'Chưa chắc thuộc nhóm nào - Nhờ chị Thắm kiểm tra giúp';

    const text = `Nhờ chị Hồ Thị Thắm tính giúp BHXH Tự Nguyện:\n- Mức thu nhập con chọn: ${formatVnd(incomeChoice)}/tháng\n- Giới tính: ${gender === 'nam' ? 'Nam' : 'Nữ'}\n- Nhóm đối tượng: ${supportText}\n- Số tiền nộp dự kiến: ${formatVnd(netPayload.netPay)}/tháng\n- Lương hưu dự kiến (Đóng 15 năm): ${formatVnd(netPayload.pension)}/tháng\nNhờ chị kiểm tra giúp con xem có đúng không ạ. Zalo chị Thắm: ${AGENT_CONFIG.contact.phoneDisplay}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-5 font-sans text-xs">
      <div className="flex items-center gap-2 border-b pb-2 text-blue-800 font-bold text-sm uppercase tracking-wide">
        <Calculator className="w-4 h-4 shrink-0" />
        <h5>Thông số tham gia BHXH</h5>
      </div>

      {/* 1. MỨC THU NHẬP */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="flex items-center gap-1.5 font-bold text-slate-700 uppercase tracking-wide">
            <Wallet className="w-3.5 h-3.5 text-slate-400 shrink-0" /> Mức thu nhập căn cứ đóng:
          </label>
          <span className="font-mono font-bold text-sm text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
            {formatVnd(incomeChoice)} / tháng
          </span>
        </div>

        <input
          type="range"
          min="1500000"
          max="50600000"
          step="50000"
          value={incomeChoice}
          onChange={(e) => setIncomeChoice(parseInt(e.target.value) || 1500000)}
          className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
        />
        <div className="flex justify-between text- text-slate-400 font-medium border-b pb-2">
          <span>Thấp nhất: {formatVnd(1500000)}</span>
          <span>Tối đa: {formatVnd(50600000)}</span>
        </div>
        <p className="text- text-slate-500 leading-relaxed">
          Bà con đóng mức cao hơn thì sau này lương hưu cao hơn. Mới bắt đầu thì cứ chọn mức sàn cũng được ạ.
        </p>

        <div className="space-y-1.5">
          <p className="text- font-bold text-slate-500 uppercase tracking-wider">Chọn nhanh mức thu nhập gợi ý:</p>
          <div className="flex flex-wrap gap-1.5">
            {suggestedIncomes.map((income) => {
              const isSelected = incomeChoice === income;
              return (
                <button
                  key={income}
                  type="button"
                  onClick={() => setIncomeChoice(income)}
                  className={`px-2 py-1.5 rounded-xl font-mono font-bold text- border transition-all duration-150 ${
                    isSelected
                      ? 'bg-blue-50 text-blue-700 border-blue-400 shadow-sm'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {income === 1500000 ? 'Mức Sàn' : formatVnd(income).replace(' đ', '')}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. GIỚI TÍNH - Nói đơn giản cho bà con hiểu */}
      <div className="space-y-1.5">
        <label className="flex items-center gap-1.5 font-bold text-slate-700 uppercase tracking-wide">
          <User className="w-3.5 h-3.5 text-slate-400 shrink-0" /> Giới tính người tham gia:
        </label>
        <div className="grid grid-cols-2 gap-3">
          {(['nam', 'nu'] as const).map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setGender(g)}
              className={`py-2 rounded-xl font-bold border transition text- ${
                gender === g
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {g === 'nam' ? 'Nam' : 'Nữ'}
            </button>
          ))}
        </div>
        <p className="text- text-slate-500">Nam và Nữ có cách tính tỷ lệ hưởng hơi khác nhau, nên bà con chọn đúng giúp em ạ.</p>
      </div>

      {/* 3. NHÓM ƯU ĐÃI - ĐÃ THÊM LỰA CHỌN "CHƯA CHẮC" + SỬA CHỮ 100% */}
      <div className="space-y-1.5">
        <label className="flex items-center gap-1.5 font-bold text-slate-700 uppercase tracking-wide">
          <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" /> Bà con thuộc nhóm nào?
        </label>
        <div className="space-y-2">
          {[
            { id: 'chua_chac' as SupportType, label: 'Em chưa chắc - Để chị Thắm kiểm tra giúp (Nên chọn cái này)', desc: 'Bà con cứ chọn cái này, em kiểm tra rồi báo lại cho chính xác ạ.' },
            { id: 'chinh_sach_100' as SupportType, label: 'Hộ nghèo & Hộ cận nghèo', desc: 'Được hỗ trợ cao nhất, mức hỗ trợ tùy theo quyết định của xã.' },
            { id: 'uu_dai_50' as SupportType, label: 'CCB, Cựu quân nhân, CAND, TNXP thuộc CLB', desc: 'Được hỗ trợ thêm theo chính sách của Hà Nội.' },
            { id: 'doi_tuong_40' as SupportType, label: 'Các đối tượng khác ở Hà Nội', desc: 'Nhà nước hỗ trợ 20% + TP Hà Nội hỗ trợ thêm 20%.' },
          ].map((item) => {
            const isChecked = supportType === item.id;
            return (
              <label
                key={item.id}
                className={`flex items-start gap-2.5 p-2.5 rounded-xl border cursor-pointer transition select-none ${
                  isChecked
                    ? 'bg-blue-50/50 border-blue-200 font-semibold text-blue-900 shadow-sm'
                    : 'border-slate-100 bg-slate-50/30 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="supportType"
                  checked={isChecked}
                  onChange={() => setSupportType(item.id)}
                  className="w-3.5 h-3.5 mt-0.5 text-blue-600 focus:ring-blue-500 border-slate-300 bg-white"
                />
                <span>
                  <span className="block text- leading-tight">{item.label}</span>
                  <span className="block text- font-normal text-slate-500 mt-0.5 leading-relaxed">{item.desc}</span>
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 4. NÚT SAO CHÉP */}
      <button
        type="button"
        onClick={handleCopy}
        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl uppercase tracking-wider transition shadow-sm mt-3 flex items-center justify-center gap-1.5"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>Đã chép rồi - Bà con dán vào Zalo gửi cho em nhé</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>Chép kết quả này để gửi cho em Thắm</span>
          </>
        )}
      </button>
      <p className="text-center text- text-slate-500 -mt-2">
        Chép xong, bà con mở Zalo, dán vào tin nhắn gửi cho em là được ạ.
      </p>
    </div>
  );
}