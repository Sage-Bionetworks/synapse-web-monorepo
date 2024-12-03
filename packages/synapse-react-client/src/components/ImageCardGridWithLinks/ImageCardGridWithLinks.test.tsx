import ImageCardGridWithLinks, {
  ImageCardGridWithLinksProps,
} from './ImageCardGridWithLinks'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { screen, render, waitFor } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import React from 'react'
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
  const mockProps: ImageCardGridWithLinksProps = {
    sql: 'SELECT * FROM syn64112885',
    title: 'Test title',
    summaryText: 'This is a summary.',
  }

  const mockQueryResult: QueryResultBundle = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        tableId: 'syn64112885',
        etag: 'DEFAULT',
        headers: [
          {
            name: 'Image',
            columnType: ColumnTypeEnum.FILEHANDLEID,
            id: '81723',
          },
          {
            name: 'LinkText',
            columnType: ColumnTypeEnum.STRING,
            id: '81724',
          },
          {
            name: 'Link',
            columnType: ColumnTypeEnum.LINK,
            id: '81725',
          },
        ],
        rows: [
          {
            rowId: 1,
            values: [
              '149976034',
              'Comparative Biology',
              'https://en.wikipedia.org/wiki/Comparative_biology#:~:text=Comparative%20biology%20uses%20natural%20variation,role%20of%20organisms%20in%20ecosystems.',
            ],
          },
          {
            rowId: 2,
            values: [
              '149976044',
              'Reference Genomes',
              'https://en.wikipedia.org/wiki/Reference_genome',
            ],
          },
        ],
      },
    },
    selectColumns: [
      {
        name: 'Image',
        columnType: ColumnTypeEnum.FILEHANDLEID,
        id: '81723',
      },
      {
        name: 'LinkText',
        columnType: ColumnTypeEnum.STRING,
        id: '81724',
      },
      {
        name: 'Link',
        columnType: ColumnTypeEnum.LINK,
        id: '81725',
      },
    ],
  }

  const mockFileResult = [
    {
      fileHandleId: '149976034',
      preSignedURL:
        'https://data.prod.sagebase.org/3503364/fe41104b-53ad-429a-8514-b6d34dac5244/cutecat.jpeg?response-content-disposition=attachment%3B%20filename%3D%22cutecat.jpeg%22%3B%20filename%2A%3Dutf-8%27%27cutecat.jpeg&response-content-type=image%2Fjpeg&X-Amz-Date=20241127T185252Z&X-Amz-Expires=30&Expires=1732733602&Signature=ScTtKjHjH67a~rIWY-1Oei8yRkowBtp6pSyhbYAsaAdXfLgffMcnV-ellHQ0nX3k~Rsv~nuWcFJgZlYJWljuIlgs2YN6r1YkWJtU~z7QxOpEsJFq43ASMhEV7lnd09V3q2CPsc4KvjwYufoyVqV-VbHwWTCbGnpYF4pqnyuRk3XOY8JfyJNifrgstiKzyIrvrtKct9yz8yqu~Ng5RKqsiWwIgQ581gT78wb69UntRNKETq9raRInrxMnoSKWuxG-wshtw1fCH9A25Z1EmmdTgmL8A2xj1uyqaREslYE~qvuBaVjUJb64Hwmvr4xcIIbo6o7Cobk6itG4Y07nduo8IA__&Key-Pair-Id=K1ODM3BLJ5L7YV',
    },
    {
      fileHandleId: '149976044',
      preSignedURL:
        'https://data.prod.sagebase.org/3503364/77d6bdc9-2e54-40ee-ae03-57026fbf0518/striped-grey-kitten.jpg?response-content-disposition=attachment%3B%20filename%3D%22striped-grey-kitten.jpg%22%3B%20filename%2A%3Dutf-8%27%27striped%252Dgrey%252Dkitten.jpg&response-content-type=image%2Fjpeg&X-Amz-Date=20241127T185252Z&X-Amz-Expires=30&Expires=1732733602&Signature=Gce~hKOKN2kmj-EbI3klMaWWKDW8KXznUxY-AZ0gbbpZj0-ZRiNalrB3BfZ2-G2AM5yp5fsJVmTcGrmEiu1T1l0wY48JHhPmokEObYLbBhenPsvriOit6ppZ1Q8UxoQq6Hp~AMbIQaU1k7INjtUF~dLJbBN~SkEmepGuOnW9Iw0iUw8sGPeR8m7I~q~f3hSJQO~d9yc3iMNp4BieE491AKsHXtHwKSn8AA6uhD8J2CrftIu18DicvWX4uTb25eW0103z5QxWdDIDIx-nyIOJ~3nCjgK92G2~ZySOGlifeFmdWVVzzUe0ppq9rdlihVQa19ZckOx9OpRe1bq3eYQjzA__&Key-Pair-Id=K1ODM3BLJ5L7YV',
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

  const renderWithRouter = (props: ImageCardGridWithLinksProps) => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: <ImageCardGridWithLinks {...props} />,
      },
    ])
    return render(<RouterProvider router={router} />, {
      wrapper: createWrapper(),
    })
  }

  it('fetches and displays cards', async () => {
    renderWithRouter(mockProps)

    await waitFor(() =>
      expect(mockUseGetQueryResultBundle).toHaveBeenCalledTimes(1),
    )

    expect(screen.getByText('Test title')).toBeInTheDocument()
    expect(screen.getByText('This is a summary.')).toBeInTheDocument()
    expect(screen.getByText('Comparative Biology')).toBeInTheDocument()
    expect(screen.getByText('Reference Genomes')).toBeInTheDocument()

    await waitFor(() => {
      const images = screen.getAllByRole('img')
      expect(images).toHaveLength(2)
    })
  })
})
