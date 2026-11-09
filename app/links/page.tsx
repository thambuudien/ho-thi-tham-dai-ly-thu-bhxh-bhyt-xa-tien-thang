'use client';

import { Bell, Calculator, Award, Phone, ShieldCheck, MapPin } from 'lucide-react';
import { AGENT_CONFIG } from '@/config/agent';

export default function LinkInBioPage() {
  const zaloLink = `https://zalo.me/${AGENT_CONFIG.contact.zaloNumber}`;

  // Link logo chị gửi - em dùng trực tiếp link này luôn ạ
  const logoUrl = "https://i0.wp.com/hotham.vn/wordpress/wp-content/uploads/sites/30/2024/10/logo.png";

  const actionLinks = [
    {
      href: '/#form-nhac-han',
      title: 'Đăng Ký Nhắc Hạn Thẻ BHYT',
      subtitle: 'Để lại thông tin, em nhắc bà con trước 15 ngày, để bà con không bị quá hạn ạ.',
      icon: <Bell className="w-6 h-6 text-amber-500" />,
      colorBorder: 'hover:border-amber-400 focus:ring-amber-500',
    },
    {
      href: '/tinh-muc-dong-bhyt',
      title: 'Tính Tiền Đóng BHYT Hộ Gia Đình',
      subtitle: 'Bà con tự tính tiền 3 - 6 - 12 tháng, nhà càng đông càng được giảm nhiều ạ.',
      icon: <Calculator className="w-6 h-6 text-emerald-500" />,
      colorBorder: 'hover:border-emerald-400 focus:ring-emerald-500',
    },
    {
      href: '/tinh-luong-huu-bhxh',
      title: 'Dự Tính Tiền Lương Hưu BHXH',
      subtitle: 'Theo Luật mới, đóng đủ 15 năm là có lương hưu hàng tháng rồi ạ.',
      icon: <Award className="w-6 h-6 text-blue-500" />,
      colorBorder: 'hover:border-blue-400 focus:ring-blue-500',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B4AA2] text-white font-sans flex flex-col justify-between antialiased">
      <main className="w-full max-w-md mx-auto px-4 pt-10 pb-6 flex-1 flex flex-col justify-center items-center">
        <div className="text-center space-y-2 mb-8">
          {/* LOGO CỦA CHỊ - Thay ô chữ T cũ bằng ảnh logo thật ạ */}
          <div className="w-24 h-24 rounded-full bg-white p-1.5 shadow-lg mx-auto overflow-hidden flex items-center justify-center">
            <img
              src={logoUrl}
              alt="Logo Chị Thắm Bưu Điện - Hồ Thị Thắm"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-xl font-black tracking-tight uppercase">
              Đại Lý Bưu Điện {AGENT_CONFIG.agentName}
            </h1>
            <p className="text-sm text-yellow-300 font-medium">
              {AGENT_CONFIG.agentTitle}
            </p>
          </div>
          <p className="text-sm text-white/80 max-w-xs mx-auto leading-relaxed pt-1">
            Cổng tiện ích tra cứu và đăng ký dịch vụ an sinh xã hội trực tuyến dành cho bà con xã Tiến Thắng ạ.
          </p>
        </div>

        <div className="w-full space-y-3.5">
          {actionLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className={`w-full p-4 bg-white rounded-2xl flex gap-3.5 items-start text-left transition-all hover:bg-yellow-50 active:scale-[0.99] focus:outline-none focus:ring-2 ${link.colorBorder}`}
            >
              <div className="p-2.5 bg-blue-50 rounded-xl shrink-0">{link.icon}</div>
              <div className="space-y-0.5 flex-1 min-w-0">
                <h2 className="text-base font-bold text-slate-900">{link.title}</h2>
                <p className="text-sm text-slate-600 leading-normal line-clamp-2">{link.subtitle}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="w-full mt-6 pt-5 border-t border-white/20 space-y-3">
          <a
            href={zaloLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 rounded-xl text-base text-center flex items-center justify-center gap-2 shadow-md"
          >
            <Phone className="w-5 h-5" /> Nhắn Zalo cho em Thắm ạ - {AGENT_CONFIG.contact.zaloNumber}
          </a>
          <div className="text-sm text-white/80 space-y-1.5 px-1">
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" /> {AGENT_CONFIG.serviceArea}</p>
            <p className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 shrink-0" /> Điểm thu bảo hiểm ủy quyền chính thức của Bưu điện ạ</p>
          </div>
        </div>
      </main>

      <footer className="w-full py-4 text-center text-xs text-white/60 border-t border-white/10 bg-black/10">
        <p>© 2026 Đại lý BHYT {AGENT_CONFIG.agentName}</p>
        <p>Thiết kế bởi <a href="https://longwebstudio.io.vn" target="_blank" rel="noopener noreferrer" className="underline">Long Web Studio</a></p>
      </footer>
    </div>
  );
}