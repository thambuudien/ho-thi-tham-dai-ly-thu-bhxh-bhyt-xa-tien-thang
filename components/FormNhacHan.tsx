"use client";
import { useState } from "react";
import { BANG_CHUNG } from "../data/content";

type FormState = {
  fullName: string;
  birthDate: string;
  bhxhCccd: string;
  phoneNumber: string;
  thangHetHan: string; // YYYY-MM
  khongNho: boolean;
};

export default function FormNhacHan() {
  const [daGui, setDaGui] = useState(false);
  const [dangGui, setDangGui] = useState(false);
  const [loi, setLoi] = useState("");
  const [form, setForm] = useState<FormState>({
    fullName: "",
    birthDate: "",
    bhxhCccd: "",
    phoneNumber: "",
    thangHetHan: "",
    khongNho: false,
  });

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

  const gui = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoi("");
    setDangGui(true);

    const cardExpiryHint = form.khongNho
      ? "Không nhớ"
      : form.thangHetHan
      ? `Tháng ${parseInt(thangDaChon)} năm ${namDaChon}`
      : "";

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          birthDate: form.birthDate,
          bhxhCccd: form.bhxhCccd,
          phoneNumber: form.phoneNumber,
          cardExpiryHint,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.errors?.[0]?.message || "Gửi không thành công, bà con thử lại giúp em ạ.");
      }

      setDaGui(true);
    } catch (err: any) {
      setLoi(err.message || "Có lỗi, bà con thử lại giúp em ạ.");
    } finally {
      setDangGui(false);
    }
  };

  return (
    <section id="form-nhac-han" className="py-12 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {/* CỘT TRÁI - FORM */}
        <form onSubmit={gui} className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-bold text-[#0B4AA2]">
            Đăng Ký Để Em Nhắc Hạn Cho Cả Nhà Mình
          </h2>
          <p className="mt-2">Bà con điền giúp em mấy dòng này thôi ạ, còn lại để em lo.</p>

          {/* 1. Họ và tên */}
          <label className="block mt-4 font-medium">Họ và tên *</label>
          <input
            required
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 mt-1"
            placeholder="Ví dụ: Nguyễn Văn A"
          />

          {/* 2. Ngày sinh */}
          <label className="block mt-4 font-medium">Ngày sinh *</label>
          <input
            required
            type="date"
            value={form.birthDate}
            onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />

          {/* 3. Mã BHXH / CCCD */}
          <label className="block mt-4 font-medium">Số CCCD *</label>
          <input
            required
            value={form.bhxhCccd}
            onChange={(e) => setForm({ ...form, bhxhCccd: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 mt-1"
            placeholder="Ví dụ: 0123456789"
            inputMode="numeric"
          />

          {/* 4. Số Zalo */}
          <label className="block mt-4 font-medium">Số Zalo *</label>
          <input
            required
            value={form.phoneNumber}
            onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 mt-1"
            placeholder="Ví dụ: 0987..."
            inputMode="tel"
          />

          {/* Tháng hết hạn - không bắt buộc */}
          <div className="mt-4">
            <label className="font-medium">Thẻ BHYT của bà con hết hạn tháng nào ạ?</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1 min-w-0">
  <select
    disabled={form.khongNho}
    value={thangDaChon}
    onChange={(e) => doiThang(e.target.value)}
    className="w-full min-w-0 min-h- border border-gray-300 rounded-xl px-3 py-2 text-base sm:text-sm bg-white disabled:bg-gray-100 disabled:text-gray-400 appearance-none touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-50 truncate"
  >
    <option value="">-- Chọn tháng --</option>
    {Array.from({ length: 12 }, (_, i) => {
      const month = String(i + 1).padStart(2, "0");
      return (
        <option key={month} value={month}>
          Tháng {i + 1}
        </option>
      );
    })}
  </select>

  <select
    disabled={form.khongNho}
    value={namDaChon}
    onChange={(e) => doiNam(e.target.value)}
    className="w-full min-w-0 min-h- border border-gray-300 rounded-xl px-3 py-2 text-base sm:text-sm bg-white disabled:bg-gray-100 disabled:text-gray-400 appearance-none touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-50 truncate"
  >
    <option value="">-- Chọn năm --</option>
    {[2026, 2027, 2028, 2029, 2030].map((year) => (
      <option key={year} value={year}>
        Năm {year}
      </option>
    ))}
  </select>
</div>

            {form.thangHetHan && !form.khongNho && (
              <p className="text-sm text-green-700 mt-1">
                Bà con đã chọn: Tháng {parseInt(thangDaChon)} năm {namDaChon} ạ.
              </p>
            )}
            {form.khongNho && (
              <p className="text-sm text-gray-500 mt-1">
                Bà con tick “Tôi không nhớ” rồi thì không cần chọn tháng nữa đâu ạ, em tra giúp bà con ạ.
              </p>
            )}
          </div>

          <label className="flex gap-2 items-center mt-2">
            <input
              type="checkbox"
              checked={form.khongNho}
              onChange={(e) => setForm({ ...form, khongNho: e.target.checked })}
            />
            Tôi không nhớ
          </label>

          <button
            disabled={dangGui}
            className="w-full mt-5 bg-green-600 text-white py-3 rounded-full font-bold text-lg disabled:opacity-60"
          >
            {dangGui ? "Đang gửi..." : "Đăng ký nhắc hạn - Miễn phí ạ"}
          </button>

          {loi && <p className="mt-3 text-red-600 font-medium">{loi}</p>}
          {daGui && (
            <p className="mt-3 text-green-700 font-medium">
              Em nhận được rồi ạ, em sẽ nhắn Zalo cho bà con ngay ạ.
            </p>
          )}
          <p className="mt-3 text-sm text-gray-600">
            Số điện thoại của bà con, em chỉ dùng để nhắc hạn thẻ BHYT thôi ạ.
          </p>
        </form>

        {/* CỘT PHẢI - BẰNG CHỨNG */}
        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-bold">Bà con với báo chí nói gì về chị Thắm?</h3>
          <p className="mt-3">
            {BANG_CHUNG.baoChi}{" "}
            <a
              className="text-blue-600 font-medium hover:underline hover:text-blue-700 transition-all duration-200"
              href="https://vietnampost.vn/vi/nguoi-buu-dien/nu-nhan-vien-buu-dien-van-hoa-xa-da-kenh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Đọc bài viết về Nữ nhân viên Bưu điện Văn hóa xã Đa Kênh
            </a>
          </p>
          <div className="mt-4 space-y-3">
            {BANG_CHUNG.baCon.map((b, i) => (
              <blockquote key={i} className="border-l-4 border-yellow-400 pl-3">
                <p>{b.noi}</p>
                <cite className="text-sm">- {b.nguoi}</cite>
              </blockquote>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Đóng xong là bà con nhận được biên lai điện tử như thế này, gửi về Zalo ngay ạ.
          </p>
          <img
            src="https://i0.wp.com/hotham.vn/wordpress/wp-content/uploads/sites/30/2026/11/bien-lai-mau.png"
            alt="Biên lai điện tử mẫu"
            className="rounded-xl mt-2 w-full"
          />
          {/* LINK SANG CÔNG CỤ TÍNH BHYT */}
<div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl p-4">
  <p className="font-bold text-[#0B4AA2]">
    Bà con chưa biết nhà mình đóng bao nhiêu?
  </p>
  <p className="mt-1 text-sm text-gray-700">
    Bấm vào đây để tự tính tiền BHYT hộ gia đình trong 10 giây, đúng giá Nhà nước ạ.
  </p>
  <a
    href="/tinh-muc-dong-bhyt"
    className="inline-block mt-3 bg-[#0B4AA2] hover:bg-blue-800 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all"
  >
    Tính tiền BHYT nhà mình →
  </a>
</div>
        </div>
      </div>
    </section>
  );
}