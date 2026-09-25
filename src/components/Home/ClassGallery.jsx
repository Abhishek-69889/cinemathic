import React from 'react'

import classImages from "../../data/ClassImages"

const ClassGallery = () => {
  return (
    <section
      id="gallery"
      className="border-t cinemathic-border cinemathic-bg"
    >
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-2 py-14 sm:py-16 lg:py-20">

        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--secondary)]">
            Inside Cinemathic
          </div>

          <h2 className="cinemathic-text text-[48px] text-[var(--text)] sm:text-[60px] leading-none mt-3">
            See How We Teach
          </h2>

          <p className="mt-5 max-w-[520px] text-[15px] sm:text-[16px] leading-6 text-[var(--text-muted)]">
            A glimpse into our live classes and learning environment.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {classImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border cinemathic-border bg-[#1D1D1D]"
            >
              <img
                src={image}
                alt={`Cinemathic class ${index + 1}`}
                className="w-full aspect-[4/3] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ClassGallery