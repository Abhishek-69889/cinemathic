import React, { useState } from 'react'

const classInfo = {
  title: 'Calculus — Limits & Continuity',
  time: '6 PM IST',
  meetingId: '847 392 1001',
  passcode: 'CINEMA',
  zoomLink: 'https://zoom.us/j/8473921001'
}

const classroomRules = [
  {
    text: 'Join 5 mins early, mic off, doubts in chat'
  },
  {
    text: 'Notebook ready: we prove every formula live'
  },
  {
    text: 'Missed? Recording + notes shared on WhatsApp same night'
  }
]

const todaySheet = {
  title: "Today's sheet:",
  description: '15 problems on epsilon-delta, uploaded at 5:45 PM in group.'
}

const ClassSchedule = () => {

  const [zoomLink, setZoomLink] = useState(classInfo.zoomLink)

  const {
    title,
    time,
    meetingId,
    passcode
  } = classInfo

  return (
    <section
      id="live"
      className="border-t cinemathic-border bg-[var(--background)] text-[var(--text)] transition-colors"
    >

      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-2 py-16 sm:py-20">

        <div className="mt-8 grid lg:grid-cols-[1.45fr_1fr] gap-8">

          {/* Live Class */}
          
          <div className="bg-[var(--card)] border-2 border-[var(--border-strong)] rounded-3xl overflow-hidden">

            <div className="px-5 sm:px-7 py-4 border-b cinemathic-border">

              <div className="flex flex-wrap items-center gap-3">

                <div className="flex items-center gap-2 cinemathic-dark rounded-full px-3 py-1.5">

                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />

                  <span className="text-[10px] uppercase tracking-widest">
                    Live
                  </span>

                </div>

                <div className="text-[13px] sm:text-[14px]">
                  Today's Class: {title} · {time}
                </div>

              </div>

            </div>

            <div className="p-5 sm:p-8">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>

                  <h2 className="serif text-[28px] sm:text-[32px]">
                    Join Class
                  </h2>

                  <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px] text-[var(--text-secondary)]">

                    <span className="border cinemathic-border bg-[var(--background)] rounded-md px-2 py-1">
                      Meeting ID: {meetingId}
                    </span>

                    <span>
                      · Passcode: {passcode}
                    </span>

                  </div>

                </div>

                <a
                  href={zoomLink}
                  target="_blank"
                  rel="noreferrer"
                  className="cinemathic-button px-7 py-3.5 rounded-full text-[14px] font-medium text-center hover:opacity-90 transition"
                >
                  Join Class →
                </a>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-3">

            {/* Classroom Rules */}
            <div className="bg-[var(--card)] border cinemathic-border rounded-3xl p-7 sm:p-8">

              <div className="text-[10px] uppercase tracking-widest opacity-50">
                Classroom Rules
              </div>

              <div className="mt-5 space-y-4">

                {classroomRules.map((rule, index) => (
                  <div
                    key={index}
                    className="flex gap-4"
                  >

                    <span className="mt-2 w-3 h-px bg-[var(--secondary)]" />

                    <p className="text-[13px] leading-5 opacity-80">
                      {rule.text}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            {/* Today's Sheet */}
            <div className="bg-[var(--card)] border cinemathic-border rounded-3xl p-5 sm:p-6">

              <div className="flex gap-4 items-start">

                <div className="w-9 h-9 rounded-full bg-[var(--secondary)] grid place-items-center shrink-0 text-[#111111]">
                  !
                </div>

                <p className="text-[13px] leading-5 text-[var(--text-secondary)]">

                  <span className="font-medium text-[var(--text)]">
                    {todaySheet.title}
                  </span>{' '}

                  {todaySheet.description}

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