import React, { useState } from 'react'

const TestSchedule = () => {
  const [testLink1, setTestLink1] = useState('https://test.cinemathic.com/weekly-algebra');
  const [testLink2, setTestLink2] = useState('https://test.cinemathic.com/jee-mock');
  const [editTest1, setEditTest1] = useState('');
  const [editTest2, setEditTest2] = useState('');

  return (
    <section id="tests" className="border-t border-black/10">
        <div className="max-w-300 mx-auto px-6 py-20">
          <div className="text-[11px] uppercase tracking-[0.2em] text-black/40">03 / Test Series</div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              {title:'Weekly Test — Algebra', meta:'30 mins • 20 Qs • Mains Level', link:testLink1, edit:editTest1, setEdit:setEditTest1, setter:setTestLink1},
              {title:'Full Mock — JEE Pattern', meta:'3 hrs • 75 Qs • Advanced', link:testLink2, edit:editTest2, setEdit:setEditTest2, setter:setTestLink2},
            ].map((card,i)=>(
              <div key={i} className="rounded-[20px] border border-black/10 bg-white p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="serif text-[22px]">{card.title}</div>
                    <div className="mt-1 text-[12px] text-black/50">{card.meta}</div>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest border border-black/10 rounded-full px-2.5 py-1">Active</span>
                </div>
                <a href={card.link} target="_blank" className="mt-6 inline-flex bg-black text-white px-5 py-2.5 rounded-full text-[13px] hover:bg-[#2D5BFF] transition">Start Test →</a>
                <div className="mt-6 flex gap-2">
                  <input value={card.edit} onChange={e=>card.setEdit(e.target.value)} placeholder="Admin: Paste cloud test link" className="flex-1 h-10 px-4 rounded-full border border-black/10 text-[12px] outline-none" />
                  <button onClick={()=>{ if(card.edit){ card.setter(card.edit); card.setEdit(''); }}} className="h-10 px-4 rounded-full bg-black text-white text-[12px]">Update</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default TestSchedule
