import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import userEvent from '@testing-library/user-event'
import ViewTypeSelection, { ViewTypeSelectionProps } from './ViewTypeSelection'
import {
  ENTITY_VIEW_TYPE_MASK_PROJECT,
  EntityType,
} from '@sage-bionetworks/synapse-types'

describe('ViewTypeSelection', () => {
  function renderComponent(
    props: ViewTypeSelectionProps,
    isInExperimentalMode: boolean,
  ) {
    return render(<ViewTypeSelection {...props} />, {
      wrapper: createWrapper({ isInExperimentalMode }),
    })
  }

  test('View type selection menu is shown and callbacks work', async () => {
    const onTypeSelected = jest.fn()
    renderComponent(
      {
        onTypeSelected,
      },
      true,
    )

    const menu = screen.getByRole('menu')
    const menuItems = within(menu).getAllByRole('menuitem')
    expect(menuItems).toHaveLength(5)

    within(menuItems[0]).getByText(/^Files, Folders, and Other Objects$/)
    within(menuItems[1]).getByText(/^Projects$/)
    within(menuItems[2]).getByText(/^Challenge Submissions$/)
    within(menuItems[3]).getByText(/^Materialized View$/)
    within(menuItems[4]).getByText(/^Virtual Table$/)

    await userEvent.click(menuItems[0])
    expect(onTypeSelected).toHaveBeenCalledWith(EntityType.ENTITY_VIEW)

    await userEvent.click(menuItems[1])
    expect(onTypeSelected).toHaveBeenCalledWith(
      EntityType.ENTITY_VIEW,
      ENTITY_VIEW_TYPE_MASK_PROJECT,
    )

    await userEvent.click(menuItems[2])
    expect(onTypeSelected).toHaveBeenCalledWith(EntityType.SUBMISSION_VIEW)

    await userEvent.click(menuItems[3])
    expect(onTypeSelected).toHaveBeenCalledWith(EntityType.MATERIALIZED_VIEW)

    await userEvent.click(menuItems[4])
    expect(onTypeSelected).toHaveBeenCalledWith(EntityType.VIRTUAL_TABLE)
  })

  it('hides virtual table out of experimental mode', () => {
    const onTypeSelected = jest.fn()
    renderComponent(
      {
        onTypeSelected,
      },
      false,
    )

    const menu = screen.getByRole('menu')
    const menuItems = within(menu).getAllByRole('menuitem')
    expect(menuItems).toHaveLength(4)

    expect(within(menu).queryByText(/^Virtual Table$/)).not.toBeInTheDocument()
  })
})
