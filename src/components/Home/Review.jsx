import React from 'react'
import ReviewCard from '../cards/ReviewCard'

const Review = () => {

  const reviews = [
    {
      quote: 'Sir made calculus feel like a movie plot twist. Finally scored 97 in boards.',
      name: 'Ananya Sharma',
      details: 'Class 12 • 97% Boards',
      rating: '★★★★★'
    },
    {
      quote: 'No formula ratta. He taught why integration works. Cracked JEE Advanced.',
      name: 'Rohan Mehta',
      details: 'AIR 342 • IIT Bombay',
      rating: '★★★★★'
    },
    {
      quote: 'Best maths teacher for intuition. DPPs are exactly JEE level.',
      name: 'Kavya Singh',
      details: 'Class 11 • NTSE Scholar',
      rating: '★★★★★'
    },
    {
      quote: 'From 60 to 92 in 4 months. Cinemathic lives up to its name.',
      name: 'Aditya Verma',
      details: 'Class 12 • JEE 2026 Aspirant',
      rating: '★★★★★'
    }
  ]

  return (
    <section
      id="reviews"
      className="border-t cinemathic-border bg-[var(--background)] text-[var(--text)] transition-colors"
    >
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-2 py-20">

        {/* Heading */}
        <div className="flex justify-between items-end gap-4">

          <div className="uppercase tracking-[0.2em] text-[var(--secondary)] text-md">
            Words from Students
          </div>

          <div className="serif text-[18px]">
            4.9/5 from 800+ students
          </div>

        </div>

        {/* Review Cards */}
        {/* Review Cards */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">

         {reviews.map((review, index) => (
            <ReviewCard
           key={index}
           review={review}
           />
         ))}
        </div>
      </div>
    </section>
  )
}

export default Review