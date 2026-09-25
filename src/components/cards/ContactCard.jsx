import React from 'react'

const ContactCard = ({ contact }) => {
  const isExternal =
    contact.type === 'WhatsApp' ||
    contact.type === 'Instagram' ||
    contact.type === 'YouTube'

  return (
    <a
      href={contact.link}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="bg-[#1D1D1D] border border-white/10 text-[#FFFCF5] rounded-2xl p-5 flex flex-col justify-between min-h-[136px] hover:scale-[1.01] transition"
    >
      <div className="flex justify-between items-start">
        <div className="text-[10px] uppercase tracking-[0.15em] text-white/40">
          {contact.type}
        </div>

        <div className="w-8 h-8 rounded-full bg-[var(--primary)] text-white grid place-items-center text-sm">
          ↗
        </div>
      </div>

      <div>
        <div
          className={`font-medium ${
            contact.type === 'Email'
              ? 'text-[13px] sm:text-[14px] break-all'
              : 'text-[14px]'
          }`}
        >
          {contact.title}
        </div>

        <div className="mt-1 text-[11px] text-white/40">
          {contact.details}
        </div>
      </div>
    </a>
  )
}

export default ContactCard