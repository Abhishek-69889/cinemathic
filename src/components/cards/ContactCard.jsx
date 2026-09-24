import React from 'react'

const ContactCard = ({ contact }) => {
  const isWhatsApp = contact.style === 'whatsapp'

  const isExternal =
    contact.type === 'WhatsApp' ||
    contact.type === 'Instagram'

  return (
    <a
      href={contact.link}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={
        isWhatsApp
          ? 'bg-[#FFFCF5] text-black rounded-2xl p-5 flex flex-col justify-between min-h-[136px] hover:scale-[1.01] transition'
          : 'bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between min-h-[136px] hover:bg-white/10 transition'
      }
    >

      {/* Top */}
      <div className="flex justify-between items-start">

        <div
          className={
            isWhatsApp
              ? 'text-[10px] uppercase tracking-[0.15em] text-black/40'
              : 'text-[10px] uppercase tracking-[0.15em] text-white/40'
          }
        >
          {contact.type}
        </div>

        <div
          className={
            isWhatsApp
              ? 'w-8 h-8 rounded-full bg-[#25D366] text-white grid place-items-center text-sm'
              : 'w-8 h-8 rounded-full bg-white text-black grid place-items-center text-sm'
          }
        >
          ↗
        </div>

      </div>

      {/* Contact Information */}
      <div>

        <div
          className={
            contact.type === 'Email'
              ? 'text-[13px] sm:text-[14px] font-medium break-all'
              : 'text-[14px] font-medium'
          }
        >
          {contact.title}
        </div>

        <div
          className={
            isWhatsApp
              ? 'mt-1 text-[11px] text-black/40'
              : 'mt-1 text-[11px] text-white/40'
          }
        >
          {contact.details}
        </div>

      </div>

    </a>
  )
}

export default ContactCard