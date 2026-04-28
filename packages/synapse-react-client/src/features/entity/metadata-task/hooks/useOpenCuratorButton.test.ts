import { displayToast } from '@/components/ToastMessage/ToastMessage'
import useGridSessionForCurationTask_legacy from '@/features/entity/metadata-task/hooks/useGridSessionForCurationTask_legacy'
import {
  createMockTaskBundle,
  MOCK_CURATION_TASK_FILE_VIEW_ID,
  MOCK_CURATION_TASK_ID,
} from '@/mocks/curation/mockCurationTask'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import { getLinkToGridSession } from '@/utils/functions/getSynapseWebClientLink'
import {
  CurationTask,
  GridSession,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import type { UserEntityPermissions } from '@sage-bionetworks/synapse-types'
import type { UseMutationResult, UseQueryResult } from '@tanstack/react-query'
import { act, renderHook, waitFor } from '@testing-library/react'
import { beforeEach } from 'vitest'
import {
  OPEN_CURATOR_ERROR_TITLE,
  OPEN_CURATOR_UNAUTHORIZED_ERROR_MESSAGE,
} from '../utils/constants'
import useOpenCuratorFromTaskButton from './useOpenCuratorButton'

vi.mock('./useGridSessionForCurationTask_legacy', () => ({
  default: vi.fn(),
}))

vi.mock('@/utils/functions/getSynapseWebClientLink', () => ({
  getLinkToGridSession: vi.fn(),
}))

vi.mock('@/components/ToastMessage/ToastMessage')

vi.mock('@/synapse-queries/entity/useEntity', () => ({
  useGetEntityPermissions: vi.fn(),
}))

const mockDisplayToast = vi.mocked(displayToast)
const mockUseGridSessionForCurationTaskLegacy = vi.mocked(
  useGridSessionForCurationTask_legacy,
)
const mockGetLinkToGridSession = vi.mocked(getLinkToGridSession)
const mockUseGetEntityPermissions = vi.mocked(useGetEntityPermissions)

type UseGridForTaskLegacyMutationResult = UseMutationResult<
  GridSession,
  SynapseClientError,
  { curationTask: CurationTask }
>

const mockMutateAsync =
  vi.fn<UseGridForTaskLegacyMutationResult['mutateAsync']>()

const createMutationResult = (
  overrides: Partial<UseGridForTaskLegacyMutationResult> = {},
): UseGridForTaskLegacyMutationResult =>
  ({
    mutateAsync: mockMutateAsync,
    isPending: false,
    data: undefined,
    ...overrides,
  } as Partial<UseGridForTaskLegacyMutationResult> as UseGridForTaskLegacyMutationResult)

type EntityPermissionsQueryResult = UseQueryResult<
  UserEntityPermissions | null,
  SynapseClientError
>

const createPermissionsQueryResult = (
  overrides: Partial<EntityPermissionsQueryResult> = {},
): EntityPermissionsQueryResult =>
  ({
    data: { canView: true } as UserEntityPermissions,
    fetchStatus: 'idle',
    status: 'success',
    isLoading: false,
    ...overrides,
  } as Partial<EntityPermissionsQueryResult> as EntityPermissionsQueryResult)

const mockTaskBundle = createMockTaskBundle()
const mockCurationTask = mockTaskBundle.task!

beforeEach(() => {
  vi.clearAllMocks()
  mockMutateAsync.mockResolvedValue({ sessionId: 'session-123' })
  mockUseGridSessionForCurationTaskLegacy.mockReturnValue(
    createMutationResult(),
  )
  mockUseGetEntityPermissions.mockReturnValue(createPermissionsQueryResult())
  mockGetLinkToGridSession.mockReturnValue('mock-grid-url')
})

describe('useOpenCuratorFromTaskButton', () => {
  it('requests a grid session and opens it in a new tab when onClick is called', async () => {
    mockGetLinkToGridSession.mockReturnValue('https://example.org/grid')
    const windowOpenSpy = vi
      .spyOn(window, 'open')
      .mockReturnValue(null as unknown as Window)

    const { result } = renderHook(() =>
      useOpenCuratorFromTaskButton(mockCurationTask),
    )

    act(() => {
      result.current.onClick()
    })

    expect(mockMutateAsync).toHaveBeenCalledWith({
      curationTask: mockCurationTask,
    })

    await waitFor(() => {
      expect(mockGetLinkToGridSession).toHaveBeenCalledWith(
        'session-123',
        MOCK_CURATION_TASK_ID,
      )
      expect(windowOpenSpy).toHaveBeenCalledWith(
        'https://example.org/grid',
        '_blank',
        'noopener',
      )
    })
    windowOpenSpy.mockRestore()
  })

  it('displays an error toast if opening the grid session fails', async () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})
    const errorMessage = 'Failed to open grid session'
    mockMutateAsync.mockRejectedValue(new Error(errorMessage))

    const { result } = renderHook(() =>
      useOpenCuratorFromTaskButton(mockCurationTask),
    )

    act(() => {
      result.current.onClick()
    })

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Error opening Curator for curation task',
        expect.any(Error),
      )
      expect(mockDisplayToast).toHaveBeenCalledWith(errorMessage, 'danger', {
        title: OPEN_CURATOR_ERROR_TITLE,
      })
    })

    consoleErrorSpy.mockRestore()
  })

  it('shows an unauthorized error toast and does not open a window when the session returns a 403', async () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})
    mockMutateAsync.mockRejectedValue(
      new SynapseClientError(
        403,
        'Forbidden',
        expect.getState().currentTestName!,
      ),
    )
    const windowOpenSpy = vi
      .spyOn(window, 'open')
      .mockReturnValue(null as unknown as Window)

    const { result } = renderHook(() =>
      useOpenCuratorFromTaskButton(mockCurationTask),
    )

    act(() => {
      result.current.onClick()
    })
    await waitFor(() => {
      expect(mockDisplayToast).toHaveBeenCalledWith(
        expect.stringContaining(OPEN_CURATOR_UNAUTHORIZED_ERROR_MESSAGE),
        'danger',
        {
          title: OPEN_CURATOR_ERROR_TITLE,
        },
      )
    })
    expect(windowOpenSpy).not.toHaveBeenCalled()

    consoleErrorSpy.mockRestore()
    windowOpenSpy.mockRestore()
  })

  it('returns hasPermission=true when the source entity is readable', () => {
    mockUseGetEntityPermissions.mockReturnValue(
      createPermissionsQueryResult({
        data: { canView: true } as UserEntityPermissions,
      }),
    )

    const { result } = renderHook(() =>
      useOpenCuratorFromTaskButton(mockCurationTask),
    )

    expect(result.current.hasPermission).toBe(true)
    expect(mockUseGetEntityPermissions).toHaveBeenCalledWith(
      MOCK_CURATION_TASK_FILE_VIEW_ID,
    )
  })

  it('returns hasPermission=false when the source entity is not readable', () => {
    mockUseGetEntityPermissions.mockReturnValue(
      createPermissionsQueryResult({
        data: { canView: false } as UserEntityPermissions,
      }),
    )

    const { result } = renderHook(() =>
      useOpenCuratorFromTaskButton(mockCurationTask),
    )

    expect(result.current.hasPermission).toBe(false)
  })

  it('returns isLoading=true while entity permissions are being fetched', () => {
    mockUseGetEntityPermissions.mockReturnValue(
      createPermissionsQueryResult({
        data: undefined,
        fetchStatus: 'fetching',
        status: 'pending',
        isLoading: true,
      }),
    )

    const { result } = renderHook(() =>
      useOpenCuratorFromTaskButton(mockCurationTask),
    )

    expect(result.current.isLoading).toBe(true)
  })

  it('returns isPending=true while a grid session is being created', () => {
    mockUseGridSessionForCurationTaskLegacy.mockReturnValue(
      createMutationResult({ isPending: true }),
    )

    const { result } = renderHook(() =>
      useOpenCuratorFromTaskButton(mockCurationTask),
    )

    expect(result.current.isPending).toBe(true)
  })
})
