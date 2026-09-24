import React, { useState } from 'react'
import logo from "../assets/images/cm.png"

// Navbar links
const navLinks = [
  {
    name: 'About',
    link: '#about'
  },
  {
    name: 'Mentor',
    link: '#mentor'
  },
  {
    name: 'Courses',
    link: '#courses'
  },
  {
    name: 'Class',
    link: '#live'
  },
  {
    name: 'Test',
    link: '#tests'
  },
  {
    name: 'Reviews',
    link: '#reviews'
  }
]

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    setDarkMode(!darkMode)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)]/90 backdrop-blur-xl border-b border-[var(--border)] transition-colors">

      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 h-16 sm:h-[72px] flex items-center justify-between gap-4">

        {/* Logo */}
        <a
          href="#about"
          className="flex items-center gap-1 font-bold serif text-[22px] sm:text-[26px] lg:text-[28px] tracking-tight text-[var(--text)] shrink-0"
        >

          <img
            src={logo}
            alt="Cinemathic"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl shrink-0"
          />

          Cine

          <span className="text-green-700">
            math
          </span>

          ic

          <span className="text-green-700">
            .
          </span>

        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-[11px] xl:text-[12px] uppercase tracking-[0.14em]">

          {navLinks.map((item, index) => (

            <a
              key={index}
              href={item.link}
              className="cinemathic-link whitespace-nowrap"
            >
              {item.name}
            </a>

          ))}

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-9 h-9 rounded-full border cinemathic-border flex items-center justify-center text-[15px] text-[var(--text)] hover:border-[var(--primary)] transition shrink-0"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀' : '☾'}
          </button>

          {/* Contact */}
          <a
            href="#contact"
            className="cinemathic-button px-4 xl:px-5 py-2.5 rounded-full whitespace-nowrap"
          >
            Contact
          </a>

        </div>

        {/* Mobile / Tablet Buttons */}
        <div className="lg:hidden flex items-center gap-2 shrink-0">

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border cinemathic-border flex items-center justify-center text-[15px] text-[var(--text)] hover:border-[var(--primary)] transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀' : '☾'}
          </button>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border cinemathic-border flex items-center justify-center text-lg text-[var(--text)] hover:border-[var(--primary)] transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? '×' : '☰'}
          </button>

        </div>

      </div>

      {/* Mobile / Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t cinemathic-border bg-[var(--background)]">

          <div className="max-w-[1220px] mx-auto px-4 sm:px-6 py-3 sm:py-4">

            <div className="flex flex-col text-[12px] sm:text-[13px] uppercase tracking-widest">

              {navLinks.map((item, index) => (

                <a
                  key={index}
                  href={item.link}
                  onClick={closeMenu}
                  className={`py-3 sm:py-3.5 cinemathic-link cinemathic-border ${
                    index !== navLinks.length - 1 ? 'border-b' : ''
                  }`}
                >
                  {item.name}
                </a>

              ))}

              {/* Contact */}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-3 cinemathic-button text-center py-3 rounded-full"
              >
                Contact
              </a>

            </div>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar