import React from 'react'

const FeatureCard = ({ feature }) => {
  return (
    <div className="cinemathic-dark-card rounded-2xl p-5 transition-colors">

      <div className="text-2xl">
        {feature.icon}
      </div>

      <h3 className="mt-4 text-[14px] font-medium">
        {feature.title}
      </h3>

      <p className="mt-2 text-[12px] leading-5 opacity-60">
        {feature.description}
      </p>

    </div>
  )
}

export default FeatureCard