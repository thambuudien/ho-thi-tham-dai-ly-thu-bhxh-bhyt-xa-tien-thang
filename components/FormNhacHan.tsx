"use client";
import { useState } from "react";
import { CONTACT } from "../config/contact";
import { BANG_CHUNG } from "../data/content";
export default function FormNhacHan() {
  const [daGui, setDaGui] = useState(false);
  const [form, setForm] = useState({ hoTen: "", zalo: "", thangHetHan: "", khongNho: false });
  const thangDaChon = form.thangHetHan ? form.thangHetHan.split("-")[1] : "";
const namDaChon = form.thangHetHan ? form.thangHetHan.split("-")[0] : "";
const doiThang = (thangMoi: string) => {
  const nam = namDaChon || new Date().getFullYear().toString();
  if (!thangMoi) return setForm({ ...form, thangHetHan: "" });
  setForm({ ...form, thangHetHan: `${nam}-${thangMoi}` });
};
const doiNam = (namMoi: string) => {
  const thang = thangDaChon || "01";
  if (!namMoi) return setForm({ ...form, thangHetHan: "" });
  setForm({ ...form, thangHetHan: `${namMoi}-${thang}` });
};

  const gui = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Chào chị Thắm, em là ${form.hoTen}, Zalo ${form.zalo}, thẻ BHYT hết hạn tháng ${form.khongNho ? "em không nhớ" : form.thangHetHan}. Nhờ chị nhắc hạn giúp em ạ.`);
    window.open(`${CONTACT.zaloLink}?text=${text}`, "_blank");
    setDaGui(true);
  };
  return (
    <section id="form-nhac-han" className="py-12 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <form onSubmit={gui} className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-bold text-[#0B4AA2]">Đăng Ký Để Em Nhắc Hạn Cho Cả Nhà Mình</h2>
          <p className="mt-2">Bà con điền giúp em mấy dòng này thôi ạ, còn lại để em lo.</p>
          <label className="block mt-4 font-medium">Họ và tên</label>
          <input required value={form.hoTen} onChange={e=>setForm({...form, hoTen:e.target.value})} className="w-full border rounded-lg px-3 py-2 mt-1" placeholder="Ví dụ: Nguyễn Văn A" />
          <label className="block mt-4 font-medium">Số Zalo</label>
          <input required value={form.zalo} onChange={e=>setForm({...form, zalo:e.target.value})} className="w-full border rounded-lg px-3 py-2 mt-1" placeholder="Ví dụ: 0987..." />
          <label className="block mt-4 font-medium">Tháng hết hạn thẻ</label>
          {/* <input type="month" disabled={form.khongNho} value={form.thangHetHan} onChange={e=>setForm({...form, thangHetHan:e.target.value})} className="w-full border rounded-lg px-3 py-2 mt-1" /> */}
          <div>
  <label className="font-bold">Thẻ BHYT của bà con hết hạn tháng nào ạ?</label>
  <div className="flex gap-2 mt-1">
  <select
    disabled={form.khongNho}
    value={thangDaChon}
    onChange={(e) => doiThang(e.target.value)}
    className="flex-1 min-h-[48px] border border-gray-300 rounded-xl px-3 py-2 text-base sm:text-sm bg-white disabled:bg-gray-100 disabled:text-gray-400 appearance-none touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-50"
  >
    <option value="">-- Chọn tháng --</option>
    {Array.from({ length: 12 }, (_, i) => {
      const month = String(i + 1).padStart(2, '0');
      return (
        <option key={month} value={month}>
          Tháng {i + 1}
        </option>
      );
    })}
  </select>

  {/* <select
    disabled={form.khongNho}
    value={namDaChon}
    onChange={(e) => doiNam(e.target.value)}
    className="flex-1 min-h-[48px] border border-gray-300 rounded-xl px-3 py-2 text-base sm:text-sm bg-white disabled:bg-gray-100 disabled:text-gray-400 appearance-none touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-50"
  >
    <option value="">-- Chọn năm --</option>
    {[2026, 2027, 2028, 2029, 2030].map((year) => (
      <option key={year} value={year}>
        Năm {year}
      </option>
    ))}
  </select> */}
</div>
  {form.thangHetHan && !form.khongNho && (
    <p className="text-sm text-green-700 mt-1">
      Bà con đã chọn: Tháng {parseInt(thangDaChon)} năm {namDaChon} ạ.
    </p>
  )}
  {form.khongNho && (
    <p className="text-sm text-gray-500 mt-1">Bà con tick “Tôi không nhớ” rồi thì không cần chọn tháng nữa đâu ạ, em tra giúp bà con ạ.</p>
  )}
</div>

          <label className="flex gap-2 items-center mt-2"><input type="checkbox" checked={form.khongNho} onChange={e=>setForm({...form, khongNho:e.target.checked})} /> Tôi không nhớ</label>
          <button className="w-full mt-5 bg-green-600 text-white py-3 rounded-full font-bold text-lg">Đăng ký nhắc hạn - Miễn phí ạ</button>
          {daGui && <p className="mt-3 text-green-700 font-medium">Em nhận được rồi ạ, em sẽ nhắn Zalo cho bà con ngay ạ.</p>}
          <p className="mt-3 text-sm text-gray-600">Số điện thoại của bà con, em chỉ dùng để nhắc hạn thẻ BHYT thôi ạ.</p>
        </form>
        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-bold">Bà con với báo chí nói gì về em Thắm?</h3>
          <p className="mt-3">{BANG_CHUNG.baoChi} <a 
  className="text-blue-600 font-medium hover:underline hover:text-blue-700 transition-all duration-200" 
  href="https://vietnampost.vn/vi/nguoi-buu-dien/nu-nhan-vien-buu-dien-van-hoa-xa-da-kenh" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Đọc bài viết về Nữ nhân viên Bưu điện Văn hóa xã Đa Kênh
</a>
</p>
          <div className="mt-4 space-y-3">
            {BANG_CHUNG.baCon.map((b,i)=>(<blockquote key={i} className="border-l-4 border-yellow-400 pl-3"><p>{b.noi}</p><cite className="text-sm">- {b.nguoi}</cite></blockquote>))}
          </div>
          <p className="mt-4 text-sm text-gray-600">Đóng xong là bà con nhận được biên lai điện tử như thế này, gửi về Zalo ngay ạ.</p>
          <img src="https://i0.wp.com/hotham.vn/wordpress/wp-content/uploads/sites/30/2026/11/bien-lai-mau.png" alt="Biên lai điện tử mẫu" className="rounded-xl mt-2 w-full" />
        </div>
      </div>
    </section>
  );
}
