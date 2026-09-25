import { displayToast } from '@/components/ToastMessage/ToastMessage'
import {
  EntityType,
  SynchronizeGridResponse,
} from '@sage-bionetworks/synapse-client'
import { render, screen } from '@testing-library/react'
import {
  displaySynchronizeResultToast,
  displayTableUpdateResultToast,
  getSyncButtonLabels,
  IMPORT_LATEST_CHANGES_TEXT,
  SUBMIT_TEXT,
} from './gridSyncMessages'

vi.mock('@/components/ToastMessage/ToastMessage', () => ({
  displayToast: vi.fn(),
}))

const mockDisplayToast = vi.mocked(displayToast)

function mockSynchronizeGridResponse(
  overrides: Partial<SynchronizeGridResponse> = {},
): SynchronizeGridResponse {
  return {
    concreteType: 'org.sagebionetworks.repo.model.grid.SynchronizeGridResponse',
    errorMessages: [],
    ...overrides,
  }
}

describe('getSyncButtonLabels', () => {
  it('prioritizes the PULL copy when shouldPull is true', () => {
    expect(getSyncButtonLabels(true, EntityType.recordset).buttonText).toBe(
      IMPORT_LATEST_CHANGES_TEXT,
    )
  })

  it('returns table-specific tooltip copy for a table source when shouldPull is false', () => {
    const { buttonText, tooltipText } = getSyncButtonLabels(
      false,
      EntityType.table,
    )
    expect(buttonText).toBe(SUBMIT_TEXT)
    expect(tooltipText).toContain('Applies any changes')
  })

  it('returns the submit copy for a RecordSet source', () => {
    expect(getSyncButtonLabels(false, EntityType.recordset).buttonText).toBe(
      SUBMIT_TEXT,
    )
  })

  it('returns the submit copy for a source with no known type when shouldPull is false', () => {
    expect(getSyncButtonLabels(false, undefined).buttonText).toBe(SUBMIT_TEXT)
  })

  // The client prompts before importing rather than importing as part of the submit, so the
  // tooltip must not promise that recent changes are imported automatically.
  it('does not advertise an automatic import for a RecordSet source', () => {
    expect(getSyncButtonLabels(false, EntityType.recordset).tooltipText).toBe(
      'Applies any changes made in this Curator session to the source. If the source has been updated, you will be asked to import those changes first.',
    )
  })

  // This test will fail if a new EntityType is added and not handled by getSyncButtonLabels
  test.each(Object.values(EntityType))(
    'does not throw for EntityType: %s',
    entityType => {
      expect(() => getSyncButtonLabels(false, entityType)).not.toThrow()
      expect(() => getSyncButtonLabels(true, entityType)).not.toThrow()
    },
  )
})

describe('displaySynchronizeResultToast', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows a PULL-specific success toast when there are no errors', () => {
    displaySynchronizeResultToast(mockSynchronizeGridResponse(), 'PULL')
    expect(mockDisplayToast).toHaveBeenCalledWith(
      'Successfully imported latest changes.',
      'success',
    )
  })

  it('shows a generic success toast for PULL_PUSH when there are no errors', () => {
    displaySynchronizeResultToast(mockSynchronizeGridResponse(), 'PULL_PUSH')
    expect(mockDisplayToast).toHaveBeenCalledWith(
      'Successfully synchronized changes.',
      'success',
    )
  })

  it('shows a warning toast listing the error messages when present', () => {
    const result = mockSynchronizeGridResponse({
      errorMessages: ['row 1 failed', 'row 2 failed'],
    })
    displaySynchronizeResultToast(result, 'PULL_PUSH')

    expect(mockDisplayToast).toHaveBeenCalledTimes(1)
    const [content, severity, options] = mockDisplayToast.mock.calls[0]
    expect(severity).toBe('warning')
    expect(options).toEqual({ title: 'Some changes could not be applied' })
    render(<>{content}</>)
    expect(screen.getByText('row 1 failed')).toBeInTheDocument()
    expect(screen.getByText('row 2 failed')).toBeInTheDocument()
  })
})

describe('displayTableUpdateResultToast', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('reports the number of rows updated for a TableEntity source', () => {
    displayTableUpdateResultToast({
      concreteType:
        'org.sagebionetworks.repo.model.table.TableUpdateTransactionResponse',
      results: [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.UploadToTableResult',
          rowsProcessed: 1234,
        },
      ],
    })

    expect(mockDisplayToast).toHaveBeenCalledWith(
      'Successfully updated 1,234 rows.',
      'success',
    )
  })

  it('reports per-entity failures for a View source', () => {
    displayTableUpdateResultToast({
      concreteType:
        'org.sagebionetworks.repo.model.table.TableUpdateTransactionResponse',
      results: [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.EntityUpdateResults',
          updateResults: [
            {
              entityId: 'syn1',
              failureCode: 'UNAUTHORIZED',
              failureMessage: 'not allowed',
            },
          ],
        },
      ],
    })

    expect(mockDisplayToast).toHaveBeenCalledWith(
      'Some changes could not be applied:\nsyn1: not allowed (code: UNAUTHORIZED)',
      'danger',
    )
  })

  it('reports success for a View source when no rows failed', () => {
    displayTableUpdateResultToast({
      concreteType:
        'org.sagebionetworks.repo.model.table.TableUpdateTransactionResponse',
      results: [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.EntityUpdateResults',
          updateResults: [{ entityId: 'syn1' }],
        },
      ],
    })

    expect(mockDisplayToast).toHaveBeenCalledWith(
      'Changes applied successfully',
      'success',
    )
  })
})
