import React from 'react'

const ReviewCard = ({ review }) => {
  return (
    <div className="shrink-0 w-[85%] sm:w-[48%] lg:w-[calc((100%-48px)/4)] snap-start self-start rounded-2xl overflow-hidden cinemathic-border cinemathic-card hover:scale-105 transition duration-500">

      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={review.image}
          alt={review.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" cinemathic-text px-1 py-0.5">
        <h3 className="text-[15px] font-semibold bg-green-900 px-2 rounded-2xl w-fit">
          {review.name}
        </h3>
      </div>

      <div className="px-4 pt-4">
        <div className="text-[17px] font-bold leading-6">
          {review.score}
        </div>

        <div className="mt-1 text-[14px] font-semibold">
          Class {review.className}
        </div>

        <div className="mt-1 text-[13px] text-white/60">
          {review.school}
        </div>
      </div>

      <div className="px-4 pt-5 pb-5">
        <p className="text-[13px] leading-6 text-white/70">
          “{review.quote}”
        </p>
      </div>

    </div>
  )
}

export default ReviewCard