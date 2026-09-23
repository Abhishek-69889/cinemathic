import React from 'react'

const Courses = () => {
  return (
    <section id="courses" className="border-t border-black/10 bg-[#FFFCF5]">

      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-0 py-14 sm:py-16 lg:py-20">

        {/* Section Heading */}

        <div className="mt-8">
          <h2 className="serif text-[48px] sm:text-[60px] leading-none">
            Courses & Fee Structure
          </h2>

          <p className="mt-5 text-[15px] sm:text-[16px] text-black/50 max-w-[550px]">
            Focused mathematics programs for Classes 9–12, from school
            preparation to JEE foundation and preparation.
          </p>
        </div>

        {/* Course Cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Class 12 */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 text-[#FFFCF5]">

            <div className="text-[10px] uppercase tracking-[0.15em] text-white/40">
              Class 12
            </div>

            <h3 className="serif text-[28px] mt-4">
              Mathematics
            </h3>

            <div className="mt-8">
              <div className="text-[28px] font-medium">
                ₹4,000
                <span className="text-[12px] text-white/40">
                  /month
                </span>
              </div>

              <p className="mt-2 text-[12px] text-white/50">
                Boards + JEE Preparation
              </p>
            </div>

            <div className="border-t border-white/10 my-6" />

            <div className="text-[28px] font-medium">
              ₹4,500
              <span className="text-[12px] text-white/40">
                /month
              </span>
            </div>

            <p className="mt-2 text-[12px] text-white/50">
              Boards + JEE + Class 11 Access
            </p>

          </div>

          {/* Class 11 */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 text-[#FFFCF5]">

            <div className="text-[10px] uppercase tracking-[0.15em] text-white/40">
              Class 11
            </div>

            <h3 className="serif text-[28px] mt-4">
              Mathematics
            </h3>

            <div className="mt-8">
              <div className="text-[28px] font-medium">
                ₹3,500
                <span className="text-[12px] text-white/40">
                  /month
                </span>
              </div>

              <p className="mt-2 text-[12px] leading-5 text-white/50">
                JEE Preparation + School Examination Preparation
              </p>
            </div>

          </div>

          {/* Class 10 */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 text-[#FFFCF5]">

            <div className="text-[10px] uppercase tracking-[0.15em] text-white/40">
              Class 10
            </div>

            <h3 className="serif text-[28px] mt-4">
              Mathematics
            </h3>

            <div className="mt-8">
              <div className="text-[28px] font-medium">
                ₹3,000
                <span className="text-[12px] text-white/40">
                  /month
                </span>
              </div>

              <p className="mt-2 text-[12px] text-white/50">
                CBSE Boards + JEE Foundation
              </p>
            </div>

            <div className="border-t border-white/10 my-6" />

            <div className="text-[28px] font-medium">
              ₹3,500
              <span className="text-[12px] text-white/40">
                /month
              </span>
            </div>

            <p className="mt-2 text-[12px] leading-5 text-white/50">
              CBSE Boards + JEE Foundation + Class 9 Access
            </p>

          </div>

          {/* Class 9 */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 text-[#FFFCF5]">

            <div className="text-[10px] uppercase tracking-[0.15em] text-white/40">
              Class 9
            </div>

            <h3 className="serif text-[28px] mt-4">
              Mathematics
            </h3>

            <div className="mt-8">
              <div className="text-[28px] font-medium">
                ₹2,500
                <span className="text-[12px] text-white/40">
                  /month
                </span>
              </div>

              <p className="mt-2 text-[12px] leading-5 text-white/50">
                JEE Foundation + School Examination Preparation
              </p>
            </div>

          </div>

        </div>






        {/* What You Get */}










        <div className="mt-20">

          <div className="flex items-center gap-5">
            <h2 className="serif text-[36px] sm:text-[44px]">
              What You Get
            </h2>

            <div className="h-px bg-black/10 flex-1" />
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* Live Classes */}
            <div className="bg-[#171717] border border-white/10 rounded-2xl p-5 text-[#FFFCF5]">
              <div className="text-2xl">📚</div>

              <h3 className="mt-4 text-[14px] font-medium">
                6 Days of Live Classes Every Week
              </h3>

              <p className="mt-2 text-[12px] leading-5 text-white/50">
                Regular live classes designed to maintain consistency,
                build concepts step-by-step, and keep students on track.
              </p>
            </div>

            {/* Weekly Tests */}
            <div className="bg-[#171717] border border-white/10 rounded-2xl p-5 text-[#FFFCF5]">
              <div className="text-2xl">📝</div>

              <h3 className="mt-4 text-[14px] font-medium">
                Weekly Tests — Every Sunday
              </h3>

              <p className="mt-2 text-[12px] leading-5 text-white/50">
                A structured test every Sunday to evaluate preparation,
                identify weak areas, and build exam temperament.
              </p>
            </div>

            {/* Progress Tracking */}
            <div className="bg-[#171717] border border-white/10 rounded-2xl p-5 text-[#FFFCF5]">
              <div className="text-2xl">🎯</div>

              <h3 className="mt-4 text-[14px] font-medium">
                Personalized Progress Tracking
              </h3>

              <p className="mt-2 text-[12px] leading-5 text-white/50">
                Student performance is monitored regularly to track
                strengths, weaknesses, and academic progress.
              </p>
            </div>

            {/* Micro Group */}
            <div className="bg-[#171717] border border-white/10 rounded-2xl p-5 text-[#FFFCF5]">
              <div className="text-2xl">👥</div>

              <h3 className="mt-4 text-[14px] font-medium">
                Micro-Group Learning
              </h3>

              <p className="mt-2 text-[12px] leading-5 text-white/50">
                Small, focused batches encourage participation,
                accountability, and meaningful interaction.
              </p>
            </div>

            {/* Doubt Support */}
            <div className="bg-[#171717] border border-white/10 rounded-2xl p-5 text-[#FFFCF5]">
              <div className="text-2xl">💬</div>

              <h3 className="mt-4 text-[14px] font-medium">
                Direct Doubt Support
              </h3>

              <p className="mt-2 text-[12px] leading-5 text-white/50">
                Students receive direct access to the teacher for
                academic doubts outside regular class hours.
              </p>
            </div>

            {/* Interactive Classes */}
            <div className="bg-[#171717] border border-white/10 rounded-2xl p-5 text-[#FFFCF5]">
              <div className="text-2xl">🎥</div>

              <h3 className="mt-4 text-[14px] font-medium">
                Interactive Two-Way Classes
              </h3>

              <p className="mt-2 text-[12px] leading-5 text-white/50">
                Students actively participate through questions,
                discussions, and problem-solving.
              </p>
            </div>

            {/* Camera */}
            <div className="bg-[#171717] border border-white/10 rounded-2xl p-5 text-[#FFFCF5]">
              <div className="text-2xl">🎙️</div>

              <h3 className="mt-4 text-[14px] font-medium">
                Camera & Microphone-Enabled Classes
              </h3>

              <p className="mt-2 text-[12px] leading-5 text-white/50">
                Camera and microphone participation encourages
                attentiveness, interaction, and classroom discipline.
              </p>
            </div>

            {/* CBT */}
            <div className="bg-[#171717] border border-white/10 rounded-2xl p-5 text-[#FFFCF5]">
              <div className="text-2xl">💻</div>

              <h3 className="mt-4 text-[14px] font-medium">
                Computer-Based Testing
              </h3>

              <p className="mt-2 text-[12px] leading-5 text-white/50">
                Regular online tests are conducted through a structured
                computer-based testing system.
              </p>
            </div>

            {/* Test Analysis */}
            <div className="bg-[#171717] border border-white/10 rounded-2xl p-5 text-[#FFFCF5]">
              <div className="text-2xl">📊</div>

              <h3 className="mt-4 text-[14px] font-medium">
                Detailed Test Analysis
              </h3>

              <p className="mt-2 text-[12px] leading-5 text-white/50">
                Marks, accuracy, question-wise performance, time
                management, and areas for improvement.
              </p>
            </div>

            {/* DPP */}
            <div className="bg-[#171717] border border-white/10 rounded-2xl p-5 text-[#FFFCF5]">
              <div className="text-2xl">📖</div>

              <h3 className="mt-4 text-[14px] font-medium">
                Daily Practice Problems
              </h3>

              <p className="mt-2 text-[12px] leading-5 text-white/50">
                Daily problems help students revise concepts,
                strengthen problem-solving skills, and stay consistent.
              </p>
            </div>

            {/* Parent Meeting */}
            <div className="bg-[#171717] border border-white/10 rounded-2xl p-5 text-[#FFFCF5]">
              <div className="text-2xl">👨‍👩‍👦</div>

              <h3 className="mt-4 text-[14px] font-medium">
                Monthly Parent–Teacher Meetings
              </h3>

              <p className="mt-2 text-[12px] leading-5 text-white/50">
                Monthly meetings to discuss academic progress,
                performance, strengths, and areas for improvement.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Courses