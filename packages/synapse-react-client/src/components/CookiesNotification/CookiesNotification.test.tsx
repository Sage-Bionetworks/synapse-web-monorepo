import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../utils/context/SynapseContext'
import CookiesNotification, { alertConfig } from './CookiesNotification'
import {
  COOKIES_AGREEMENT_LOCALSTORAGE_KEY,
  CookiePreference,
} from '../../utils/hooks/useCookiePreferences'

const mockOnCloseFn = jest.fn()
function renderComponent(wrapperProps?: SynapseContextType) {
  const component = render(<CookiesNotification onClose={mockOnCloseFn} />, {
    wrapper: createWrapper(wrapperProps),
  })
  const alert = screen.queryByRole('alert')
  return { component, alert }
}

describe('CookiesNotification', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  afterEach(() => {
    localStorage.getItem(COOKIES_AGREEMENT_LOCALSTORAGE_KEY) &&
      localStorage.removeItem(COOKIES_AGREEMENT_LOCALSTORAGE_KEY)
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
    const localStorageValue = localStorage.getItem(
      COOKIES_AGREEMENT_LOCALSTORAGE_KEY,
    )
    expect(localStorageValue).toBeDefined()
    const cookiePreference = JSON.parse(localStorageValue!) as CookiePreference
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
    const localStorageValue = localStorage.getItem(
      COOKIES_AGREEMENT_LOCALSTORAGE_KEY,
    )
    expect(localStorageValue).toBeDefined()
    const cookiePreference = JSON.parse(localStorageValue!) as CookiePreference
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
    localStorage.setItem(COOKIES_AGREEMENT_LOCALSTORAGE_KEY, 'true')
    const { alert } = renderComponent()
    expect(alert).not.toBeInTheDocument()
  })
})
