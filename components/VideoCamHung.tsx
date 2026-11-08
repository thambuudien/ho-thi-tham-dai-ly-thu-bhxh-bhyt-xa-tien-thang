export default function VideoCamHung() {
  return (
    <section className="py-12 px-4 bg-yellow-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0B4AA2]">Video Mọi Người Nói Về Em Thắm</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Bà con ơi, video này là video mọi người làm để động viên em đấy ạ. Em để ở đây để bà con xem cho vui ạ.
        </p>
        <blockquote className="mt-4 italic text-lg leading-relaxed bg-white rounded-2xl p-5 border">
          “Người phụ nữ nhỏ nhắn, chân chất lại thật thà nhưng đã dám bước ra khỏi vùng an toàn của bản thân để học hỏi,
          mang lại nguồn năng lượng tích cực và giá trị tốt đẹp đến những người xung quanh! Chúc chị Thắm nhiều sức khoẻ,
          luôn máu lửa với nghề và công tác tốt! Chị chính là nguồn cảm hứng để chúng tôi tiếp tục phấn đấu, cố gắng từng ngày!”
        </blockquote>
        {/* Video Shorts - ty le doc 9:16, de vua dien thoai */}
        <div className="mx-auto mt-6 max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg bg-black">
          <iframe
            src="https://www.youtube.com/embed/nUMZCB6e-9g"
            title="Video về chị Thắm Bưu Điện - Nguồn cảm hứng"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <a href="https://www.youtube.com/shorts/nUMZCB6e-9g" target="_blank" className="bg-red-600 text-white px-6 py-3 rounded-full font-bold">Xem trên YouTube ạ</a>
          <a href="https://zalo.me/0978333963" className="bg-green-600 text-white px-6 py-3 rounded-full font-bold">Nhắn Zalo cho em ạ</a>
        </div>
        <p className="mt-3 text-sm text-gray-500">Chị nhớ: Video này là của người khác làm tặng chị, mình chỉ nhúng link thôi, không tải về đăng lại nhé chị, để tôn trọng người làm ạ.</p>
      </div>
    </section>
  );
}
