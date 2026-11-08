import { CONTACT } from "../../config/contact";
import { FAQ_BHYT } from "../../data/bhyt";
import TinhTienBHYT from "../../components/TinhTienBHYT";
import FormNhacHan from "../../components/FormNhacHan";
export const metadata = { title: "Gia Hạn BHYT Mê Linh - Nhanh, Uy Tín | Chị Thắm Bưu Điện", description: "Gia hạn BHYT ở Mê Linh chỉ mất 5 phút, biên lai gửi về Zalo ngay. Chị Thắm nhắc hạn miễn phí cho cả nhà, để bà con không mất mốc 5 năm liên tục ạ." };
export default function BHYTPage() {
  return (<main className="min-h-screen bg-white">
    <div className="bg-[#0B4AA2] text-white py-12 px-4 text-center"><h1 className="text-3xl md:text-4xl font-bold">Gia Hạn BHYT Mê Linh - Nhanh Chóng, Uy Tín</h1><p className="mt-4 text-lg max-w-3xl mx-auto">Bà con ơi, thẻ BHYT sắp hết hạn thì đừng để quá 90 ngày nhé, quá là mất mốc 5 năm liên tục, uổng lắm ạ. Cứ để em Thắm nhắc cho, em làm online 5 phút là xong ạ.</p><a href="#form-nhac-han" className="inline-block mt-6 bg-green-600 px-8 py-3 rounded-full font-bold">Đăng ký nhắc hạn - Miễn phí ạ</a></div>
    <TinhTienBHYT />
    <section className="max-w-5xl mx-auto px-4 pb-6"><h2 className="text-2xl font-bold text-[#0B4AA2] text-center">3 Cái Mất Lớn Nhất Khi Để Thẻ Hết Hạn</h2><div className="grid md:grid-cols-3 gap-4 mt-6"><div className="border rounded-2xl p-5"><h3 className="font-bold text-lg">1. Mất tiền viện phí</h3><p className="mt-2">Có thẻ thì Nhà nước hỗ trợ 80% - 100%, hết thẻ thì mình tự trả hết, có khi lên đến hàng chục triệu đấy ạ.</p></div><div className="border rounded-2xl p-5"><h3 className="font-bold text-lg">2. Mất mốc 5 năm liên tục</h3><p className="mt-2">Quá hạn trên 90 ngày là bị xóa hết thời gian tích lũy trước đấy, lại phải đóng lại từ đầu ạ.</p></div><div className="border rounded-2xl p-5"><h3 className="font-bold text-lg">3. Phải chờ 30 ngày</h3><p className="mt-2">Đóng muộn là phải chờ đủ 30 ngày thẻ mới dùng lại được, trong 30 ngày đấy nhà mình không được bảo vệ gì cả ạ.</p></div></div></section>
    <FormNhacHan />
    <section className="max-w-4xl mx-auto pb-12 px-4"><h2 className="text-2xl font-bold text-[#0B4AA2] text-center">5 Câu Bà Con Hay Hỏi Em Nhất Về BHYT</h2><div className="mt-6 space-y-3">{FAQ_BHYT.map((f,i)=>(<details key={i} className="border rounded-xl p-4"><summary className="font-bold cursor-pointer">{f.hoi}</summary><p className="mt-2 text-lg leading-relaxed">{f.dap}</p></details>))}</div><div className="text-center mt-8"><a href="/" className="underline text-blue-700">Quay về trang chủ ạ</a> <span className="mx-2">|</span> <a href="/bhxh" className="underline text-blue-700">Sang trang BHXH để có lương hưu ạ</a></div></section>
  </main>);
}
