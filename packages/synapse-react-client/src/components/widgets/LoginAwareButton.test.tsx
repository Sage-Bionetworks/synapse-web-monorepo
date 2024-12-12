import { render, screen, waitFor } from '@testing-library/react'
import { LoginAwareButton, LoginAwareButtonProps } from './LoginAwareButton'
import { SRC_SIGN_IN_CLASS } from '../../utils/SynapseConstants'
import { ApplicationSessionManager } from '../../utils'
import { MemoryRouter } from 'react-router-dom'
import SynapseClient from '../../synapse-client'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'
import { createWrapper } from '../../testutils/TestingLibraryUtils'

const defaultProps: LoginAwareButtonProps = {
  children: 'Register for this Challenge',
  href: 'https://www.synapse.org/',
}

const toProps: LoginAwareButtonProps = {
  children: 'Register for this Challenge',
  to: '/pathName?key=value#fragment',
}

function renderComponent(props: LoginAwareButtonProps = defaultProps) {
  return render(
    <MemoryRouter>
      <ApplicationSessionManager>
        <LoginAwareButton {...props} />
      </ApplicationSessionManager>
    </MemoryRouter>,
    {
      wrapper: createWrapper(),
    },
  )
}

describe('LoginAwareButton tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const mockGetAccessToken = jest.spyOn(
    SynapseClient,
    'getAccessTokenFromCookie',
  )

  /* User is logged out */
  it('Renders as a button when user is logged out', () => {
    mockGetAccessToken.mockResolvedValue(undefined)
    renderComponent()
    const btn = screen.getByRole('button')
    expect(btn).toHaveTextContent(defaultProps.children as string)
  })

  it('Has no href or to attribute when user is logged out', () => {
    mockGetAccessToken.mockResolvedValue(undefined)
    renderComponent()
    const btn = screen.getByRole('button')
    expect(btn).not.toHaveAttribute('href')
    expect(btn).not.toHaveAttribute('to')
  })

  it('Has SRC_SIGN_IN_CLASS class when user is logged out', () => {
    mockGetAccessToken.mockResolvedValue(undefined)
    renderComponent()
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass(SRC_SIGN_IN_CLASS)
  })

  /* User is logged in */
  it('Renders as a link when user is logged in', async () => {
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    renderComponent()
    await waitFor(() => {
      const btn = screen.getByRole('link')
      expect(btn).toHaveTextContent(defaultProps.children as string)
    })
  })

  it('Renders as a link when "href" is passed and user is logged in', async () => {
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    renderComponent()
    await waitFor(() => {
      const btn = screen.getByRole('link')
      expect(btn).toHaveTextContent(defaultProps.children as string)
      expect(btn).toHaveAttribute('href')
      expect(btn.getAttribute('href')).toEqual(defaultProps.href)
    })
  })

  it('Renders as a link when "to" is passed and user is logged in', async () => {
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    renderComponent(toProps)
    await waitFor(() => {
      const btn = screen.getByRole('link')
      expect(btn).toHaveTextContent(defaultProps.children as string)
      expect(btn).toHaveAttribute('href')
      expect(btn.getAttribute('href')).toEqual(toProps.to)
    })
  })

  it('Does not have SRC_SIGN_IN_CLASS class when user is logged in', async () => {
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    renderComponent()
    await waitFor(() => {
      const btn = screen.getByRole('link')
      expect(btn).not.toHaveClass(SRC_SIGN_IN_CLASS)
    })
  })
})
