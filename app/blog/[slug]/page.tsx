import { BAI_VIET } from "../../../data/blog";
import { CONTACT } from "../../../config/contact";
import Link from "next/link";
export function generateStaticParams() { return BAI_VIET.map(b=>({ slug: b.slug })); }
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const bai = BAI_VIET.find(b=>b.slug===params.slug);
  return { title: bai ? bai.tieuDe + " | Chị Thắm Bưu Điện" : "Blog Chị Thắm", description: bai?.moTa };
}
export default function BaiVietPage({ params }: { params: { slug: string } }) {
  const bai = BAI_VIET.find(b=>b.slug===params.slug);
  if (!bai) return <main className="p-10 text-center">Bà con ơi, bài này em chưa viết xong ạ. Bà con nhắn Zalo cho em nhé.</main>;
  return (<><main className="min-h-screen bg-white max-w-3xl mx-auto py-12 px-4">
    <Link href="/blog" className="text-blue-700 underline">← Quay lại danh sách bài viết ạ</Link>
    <p className="mt-6 text-sm text-gray-500">{bai.ngay} - Chị Thắm Bưu Điện viết ạ</p>
    <h1 className="text-3xl md:text-4xl font-bold leading-snug mt-2">{bai.tieuDe}</h1>
    <p className="mt-4 text-lg text-gray-700 italic">{bai.moTa}</p>
    <div className="mt-6 space-y-4">{bai.noiDung.map((p,i)=>(<p key={i} className="text-lg leading-relaxed">{p}</p>))}</div>
    <div className="mt-8 bg-blue-50 rounded-2xl p-5 text-center"><p className="font-bold text-lg">Bà con chưa hiểu chỗ nào, cứ nhắn em nhé</p><p className="mt-1">Zalo của em: {CONTACT.zaloDisplay} - Em trả lời trực tiếp ạ.</p><a href={CONTACT.zaloLink} className="inline-block mt-3 bg-green-600 text-white px-6 py-2 rounded-full font-bold">Nhắn Zalo cho em</a></div>
    <div className="mt-8"><h2 className="font-bold text-xl">Bà con đọc thêm ạ:</h2><div className="mt-3 space-y-2">{BAI_VIET.filter(b=>b.slug!==bai.slug).slice(0,3).map(b=>(<Link key={b.slug} href={`/blog/${b.slug}`} className="block underline text-blue-700">{b.tieuDe}</Link>))}</div></div>
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
