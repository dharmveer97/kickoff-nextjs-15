type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

type Url = `http${'s' | ''}://${string}`
type Email = `${string}@${string}.${string}`
type Phone = string

interface ImageMeta {
  url: string
  width: number
  height: number
  alt: string
}

interface OpenGraphMeta<TImage = ImageMeta> {
  type: 'website' | 'article'
  locale: string
  url: Url
  siteName: string
  description: string
  images: TImage[]
}

interface TwitterMeta {
  card: 'summary_large_image' | 'summary' | 'app' | 'player'
  title: string
  description: string
  image: string
  creator: `@${string}`
}

interface SocialLinks {
  twitter: Url
  [key: string]: Url | undefined
}

interface SiteConfig<
  TOpenGraph = OpenGraphMeta,
  TTwitter = TwitterMeta,
  TLinks = SocialLinks,
> {
  debug: boolean
  siteName: string
  name: string
  siteUrl: Url
  address: string
  telephone: Phone
  email: Email
  description: string
  ogImage: string
  author: string
  projectKey: string
  graphQlUri: string
  graphQlUriDev: string
  creator: `@${string}`
  openGraph: TOpenGraph
  twitter: TTwitter
  links: TLinks
}
