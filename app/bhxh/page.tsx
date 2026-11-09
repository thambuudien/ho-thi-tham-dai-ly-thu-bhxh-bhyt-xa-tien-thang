import { CONTACT } from "../../config/contact";
import { MUC_DONG, FAQ_BHXH } from "../../data/bhxh";
export const metadata = { title: "Đóng BHXH Tự Nguyện Để Có Lương Hưu - Chị Thắm Bưu Điện | Mê Linh", description: "Bà con ơi, đóng BHXH tự nguyện ở Bưu điện VHX Tự Lập để sau này có lương hưu hàng tháng với thẻ BHYT miễn phí. Chị Thắm tính giúp bà con mức đóng phù hợp nhất ạ." };
export default function BHXHPage() {
  const MUC_DONG_CU = {
    muc: 330000,
    ghiChu: "Mức tối thiểu áp dụng đến hết 31/12/2026",
  };
  const MUC_DONG = [
    {
      muc: 484000,
      ten: "Mức tối thiểu MỚI - Từ 01/01/2027",
      luongDuKien: "Hưởng lương hưu tối thiểu",
    },
    {
      muc: 1000000,
      ten: "Mức 1.000.000đ - Cho nhà mình muốn hưu cao hơn",
      luongDuKien: "Lương hưu cao hơn mức tối thiểu",
    },
    {
      muc: 2000000,
      ten: "Mức 2.000.000đ - Cho nhà mình muốn hưu khá",
      luongDuKien: "Lương hưu khá, đủ chi tiêu cơ bản",
    },
    {
      muc: 3000000,
      ten: "Mức 3.000.000đ - Cho nhà mình muốn hưu cao",
      luongDuKien: "Lương hưu cao, an nhàn tuổi già",
    },
  ];
  const HO_TRO = [
    {
      nhom: "Hộ nghèo, cận nghèo",
      tyLe: "100%",
      dong: "0 đồng",
    },
    {
      nhom: "Dân tộc thiểu số",
      tyLe: "60%",
      dong: "193.600đ/tháng",
    },
    {
      nhom: "Hội viên CCB, cựu quân nhân tham gia CLB",
      tyLe: "50%",
      dong: "242.000đ/tháng",
    },
    {
      nhom: "Người dân khác",
      tyLe: "40%",
      dong: "290.400đ/tháng",
    },
  ];
  return (<main className="min-h-screen bg-white">
    <div className="bg-[#0B4AA2] text-white py-12 px-4 text-center"><h1 className="text-3xl md:text-4xl font-bold">Đóng BHXH Tự Nguyện Để Sau Này Có Lương Hưu</h1><p className="mt-4 text-lg max-w-3xl mx-auto">Bà con ơi, đóng BHXH tự nguyện là để sau này mình có lương hưu hàng tháng, với được cấp thẻ BHYT miễn phí đấy ạ. Bà con đóng bao nhiêu, hưởng bấy nhiêu, không lo mất đâu ạ.</p><a href={CONTACT.zaloLink} className="inline-block mt-6 bg-yellow-400 text-black px-8 py-3 rounded-full font-bold">Nhắn Zalo hỏi em Thắm ạ</a></div>
    

    <section className="max-w-5xl mx-auto py-10 px-4">
  <h2 className="text-2xl font-bold text-[#0B4AA2] text-center">
    Bà Con Chọn Mức Đóng Nào Thì Hợp Với Nhà Mình?
  </h2>
  {/* MỨC CŨ TRƯỚC 01/01/2027 */}
  <div className="mt-6 border-2 border-dashed border-gray-400 rounded-2xl p-5 bg-gray-50 text-center">
    <p className="text-sm font-bold text-gray-500 uppercase">
      Mức tối thiểu TRƯỚC 01/01/2027 - Để bà con so sánh
    </p>
    <p className="text-3xl font-bold text-gray-600 mt-1 line-through decoration-red-500">
      {MUC_DONG_CU.muc.toLocaleString("vi-VN")}đ / tháng
    </p>
    <p className="mt-1 text-gray-600">
      {MUC_DONG_CU.ghiChu} (Chuẩn nghèo nông thôn cũ: 1.500.000đ)
    </p>
    <p className="mt-2 text-sm text-gray-700">
      Hộ nghèo, cận nghèo: hỗ trợ 100% - Đóng 0đ | Dân tộc thiểu số: hỗ trợ 60% - Đóng 132.000đ |
      CCB, CLB: hỗ trợ 50% - Đóng 165.000đ | Người dân khác: hỗ trợ 40% - Đóng 198.000đ
    </p>
  </div>
  {/* MỨC MỚI */}
  <div className="grid md:grid-cols-2 gap-4 mt-4">
    {MUC_DONG.map((m, i) => (
      <div key={i} className="border rounded-2xl p-5">
        <p className="text-2xl font-bold text-red-600">
          {m.muc.toLocaleString("vi-VN")}đ / tháng
        </p>
        <p className="mt-2 font-medium">{m.ten}</p>
        <p className="mt-1 text-gray-700">Dự kiến: {m.luongDuKien}</p>
      </div>
    ))}
  </div>
  {/* MỤC HỖ TRỢ - GHI RÕ SỐ TIỀN */}
  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-5">
    <h3 className="text-xl font-bold text-[#0B4AA2] text-center">
      Mức Hỗ Trợ Từ 01/01/2027 - Áp Dụng Tại Hà Nội
    </h3>
    <p className="text-center text-sm text-gray-600 mt-1">
      Tính trên mức đóng tối thiểu 484.000đ/tháng
    </p>
    <div className="grid md:grid-cols-2 gap-3 mt-4">
      {HO_TRO.map((h, i) => (
        <div key={i} className="bg-white border rounded-xl p-4">
          <p className="font-bold text-gray-800">{h.nhom}</p>
          <p className="mt-1">
            Được hỗ trợ <span className="font-bold text-blue-700">{h.tyLe}</span> —{" "}
            {h.tyLe === "100%" ? "đóng" : "chỉ đóng"}{" "}
            <span className="font-bold text-red-600 text-lg">{h.dong}</span>
          </p>
        </div>
      ))}
    </div>
  </div>
  <p className="text-center mt-4 text-gray-600">
    Con số trên là để bà con tham khảo thôi ạ. Bà con nhắn Zalo cho em,
    em tính chính xác cho nhà mình ạ.
  </p>
</section>
    <section className="max-w-4xl mx-auto pb-12 px-4"><h2 className="text-2xl font-bold text-[#0B4AA2] text-center">5 Câu Bà Con Hay Hỏi Em Nhất Về BHXH</h2><div className="mt-6 space-y-3">{FAQ_BHXH.map((f,i)=>(<details key={i} className="border rounded-xl p-4"><summary className="font-bold cursor-pointer">{f.hoi}</summary><p className="mt-2 text-lg leading-relaxed">{f.dap}</p></details>))}</div>
    <div className="text-center mt-8 flex flex-col sm:flex-row justify-center gap-4">
  <a href="/" className="inline-block border border-gray-400 hover:bg-gray-100 text-gray-700 font-medium py-2 px-6 rounded-lg transition duration-200">
    Quay về trang chủ
  </a> 
  <a href="/bhyt" className="inline-block border border-blue-600 hover:bg-blue-50 text-blue-600 font-medium py-2 px-6 rounded-lg transition duration-200">
    Sang trang gia hạn BHYT
  </a>
</div>

    </section>
  </main>);
}
