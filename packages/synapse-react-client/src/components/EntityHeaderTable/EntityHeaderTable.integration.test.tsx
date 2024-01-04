import { act, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { ReferenceList } from '@sage-bionetworks/synapse-types'
import { server } from '../../mocks/msw/server'
import { getEntityHandlers } from '../../mocks/msw/handlers/entityHandlers'
import { EntityHeaderTable, EntityHeaderTableProps } from './EntityHeaderTable'
import * as EntityFinderModule from '../EntityFinder/EntityFinderModal'
import { EntityFinderModal } from '../EntityFinder/EntityFinderModal'
import mockFileEntityData, {
  MOCK_FILE_ENTITY_ID,
  MOCK_FILE_NAME,
  mockFileEntities,
} from '../../mocks/entity/mockFileEntity'
import mockDatasetData, {
  MOCK_DATASET_ENTITY_ID,
  MOCK_DATASET_NAME,
} from '../../mocks/entity/mockDataset'
import userEvent from '@testing-library/user-event'

function renderTable(props: EntityHeaderTableProps) {
  return render(<EntityHeaderTable {...props} />, {
    wrapper: createWrapper(),
  })
}

jest.spyOn(EntityFinderModule, 'EntityFinderModal').mockImplementation(() => {
  return <div data-testid="EntityFinderModal"></div>
})

const mockEntityFinderModal = jest.mocked(EntityFinderModal)

describe('EntityHeaderTable tests', () => {
  beforeAll(() => {
    server.listen()
  })
  beforeEach(() => {
    server.use(...getEntityHandlers(MOCK_REPO_ORIGIN))
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('renders table (not editable)', async () => {
    const refs: ReferenceList = [
      { targetId: mockFileEntityData.id },
      { targetId: mockDatasetData.id },
    ]
    renderTable({ references: refs, isEditable: false })
    expect(await screen.findAllByRole('columnheader')).toHaveLength(3)
    expect(await screen.findAllByRole('row')).toHaveLength(3) // 1 header row and 2 data rows
    expect(await screen.findByText(MOCK_FILE_NAME)).toBeInTheDocument()
    expect(await screen.findByText(MOCK_FILE_ENTITY_ID)).toBeInTheDocument()
    expect(await screen.findByText(MOCK_DATASET_NAME)).toBeInTheDocument()
    expect(await screen.findByText(MOCK_DATASET_ENTITY_ID)).toBeInTheDocument()
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument()
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })

  it('renders editable table, with ability to add items', async () => {
    const mockOnUpdate = jest.fn()
    const refs: ReferenceList = [
      { targetId: mockFileEntityData.id },
      { targetId: mockDatasetData.id },
    ]
    renderTable({ references: refs, isEditable: true, onUpdate: mockOnUpdate })

    const textField = await screen.findByRole('textbox')
    expect(textField.getAttribute('type')).toBe('text')
    await userEvent.click(textField)
    await userEvent.paste('syn123, syn456')
    const button = await screen.findByRole('button', {
      name: 'Add Entities',
    })
    await userEvent.click(button)

    expect(mockOnUpdate).toHaveBeenCalledWith([
      { targetId: MOCK_FILE_ENTITY_ID },
      { targetId: MOCK_DATASET_ENTITY_ID },
      { targetId: 'syn123' },
      { targetId: 'syn456' },
    ])
  })

  it('handles adding items without CSV input', async () => {
    const mockOnUpdate = jest.fn()
    const refs: ReferenceList = [
      { targetId: mockFileEntityData.id },
      { targetId: mockDatasetData.id },
    ]
    renderTable({
      references: refs,
      isEditable: true,
      onUpdate: mockOnUpdate,
      hideTextFieldToPasteValue: true, // !
    })

    const openEntityFinderButton = await screen.findByRole('button', {
      name: 'Add Entities',
    })
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()

    await userEvent.click(openEntityFinderButton)

    await waitFor(() =>
      expect(mockEntityFinderModal).toHaveBeenLastCalledWith(
        expect.objectContaining({ show: true }),
        expect.anything(),
      ),
    )

    // Simulate making a selection with the Entity Finder modal
    const entityFinderModalPassedProps = mockEntityFinderModal.mock.lastCall![0]
    act(() => {
      entityFinderModalPassedProps.onConfirm([
        { targetId: 'syn123' },
        { targetId: 'syn456' },
      ])
    })

    await waitFor(() => {
      // The entity finder should have been hidden
      expect(mockEntityFinderModal).toHaveBeenLastCalledWith(
        expect.objectContaining({ show: false }),
        expect.anything(),
      )
      // And the items should have been added automatically
      expect(mockOnUpdate).toHaveBeenCalledWith([
        { targetId: MOCK_FILE_ENTITY_ID },
        { targetId: MOCK_DATASET_ENTITY_ID },
        { targetId: 'syn123' },
        { targetId: 'syn456' },
      ])
    })
  })

  it('renders editable table, with ability to remove items', async () => {
    const mockOnUpdate = jest.fn()
    const refs: ReferenceList = [
      { targetId: mockFileEntityData.id },
      { targetId: mockDatasetData.id },
    ]
    const removeEntitiesButtonText = 'Remove Test Entities'
    renderTable({
      references: refs,
      isEditable: true,
      onUpdate: mockOnUpdate,
      removeSelectedRowsButtonText: removeEntitiesButtonText,
    })

    const checkBoxes = await screen.findAllByRole('checkbox')
    // Click the 'Select All' checkbox
    await userEvent.click(checkBoxes[0])
    const button = await screen.findByRole('button', {
      name: removeEntitiesButtonText,
    })
    await userEvent.click(button)

    expect(mockOnUpdate).toHaveBeenCalledWith([])
  })

  it('removes filters when filters are hidden', async () => {
    const mockOnUpdate = jest.fn()
    // 10 FileEntities, and 1 Dataset
    const refs: ReferenceList = [
      ...mockFileEntities.slice(0, 10).map(entity => ({ targetId: entity.id })),
      { targetId: mockDatasetData.id },
    ]
    const removeEntitiesButtonText = 'Remove Test Entities'
    renderTable({
      references: refs,
      isEditable: true,
      onUpdate: mockOnUpdate,
      removeSelectedRowsButtonText: removeEntitiesButtonText,
    })

    // Should have 12 rows: 11 items + table header
    await waitFor(() => expect(screen.getAllByRole('row')).toHaveLength(12))

    // Filter to just show the file data
    const typeFilterInput = await screen.findByLabelText('Filter by Type', {
      exact: false,
    })
    await userEvent.type(typeFilterInput, 'File')

    // One row should be hidden, 10 shown (+ table header)
    await waitFor(() => expect(screen.getAllByRole('row')).toHaveLength(11))

    const checkBoxes = await screen.findAllByRole('checkbox')
    // Click the 'Select All' checkbox
    await userEvent.click(checkBoxes[0])
    const button = await screen.findByRole('button', {
      name: removeEntitiesButtonText,
    })
    await userEvent.click(button)

    expect(mockOnUpdate).toHaveBeenCalledWith([
      { targetId: mockDatasetData.id },
    ])

    await waitFor(() => {
      // The filter field was removed
      expect(typeFilterInput).not.toBeInTheDocument()
      // The filter should have been cleared, and the remaining row (+ header) should be shown
      expect(screen.getAllByRole('row')).toHaveLength(2)
    })
  })
})
