import React from 'react'
import SendToCavaticaConfirmationDialog from '../../../src/components/SynapseTable/SendToCavaticaConfirmationDialog'
import {
  displayToast,
  QueryContextProvider,
  QueryContextType,
  SynapseContextType,
} from '../../../src'
import { render, screen } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import userEvent from '@testing-library/user-event'
import {
  mockQueryBundleRequest,
  mockQueryResultBundle,
} from '../../../mocks/mockFileViewQuery'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from '../../../src/components/QueryVisualizationWrapper'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { cloneDeep } from 'lodash-es'
import * as UseExportToCavaticaModule from '../../../src/synapse-queries/entity/useExportToCavatica'

const onExportToCavatica = jest.fn()

const mockUseExportToCavatica = jest
  .spyOn(UseExportToCavaticaModule, 'useExportToCavatica')
  .mockImplementation(() => {
    return onExportToCavatica
  })

function renderComponent(
  wrapperProps?: SynapseContextType,
  queryContextOverrides?: Partial<QueryContextType>,
  queryVisualizationContextOverrides?: Partial<QueryVisualizationContextType>,
) {
  return render(
    <QueryContextProvider
      queryContext={{
        data: mockQueryResultBundle,
        getLastQueryRequest: () => cloneDeep(mockQueryBundleRequest),
        ...queryContextOverrides,
      }}
    >
      <QueryVisualizationContextProvider
        queryVisualizationContext={{
          isShowingExportToCavaticaModal: true,
          setIsShowingExportToCavaticaModal: () => {
            displayToast('close modal called')
          },
          isRowSelectionVisible: true,
          selectedRows: [],
          resultsToExportToCavatica: 'ALL',
          unitDescription: 'result',
          ...queryVisualizationContextOverrides,
        }}
      >
        <SendToCavaticaConfirmationDialog />
      </QueryVisualizationContextProvider>
    </QueryContextProvider>,
    {
      wrapper: createWrapper(wrapperProps),
    },
  )
}

function setUp(
  wrapperProps?: SynapseContextType,
  queryContextOverrides?: Partial<QueryContextType>,
  queryVisualizationContextOverrides?: Partial<QueryVisualizationContextType>,
) {
  const user = userEvent.setup()
  const component = renderComponent(
    wrapperProps,
    queryContextOverrides,
    queryVisualizationContextOverrides,
  )
  const sendToCavatica = screen.getByRole('button', { name: /CAVATICA/i })
  return { component, user, sendToCavatica }
}

describe('Export to CAVATICA Modal', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('allows exporting all results', async () => {
    const { user, sendToCavatica } = setUp(undefined, undefined, {
      isRowSelectionVisible: false,
      selectedRows: [],
    })

    await user.click(sendToCavatica)

    expect(mockUseExportToCavatica).toHaveBeenCalledWith(
      mockQueryBundleRequest,
      mockQueryResultBundle.queryResult.queryResults.headers,
    )
  })

  it('allows exporting selected results', async () => {
    const { user, sendToCavatica } = setUp(undefined, undefined, {
      isRowSelectionVisible: true,
      selectedRows: mockQueryResultBundle.queryResult.queryResults.rows.slice(
        0,
        2,
      ),
    })

    await user.click(sendToCavatica)

    expect(mockUseExportToCavatica).toHaveBeenCalledWith(
      expect.objectContaining({
        ...mockQueryBundleRequest,
        query: {
          ...mockQueryBundleRequest.query,
          additionalFilters: [
            {
              concreteType:
                'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
              columnName: 'id',
              operator: ColumnSingleValueFilterOperator.IN,
              values: mockQueryResultBundle.queryResult.queryResults.rows
                .slice(0, 2)
                .map(row => row.values[0]),
            },
          ],
        },
      }),
      mockQueryResultBundle.queryResult.queryResults.headers,
    )
  })
})
