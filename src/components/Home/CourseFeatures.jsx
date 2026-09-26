import React from 'react'
import FeatureCard from '../cards/FeatureCard'
import features from '../../data/Features'

const CourseFeatures = () => {
  return (
    <section id='features' className="cinemathic-bg-soft">

      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-2 py-14 sm:py-16 lg:py-20">

        <div className="flex items-center gap-5">
          <h2 className="cinemathic-text text-[36px] text-[var(--text)] sm:text-[44px] ">
            What You Get
          </h2>

          <div className="h-px bg-[var(--border)] flex-1" />
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
            />
          ))}
        </div>

      </div>

    </section>
  )
}

export default CourseFeatures