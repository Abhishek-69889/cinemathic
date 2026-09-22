import React, { useState } from 'react'
import logo from "../assets/images/cm.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFCF5]/90 backdrop-blur-xl border-b border-black/10">

      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-0 h-16 sm:h-[72px] flex items-center justify-between">

        {/* Logo */}
        
        <a href="#about" className='flex items-center gap-1 serif text-[24px] sm:text-[28px] tracking-tight'>
          <img
            src={logo}
            alt="Cinemathic"
            className="w-10 sm:w-10 h-10 rounded-2xl"
          />
          Cinemathic<span className="text-green-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[12px] lg:text-[13px] uppercase tracking-widest">

          <a
            href="#about"
            className="hover:text-[#2D5BFF] transition"
          >
            About
          </a>

          <a
            href="#mentor"
            className="hover:text-[#2D5BFF] transition"
          >
            Mentor
          </a>

          <a
            href="#live"
            className="hover:text-[#2D5BFF] transition"
          >
            Class
          </a>

          <a
            href="#tests"
            className="hover:text-[#2D5BFF] transition"
          >
            Test
          </a>

          <a
            href="#reviews"
            className="hover:text-[#2D5BFF] transition"
          >
            Reviews
          </a>

          <a
            href="#contact"
            className="bg-black text-white px-5 py-2.5 rounded-full hover:bg-[#2D5BFF] transition"
          >
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-lg"
        >
          {menuOpen ? '×' : '☰'}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-black/10 bg-[#FFFCF5]">

          <div className="px-5 py-5 flex flex-col gap-2 text-[13px] uppercase tracking-widest">

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="py-3 hover:text-[#2D5BFF]"
            >
              About
            </a>

            <a
              href="#mentor"
              onClick={() => setMenuOpen(false)}
              className="py-3 hover:text-[#2D5BFF]"
            >
              Mentor
            </a>

            <a
              href="#live"
              onClick={() => setMenuOpen(false)}
              className="py-3 hover:text-[#2D5BFF]"
            >
              Class
            </a>

            <a
              href="#tests"
              onClick={() => setMenuOpen(false)}
              className="py-3 hover:text-[#2D5BFF]"
            >
              Test
            </a>

            <a
              href="#reviews"
              onClick={() => setMenuOpen(false)}
              className="py-3 hover:text-[#2D5BFF]"
            >
              Reviews
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-black text-white text-center py-3 rounded-full hover:bg-[#2D5BFF] transition"
            >
              Contact
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar