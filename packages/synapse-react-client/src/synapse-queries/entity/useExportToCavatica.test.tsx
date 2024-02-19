import { renderHook, waitFor } from '@testing-library/react'
import { useExportToCavatica } from './useExportToCavatica'
import { SynapseClient, SynapseConstants } from '../../index'
import {
  ColumnTypeEnum,
  DownloadFromTableResult,
  QueryBundleRequest,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'
import { SynapseError } from '../../utils/SynapseError'
import * as ToastMessage from '../../components/ToastMessage/ToastMessage'
window.open = jest.fn()

const mockToastFn = jest
  .spyOn(ToastMessage, 'displayToast')
  .mockImplementation(() => {})

const tableId = 'syn42'
const resultsFileHandleId = '12345'

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

describe('useExportToCavatica', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Does nothing until function is called', () => {
    renderHook(() => useExportToCavatica(testQueryRequest, testSelectColumns))

    expect(mockGetDownloadFromTableRequest).not.toHaveBeenCalled()
  })

  it('Successfully send to CAVATICA', async () => {
    const expectedSql =
      'SELECT CONCAT(\'drs://repo-prod.prod.sagebase.org/syn\', id, \'.\', currentVersion) AS drs_uri, name as file_name, "id","annotation" FROM syn42'
    mockGetDownloadFromTableRequest.mockResolvedValue(downloadFromTableResult)
    const {
      result: { current: exportFunction },
    } = renderHook(() =>
      useExportToCavatica(testQueryRequest, testSelectColumns),
    )
    await exportFunction()
    await waitFor(() => {
      expect(mockGetDownloadFromTableRequest).toHaveBeenCalled()
      expect(mockGetDownloadFromTableRequest.mock.calls[0][0]['sql']).toEqual(
        expectedSql,
      )
      const cavaticaURL = `https://cavatica.sbgenomics.com/import-redirect/drs/csv?DRS_URI=${encodeURIComponent(
        `drs://repo-prod.prod.sagebase.org/fh${resultsFileHandleId}`,
      )}`
      expect(window.open).toHaveBeenCalledWith(cavaticaURL, '_blank')
    })
  })

  it('Successfully send to CAVATICA with customized columns', async () => {
    const fileIdColumnName = 'fileId',
      fileNameColumnName = 'fileName',
      fileVersionColumnName = 'fileVersion'
    const expectedSql =
      'SELECT CONCAT(\'drs://repo-prod.prod.sagebase.org/syn\', fileId, \'.\', fileVersion) AS drs_uri, fileName as file_name, "id","annotation" FROM syn42'
    mockGetDownloadFromTableRequest.mockResolvedValue(downloadFromTableResult)
    const {
      result: { current: exportFunction },
    } = renderHook(() =>
      useExportToCavatica(
        testQueryRequest,
        testSelectColumns,
        fileIdColumnName,
        fileNameColumnName,
        fileVersionColumnName,
      ),
    )
    await exportFunction()
    await waitFor(() => {
      expect(mockGetDownloadFromTableRequest).toHaveBeenCalled()
      expect(mockGetDownloadFromTableRequest.mock.calls[0][0]['sql']).toEqual(
        expectedSql,
      )
      const cavaticaURL = `https://cavatica.sbgenomics.com/import-redirect/drs/csv?DRS_URI=${encodeURIComponent(
        `drs://repo-prod.prod.sagebase.org/fh${resultsFileHandleId}`,
      )}`
      expect(window.open).toHaveBeenCalledWith(cavaticaURL, '_blank')
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
      expect(mockToastFn).toHaveBeenCalledWith(errorMessage, 'danger'),
        expect(window.open).not.toHaveBeenCalled()
    })
  })
})
