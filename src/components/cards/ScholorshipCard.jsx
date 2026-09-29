import React from 'react'

const ScholarshipCard = ({ scholarship }) => {
  return (
    <div className="rounded-2xl cinemathic-dark-card p-5 hover:scale-101 transition duration-500">

      <div className="flex items-center justify-between">
        <span className="text-2xl">
          {scholarship.icon}
        </span>

        <span className="text-[32px] font-semibold leading-none text-[var(--primary)]">
          {scholarship.percentage}
        </span>
      </div>

      <h3 className="mt-5 text-[15px] font-medium">
        {scholarship.title}
      </h3>

      <p className="mt-3 text-[12px] leading-5 cinemathic-text-secondary">
        {scholarship.description}
      </p>

    </div>
  )
}

export default ScholarshipCard