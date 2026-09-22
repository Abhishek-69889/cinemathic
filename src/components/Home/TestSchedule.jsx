// import React, { useState } from "react";

const TestShedule = () => {
  // const [weeklyTest, setWeeklyTest] = useState("");
  // const [mockTest, setMockTest] = useState("");

  return (
    <section id="tests" className="">
      <div className="max-w-305 mx-auto px-5 sm:px-8 lg:px-0 py-14 sm:py-16 lg:py-20">



        {/* Test cards */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">

          {/* Weekly Test */}
          <div className="border border-black/70 rounded-3xl bg-[#FFFCF5] p-6 sm:p-8">

            <div className="flex justify-between items-center gap-3">

              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] border border-black/10 bg-white rounded-full px-3 py-1.5">
                Weekly · 14 Oct
              </div>

              <div className="text-[9px] uppercase tracking-wider bg-black text-white rounded-full px-3 py-1.5">
                Intermediate
              </div>

            </div>

            <h2 className="serif text-[28px] sm:text-[30px] mt-6">
              Weekly Test — Algebra
            </h2>

            <p className="mt-2 text-[13px] text-black/50">
              30 mins · 20 Qs · Negative marking
            </p>

            <div className="mt-8 flex items-center gap-3">

              <a
                href="#"
                className="bg-[#2D5BFF] text-white px-6 py-3 rounded-full text-[13px] font-medium hover:bg-black transition"
              >
                Start Test →
              </a>

              {/* <span className="text-[11px] text-black/30">
                Opens in new tab
              </span> */}

            </div>

            {/* Update logic */}

            {/* <div className="mt-6 pt-5 border-t border-black/10">

              <div className="flex gap-2">

                <input
                  type="text"
                  value={weeklyTest}
                  onChange={(e) => setWeeklyTest(e.target.value)}
                  placeholder="Paste Cloud Test Link"
                  className="flex-1 min-w-0 h-9 px-4 rounded-full border border-black/10 bg-white text-[11px] outline-none focus:border-black"
                />

                <button
                  onClick={() => setWeeklyTest(weeklyTest)}
                  className="h-9 px-4 rounded-full border border-black/10 bg-white text-[11px] hover:bg-black hover:text-white transition"
                >
                  Update
                </button>

              </div>

            </div> */}
          </div>

          {/* Full Mock */}
          <div className="border border-black/70 rounded-3xl bg-[#FFFCF5] p-6 sm:p-8">

            <div className="flex justify-between items-center gap-3">

              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] border border-black/10 bg-white rounded-full px-3 py-1.5">
                Full Mock · 19 Oct
              </div>

              <div className="text-[9px] uppercase tracking-wider bg-black text-white rounded-full px-3 py-1.5">
                Advanced
              </div>

            </div>

            <h2 className="serif text-[28px] sm:text-[30px] mt-6">
              Full Mock — JEE Pattern
            </h2>

            <p className="mt-2 text-[13px] text-black/50">
              3 hrs · 75 Qs · All India Rank
            </p>

            <div className="mt-8 flex items-center gap-3">

              <a
                href="#"
                className="bg-black text-white px-6 py-3 rounded-full text-[13px] font-medium hover:bg-[#2D5BFF] transition"
              >
                Start Test →
              </a>

              {/* <span className="text-[11px] text-black/30">
                Opens in new tab
              </span> */}

            </div>

            {/* Update link */}

            {/* <div className="mt-6 pt-5 border-t border-black/10">

              <div className="flex gap-2">

                <input
                  type="text"
                  value={mockTest}
                  onChange={(e) => setMockTest(e.target.value)}
                  placeholder="Paste Cloud Test Link"
                  className="flex-1 min-w-0 h-9 px-4 rounded-full border border-black/10 bg-white text-[11px] outline-none focus:border-black"
                />

                <button
                  onClick={() => setMockTest(mockTest)}
                  className="h-9 px-4 rounded-full border border-black/10 bg-white text-[11px] hover:bg-black hover:text-white transition"
                >
                  Update
                </button>

              </div>

            </div> */}
          </div>

        </div>

        {/* Bottom note */}
        {/* <p className="mt-6 text-[11px] text-black/35">
          Admin updates are local preview only. For production, replace with
          your test platform URL.
        </p> */}

      </div>
    </section>
  );
};

export default TestShedule;