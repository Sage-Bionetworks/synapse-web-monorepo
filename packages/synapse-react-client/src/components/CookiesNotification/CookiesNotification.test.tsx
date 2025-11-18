import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/stores/SynapseContext/SynapseContext'
import {
  CookiePreference,
  COOKIES_AGREEMENT_COOKIE_KEY,
} from '@/utils/hooks/useCookiePreferences'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UniversalCookies from 'universal-cookie'
import CookiesNotification, { alertConfig } from './CookiesNotification'

const cookies = new UniversalCookies()
const mockOnCloseFn = vi.fn()
function renderComponent(wrapperProps?: SynapseContextType) {
  const component = render(<CookiesNotification onClose={mockOnCloseFn} />, {
    wrapper: createWrapper(wrapperProps),
  })
  const alert = screen.queryByRole('alert')
  return { component, alert }
}

describe('CookiesNotification', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  afterEach(() => {
    cookies.remove(COOKIES_AGREEMENT_COOKIE_KEY)
  })

  it('displays alert and allows user to accept all cookies', async () => {
    const user = userEvent.setup()
    const { alert } = renderComponent()

    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent(alertConfig.title)

    const acceptButton = screen.getByRole('button', {
      name: alertConfig.primaryButtonText,
    })
    await user.click(acceptButton)

    expect(alert).not.toBeInTheDocument()
    const cookiePreference = cookies.get(
      COOKIES_AGREEMENT_COOKIE_KEY,
    ) as CookiePreference
    expect(cookiePreference).toBeDefined()
    expect(cookiePreference.analyticsAllowed).toBe(true)
    expect(cookiePreference.functionalAllowed).toBe(true)
  })

  it('displays alert and allows user to accept no functional/analytics cookies', async () => {
    const user = userEvent.setup()
    const { alert } = renderComponent()

    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent(alertConfig.title)

    const disableAllButton = screen.getByRole('button', {
      name: alertConfig.secondaryButtonText,
    })
    await user.click(disableAllButton)

    expect(alert).not.toBeInTheDocument()
    const cookiePreference = cookies.get(
      COOKIES_AGREEMENT_COOKIE_KEY,
    ) as CookiePreference
    expect(cookiePreference).toBeDefined()
    expect(cookiePreference.analyticsAllowed).toBe(false)
    expect(cookiePreference.functionalAllowed).toBe(false)
  })

  it('displays alert and allows user to customize cookie prefs', async () => {
    const user = userEvent.setup()
    const { alert } = renderComponent()

    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent(alertConfig.title)

    const customizeButton = screen.getByRole('button', {
      name: alertConfig.tertiaryButtonText,
    })
    await user.click(customizeButton)

    const privacyPrefsDialogTitle = await screen.findByText(
      'Privacy Preferences',
    )

    expect(alert).toBeInTheDocument()
    expect(privacyPrefsDialogTitle).toBeInTheDocument()
  })

  it('does not display the alert when cookies have been accepted', () => {
    const cookiePrefence: CookiePreference = {
      analyticsAllowed: true,
      functionalAllowed: true,
    }
    cookies.set(COOKIES_AGREEMENT_COOKIE_KEY, cookiePrefence)
    const { alert } = renderComponent()
    expect(alert).not.toBeInTheDocument()
  })
})
