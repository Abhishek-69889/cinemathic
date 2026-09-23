import React, { useState } from 'react'

const ClassSchedule = () => {
  const [zoomLink, setZoomLink] = useState('https://zoom.us/j/8473921001')
  // const [editZoom, setEditZoom] = useState('')

  // const updateZoom = () => {
  //   if (editZoom) {
  //     setZoomLink(editZoom)
  //     setEditZoom('')
  //   }
  // }

  return (
    <section id="live" className="border-t border-black/10 bg-[#FFFCF5]">
      <div className="max-w-305 mx-auto px-5 sm:px-8 lg:px-0 py-16 sm:py-20">


        <div className="mt-8 grid lg:grid-cols-[1.45fr_1fr] gap-8">

          <div className="bg-white border-2 border-black/80 rounded-3xl overflow-hidden">

            <div className="px-5 sm:px-7 py-4 border-b border-black/10">
              <div className="flex flex-wrap items-center gap-3">

                <div className="flex items-center gap-2 bg-[#111] text-white rounded-full px-3 py-1.5">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest">
                    Live
                  </span>
                </div>

                <div className="text-[13px] sm:text-[14px]">
                  Today's Class: Calculus — Limits & Continuity · 6 PM IST
                </div>

              </div>

              {/* <div className="mt-3 text-[11px] text-black/40">
                Recording on WhatsApp after class
              </div> */}
            </div>

            <div className="p-5 sm:p-8">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>
                  <h2 className="serif text-[28px] sm:text-[32px]">
                    Join Class
                  </h2>

                  <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px] text-black/55">
                    <span className="border border-black/10 bg-[#FFFCF5] rounded-md px-2 py-1">
                      Meeting ID: 847 392 1001
                    </span>

                    <span>
                      · Passcode: CINEMA
                    </span>
                  </div>
                </div>

                <a
                  href={zoomLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#2D5BFF] text-white px-7 py-3.5 rounded-full text-[14px] font-medium text-center hover:bg-black transition"
                >
                  Join Class →
                </a>

              </div>


              {/* Update section */}

              {/* <div className="mt-8 border border-dashed border-black/10 rounded-2xl p-4">

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">

                  <div className="text-[10px] uppercase tracking-widest text-black/40 whitespace-nowrap">
                    Admin: Paste Zoom Link
                  </div>

                  <div className="flex gap-2 flex-1">

                    <input
                      value={editZoom}
                      onChange={(e) => setEditZoom(e.target.value)}
                      placeholder="https://zoom.us/j/..."
                      className="flex-1 min-w-0 h-10 px-4 rounded-full border border-black/10 bg-white text-[12px] outline-none focus:border-black"
                    />

                    <button
                      onClick={updateZoom}
                      className="h-10 px-5 rounded-full bg-black text-white text-[12px] hover:bg-[#2D5BFF] transition"
                    >
                      Update
                    </button>

                  </div>
                </div>
              </div> */}

             

            </div>
          </div>

          <div className="space-y-3">

            <div className="bg-[#111] text-[#FFFCF5] rounded-3xl p-7 sm:p-8">

              <div className="text-[10px] uppercase tracking-widest text-white/40">
                Classroom Rules
              </div>

              <div className="mt-5 space-y-4">

                <div className="flex gap-4">
                  <span className="mt-2 w-3 h-px bg-[#FFE45C]" />
                  <p className="text-[13px] leading-5 text-white/80">
                    Join 5 mins early, mic off, doubts in chat
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2 w-3 h-px bg-[#FFE45C]" />
                  <p className="text-[13px] leading-5 text-white/80">
                    Notebook ready: we prove every formula live
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2 w-3 h-px bg-[#FFE45C]" />
                  <p className="text-[13px] leading-5 text-white/80">
                    Missed? Recording + notes shared on WhatsApp same night
                  </p>
                </div>

              </div>
            </div>

            <div className="bg-white border border-black/10 rounded-3xl p-5 sm:p-6">

              <div className="flex gap-4 items-start">

                <div className="w-9 h-9 rounded-full bg-[#FFE45C] grid place-items-center shrink-0">
                  !
                </div>

                <p className="text-[13px] leading-5 text-black/70">
                  <span className="font-medium text-black">
                    Today's sheet:
                  </span>{' '}
                  15 problems on epsilon-delta, uploaded at 5:45 PM in group.
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ClassSchedule