import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--editable-container': '1120px',
  '--slot4-page-bg': '#f1e2d1',
  '--slot4-page-text': '#541a1a',
  '--slot4-panel-bg': '#dcc3aa',
  '--slot4-surface-bg': '#f1e2d1',
  '--slot4-muted-text': '#541a1a',
  '--slot4-soft-muted-text': '#810b38',
  '--slot4-accent': '#810b38',
  '--slot4-accent-fill': '#810b38',
  '--slot4-accent-soft': '#dcc3aa',
  '--slot4-dark-bg': '#541a1a',
  '--slot4-dark-text': '#f1e2d1',
  '--slot4-media-bg': '#dcc3aa',
  '--slot4-cream': '#f1e2d1',
  '--slot4-warm': '#dcc3aa',
  '--slot4-lavender': '#810b38',
  '--slot4-gray': '#dcc3aa',
  '--slot4-body-gradient': 'linear-gradient(180deg, #f1e2d1 0%, #f1e2d1 52%, #dcc3aa 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-[rgba(84,26,26,0.15)]',
  darkBorder: 'border-[rgba(241,226,209,0.2)]',
  shadow: 'shadow-[0_10px_30px_rgba(84,26,26,0.08)]',
  shadowStrong: 'shadow-[0_24px_70px_rgba(84,26,26,0.18)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(84,26,26,0.02),rgba(84,26,26,0.78))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[var(--editable-container)] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-12 sm:py-16 lg:py-20',
  },
  layout: {
    safeGrid: 'grid gap-px bg-[rgba(84,26,26,0.15)] md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start',
    rail: 'flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[230px] shrink-0 snap-start sm:w-[260px]',
  },
  type: {
    eyebrow: 'text-[11px] font-black uppercase tracking-[0.2em]',
    heroTitle: 'text-4xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[5.4rem]',
    sectionTitle: 'text-3xl font-black leading-none tracking-[-0.045em] sm:text-4xl',
    body: 'text-base leading-8',
  },
  surface: {
    card: `border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    soft: `border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `${editablePalette.darkBg} ${editablePalette.darkText}`,
  },
  button: {
    primary: `inline-flex items-center justify-center gap-2 bg-[var(--slot4-dark-bg)] px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-[var(--slot4-dark-text)] transition hover:bg-[var(--slot4-accent-fill)]`,
    secondary: `inline-flex items-center justify-center gap-2 border border-[rgba(84,26,26,0.3)] bg-transparent px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-[var(--slot4-page-text)] transition hover:bg-[var(--slot4-dark-bg)] hover:text-[var(--slot4-dark-text)]`,
    accent: `inline-flex items-center justify-center gap-2 bg-[var(--slot4-accent-fill)] px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-[var(--slot4-dark-text)] transition hover:bg-[var(--slot4-dark-bg)]`,
  },
  media: {
    frame: `relative overflow-hidden ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(84,26,26,0.14)]',
    fade: 'transition duration-300 hover:opacity-75',
  },
} as const

export const aiLayoutRules = [
  'All visible layout decisions belong inside src/editable; keep data, SEO, API, and route logic untouched.',
  'Use a publication-style cream masthead, deep maroon navigation, burgundy editorial accents, and sharp image-led grids.',
  'Keep dynamic post fetching intact and never replace backend posts with mock arrays.',
  'Use postHref() for all post links so route aliases and task-specific detail pages remain functional.',
  'Prioritize readable desktop and mobile layouts with broad story columns and a focused long-form article measure.',
  'Branding must remain dynamic from SITE_CONFIG; never hardcode a reference publication name or logo.',
] as const
