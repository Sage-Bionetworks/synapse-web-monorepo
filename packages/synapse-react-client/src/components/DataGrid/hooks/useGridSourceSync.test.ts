import useGridSourceSyncStatus, {
  GridSourceSyncStatus,
} from '@/components/DataGrid/hooks/useGridSourceSyncStatus'
import useMergeGridWithSource from '@/components/DataGrid/useMergeGridWithSource'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { mockSchemaBinding } from '@/mocks/mockSchema'
import { useGetGridSession } from '@/synapse-queries/grid/useGridSession'
import {
  getUseMutationIdleMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import {
  Entity,
  EntityType,
  GridSession,
  JsonSchemaObjectBinding,
} from '@sage-bionetworks/synapse-client'
import { act, renderHook, waitFor } from '@testing-library/react'
import useGridSourceSync from './useGridSourceSync'

// Mock only the status hook; shouldPullBeforePush is the gate under test.
vi.mock(
  '@/components/DataGrid/hooks/useGridSourceSyncStatus',
  async importOriginal => ({
    ...(await importOriginal<
      typeof import('@/components/DataGrid/hooks/useGridSourceSyncStatus')
    >()),
    default: vi.fn(),
  }),
)
vi.mock('@/synapse-queries/grid/useGridSession')
// Mock only the mutation hook; buildMergeGridVariables is part of the behavior under test.
vi.mock(
  '@/components/DataGrid/useMergeGridWithSource',
  async importOriginal => ({
    ...(await importOriginal<
      typeof import('@/components/DataGrid/useMergeGridWithSource')
    >()),
    default: vi.fn(),
  }),
)
vi.mock('@/components/ToastMessage/ToastMessage', () => ({
  displayToast: vi.fn(),
}))

const mockUseGridSourceSyncStatus = vi.mocked(useGridSourceSyncStatus)
const mockUseGetGridSession = vi.mocked(useGetGridSession)
const mockUseMergeGridWithSource = vi.mocked(useMergeGridWithSource)

const SESSION_ID = 'session-1'
const SOURCE_ENTITY_ID = 'syn111'

const DATA_FILE_HANDLE_ID = 'file-1'

const upToDateRecordSet = {
  id: SOURCE_ENTITY_ID,
  name: 'my record set',
  concreteType: 'org.sagebionetworks.repo.model.RecordSet',
  versionNumber: 1,
  dataFileHandleId: DATA_FILE_HANDLE_ID,
} as const satisfies Entity

const gridSession: GridSession = {
  sessionId: SESSION_ID,
  sourceEntityId: SOURCE_ENTITY_ID,
  sourceEntityVersionNumber: 1,
  gridJsonSchema$Id: mockSchemaBinding.jsonSchemaVersionInfo.$id,
}

/**
 * Stubs the status hook. `refetchedSourceEntity` is what the freshness re-check performed by
 * `submit` will observe, which is how a source that changed after the initial read is simulated.
 */
function mockStatus(options: {
  isSourceOutdated?: boolean
  sourceDataFileHandleId?: string
  hasSettled?: boolean
  refetchedSourceEntity?: Entity | undefined
  refetchedSchemaBinding?: JsonSchemaObjectBinding | null
}) {
  const isSourceOutdated = options.isSourceOutdated ?? false
  const refetchedSourceEntity =
    'refetchedSourceEntity' in options
      ? options.refetchedSourceEntity
      : upToDateRecordSet
  const refetchedSchemaBinding =
    'refetchedSchemaBinding' in options
      ? options.refetchedSchemaBinding
      : mockSchemaBinding

  const status: GridSourceSyncStatus = {
    isSourceOutdated,
    sourceEntityName: upToDateRecordSet.name,
    sourceEntityType: EntityType.recordset,
    sourceDataFileHandleId:
      options.sourceDataFileHandleId ?? DATA_FILE_HANDLE_ID,
    isLoading: false,
    hasSettled: options.hasSettled ?? true,
    refetchSourceEntity: vi
      .fn()
      .mockResolvedValue({ data: refetchedSourceEntity }),
    refetchSourceEntitySchemaBinding: vi
      .fn()
      .mockResolvedValue({ data: refetchedSchemaBinding }),
  }
  mockUseGridSourceSyncStatus.mockReturnValue(status)
  return status
}

/**
 * Triggers a submit and lets its freshness re-check settle. The re-check awaits three refetches
 * before deciding, so the promise queue must drain before the outcome can be asserted.
 */
async function submitAndSettle(submit: () => void) {
  await act(async () => {
    submit()
    await new Promise(resolve => setTimeout(resolve, 0))
  })
}

describe('useGridSourceSync', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockUseGetGridSession.mockReturnValue({
      ...getUseQuerySuccessMock(gridSession),
      refetch: vi.fn().mockResolvedValue({ data: gridSession }),
    })
    mockUseMergeGridWithSource.mockReturnValue(getUseMutationIdleMock())
  })

  describe('submit', () => {
    it('pushes changes when the source is up to date', async () => {
      mockStatus({})
      const mergeGrid = getUseMutationIdleMock()
      mockUseMergeGridWithSource.mockReturnValue(mergeGrid)

      const { result } = renderHook(() => useGridSourceSync(gridSession))

      act(() => result.current.submit())

      await waitFor(() => expect(mergeGrid.mutate).toHaveBeenCalled())
      expect(mergeGrid.mutate).toHaveBeenCalledWith({
        gridSessionId: SESSION_ID,
        sourceEntityId: SOURCE_ENTITY_ID,
        sourceEntityType: EntityType.recordset,
        syncType: 'PULL_PUSH',
      })
    })

    // A PULL_PUSH would import the other user's changes as a side effect of the submit, so the
    // submit must stop and prompt instead.
    it('prompts instead of pushing when the re-check finds the source has been updated', async () => {
      mockStatus({
        refetchedSourceEntity: { ...upToDateRecordSet, versionNumber: 2 },
      })
      const mergeGrid = getUseMutationIdleMock()
      mockUseMergeGridWithSource.mockReturnValue(mergeGrid)

      const { result } = renderHook(() => useGridSourceSync(gridSession))

      await submitAndSettle(result.current.submit)

      expect(mergeGrid.mutate).not.toHaveBeenCalled()
    })

    it('prompts instead of pushing when the re-check finds the JSON Schema has changed', async () => {
      mockStatus({
        refetchedSchemaBinding: {
          ...mockSchemaBinding,
          jsonSchemaVersionInfo: {
            ...mockSchemaBinding.jsonSchemaVersionInfo,
            $id: 'org.sagebionetworks-NewSchema-1.0.0',
          },
        },
      })
      const mergeGrid = getUseMutationIdleMock()
      mockUseMergeGridWithSource.mockReturnValue(mergeGrid)

      const { result } = renderHook(() => useGridSourceSync(gridSession))

      await submitAndSettle(result.current.submit)

      expect(mergeGrid.mutate).not.toHaveBeenCalled()
    })

    // Treating an unverified source as up to date would send the PULL_PUSH that imports the
    // source's changes without the user ever being asked.
    it('refuses to push when the source could not be re-read', async () => {
      mockStatus({ refetchedSourceEntity: undefined })
      const mergeGrid = getUseMutationIdleMock()
      mockUseMergeGridWithSource.mockReturnValue(mergeGrid)

      const { result } = renderHook(() => useGridSourceSync(gridSession))

      await submitAndSettle(result.current.submit)

      expect(mergeGrid.mutate).not.toHaveBeenCalled()
      expect(vi.mocked(displayToast)).toHaveBeenCalledWith(
        expect.stringContaining('Could not check'),
        'danger',
      )
    })

    it('refuses to push when the session could not be re-read', async () => {
      mockStatus({})
      mockUseGetGridSession.mockReturnValue({
        ...getUseQuerySuccessMock(gridSession),
        refetch: vi.fn().mockResolvedValue({ data: undefined }),
      })
      const mergeGrid = getUseMutationIdleMock()
      mockUseMergeGridWithSource.mockReturnValue(mergeGrid)

      const { result } = renderHook(() => useGridSourceSync(gridSession))

      await submitAndSettle(result.current.submit)

      expect(mergeGrid.mutate).not.toHaveBeenCalled()
    })

    // A source with no bound JSON schema resolves to null, which is a complete answer
    it('pushes when the source has no JSON Schema binding', async () => {
      mockStatus({ refetchedSchemaBinding: null })
      const mergeGrid = getUseMutationIdleMock()
      mockUseMergeGridWithSource.mockReturnValue(mergeGrid)

      const { result } = renderHook(() => useGridSourceSync(gridSession))

      await submitAndSettle(result.current.submit)

      expect(mergeGrid.mutate).toHaveBeenCalledWith(
        expect.objectContaining({ syncType: 'PULL_PUSH' }),
      )
    })

    // The version comparison sees nothing, so only the data file reveals the direct edit
    it('prompts instead of pushing when only the source data file changed', async () => {
      mockStatus({ sourceDataFileHandleId: 'file-1' })
      const mergeGrid = getUseMutationIdleMock()
      mockUseMergeGridWithSource.mockReturnValue(mergeGrid)

      const { result, rerender } = renderHook(() =>
        useGridSourceSync(gridSession),
      )

      // The re-check inside submit observes the replaced data file
      mockStatus({
        sourceDataFileHandleId: 'file-1',
        refetchedSourceEntity: {
          ...upToDateRecordSet,
          dataFileHandleId: 'file-2',
        },
      })
      rerender()

      await submitAndSettle(result.current.submit)

      expect(mergeGrid.mutate).not.toHaveBeenCalled()
      expect(result.current.prompt).toBe('dialog')
    })

    it('re-reads the session and the source before deciding', async () => {
      const status = mockStatus({})
      const refetchSession = vi.fn().mockResolvedValue({ data: gridSession })
      mockUseGetGridSession.mockReturnValue({
        ...getUseQuerySuccessMock(gridSession),
        refetch: refetchSession,
      })

      const { result } = renderHook(() => useGridSourceSync(gridSession))

      await submitAndSettle(result.current.submit)

      expect(refetchSession).toHaveBeenCalled()
      expect(status.refetchSourceEntity).toHaveBeenCalled()
      expect(status.refetchSourceEntitySchemaBinding).toHaveBeenCalled()
    })

    it('re-opens the dialog for a source update the user previously declined', async () => {
      mockStatus({
        isSourceOutdated: true,
        refetchedSourceEntity: { ...upToDateRecordSet, versionNumber: 2 },
      })

      const { result } = renderHook(() => useGridSourceSync(gridSession))

      act(() => result.current.dismissDialog())
      expect(result.current.prompt).toBe('banner')

      await submitAndSettle(result.current.submit)

      expect(result.current.prompt).toBe('dialog')
    })
  })

  describe('importChanges', () => {
    it('requests a PULL', () => {
      mockStatus({ isSourceOutdated: true })
      const mergeGrid = getUseMutationIdleMock()
      mockUseMergeGridWithSource.mockReturnValue(mergeGrid)

      const { result } = renderHook(() => useGridSourceSync(gridSession))

      act(() => result.current.importChanges())

      expect(mergeGrid.mutate).toHaveBeenCalledWith({
        gridSessionId: SESSION_ID,
        sourceEntityId: SOURCE_ENTITY_ID,
        sourceEntityType: EntityType.recordset,
        syncType: 'PULL',
      })
    })
  })

  describe('prompt', () => {
    // The version number the session records does not change when a RecordSet is edited directly,
    // so the data file it points at is what reveals the edit.
    it('is the banner when the source data file changes mid-session', () => {
      mockStatus({ sourceDataFileHandleId: 'file-1' })

      const { result, rerender } = renderHook(() =>
        useGridSourceSync(gridSession),
      )
      expect(result.current.prompt).toBe('hidden')

      mockStatus({ sourceDataFileHandleId: 'file-2' })
      rerender()

      expect(result.current.isSourceOutdated).toBe(true)
      // A mid-session update must not interrupt the user with a dialog
      expect(result.current.prompt).toBe('banner')
    })

    it('is the dialog when the source was already updated on arrival', () => {
      mockStatus({ isSourceOutdated: true })

      const { result } = renderHook(() => useGridSourceSync(gridSession))

      expect(result.current.prompt).toBe('dialog')
    })

    it('stays hidden while the source reads have not settled', () => {
      mockStatus({ isSourceOutdated: true, hasSettled: false })

      const { result } = renderHook(() => useGridSourceSync(gridSession))

      expect(result.current.prompt).toBe('hidden')
    })

    it('is hidden when the source is up to date', () => {
      mockStatus({})

      const { result } = renderHook(() => useGridSourceSync(gridSession))

      expect(result.current.prompt).toBe('hidden')
    })

    it('is the dialog when the source has been updated', () => {
      mockStatus({ isSourceOutdated: true })

      const { result } = renderHook(() => useGridSourceSync(gridSession))

      expect(result.current.prompt).toBe('dialog')
    })

    it('falls back to the banner once the dialog is declined', () => {
      mockStatus({ isSourceOutdated: true })

      const { result } = renderHook(() => useGridSourceSync(gridSession))

      act(() => result.current.dismissDialog())

      expect(result.current.prompt).toBe('banner')
    })

    it('stops prompting after a successful import, even if the source still reads as updated', () => {
      mockStatus({ isSourceOutdated: true })
      let mergeOptions: Parameters<typeof useMergeGridWithSource>[0]
      mockUseMergeGridWithSource.mockImplementation(options => {
        mergeOptions = options
        return getUseMutationIdleMock()
      })

      const { result } = renderHook(() => useGridSourceSync(gridSession))
      expect(result.current.prompt).toBe('dialog')

      act(() => {
        mergeOptions?.onSuccess?.(
          {
            type: 'synchronize',
            data: {
              concreteType:
                'org.sagebionetworks.repo.model.grid.SynchronizeGridResponse',
              errorMessages: [],
            },
          },
          { gridSessionId: SESSION_ID, syncType: 'PULL' },
          undefined,
        )
      })

      expect(result.current.prompt).toBe('hidden')
    })

    // The acknowledgements are scoped to the session, so joining another session prompts again
    it('prompts again for a different session that has been updated', () => {
      mockStatus({ isSourceOutdated: true })

      const { result, rerender } = renderHook(
        ({ session }: { session: GridSession }) => useGridSourceSync(session),
        { initialProps: { session: gridSession } },
      )

      act(() => result.current.dismissDialog())
      expect(result.current.prompt).toBe('banner')

      rerender({ session: { ...gridSession, sessionId: 'session-2' } })

      expect(result.current.prompt).toBe('dialog')
    })
  })
})
