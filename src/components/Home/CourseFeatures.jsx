import React from 'react'
import FeatureCard from '../cards/FeatureCard'

const features = [
  {
    icon: '📚',
    title: '6 Days of Live Classes Every Week',
    description:
      'Regular live classes designed to maintain consistency, build concepts step-by-step, and keep students on track.'
  },
  {
    icon: '📝',
    title: 'Weekly Tests — Every Sunday',
    description:
      'A structured test every Sunday to evaluate preparation, identify weak areas, and build exam temperament.'
  },
  {
    icon: '🎯',
    title: 'Personalized Progress Tracking',
    description:
      'Student performance is monitored regularly to track strengths, weaknesses, and academic progress.'
  },
  {
    icon: '👥',
    title: 'Micro-Group Learning',
    description:
      'Small, focused batches encourage participation, accountability, and meaningful interaction.'
  },
  {
    icon: '💬',
    title: 'Direct Doubt Support',
    description:
      'Students receive direct access to the teacher for academic doubts outside regular class hours.'
  },
  {
    icon: '🎥',
    title: 'Interactive Two-Way Classes',
    description:
      'Students actively participate through questions, discussions, and problem-solving.'
  },
  {
    icon: '🎙️',
    title: 'Camera & Microphone-Enabled Classes',
    description:
      'Camera and microphone participation encourages attentiveness, interaction, and classroom discipline.'
  },
  {
    icon: '💻',
    title: 'Computer-Based Testing',
    description:
      'Regular online tests are conducted through a structured computer-based testing system.'
  },
  {
    icon: '📊',
    title: 'Detailed Test Analysis',
    description:
      'Marks, accuracy, question-wise performance, time management, and areas for improvement.'
  },
  {
    icon: '📖',
    title: 'Daily Practice Problems',
    description:
      'Daily problems help students revise concepts, strengthen problem-solving skills, and stay consistent.'
  },
  {
    icon: '👨‍👩‍👦',
    title: 'Monthly Parent–Teacher Meetings',
    description:
      'Monthly meetings to discuss academic progress, performance, strengths, and areas for improvement.'
  }
]

const CourseFeatures = () => {
  return (
    <section className="cinemathic-bg transition-colors duration-300">

      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-2 py-14 sm:py-16 lg:py-20">

        <div className="flex items-center gap-5">
          <h2 className="serif text-[36px] sm:text-[44px] text-[var(--text)]">
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