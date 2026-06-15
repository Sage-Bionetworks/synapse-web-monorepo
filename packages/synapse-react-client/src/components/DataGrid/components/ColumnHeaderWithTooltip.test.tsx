import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ColumnHeaderWithTooltip } from './ColumnHeaderWithTooltip'

describe('ColumnHeaderWithTooltip', () => {
  it('renders column name', () => {
    render(<ColumnHeaderWithTooltip name="myColumn" />)
    expect(screen.getByText('myColumn')).toBeInTheDocument()
  })

  it('uses column name as native title when no description', () => {
    render(<ColumnHeaderWithTooltip name="myColumn" />)
    expect(screen.getByTitle('myColumn')).toBeInTheDocument()
  })

  it('uses description as native title when description is provided', () => {
    render(
      <ColumnHeaderWithTooltip
        name="myColumn"
        description="This is a helpful description"
      />,
    )
    expect(
      screen.getByTitle('This is a helpful description'),
    ).toBeInTheDocument()
  })

  it('falls back to column name as title when description is empty string', () => {
    render(<ColumnHeaderWithTooltip name="myColumn" description="" />)
    expect(screen.getByTitle('myColumn')).toBeInTheDocument()
  })

  it('does not render a help icon', () => {
    render(
      <ColumnHeaderWithTooltip
        name="myColumn"
        description="Some description"
      />,
    )
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
