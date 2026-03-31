import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { ENTITY_VIEW_TYPE_MASK_PROJECT } from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ViewTypeSelection, { ViewTypeSelectionProps } from './ViewTypeSelection'

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
    const onTypeSelected = vi.fn()
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
    expect(onTypeSelected).toHaveBeenCalledWith(EntityType.entityview)

    await userEvent.click(menuItems[1])
    expect(onTypeSelected).toHaveBeenCalledWith(
      EntityType.entityview,
      ENTITY_VIEW_TYPE_MASK_PROJECT,
    )

    await userEvent.click(menuItems[2])
    expect(onTypeSelected).toHaveBeenCalledWith(EntityType.submissionview)

    await userEvent.click(menuItems[3])
    expect(onTypeSelected).toHaveBeenCalledWith(EntityType.materializedview)

    await userEvent.click(menuItems[4])
    expect(onTypeSelected).toHaveBeenCalledWith(EntityType.virtualtable)
  })
})
