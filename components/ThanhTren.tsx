"use client";
import { useState } from "react";
import { CONTACT } from "../config/contact";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU = [
  { href: "/", label: "Trang chủ", icon: "🏠" },
  { href: "/bhxh", label: "BHXH - Lương hưu", icon: "👵" },
  { href: "/bhyt", label: "BHYT - Gia hạn", icon: "💳" },
  { href: "/blog", label: "Blog - Bà con đọc", icon: "📖" },
];

export default function ThanhTren() {
  const [moMenu, setMoMenu] = useState(false);
  const pathname = usePathname();
  const dangChon = (href: string) => pathname === href ? "bg-white text-[#0B4AA2]" : "text-white";

  return (
    <>
      {/* ===== MENU TREN CUNG ===== */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="flex justify-between items-center px-3 py-2 max-w-6xl mx-auto gap-2">
          <Link href="/" className="font-bold text-[#0B4AA2] leading-tight">
            <span className="block text-[15px]">Chị Thắm Bưu Điện</span>
            <span className="block text-[13px] font-normal text-gray-600">{CONTACT.zaloDisplay} - Bưu điện Tự Lập</span>
          </Link>
          <div className="flex items-center gap-2 shrink-0">
            <a href={CONTACT.zaloLink} className="bg-green-600 text-white px-3 py-2.5 rounded-full font-bold text-[14px] whitespace-nowrap">
              💬 Nhắn Zalo
            </a>
            {/* Nut 3 gach - chi hien tren dien thoai */}
            <button onClick={() => setMoMenu(!moMenu)} aria-label="Mở menu" className="md:hidden w-11 h-11 flex flex-col justify-center items-center gap-[5px] bg-[#0B4AA2] rounded-lg">
              <span className="block w-5 h-[2.5px] bg-white rounded" />
              <span className="block w-5 h-[2.5px] bg-white rounded" />
              <span className="block w-5 h-[2.5px] bg-white rounded" />
            </button>
          </div>
        </div>

        {/* Menu tren may tinh - hien ngang */}
        <nav className="hidden md:block bg-[#0B4AA2]">
          <div className="max-w-6xl mx-auto flex gap-1 px-2">
            {MENU.map((m) => (
              <Link key={m.href} href={m.href} className={`px-5 py-3 font-bold rounded-t-lg ${dangChon(m.href)} hover:bg-white/20`}>
                {m.icon} {m.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Menu tren dien thoai - bam 3 gach moi mo ra, to, de bam */}
        {moMenu && (
          <nav className="md:hidden bg-[#0B4AA2] px-3 pb-3">
            {MENU.map((m) => (
              <Link key={m.href} href={m.href} onClick={() => setMoMenu(false)} className={`flex items-center gap-3 px-4 py-4 text-[17px] font-bold rounded-xl mb-1 ${pathname === m.href ? "bg-white text-[#0B4AA2]" : "text-white bg-white/10"}`}>
                <span className="text-[22px]">{m.icon}</span> {m.label}
                <span className="ml-auto">›</span>
              </Link>
            ))}
            <p className="text-center text-white/80 text-[13px] mt-2">Bà con bấm vào mục nào là nó mở ra ngay ạ.</p>
          </nav>
        )}
      </header>

      {/* ===== MENU DUOI CUNG - CHI HIEN TREN DIEN THOAI ===== */}
      {/* Ba con minh quen bam o duoi hon, ngon tay cai voi toi de nhat */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-[0_-2px_10px_rgba(0,0,0,0.1)] pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-5">
          {MENU.map((m) => (
            <Link key={m.href} href={m.href} className={`flex flex-col items-center py-2 text-[11px] leading-tight ${pathname === m.href ? "text-[#0B4AA2] font-bold" : "text-gray-600"}`}>
              <span className="text-[22px]">{m.icon}</span>
              <span className="mt-0.5">{m.label.split(" - ")[0]}</span>
            </Link>
          ))}
          <a href={CONTACT.zaloLink} className="flex flex-col items-center py-2 text-[11px] leading-tight text-green-700 font-bold">
            <span className="text-[22px]">💬</span>
            <span className="mt-0.5">Zalo</span>
          </a>
        </div>
      </nav>
      {/* Dem de noi dung khong bi menu duoi che mat - nho them pb-20 vao <main> neu chua co */}
      <div className="md:hidden h-[2px]" />
    </>
  );
}
