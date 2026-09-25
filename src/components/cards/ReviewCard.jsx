import React from 'react'

const ReviewCard = ({ review }) => {
  return (
    <div className="shrink-0 w-[85%] sm:w-[48%] lg:w-[calc((100%-48px)/4)] rounded-2xl overflow-hidden border border-white/10 bg-[#1D1D1D] text-[#FFFCF5]">

      {/* Student Image */}
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={review.image}
          alt={review.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Student Name */}
      <div className="cinemathic-primary-bg text-[#111111] px-4 py-2.5">
        <h3 className="text-[15px] cinemathic-text">
          {review.name}
        </h3>
      </div>

      {/* Student Details */}
      <div className="px-4 pt-4">
        <div className="text-[17px] font-bold leading-6">
          {review.score}
        </div>

        <div className="mt-1 text-[14px] font-semibold">
         {review.className} {review.board} 
        </div>

        <div className="mt-1 text-[13px] cinemathic-text-secondary">
          {review.school}
        </div>
      </div>

      {/* Review */}
      <div className="px-4 pt-5 pb-5">
        <p className="text-[13px] leading-6 text-white/70">
          “{review.quote}”
        </p>
      </div>

    </div>
  )
}

export default ReviewCard