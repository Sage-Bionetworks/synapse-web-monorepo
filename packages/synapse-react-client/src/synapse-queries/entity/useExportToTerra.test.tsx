import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import {
  QueryBundleRequest,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import * as SynapseConstants from '@/utils/SynapseConstants'
import { DEFAULT_PAGE_SIZE } from '@/utils/SynapseConstants'
import { useExportToTerra } from './useExportToTerra'
import { displayToast } from '../../components/ToastMessage/ToastMessage'
import { parseEntityIdFromSqlStatement } from '../../utils/functions/SqlFunctions'
import { addDrsUriToSql } from './useExportToCavatica'

const mockCreatePfb = vi.fn()

vi.mock('../table/useDownloadTable', () => ({
  useDownloadTableQueryResultAsPFB: () => ({ mutateAsync: mockCreatePfb }),
}))

vi.mock('../../components/ToastMessage/ToastMessage', () => ({
  displayToast: vi.fn(),
}))

vi.mock('../../utils/functions/SqlFunctions', () => ({
  parseEntityIdFromSqlStatement: vi.fn(),
}))

vi.mock('./useExportToCavatica', () => ({
  addDrsUriToSql: vi.fn(),
}))

const originalSql = 'SELECT * FROM syn123'
const entityId = 'syn123'
const transformedSql = 'SELECT id, name FROM syn123 /* +drs */'

const testQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: entityId,
  partMask:
    SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
    SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
    SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
    SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
  query: {
    sql: originalSql,
    limit: DEFAULT_PAGE_SIZE,
    offset: 0,
  },
}
describe('useExportToTerra ()', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    vi.mocked(parseEntityIdFromSqlStatement).mockReturnValue(entityId)
    vi.mocked(addDrsUriToSql).mockReturnValue(transformedSql)

    if (!('open' in window)) {
      Object.defineProperty(window, 'open', { value: vi.fn() })
    } else {
      vi.spyOn(window, 'open').mockImplementation(() => null)
    }
  })

  it('creates a PFB and opens Terra with an encoded DRS URL', async () => {
    mockCreatePfb.mockResolvedValue({ resultsFileHandleId: '42' })
    const selectColumns = [{ name: 'id' } as unknown as SelectColumn]

    const { result } = renderHook(() =>
      useExportToTerra(testQueryRequest, selectColumns),
    )

    await act(async () => {
      await result.current()
    })

    expect(parseEntityIdFromSqlStatement).toHaveBeenCalledWith(originalSql)

    expect(addDrsUriToSql).toHaveBeenCalledWith(
      originalSql,
      selectColumns,
      'id',
      'name',
      'currentVersion',
      true,
    )

    expect(mockCreatePfb).toHaveBeenCalledWith({
      sql: transformedSql,
      concreteType: 'org.sagebionetworks.repo.model.table.DownloadPFBRequest',
      entityId,
      selectedFacets: testQueryRequest.query.selectedFacets,
      additionalFilters: testQueryRequest.query.additionalFilters,
      pfbEntityName: `SynapseExport${entityId}`,
    })

    const expectedDrs = `drs://repo-prod.prod.sagebase.org/fh42`
    const expectedUrl = `https://app.terra.bio/#import-data?format=pfb&url=${encodeURIComponent(
      expectedDrs,
    )}`
    expect(window.open).toHaveBeenCalledWith(expectedUrl, '_blank')
  })

  it('forwards custom column names to addDrsUriToSql', async () => {
    mockCreatePfb.mockResolvedValue({ resultsFileHandleId: '99' })

    const { result } = renderHook(() =>
      useExportToTerra(
        testQueryRequest,
        undefined,
        'fileId',
        'fileName',
        'fileVersion',
      ),
    )

    await act(async () => {
      await result.current()
    })

    expect(addDrsUriToSql).toHaveBeenCalledWith(
      originalSql,
      undefined,
      'fileId',
      'fileName',
      'fileVersion',
      true,
    )
  })

  it('shows a danger toast when createPfb rejects', async () => {
    const err = { reason: 'oh no!' }
    mockCreatePfb.mockRejectedValue(err)

    const { result } = renderHook(() => useExportToTerra(testQueryRequest))

    await act(async () => {
      await result.current()
    })

    expect(displayToast).toHaveBeenCalledWith('oh no!', 'danger')
    expect(window.open).not.toHaveBeenCalled()
  })
})
