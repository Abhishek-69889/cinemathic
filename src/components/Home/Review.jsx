import React from 'react'

const Review = () => {
  return (
    <section id="reviews" className="border-t border-black/10 bg-white">
        <div className="max-w-300 mx-auto px-6 py-20">
          <div className="flex justify-between items-end">
            <div className=" uppercase tracking-[0.2em] text-yellow-600 text-md ">Words from Students</div>
            <div className="serif text-[18px]">4.9/5 from 800+ students</div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              {q:'Sir made calculus feel like a movie plot twist. Finally scored 97 in boards.', n:'Ananya Sharma', d:'Class 12 • 97% Boards'},
              {q:'No formula ratta. He taught why integration works. Cracked JEE Advanced.', n:'Rohan Mehta', d:'AIR 342 • IIT Bombay'},
              {q:'Best maths teacher for intuition. DPPs are exactly JEE level.', n:'Kavya Singh', d:'Class 11 • NTSE Scholar'},
              {q:'From 60 to 92 in 4 months. Cinemathic lives up to its name.', n:'Aditya Verma', d:'Class 12 • JEE 2026 Aspirant'},
            ].map((r,i)=>(
              <div key={i} className="rounded-[20px] border border-black/10 p-7">
                <div className="serif text-[28px] leading-none">“</div>
                <p className="mt-2 text-[16px] leading-7">{r.q}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-black text-white grid place-items-center text-[11px]">{r.n[0]}</div>
                  <div><div className="text-[13px] font-medium">{r.n}</div><div className="text-[11px] text-black/50">{r.d}</div></div>
                  <div className="ml-auto text-[12px]">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Review
