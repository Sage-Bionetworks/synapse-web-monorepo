import { mockFileEntities } from '@/mocks/entity'
import mockDatasetData, {
  MOCK_DATASET_ENTITY_ID,
  MOCK_DATASET_NAME,
} from '@/mocks/entity/mockDataset'
import mockFileEntityData, {
  MOCK_FILE_ENTITY_ID,
  MOCK_FILE_NAME,
} from '@/mocks/entity/mockFileEntity'
import { useGetEntityHeaders } from '@/synapse-queries/entity/useGetEntityHeaders'
import { getUseQueryMock } from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import {
  EntityHeader,
  PaginatedResults,
  ReferenceList,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as EntityFinderModule from '../EntityFinder/EntityFinderModal'
import { EntityFinderModal } from '../EntityFinder/EntityFinderModal'
import { EntityHeaderTable, EntityHeaderTableProps } from './EntityHeaderTable'

vi.mock(
  '@/synapse-queries/entity/useGetEntityHeaders',
  async importOriginal => ({
    ...(await importOriginal()),
    useGetEntityHeaders: vi.fn(),
  }),
)

const mockUseGetEntityHeaders = vi.mocked(useGetEntityHeaders)

function renderTable(props: EntityHeaderTableProps) {
  return render(<EntityHeaderTable {...props} />, {
    wrapper: createWrapper(),
  })
}

vi.spyOn(EntityFinderModule, 'EntityFinderModal').mockImplementation(() => {
  return <div data-testid="EntityFinderModal"></div>
})

const mockEntityFinderModal = vi.mocked(EntityFinderModal)
const user = userEvent.setup({ advanceTimers: vi.runAllTimers })

describe('EntityHeaderTable tests', () => {
  let setUseGetEntityHeadersResult: ReturnType<
    typeof getUseQueryMock<PaginatedResults<EntityHeader>, SynapseClientError>
  >['setSuccess']
  beforeAll(() => {
    vi.useFakeTimers()
  })
  afterAll(() => {
    vi.useRealTimers()
  })
  beforeEach(() => {
    const { mock, setSuccess } = getUseQueryMock<
      PaginatedResults<EntityHeader>,
      SynapseClientError
    >()
    setUseGetEntityHeadersResult = setSuccess
    mockUseGetEntityHeaders.mockImplementation(mock)
  })

  it('renders table (not editable)', async () => {
    const refs: ReferenceList = [
      { targetId: mockFileEntityData.id },
      { targetId: mockDatasetData.id },
    ]
    renderTable({ references: refs, isEditable: false })

    act(() => {
      setUseGetEntityHeadersResult({
        results: [
          mockFileEntityData.entityHeader,
          mockDatasetData.entityHeader,
        ],
      })
    })

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
    const mockOnUpdate = vi.fn()
    const refs: ReferenceList = [
      { targetId: mockFileEntityData.id },
      { targetId: mockDatasetData.id },
    ]
    renderTable({ references: refs, isEditable: true, onUpdate: mockOnUpdate })

    act(() => {
      setUseGetEntityHeadersResult({
        results: [
          mockFileEntityData.entityHeader,
          mockDatasetData.entityHeader,
        ],
      })
    })

    const textField = await screen.findByRole('textbox')
    expect(textField.getAttribute('type')).toBe('text')
    await user.click(textField)
    await user.paste('syn123, syn456')
    const button = await screen.findByRole('button', {
      name: 'Add Entities',
    })
    await user.click(button)

    expect(mockOnUpdate).toHaveBeenCalledWith([
      { targetId: MOCK_FILE_ENTITY_ID },
      { targetId: MOCK_DATASET_ENTITY_ID },
      { targetId: 'syn123' },
      { targetId: 'syn456' },
    ])
  })

  it('handles adding items without CSV input', async () => {
    const mockOnUpdate = vi.fn()
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

    act(() => {
      setUseGetEntityHeadersResult({
        results: [
          mockFileEntityData.entityHeader,
          mockDatasetData.entityHeader,
        ],
      })
    })

    const openEntityFinderButton = await screen.findByRole('button', {
      name: 'Add Entities',
    })
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()

    await user.click(openEntityFinderButton)

    await waitFor(() =>
      expect(mockEntityFinderModal).toHaveBeenLastRenderedWithProps(
        expect.objectContaining({ show: true }),
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
      expect(mockEntityFinderModal).toHaveBeenLastRenderedWithProps(
        expect.objectContaining({ show: false }),
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
    const mockOnUpdate = vi.fn()
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

    act(() => {
      setUseGetEntityHeadersResult({
        results: [
          mockFileEntityData.entityHeader,
          mockDatasetData.entityHeader,
        ],
      })
    })

    const checkBoxes = await screen.findAllByRole('checkbox')
    // Click the 'Select All' checkbox
    await user.click(checkBoxes[0])
    const button = await screen.findByRole('button', {
      name: removeEntitiesButtonText,
    })
    await user.click(button)

    expect(mockOnUpdate).toHaveBeenCalledWith([])
  })

  it('removes filters when filters are hidden', async () => {
    const mockOnUpdate = vi.fn()
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

    act(() => {
      setUseGetEntityHeadersResult({
        results: [
          ...mockFileEntities.slice(0, 10).map(entity => entity.entityHeader!),
          mockDatasetData.entityHeader,
        ],
      })
    })

    // Should have 12 rows: 11 items + table header
    await waitFor(() => expect(screen.getAllByRole('row')).toHaveLength(12))

    // Filter to just show the file data
    const typeFilterInput = await screen.findByLabelText('Filter by Type', {
      exact: false,
    })

    await user.type(typeFilterInput, 'File')

    act(() => {
      // Input is debounced
      vi.advanceTimersByTime(500)
    })

    await screen.findByText('11 Entities (10 visible)')

    // One row should be hidden, 10 shown (+ table header)
    await waitFor(() => expect(screen.getAllByRole('row')).toHaveLength(11))

    const checkBoxes = await screen.findAllByRole('checkbox')
    // Click the 'Select All' checkbox
    await user.click(checkBoxes[0])
    const button = await screen.findByRole('button', {
      name: removeEntitiesButtonText,
    })
    await user.click(button)

    expect(mockOnUpdate).toHaveBeenCalledWith([
      { targetId: mockDatasetData.id },
    ])

    act(() => {
      setUseGetEntityHeadersResult({
        results: [mockDatasetData.entityHeader],
      })
    })

    await waitFor(() => {
      // The filter field was removed
      expect(typeFilterInput).not.toBeInTheDocument()
      // The filter should have been cleared, and the remaining row (+ header) should be shown
      expect(screen.getAllByRole('row')).toHaveLength(2)
    })
  })
})
