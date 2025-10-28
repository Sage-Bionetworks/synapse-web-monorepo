import { Portal } from './routesConfig'

export type BannerType = 'cookies' | 'survey'

type BannerConfig = Record<Portal, BannerType[]>

// lists the full width alerts displayed on each Portal,
// ...in the order in which the banners should be dismissed
const bannerConfig: BannerConfig = {
  adknowledgeportal: ['cookies'],
  arkportal: ['cookies'],
  bsmn: ['cookies'],
  cancercomplexity: ['cookies'],
  challenges: ['cookies'],
  digitalhealth: ['cookies'],
  eliteportal: ['cookies'],
  nf: ['cookies', 'survey'],
  stopadportal: ['cookies'],
  genie: ['cookies'],
}

export default bannerConfig
