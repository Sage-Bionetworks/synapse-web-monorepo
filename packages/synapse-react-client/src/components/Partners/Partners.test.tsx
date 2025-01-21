import Partners, { PartnersProps } from './Partners'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
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
  const mockProps: PartnersProps = {
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
            id: '81723',
          },
          {
            name: 'cardLogo',
            columnType: ColumnTypeEnum.FILEHANDLEID,
            id: '81724',
          },
        ],
        rows: [
          {
            rowId: 1,
            values: ['Partner 1', '149976034'],
          },
          {
            rowId: 2,
            values: ['Partner 2', '149976034'],
          },
        ],
      },
    },
    selectColumns: [
      {
        name: 'organizationName',
        columnType: ColumnTypeEnum.STRING,
        id: '81723',
      },
      {
        name: 'cardLogo',
        columnType: ColumnTypeEnum.FILEHANDLEID,
        id: '81724',
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

  const renderWithRouter = (props: PartnersProps) => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: <Partners {...props} />,
      },
    ])
    return render(<RouterProvider router={router} />, {
      wrapper: createWrapper(),
    })
  }

  it('fetches and displays partners', async () => {
    renderWithRouter(mockProps)

    await waitFor(() =>
      expect(mockUseGetQueryResultBundle).toHaveBeenCalledTimes(1),
    )
  })
})
