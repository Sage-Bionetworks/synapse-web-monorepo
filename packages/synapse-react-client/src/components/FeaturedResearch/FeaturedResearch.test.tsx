import FeaturedResearch, { FeaturedResearchProps } from './FeaturedResearch'
import { screen, render, waitFor } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import {
  BatchFileResult,
  ColumnTypeEnum,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { getUseQuerySuccessMock } from '../../testutils/ReactQueryMockUtils'
import { SynapseClient } from '../../index'

jest.mock('../../synapse-queries/entity/useGetQueryResultBundle')
const mockUseGetQueryResultBundle = jest.mocked(useGetQueryResultBundle)

describe('FeaturedResearch Tests', () => {
  const mockProps: FeaturedResearchProps = {
    sql: 'SELECT * FROM syn64542019',
  }

  const mockQueryResult: QueryResultBundle = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        tableId: 'syn64542019',
        etag: 'DEFAULT',
        headers: [
          {
            name: 'title',
            columnType: ColumnTypeEnum.STRING,
            id: '1',
          },
          {
            name: 'description',
            columnType: ColumnTypeEnum.STRING,
            id: '2',
          },
          {
            name: 'publicationDate',
            columnType: ColumnTypeEnum.DATE,
            id: '3',
          },
          {
            name: 'image',
            columnType: ColumnTypeEnum.FILEHANDLEID,
            id: '4',
          },
          { name: 'link', columnType: ColumnTypeEnum.LINK, id: '5' },
          { name: 'order', columnType: ColumnTypeEnum.INTEGER, id: '6' },
        ],
        rows: [
          {
            rowId: 1,
            values: [
              'Title 1',
              'Description 1',
              '1726164997000',
              '151525812',
              'https://mockurl.com/data-release-1',
              '2',
            ],
          },
          {
            rowId: 2,
            values: [
              'Title 2',
              'Description 2',
              '1726164997000',
              '151468828',
              'https://mockurl.com/data-release-2',
              '2',
            ],
          },
        ],
      },
    },
    selectColumns: [
      {
        name: 'title',
        columnType: ColumnTypeEnum.STRING,
        id: '1',
      },
      {
        name: 'description',
        columnType: ColumnTypeEnum.STRING,
        id: '2',
      },
      {
        name: 'publicationDate',
        columnType: ColumnTypeEnum.DATE,
        id: '3',
      },
      {
        name: 'image',
        columnType: ColumnTypeEnum.FILEHANDLEID,
        id: '4',
      },
      { name: 'link', columnType: ColumnTypeEnum.LINK, id: '5' },
      { name: 'order', columnType: ColumnTypeEnum.INTEGER, id: '6' },
    ],
  }

  const mockFileResult = [
    {
      fileHandleId: '151525812',
      preSignedURL: 'https://mockurl.com/cat1.jpeg',
    },
    {
      fileHandleId: '151468828',
      preSignedURL: 'https://mockurl.com/cat2.jpeg',
    },
  ]

  const mockBatchFileResult: BatchFileResult = {
    requestedFiles: mockFileResult,
  }

  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(SynapseClient, 'getFiles').mockResolvedValue(mockBatchFileResult)
    mockUseGetQueryResultBundle.mockReturnValue(
      getUseQuerySuccessMock(mockQueryResult),
    )
  })

  function renderComponent(props: FeaturedResearchProps) {
    return render(<FeaturedResearch {...props} />, {
      wrapper: createWrapper(),
    })
  }

  it('fetches and displays research cards', async () => {
    mockUseGetQueryResultBundle.mockReturnValue(
      getUseQuerySuccessMock(mockQueryResult),
    )
    renderComponent(mockProps)

    await waitFor(() =>
      expect(mockUseGetQueryResultBundle).toHaveBeenCalledTimes(1),
    )

    const headings = screen.getAllByText('Featured Research')
    expect(headings.length).toBe(2)
    expect(screen.getByText('Read more')).toBeInTheDocument()
    expect(screen.getByText('Title 1')).toBeInTheDocument()
    expect(screen.getByText('Description 1')).toBeInTheDocument()

    expect(screen.getByText('Title 2')).toBeInTheDocument()
    expect(screen.getByText('September, 2024')).toBeInTheDocument()

    await waitFor(() => {
      const images = document.querySelectorAll('.MuiCardMedia-root')
      expect(images).toHaveLength(2)
    })
  })
})
