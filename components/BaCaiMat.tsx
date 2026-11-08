import { BA_CAI_MAT } from "../data/content";
export default function BaCaiMat() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#0B4AA2]">3 Cái Mất Lớn Nhất Khi Để Thẻ Hết Hạn</h2>
      <div className="grid md:grid-cols-3 gap-5 mt-8">
        {BA_CAI_MAT.map((item, i) => (
          <div key={i} className="border rounded-2xl p-5 bg-white shadow-sm">
            <h3 className="text-xl font-bold">{item.tieuDe}</h3>
            <p className="mt-2 text-lg leading-relaxed">{item.noiDung}</p>
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-lg font-medium">Thế nên bà con cứ để em nhắc cho, em ghi nhớ thay bà con, đến hạn là em nhắn ạ.</p>
    </section>
  );
}
