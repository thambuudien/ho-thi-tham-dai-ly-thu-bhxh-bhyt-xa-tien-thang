import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import HeaderBanner from '@/components/HeaderBanner';
import Footer from '@/components/Footer';
import BhytCalculatorContainer from '@/components/BhytCalculatorContainer';
import { AGENT_CONFIG } from '@/config/agent';

export const metadata: Metadata = {
  title: AGENT_CONFIG.seo.bhytTitle,
  description: AGENT_CONFIG.seo.bhytDesc,
  alternates: {
    canonical: `${AGENT_CONFIG.contact.website}/tinh-muc-dong-bhyt`,
  },
  openGraph: {
    title: AGENT_CONFIG.seo.bhytTitle,
    description: AGENT_CONFIG.seo.bhytDesc,
    url: `${AGENT_CONFIG.contact.website}/tinh-muc-dong-bhyt`,
    type: 'website',
    locale: 'vi_VN',
  },
};

export default function TinhPhiBHYTPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col justify-between">
      <div>
        <HeaderBanner />
        {/* Đổi nền tối sang nền xanh bưu điện, chữ to hơn cho bà con dễ đọc */}
        <section className="bg-[#0B4AA2] text-white py-10 px-4">
          <div className="container mx-auto max-w-4xl text-center space-y-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-white hover:text-yellow-300 transition-colors mb-2 border border-white/40 bg-white/10 px-3 py-1.5 rounded-full font-bold"
            >
              <ArrowLeft className="w-4 h-4" /> Quay lại trang chủ ạ
            </Link>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              Bà Con Tự Tính Tiền BHYT Hộ Gia Đình Trong 10 Giây
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Nhà mình có mấy người cùng tham gia, bà con chọn số người ở dưới là nó tự tính ra tổng tiền phải đóng ạ.
              Tính theo mức lương cơ sở hiện hành <span className="text-yellow-300 font-bold">2.530.000 đ/tháng</span> ạ.
            </p>
            <p className="text-sm text-white/70">
              Mức này áp dụng từ 01/07/2026 theo Nghị định 161/2026/NĐ-CP đấy ạ.
            </p>
          </div>
        </section>
        <BhytCalculatorContainer baseSalary={2530000} />
        {/* Thêm nút Zalo để bà con tính xong nhắn chị ngay, không phải quay lại trang chủ */}
        <div className="max-w-4xl mx-auto px-4 pb-10 text-center">
          <p className="text-lg">Bà con tính xong mà chưa hiểu, cứ nhắn em nhé ạ.</p>
          <a
            href={`https://zalo.me/${AGENT_CONFIG.contact.zaloNumber}`}
            target="_blank"
            className="inline-block mt-3 bg-green-600 text-white px-8 py-3.5 rounded-full font-bold text-lg"
          >
            Nhắn Zalo cho em Thắm ạ - {AGENT_CONFIG.contact.zaloNumber}
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}