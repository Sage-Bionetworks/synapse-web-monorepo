import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  ColumnModel,
  EntityBundle,
  Reference,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SetOptional } from 'type-fest'
import {
  EntityFinderModal,
  EntityFinderModalProps,
} from '../EntityFinder/EntityFinderModal'
import ImportTableColumnsButton, {
  ImportTableColumnsButtonProps,
} from './ImportTableColumnsButton'

const MOCK_FINDER_MODAL_TESTID = 'MockEntityFinderModal'

function MockedEntityFinderModal(props: EntityFinderModalProps) {
  return (
    <div data-testid={MOCK_FINDER_MODAL_TESTID}>
      <button onClick={() => props.onConfirm([mockPickedEntity])}>
        Confirm
      </button>
      <button onClick={() => props.onCancel()}>Cancel</button>
    </div>
  )
}

jest.mock('../EntityFinder/EntityFinderModal', () => ({
  EntityFinderModal: jest.fn(MockedEntityFinderModal),
}))

const mockColumnModelsOfChosenTable: ColumnModel[] = [
  {
    id: '5325',
    name: 'foo',
    columnType: 'STRING',
  },
]

const expectedColumnModelsToBePassed: SetOptional<ColumnModel, 'id'>[] = [
  {
    // id should be removed
    name: 'foo',
    columnType: 'STRING',
  },
]

const returnedBundle: EntityBundle = {
  tableBundle: {
    columnModels: mockColumnModelsOfChosenTable,
    maxRowsPerPage: 20,
  },
} as EntityBundle

jest.spyOn(SynapseClient, 'getEntityBundleV2').mockResolvedValue(returnedBundle)

const mockEntityFinderModal: jest.Mocked<typeof EntityFinderModal> =
  EntityFinderModal

const mockOnAddColumns: jest.Mocked<
  ImportTableColumnsButtonProps['onAddColumns']
> = jest.fn()

function setUp(props: ImportTableColumnsButtonProps) {
  const user = userEvent.setup()
  const renderResult = render(<ImportTableColumnsButton {...props} />, {
    wrapper: createWrapper(),
  })
  const importTableColumnsButton = screen.getByRole('button', {
    name: /import columns/i,
  })

  return { user, renderResult, importTableColumnsButton }
}

const mockPickedEntity: Reference = {
  targetId: 'syn123',
  targetVersionNumber: 1,
}

describe('ImportTableColumnsButton', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('properly handles fetching and returning columns for the selected table', async () => {
    const { user, importTableColumnsButton } = setUp({
      onAddColumns: mockOnAddColumns,
    })

    // The entity finder should not be visible at first
    expect(mockEntityFinderModal).toHaveBeenLastCalledWith(
      expect.objectContaining({
        show: false,
      }),
      expect.anything(),
    )

    // Click the button
    await user.click(importTableColumnsButton)

    // The (mocked) entity finder should appear
    await waitFor(() => {
      expect(mockEntityFinderModal).toHaveBeenLastCalledWith(
        expect.objectContaining({
          show: true,
        }),
        expect.anything(),
      )
    })

    // Pick an entity using the entity finder, which will invoke the callback
    const mockEntityFinderInstance = screen.getByTestId(
      MOCK_FINDER_MODAL_TESTID,
    )
    await user.click(
      within(mockEntityFinderInstance).getByRole('button', { name: 'Confirm' }),
    )

    // The entity's columns will be fetched
    await waitFor(() => {
      expect(SynapseClient.getEntityBundleV2).toHaveBeenCalledWith(
        mockPickedEntity.targetId,
        { includeTableBundle: true },
        mockPickedEntity.targetVersionNumber,
        MOCK_ACCESS_TOKEN,
      )
    })

    // Those columns should have been passed to the onAddColumns callback
    expect(mockOnAddColumns).toHaveBeenCalledWith(
      expectedColumnModelsToBePassed,
    )

    // The entity finder should be hidden
    expect(mockEntityFinderModal).toHaveBeenLastCalledWith(
      expect.objectContaining({
        show: false,
      }),
      expect.anything(),
    )
  })

  it('canceling the entity finder closes the modal without calling the callback', async () => {
    const { user, importTableColumnsButton } = setUp({
      onAddColumns: mockOnAddColumns,
    })

    // The entity finder should not be visible at first
    expect(mockEntityFinderModal).toHaveBeenLastCalledWith(
      expect.objectContaining({
        show: false,
      }),
      expect.anything(),
    )

    // Click the button
    await user.click(importTableColumnsButton)

    // The (mocked) entity finder should appear
    await waitFor(() => {
      expect(mockEntityFinderModal).toHaveBeenLastCalledWith(
        expect.objectContaining({
          show: true,
        }),
        expect.anything(),
      )
    })

    // Click the "Cancel" button in the entity finder
    const mockEntityFinderInstance = screen.getByTestId(
      MOCK_FINDER_MODAL_TESTID,
    )
    await user.click(
      within(mockEntityFinderInstance).getByRole('button', { name: 'Cancel' }),
    )

    // Data should not have been fetched and the callback should not be invoked
    expect(SynapseClient.getEntityBundleV2).not.toHaveBeenCalled()
    expect(mockOnAddColumns).not.toHaveBeenCalled()

    // The entity finder should be hidden
    expect(mockEntityFinderModal).toHaveBeenLastCalledWith(
      expect.objectContaining({
        show: false,
      }),
      expect.anything(),
    )
  })
})
