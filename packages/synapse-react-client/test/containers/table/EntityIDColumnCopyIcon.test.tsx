import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import EntityIDColumnCopyIcon from '../../../src/components/SynapseTable/EntityIDColumnCopyIcon'
import { createWrapper } from '../../../src/testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../src/utils/context/SynapseContext'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../../src/components/QueryContext/QueryContext'
import idsQueryResponse from '../../../src/mocks/mockIDListQueryResponseData.json'
import { SynapseClient, SynapseConstants } from '../../../src'
import { TextMatchesQueryFilter } from '@sage-bionetworks/synapse-types'

const synID = 'syn55555'
const version = '7'
const whereClause = "where a='2'"

const originalSql = `select a, b from ${synID}.${version} ${whereClause}`
const queryFilter: TextMatchesQueryFilter = {
  concreteType: 'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
  searchExpression: 'testing full-text search',
}
const originalQueryFilters = [queryFilter]
const mockQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: synID,
  partMask:
    SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
    SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
    SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS,
  query: {
    sql: originalSql,
    additionalFilters: originalQueryFilters,
  },
}

const queryContext: Partial<QueryContextType> = {
  data: idsQueryResponse as QueryResultBundle,
  getCurrentQueryRequest: () => mockQueryRequest,
  isLoadingNewBundle: false,
}

function renderComponent(wrapperProps?: SynapseContextType) {
  return render(
    <QueryContextProvider queryContext={queryContext}>
      <EntityIDColumnCopyIcon />
    </QueryContextProvider>,
    {
      wrapper: createWrapper(wrapperProps),
    },
  )
}

describe('EntityIDColumnCopyIcon tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    SynapseClient.getFullQueryTableResults = jest
      .fn()
      .mockResolvedValue(idsQueryResponse as QueryResultBundle)
    mockAllIsIntersecting(false)
  })

  describe('Do copy', () => {
    it('Copies IDs to the clipboard', async () => {
      const mockWriteText = jest.fn()
      mockWriteText.mockResolvedValue('copied')
      const mockClipboard = {
        writeText: mockWriteText,
      }
      Object.assign(navigator, {
        clipboard: mockClipboard,
      })

      renderComponent()

      await userEvent.click(await screen.findByRole('button'))

      await waitFor(() =>
        expect(SynapseClient.getFullQueryTableResults).toBeCalledWith(
          expect.objectContaining({
            query: expect.objectContaining({
              sql: `select id from ${synID}.${version} ${whereClause}`,
              additionalFilters: originalQueryFilters,
            }),
          }),
          'mock-access-token', //access token
          expect.anything(), // abort signal
        ),
      )

      expect(mockWriteText).toHaveBeenCalled()
      expect(mockWriteText).toHaveBeenCalledWith(
        'syn25922102\nsyn25959271\nsyn25959274\nsyn25959276\nsyn25959279\nsyn25959281\nsyn25959285\nsyn25959288\nsyn25959290\nsyn25959292\nsyn26208690\nsyn32794351',
      )
    })
  })
})
