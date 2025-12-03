import React from 'react'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import * as SynapseClient from '@/synapse-client/SynapseClient'
import GoalsV3 from './GoalsV3'

vi.mock('@/utils/hooks/useShowDesktop', () => ({
  __esModule: true,
  default: vi.fn(() => true),
}))

vi.mock('../QueryCount/QueryCount', () => {
  const mockImplementation = ({ query }: { query: { sql: string } }) => {
    return <span>{query.sql}</span>
  }
  return {
    QueryCount: mockImplementation,
    default: mockImplementation,
  }
})

const DummySvgIcon = (): React.ReactNode => <svg data-testid="dummy-icon" />

const mockSvgComponentMap = {
  datasets_and_files: DummySvgIcon,
  methods: DummySvgIcon,
  publications: DummySvgIcon,
}
const tableQueryResult: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  selectColumns: [
    { id: '0', name: 'Title', columnType: 'STRING' },
    { id: '1', name: 'Summary', columnType: 'LARGETEXT' },
    { id: '2', name: 'TableId', columnType: 'ENTITYID' },
    { id: '3', name: 'CountSql', columnType: 'ENTITYID' },
    { id: '5', name: 'Link', columnType: 'STRING' },
    { id: '6', name: 'iconKey', columnType: 'STRING' },
    { id: '7', name: 'ItemOrder', columnType: 'STRING' },
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
        { id: '5', name: 'Link', columnType: 'STRING' },
        { id: '6', name: 'iconKey', columnType: 'STRING' },
        { id: '7', name: 'ItemOrder', columnType: 'STRING' },
      ],
      rows: [
        {
          rowId: 1,
          values: [
            'Methods',
            'Question-driven studies that define the scientific scope and provide context to the contributed resources.',
            'syn21783965',
            '5',
            'Explore/Studies',
            'methods',
            '1',
          ],
        },
        {
          rowId: 2,
          values: [
            'Datasets and Files',
            'Collected from samples and cell lines across a spectrum of genomic assays and neuropsychiatric diseases.',
            'syn20821313',
            '131',
            'Explore/Data',
            'datasets_and_files',
            '2',
          ],
        },
        {
          rowId: 3,
          values: [
            'Publications',
            'Lessons learned from consortia data and methods, shared as peer-reviewed journal articles.',
            'syn22095937',
            '10',
            'Explore/Publications',
            'publications',
            '3',
          ],
        },
      ],
    },
  },
}

beforeEach(() => {
  vi.clearAllMocks()
  vi.spyOn(SynapseClient, 'getQueryTableResults').mockResolvedValue(
    tableQueryResult,
  )
})

describe('GoalsV2 Desktop', () => {
  test('renders the component with provided props', async () => {
    render(
      <GoalsV3 entityId="syn22315959" svgComponentMap={mockSvgComponentMap} />,
      { wrapper: createWrapper() },
    )

    await waitFor(() => {
      expect(screen.getAllByTestId('dummy-icon')).toHaveLength(3)
      expect(screen.getByText('Methods')).toBeInTheDocument()
      expect(screen.getByText('Datasets and Files')).toBeInTheDocument()
      expect(screen.getByText('Publications')).toBeInTheDocument()
      expect(screen.getByText('131')).toBeInTheDocument()
    })
  })
})
