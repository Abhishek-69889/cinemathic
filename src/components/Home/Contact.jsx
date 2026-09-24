import React from 'react'
import ContactCard from '../cards/ContactCard'

const Contact = () => {

  const contacts = [
    {
      type: 'WhatsApp',
      title: 'Chat Now',
      details: 'Fastest response',
      link: 'https://wa.me/916376418579',
      style: 'whatsapp'
    },
    {
      type: 'Call',
      title: '+91 6376418579',
      details: '9 AM — 9 PM IST',
      link: 'tel:+916376418579',
      style: 'normal'
    },
    {
      type: 'Email',
      title: 'cinemathicedu.pt@gmail.com',
      details: 'For collaborations',
      link: 'mailto:cinemathicedu.pt@gmail.com',
      style: 'normal'
    },
    {
      type: 'Instagram',
      title: '@cinemathic',
      details: 'Follow us',
      link: 'https://www.instagram.com/cinemathic/',
      style: 'normal'
    }
  ]

  return (
    <footer
      id="contact"
      className="bg-[#111111] text-[#FFFCF5] border-t-2 cinemathic-border"
    >

      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-2 py-10 sm:py-12 lg:py-14">

        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">

          <div>
            <h2 className="serif text-[56px] sm:text-[70px] leading-[0.9]">
              Let's talk
              <br />
              <span className="italic">maths.</span>
            </h2>

            <p className="mt-6 max-w-[470px] text-[15px] sm:text-[16px] leading-6 text-white/55">
              For admissions, batches, or a quick doubt — message directly.
              <br className="hidden sm:block" />
              Response within 2 hours, 9 AM to 9 PM IST.
            </p>
          </div>

          {/* Current Batch */}
          <div className="w-full lg:w-[250px] h-fit rounded-2xl border border-white/10 bg-white/5 p-6">

            <div className="text-[10px] uppercase tracking-[0.15em] text-white/40">
              Current Batch
            </div>

            <div className="serif text-[17px] leading-5 mt-4">
              JEE 2026 + Boards
              <br />
              Mon–Sat · 6 PM IST
            </div>

            <div className="mt-4 text-[11px] text-white/40">
              Live on Zoom · Notes on WhatsApp
            </div>

          </div>

        </div>

        {/* Contact Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {contacts.map((contact, index) => (
            <ContactCard
            key={index}
            contact={contact}
            />
          ))}

</div>

        {/* Right side branding */}
        <div className="mt-8 flex justify-end">

          <div className="text-right">

            <div className="serif text-[18px]">
              cinemathic<span className="text-[#2D5BFF]">.</span>
            </div>

            <div className="mt-2 text-[10px] uppercase tracking-[0.14em] text-white/30">
              Maths, taught like a story — Est. 2024
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.13em] text-white/30">

          <span>
            © 2026 Cinemathic · All rights reserved
          </span>

          <span>
            Kota · Online
          </span>

        </div>

      </div>

    </footer>
  )
}

export default Contact