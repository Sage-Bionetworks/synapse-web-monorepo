import { ReactNode } from 'react'

// For styling the header on the home page -- the main title and the summary text
export type HomePageHeaderConfig = {
  summary: string | ReactNode
  title: string
  showBlur?: boolean
  centerText?: boolean
  HeaderSvg?: any
}

// Footer - start
export type FooterConfig = {
  contactUs?: string
  termsOfService?: string
  forum?: string
  about?: string
  additionalLogos?: string[] //svg
}
// Footer end

// LogoConfig
export type LogoConfig = {
  name?: string // plain text
  icon?: string // svg
  hideLogin?: boolean
}
// LogoConfig end

// FileEntityPageConfig
export type FileEntityPageConfig = {
  showWiki?: boolean
  showProvenance?: boolean
  showContentSize?: boolean
  showContentMd5?: boolean
  showStorageLocation?: boolean
  showModifiedOn?: boolean
}
// FileEntityPageConfig end
