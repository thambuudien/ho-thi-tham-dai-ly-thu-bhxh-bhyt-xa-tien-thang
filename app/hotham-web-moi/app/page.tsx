import ThanhTren from "../components/ThanhTren";
import Hero from "../components/Hero";
import GioiThieu from "../components/GioiThieu";
import TinhTienBHYT from "../components/TinhTienBHYT";
import BaCaiMat from "../components/BaCaiMat";
import FormNhacHan from "../components/FormNhacHan";
import FAQ from "../components/FAQ";
import BHXH from "../components/BHXH";
import Footer from "../components/Footer";
export const metadata = {
  title: "Chị Thắm Bưu Điện - Gia Hạn BHYT, Đóng BHXH Tự Nguyện | Mê Linh, Hà Nội",
  description: "Chị Thắm Bưu Điện đây ạ - Đại lý thu BHXH, BHYT mã 0129BD0729 ở Bưu điện VHX Tự Lập. Đăng ký một lần, em nhắc hạn BHYT cho cả nhà, miễn phí. Đóng online 5 phút, biên lai gửi về Zalo ngay ạ.",
};
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ThanhTren />
      <Hero />
      <GioiThieu />
      <TinhTienBHYT />
      <BaCaiMat />
      <FormNhacHan />
      <FAQ />
      <BHXH />
      <Footer />
      <a href="https://zalo.me/0978333963" className="fixed bottom-4 right-4 z-50 bg-green-600 text-white px-5 py-3 rounded-full font-bold shadow-lg">Nhắn Zalo cho em</a>
    </main>
  );
}
