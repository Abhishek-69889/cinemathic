import React from 'react'

const TestCard = ({ test }) => {
  return (
    <div className="border border-white/10 rounded-3xl bg-[#1D1D1D] text-[#FFFCF5] p-6 sm:p-8">

      <div className="flex justify-between items-center gap-3">

        <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] border border-white/10 bg-[#111111] rounded-full px-3 py-1.5">
          {test.type} · {test.date}
        </div>

        <div className="text-[9px] uppercase tracking-wider bg-[#111111] text-[#FFFCF5] rounded-full px-3 py-1.5">
          {test.level}
        </div>

      </div>

      <h2 className="serif text-[28px] sm:text-[30px] mt-6 text-[#FFFCF5]">
        {test.title}
      </h2>

      <p className="mt-2 text-[13px] text-white/50">
        {test.details}
      </p>

      <div className="mt-8">
        <a
          href={test.link}
          className="cinemathic-button px-6 py-3 rounded-full text-[13px] font-medium hover:opacity-90 transition"
        >
          {test.buttonText}
        </a>
      </div>

    </div>
  )
}

export default TestCard