import { useSynapseContext } from '@/utils'
import { SRC_SIGN_IN_CLASS } from '@/utils/SynapseConstants'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { LoginAwareButton, LoginAwareButtonProps } from './LoginAwareButton'

vi.mock('@/utils/context/SynapseContext')

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
      <LoginAwareButton {...props} />
    </MemoryRouter>,
  )
}

describe('LoginAwareButton tests', () => {
  const mockUseSynapseContext = vi.mocked(useSynapseContext)
  beforeEach(() => {
    vi.clearAllMocks()
  })

  /* User is logged out */
  it('Renders as a button when user is logged out', () => {
    mockUseSynapseContext.mockReturnValue({ isAuthenticated: false } as any)
    renderComponent()
    const btn = screen.getByRole('button')
    expect(btn).toHaveTextContent(defaultProps.children as string)
  })

  it('Has no href or to attribute when user is logged out', () => {
    mockUseSynapseContext.mockReturnValue({ isAuthenticated: false } as any)
    renderComponent()
    const btn = screen.getByRole('button')
    expect(btn).not.toHaveAttribute('href')
    expect(btn).not.toHaveAttribute('to')
  })

  it('Has SRC_SIGN_IN_CLASS class when user is logged out', () => {
    mockUseSynapseContext.mockReturnValue({ isAuthenticated: false } as any)
    renderComponent()
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass(SRC_SIGN_IN_CLASS)
  })

  /* User is logged in */
  it('Renders as a link when user is logged in', async () => {
    mockUseSynapseContext.mockReturnValue({ isAuthenticated: true } as any)
    renderComponent()
    await waitFor(() => {
      const btn = screen.getByRole('link')
      expect(btn).toHaveTextContent(defaultProps.children as string)
    })
  })

  it('Renders as a link when "href" is passed and user is logged in', async () => {
    mockUseSynapseContext.mockReturnValue({ isAuthenticated: true } as any)
    renderComponent()
    await waitFor(() => {
      const btn = screen.getByRole('link')
      expect(btn).toHaveTextContent(defaultProps.children as string)
      expect(btn).toHaveAttribute('href')
      expect(btn.getAttribute('href')).toEqual(defaultProps.href)
    })
  })

  it('Renders as a link when "to" is passed and user is logged in', async () => {
    mockUseSynapseContext.mockReturnValue({ isAuthenticated: true } as any)
    renderComponent(toProps)
    await waitFor(() => {
      const btn = screen.getByRole('link')
      expect(btn).toHaveTextContent(defaultProps.children as string)
      expect(btn).toHaveAttribute('href')
      expect(btn.getAttribute('href')).toEqual(toProps.to)
    })
  })

  it('Does not have SRC_SIGN_IN_CLASS class when user is logged in', async () => {
    mockUseSynapseContext.mockReturnValue({ isAuthenticated: true } as any)
    renderComponent()
    await waitFor(() => {
      const btn = screen.getByRole('link')
      expect(btn).not.toHaveClass(SRC_SIGN_IN_CLASS)
    })
  })
})
