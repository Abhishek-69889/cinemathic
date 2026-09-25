import React from 'react'
import CourseCard from '../cards/CourseCard'
import courses from '../../data/Courses'

const Courses = () => {
  return (
    <section
      id="courses"
      className="cinemathic-bg"
    >
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-2 py-14 sm:py-16 lg:py-20">

        <div className=''>
          <div className='flex items-center gap-5'>
            <h2 className="cinemathic-text text-[var(--text)] text-[48px] sm:text-[60px] leading-none ">
            Courses & Fee Structure
          </h2>
            <div className="h-px bg-[var(--border)] flex-1" />

          </div>

          <p className="mt-5 text-[15px] sm:text-[16px] text-[var(--text-muted)] max-w-[550px]">
            Focused mathematics programs for Classes 9–12, from school
            preparation to JEE foundation and preparation.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Courses