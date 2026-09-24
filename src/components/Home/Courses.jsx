import React from 'react'
import CourseCard from '../cards/CourseCard'

const Courses = () => {

  const courses = [
    {
      className: 'Class 12',
      prices: [
        {
          price: '₹4,000',
          description: 'Boards + JEE Preparation'
        },
        {
          price: '₹4,500',
          description: 'Boards + JEE + Class 11 Access'
        }
      ]
    },
    {
      className: 'Class 11',
      prices: [
        {
          price: '₹3,500',
          description: 'JEE Preparation + School Examination Preparation'
        }
      ]
    },
    {
      className: 'Class 10',
      prices: [
        {
          price: '₹3,000',
          description: 'CBSE Boards + JEE Foundation'
        },
        {
          price: '₹3,500',
          description: 'CBSE Boards + JEE Foundation + Class 9 Access'
        }
      ]
    },
    {
      className: 'Class 9',
      prices: [
        {
          price: '₹2,500',
          description: 'JEE Foundation + School Examination Preparation'
        }
      ]
    }
  ]

  return (
    <section
      id="courses"
      className="border-t cinemathic-border bg-[var(--background)] text-[var(--text)] transition-colors"
    >

      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-2 py-14 sm:py-16 lg:py-20">

        {/* Section Heading */}
        <div className="mt-8">

          <h2 className="serif text-[48px] sm:text-[60px] leading-none">
            Courses & Fee Structure
          </h2>

          <p className="mt-5 text-[15px] sm:text-[16px] text-[var(--text-muted)] max-w-[550px]">
            Focused mathematics programs for Classes 9–12, from school
            preparation to JEE foundation and preparation.
          </p>

        </div>

        {/* Course Cards */}
        
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