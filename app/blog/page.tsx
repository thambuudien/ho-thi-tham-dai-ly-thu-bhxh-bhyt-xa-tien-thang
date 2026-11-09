import Link from "next/link";
import { BAI_VIET } from "../../data/blog";
import { CONTACT } from "../../config/contact";
export const metadata = { title: "Blog Chị Thắm Bưu Điện - Tư Vấn BHXH, BHYT Cho Bà Con Mê Linh", description: "Bà con đọc blog của em Thắm để hiểu rõ cách gia hạn BHYT, đóng BHXH tự nguyện để có lương hưu. Em viết bằng giọng dễ hiểu nhất cho bà con mình ạ." };
export default function BlogPage() {
  return (
  <>
  
  <main className="min-h-screen bg-white max-w-5xl mx-auto py-12 px-4">
    <h1 className="text-3xl md:text-4xl font-bold text-[#0B4AA2] text-center">Nhật Ký Tư Vấn BHXH, BHYT Của Em Thắm - Viết Cho Bà Con Mình Đọc</h1>
    <p className="text-center mt-3 text-lg">Bà con cứ đọc từ từ, chỗ nào chưa hiểu thì nhắn Zalo cho em, em giải thích thêm ạ.</p>
    <div className="grid md:grid-cols-2 gap-5 mt-8">{BAI_VIET.map(b=>(<Link key={b.slug} href={`/blog/${b.slug}`} className="border rounded-2xl p-5 hover:shadow-md block"><p className="text-sm text-gray-500">{b.ngay} - Từ khóa: {b.tuKhoa}</p><h2 className="text-xl font-bold mt-2 leading-snug">{b.tieuDe}</h2><p className="mt-2 text-gray-700 leading-relaxed">{b.moTa}</p><p className="mt-3 text-blue-700 font-bold">Đọc bài này ạ →</p></Link>))}</div>
    <p className="text-center mt-8"><a href="/" className="underline text-blue-700">Quay về trang chủ ạ</a></p>
   
  </main>
  <div className="w-full py-5 text-center text-xs text-white/80 border-t border-white/15 bg-[#073A7D] px-4">
  <p>© {new Date().getFullYear()} Đại lý thu BHXH, BHYT tại xã Tiến Thắng - Bảo hiểm xã hội cơ sở Mê Linh</p>
  <p className="mt-1.5">
    {CONTACT.diaChiNgan}
    {' '}•{' '}
    Zalo / Gọi: <a href={`tel:${CONTACT.zalo}`} className="underline font-bold text-white">{CONTACT.zaloDisplay}</a>
    {' '}•{' '}
    <a href={`https://zalo.me/${CONTACT.zalo}`} target="_blank" rel="noopener noreferrer" className="underline font-bold text-white">Nhắn Zalo cho em Thắm</a>
  </p>
  <p className="mt-1.5 text-white/60">
    Từ 01.01.2027 mức chuẩn nghèo lên 2.200.000đ - Bà con bấm vào trang Tính Lương Hưu để tính thử mức mới ạ.
  </p>
  <p className="mt-1.5">
    Thiết kế bởi <a href="https://longwebstudio.io.vn" target="_blank" rel="noopener noreferrer" className="underline">Long Web Studio</a>
  </p>
</div>
  
  </>);
}
