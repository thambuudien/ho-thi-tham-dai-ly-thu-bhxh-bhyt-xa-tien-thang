import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(AGENT_CONFIG.contact.website || "https://www.hotham.vn"),
  title: {
    default: AGENT_CONFIG.seo.homeTitle,
    template: `%s | Dai Ly Buu Dien ${AGENT_CONFIG.agentName}`,
  },
  description: AGENT_CONFIG.seo.homeDesc,
  keywords: ["gia han BHYT Me Linh", "dong BHXH tu nguyen", "Chi Tham Buu Dien"],
  robots: { index: true, follow: true },
  // Đưa viewport vào trong metadata để tương thích với Next.js cũ
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B4AA2" },
    { media: "(prefers-color-scheme: dark)", color: "#0B4AA2" },
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: AGENT_CONFIG.contact.website || "https://www.hotham.vn",
    siteName: `Dai Ly Buu Dien ${AGENT_CONFIG.agentName}`,
    title: AGENT_CONFIG.seo.homeTitle,
    description: AGENT_CONFIG.seo.homeDesc,
    images: [{ url: "/images/chi-tham.jpg", width: 1200, height: 630, alt: "Chi Tham Buu Dien" }],
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  appleWebApp: { capable: true, statusBarStyle: "default", title: "Bao Hiem Chi Tham" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable} font-sans text-[15px] md:text-[16px] font-medium leading-relaxed antialiased bg-slate-50`}>
        {children}
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}