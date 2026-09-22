import React from 'react'

const Contact = () => {
  return (
    <footer id="contact" className="border-t border-black/10 bg-[#FFFCF5]">
        <div className="max-w-300 mx-auto px-6 py-16">
          <h3 className="serif text-[56px] leading-[0.9]">Let's talk maths.</h3>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <a href="https://wa.me/919999999999" target="_blank" className="rounded-2xl border border-black/10 p-5 flex justify-between items-center hover:border-black transition">
              <div><div className="text-[11px] uppercase tracking-widest text-black/40">WhatsApp</div><div className="mt-1 text-[14px] font-medium">Chat on WhatsApp</div></div>
              <div className="w-9 h-9 rounded-full bg-[#25D366] grid place-items-center text-white">↗</div>
            </a>
            <a href="tel:+919999999999" className="rounded-2xl border border-black/10 p-5 flex justify-between items-center hover:border-black transition">
              <div><div className="text-[11px] uppercase tracking-widest text-black/40">Call</div><div className="mt-1 text-[14px] font-medium">+91 99999 99999</div></div>
              <div className="w-9 h-9 rounded-full bg-black text-white grid place-items-center">↗</div>
            </a>
            <a href="mailto:hello@cinemathic.com" className="rounded-2xl border border-black/10 p-5 flex justify-between items-center hover:border-black transition">
              <div><div className="text-[11px] uppercase tracking-widest text-black/40">Email</div><div className="mt-1 text-[14px] font-medium">hello@cinemathic.com</div></div>
              <div className="w-9 h-9 rounded-full bg-black text-white grid place-items-center">↗</div>
            </a>
          </div>
          <div className="mt-16 pt-6 border-t border-black/10 flex justify-between text-[11px] uppercase tracking-widest text-black/40">
            <span>© 2026 Cinemathic</span>
            <span>Built for toppers</span>
          </div>
        </div>
      </footer>
  )
}

export default Contact
