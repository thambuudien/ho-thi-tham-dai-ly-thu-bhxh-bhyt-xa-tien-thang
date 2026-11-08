export default function VideoGocNhin() {
  return (
    <section className="py-12 px-4 bg-[#0B4AA2] text-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-yellow-300 font-bold">⭐ VIDEO CHÍNH THỨC CỦA TỔNG CÔNG TY BƯU ĐIỆN VIỆT NAM ⭐</p>
        <h2 className="text-3xl font-bold text-center mt-2">Góc Nhìn Vietnam Post #6: Ứng Dụng Mạng Xã Hội Để Phát Triển BHXH</h2>
        <p className="text-center mt-3 text-lg leading-relaxed max-w-3xl mx-auto">
          Bà con ơi, chương trình này của Tổng công ty đã lấy chính website <b>blog.hotham.vn</b> của em ra làm ví dụ đấy ạ.
          Khác với các trang website hay fanpage của Tổng công ty, chương trình này giới thiệu về một website cá nhân của nhân vật khách mời đặc biệt - là em Thắm đấy ạ.
        </p>
        <blockquote className="mt-5 bg-white/10 rounded-2xl p-5 italic text-lg leading-relaxed text-center">
          “Quý vị và các bạn hãy cùng tôi truy cập vào website: <a href="https://blog.hotham.vn/" target = "_blank">blog.hotham.vn</a> để cùng xem có điều gì đặc biệt ở website này nhé.
          Chúng ta hãy cùng tìm hiểu về một website cá nhân của nhân vật khách mời đặc biệt.”
          <br /><span className="not-italic font-bold text-sm">- Trích lời dẫn chương trình Góc Nhìn Vietnam Post #6</span>
        </blockquote>
        <div className="mx-auto mt-6 max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
          <iframe
            src="https://www.youtube.com/embed/x-btCbzxizo"
            title="Góc Nhìn Vietnam Post #6 - Ứng dụng mạng xã hội đối với việc phát triển BHXH - Chị Thắm Bưu Điện"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <a href="https://www.youtube.com/watch?v=x-btCbzxizo" target="_blank" className="bg-white text-[#0B4AA2] px-6 py-3 rounded-full font-bold">Xem trên YouTube ạ</a>
          <a href="https://zalo.me/0978333963" className="bg-green-600 text-white px-6 py-3 rounded-full font-bold">Nhắn Zalo cho em Thắm ạ</a>
        </div>
        <p className="text-center text-sm text-white/70 mt-3">Video thuộc bản quyền Vietnam Post. Em chỉ nhúng link để bà con xem, không tải về đăng lại ạ.</p>
      </div>
    </section>
  );
}
