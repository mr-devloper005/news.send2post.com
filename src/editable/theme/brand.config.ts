import { siteIdentity } from '@/config/site.identity'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'

const { recipe } = getFactoryState()
const productKind = getProductKind(recipe)

export const slot4BrandConfig = {
  siteName: siteIdentity.name,
  tagline: siteIdentity.tagline,
  domain: siteIdentity.domain,
  baseUrl: siteIdentity.url,
  productKind,
  ogImage: siteIdentity.ogImage,
  accents:
    productKind === 'visual'
      ? { primary: '#810b38', surface: '#541a1a' }
      : productKind === 'editorial'
        ? { primary: '#541a1a', surface: '#f1e2d1' }
        : productKind === 'directory'
          ? { primary: '#541a1a', surface: '#f1e2d1' }
          : { primary: '#810b38', surface: '#dcc3aa' },
} as const
