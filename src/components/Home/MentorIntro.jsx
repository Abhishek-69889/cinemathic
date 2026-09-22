import React from 'react'

const MentorIntro = () => {
  return (
    <section id="mentor" className="border-t border-black/10">
        <div className="max-w-3000 mx-auto px-10 py-20 grid md:grid-cols-[750px_1fr] gap-12">
          <div className="grid md:grid-cols-[280px_1fr] gap-10">
            <div>
              <div className="aspect-3/4 bg-[#ECE9E2] rounded-3xl border border-black/10 relative overflow-hidden">
                <div className="absolute inset-0 grid place-items-center text-black/20 serif text-[40px]">Photo</div>
                <div className="absolute bottom-3 left-3 right-3 bg-white rounded-full px-4 py-2.5 flex items-center gap-2 text-[12px] border border-black/10">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Founder • 12+ Years
                </div>
              </div>
            </div>
            <div>
              <h2 className="serif text-[48px] leading-none">Your Name Here</h2>
              <p className="mt-3 text-[13px] uppercase tracking-widest text-black/40">Founder & Math Mentor, Cinemathic</p>
              <p className="mt-6 text-[16px] leading-7 text-black/70">
                B.Sc. Maths Gold Medalist. Teaching for 12+ years. I’ve mentored 500+ JEE selections not by teaching tricks, but by teaching how to think.
              </p>
              <blockquote className="mt-6 border-l-2 border-[#2D5BFF] pl-4 serif text-[20px] italic">“I don’t teach tricks, I teach thinking.”</blockquote>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Calculus','Algebra','Coordinate Geometry','Vector 3D','Olympiad'].map(t=>(
                  <span key={t} className="text-[11px] px-3 py-1.5 rounded-full border border-black/10 uppercase tracking-wide">{t}</span>
                ))}
              </div>
              <ul className="mt-8 space-y-2 text-[13px] text-black/60">
                <li>• B.Sc. Maths Gold Medalist, 2012</li>
                <li>• 12+ yrs at Allen, Resonance, Self</li>
                <li>• 500+ JEE / 2000+ Boards 90%+</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

  )
}

export default MentorIntro
