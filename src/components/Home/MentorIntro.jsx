import React from "react";
import founder from "../../assets/images/Founder.png"

const MentorIntro = () => {
  return (
    <section
      id="mentor"
      className="bg-[var(--background)] text-[var(--text)] transition-colors"
    >
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-2 py-14 sm:py-16 lg:py-20 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-center">

        <div className="relative">

          <div
            className="
              aspect-square
              bg-[var(--background-soft)]
              rounded-3xl
              border cinemathic-border
              relative
              overflow-hidden
              transition-colors
            "
          >

            {/* Background grid */}
            <div
              className="
                absolute inset-0 opacity-40
                bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)]
                bg-[size:24px_24px]
              "
            />

            {/* Founder image */}
            <div
              className="
                absolute inset-8 sm:inset-10
                rounded-2xl
                overflow-hidden
                bg-[var(--card-soft)]
              "
            >
              <img
                src={founder}
                alt="Ritik Kunwal"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Bottom info */}
            <div
              className="
                absolute bottom-[-1px] left-4 sm:left-6
                bg-[var(--card)]
                rounded-t-2xl
                px-4 sm:px-5 py-3
                border cinemathic-border
                shadow-[var(--shadow-small)]
              "
            >
              <div className="text-[9px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Founder & Math Mentor
              </div>

              <div className="mt-1 text-[12px] sm:text-[13px] font-medium">
                4+ Years · Mathematics Educator
              </div>
            </div>

            {/* Arrow button */}
            <button
              className="
                absolute bottom-4 right-4
                w-9 h-9
                rounded-full
                cinemathic-button
                text-white
                text-sm
                grid place-items-center
              "
            >
              ↗
            </button>

          </div>

        </div>

        <div>

          <div className="flex flex-wrap items-center gap-3">

            <h2 className="serif text-[48px] sm:text-[58px] lg:text-[60px] leading-none tracking-tight">
              Ritik Kunwal
            </h2>

            <span
              className="
                text-[var(--secondary)]
                font-bold
                text-[9px] sm:text-[10px]
                uppercase
                tracking-[0.15em]
                border cinemathic-border
                rounded-full
                px-3 py-1.5
              "
            >
              <span>IIT</span> Graduate
            </span>

          </div>

          <p className="mt-8 text-[16px] sm:text-[17px] leading-7 text-[var(--text-secondary)] max-w-[620px]">
            I’m Ritik Kunwal, a mathematics educator and IIT Patna graduate in
            Computer Science and Data Analytics. I teach Classes 9–12, helping
            students build strong foundations and prepare for exams like JEE
            and NDA.
          </p>

          <p className="mt-5 text-[16px] sm:text-[17px] leading-7 text-[var(--text-secondary)] max-w-[620px]">
            My approach is simple: understand the{" "}
            <span className="text-[var(--secondary)]">“why”</span> before
            memorising the{" "}
            <span className="text-[var(--secondary)]">“how”</span>. I focus on
            clear concepts, logical thinking, and problem-solving so students
            can approach even challenging problems with confidence.
          </p>

          {/* Quotation */}
          <blockquote className="mt-9 border-l-2 border-[var(--primary)] pl-5">

            <div className="serif italic text-[21px] sm:text-[23px] text-[var(--secondary)]">
              “I don’t teach tricks, I teach thinking.”
            </div>

            <div className="mt-2 text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
              — Classroom principle, since 2024
            </div>

          </blockquote>

          {/* Mentor Experience cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">

            <div
              className="
                bg-[var(--card)]
                border cinemathic-border
                rounded-2xl
                p-4
                transition-colors
              "
            >
              <div className="text-[13px] font-medium leading-5">
                Computer Science And Data Analyst
              </div>

              <div className="mt-2 text-[11px] text-[var(--text-muted)]">
                IIT Patna
              </div>
            </div>

            <div
              className="
                bg-[var(--card)]
                border cinemathic-border
                rounded-2xl
                p-4
                transition-colors
              "
            >
              <div className="text-[13px] font-medium">
                4 yrs teaching
              </div>

              <div className="mt-2 text-[11px] text-[var(--text-muted)]">
                Kota · Online
              </div>
            </div>

            <div
              className="
                bg-[var(--card)]
                border cinemathic-border
                rounded-2xl
                p-4
                transition-colors
              "
            >
              <div className="text-[13px] font-medium">
                200+ JEE selections
              </div>

              <div className="mt-2 text-[11px] text-[var(--text-muted)]">
                2022 — 2026
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MentorIntro;