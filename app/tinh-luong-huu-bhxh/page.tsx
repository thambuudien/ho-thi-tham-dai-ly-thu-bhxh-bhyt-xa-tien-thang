import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, ShieldCheck, Calculator } from 'lucide-react';
import HeaderBanner from '@/components/HeaderBanner';
import Footer from '@/components/Footer';
import BhxhCalculatorContainer from '@/components/BhxhCalculatorContainer';
import { AGENT_CONFIG } from '@/config/agent';

export const metadata = {
  title: AGENT_CONFIG.seo.bhxhTitle,
  description: AGENT_CONFIG.seo.bhxhDesc,
  alternates: {
    canonical: `${AGENT_CONFIG.contact.website}/tinh-luong-huu-bhxh`,
  },
  openGraph: {
    title: AGENT_CONFIG.seo.bhxhTitle,
    description: AGENT_CONFIG.seo.bhxhDesc,
    url: `${AGENT_CONFIG.contact.website}/tinh-luong-huu-bhxh`,
    type: 'website',
    locale: 'vi_VN',
  },
};

export default function TinhBhxhTuNguyenPage() {
  const zaloLink = `https://zalo.me/${AGENT_CONFIG.contact.zaloPhone || '0978333963'}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <HeaderBanner />

        {/* HERO - Sửa tiêu đề cho bà con hiểu ngay */}
        <section className="bg-gradient-to-br from-blue-800 to-slate-900 text-white py-10 px-4">
          <div className="container mx-auto max-w-4xl text-center space-y-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-blue-300 hover:text-white transition-colors mb-2 border border-blue-700/60 bg-blue-950/40 px-3 py-1 rounded-full font-bold"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Quay lại Trang chủ Nhắc Hạn
            </Link>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
              Tính thử: Đóng bao nhiêu -<br className="hidden md:block" /> Sau này hưởng lương hưu bao nhiêu?
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Dành cho bà con ở Hà Nội - Đã trừ sẵn tiền Nhà nước & Thành phố hỗ trợ.
              Bà con cứ bấm thử, không mất phí ạ.
            </p>
            <p className="text-xs md:text-sm text-yellow-200 font-medium">
              Đóng đủ 15 năm là được hưởng lương hưu trọn đời + BHYT miễn phí.
            </p>
          </div>
        </section>

        {/* Ô NHẮC QUAN TRỌNG - Tránh bà con chọn sai nhóm ưu đãi */}
        <section className="px-4 -mt-1">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm leading-relaxed">
              <p className="font-bold text-amber-900">⚠️ Bà con lưu ý giúp em 2 điều:</p>
              <ul className="mt-2 space-y-1.5 text-amber-800 list-disc pl-5">
                <li>
                  <b>Không chắc mình thuộc nhóm ưu đãi nào?</b> Cứ để mặc định nhóm “Các đối tượng khác”, nhắn Zalo cho em, em kiểm tra giúp, không mất phí ạ.
                </li>
                <li>
                  <b>Số lương hưu ở dưới là số dự kiến.</b> Bà con đóng mức cao hơn thì lương hưu cao hơn. Đây chưa phải số chốt cuối cùng của cơ quan BHXH ạ.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* MÁY TÍNH - Giữ nguyên component cũ */}
        <BhxhCalculatorContainer />

        {/* CTA NGAY SAU KẾT QUẢ - Chỗ bà con muốn nhắn nhất */}
        <section className="px-4 pb-2">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white border-2 border-blue-100 rounded-2xl p-5 md:p-6 text-center shadow-sm">
              <h2 className="text-lg md:text-xl font-extrabold text-slate-900">
                Đã có kết quả rồi, để em tính đúng cho nhà mình nhé?
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Bà con chụp màn hình kết quả vừa tính được, gửi cho em qua Zalo.
                Em kiểm tra tuổi, số năm đã đóng, nhóm hỗ trợ cho bà con cho chính xác ạ.
              </p>
              <a
                href={zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full text-base shadow"
              >
                <MessageCircle className="w-5 h-5" /> Nhắn Zalo cho em Thắm - 0978 333 963
              </a>
              <p className="text-xs text-slate-500 mt-3 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Thu đúng giá Nhà nước - Có biên lai điện tử - Không thu thêm phí
              </p>
            </div>
          </div>
        </section>

        {/* 3 CÂU HỎI HAY GẶP + 3 BƯỚC */}
        <section className="px-4 py-6">
          <div className="container mx-auto max-w-4xl grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border p-5">
              <h3 className="font-extrabold flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-600" /> 3 câu bà con hay hỏi ở trang này
              </h3>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed">
                <li><b>1. 50 tuổi rồi đóng 15 năm có kịp không?</b><br />Kịp ạ, em tính tuổi cho bà con xem đóng đến năm bao nhiêu thì hưởng.</li>
                <li><b>2. Đang đóng mức thấp, muốn tăng lên được không?</b><br />Được ạ, đổi mức bất cứ lúc nào, không mất số năm đã đóng.</li>
                <li><b>3. Đóng 1 lần cả năm có lợi hơn không?</b><br />Nhắn em, em tính cho bà con xem đóng dồn hay đóng từng tháng lợi hơn.</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-5">
              <h3 className="font-extrabold">3 bước đóng cùng em Thắm</h3>
              <ol className="mt-3 space-y-2.5 text-sm leading-relaxed list-decimal pl-5">
                <li><b>Bước 1:</b> Nhắn Zalo cho em Thắm</li>
                <li><b>Bước 2:</b> Em kiểm tra hạn thẻ + tính tiền cho nhà mình</li>
                <li><b>Bước 3:</b> Bà con đóng trực tiếp / chuyển khoản - Em gửi biên lai ngay qua Zalo</li>
              </ol>
              <p className="text-xs text-slate-600 mt-3">
                Địa điểm: Bưu điện VHX Tự Lập - Thôn Phú Mỹ, Xã Tiến Thắng, TP. Hà Nội
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Nút Zalo dính dưới màn hình điện thoại */}
      <a
        href={zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-3 left-3 right-3 z-50 bg-blue-600 text-white text-center font-bold py-3 rounded-full shadow-lg"
      >
        💬 Nhắn Zalo cho em Thắm - 0978 333 963
      </a>

      <Footer />
    </div>
  );
}