import { CONTACT } from "../config/contact";
import { HERO } from "../data/content";
export default function Hero() {
  return (
    <section className="bg-[#0B4AA2] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">{HERO.tieuDe}</h1>
          <p className="mt-4 text-lg leading-relaxed">{HERO.moTa}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="#form-nhac-han" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-bold">{HERO.nutBHYT}</a>
            <a href="#bhxh" className="bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-3 rounded-full font-bold">{HERO.nutBHXH}</a>
          </div>
          <p className="mt-4 text-sm opacity-90">{HERO.ghiChu}</p>
          <ul className="mt-4 space-y-1 text-sm"><li>✓ Đại lý thu BHXH, BHYT xã Tiến Thắng</li><li>✓ Có biên lai điện tử</li><li>✓ Đã được báo VNPost viết bài</li></ul>
        </div>
        <div className="bg-white/10 rounded-2xl p-4 text-center">
          <img src="https://i0.wp.com/hotham.vn/wordpress/wp-content/uploads/sites/30/2022/11/png_20220609_183223_0000.png?fit=1920%2C1920&ssl=1" alt="Chị Thắm Bưu Điện - Hồ Thị Thắm" className="rounded-2xl w-full object-cover" />
          <p className="mt-3">Chị Thắm ở Bưu điện VHX Tự Lập - {CONTACT.diaChiNgan}</p>
          <a href={CONTACT.zaloLink} className="inline-block mt-3 bg-white text-[#0B4AA2] px-5 py-2 rounded-full font-bold">Nhắn Zalo cho em: {CONTACT.zaloDisplay}</a>
        </div>
      </div>
    </section>
  );
}
