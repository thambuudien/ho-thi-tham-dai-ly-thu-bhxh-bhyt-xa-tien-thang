'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AGENT_CONFIG } from '@/config/agent';
import { Phone, Home, Calculator, Award } from 'lucide-react';

export default function HeaderBanner() {
  const pathname = usePathname();

  const navigationRoutes = [
    {
      path: '/',
      label: 'Trang Chủ Nhắc Hạn',
      icon: <Home className="w-3.5 h-3.5" />,
    },
    {
      path: '/tinh-muc-dong-bhyt',
      label: 'Tính Phí BHYT Gia Đình',
      icon: <Calculator className="w-3.5 h-3.5" />,
    },
    {
      path: '/tinh-luong-huu-bhxh',
      label: 'Tính Lương Hưu BHXH',
      icon: <Award className="w-3.5 h-3.5" />,
    },
  ];

  // Số để gọi điện - ưu tiên phoneNumber, nếu không có thì dùng zaloNumber
  const phoneNumber = (AGENT_CONFIG.contact as any).phoneNumber || AGENT_CONFIG.contact.zaloNumber;

  return (
    <header className="w-full bg-white border-b border-slate-200 font-sans">
      {/* 1. DẢI BANNER TIÊU ĐỀ */}
      <div className="bg-amber-500 text-white text- py-1.5 px-4">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-1">
          <p className="font-bold tracking-wide uppercase">{AGENT_CONFIG.subHeader}</p>
          <p className="opacity-95 font-light text-center sm:text-right">
            Địa chỉ: <span className="font-semibold">{AGENT_CONFIG.serviceArea}</span>
          </p>
        </div>
      </div>

      {/* Dải thông báo mức chuẩn nghèo mới - Bấm vào sang trang tính lương hưu */}
      <Link
        href="/tinh-luong-huu-bhxh"
        className="block bg-emerald-50 border-b border-emerald-100 text-emerald-900 text- sm:text-xs py-2 px-4 text-center hover:bg-emerald-100 transition"
      >
        📢 Từ <b>01.01.2027</b> mức chuẩn nghèo lên <b>2.200.000đ</b> - Mức đóng thấp nhất + tiền hỗ trợ đều tăng lên - <b>Bấm vào đây để tính thử mức mới →</b>
      </Link>

      {/* 2. ĐIỀU HƯỚNG CHÍNH */}
      <div className="container mx-auto max-w-7xl px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 group shrink-0 text-center md:text-left"
        >
          <div className="relative w-9 h-9 overflow-hidden rounded-xl shadow-sm border border-slate-100 group-hover:scale-105 transition-transform duration-150 bg-slate-50 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Logo VNPost"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-slate-900 font-black text-sm tracking-tight uppercase group-hover:text-blue-700 transition-colors">
              {AGENT_CONFIG.agentName}
            </h1>
            <p className="text-xs text-slate-400 font-medium tracking-wide">
              {AGENT_CONFIG.agentTitle}
            </p>
          </div>
        </Link>

        <nav className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 text-xs">
          {navigationRoutes.map((route) => {
            const isActive = pathname === route.path;
            return (
              <Link
                key={route.path}
                href={route.path}
                aria-current={isActive ? 'page' : undefined}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all duration-150 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border border-blue-200/60 shadow-sm'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50 border border-transparent'
                }`}
              >
                {route.icon}
                <span>{route.label}</span>
              </Link>
            );
          })}

          {/* HOTLINE GỌI NHANH - Đã sửa dùng đúng số điện thoại */}
          <a
            href={`tel:${phoneNumber}`}
            className="md:ml-2 inline-flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text- font-black uppercase tracking-wide py-1.5 px-3 rounded-xl shadow transition duration-150 shrink-0"
          >
            <Phone className="w-3 h-3 animate-pulse" />
            <span>Gọi: {AGENT_CONFIG.contact.phoneDisplay}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}