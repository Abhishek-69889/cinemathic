import React from 'react'

const Contact = () => {
  return (
    <footer id="contact" className="bg-[#111111] text-[#FFFCF5]">

      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-0 py-14 sm:py-16 lg:py-20">

        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          <div>
            <h2 className="serif text-[56px] sm:text-[70px] leading-[0.9]">
              Let's talk
              <br />
              <span className="italic">maths.</span>
            </h2>

            <p className="mt-7 max-w-[470px] text-[15px] sm:text-[16px] leading-6 text-white/55">
              For admissions, batches, or a quick doubt — message directly.
              <br className="hidden sm:block" />
              Response within 2 hours, 9 AM to 9 PM IST.
            </p>
          </div>

          {/* Current batch */}
          <div className="w-full lg:w-[250px] h-fit rounded-2xl border border-white/10 bg-white/5 p-6">

            <div className="text-[10px] uppercase tracking-[0.15em] text-white/40">
              Current Batch
            </div>

            <div className="serif text-[17px] leading-5 mt-4">
              JEE 2026 + Boards
              <br />
              Mon–Sat · 6 PM IST
            </div>

            <div className="mt-4 text-[11px] text-white/40">
              Live on Zoom · Notes on WhatsApp
            </div>

          </div>
        </div>

        {/* Contact cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[700px]">

          {/* WhatsApp */}
          <a
            href="https://wa.me/916376418579"
            target="_blank"
            rel="noreferrer"
            className="bg-[#FFFCF5] text-black rounded-2xl p-5 flex flex-col justify-between min-h-[136px] hover:scale-[1.01] transition"
          >

            <div className="flex justify-between items-start">

              <div className="text-[10px] uppercase tracking-[0.15em] text-black/40">
                WhatsApp
              </div>

              <div className="w-8 h-8 rounded-full bg-[#25D366] text-white grid place-items-center text-sm">
                ↗
              </div>

            </div>

            <div>
              <div className="text-[14px] font-medium">
                Chat Now
              </div>

              <div className="mt-1 text-[11px] text-black/40">
                Fastest response
              </div>
            </div>

          </a>

          {/* Call */}
          <a
            href="tel:+916376418579"
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between min-h-[136px] hover:bg-white/10 transition"
          >

            <div className="flex justify-between items-start">

              <div className="text-[10px] uppercase tracking-[0.15em] text-white/40">
                Call
              </div>

              <div className="w-8 h-8 rounded-full bg-white text-black grid place-items-center text-sm">
                ↗
              </div>

            </div>

            <div>
              <div className="text-[14px] font-medium">
                +91 6376418579
              </div>

              <div className="mt-1 text-[11px] text-white/40">
                9 AM — 9 PM IST
              </div>
            </div>

          </a>

          {/* Email */}
          <a
            href="mailto:cinemathicedu.pt@gmail.com"
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between min-h-[136px] hover:bg-white/10 transition"
          >

            <div className="flex justify-between items-start">

              <div className="text-[10px] uppercase tracking-[0.15em] text-white/40">
                Email
              </div>

              <div className="w-8 h-8 rounded-full bg-white text-black grid place-items-center text-sm">
                ↗
              </div>

            </div>

            <div>
              <div className="text-[14px] font-medium">
                cinemathicedu.pt@gmail.com
              </div>

              <div className="mt-1 text-[11px] text-white/40">
                For collaborations
              </div>
            </div>

          </a>

        </div>

        {/* Right side branding */}
        <div className="mt-12 lg:mt-[-90px] flex justify-end pointer-events-none">

          <div className="text-right">

            <div className="serif text-[18px]">
              cinemathic<span className="text-[#2D5BFF]">.</span>
            </div>

            <div className="mt-3 text-[10px] uppercase tracking-[0.14em] text-white/30">
              Maths, taught like a story — Est. 2024
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.13em] text-white/30">

          <span>
            © 2026 Cinemathic · All rights reserved
          </span>

          <span>
            Kota · Online
          </span>

        </div>

      </div>
    </footer>
  )
}

export default Contact