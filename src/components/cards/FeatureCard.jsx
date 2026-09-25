import React from 'react'

const FeatureCard = ({ feature }) => {
  return (
    <div className="cinemathic-card  rounded-2xl p-5">

      <div className="text-2xl">
        {feature.icon}
      </div>

      <h3 className="mt-4 text-[14px] cinemathic-text font-medium">
        {feature.title}
      </h3>

      <p className="mt-2  text-[12px] cinemathic-text-secondary leading-5 opacity-60">
        {feature.description}
      </p>

    </div>
  )
}

export default FeatureCard