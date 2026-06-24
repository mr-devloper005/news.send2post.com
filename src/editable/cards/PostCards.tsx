import Link from 'next/link'
import { ArrowRight, Clock3 } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'

export function getEditablePostImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const images = Array.isArray(content.images) ? content.images : []
  const contentImage = images.find((value): value is string => typeof value === 'string' && Boolean(value))
  const directImage = ['featuredImage', 'image', 'thumbnail', 'coverImage', 'logo']
    .map((key) => content[key])
    .find((value): value is string => typeof value === 'string' && Boolean(value))
  return mediaUrl || directImage || contentImage || '/placeholder.svg?height=900&width=1400'
}

export function getEditableExcerpt(post?: SitePost | null, limit = 150) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    (typeof content.body === 'string' && content.body) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

export function getEditableCategory(post?: SitePost | null) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  return (typeof content.category === 'string' && content.category) || post?.tags?.[0] || 'Latest'
}

export function postHref(task: TaskKey, post: SitePost, route = `/${task}`) {
  return `${route}/${post.slug}`
}

export function EditorialFeatureCard({ post, href, label = 'Cover story' }: { post: SitePost; href: string; label?: string }) {
  return (
    <Link href={href} className="group block overflow-hidden rounded-[2.2rem] border border-[rgba(84,26,26,.14)] bg-[#541A1A] text-[#F1E2D1] shadow-[0_22px_70px_rgba(84,26,26,.18)]">
      <div className="relative aspect-[16/10] min-h-[410px] overflow-hidden">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(84,26,26,.08),rgba(84,26,26,.92))]" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
          <span className="rounded-full bg-[#810B38] px-3 py-2 text-[10px] font-black uppercase tracking-[.18em] text-[#F1E2D1]">{label}</span>
          <h3 className="mt-5 max-w-4xl text-4xl font-black leading-[.97] tracking-[-.055em] sm:text-6xl">{post.title}</h3>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">{getEditableExcerpt(post, 190)}</p>
        </div>
      </div>
    </Link>
  )
}

export function RailPostCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group block overflow-hidden rounded-[1.8rem] border border-[rgba(84,26,26,.14)] bg-[#F1E2D1] shadow-[0_18px_40px_rgba(84,26,26,.06)] transition hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#DCC3AA]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[.18em] text-[#810B38]">
          <span>{getEditableCategory(post)}</span>
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 className="mt-3 line-clamp-3 text-xl font-black leading-[1.08] tracking-[-.04em] text-[#541A1A]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function CompactIndexCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 grid-cols-[38px_1fr] gap-4 rounded-[1.4rem] border border-transparent px-3 py-4 transition hover:border-[rgba(84,26,26,.12)] hover:bg-[rgba(241,226,209,.75)]">
      <span className="text-2xl font-black leading-none text-[#810b38]">{String(index + 1).padStart(2, '0')}</span>
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.18em] text-[#810B38]"><Clock3 className="h-3 w-3" /> {getEditableCategory(post)}</p>
        <h3 className="mt-2 line-clamp-3 text-base font-black leading-tight tracking-[-.03em] text-[#541A1A] group-hover:text-[#810B38]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function ArticleListCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 gap-5 rounded-[1.8rem] border border-[rgba(84,26,26,.14)] bg-[#F1E2D1] p-4 shadow-[0_16px_34px_rgba(84,26,26,.05)] transition hover:-translate-y-1 sm:grid-cols-[220px_minmax(0,1fr)] sm:p-5">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.35rem] bg-[#DCC3AA]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0 pt-1">
        <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#810B38]">{String(index + 1).padStart(2, '0')} / {getEditableCategory(post)}</p>
        <h2 className="mt-3 line-clamp-3 text-3xl font-black leading-[1.02] tracking-[-.05em] text-[#541A1A] group-hover:text-[#810B38]">{post.title}</h2>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#541A1A]">{getEditableExcerpt(post, 190)}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em] text-[#810B38]">Read release <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}
