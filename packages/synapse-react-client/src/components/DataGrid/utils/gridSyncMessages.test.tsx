import { displayToast } from '@/components/ToastMessage/ToastMessage'
import {
  EntityType,
  SynchronizeGridResponse,
} from '@sage-bionetworks/synapse-client'
import { render, screen } from '@testing-library/react'
import {
  displaySynchronizeResultToast,
  getSyncButtonLabels,
  IMPORT_LATEST_CHANGES_TEXT,
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

  it('returns table-specific copy for a table source when shouldPull is false', () => {
    expect(getSyncButtonLabels(false, EntityType.table).buttonText).toBe(
      'Apply changes',
    )
  })

  it('returns "Sync changes" for a RecordSet source', () => {
    expect(getSyncButtonLabels(false, EntityType.recordset).buttonText).toBe(
      'Sync changes',
    )
  })

  it('returns the default sync copy for a source with no known type when shouldPull is false', () => {
    expect(getSyncButtonLabels(false, undefined).buttonText).toBe(
      'Sync changes',
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
