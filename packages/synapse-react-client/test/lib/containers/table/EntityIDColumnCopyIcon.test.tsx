import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import EntityIDColumnCopyIcon from '../../../../src/lib/containers/table/EntityIDColumnCopyIcon'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../../src/lib/utils/SynapseContext'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '../../../../src/lib/utils/synapseTypes'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../../../src/lib/containers/QueryContext'
import idsQueryResponse from '../../../../mocks/mockIDListQueryResponseData.json'
import { SynapseClient, SynapseConstants } from '../../../../src/lib'
import { TextMatchesQueryFilter } from '../../../../src/lib/utils/synapseTypes/Table/QueryFilter'

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
  getLastQueryRequest: () => mockQueryRequest,
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
