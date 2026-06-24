'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Editorial desk', body: 'Send story ideas, corrections, source material, and publication questions.' },
  { icon: Megaphone, title: 'Media partnerships', body: 'Discuss distribution, syndication, newsroom collaborations, and campaigns.' },
  { icon: Mail, title: 'General support', body: 'Reach the team for account, publishing, or site-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#F1E2D1] text-[#541A1A]">
        <section className="border-b border-[#541A1A] bg-[#F1E2D1]">
          <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#810B38]">{pagesContent.contact.eyebrow}</p>
            <h1 className="editorial-brand mt-4 max-w-5xl text-6xl font-black leading-[0.92] tracking-[-0.055em] sm:text-8xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-2xl border-l-4 border-[#810B38] pl-5 text-base font-semibold leading-8 text-[#541A1A]">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] border-x border-[#541A1A] bg-[#F1E2D1] lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="border-b border-[#541A1A] bg-[#541A1A] text-[#F1E2D1] lg:border-b-0 lg:border-r">
            {desks.map((desk, index) => (
              <div key={desk.title} className="border-b border-[rgba(241,226,209,.25)] p-7 last:border-b-0 sm:p-9">
                <div className="flex items-center justify-between"><desk.icon className="h-5 w-5 text-[#DCC3AA]" /><span className="text-xs font-black text-[rgba(241,226,209,.45)]">0{index + 1}</span></div>
                <h2 className="editorial-serif mt-6 text-3xl font-black">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[rgba(241,226,209,.65)]">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="p-6 sm:p-10 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#810B38]">Send a message</p>
            <h2 className="editorial-serif mt-3 text-4xl font-black">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
