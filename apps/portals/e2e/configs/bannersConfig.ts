import { Portal } from './routesConfig'

export type BannerType = 'beta' | 'cookies' | 'survey'

type BannerConfig = Record<Portal, BannerType[]>
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
