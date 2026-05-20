import { expect, test } from '@playwright/test'
import redirectsConfig from './configs/redirectsConfig'
import { getPortal } from './helpers/portalInfo'
import { tagTestTitle } from './helpers/setup'

test.describe('URL redirects', () => {
  const redirects = redirectsConfig[getPortal()]

  if (redirects.length === 0) {
    test.skip(tagTestTitle('no redirects configured'), () => {})
    return
  }

  for (const [from, to] of redirects) {
    test(tagTestTitle(`${from} → ${to}`), async ({ page }) => {
      await page.goto(from)
      await expect(page).toHaveURL(to)
    })
  }
})
