import { CONTACT } from "../config/contact";
export default function Footer() {
  return (
    <>
    <footer className="bg-[#0B4AA2] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl font-bold">Đại lý thu BHXH, BHYT - Hồ Thị Thắm</h3>
          <p className="mt-3">{CONTACT.diaChi} - {CONTACT.diaChiNgan}</p>
          <p className="mt-1">Giờ phục vụ: {CONTACT.gioLamViec}</p>
          <p className="mt-1">Zalo: {CONTACT.zaloDisplay} - Bà con cứ nhắn, em trả lời ạ.</p>
          <p className="mt-1">Email: {CONTACT.email}</p>
        </div>
        <div>
          <p className="font-bold">Chỉ đường đến Bưu điện VHX Tự Lập</p>
          <a href="https://maps.google.com/?q=Buu+dien+Van+hoa+xa+Tu+Lap+Me+Linh+Ha+Noi" target="_blank" className="inline-block mt-3 bg-white text-[#0B4AA2] px-5 py-2 rounded-full font-bold">Mở Google Maps ạ</a>
          <p className="mt-3 text-sm opacity-80">Bà con đến Trạm Y tế xã là thấy Bưu điện ngay bên cạnh ạ.</p>
        </div>
      </div>
    </footer>
    <div className="w-full py-5 text-center text-xs text-white/80 border-t border-white/15 bg-[#073A7D] px-4">
  <p>© {new Date().getFullYear()} Đại lý thu BHXH, BHYT tại xã Tiến Thắng - Bảo hiểm xã hội cơ sở Mê Linh</p>
  <p className="mt-1.5">
    {CONTACT.diaChiNgan}
    {' '}•{' '}
    Zalo / Gọi: <a href={`tel:${CONTACT.phoneNumber}`} className="underline font-bold text-white">{CONTACT.zaloDisplay}</a>
    {' '}•{' '}
    <a href={`https://zalo.me/${CONTACT.zaloNumber}`} target="_blank" rel="noopener noreferrer" className="underline font-bold text-white">Nhắn Zalo cho em Thắm</a>
  </p>
  <p className="mt-1.5 text-white/60">
    Từ 01.01.2027 mức chuẩn nghèo lên 2.200.000đ - Bà con bấm vào trang Tính Lương Hưu để tính thử mức mới ạ.
  </p>
  <p className="mt-1.5">
    Thiết kế bởi <a href="https://longwebstudio.io.vn" target="_blank" rel="noopener noreferrer" className="underline">Long Web Studio</a>
  </p>
</div>
    </>
  );
}
