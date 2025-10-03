import CsvPreviewDialog from '@/components/table/CsvPreview/CsvPreviewDialog'
import { useImportCsvIntoGrid } from '@/synapse-queries/grid/useImportCsvIntoGrid'
import { ColumnType } from '@sage-bionetworks/synapse-client'
import { act, render, screen } from '@testing-library/react'
import UploadCsvToGridDialog, {
  getUpdateMessage,
} from './UploadCsvToGridDialog'

vi.mock('@/synapse-queries/grid/useImportCsvIntoGrid', () => ({
  useImportCsvIntoGrid: vi.fn(),
}))

vi.mock('@/components/table/CsvPreview/CsvPreviewDialog', () => ({
  default: vi.fn(() => <div data-testid={'CsvPreviewDialog'}></div>),
}))

const mockCsvPreviewDialog = vi.mocked(CsvPreviewDialog)
const mockUseImportCsvIntoGrid = vi.mocked(useImportCsvIntoGrid)

describe('UploadCsvToGridDialog', () => {
  describe('Component tests', () => {
    const fhId = 'somefilehandleid'
    const schema = [{ id: 'colId123', type: ColumnType.STRING }]
    const descriptor = {
      separator: ',',
      quoteCharacter: '"',
      escapeCharacter: '\\',
      lineEnd: '\n',
      isFirstLineHeader: true,
    }
    const gridSessionId = 'session123'
    it('calls mutate on useImportCsvIntoGrid on confirm', async () => {
      const mutate = vi.fn()
      mockUseImportCsvIntoGrid.mockReturnValue({ mutate } as any)
      const onClose = vi.fn()
      const onComplete = vi.fn()
      render(
        <UploadCsvToGridDialog
          gridSessionId={gridSessionId}
          open={true}
          onClose={onClose}
          onComplete={onComplete}
        />,
      )

      await screen.findByTestId('CsvPreviewDialog')
      expect(mockCsvPreviewDialog).toHaveBeenRenderedWithProps({
        open: true,
        onClose: expect.any(Function),
        onConfirm: expect.any(Function),
      })

      act(() => {
        mockCsvPreviewDialog.mock.lastCall![0].onConfirm(
          fhId,
          schema,
          descriptor,
        )
      })

      expect(mutate).toHaveBeenCalledTimes(1)
      expect(mutate).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.grid.GridCsvImportRequest',
        sessionId: gridSessionId,
        fileHandleId: fhId,
        csvDescriptor: descriptor,
        schema: schema,
      })
    })
  })

  describe('getUpdateMessage', () => {
    it('returns correct message when only createdCount is greater than 0', () => {
      expect(
        getUpdateMessage({
          concreteType:
            'org.sagebionetworks.repo.model.grid.GridCsvImportResponse',
          createdCount: 5,
          updatedCount: 0,
        }),
      ).toBe('Created 5 rows.')
    })
    it('returns correct message when only updatedCount is greater than 0', () => {
      expect(
        getUpdateMessage({
          concreteType:
            'org.sagebionetworks.repo.model.grid.GridCsvImportResponse',
          createdCount: 0,
          updatedCount: 3,
        }),
      ).toBe('Updated 3 rows.')
    })
    it('returns correct message when both createdCount and updatedCount are greater than 0', () => {
      expect(
        getUpdateMessage({
          concreteType:
            'org.sagebionetworks.repo.model.grid.GridCsvImportResponse',
          createdCount: 2,
          updatedCount: 4,
        }),
      ).toBe('Created 2 rows and updated 4 rows.')
    })
  })
})
