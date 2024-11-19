import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import RecentPublicationsGrid, {
  RecentPublicationsGridProps,
} from './RecentPublicationsGrid'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'

jest.mock('../../synapse-queries/entity/useGetQueryResultBundle')
const mockUseGetQueryResultBundle = jest.mocked(useGetQueryResultBundle)

describe('RecentPublicationsGrid Tests', () => {
  const mockProps: RecentPublicationsGridProps = {
    sql: 'SELECT * FROM syn123',
    buttonLink: 'https://example.com',
    buttonLinkText: 'View All Publications',
    summaryText: 'This is a summary.',
  }

  const mockQueryResult = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        tableId: 'syn64042839',
        etag: 'DEFAULT',
        headers: [
          {
            name: 'id',
            columnType: ColumnTypeEnum.ENTITYID,
            id: '81721',
          },
          {
            name: 'Tag',
            columnType: ColumnTypeEnum.STRING,
            id: '81722',
          },
          {
            name: 'Journal',
            columnType: ColumnTypeEnum.STRING,
            id: '81723',
          },
          {
            name: 'Title',
            columnType: ColumnTypeEnum.STRING,
            id: '81724',
          },
          {
            name: 'PublicationDate',
            columnType: ColumnTypeEnum.DATE,
            id: '81725',
          },
        ],
        rows: [
          {
            rowId: 1,
            values: ['1', 'Tag1', 'Journal1', 'Title1', '1672531200000'],
          },
          {
            rowId: 2,
            values: ['2', 'Tag2', 'Journal2', 'Title2', '1685577600000'],
          },
        ],
      },
    },
    selectColumns: [
      {
        name: 'id',
        columnType: ColumnTypeEnum.ENTITYID,
        id: '81721',
      },
      {
        name: 'Tag',
        columnType: ColumnTypeEnum.STRING,
        id: '81722',
      },
      {
        name: 'Journal',
        columnType: ColumnTypeEnum.STRING,
        id: '81723',
      },
      {
        name: 'Title',
        columnType: ColumnTypeEnum.STRING,
        id: '81724',
      },
      {
        name: 'publicationDate',
        columnType: ColumnTypeEnum.DATE,
        id: '81725',
      },
    ],
  }

  beforeEach(() => {
    jest.clearAllMocks()
    mockUseGetQueryResultBundle.mockReturnValue({
      data: mockQueryResult,
    } as any)
  })

  it('fetches and displays publication cards', async () => {
    render(<RecentPublicationsGrid {...mockProps} />, {
      wrapper: createWrapper(),
    })

    await waitFor(() =>
      expect(mockUseGetQueryResultBundle).toHaveBeenCalledTimes(1),
    )

    expect(screen.getByText('Tag1')).toBeInTheDocument()
    expect(screen.getByText('Title1')).toBeInTheDocument()
    expect(screen.getByText('Journal1')).toBeInTheDocument()
    expect(screen.getByText('December, 2022')).toBeInTheDocument()

    expect(screen.getByText('Tag2')).toBeInTheDocument()
    expect(screen.getByText('Title2')).toBeInTheDocument()
    expect(screen.getByText('Journal2')).toBeInTheDocument()
    expect(screen.getByText('May, 2023')).toBeInTheDocument()
  })

  it('renders summary text and button if props provided', () => {
    render(<RecentPublicationsGrid {...mockProps} />, {
      wrapper: createWrapper(),
    })

    expect(screen.getByText('This is a summary.')).toBeInTheDocument()

    const button = screen.getByRole('link', { name: 'View All Publications' })
    expect(button).toHaveAttribute('href', 'https://example.com')
  })
})
