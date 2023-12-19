import { Page, expect, test } from '@playwright/test'
import { viewports } from '../playwright.config'
import routesConfig from './configs/routesConfig'
import { getPortal, getPortalTitle } from './helpers/portalInfo'

const expectNavRoutesAreVisible = async (page: Page) => {
  const portalRouteConfig = routesConfig[getPortal()]
  const nav = page.locator('.nav')

  await test.step('nav buttons are visible', async () => {
    for (const button of portalRouteConfig.buttons) {
      await expect(nav.getByRole('button', { name: button })).toBeVisible()
    }
  })

  await test.step('nav links are visible', async () => {
    for (const link of portalRouteConfig.links) {
      await expect(nav.getByRole('link', { name: link })).toBeVisible()
    }
  })
}

test.describe('Homepage', () => {
  test('has title', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(getPortalTitle())
  })

  test('has expanded nav', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('MENU')).not.toBeVisible()
    await expectNavRoutesAreVisible(page)
  })

  test.describe('Smaller viewport', () => {
    test.use({ viewport: viewports.collapsed })

    test('has collapsed nav', async ({ page }) => {
      await page.goto('/')
      const menu = page.getByText('MENU')
      await expect(menu).toBeVisible()
      await menu.click()
      await expectNavRoutesAreVisible(page)
    })
  })
})
