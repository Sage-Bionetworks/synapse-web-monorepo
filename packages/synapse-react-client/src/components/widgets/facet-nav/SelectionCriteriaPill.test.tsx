import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import SelectionCriteriaPill from './SelectionCriteriaPill'

describe('SelectionCriteriaPill', () => {
  test('renders the plain innerText by default', () => {
    render(
      <SelectionCriteriaPill
        key="k"
        innerText="Non-Commercial Use Only"
        tooltipText="Data Use Modifiers: Non-Commercial Use Only"
      />,
    )
    expect(screen.getByText('Non-Commercial Use Only')).toBeInTheDocument()
    // No custom node => standard grey pill (no custom modifier).
    expect(document.querySelector('.SelectionCriteriaPill--custom')).toBeNull()
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
    // ...and the pill drops its grey chrome so the node reads as the chip.
    expect(
      document.querySelector('.SelectionCriteriaPill--custom'),
    ).toBeInTheDocument()
  })

  test('still shows the remove button for a custom node when not locked', () => {
    let removed = false
    render(
      <SelectionCriteriaPill
        key="k"
        innerText="Non-Commercial Use Only"
        tooltipText="tt"
        renderedInnerText={<span>DUO chip</span>}
        onRemoveFilter={() => {
          removed = true
        }}
      />,
    )
    const removeBtn = screen.getByTitle('deselect')
    removeBtn.click()
    expect(removed).toBe(true)
  })
})
