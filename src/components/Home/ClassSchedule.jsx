import React, { useState } from 'react'

const ClassSchedule = () => {
    const [zoomLink, setZoomLink] = useState('https://zoom.us/j/8473921001');
      const [editZoom, setEditZoom] = useState('');
    
    
  return (
    <section id="live" className="border-t border-black/10 bg-[#121212] text-[#FFFCF5]">
        <div className="max-w-300 mx-auto px-6 py-20">
          <div className="flex justify-between items-end">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/40">02 / Live Class</div>
            <div className="flex items-center gap-2 text-[11px]"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> LIVE</div>
          </div>

          <div className="mt-8 bg-[#FFFCF5] text-[#121212] rounded-3xl p-6 md:p-8 border border-white/10">
            <div className="flex flex-wrap justify-between gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-widest text-black/40">Today's Class</div>
                <div className="serif text-[28px] mt-1">Calculus — Limits & Continuity | PYQ Marathon</div>
                <div className="mt-2 text-[13px] text-black/60">Time: 6:00 PM IST • Chapter: Calculus • Meeting ID: 847 392 1001</div>
              </div>
              <a href={zoomLink} target="_blank" className="self-start md:self-center bg-[#2D5BFF] text-white px-7 py-3.5 rounded-full text-[14px] font-medium hover:bg-black transition">Join Zoom Class →</a>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 grid md:grid-cols-[1fr_160px] gap-3 items-center">
              <div className="flex gap-2">
                <input value={editZoom} onChange={e=>setEditZoom(e.target.value)} placeholder="Admin: Paste new Zoom link here" className="flex-1 h-11 px-4 rounded-full border border-black/10 bg-white text-[13px] outline-none focus:border-black" />
                <button onClick={()=>{ if(editZoom){ setZoomLink(editZoom); setEditZoom(''); }}} className="h-11 px-5 rounded-full bg-black text-white text-[13px]">Update</button>
              </div>
              <div className="text-[11px] text-black/40">Recording shared on WhatsApp after class</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ClassSchedule
