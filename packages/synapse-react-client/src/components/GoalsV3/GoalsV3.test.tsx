import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BatchFileResult,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SynapseClient } from '../../index'
import GoalsV3 from './GoalsV3'

jest.mock('@/utils/hooks/useShowDesktop', () => ({
  __esModule: true,
  default: jest.fn(() => true),
}))

jest.mock('../QueryCount/QueryCount', () => ({
  __esModule: true,
  default: ({ query }: { query: { sql: string } }) => {
    return <span>{query.sql}</span>
  },
}))

const tableQueryResult: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  selectColumns: [
    { id: '0', name: 'Title', columnType: 'STRING' },
    { id: '1', name: 'Summary', columnType: 'LARGETEXT' },
    { id: '2', name: 'TableId', columnType: 'ENTITYID' },
    { id: '3', name: 'CountSql', columnType: 'ENTITYID' },
    { id: '4', name: 'Asset', columnType: 'FILEHANDLEID' },
    { id: '5', name: 'Link', columnType: 'STRING' },
    { id: '6', name: 'ItemOrder', columnType: 'STRING' },
  ],
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn123',
      etag: '2ac77a6e-193f-11ec-bc43-168179607a59',
      headers: [
        { id: '0', name: 'Title', columnType: 'STRING' },
        { id: '1', name: 'Summary', columnType: 'LARGETEXT' },
        { id: '2', name: 'TableId', columnType: 'ENTITYID' },
        { id: '3', name: 'CountSql', columnType: 'ENTITYID' },
        { id: '4', name: 'Asset', columnType: 'FILEHANDLEID' },
        { id: '5', name: 'Link', columnType: 'STRING' },
        { id: '6', name: 'ItemOrder', columnType: 'STRING' },
      ],
      rows: [
        {
          rowId: 1,
          values: [
            'Methods',
            'Question-driven studies that define the scientific scope and provide context to the contributed resources.',
            'syn21783965',
            '5',
            '64155356',
            'Explore/Studies',
            '149976034',
          ],
        },
        {
          rowId: 2,
          values: [
            'Datasets & Files',
            'Collected from samples and cell lines across a spectrum of genomic assays and neuropsychiatric diseases.',
            'syn20821313',
            '131',
            '64155359',
            'Explore/Data',
            '149976034',
          ],
        },
        {
          rowId: 3,
          values: [
            'Publications',
            'Lessons learned from consortia data and methods, shared as peer-reviewed journal articles.',
            'syn22095937',
            '10',
            '149976044',
            'Explore/Publications',
            '3',
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
  {
    fileHandleId: '149976045',
    preSignedURL: 'https://mockurl.com/blackcat.jpeg',
  },
]

const mockBatchFileResult: BatchFileResult = {
  requestedFiles: mockFileResult,
}

beforeEach(() => {
  jest.clearAllMocks()
  jest.spyOn(SynapseClient, 'getFiles').mockResolvedValue(mockBatchFileResult)
  jest
    .spyOn(SynapseClient, 'getQueryTableResults')
    .mockResolvedValue(tableQueryResult)
})
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('GoalsV2 Desktop', () => {
  test('renders the component with provided props', async () => {
    render(<GoalsV3 entityId="syn22315959" />, { wrapper: createWrapper() })

    await waitFor(() => {
      const images = screen.getAllByRole('img')
      expect(images).toHaveLength(3)
      expect(screen.getByText('Methods')).toBeInTheDocument()
      expect(screen.getByText('Datasets & Files')).toBeInTheDocument()
      expect(screen.getByText('Publications')).toBeInTheDocument()
      expect(screen.getByText('131')).toBeInTheDocument()
    })
  })
})
