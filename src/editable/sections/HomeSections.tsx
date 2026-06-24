import Link from 'next/link'
import { ArrowRight, CheckCircle2, Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { CompactIndexCard, getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const featureCards = posts.slice(1, 4)

  if (!lead) {
    return (
      <section className="bg-[linear-gradient(135deg,#810B38_0%,#541A1A_100%)] text-[#F1E2D1]">
        <div className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#DCC3AA]">Distribution platform</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-7xl">{pagesContent.home.hero.title.join(' ')}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{pagesContent.home.hero.description}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[linear-gradient(135deg,#810B38_0%,#541A1A_100%)] text-[#F1E2D1]">
      <div className="mx-auto max-w-[1120px] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#DCC3AA]">Distribution platform</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-7xl">Reach audiences through a structured press release workflow.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(241,226,209,.78)]">Submit once, route to broad syndication targets, and keep your team aligned with clear editorial packaging and media-ready updates.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/create" className="inline-flex items-center gap-2 rounded-full bg-[#F1E2D1] px-7 py-4 text-sm font-black text-[#541A1A] shadow-[0_16px_30px_rgba(84,26,26,.22)] transition hover:-translate-y-0.5">Submit Press Release <ArrowRight className="h-4 w-4" /></Link>
              <Link href={primaryRoute} className="inline-flex items-center gap-2 rounded-full border border-[rgba(241,226,209,.3)] px-7 py-4 text-sm font-black text-[#F1E2D1] transition hover:bg-[rgba(241,226,209,.1)]">View press releases</Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[2rem] border border-[rgba(241,226,209,.12)] bg-[rgba(241,226,209,.1)] p-6 shadow-[0_20px_40px_rgba(84,26,26,.15)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#DCC3AA]">Distribution preview</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">Release pulse</h2>
              <div className="mt-6 space-y-3">
                {[
                  'Structured headline and body validation',
                  'Category routing into the wire archive',
                  'Pickup and engagement reporting snapshots',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-full bg-[rgba(241,226,209,.08)] px-4 py-3 text-sm text-[rgba(241,226,209,.88)]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#DCC3AA]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.8rem] border border-white/12 bg-white/10 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#DCC3AA]">Social pickup</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['X', 'LinkedIn', 'Newsroom', 'APIs', 'Press', 'Media'].map((chip) => (
                  <span key={chip} className="rounded-full border border-[rgba(241,226,209,.18)] px-4 py-2 text-xs font-semibold text-[rgba(241,226,209,.88)]">{chip}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[2.2rem] border border-[rgba(84,26,26,.12)] bg-[rgba(241,226,209,.92)] p-6 text-[#541A1A] shadow-[0_22px_60px_rgba(84,26,26,.08)] sm:p-8">
          <div className="grid gap-7 lg:grid-cols-[1.2fr_.88fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#810B38]">Trusted distribution footprint</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-black leading-[1.04] tracking-[-0.05em] sm:text-5xl">Designed like a publishing front page, powered by release workflows.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Wire feeds', 'Editorial desks', 'Search surfaces', 'Industry verticals', 'Comms teams'].map((chip) => (
                <div key={chip} className="rounded-full border border-[rgba(129,11,56,.14)] bg-[#F1E2D1] px-4 py-3 text-sm font-medium text-[#541A1A]">
                  <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full border border-[#810B38]" />
                  {chip}
                </div>
              ))}
            </div>
          </div>
        </div>

        {featureCards.length ? (
          <div className="mt-14">
            <div className="mb-6 flex items-end justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#DCC3AA]">Top stories</p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#F1E2D1] sm:text-5xl">Curated release highlights</h2>
              </div>
              <Link href={primaryRoute} className="hidden items-center gap-2 text-sm font-black text-[#DCC3AA] md:inline-flex">Browse all updates <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {featureCards.map((post, index) => (
                <Link key={post.id} href={postHref(primaryTask, post, primaryRoute)} className="rounded-[1.8rem] border border-[rgba(241,226,209,.12)] bg-[rgba(241,226,209,.08)] p-5 text-[#F1E2D1] shadow-[0_16px_30px_rgba(84,26,26,.1)] backdrop-blur transition hover:-translate-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#DCC3AA]">Feature {index + 1}</p>
                  <h3 className="mt-4 line-clamp-3 text-2xl font-black leading-[1.14] tracking-[-0.04em]">{post.title}</h3>
                  <p className="mt-4 line-clamp-2 text-sm leading-7 text-[rgba(241,226,209,.72)]">{getEditableExcerpt(post, 120) || 'Open the release for full details.'}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#DCC3AA]">Read release <ArrowRight className="h-4 w-4" /></span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[4] || posts[0]
  const notes = [
    { title: 'Release quality checks', description: 'Automatic formatting and consistency checks before publishing.' },
    { title: 'Distribution controls', description: 'Route stories to the right category and partner surfaces.' },
    { title: 'Visual storytelling', description: 'Mix announcements with highlights and editorial-style blocks.' },
  ]
  const categories = Array.from(new Set(posts.slice(0, 5).map((post) => getEditableCategory(post)))).slice(0, 5)

  return (
    <section className="bg-[#F1E2D1]">
      <div className="mx-auto max-w-[1120px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_.92fr]">
          <div className="rounded-[2.2rem] border border-[rgba(84,26,26,.12)] bg-[#F1E2D1] p-7 shadow-[0_18px_50px_rgba(84,26,26,.06)] sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#810B38]">Featured workflow</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.08] tracking-[-0.05em] text-[#541A1A] sm:text-5xl">Build, review, and publish faster with a newsroom-ready structure.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#541A1A]">Keep teams aligned from first draft to final distribution. Your metadata, categories, featured visuals, and archive visibility all live in one repeatable flow.</p>
            <Link href="/create" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#810B38] px-6 py-4 text-sm font-black text-[#F1E2D1] transition hover:-translate-y-0.5 hover:bg-[#541A1A]">Start submission <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="space-y-4">
            {notes.map((item) => (
              <div key={item.title} className="rounded-[1.7rem] border border-[rgba(84,26,26,.12)] bg-[#F1E2D1] p-5 shadow-[0_16px_30px_rgba(84,26,26,.05)]">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#541A1A] text-[#F1E2D1]">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-black tracking-[-0.03em] text-[#541A1A]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#541A1A]">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#810B38]">Categories</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#541A1A] sm:text-5xl">Browse by topic</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#541A1A]">Jump into the archive with a category filter built for fast scanning on every device.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {categories.map((category) => (
              <Link key={category} href={`${primaryRoute}?category=${encodeURIComponent(category.toLowerCase().replace(/\s+/g, '-'))}`} className="group flex items-center justify-between rounded-[1.5rem] border border-[rgba(84,26,26,.12)] bg-[#F1E2D1] px-6 py-5 text-lg font-black text-[#541A1A] shadow-[0_14px_28px_rgba(84,26,26,.05)] transition hover:-translate-y-1 hover:text-[#810B38]">
                <span>{category}</span>
                <ArrowRight className="h-5 w-5 text-[#810B38] transition group-hover:translate-x-1 group-hover:text-[#810B38]" />
              </Link>
            ))}
          </div>
        </div>

        {lead ? (
          <div className="mt-16">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-[rgba(84,26,26,.12)] pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#810B38]">Latest press releases</p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#541A1A] sm:text-5xl">Latest from the wire</h2>
                <p className="mt-3 text-base text-[#541A1A]">Recently published announcements from the wire.</p>
              </div>
              <Link href={primaryRoute} className="inline-flex items-center gap-2 rounded-full border border-[rgba(84,26,26,.16)] bg-[#F1E2D1] px-6 py-3 text-sm font-black text-[#541A1A] transition hover:border-[#810B38] hover:text-[#810B38]">Open full archive <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {posts.slice(0, 6).map((post, index) => (
                <RailPostCard key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const testimonials = [
    { quote: 'The sectioned homepage makes it easier for leadership to spot key announcements without endless scrolling.', name: 'Communications director', company: 'B2B software' },
    { quote: 'Our editors can move from hero updates to recent releases in one pass, and mobile readability is much better.', name: 'PR manager', company: 'Healthcare network' },
    { quote: 'The visual hierarchy feels like a real publishing front page while still preserving submission flow and archive depth.', name: 'VP Marketing', company: 'Financial services' },
  ]

  return (
    <section className="bg-[#DCC3AA]">
      <div className="mx-auto max-w-[1120px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-4xl font-black tracking-[-0.05em] text-[#541A1A] sm:text-5xl">What teams say</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[1.9rem] border border-[rgba(84,26,26,.12)] bg-[#F1E2D1] p-7 shadow-[0_16px_32px_rgba(84,26,26,.05)]">
              <div className="text-lg text-[#810B38]">(◉)</div>
              <p className="mt-5 text-lg leading-9 text-[#541A1A]">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-7 border-t border-[rgba(84,26,26,.1)] pt-5">
                <p className="text-xl font-black text-[#541A1A]">{item.name}</p>
                <p className="mt-1 text-sm text-[#541A1A]">{item.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = (collected.length ? collected : posts).slice(0, 6)
  const lead = source[0]
  const compact = source.slice(1, 4)
  const horizontal = source.slice(4, 6)

  if (!lead) return null

  return (
    <section className="bg-[#F1E2D1]">
      <div className="mx-auto max-w-[1120px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <Link href={postHref(primaryTask, lead, primaryRoute)} className="group overflow-hidden rounded-[2.2rem] border border-[rgba(84,26,26,.12)] bg-[#F1E2D1] shadow-[0_22px_50px_rgba(84,26,26,.06)]">
            <div className="grid lg:grid-cols-[1.08fr_.92fr]">
              <div className="relative min-h-[320px] overflow-hidden bg-[#DCC3AA]">
                <img src={getEditablePostImage(lead)} alt={lead.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#810B38]">Featured briefing</p>
                <h2 className="mt-4 text-4xl font-black leading-[1.04] tracking-[-0.05em] text-[#541A1A]">{lead.title}</h2>
                <p className="mt-5 text-base leading-8 text-[#541A1A]">{getEditableExcerpt(lead, 220)}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#810B38]">Read the full release <ArrowRight className="h-4 w-4" /></span>
              </div>
            </div>
          </Link>

          <aside className="rounded-[2rem] border border-[rgba(84,26,26,.12)] bg-[#F1E2D1] p-6 shadow-[0_16px_34px_rgba(84,26,26,.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#810B38]">Briefing</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#541A1A]">Quick reads</h2>
            <div className="mt-5">
              {compact.map((post, index) => (
                <CompactIndexCard key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
              ))}
            </div>
          </aside>
        </div>

        {horizontal.length ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {horizontal.map((post, index) => (
              <Link key={post.id} href={postHref(primaryTask, post, primaryRoute)} className="group grid gap-5 rounded-[1.9rem] border border-[rgba(84,26,26,.12)] bg-[#F1E2D1] p-5 shadow-[0_16px_30px_rgba(84,26,26,.05)] sm:grid-cols-[180px_1fr]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.3rem] bg-[#DCC3AA]">
                  <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#810B38]">Update {index + 1}</p>
                  <h3 className="mt-3 line-clamp-3 text-2xl font-black leading-[1.08] tracking-[-0.04em] text-[#541A1A] group-hover:text-[#810B38]">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#541A1A]">{getEditableExcerpt(post, 130)}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : null}

        <form action="/search" className="mt-10 grid gap-4 rounded-[2rem] border border-[rgba(84,26,26,.12)] bg-[#F1E2D1] p-6 shadow-[0_16px_34px_rgba(84,26,26,.05)] sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
          <div>
            <h3 className="text-3xl font-black tracking-[-0.05em] text-[#541A1A]">Search the full archive</h3>
            <p className="mt-2 text-sm text-[#541A1A]">Explore every {taskLabel(primaryTask).toLowerCase()} published by {SITE_CONFIG.name}.</p>
          </div>
          <label className="flex items-center gap-3 rounded-full border border-[rgba(84,26,26,.14)] bg-[#DCC3AA] px-4 py-3 sm:min-w-[420px]">
            <Search className="h-4 w-4 text-[#810B38]" />
            <input name="q" placeholder="Search stories" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#541A1A]" />
            <button className="rounded-full bg-[#541A1A] px-5 py-2.5 text-xs font-black uppercase tracking-[.14em] text-[#F1E2D1]">Search</button>
          </label>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return null
}
