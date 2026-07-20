import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import NextStepButton from './NextStepButton'

describe('NextStepButton', () => {
  const mockOnClick = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('default mode (expanded={false})', () => {
    it('renders the button text', () => {
      render(<NextStepButton buttonText="Open Curator" onClick={mockOnClick} />)
      expect(screen.getByText('Open Curator')).toBeInTheDocument()
    })

    it('calls onClick when clicked', async () => {
      const user = await import('@testing-library/user-event').then(m =>
        m.default.setup(),
      )
      render(<NextStepButton buttonText="Open Curator" onClick={mockOnClick} />)

      const button = screen.getByRole('button', { name: /next step/i })
      await user.click(button)

      expect(mockOnClick).toHaveBeenCalledOnce()
    })

    it('is disabled when disabled prop is true', () => {
      render(
        <NextStepButton
          buttonText="Open Curator"
          onClick={mockOnClick}
          disabled={true}
        />,
      )

      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    it('is disabled when loading is true', () => {
      render(
        <NextStepButton
          buttonText="Open Curator"
          onClick={mockOnClick}
          loading={true}
        />,
      )

      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })
  })

  describe('expanded mode (expanded={true})', () => {
    it('renders the button text', () => {
      render(
        <NextStepButton
          buttonText="Open Curator"
          onClick={mockOnClick}
          expanded={true}
        />,
      )
      expect(screen.getByText('Open Curator')).toBeInTheDocument()
    })

    it('does not render the "Next step" label', () => {
      render(
        <NextStepButton
          buttonText="Open Curator"
          onClick={mockOnClick}
          expanded={true}
        />,
      )
      expect(screen.queryByText('Next step')).not.toBeInTheDocument()
    })

    it('calls onClick when clicked', async () => {
      const user = await import('@testing-library/user-event').then(m =>
        m.default.setup(),
      )
      render(
        <NextStepButton
          buttonText="Open Curator"
          onClick={mockOnClick}
          expanded={true}
        />,
      )

      const button = screen.getByRole('button')
      await user.click(button)

      expect(mockOnClick).toHaveBeenCalledOnce()
    })

    it('is disabled when disabled prop is true', () => {
      render(
        <NextStepButton
          buttonText="Open Curator"
          onClick={mockOnClick}
          disabled={true}
          expanded={true}
        />,
      )

      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    it('is disabled when loading is true', () => {
      render(
        <NextStepButton
          buttonText="Open Curator"
          onClick={mockOnClick}
          loading={true}
          expanded={true}
        />,
      )

      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })
  })
})
