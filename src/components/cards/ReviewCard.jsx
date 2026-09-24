import React from 'react'

const ReviewCard = ({ review }) => {
  return (
    <div className="rounded-[20px] border cinemathic-border bg-[var(--card)] p-7">

      {/* Quote */}
      <div className="serif text-[28px] leading-none text-[var(--primary)]">
        “
      </div>

      {/* Review */}
      <p className="mt-2 text-[16px] leading-7">
        {review.quote}
      </p>

      {/* Student Info */}
      <div className="mt-6 flex items-center gap-3">

        <div className="w-9 h-9 rounded-full cinemathic-dark grid place-items-center text-[11px]">
          {review.name[0]}
        </div>

        <div>
          <div className="text-[13px] font-medium">
            {review.name}
          </div>

          <div className="text-[11px] text-[var(--text-muted)]">
            {review.details}
          </div>
        </div>

        {/* Rating */}
        <div className="ml-auto text-[12px] text-[var(--secondary)]">
          {review.rating}
        </div>

      </div>

    </div>
  )
}

export default ReviewCard