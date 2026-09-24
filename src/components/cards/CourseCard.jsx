import React from 'react'

const CourseCard = ({ course }) => {
  return (
    <div className="cinemathic-dark-card rounded-3xl p-6">

      {/* Class */}
      <div className="text-[10px] uppercase tracking-[0.15em] opacity-50">
        {course.className}
      </div>

      <h3 className="serif text-[28px] mt-4">
        Mathematics
      </h3>

      {/* Pricing Options */}
      <div className="mt-8">

        {course.prices.map((item, index) => (

          <div key={index}>

            <div className="text-[28px] font-medium">
              {item.price}

              <span className="text-[12px] opacity-50">
                /month
              </span>
            </div>

            <p className="mt-2 text-[12px] leading-5 opacity-60">
              {item.description}
            </p>

            {/* Divider between multiple pricing options */}
            {index < course.prices.length - 1 && (
              <div className="border-t border-current/10 my-6" />
            )}

          </div>

        ))}

      </div>

    </div>
  )
}

export default CourseCard