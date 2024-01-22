import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../utils/context/SynapseContext'
import CookiesNotification, {
  COOKIES_AGREEMENT_LOCALSTORAGE_KEY,
  alertConfig,
} from './CookiesNotification'

function renderComponent(wrapperProps?: SynapseContextType) {
  const component = render(<CookiesNotification />, {
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

  it('displays alert and allows user to accept cookies', async () => {
    const user = userEvent.setup()
    const { alert } = renderComponent()

    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent(alertConfig.title)
    expect(alert).toHaveTextContent(alertConfig.description)

    const acceptButton = screen.getByRole('button', {
      name: alertConfig.primaryButtonText,
    })
    await user.click(acceptButton)

    expect(alert).not.toBeInTheDocument()
  })

  it('does not display the alert when cookies have been accepted', () => {
    localStorage.setItem(COOKIES_AGREEMENT_LOCALSTORAGE_KEY, 'true')
    const { alert } = renderComponent()
    expect(alert).not.toBeInTheDocument()
  })
})
