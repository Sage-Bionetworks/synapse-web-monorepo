import { DESKTOP_RIGHT_PANEL_TEST_ID } from '@/components/StyledComponents'
import { mockPledgeTable } from '../../mocks/pledgeTable'
import { renderInBrowser } from '../../tests/renderInBrowser'
import {
  DESKTOP_VIEWPORT,
  MOBILE_VIEWPORT,
  VIEWPORTS,
  Viewport,
  setViewport,
} from '../../tests/viewports'
import ProfileValidation, { ValidationWizardStep } from './ProfileValidation'

const PLEDGE_LABEL = 'I agree to the pledge'

function renderTermsAgreeStep() {
  // ProfileValidation reads the starting step via `getSearchParam`, which
  // reads `window.location.search` directly rather than the router's
  // location -- MemoryRouter's in-memory history doesn't affect that.
  window.history.pushState({}, '', `/?step=${ValidationWizardStep.TERMS_AGREE}`)
  return renderInBrowser(<ProfileValidation />)
}

function setUpTermsAgreeStep(viewport: Viewport) {
  beforeEach(async () => {
    await setViewport(viewport)
    mockPledgeTable([{ label: PLEDGE_LABEL, description: '' }])
  })
}

describe('ProfileValidation terms step (SWC-7966)', () => {
  describe.each(VIEWPORTS)('at $name width', viewport => {
    setUpTermsAgreeStep(viewport)

    test('the page fits the viewport and the pledge can be agreed to', async () => {
      const screen = await renderTermsAgreeStep()

      const continueButton = screen.getByRole('button', { name: 'Continue' })
      await expect.element(continueButton).toBeVisible()

      // The page must fit the viewport width: the container clips with
      // `overflow: hidden` instead of offering a scrollbar, so anything wider
      // is unreachable.
      expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(
        window.innerWidth,
      )

      // Agreeing to the pledge is what enables Continue.
      const checkbox = screen.getByRole('checkbox')
      await checkbox.click()
      await expect.element(checkbox).toHaveClass('terms-checked')
      await expect.element(continueButton).toBeEnabled()

      // Nothing may paint over the Continue button: a click at its own center
      // must land on the button, not on overlapping text.
      const buttonElement = continueButton.element()
      const buttonRect = buttonElement.getBoundingClientRect()
      const cx = buttonRect.left + buttonRect.width / 2
      const cy = buttonRect.top + buttonRect.height / 2
      const elementAtButtonCenter = document.elementFromPoint(cx, cy)
      expect(
        buttonElement === elementAtButtonCenter ||
          buttonElement.contains(elementAtButtonCenter),
      ).toBe(true)
    })
  })

  describe('at mobile width', () => {
    setUpTermsAgreeStep(MOBILE_VIEWPORT)

    test('moves the pledge explanation into an accordion and hides the right panel', async () => {
      const screen = await renderTermsAgreeStep()

      const accordionButton = screen.getByRole('button', {
        name: 'What is the Synapse Pledge?',
      })
      await expect.element(accordionButton).toBeVisible()

      const rightPanel = screen.getByTestId(DESKTOP_RIGHT_PANEL_TEST_ID)
      expect(rightPanel.element()).not.toBeVisible()
    })
  })

  describe('at desktop width', () => {
    setUpTermsAgreeStep(DESKTOP_VIEWPORT)

    test('shows the pledge explanation in the right panel instead of an accordion', async () => {
      const screen = await renderTermsAgreeStep()
      await expect
        .element(screen.getByRole('button', { name: 'Continue' }))
        .toBeVisible()

      // The right panel is the desktop home of the explanation. Asserted on the
      // resolved element rather than via `expect.element`, so a regression fails
      // immediately instead of after the retry timeout.
      const rightPanel = screen.getByTestId(DESKTOP_RIGHT_PANEL_TEST_ID)
      expect(rightPanel.element()).toBeVisible()
      expect(rightPanel.element().textContent).toContain(
        'What is the Synapse Pledge?',
      )

      // The accordion is mobile-only, so it must not duplicate the panel here.
      expect(document.querySelector('.MuiAccordion-root')).not.toBeVisible()
    })
  })
})
