import { Page, expect, test } from '@playwright/test'
import bannerConfig, { BannerType } from '../configs/bannersConfig'
import { getPortal } from '../helpers/portalInfo'

type DismissBannerConfig = {
  bodyText: string
  closeButtonText?: string
  closeButtonLabel?: string
}
const dismissBannerConfig: Record<BannerType, DismissBannerConfig> = {
  beta: { bodyText: 'beta version', closeButtonLabel: 'Close' },
  cookies: {
    bodyText: 'Our site uses cookies',
    closeButtonText: 'ALLOW ALL',
  },
  survey: { bodyText: 'survey', closeButtonLabel: 'Close' },
}
const dismissBanner = async (page: Page, bannerType: BannerType) => {
  await test.step(`dismiss ${bannerType} banner`, async () => {
    const bannerConfig = dismissBannerConfig[bannerType]
    const banner = page
      .getByRole('alert')
      .filter({ hasText: bannerConfig.bodyText })
    const button = bannerConfig.closeButtonLabel
      ? banner.getByLabel(bannerConfig.closeButtonLabel)
      : banner.getByRole('button', { name: bannerConfig.closeButtonText })
    await button.click()
    await expect(banner).not.toBeVisible()
  })
}

export const dismissBanners = async (page: Page) => {
  const portal = getPortal()
  const portalBanners = bannerConfig[portal]
  for (const portalBanner of portalBanners) {
    await dismissBanner(page, portalBanner)
  }
}
