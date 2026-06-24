'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const navItems = [
    { label: 'Search', href: '/search' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(84,26,26,.18)] bg-[rgba(241,226,209,.96)] text-[#541A1A] backdrop-blur">
      <div className="border-b border-[rgba(84,26,26,.12)] bg-[rgba(220,195,170,.55)] px-4 py-2 text-center text-[11px] font-semibold tracking-[0.06em] text-[#541A1A] sm:px-6 lg:px-10">
        Press wire &amp; distribution
      </div>

      <div className="mx-auto grid min-h-[88px] max-w-[var(--editable-container)] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(84,26,26,.2)] bg-[rgba(241,226,209,.8)] lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <div className="hidden lg:flex lg:items-center lg:gap-10">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold text-[#541A1A] transition hover:text-[var(--editorial-red)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/" className="mx-auto flex max-w-[54vw] items-center gap-3 text-center">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#541A1A] text-sm font-black text-[#F1E2D1]">io</span>
          <span className="min-w-0 text-left">
            <span className="editorial-brand block truncate text-2xl font-black text-[#541A1A] sm:text-4xl">{SITE_CONFIG.name}</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.32em] text-[#810B38]">Press wire</span>
          </span>
        </Link>

        <div className="flex items-center justify-end gap-3 sm:gap-4">
          <Link href="/search" className="hidden h-10 w-10 items-center justify-center rounded-full border border-[rgba(84,26,26,.18)] text-[#541A1A] transition hover:border-[var(--editorial-red)] hover:text-[var(--editorial-red)] lg:inline-flex" aria-label="Search">
            <Search className="h-4 w-4" />
          </Link>
          {session ? (
            <>
              <Link href="/create" className="hidden text-sm font-semibold text-[#541A1A] sm:block">Create</Link>
              <button type="button" onClick={logout} className="hidden text-sm font-semibold text-[#541A1A] sm:block">Logout</button>
            </>
          ) : <Link href="/login" className="hidden text-sm font-semibold text-[#541A1A] sm:block">Sign in</Link>}
          <Link href={session ? '/create' : '/signup'} className="rounded-full bg-[#810B38] px-4 py-3 text-[11px] font-black tracking-[0.01em] text-[#F1E2D1] shadow-[0_12px_24px_rgba(129,11,56,.24)] transition hover:-translate-y-0.5 hover:bg-[#541A1A] sm:px-6">
            {session ? 'Submit Release' : 'Create account'}
          </Link>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[rgba(84,26,26,.15)] bg-[rgba(241,226,209,.98)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex items-center gap-3 rounded-[1.5rem] border border-[rgba(84,26,26,.14)] bg-[#F1E2D1] px-4 py-3">
            <Search className="h-4 w-4 text-[#810B38]" />
            <input name="q" type="search" placeholder="Search the archive" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#541A1A]" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Sign in', href: '/login' }, { label: 'Create account', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-[1.4rem] border border-[rgba(84,26,26,.12)] bg-[#F1E2D1] px-4 py-3 text-sm font-semibold text-[#541A1A] shadow-sm">
                {item.label}
              </Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-[1.4rem] border border-[rgba(84,26,26,.12)] bg-[#F1E2D1] px-4 py-3 text-left text-sm font-semibold text-[#541A1A] shadow-sm">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
