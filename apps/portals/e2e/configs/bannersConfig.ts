import { Portal } from './routesConfig'

export type BannerType = 'beta' | 'cookies' | 'survey'

type BannerConfig = Record<Portal, BannerType[]>

// lists the full width alerts displayed on each Portal,
// ...in the order in which the banners should be dismissed
const bannerConfig: BannerConfig = {
  adknowledgeportal: ['cookies'],
  arkportal: ['cookies'],
  bsmn: ['cookies'],
  cancercomplexity: ['cookies'],
  challengeportal: ['cookies'],
  digitalhealth: ['cookies'],
  elportal: ['beta', 'cookies'],
  nf: ['survey', 'cookies'],
  psychencode: ['cookies'],
  stopadportal: ['cookies'],
}

export default bannerConfig
