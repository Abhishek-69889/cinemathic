import React from 'react'

const CoachingIntro = () => {
  return (
    <section
      id="about"
      className="w-full bg-[var(--background)] text-[var(--text)]"
    >
      <div className="max-w-312.5 mx-auto px-5 sm:px-8 lg:px-2 pt-16 sm:pt-20 lg:pt-20 pb-14 lg:pb-16 grid grid-cols-1 lg:grid-cols-[1fr_0.98fr] gap-12 lg:gap-16 items-center">

        {/* Left Content */}
        <div className="max-w-155">

          <h1 className="cinamathic-text text-[54px] sm:text-[68px] md:text-[76px] lg:text-[82px] leading-[0.88] tracking-wide font-extrabold">
            Maths, taught
            <br />
            like <span className="italic">a story.</span>
          </h1>

          <p className="inter mt-7 max-w-140 text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.6] text-[var(--text-secondary)]">
            <span className='text-green-700 font-bold tracking-wide italic'>Don't memorise maths. Understand the plot!!</span>
            <br />
            Cinemathic is where confused students become confident problem-solvers. Clear concepts, sharp thinking and a teaching style that shows you exactly where to focus.
            For Class 9-12, JEE and Olympiads.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col xs:flex-row sm:flex-row gap-3">

            <a
              href="#live"
              className="inline-flex items-center justify-center gap-3 cinemathic-button px-6 sm:px-7 py-3.5 rounded-full text-[14px] font-medium"
            >
              Join Live Class

              <span className="w-6 h-6 rounded-full bg-white/20 grid place-items-center text-[12px]">
                →
              </span>
            </a>

            <a
              href="#tests"
              className="inline-flex items-center justify-center border cinemathic-border bg-[var(--card)] px-6 sm:px-7 py-3.5 rounded-full text-[14px] font-medium hover:border-[var(--primary)] transition"
            >
              Take Test
            </a>

          </div>

          {/* Stats */}
          <div className="mt-12 pt-6 border-t cinemathic-border grid grid-cols-3 max-w-135">

            <div className="pr-4">
              <div className="serif text-[27px] sm:text-[30px]">
                200+
              </div>

              <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                Students
                <br className="sm:hidden" />
                Mentored
              </div>
            </div>

            <div className="px-4 border-l cinemathic-border">
              <div className="serif text-[27px] sm:text-[30px]">
                98%
              </div>

              <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                Board & JEE
                <br />
                Selections
              </div>
            </div>

            <div className="pl-4 border-l cinemathic-border">
              <div className="serif text-[27px] sm:text-[30px]">
                4 yrs
              </div>

              <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                Teaching
                <br />
                Experience
              </div>
            </div>

          </div>

        </div>

        {/* Right Board */}
        <div className="relative w-full">

          {/* Main Card */}
          <div className="relative w-full rounded-[26px] border cinemathic-border bg-[var(--card)] p-5 sm:p-7 lg:p-8 shadow-[var(--shadow-medium)]">

            <div className="flex items-center justify-between mb-7">

              <span className="text-[9px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                CINEMATHIC.World
              </span>

            </div>

            {/* Graph */}
            <div className="relative h-71.25 sm:h-77.5 rounded-[17px] border cinemathic-border overflow-hidden bg-[var(--background)]">

              {/* Yellow Glow */}
              <div className="absolute -right-12 -top-10 w-64 h-64 rounded-full bg-white blur-[30px] opacity-20" />

              <svg
                viewBox="0 0 500 300"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                {/* Axes */}
                <line
                  x1="80"
                  y1="235"
                  x2="440"
                  y2="235"
                  stroke="currentColor"
                  strokeOpacity="0.12"
                />

                <line
                  x1="120"
                  y1="40"
                  x2="120"
                  y2="270"
                  stroke="currentColor"
                  strokeOpacity="0.12"
                />

                {/* Dashed Vertical */}
                <line
                  x1="285"
                  y1="40"
                  x2="285"
                  y2="235"
                  stroke="currentColor"
                  strokeOpacity="0.15"
                  strokeDasharray="6 7"
                />

                {/* Curve */}
                <path
                  d="
                    M 120 210
                    C 155 195, 190 180, 220 160
                    C 245 143, 265 125, 285 115
                    C 315 95, 350 78, 390 58
                  "
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Point */}
                <circle
                  cx="285"
                  cy="115"
                  r="7"
                  fill="currentColor"
                />

                <circle
                  cx="285"
                  cy="115"
                  r="12"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.1"
                />
              </svg>

              {/* Graph Labels */}
              <span className="absolute left-[12%] top-[25%] text-[10px] text-[var(--text-light)]">
                lim x→a f(x) = L
              </span>

              <span className="absolute left-[53%] top-[18%] text-[12px] text-[var(--text-muted)]">
                a
              </span>

              <span className="absolute left-[55%] top-[53%] text-[11px] text-[var(--text-muted)]">
                L
              </span>

              <span className="absolute left-4 bottom-5 serif italic text-[12px] text-[var(--text-muted)]">
                f continuous at a if limit exists
              </span>

              {/* Arrow Button */}
              <button
                className="absolute right-4 bottom-4 w-8 h-8 rounded-full bg-[var(--text)] text-[var(--background)] text-[12px] grid place-items-center hover:bg-[var(--primary)] hover:text-white transition"
              >
                ↗
              </button>

            </div>

            {/* Information */}
            <div className="grid grid-cols-3 gap-3 mt-6">

              <div className="rounded-xl border cinemathic-border bg-[var(--background)] px-3 py-3 min-h-14.25">
                <div className="text-[8px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                  Topic
                </div>

                <div className="mt-1 text-[12px] font-medium">
                  Calculus I
                </div>
              </div>

              <div className="rounded-xl border cinemathic-border bg-[var(--background)] px-3 py-3 min-h-14.25">
                <div className="text-[8px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                  Level
                </div>

                <div className="mt-1 text-[12px] font-medium">
                  JEE / Boards
                </div>
              </div>

              <div className="rounded-xl border cinemathic-border bg-[var(--background)] px-3 py-3 min-h-14.25">
                <div className="text-[8px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                  Mode
                </div>

                <div className="mt-1 text-[12px] font-medium">
                  Intuition-first
                </div>
              </div>

            </div>

          </div>

          {/* Floating Note */}
          <div className="absolute -bottom-6 left-[-18px] sm:left-[-28px] w-[155px] sm:w-[165px] rounded-xl border cinemathic-border bg-[var(--secondary)] px-4 py-3 shadow-[var(--shadow-small)] rotate-[-1.5deg]">
            <p className="text-[11px] sm:text-[12px] leading-[1.3] font-medium text-[#111111]">
              "Every formula has a backstory. We start there."
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default CoachingIntro