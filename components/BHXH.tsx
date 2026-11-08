import { CONTACT } from "../config/contact";
export default function BHXH() {
  return (
    <section id="bhxh" className="py-12 px-4 bg-yellow-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0B4AA2]">Tôi Muốn Đóng BHXH Để Có Lương Hưu</h2>
        <p className="mt-3 text-lg leading-relaxed">Bà con ơi, đóng BHXH tự nguyện là để sau này mình có lương hưu hàng tháng, với được cấp thẻ BHYT miễn phí đấy ạ. Bà con đóng bao nhiêu, hưởng bấy nhiêu, không lo mất đâu ạ.</p>
        <p className="mt-3 text-lg">Bà con cứ nhắn Zalo cho em, em tính giúp bà con xem đóng mức nào thì sau này lương hưu được bao nhiêu, cho bà con dễ chọn ạ.</p>
        <a href={CONTACT.zaloLink} className="inline-block mt-5 bg-[#0B4AA2] text-white px-8 py-3 rounded-full font-bold">Nhắn Zalo hỏi về BHXH ạ</a>
      </div>
    </section>
  );
}
