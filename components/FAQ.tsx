"use client";
import { useState } from "react";
import { FAQ as DATA } from "../data/content";
export default function FAQ() {
  const [mo, setMo] = useState<number | null>(0);
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#0B4AA2]">5 Câu Bà Con Hay Hỏi Em Nhất</h2>
      <div className="mt-6 space-y-3">
        {DATA.map((item, i) => (
          <div key={i} className="border rounded-xl overflow-hidden">
            <button onClick={()=>setMo(mo===i?null:i)} className="w-full text-left px-4 py-3 font-bold bg-white flex justify-between"><span>{item.hoi}</span><span>{mo===i?"-":"+"}</span></button>
            {mo===i && <p className="px-4 pb-4 text-lg leading-relaxed bg-blue-50">{item.dap}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
