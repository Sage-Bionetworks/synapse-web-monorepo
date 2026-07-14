import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect, vi } from 'vitest'
import { SvgIcon } from '@mui/material'
import SelectionCriteriaPill from './SelectionCriteriaPill'

describe('SelectionCriteriaPill', () => {
  test('renders the label as a chip', () => {
    render(
      <SelectionCriteriaPill
        key="k"
        label="Non-Commercial Use Only"
        tooltipText="Data Use Modifiers: Non-Commercial Use Only"
      />,
    )
    expect(screen.getByText('Non-Commercial Use Only')).toBeInTheDocument()
    expect(document.querySelector('.SelectionCriteriaPill')).toBeInTheDocument()
  })

  test('renders a delete icon that removes the filter when not locked', async () => {
    const onRemoveFilter = vi.fn()
    render(
      <SelectionCriteriaPill
        key="k"
        label="Aaron Kujawa"
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
        label="Aaron Kujawa"
        tooltipText="Creator: Aaron Kujawa"
        onRemoveFilter={() => {}}
        isLocked
      />,
    )
    expect(document.querySelector('.MuiChip-deleteIcon')).toBeNull()
  })

  test('renders a leading icon alongside the label when provided', () => {
    render(
      <SelectionCriteriaPill
        key="k"
        label="Non-Commercial Use Only"
        tooltipText="Data Use Modifiers: Non-Commercial Use Only"
        icon={<SvgIcon data-testid="duo-icon" />}
      />,
    )
    expect(screen.getByTestId('duo-icon')).toBeInTheDocument()
    expect(screen.getByText('Non-Commercial Use Only')).toBeInTheDocument()
  })

  test('owns the remove button even for a value with a custom icon', async () => {
    const onRemoveFilter = vi.fn()
    render(
      <SelectionCriteriaPill
        key="k"
        label="Non-Commercial Use Only"
        tooltipText="tt"
        icon={<SvgIcon data-testid="duo-icon" />}
        onRemoveFilter={onRemoveFilter}
      />,
    )
    const deleteIcon = document.querySelector('.MuiChip-deleteIcon')
    expect(deleteIcon).toBeInTheDocument()
    await userEvent.click(deleteIcon!)
    expect(onRemoveFilter).toHaveBeenCalledTimes(1)
  })
})
