import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect, vi } from 'vitest'
import SelectionCriteriaPill from './SelectionCriteriaPill'

describe('SelectionCriteriaPill', () => {
  test('renders the plain innerText as a chip by default', () => {
    render(
      <SelectionCriteriaPill
        key="k"
        innerText="Non-Commercial Use Only"
        tooltipText="Data Use Modifiers: Non-Commercial Use Only"
      />,
    )
    expect(screen.getByText('Non-Commercial Use Only')).toBeInTheDocument()
    // No custom node => the standard chip pill (no custom modifier).
    expect(document.querySelector('.SelectionCriteriaPill--custom')).toBeNull()
  })

  test('renders a delete icon that removes the filter when not locked', async () => {
    const onRemoveFilter = vi.fn()
    render(
      <SelectionCriteriaPill
        key="k"
        innerText="Aaron Kujawa"
        tooltipText="Creator: Aaron Kujawa"
        onRemoveFilter={onRemoveFilter}
      />,
    )
    // MUI Chip renders the delete icon with aria-hidden, so query the SVG.
    const deleteIcon = document.querySelector('.MuiChip-deleteIcon')
    expect(deleteIcon).toBeInTheDocument()
    await userEvent.click(deleteIcon!)
    expect(onRemoveFilter).toHaveBeenCalledTimes(1)
  })

  test('omits the delete icon when locked', () => {
    render(
      <SelectionCriteriaPill
        key="k"
        innerText="Aaron Kujawa"
        tooltipText="Creator: Aaron Kujawa"
        onRemoveFilter={() => {}}
        isLocked
      />,
    )
    expect(document.querySelector('.MuiChip-deleteIcon')).toBeNull()
  })

  test('renders a custom node in place of innerText and drops the pill chrome', () => {
    render(
      <SelectionCriteriaPill
        key="k"
        innerText="Non-Commercial Use Only"
        tooltipText="Data Use Modifiers: Non-Commercial Use Only"
        renderedInnerText={<span data-testid="duo-tag">DUO chip</span>}
      />,
    )
    // The custom node is rendered...
    expect(screen.getByTestId('duo-tag')).toBeInTheDocument()
    // ...the plain text is not...
    expect(screen.queryByText('Non-Commercial Use Only')).toBeNull()
    // ...and the pill drops its chrome so the node reads as the chip.
    expect(
      document.querySelector('.SelectionCriteriaPill--custom'),
    ).toBeInTheDocument()
  })

  test('does not render its own delete icon for a custom node (the node owns removal)', () => {
    render(
      <SelectionCriteriaPill
        key="k"
        innerText="Non-Commercial Use Only"
        tooltipText="tt"
        renderedInnerText={<span>DUO chip</span>}
        onRemoveFilter={() => {}}
      />,
    )
    expect(document.querySelector('.MuiChip-deleteIcon')).toBeNull()
  })
})
