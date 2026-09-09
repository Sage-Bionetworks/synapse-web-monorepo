import { render, screen } from '@testing-library/react'
import { DarSubmittedPanel } from './DarSubmittedPanel'

describe('DarSubmittedPanel', () => {
  it('shows the request code, review timeline, DUA next step, RDCA-DAP link, and admin contact', () => {
    render(<DarSubmittedPanel requestCode="ampals-sdtm_als1003-abc12345" />)

    expect(screen.getByText('ampals-sdtm_als1003-abc12345')).toBeInTheDocument()
    expect(screen.getByText(/2-3 business weeks/)).toBeInTheDocument()
    expect(
      screen.getByText(/required Data Use Agreement \(DUA\)/),
    ).toBeInTheDocument()

    const rdcaDapLink = screen.getByRole('link', { name: 'RDCA-DAP' })
    expect(rdcaDapLink).toHaveAttribute(
      'href',
      'https://portal.rdca.c-path.org/',
    )

    const adminLink = screen.getByRole('link', {
      name: 'vtheurercrider@c-path.org',
    })
    expect(adminLink).toHaveAttribute(
      'href',
      'mailto:vtheurercrider@c-path.org',
    )
  })

  it('shows the request status when provided', () => {
    render(
      <DarSubmittedPanel
        requestCode="ampals-sdtm_als1003-abc12345"
        status="pending"
      />,
    )

    expect(screen.getByText(/status: pending/)).toBeInTheDocument()
  })
})
