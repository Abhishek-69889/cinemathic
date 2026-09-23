import React from "react";
import founder from "../../assets/images/Founder.png"

const MentorIntro = () => {
  return (
    <section id="mentor" className="">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-0 py-14 sm:py-16 lg:py-20 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-center">

        <div className="relative">

  <div className="aspect-square bg-[#F3F0E8] rounded-3xl border border-black/10 relative overflow-hidden">

    {/* Background grid */}
    <div className="absolute inset-0 opacity-40 bg-[linear-gradient(#d8d4ca_1px,transparent_1px),linear-gradient(90deg,#d8d4ca_1px,transparent_1px)] bg-[size:24px_24px]" />

    {/* Founder image */}
    <div className="absolute inset-8 sm:inset-10 rounded-2xl overflow-hidden bg-[#D8D5CE]">
      <img
        src={founder}
        alt="Ritik Kunwal"
        className="w-full h-full object-cover object-top"
      />
    </div>

    {/* Bottom info */}
    <div className="absolute bottom-[-1px] left-4 sm:left-6 bg-white rounded-t-2xl px-4 sm:px-5 py-3 border border-black/10 shadow-sm">

      <div className="text-[9px] uppercase tracking-[0.18em] text-black/45">
        Founder & Math Mentor
      </div>

      <div className="mt-1 text-[12px] sm:text-[13px] font-medium">
        2+ Years · Mathematics Educator
      </div>

    </div>

    {/* Arrow button */}
    <button className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#2D5BFF] text-white text-sm">
      ↗
    </button>

  </div>

</div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="serif text-[48px] sm:text-[58px] lg:text-[60px] leading-none tracking-tight">
              Ritik Kunwal
            </h2>

            <span className="text-yellow-600 font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.15em] border border-black/10 rounded-full px-3 py-1.5">
              <span className="">IIT</span> Graduate
            </span>
          </div>

          <p className="mt-8 text-[16px] sm:text-[17px] leading-7 text-black/65 max-w-[620px]">
  I’m Ritik Kunwal, a mathematics educator and IIT Patna graduate in Computer Science and Data Analytics. I teach Classes 9–12, helping students build strong foundations and prepare for exams like JEE and NDA.
</p>

<p className="mt-5 text-[16px] sm:text-[17px] leading-7 text-black/65 max-w-[620px]">
  My approach is simple: understand the <span className="text-yellow-600">“why”</span> before memorising the <span className="text-yellow-600">“how”</span>. I focus on clear concepts, logical thinking, and problem-solving so students can approach even challenging problems with confidence.
</p>

             {/* Quatation */}

          <blockquote className="mt-9 border-l-2 border-[#2D5BFF] pl-5">
            <div className="serif italic text-[21px] sm:text-[23px] text-yellow-400 ">
              “I don’t teach tricks, I teach thinking.”
            </div>
            <div className="mt-2 text-[9px] uppercase tracking-[0.16em] text-black/35">
              — Classroom principle, since 2024
            </div>
          </blockquote>

          {/* Mentor Experiance cards */}

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">

            <div className="bg-[#FFFCF5] border border-black/10 rounded-2xl p-4">
              <div className="text-[13px] font-medium leading-5">
                Computer Science And Data Analyst
              </div>

              <div className="mt-2 text-[11px] text-black/40">
                IIT Patna
              </div>
            </div>

            <div className="bg-[#FFFCF5] border border-black/10 rounded-2xl p-4">
              <div className="text-[13px] font-medium">
                2 yrs teaching
              </div>

              <div className="mt-2 text-[11px] text-black/40">
                Kota · Online
              </div>
            </div>

            <div className="bg-[#FFFCF5] border border-black/10 rounded-2xl p-4">
              <div className="text-[13px] font-medium">
                500+ JEE selections
              </div>

              <div className="mt-2 text-[11px] text-black/40">
                2024 — 2026
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorIntro;