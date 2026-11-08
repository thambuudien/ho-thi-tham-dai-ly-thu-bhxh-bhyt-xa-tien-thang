import { CONTACT } from "../config/contact";

export default function BaoChiNoiVeEm() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#0B4AA2]">Báo Chí Nói Gì Về Em Thắm?</h2>
        <p className="text-center mt-2 text-lg">Bài này là bài gốc trên VNPost - Tổng công ty Bưu điện Việt Nam, đăng ngày 18/04/2023, em để nguyên văn để bà con đọc ạ.</p>

        <div className="mt-8 border-2 border-[#0B4AA2] rounded-2xl p-6 bg-blue-50">
          <p className="text-sm text-gray-600">Nguồn: VNPost - Tổng công ty Bưu điện Việt Nam</p>
          <h3 className="text-2xl font-bold mt-2">Nữ nhân viên Bưu điện - Văn hóa xã “đa kênh”</h3>
          <p className="mt-3 text-lg leading-relaxed">
            Dù chỉ mới công tác trong ngành Bưu điện hơn 2 năm nhưng Hồ Thị Thắm - nhân viên Bưu điện - Văn hóa xã Tự Lập,
            Bưu điện huyện Mê Linh, Bưu điện TP. Hà Nội đã sở hữu cho mình một hệ thống bán hàng “đa kênh” được rất nhiều
            đồng nghiệp khen ngợi và học hỏi kinh nghiệm.
          </p>
          <blockquote className="mt-4 border-l-4 border-yellow-400 pl-4 italic text-lg leading-relaxed">
            “Theo quy định, 8h sáng, BĐ-VHX mở cửa phục vụ khách hàng nhưng các bác, các cô ở đây đi làm đồng sớm lắm
            nên mình chủ động mở sớm hơn để mọi người có tranh thủ ra gửi hàng hay mua đồ tiêu dùng dễ dàng hơn”
            - Chị Thắm chia sẻ.
          </blockquote>
          <p className="mt-4 text-lg leading-relaxed">
            Công việc hàng ngày của chị là nhận hàng bưu chính chuyển phát, tư vấn bảo hiểm xã hội tự nguyện, bảo hiểm y tế,
            bán hàng tiêu dùng, thu tiền điện theo lịch... Bằng sự tận tâm, chu đáo, chị luôn được người dân tin tưởng.
            Có những tháng chị Thắm đạt trên 10 triệu doanh thu từ việc thu Bảo hiểm y tế.
          </p>
          <blockquote className="mt-4 border-l-4 border-yellow-400 pl-4 italic text-lg leading-relaxed">
            “Trong khó khăn có cơ hội, và người ở lại cuối cùng là người chiến thắng” - Chị Thắm nhắn gửi.
          </blockquote>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 text-center">
  <div class="bg-white rounded-xl p-3 shadow-sm">
    <p class="text-2xl font-bold text-[#0B4AA2]">10.000</p>
    <p class="text-sm text-gray-600">Người tiếp cận Fanpage</p>
  </div>
  
  <div class="bg-white rounded-xl p-3 shadow-sm">
    <p class="text-2xl font-bold text-[#0B4AA2]">15.000</p>
    <p class="text-sm text-gray-600">Lượt thích TikTok</p>
  </div>
  
  <div class="bg-white rounded-xl p-3 shadow-sm">
    <p class="text-2xl font-bold text-[#0B4AA2]">4 nhóm</p>
    <p class="text-sm text-gray-600">Zalo, 200 thành viên / nhóm</p>
  </div>
</div>

          <div className="text-center mt-6 flex flex-wrap justify-center gap-3">
            <a href="https://vnpost.vn/nguoi-buu-dien/nu-nhan-vien-buu-dien-van-hoa-xa-da-kenh" target="_blank" className="bg-[#0B4AA2] text-white px-6 py-3 rounded-full font-bold">Đọc bài gốc trên VNPost ạ</a>
            <a href={CONTACT.zaloLink} className="bg-green-600 text-white px-6 py-3 rounded-full font-bold">Nhắn Zalo cho em Thắm ạ</a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
