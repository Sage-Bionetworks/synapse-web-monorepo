import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ColumnHeaderWithTooltip } from './ColumnHeaderWithTooltip'

describe('ColumnHeaderWithTooltip', () => {
  it('renders column name without tooltip when no description', () => {
    render(<ColumnHeaderWithTooltip name="myColumn" />)

    expect(screen.getByText('myColumn')).toBeInTheDocument()
  })

  it('renders column name with tooltip when description is provided', async () => {
    const user = userEvent.setup()

    render(
      <ColumnHeaderWithTooltip
        name="myColumn"
        description="This is a helpful description"
      />,
    )

    const columnHeader = screen.getByText('myColumn')
    expect(columnHeader).toBeInTheDocument()

    // Hover over the element to show tooltip
    await user.hover(columnHeader)

    // Tooltip should appear (may need to wait for delay)
    expect(
      await screen.findByText('This is a helpful description'),
    ).toBeInTheDocument()
  })

  it('renders only the name when description is empty string', () => {
    render(<ColumnHeaderWithTooltip name="myColumn" description="" />)

    expect(screen.getByText('myColumn')).toBeInTheDocument()
  })
})
