import React from 'react'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#FFFCF5]/80 backdrop-blur-xl border-b border-black/10">
        <div className="max-w-300 mx-auto px-6 h-18 flex items-center justify-between">
          <div className="serif text-[28px] tracking-tight">cinemathic<span className="text-[#2D5BFF]">.</span></div>
          <div className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-widest">
            <a href="#about" className="hover:text-[#2D5BFF]">About</a>
            <a href="#mentor" className="hover:text-[#2D5BFF]">Mentor</a>
            <a href="#live" className="hover:text-[#2D5BFF]">Class</a>
            <a href="#tests" className="hover:text-[#2D5BFF]">Test</a>
            <a href="#reviews" className="hover:text-[#2D5BFF]">Reviews</a>
            <a href="#contact" className="bg-black text-white px-5 py-2.5 rounded-full hover:bg-[#2D5BFF] transition">Contact</a>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
