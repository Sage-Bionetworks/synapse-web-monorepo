import TermsAndConditionsItem from 'synapse-react-client/components/TermsAndConditions/TermsAndConditionsItem'
import {
  PLEDGE_ICON_FILE_HANDLE_ID,
  mockPledgeItemIcon,
} from '../../mocks/pledgeTable'
import { renderInBrowser } from '../../tests/renderInBrowser'
import {
  DESKTOP_VIEWPORT,
  MOBILE_VIEWPORT,
  VIEWPORTS,
  Viewport,
  setViewport,
} from '../../tests/viewports'

function renderPledgeItem() {
  // `.term-list > li ...` selectors in _terms-and-conditions.scss require
  // this exact ancestor structure.
  return renderInBrowser(
    <div className="terms-conditions">
      <ul className="term-list">
        <TermsAndConditionsItem
          id={0}
          enabled
          checked={false}
          item={{
            iconFileHandleId: PLEDGE_ICON_FILE_HANDLE_ID,
            label: 'I agree to the terms',
            description: '',
          }}
          termsAndConditionsTableID="syn1"
          onChange={() => {}}
        />
      </ul>
    </div>,
  )
}

function setUpPledgeItem(viewport: Viewport) {
  beforeEach(async () => {
    await setViewport(viewport)
    mockPledgeItemIcon()
  })
}

describe('pledge item (SWC-7966)', () => {
  describe.each(VIEWPORTS)('at $name width', viewport => {
    setUpPledgeItem(viewport)

    test('the checkbox is visible and stays within the viewport', async () => {
      const screen = await renderPledgeItem()

      const checkbox = screen.getByRole('checkbox')
      await expect.element(checkbox).toBeVisible()

      // The checkbox must stay on-screen: the row's `overflow: hidden` ancestor
      // clips anything wider than the viewport instead of scrolling to it.
      const checkboxRect = checkbox.element().getBoundingClientRect()
      expect(checkboxRect.right).toBeLessThanOrEqual(window.innerWidth)
      expect(checkboxRect.left).toBeGreaterThanOrEqual(0)
    })
  })

  describe('at mobile width', () => {
    setUpPledgeItem(MOBILE_VIEWPORT)

    test('drops the icon column and stacks "I agree" under the checkbox', async () => {
      const screen = await renderPledgeItem()
      const checkbox = screen.getByRole('checkbox')
      await expect.element(checkbox).toBeVisible()

      // The icon column is dropped below `md` to make room for the checkbox.
      expect(document.querySelector('.terms-icon')).not.toBeVisible()

      // The "I agree" label stacks below and is horizontally centered under the
      // checkbox circle on narrow viewports.
      const checkboxColumn = document.querySelector('.terms-checkbox')!
      expect(getComputedStyle(checkboxColumn).flexDirection).toBe('column')
      const columnRect = checkboxColumn.getBoundingClientRect()
      const circleRect = checkbox.element().getBoundingClientRect()
      const columnCenter = columnRect.left + columnRect.width / 2
      const circleCenter = circleRect.left + circleRect.width / 2
      expect(Math.abs(columnCenter - circleCenter)).toBeLessThanOrEqual(1)
    })
  })

  describe('at desktop width', () => {
    setUpPledgeItem(DESKTOP_VIEWPORT)

    test('keeps the icon column and lays "I agree" out beside the checkbox', async () => {
      const screen = await renderPledgeItem()
      await expect.element(screen.getByRole('checkbox')).toBeVisible()

      // The icon column and row layout belong to the desktop layout above `md`.
      expect(document.querySelector('.terms-icon')).toBeVisible()

      const checkboxColumn = document.querySelector('.terms-checkbox')!
      expect(getComputedStyle(checkboxColumn).flexDirection).toBe('row')
    })
  })
})
