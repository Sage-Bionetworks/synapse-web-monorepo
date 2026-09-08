import { DESKTOP_RIGHT_PANEL_TEST_ID } from '@/components/StyledComponents'
import { mockPledgeTable } from '../mocks/pledgeTable'
import { renderInBrowser } from '../tests/renderInBrowser'
import {
  DESKTOP_VIEWPORT,
  MOBILE_VIEWPORT,
  VIEWPORTS,
  Viewport,
  setViewport,
} from '../tests/viewports'
import TermsOfUsePage from './TermsOfUsePage'

// Five pledge items -- enough to reproduce the "right panel covers the 4th
// item" report on a mobile viewport.
const PLEDGE_ITEM_COUNT = 5

function setUpTermsOfUsePage(viewport: Viewport) {
  beforeEach(async () => {
    await setViewport(viewport)
    mockPledgeTable(
      Array.from({ length: PLEDGE_ITEM_COUNT }, (_, i) => ({
        label: `Pledge item ${i + 1}`,
        description: `Description ${i + 1}`,
      })),
    )
  })
}

describe('TermsOfUsePage (SWC-7966)', () => {
  describe.each(VIEWPORTS)('at $name width', viewport => {
    setUpTermsOfUsePage(viewport)

    test('every pledge item renders a checkbox inside the viewport', async () => {
      const screen = await renderInBrowser(<TermsOfUsePage />)

      // Wait for the last pledge item before measuring, so `.elements()` sees
      // the whole rendered list rather than a partially-resolved query.
      const checkboxes = screen.getByRole('checkbox')
      await expect
        .element(checkboxes.nth(PLEDGE_ITEM_COUNT - 1))
        .toBeInTheDocument()
      const checkboxElements = checkboxes.elements()
      expect(checkboxElements).toHaveLength(PLEDGE_ITEM_COUNT)

      for (const checkbox of checkboxElements) {
        const checkboxRect = checkbox.getBoundingClientRect()
        expect(checkboxRect.right).toBeLessThanOrEqual(window.innerWidth)
        expect(checkboxRect.left).toBeGreaterThanOrEqual(0)
      }

      const agreeButton = screen.getByRole('button', {
        name: /Agree and Continue/i,
      })
      await expect.element(agreeButton).toBeVisible()
    })
  })

  describe('at mobile width', () => {
    setUpTermsOfUsePage(MOBILE_VIEWPORT)

    test('the accordion expands to reveal the pledge explanation, and the right panel is hidden', async () => {
      const screen = await renderInBrowser(<TermsOfUsePage />)

      const accordionHeader = screen.getByRole('button', {
        name: 'What is the Synapse Pledge?',
      })
      await expect.element(accordionHeader).toBeVisible()

      await accordionHeader.click()
      const explanationText = screen
        .getByRole('region')
        .getByText(/follows the Synapse Governance/i)
      await expect.element(explanationText).toBeVisible()

      const rightPanel = screen.getByTestId(DESKTOP_RIGHT_PANEL_TEST_ID)
      expect(rightPanel.element()).not.toBeVisible()
    })
  })

  describe('at desktop width', () => {
    setUpTermsOfUsePage(DESKTOP_VIEWPORT)

    test('the pledge explanation stays in the right panel and the accordion is hidden', async () => {
      const screen = await renderInBrowser(<TermsOfUsePage />)
      await expect
        .element(screen.getByRole('button', { name: /Agree and Continue/i }))
        .toBeVisible()

      // Asserted on the resolved element rather than via `expect.element`, so a
      // regression fails immediately instead of after the retry timeout.
      const rightPanel = screen.getByTestId(DESKTOP_RIGHT_PANEL_TEST_ID)
      expect(rightPanel.element()).toBeVisible()
      expect(rightPanel.element().textContent).toContain(
        'follows the Synapse Governance',
      )

      expect(document.querySelector('.MuiAccordion-root')).not.toBeVisible()
    })
  })
})
