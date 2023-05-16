import * as React from 'react'
import { renderHook, screen, waitFor } from '@testing-library/react'
import {
  LoginAwareButton,
  LoginAwareButtonProps,
} from '../../../../src/lib/containers/widgets/LoginAwareButton'
import { SRC_SIGN_IN_CLASS } from '../../../../src/lib/utils/SynapseConstants'
import { useApplicationSessionContext } from '../../../../src/lib/utils/apputils/session/ApplicationSessionContext'
import { MemoryRouter } from 'react-router-dom'
import ApplicationSessionManager from '../../../../src/lib/utils/apputils/session/ApplicationSessionManager'
import { SynapseClient } from '../../../../src/lib'
import { MOCK_ACCESS_TOKEN } from '../../../../mocks/MockSynapseContext'

const defaultProps: LoginAwareButtonProps = {
  children: 'Register for this Challenge',
  href: 'https://www.synapse.org/',
}

const toProps: LoginAwareButtonProps = {
  children: 'Register for this Challenge',
  to: '/pathName?key=value#fragment',
}

function render(props: LoginAwareButtonProps = defaultProps) {
  return renderHook(() => useApplicationSessionContext(), {
    wrapper: () => {
      return (
        <MemoryRouter>
          <ApplicationSessionManager>
            <LoginAwareButton {...props}>{props.children}</LoginAwareButton>
          </ApplicationSessionManager>
        </MemoryRouter>
      )
    },
  })
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
  it('Renders as a button when user is logged out', async () => {
    mockGetAccessToken.mockResolvedValue(null)
    render()
    const btn = await screen.getByRole('button')
    expect(btn).toHaveTextContent(defaultProps.children as string)
  })

  it('Has no href or to attribute when user is logged out', async () => {
    mockGetAccessToken.mockResolvedValue(null)
    render()
    const btn = await screen.getByRole('button')
    expect(btn).not.toHaveAttribute('href')
    expect(btn).not.toHaveAttribute('to')
  })

  it('Has SRC_SIGN_IN_CLASS class when user is logged out', async () => {
    mockGetAccessToken.mockResolvedValue(null)
    render()
    const btn = await screen.getByRole('button')
    expect(btn).toHaveClass(SRC_SIGN_IN_CLASS)
  })

  /* User is logged in */
  it('Renders as a link when user is logged in', async () => {
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    render()
    await waitFor(() => {
      const btn = screen.getByRole('link')
      expect(btn).toHaveTextContent(defaultProps.children as string)
    })
  })

  it('Renders as a link when "href" is passed and user is logged in', async () => {
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    render()
    await waitFor(() => {
      const btn = screen.getByRole('link')
      expect(btn).toHaveTextContent(defaultProps.children as string)
      expect(btn).toHaveAttribute('href')
      expect(btn.getAttribute('href')).toEqual(defaultProps.href)
    })
  })

  it('Renders as a link when "to" is passed and user is logged in', async () => {
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    render(toProps)
    await waitFor(() => {
      const btn = screen.getByRole('link')
      expect(btn).toHaveTextContent(defaultProps.children as string)
      expect(btn).toHaveAttribute('href')
      expect(btn.getAttribute('href')).toEqual(toProps.to)
    })
  })

  it('Does not have SRC_SIGN_IN_CLASS class when user is logged in', async () => {
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    render()
    await waitFor(() => {
      const btn = screen.getByRole('link')
      expect(btn).not.toHaveClass(SRC_SIGN_IN_CLASS)
    })
  })
})
