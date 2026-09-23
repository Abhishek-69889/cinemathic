import React from "react";

const CoachingIntro = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#FFFCF5] text-[#111111]  "
    >
      <div className="max-w-312.5 mx-auto px-5 sm:px-8 lg:px-0 pt-16 sm:pt-20 lg:pt-24 pb-14 lg:pb-16 grid grid-cols-1 lg:grid-cols-[1fr_0.98fr] gap-12 lg:gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="max-w-155">

          {/* Heading */}
          <h1
            className="
              serif
              text-[54px]
              sm:text-[68px]
              md:text-[76px]
              lg:text-[82px]
              leading-[0.88]
              tracking-[-0.045em]
              font-normal
            "
          >
            Maths, taught
            <br />
            like <span className="italic">a story.</span>
          </h1>

          {/* Description */}
          <p
            className="
              inter
              mt-7
              max-w-140
              text-[16px]
              sm:text-[17px]
              lg:text-[18px]
              leading-[1.6]
              text-[#334155]
            "
          >
            Cinemathic is not a tuition. It's where formulas become
            intuition, and problems become second nature. For Class 9–12,
            JEE, and Olympiads.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col xs:flex-row sm:flex-row gap-3">
            <a
              href="#live"
              className="
                inline-flex items-center justify-center gap-3
                bg-[#2D5BFF]
                text-white
                px-6 sm:px-7
                py-3.5
                rounded-full
                text-[14px]
                font-medium
                transition
                hover:bg-black
              "
            >
              Join Live Class

              <span className="w-6 h-6 rounded-full bg-white/20 grid place-items-center text-[12px]">
                →
              </span>
            </a>

            <a
              href="#tests"
              className="
                inline-flex items-center justify-center
                border border-black/15
                bg-white/40
                px-6 sm:px-7
                py-3.5
                rounded-full
                text-[14px]
                font-medium
                transition
                hover:border-black
              "
            >
              Take Test
            </a>
          </div>

          {/* Stats */}
          <div
            className="
              mt-12
              pt-6
              border-t border-black/10
              grid grid-cols-3
              max-w-135
            "
          >
            {/* Experiance intro */}
            
            <div className="pr-4">
              <div className="serif text-[27px] sm:text-[30px]">
                200+
              </div>
              <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-black/50">
                Students
                <br className="sm:hidden" /> Mentored
              </div>
            </div>

            <div className="px-4 border-l border-black/10">
              <div className="serif text-[27px] sm:text-[30px]">
                98%
              </div>
              <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-black/50">
                Board & JEE
                <br />
                Selections
              </div>
            </div>

            <div className="pl-4 border-l border-black/10">
              <div className="serif text-[27px] sm:text-[30px]">
                4 yrs
              </div>
              <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-black/50">
                Teaching
                <br />
                Experience
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT BOARD ================= */}
        <div className="relative w-full">

          {/* Main card */}
          <div
            className="
              relative
              w-full
              rounded-[26px]
              border border-black/10
              bg-white
              p-5 sm:p-7 lg:p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.05)]
            "
          >

            {/* Card header */}
            <div className="flex items-center justify-between mb-7">
              

              <span className="text-[9px] uppercase tracking-[0.14em] text-black/35">
                CINEMATHIC.World
              </span>
            </div>

            {/* Graph */}
            <div
              className="
                relative
                h-71.25
                sm:h-77.5
                rounded-[17px]
                border border-black/5
                overflow-hidden
                bg-[#FFFCF5]
              "
            >

              {/* Yellow glow */}
              <div
                className="absolute -right-12 -top-10 w-64 h-64 rounded-full bg-[#FFE873] blur-[45px] opacity-80 "/>

              {/* Graph SVG */}
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
                  stroke="#111"
                  strokeOpacity="0.12"
                />

                <line
                  x1="120"
                  y1="40"
                  x2="120"
                  y2="270"
                  stroke="#111"
                  strokeOpacity="0.12"
                />

                {/* Dashed vertical */}
                <line
                  x1="285"
                  y1="40"
                  x2="285"
                  y2="235"
                  stroke="#111"
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
                  stroke="#2D5BFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Point */}
                <circle
                  cx="285"
                  cy="115"
                  r="7"
                  fill="#111"
                />

                <circle
                  cx="285"
                  cy="115"
                  r="12"
                  fill="none"
                  stroke="#111"
                  strokeOpacity="0.1"
                />
              </svg>

              {/* Graph labels */}
              <span className="absolute left-[12%] top-[25%] text-[10px] text-black/30">
                lim x→a f(x) = L
              </span>

              <span className="absolute left-[53%] top-[18%] text-[12px] text-black/50">
                a
              </span>

              <span className="absolute left-[55%] top-[53%] text-[11px] text-black/40">
                L
              </span>

              <span className="absolute left-4 bottom-5 serif italic text-[12px] text-black/45">
                f continuous at a if limit exists
              </span>

              {/* Arrow button */}
              <button
                className="absolute right-4 bottom-4 w-8 h-8 rounded-full bg-black text-white text-[12px] grid place-items-center hover:bg-[#2D5BFF]  transition">
                ↗
              </button>
            </div>

            {/* Information boxes */}
            <div className="grid grid-cols-3 gap-3 mt-6">

              <div
                className="rounded-xl border border-black/5 bg-[#FFFCF5] px-3 py-3 min-h-14.25">
                <div className="text-[8px] uppercase tracking-[0.15em] text-black/40">
                  Topic
                </div>

                <div className="mt-1 text-[12px] font-medium">
                  Calculus I
                </div>
              </div>

              <div
                className="rounded-xl border border-black/5 bg-[#FFFCF5] px-3 py-3 min-h-14.25">
                <div className="text-[8px] uppercase tracking-[0.15em] text-black/40">
                  Level
                </div>

                <div className="mt-1 text-[12px] font-medium">
                  JEE / Boards
                </div>
              </div>

              <div
                className="rounded-xl border border-black/5 bg-[#FFFCF5] px-3 py-3  min-h-14.25">
                <div className="text-[8px] uppercase tracking-[0.15em] text-black/40">
                  Mode
                </div>

                <div className="mt-1 text-[12px] font-medium">
                  Intuition-first
                </div>
              </div>

            </div>
          </div>

          {/* Floating yellow note */}

          <div className="absolute -bottom-6 left-[-18px] sm:left-[-28px] w-[155px] sm:w-[165px] rounded-xl border border-black/10 bg-[#FFE75C] px-4 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] rotate-[-1.5deg]">
            <p className="text-[11px] sm:text-[12px] leading-[1.3] font-medium">
              "Every formula has a backstory. We start there."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoachingIntro;