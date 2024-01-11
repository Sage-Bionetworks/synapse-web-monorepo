import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import TableTypeSelection, {
  TableTypeSelectionProps,
} from './TableTypeSelection'
import userEvent from '@testing-library/user-event'

describe('TableTypeSelection', () => {
  function renderComponent(props: TableTypeSelectionProps) {
    return render(<TableTypeSelection {...props} />, {
      wrapper: createWrapper(),
    })
  }

  test('Table type selection menu is shown and callbacks work', async () => {
    const onTableSelected = jest.fn()
    const onViewSelected = jest.fn()
    renderComponent({
      onTableSelected,
      onViewSelected,
    })

    const menu = screen.getByRole('menu')
    const menuItems = within(menu).getAllByRole('menuitem')
    expect(menuItems).toHaveLength(2)
    within(menuItems[0]).getByText(/^Table$/)
    within(menuItems[1]).getByText(/^View$/)

    await userEvent.click(menuItems[0])
    expect(onTableSelected).toHaveBeenCalled()

    await userEvent.click(menuItems[1])
    expect(onViewSelected).toHaveBeenCalled()
  })
})
