import { Portal } from './routesConfig'

export type BannerType = 'beta' | 'cookies' | 'survey'

type BannerConfig = Record<Portal, BannerType[]>

// lists the full width alerts displayed on each Portal,
// ...in the order in which the banners should be dismissed
const bannerConfig: BannerConfig = {
  adknowledgeportal: ['cookies', 'survey'],
  arkportal: ['cookies'],
  bsmn: ['cookies'],
  cancercomplexity: ['cookies'],
  challengeportal: ['cookies'],
  digitalhealth: ['cookies'],
  elportal: ['cookies', 'beta'],
  nf: ['cookies', 'survey'],
  stopadportal: ['cookies'],
  genie: ['cookies', 'survey'],
}

export default bannerConfig
