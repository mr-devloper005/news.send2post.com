'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="border-t border-[rgba(84,26,26,.18)] bg-[#F1E2D1] text-[#541A1A]">
      <section className="border-b border-[rgba(84,26,26,.18)] bg-[#DCC3AA] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[1.2fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#810B38]">Ready to publish</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl">Ship your next announcement with a distribution-first workflow.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#541A1A]">Use the submission flow when you are ready to publish, or contact the team for launch planning and multi-channel distribution support.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#541A1A] px-8 py-4 text-sm font-black text-[#F1E2D1] transition hover:-translate-y-0.5 hover:bg-[#810B38]">Contact</Link>
            <Link href={session ? '/create' : '/signup'} className="inline-flex items-center justify-center rounded-full border border-[rgba(84,26,26,.2)] bg-[rgba(241,226,209,.5)] px-8 py-4 text-sm font-black text-[#541A1A] transition hover:border-[#541A1A]">Submit release</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1120px] px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_.6fr_.6fr_.6fr_.6fr]">
          <div>
            <Link href="/" className="editorial-brand text-5xl font-black text-[#541A1A] sm:text-6xl">{SITE_CONFIG.name}</Link>
            <p className="mt-6 max-w-sm text-base leading-8 text-[#541A1A]">{globalContent.footer?.description || SITE_CONFIG.description}</p>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#541A1A]">A clean distribution destination for announcements, coverage, and searchable updates across categories.</p>
          </div>
          <div>
            <h3 className="pb-3 text-[11px] font-black uppercase tracking-[0.28em] text-[#810B38]">Product</h3>
            <div className="grid gap-4 text-sm text-[#541A1A]">
              <Link href="/create" className="hover:text-[var(--editorial-red)]">Submit release</Link>
              <Link href="/search" className="hover:text-[var(--editorial-red)]">Search</Link>
            </div>
          </div>
          <div>
            <h3 className="pb-3 text-[11px] font-black uppercase tracking-[0.28em] text-[#810B38]">Company</h3>
            <div className="grid gap-4 text-sm text-[#541A1A]">
              <Link href="/contact" className="hover:text-[var(--editorial-red)]">Contact</Link>
              <Link href="/about" className="hover:text-[var(--editorial-red)]">About</Link>
            </div>
          </div>
          <div>
            <h3 className="pb-3 text-[11px] font-black uppercase tracking-[0.28em] text-[#810B38]">Legal</h3>
            <div className="grid gap-4 text-sm text-[#541A1A]">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Cookies</span>
            </div>
          </div>
          <div>
            <h3 className="pb-3 text-[11px] font-black uppercase tracking-[0.28em] text-[#810B38]">Account</h3>
            <div className="grid gap-4 text-sm text-[#541A1A]">
              {session ? (
                <>
                  <Link href="/create" className="hover:text-[var(--editorial-red)]">Publish</Link>
                  <button onClick={logout} className="text-left hover:text-[var(--editorial-red)]">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="hover:text-[var(--editorial-red)]">Sign in</Link>
                  <Link href="/signup" className="hover:text-[var(--editorial-red)]">Register</Link>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[rgba(84,26,26,.18)] pt-8">
          <div className="flex flex-col gap-4 text-sm text-[#541A1A] sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} {SITE_CONFIG.name}. All rights reserved.</p>
            <div className="inline-flex items-center gap-2 text-[#810B38]">
              <ArrowRight className="h-4 w-4" />
              <span>{SITE_CONFIG.domain || 'news.send2post.com'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
