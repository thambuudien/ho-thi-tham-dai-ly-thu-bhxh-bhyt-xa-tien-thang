import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { AGENT_CONFIG } from "@/config/agent";
import { GoogleAnalytics } from "@next/third-parties/google";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam",
  display: "swap",
});

// 1. Viewport tach rieng - theo chuan Next.js moi, de dien thoai khong bi phong to / thu nho lung tung
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // De ba con lon tuoi phong to chu len doc duoc - dung de maximumScale=1, ba con khong phong to duoc la kho doc lam a
  themeColor: "#0B4AA2", // Mau xanh buu dien hien tren thanh trinh duyet dien thoai
};

export const metadata: Metadata = {
  metadataBase: new URL(AGENT_CONFIG.contact.website || "https://www.hotham.vn"),
  title: {
    default: AGENT_CONFIG.seo.homeTitle,
    template: `%s | Dai Ly Buu Dien ${AGENT_CONFIG.agentName}`,
  },
  description: AGENT_CONFIG.seo.homeDesc,
  keywords: ["gia han BHYT Me Linh", "dong BHXH tu nguyen", "Chi Tham Buu Dien", "BHYT ho gia dinh", "buu dien VHX Tu Lap"],
  authors: [{ name: AGENT_CONFIG.agentName }],
  creator: AGENT_CONFIG.agentName,
  robots: { index: true, follow: true },
  // 2. Them Open Graph de khi ba con chia se link len Zalo / Facebook no hien anh + tieu de dep, khong bi trang tron
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: AGENT_CONFIG.contact.website || "https://www.hotham.vn",
    siteName: `Dai Ly Buu Dien ${AGENT_CONFIG.agentName}`,
    title: AGENT_CONFIG.seo.homeTitle,
    description: AGENT_CONFIG.seo.homeDesc,
    images: [{ url: "/images/chi-tham.jpg", width: 1200, height: 630, alt: "Chi Tham Buu Dien - Ho Thi Tham" }],
  },
  // 3. Them icons - de khi ba con luu web ve man hinh chinh dien thoai no hien logo, khong bi mat icon
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bao Hiem Chi Tham",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // GA: Chi lay tu .env, KHONG de ma cung trong code nua - de lo ma cung ra la nguoi ta dung chua duoc dau a
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="vi">
      <body
        className={`${beVietnamPro.variable} font-sans text-[15px] md:text-[16px] font-medium leading-relaxed antialiased bg-slate-50`}
        // Them pb cho menu duoi tren mobile - de noi dung khong bi menu duoi che mat
        // Neu page nao da co pb-24 roi thi khong can them o day nua
      >
        {children}
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
