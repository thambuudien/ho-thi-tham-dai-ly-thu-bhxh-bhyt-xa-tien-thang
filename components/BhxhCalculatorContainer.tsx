'use client';

import React, { useState, useEffect } from 'react';
import BhxhCalculatorInput from '@/components/BhxhCalculatorInput';
import BhxhResultTable from '@/components/BhxhResultTable';

export type SupportType = 'chinh_sach_100' | 'uu_dai_50' | 'doi_tuong_40' | 'chua_chac';
export type PovertyLineChoice = 1500000 | 2200000;

const BASE_SALARY = 2530000;
const ADJUSTMENT_FACTOR = 1.452;

const OLD_POVERTY_LINE = 1500000;
const NEW_POVERTY_LINE = 2200000;
const EFFECTIVE_DATE = new Date('2027-01-01T00:00:00');

export default function BhxhCalculatorContainer() {
  const maxIncomeLimit = BASE_SALARY * 20;

  const [incomeChoice, setIncomeChoice] = useState<number>(OLD_POVERTY_LINE);
  const [gender, setGender] = useState<'nam' | 'nu'>('nu');
  const [supportType, setSupportType] = useState<SupportType>('chua_chac');
  const [copied, setCopied] = useState(false);

  // Ngày thật để biết đã qua 01.01.2027 chưa
  const [isNewPeriod, setIsNewPeriod] = useState(false);
  useEffect(() => {
    setIsNewPeriod(new Date() >= EFFECTIVE_DATE);
  }, []);

  // Mức bà con đang chọn để xem - Mặc định theo ngày thật
  // Trước 01.01.2027 mặc định mức cũ, sau 01.01.2027 mặc định mức mới
  const [povertyLineChoice, setPovertyLineChoice] = useState<PovertyLineChoice>(OLD_POVERTY_LINE);

  // Khi sang ngày 01.01.2027, tự chuyển lựa chọn sang mức mới
  useEffect(() => {
    if (isNewPeriod) {
      setPovertyLineChoice(NEW_POVERTY_LINE);
    }
  }, [isNewPeriod]);

  const povertyLine = povertyLineChoice;
  const minIncome = povertyLine;

  // Bà con đang xem trước mức mới trong khi chưa đến ngày áp dụng
  const isPreviewNew = povertyLine === NEW_POVERTY_LINE && !isNewPeriod;

  useEffect(() => {
    if (incomeChoice < minIncome) {
      setIncomeChoice(minIncome);
    }
  }, [minIncome]);

  const calculateBhxhMetrics = () => {
    const baseCost = incomeChoice * 0.22;

    let totalSupportRatio = 0.40;
    if (supportType === 'chinh_sach_100') {
      totalSupportRatio = 1.0;
    } else if (supportType === 'uu_dai_50') {
      totalSupportRatio = 0.50;
    } else if (supportType === 'doi_tuong_40') {
      totalSupportRatio = 0.40;
    } else if (supportType === 'chua_chac') {
      totalSupportRatio = 0.40;
    }

    const discount = povertyLine * 0.22 * totalSupportRatio;
    const netPay = Math.max(0, Math.min(baseCost, Math.round(baseCost - discount)));

    const adjustedIncome = Math.round(incomeChoice * ADJUSTMENT_FACTOR);
    const pensionRatio = gender === 'nam' ? 0.4 : 0.45;
    const pension = Math.round(adjustedIncome * pensionRatio);

    return { baseCost, discount, netPay, pension, adjustedIncome, povertyLine, totalSupportRatio, isTempCalc: supportType === 'chua_chac' };
  };

  const metrics = calculateBhxhMetrics();
  const formatVnd = (val: number) => new Intl.NumberFormat('vi-VN').format(val) + 'đ';

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl font-sans">
      {/* NÚT CHỌN - Vẫn cho chọn để xem trước */}
      <div className="mb-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
        <p className="font-bold text-sm text-slate-800">Bà con muốn tính theo mức chuẩn nghèo nào?</p>
        <p className="text- text-slate-500 mt-1 leading-relaxed">
          Bấm để xem trước cũng được ạ. Nhưng mức mới chỉ chính thức áp dụng từ 01.01.2027, đến ngày đó web sẽ tự chuyển sang mức mới.
        </p>

        <div className="grid grid-cols-2 gap-2 mt-3">
          {([
            { value: OLD_POVERTY_LINE as PovertyLineChoice, label: 'Mức cũ', desc: `Chuẩn ${formatVnd(OLD_POVERTY_LINE)} - Mức thấp nhất ${formatVnd(OLD_POVERTY_LINE)}`, badge: isNewPeriod ? 'Đã hết hạn' : 'Đang áp dụng' },
            { value: NEW_POVERTY_LINE as PovertyLineChoice, label: 'Mức mới', desc: `Chuẩn ${formatVnd(NEW_POVERTY_LINE)} - Mức thấp nhất ${formatVnd(NEW_POVERTY_LINE)}`, badge: isNewPeriod ? 'Đang áp dụng' : 'Xem trước - Từ 01.01.2027' },
          ]).map((item) => {
            const isSelected = povertyLineChoice === item.value;
            return (
              <button
                key={item.value}
                type="button"
                onClick={() => setPovertyLineChoice(item.value)}
                className={`relative text-left p-3 rounded-xl border transition cursor-pointer ${isSelected ? 'bg-emerald-50 border-emerald-400 shadow-sm' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'}`}
              >
                <span className={`text- font-bold px-2 py-0.5 rounded-full ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'}`}>{item.badge}</span>
                <span className="block font-bold text-sm text-slate-900 mt-2">{item.label}: {formatVnd(item.value)}</span>
                <span className="block text- text-slate-500 mt-0.5">{item.desc}</span>
                {isSelected && <span className="absolute top-2 right-2 w-5 h-5 bg-emerald-600 text-white rounded-full flex items-center justify-center text- font-bold">✓</span>}
              </button>
            );
          })}
        </div>

        {/* Cảnh báo khi đang xem trước mức mới */}
        {isPreviewNew ? (
          <p className="text- text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-2.5 mt-3 leading-relaxed">
            ⚠️ Bà con đang <b>xem trước mức mới {formatVnd(NEW_POVERTY_LINE)}</b> - Mức này <b>chưa áp dụng</b>, chỉ chính thức áp dụng từ <b>01.01.2027</b>. Hiện tại vẫn tính theo mức cũ {formatVnd(OLD_POVERTY_LINE)} ạ.
          </p>
        ) : (
          <p className="text- text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg p-2.5 mt-3 leading-relaxed">
            Đang tính theo mức <b>{formatVnd(povertyLine)}</b> - Mức thấp nhất đóng: <b>{formatVnd(minIncome)}</b> - Tiền hỗ trợ: <b>{formatVnd(metrics.discount)}</b> - Bà con thực nộp: <b>{formatVnd(metrics.netPay)}/tháng</b>
          </p>
        )}
      </div>

      <div className="mb-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text- leading-relaxed text-blue-900">
        <p className="font-bold">Cách web tính:</p>
        <ul className="mt-2 space-y-1 list-disc pl-5">
          <li><b>Mức thấp nhất đóng</b> = Mức chuẩn nghèo bà con vừa chọn: <b>{formatVnd(minIncome)}</b>.</li>
          <li><b>Tiền đóng gốc</b> = Thu nhập bà con chọn x 22%.</li>
          <li><b>Tiền hỗ trợ</b> tính trên mức chuẩn nghèo {formatVnd(metrics.povertyLine)}.</li>
          <li><b>Lương hưu</b> = Thu nhập bà con chọn x <b>1.452</b> x 40% (Nam) / 45% (Nữ) khi đóng đủ 15 năm.</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-5">
          <BhxhCalculatorInput
            incomeChoice={incomeChoice}
            setIncomeChoice={setIncomeChoice}
            gender={gender}
            setGender={setGender}
            supportType={supportType}
            setSupportType={setSupportType}
            netPayload={metrics}
            formatVnd={formatVnd}
            copied={copied}
            setCopied={setCopied}
            minIncome={minIncome}
          />
        </div>
        <div className="md:col-span-7">
          <BhxhResultTable
            incomeChoice={incomeChoice}
            baseCost={metrics.baseCost}
            discount={metrics.discount}
            netPay={metrics.netPay}
            pension={metrics.pension}
            adjustedIncome={metrics.adjustedIncome}
            adjustmentFactor={ADJUSTMENT_FACTOR}
            formatVnd={formatVnd}
          />
          <p className="mt-3 text- text-slate-600 bg-slate-50 border border-slate-200 rounded-xl p-3 leading-relaxed">
            Đang tính theo mức chuẩn nghèo: <b>{formatVnd(metrics.povertyLine)}</b> - Mức thấp nhất đóng: <b>{formatVnd(minIncome)}</b>
            {isPreviewNew ? ' (đang xem trước - chưa áp dụng, từ 01.01.2027 mới áp dụng)' : isNewPeriod ? ' (mức mới từ 01.01.2027)' : ' (mức cũ đến hết 31.12.2026)'}
          </p>
          {metrics.isTempCalc && (
            <p className="mt-3 text- text-amber-800 bg-amber-50 border border-amber-200 rounded-xl p-3 leading-relaxed">
              * Bà con đang chọn “Chưa chắc thuộc nhóm nào” nên web đang tạm tính như nhóm khác (hỗ trợ 40%).
            </p>
          )}
        </div>
      </div>
    </main>
  );
}