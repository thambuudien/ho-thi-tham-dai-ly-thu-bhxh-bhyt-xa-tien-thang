import { CONTACT } from "../config/contact";
import { GIOI_THIEU } from "../data/content";
export default function GioiThieu() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <img src="https://i0.wp.com/hotham.vn/wordpress/wp-content/uploads/sites/30/2025/08/Luong-5-trieu-dong-bao-hiem-tu-nguyen-bao-nhieu.jpg?fit=1920%2C1920&ssl=1" alt="Chị Thắm tư vấn cho bà con" className="rounded-2xl w-full" />
      <div>
        <h2 className="text-3xl font-bold text-[#0B4AA2]">{GIOI_THIEU.tieuDe}</h2>
        {GIOI_THIEU.doanVan.map((p, i) => <p key={i} className="mt-3 text-lg leading-relaxed">{p}</p>)}
        <div className="mt-5 bg-blue-50 p-4 rounded-xl text-base space-y-1">
          <p><b>Hồ Thị Thắm</b> - Đại lý thu BHXH, BHYT</p>
          <p><b>Địa điểm:</b> {CONTACT.diaChi}</p>
          <p><b>Zalo của em:</b> {CONTACT.zaloDisplay}</p>
        </div>
      </div>
    </section>
  );
}
