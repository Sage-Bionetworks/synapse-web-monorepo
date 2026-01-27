import { renderHook } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest'
import { useExportDataGridToCsv } from './useExportDataGridToCsv'
import { useExportGridAsCsv } from '@/synapse-queries/grid/useExportGrid'
import { createWrapper } from '@/testutils/TestingLibraryUtils'

vi.mock('@/synapse-queries/grid/useExportGrid')
vi.mock('../../ToastMessage')
vi.mock('@/synapse-client/SynapseClient')

describe('useExportDataGridToCsv', () => {
  const mockMutate = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    ;(useExportGridAsCsv as Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: false,
      isSuccess: false,
      data: null,
      error: null,
    })
  })

  it('should return exportToCsv function and isExporting false when not pending', () => {
    const { result } = renderHook(
      () =>
        useExportDataGridToCsv({
          gridSessionId: 'test-session',
          filename: 'test-file',
        }),
      { wrapper: createWrapper() },
    )

    expect(result.current.exportToCsv).toBeInstanceOf(Function)
    expect(result.current.isExporting).toBe(false)
  })

  it('should return isExporting true when mutation is pending', () => {
    ;(useExportGridAsCsv as Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: true,
      isSuccess: false,
      data: null,
      error: null,
    })

    const { result } = renderHook(
      () =>
        useExportDataGridToCsv({
          gridSessionId: 'test-session',
          filename: 'test-file',
        }),
      { wrapper: createWrapper() },
    )

    expect(result.current.isExporting).toBe(true)
  })

  it('should call mutation with correct DownloadFromGridRequest', () => {
    const { result } = renderHook(
      () =>
        useExportDataGridToCsv({
          gridSessionId: 'session-123',
          filename: 'my-export',
        }),
      { wrapper: createWrapper() },
    )

    result.current.exportToCsv()

    expect(mockMutate).toHaveBeenCalledWith({
      sessionId: 'session-123',
      concreteType:
        'org.sagebionetworks.repo.model.grid.DownloadFromGridRequest',
    })
  })
})
