import React, { useState } from 'react'
import faqs from '../../data/faqs'

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const handleFAQClick = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section id="faq" className="cinemathic-bg">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-2 py-20">

        <div className="flex items-center gap-5">
          <h2 className="cinemathic-text text-[40px] sm:text-[48px]">
            Who Is CINEMATHIC For?
          </h2>

          <div className="h-px bg-[var(--border)] flex-1" />
        </div>

        <div className="mt-10 border-t border-white/10 ">
          {faqs.map((faq) => {
            const isOpen = openFAQ === faq.id

            return (
              <div
                key={faq.id}
                className="border-b cinemathic-border"
              >
                <button
                  onClick={() => handleFAQClick(faq.id)}
                  className="w-full py-5 flex items-center justify-between gap-6 text-left  cursor-pointer hover:bg-[var(--background-soft)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[var(--primary)] text-lg">
                      ✓
                    </span>

                    <span className="text-[14px] sm:text-[15px] font-medium text-[var(--text)]  ">
                      {faq.question}
                    </span>
                  </div>

                  <span className="text-xl text-[var(--primary)shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pl-8 sm:pl-9 pr-8">
                    <p className="text-[13px] sm:text-[14px] leading-6 text-white/60 max-w-[850px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ