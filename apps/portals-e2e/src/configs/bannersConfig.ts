import { Portal } from './routesConfig'

export type BannerType = 'cookies' | 'surveyDialog'

type BannerConfig = Record<Portal, BannerType[]>

// lists the full width alerts displayed on each Portal,
// ...in the order in which the banners should be dismissed
const bannerConfig: BannerConfig = {
  adknowledgeportal: ['cookies', 'surveyDialog'],
  arkportal: ['cookies'],
  bsmn: ['cookies'],
  cancercomplexity: ['cookies'],
  challenges: ['cookies'],
  digitalhealth: ['cookies'],
  eliteportal: ['cookies'],
  namhub: ['cookies'],
  nf: ['cookies'],
  stopadportal: ['cookies'],
  genie: ['cookies'],
}

export default bannerConfig
