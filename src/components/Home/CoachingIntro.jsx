import React from 'react'

const CoachingIntro = () => {
  return (
   <section id="about" className="max-w-300 mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] border border-black/10 rounded-full px-3 py-1 mb-6">For Class 9-12 • JEE • Olympiads</div>
          <h1 className="serif text-[64px] md:text-[84px] leading-[0.9] tracking-tight">
            Maths,<br />taught like<br /><span className="italic font-normal">a story.</span>
          </h1>
          <p className="inter mt-6 text-[18px] leading-7 text-black/60 max-w-[44ch]">
            Cinemathic is not a tuition. It's where formulas become intuition, and problems become second nature. No mugging, only thinking.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#live" className="bg-[#2D5BFF] text-white px-7 py-3.5 rounded-full text-[14px] font-medium hover:bg-black transition">Join Live Class</a>
            <a href="#tests" className="border border-black/15 px-7 py-3.5 rounded-full text-[14px] font-medium hover:border-black transition">Take Test</a>
          </div>
          <div className="mt-12 flex gap-10 border-t border-black/10 pt-6">
            <div><div className="serif text-[28px]">2000+</div><div className="text-[11px] uppercase tracking-widest text-black/50">Students</div></div>
            <div><div className="serif text-[28px]">98%</div><div className="text-[11px] uppercase tracking-widest text-black/50">Selection Rate</div></div>
            <div><div className="serif text-[28px]">4.9/5</div><div className="text-[11px] uppercase tracking-widest text-black/50">Rated</div></div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-4/3 rounded-4xl border border-black/10 bg-white p-8 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] bg-size:16px_16px" />
            <div className="serif text-[120px] leading-none text-black/5 select-none">∫∑π</div>
            <div className="absolute bottom-8 left-8 right-8 bg-black text-[#FFFCF5] rounded-2xl p-5 flex justify-between items-center">
              <div>
                <div className="text-[11px] uppercase tracking-widest opacity-60">Now Playing</div>
                <div className="serif text-[18px] mt-1">Calculus: Limits → Continuity</div>
              </div>
              <div className="w-10 h-10 bg-[#2D5BFF] rounded-full grid place-items-center">▶</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CoachingIntro
