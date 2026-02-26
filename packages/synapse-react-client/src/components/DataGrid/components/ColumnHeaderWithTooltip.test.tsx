import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ColumnHeaderWithTooltip } from './ColumnHeaderWithTooltip'

describe('ColumnHeaderWithTooltip', () => {
  it('renders column name without tooltip when no description', () => {
    render(<ColumnHeaderWithTooltip name="myColumn" />)

    expect(screen.getByText('myColumn')).toBeInTheDocument()
  })

  it('renders column name with help icon when description is provided', async () => {
    const user = userEvent.setup()

    render(
      <ColumnHeaderWithTooltip
        name="myColumn"
        description="This is a helpful description"
      />,
    )

    const columnHeader = screen.getByText('myColumn')
    expect(columnHeader).toBeInTheDocument()

    // Help icon should be present
    const helpButton = screen.getByRole('button')
    expect(helpButton).toBeInTheDocument()

    // Hover over the help icon to show tooltip
    await user.hover(helpButton)

    // Tooltip should appear
    expect(
      await screen.findByText('This is a helpful description'),
    ).toBeInTheDocument()
  })

  it('renders only the name when description is empty string', () => {
    render(<ColumnHeaderWithTooltip name="myColumn" description="" />)

    expect(screen.getByText('myColumn')).toBeInTheDocument()
  })
})
