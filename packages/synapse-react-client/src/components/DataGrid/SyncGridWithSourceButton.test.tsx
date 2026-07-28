import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useGetEntity } from '@/synapse-queries'
import { useGetSchemaBinding } from '@/synapse-queries/entity/useEntityBoundSchema'
import { useGetFeatureFlag } from '@/synapse-queries/featureflags'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { mockSchemaBinding } from '@/mocks/mockSchema'
import {
  getUseMutationIdleMock,
  getUseMutationPendingMock,
  getUseQueryLoadingMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import {
  Entity,
  EntityType,
  GridSession,
  SynchronizeGridResponse,
} from '@sage-bionetworks/synapse-client'
import SyncGridWithSourceButton, {
  buildMergeGridVariables,
  getSyncButtonLabels,
  onSynchronizeSuccess,
  shouldPullBeforePush,
} from './SyncGridWithSourceButton'
import useMergeGridWithSource, {
  MergeGridResult,
} from './useMergeGridWithSource'

vi.mock('@/synapse-queries')
vi.mock('@/synapse-queries/entity/useEntityBoundSchema')
vi.mock('@/synapse-queries/featureflags')
vi.mock('./useMergeGridWithSource')
vi.mock('@/components/ToastMessage/ToastMessage', () => ({
  displayToast: vi.fn(),
}))

const mockUseGetEntity = vi.mocked(useGetEntity)
const mockUseGetSchemaBinding = vi.mocked(useGetSchemaBinding)
const mockUseGetFeatureFlag = vi.mocked(useGetFeatureFlag)
const mockUseMergeGridWithSource = vi.mocked(useMergeGridWithSource)
const mockDisplayToast = vi.mocked(displayToast)

const mockRecordSetEntity = {
  id: 'syn111',
  name: 'my record set',
  concreteType: 'org.sagebionetworks.repo.model.RecordSet',
  versionNumber: 2,
} as const satisfies Entity

const mockTableEntity = {
  id: 'syn222',
  name: 'my table',
  concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
} as const satisfies Entity

const mockEntityViewEntity = {
  id: 'syn333',
  name: 'my entity view',
  concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
} as const satisfies Entity

function renderComponent(gridSession: GridSession) {
  return render(<SyncGridWithSourceButton gridSession={gridSession} />)
}

function mockSynchronizeGridResponse(
  overrides: Partial<SynchronizeGridResponse> = {},
): SynchronizeGridResponse {
  return {
    concreteType: 'org.sagebionetworks.repo.model.grid.SynchronizeGridResponse',
    errorMessages: [],
    ...overrides,
  }
}

type OnSuccessHandler = (
  result: MergeGridResult,
  variables: { syncType?: 'PULL' | 'PULL_PUSH' },
) => void

// Captures the onSuccess handler passed to useMergeGridWithSource so tests can invoke it
// directly, simulating a successful mutation without going through the full click/mutate flow.
function captureOnSuccessHandler(): { current: OnSuccessHandler | undefined } {
  const captured: { current: OnSuccessHandler | undefined } = {
    current: undefined,
  }
  mockUseMergeGridWithSource.mockImplementation(options => {
    captured.current = options?.onSuccess as OnSuccessHandler
    return getUseMutationIdleMock()
  })
  return captured
}

describe('SyncGridWithSourceButton', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockUseGetSchemaBinding.mockReturnValue(getUseQuerySuccessMock(null))
    mockUseGetFeatureFlag.mockReturnValue(false)
    mockUseMergeGridWithSource.mockReturnValue(getUseMutationIdleMock())
  })

  it('shows a loading skeleton instead of a button while the entity is loading', () => {
    mockUseGetEntity.mockReturnValue(getUseQueryLoadingMock())

    renderComponent({ sessionId: 'session-1', sourceEntityId: 'syn222' })

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('shows a loading skeleton instead of a button while the schema binding is loading', () => {
    mockUseGetEntity.mockReturnValue(getUseQuerySuccessMock(mockTableEntity))
    mockUseGetSchemaBinding.mockReturnValue(getUseQueryLoadingMock())

    renderComponent({ sessionId: 'session-1', sourceEntityId: 'syn222' })

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('shows a loading indicator while the mutation is pending', () => {
    mockUseGetEntity.mockReturnValue(getUseQuerySuccessMock(mockTableEntity))
    mockUseMergeGridWithSource.mockReturnValue(getUseMutationPendingMock())

    renderComponent({ sessionId: 'session-1', sourceEntityId: 'syn222' })

    expect(screen.getByRole('button', { name: 'Apply changes' })).toBeDisabled()
  })

  it('renders "Sync changes" for an entity view source and triggers a PULL_PUSH on click', async () => {
    mockUseGetEntity.mockReturnValue(
      getUseQuerySuccessMock(mockEntityViewEntity),
    )
    const mockMergeGrid = getUseMutationIdleMock()
    mockUseMergeGridWithSource.mockReturnValue(mockMergeGrid)

    const gridSession: GridSession = {
      sessionId: 'session-1',
      sourceEntityId: 'syn222',
    }
    renderComponent(gridSession)

    const button = screen.getByRole('button', { name: 'Sync changes' })
    await userEvent.click(button)

    expect(mockMergeGrid.mutate).toHaveBeenCalledWith({
      gridSessionId: 'session-1',
      sourceEntityId: 'syn222',
      sourceEntityType: EntityType.entityview,
      syncType: 'PULL_PUSH',
    })
  })

  it('renders "Import latest changes" and triggers a PULL when the RecordSet source has been updated', async () => {
    mockUseGetFeatureFlag.mockReturnValue(true)
    mockUseGetEntity.mockReturnValue(
      getUseQuerySuccessMock(mockRecordSetEntity),
    )
    mockUseGetSchemaBinding.mockReturnValue(
      getUseQuerySuccessMock(mockSchemaBinding),
    )
    const mockMergeGrid = getUseMutationIdleMock()
    mockUseMergeGridWithSource.mockReturnValue(mockMergeGrid)

    const gridSession: GridSession = {
      sessionId: 'session-1',
      sourceEntityId: 'syn111',
      sourceEntityVersionNumber: 1, // older than mockRecordSetEntity.versionNumber (2)
      gridJsonSchema$Id: mockSchemaBinding.jsonSchemaVersionInfo.$id,
    }
    renderComponent(gridSession)

    const button = screen.getByRole('button', { name: 'Import latest changes' })
    await userEvent.click(button)

    expect(mockMergeGrid.mutate).toHaveBeenCalledWith({
      gridSessionId: 'session-1',
      sourceEntityId: 'syn111',
      sourceEntityType: EntityType.recordset,
      syncType: 'PULL',
    })
  })

  it('renders "Sync changes" for an up-to-date RecordSet source once RecordSet sync is enabled', async () => {
    mockUseGetFeatureFlag.mockReturnValue(true)
    const unchangedRecordSet = { ...mockRecordSetEntity, versionNumber: 1 }
    mockUseGetEntity.mockReturnValue(getUseQuerySuccessMock(unchangedRecordSet))
    mockUseGetSchemaBinding.mockReturnValue(
      getUseQuerySuccessMock(mockSchemaBinding),
    )
    const mockMergeGrid = getUseMutationIdleMock()
    mockUseMergeGridWithSource.mockReturnValue(mockMergeGrid)

    const gridSession: GridSession = {
      sessionId: 'session-1',
      sourceEntityId: 'syn111',
      sourceEntityVersionNumber: 1,
      gridJsonSchema$Id: mockSchemaBinding.jsonSchemaVersionInfo.$id,
    }
    renderComponent(gridSession)

    const button = screen.getByRole('button', { name: 'Sync changes' })
    await userEvent.click(button)

    expect(mockMergeGrid.mutate).toHaveBeenCalledWith({
      gridSessionId: 'session-1',
      sourceEntityId: 'syn111',
      sourceEntityType: EntityType.recordset,
      syncType: 'PULL_PUSH',
    })
  })

  it('wires a successful "synchronize" mutation result to a success toast', () => {
    mockUseGetEntity.mockReturnValue(
      getUseQuerySuccessMock(mockEntityViewEntity),
    )
    const captureOnSuccess = captureOnSuccessHandler()

    renderComponent({ sessionId: 'session-1', sourceEntityId: 'syn222' })

    captureOnSuccess.current?.(
      { type: 'synchronize', data: mockSynchronizeGridResponse() },
      { syncType: 'PULL_PUSH' },
    )

    expect(mockDisplayToast).toHaveBeenCalledWith(
      'Successfully synchronized changes.',
      'success',
    )
  })

  it('wires a successful "recordset_overwrite" mutation result to a success toast', () => {
    mockUseGetEntity.mockReturnValue(
      getUseQuerySuccessMock(mockRecordSetEntity),
    )
    const captureOnSuccess = captureOnSuccessHandler()

    renderComponent({ sessionId: 'session-1', sourceEntityId: 'syn111' })

    captureOnSuccess.current?.(
      {
        type: 'recordset_overwrite',
        data: {
          concreteType:
            'org.sagebionetworks.repo.model.grid.GridRecordSetExportResponse',
        },
      },
      { syncType: 'PULL_PUSH' },
    )

    expect(mockDisplayToast).toHaveBeenCalledWith(
      'Successfully updated RecordSet.',
      'success',
    )
  })
})

describe('shouldPullBeforePush', () => {
  const gridSession: GridSession = {
    sessionId: 'session-1',
    sourceEntityId: 'syn111',
    sourceEntityVersionNumber: 1,
    gridJsonSchema$Id: mockSchemaBinding.jsonSchemaVersionInfo.$id,
  }

  it('returns false when the source entity does not support PULL (e.g. an entityview)', () => {
    expect(shouldPullBeforePush(gridSession, mockEntityViewEntity, null)).toBe(
      false,
    )
  })

  it('returns false for a RecordSet that has not changed', () => {
    const unchangedRecordSet = { ...mockRecordSetEntity, versionNumber: 1 }
    expect(
      shouldPullBeforePush(gridSession, unchangedRecordSet, mockSchemaBinding),
    ).toBe(false)
  })

  it('returns true when the RecordSet has a newer version than the grid session', () => {
    expect(shouldPullBeforePush(gridSession, mockRecordSetEntity, null)).toBe(
      true,
    )
  })

  it('returns true when the JSON Schema binding has changed', () => {
    const unchangedRecordSet = { ...mockRecordSetEntity, versionNumber: 1 }
    const updatedSchemaBinding = {
      ...mockSchemaBinding,
      jsonSchemaVersionInfo: {
        ...mockSchemaBinding.jsonSchemaVersionInfo,
        $id: 'org.sagebionetworks-NewSchema-1.0.0',
      },
    }
    expect(
      shouldPullBeforePush(
        gridSession,
        unchangedRecordSet,
        updatedSchemaBinding,
      ),
    ).toBe(true)
  })

  it('returns false when the source entity is null', () => {
    expect(shouldPullBeforePush(gridSession, null, mockSchemaBinding)).toBe(
      false,
    )
  })
})

describe('getSyncButtonLabels', () => {
  it('prioritizes the PULL copy when shouldPull is true', () => {
    expect(
      getSyncButtonLabels(true, EntityType.recordset, true).buttonText,
    ).toBe('Import latest changes')
  })

  it('returns table-specific copy for a table source when shouldPull is false', () => {
    expect(getSyncButtonLabels(false, EntityType.table, false).buttonText).toBe(
      'Apply changes',
    )
  })

  it('returns "Apply changes" for a RecordSet source when RecordSet sync is disabled', () => {
    expect(
      getSyncButtonLabels(false, EntityType.recordset, false).buttonText,
    ).toBe('Apply changes')
  })

  it('returns "Sync changes" for a RecordSet source once RecordSet sync is enabled', () => {
    expect(
      getSyncButtonLabels(false, EntityType.recordset, true).buttonText,
    ).toBe('Sync changes')
  })

  it('returns the default sync copy for a source with no known type when shouldPull is false', () => {
    expect(getSyncButtonLabels(false, undefined, false).buttonText).toBe(
      'Sync changes',
    )
  })

  // This test will fail if a new EntityType is added and not handled by getSyncButtonLabels
  test.each(Object.values(EntityType))(
    'does not throw for EntityType: %s',
    entityType => {
      expect(() => getSyncButtonLabels(false, entityType, false)).not.toThrow()
      expect(() => getSyncButtonLabels(true, entityType, false)).not.toThrow()
    },
  )
})

describe('buildMergeGridVariables', () => {
  const gridSession: GridSession = {
    sessionId: 'session-1',
    sourceEntityId: 'syn222',
  }

  it('requests a PULL when shouldPull is true', () => {
    expect(
      buildMergeGridVariables(gridSession, EntityType.recordset, true),
    ).toEqual({
      gridSessionId: 'session-1',
      sourceEntityId: 'syn222',
      sourceEntityType: EntityType.recordset,
      syncType: 'PULL',
    })
  })

  it('requests a PULL_PUSH when shouldPull is false', () => {
    expect(
      buildMergeGridVariables(gridSession, EntityType.table, false),
    ).toEqual({
      gridSessionId: 'session-1',
      sourceEntityId: 'syn222',
      sourceEntityType: EntityType.table,
      syncType: 'PULL_PUSH',
    })
  })
})

describe('onSynchronizeSuccess', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows a PULL-specific success toast when there are no errors', () => {
    onSynchronizeSuccess(mockSynchronizeGridResponse(), 'PULL')
    expect(mockDisplayToast).toHaveBeenCalledWith(
      'Successfully imported latest changes.',
      'success',
    )
  })

  it('shows a generic success toast for PULL_PUSH when there are no errors', () => {
    onSynchronizeSuccess(mockSynchronizeGridResponse(), 'PULL_PUSH')
    expect(mockDisplayToast).toHaveBeenCalledWith(
      'Successfully synchronized changes.',
      'success',
    )
  })

  it('shows a warning toast listing the error messages when present', () => {
    const result = mockSynchronizeGridResponse({
      errorMessages: ['row 1 failed', 'row 2 failed'],
    })
    onSynchronizeSuccess(result, 'PULL_PUSH')

    expect(mockDisplayToast).toHaveBeenCalledTimes(1)
    const [content, severity, options] = mockDisplayToast.mock.calls[0]
    expect(severity).toBe('warning')
    expect(options).toEqual({ title: 'Some changes could not be applied' })
    render(<>{content}</>)
    expect(screen.getByText('row 1 failed')).toBeInTheDocument()
    expect(screen.getByText('row 2 failed')).toBeInTheDocument()
  })
})
