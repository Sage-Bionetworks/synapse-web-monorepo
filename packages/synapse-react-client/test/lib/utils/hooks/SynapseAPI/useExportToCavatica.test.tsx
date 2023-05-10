import { renderHook, waitFor } from '@testing-library/react'
import { useExportToCavatica } from '../../../../../src/lib/utils/hooks/SynapseAPI/entity/useExportToCavatica'
import { SynapseClient, SynapseConstants } from '../../../../../src/lib'
import {
  ColumnTypeEnum,
  DownloadFromTableResult,
  QueryBundleRequest,
  SelectColumn,
} from '../../../../../src/lib/utils/synapseTypes'
import { DEFAULT_PAGE_SIZE } from '../../../../../src/lib/utils/SynapseConstants'
import { displayToast } from '../../../../../src/lib/containers/ToastMessage'
import { SynapseError } from '../../../../../src/lib/utils/SynapseError'

window.open = jest.fn()
jest.mock('../../../../../src/lib/containers/ToastMessage', () => {
  return { displayToast: jest.fn() }
})
const mockToastFn = displayToast

const tableId = 'syn42'
const resultsFileHandleId = '12345'
const presignedURLResponse = 'https://presignedUrlToManifestCSVExport/test.csv'

const downloadFromTableResult: DownloadFromTableResult = {
  resultsFileHandleId,
  concreteType: 'org.sagebionetworks.repo.model.table.DownloadFromTableResult',
  etag: '',
  headers: [],
  tableId,
}

const testSql = `SELECT * FROM ${tableId}`
const testSelectColumns: SelectColumn[] = [
  {
    columnType: ColumnTypeEnum.ENTITYID,
    name: 'id',
    id: '1',
  },
  {
    columnType: ColumnTypeEnum.STRING,
    name: 'annotation',
    id: '2',
  },
]
const testQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: tableId,
  partMask:
    SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
    SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
    SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
    SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
  query: {
    sql: testSql,
    limit: DEFAULT_PAGE_SIZE,
    offset: 0,
  },
}

const mockGetDownloadFromTableRequest = jest.spyOn(
  SynapseClient,
  'getDownloadFromTableRequest',
)
const mockGetFileHandleByIdURL = jest.spyOn(
  SynapseClient,
  'getFileHandleByIdURL',
)

describe('useExportToCavatica', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Does nothing until function is called', () => {
    renderHook(() => useExportToCavatica(testQueryRequest, testSelectColumns))

    expect(mockGetDownloadFromTableRequest).not.toHaveBeenCalled()
    expect(mockGetFileHandleByIdURL).not.toHaveBeenCalled()
  })

  it('Successfully send to Cavatica', async () => {
    mockGetDownloadFromTableRequest.mockResolvedValue(downloadFromTableResult)
    mockGetFileHandleByIdURL.mockResolvedValue(presignedURLResponse)
    const {
      result: { current: exportFunction },
    } = renderHook(() =>
      useExportToCavatica(testQueryRequest, testSelectColumns),
    )
    await exportFunction()
    await waitFor(() => {
      expect(mockGetDownloadFromTableRequest).toHaveBeenCalled()
      // TODO: change to production redirect link after the changes have been validated and they have released to prod
      expect(window.open).toHaveBeenCalledWith(
        `https://synapse-vayu.sbgenomics.com/import-redirect/drs/csv/?URL=${encodeURIComponent(
          presignedURLResponse,
        )}`,
        '_blank',
      )
      // expect(window.open).toHaveBeenCalledWith(
      //   `https://cavatica.sbgenomics.com/import-redirect/drs/csv/?URL=${encodeURIComponent(
      //     presignedURLResponse,
      //   )}`,
      //   '_blank',
      // )
    })
  })
  it('Error in service call', async () => {
    const errorMessage = 'there was an error'
    const error: SynapseError = {
      reason: errorMessage,
    }
    mockGetDownloadFromTableRequest.mockRejectedValue(error)
    const {
      result: { current: exportFunction },
    } = renderHook(() =>
      useExportToCavatica(testQueryRequest, testSelectColumns),
    )
    await exportFunction()
    await waitFor(() => {
      expect(mockGetDownloadFromTableRequest).toHaveBeenCalled()
      expect(mockToastFn).toBeCalledWith(errorMessage, 'danger'),
        expect(window.open).not.toHaveBeenCalled()
    })
  })
})
