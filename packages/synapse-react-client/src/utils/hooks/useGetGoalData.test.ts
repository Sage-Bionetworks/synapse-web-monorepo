import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BatchFileResult,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { renderHook, waitFor } from '@testing-library/react'
import { SynapseClient } from '../../index'
import useGetGoalData from './useGetGoalData'

const tableQueryResult: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  selectColumns: [
    { id: '84694', name: 'Title', columnType: 'STRING' },
    { id: '123113', name: 'Summary', columnType: 'LARGETEXT' },
    { id: '123022', name: 'TableId', columnType: 'ENTITYID' },
    { id: '123023', name: 'Asset', columnType: 'FILEHANDLEID' },
    { id: '123021', name: 'Link', columnType: 'STRING' },
    { id: '123043', name: 'ItemOrder', columnType: 'STRING' },
  ],
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn123',
      etag: '2ac77a6e-193f-11ec-bc43-168179607a59',
      headers: [
        { id: '84694', name: 'Title', columnType: 'STRING' },
        { id: '123113', name: 'Summary', columnType: 'LARGETEXT' },
        { id: '123022', name: 'TableId', columnType: 'ENTITYID' },
        { id: '123023', name: 'Asset', columnType: 'FILEHANDLEID' },
        { id: '123021', name: 'Link', columnType: 'STRING' },
        { id: '123043', name: 'ItemOrder', columnType: 'STRING' },
      ],
      rows: [
        {
          rowId: 1,
          versionNumber: 3,
          values: [
            'Methods',
            'Question-driven studies that define the scientific scope and provide context to the contributed resources.',
            'syn21783965',
            '64155356',
            'Explore/Studies',
            '1',
          ],
        },
        {
          rowId: 2,
          versionNumber: 3,
          values: [
            'Datasets & Files',
            'Collected from samples and cell lines across a spectrum of genomic assays and neuropsychiatric diseases.',
            'syn20821313',
            '64155359',
            'Explore/Data',
            '2',
          ],
        },
        {
          rowId: 3,
          versionNumber: 3,
          values: [
            'Publications',
            'Lessons learned from consortia data and methods, shared as peer-reviewed journal articles.',
            'syn22095937',
            '64155361',
            'Explore/Publications',
            '3',
          ],
        },
        {
          rowId: 4,
          versionNumber: 4,
          values: [
            'People',
            'Funded grant programs comprising institutions and investigators that are pursuing neuropsychiatric disease research themes with multidimensional approaches.',
            'syn22096112',
            '64155368',
            'Explore/People',
            '4',
          ],
        },
      ],
    },
  },
}

const mockFileResult = [
  {
    fileHandleId: '149976034',
    preSignedURL: 'https://mockurl.com/orangecat.jpeg',
  },
  {
    fileHandleId: '149976044',
    preSignedURL: 'https://mockurl.com/tabbycat.jpeg',
  },
]

const mockBatchFileResult: BatchFileResult = {
  requestedFiles: mockFileResult,
}

describe('useGetGoalData', () => {
  beforeAll(() => {
    server.listen()
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())
  beforeEach(() => {
    vi.clearAllMocks()
    vi.spyOn(SynapseClient, 'getFiles').mockResolvedValue(mockBatchFileResult)
  })
  it('should return goal data', async () => {
    const entityId = 'syn22315959'
    const { result } = renderHook(
      () => useGetGoalData(entityId, tableQueryResult),
      {
        wrapper: createWrapper(),
      },
    )

    await waitFor(() =>
      expect(result.current).toEqual({
        assets: [
          'https://mockurl.com/orangecat.jpeg',
          'https://mockurl.com/tabbycat.jpeg',
        ],
        error: undefined,
      }),
    )
  })
})
