"use client";
import { useState } from "react";
const GIA = [1366200, 1065600, 917400, 765000, 612000, 612000, 612000];
export default function TinhTienBHYT() {
  const [soNguoi, setSoNguoi] = useState(1);
  const tong = GIA.slice(0, soNguoi).reduce((a, b) => a + b, 0);
  return (
    <section className="py-10 px-4">
      <div className="max-w-4xl mx-auto bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Bà con tự tính tiền BHYT hộ gia đình trong 10 giây</h2>
        <p className="text-center mt-2 text-lg">Nhà mình có mấy người cùng tham gia, bà con chọn số người ở đây, web nó tự tính ra tổng tiền phải đóng, không phải hỏi ai cả đâu ạ.</p>
        <div className="flex justify-center gap-2 flex-wrap mt-5">
          {[1,2,3,4,5,6,7].map(n => (
            <button key={n} onClick={() => setSoNguoi(n)} className={soNguoi===n ? "bg-[#0B4AA2] text-white px-4 py-2 rounded-full font-bold" : "bg-white border px-4 py-2 rounded-full"}>{n} người</button>
          ))}
        </div>
        <p className="text-center mt-6 text-lg">Tổng tiền phải đóng (12 tháng):</p>
        <p className="text-center text-4xl font-bold text-red-600">{tong.toLocaleString("vi-VN")}đ</p>
        <p className="text-center mt-3">Giá này là giá Nhà nước quy định đấy ạ, em không thu thêm phí gì cả. Bà con đóng bao nhiêu, biên lai ghi đúng bấy nhiêu ạ.</p>
      </div>
    </section>
  );
}
