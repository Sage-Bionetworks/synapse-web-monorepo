import { Page, expect, test } from '@playwright/test'
import bannerConfig, { BannerType } from '../configs/bannersConfig'
import { getPortal } from '../helpers/portalInfo'

type DismissBannerConfig = {
  bodyText: string
  closeButtonText?: string
  closeButtonLabel?: string
  role?: string
  isModal?: boolean
}
const dismissBannerConfig: Record<BannerType, DismissBannerConfig> = {
  cookies: {
    bodyText: 'Our site uses cookies',
    closeButtonText: 'Disable All',
  },
  surveyDialog: {
    bodyText: 'survey',
    closeButtonLabel: 'Close survey dialog',
    role: 'dialog',
    isModal: true,
  },
}
const dismissBanner = async (page: Page, bannerType: BannerType) => {
  await test.step(`dismiss ${bannerType} banner`, async () => {
    const bannerConfig = dismissBannerConfig[bannerType]
    const role = (bannerConfig.role ?? 'alert') as Parameters<
      Page['getByRole']
    >[0]
    const banner = page
      .getByRole(role)
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
    if (dismissBannerConfig[portalBanner].isModal) continue
    await dismissBanner(page, portalBanner)
  }
}

/**
 * Dismiss modal dialogs that block page interaction. Call this immediately
 * after navigation, before checking page content.
 */
export const dismissModalBanners = async (page: Page) => {
  const portal = getPortal()
  const portalBanners = bannerConfig[portal]
  for (const bannerType of portalBanners) {
    const config = dismissBannerConfig[bannerType]
    if (!config.isModal) continue
    await test.step(`dismiss modal ${bannerType}`, async () => {
      const role = (config.role ?? 'alert') as Parameters<Page['getByRole']>[0]
      const banner = page.getByRole(role).filter({ hasText: config.bodyText })
      const isVisible = await banner
        .waitFor({ state: 'visible', timeout: 3000 })
        .then(() => true)
        .catch(() => false)
      if (!isVisible) return
      const button = config.closeButtonLabel
        ? banner.getByLabel(config.closeButtonLabel)
        : banner.getByRole('button', { name: config.closeButtonText })
      await button.click()
      await expect(banner).not.toBeVisible()
    })
  }
}
