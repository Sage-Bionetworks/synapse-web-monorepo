import PortalFeaturedPartners, {
  PortalFeaturedPartnersProps,
} from './PortalFeaturedPartners'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { screen, render, waitFor } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  BatchFileResult,
  ColumnTypeEnum,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { getUseQuerySuccessMock } from '../../testutils/ReactQueryMockUtils'
import { SynapseClient } from '../../index'

jest.mock('../../synapse-queries/entity/useGetQueryResultBundle')
const mockUseGetQueryResultBundle = jest.mocked(useGetQueryResultBundle)

describe('ImageCardGridWithLinks Tests', () => {
  const mockProps: PortalFeaturedPartnersProps = {
    sql: 'SELECT * FROM syn62661043',
  }

  const mockQueryResult: QueryResultBundle = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        tableId: 'syn62661043',
        etag: 'DEFAULT',
        headers: [
          {
            name: 'organizationName',
            columnType: ColumnTypeEnum.STRING,
            id: '1',
          },
          {
            name: 'cardLogo',
            columnType: ColumnTypeEnum.FILEHANDLEID,
            id: '2',
          },
          {
            name: 'website',
            columnType: ColumnTypeEnum.FILEHANDLEID,
            id: '3',
          },
        ],
        rows: [
          {
            rowId: 1,
            values: ['Partner 1', '149976034', 'http://somewebsite1.com'],
          },
          {
            rowId: 2,
            values: ['Partner 2', '149976034', 'http://somewebsite2.com'],
          },
          {
            rowId: 3,
            values: ['Partner 3', '', 'http://somewebsite3.com'],
          },
        ],
      },
    },
    selectColumns: [
      {
        name: 'organizationName',
        columnType: ColumnTypeEnum.STRING,
        id: '1',
      },
      {
        name: 'cardLogo',
        columnType: ColumnTypeEnum.FILEHANDLEID,
        id: '2',
      },
      {
        name: 'website',
        columnType: ColumnTypeEnum.LINK,
        id: '3',
      },
    ],
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

  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(SynapseClient, 'getFiles').mockResolvedValue(mockBatchFileResult)
    mockUseGetQueryResultBundle.mockReturnValue(
      getUseQuerySuccessMock(mockQueryResult),
    )
  })

  const renderComponent = (props: PortalFeaturedPartnersProps) => {
    return render(<PortalFeaturedPartners {...props} />, {
      wrapper: createWrapper(),
    })
  }

  it('fetches and displays partners', async () => {
    renderComponent(mockProps)

    await waitFor(() =>
      expect(mockUseGetQueryResultBundle).toHaveBeenCalledTimes(1),
    )

    const partners = screen.getAllByRole('link')
    expect(partners).toHaveLength(3)
    expect(screen.getByText('Partner 3')).toBeInTheDocument()
    expect(partners[0]).toHaveAttribute('href', 'http://somewebsite1.com')
    expect(partners[1]).toHaveAttribute('href', 'http://somewebsite2.com')
    expect(partners[2]).toHaveAttribute('href', 'http://somewebsite3.com')

    partners.forEach((partner, index) => {
      expect(partner).toHaveAttribute(
        'href',
        `http://somewebsite${index + 1}.com`,
      )
    })
  })
})
