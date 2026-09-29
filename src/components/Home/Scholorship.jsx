import React from 'react'
import ScholarshipCard from '../cards/ScholorshipCard'
import { scholarships, scholarshipInfo } from '../../data/scholarship'

const Scholarship = () => {
  return (
    <section id="scholarship" className="cinemathic-bg">
      <div className="max-w-305 mx-auto px-5 sm:px-8 lg:px-2 py-20">

        <div className="relative overflow-hidden rounded-3xl cinemathic-card cinemathic-border cinemathic-text p-6 sm:p-8">

          
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full border border-[#FFE45C]/20" />

          <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full border border-[#FFE45C]/10" />

          <div className="relative">

            {/* Header */}
            <div className="flex items-start justify-between gap-4">

              <div>

                <div className="inline-flex items-center gap-2 border border-[#FFE45C]/30 bg-[#FFE45C]/10 rounded-full px-3 py-1.5">

                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFE45C]" />

                  <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--primary)]">
                    {scholarshipInfo.label}
                  </span>

                </div>

                <h2 className="text-[34px] sm:text-[42px] leading-tight mt-6">
                  {scholarshipInfo.title}
                </h2>

                <p className="mt-4 max-w-140 text-[13px] sm:text-[14px] leading-6 cinemathic-text-secondary">
                  {scholarshipInfo.description}
                </p>

              </div>

              <div className="hidden sm:block text-[80px] leading-none font-bold text-[#FFE45C]/10">
                %
              </div>

            </div>

            {/* Scholarship cards */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">

              {scholarships.map((scholarship) => (
                <ScholarshipCard
                  key={scholarship.id}
                  scholarship={scholarship}
                />
              ))}

            </div>

            {/* Note */}
            <div className="mt-6 px-4 py-3 rounded-xl bg-[#FFE45C]/5 border border-[#FFE45C]/10">
              <p className="text-[11px] leading-5 text-white/50">
                {scholarshipInfo.note}
              </p>
            </div>

            {/* Application */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

              <div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-white/40">
                  Applications open
                </div>

                <div className="mt-1 text-[16px] font-medium text-[#FFE45C]">
                  {scholarshipInfo.applicationDate}
                </div>
              </div>

              {/* <a
                href="#"
                className="cinemathic-button px-5 py-3 rounded-full text-[13px] font-medium text-center disabled={}"
              >
                Application Details →
              </a> */}

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Scholarship