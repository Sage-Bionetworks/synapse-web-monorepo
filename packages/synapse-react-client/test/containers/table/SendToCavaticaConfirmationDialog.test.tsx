import React from 'react'
import SendToCavaticaConfirmationDialog from '../../../src/components/SynapseTable/SendToCavaticaConfirmationDialog'
import {
  displayToast,
  QueryContextProvider,
  QueryContextType,
  SynapseContextType,
} from '../../../src'
import { render, screen } from '@testing-library/react'
import { createWrapper } from '../../../src/testutils/TestingLibraryUtils'
import userEvent from '@testing-library/user-event'
import {
  mockQueryBundleRequest,
  mockQueryResultBundle,
} from '../../../src/mocks/mockFileViewQuery'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from '../../../src/components/QueryVisualizationWrapper'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { cloneDeep } from 'lodash-es'
import { mockManagedACTAccessRequirement } from '../../../src/mocks/mockAccessRequirements'
import * as UseExportToCavaticaModule from '../../../src/synapse-queries/entity/useExportToCavatica'
import * as UseActionsRequiredForTableQueryModule from '../../../src/synapse-queries/entity/useActionsRequiredForTableQuery'

const onExportToCavatica = jest.fn()

const mockUseExportToCavatica = jest
  .spyOn(UseExportToCavaticaModule, 'useExportToCavatica')
  .mockImplementation(() => {
    return onExportToCavatica
  })

const mockUseGetActionsRequiredForTableQuery = jest
  .spyOn(
    UseActionsRequiredForTableQueryModule,
    'useGetActionsRequiredForTableQuery',
  )
  .mockReturnValue({ isLoading: false, data: [] })

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
          rowSelectionPrimaryKey: ['id'],
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

describe('Send to CAVATICA Confirmation Dialog', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('allows exporting all results', async () => {
    const { user, sendToCavatica } = setUp(
      undefined,
      {
        isRowSelectionVisible: false,
        selectedRows: [],
      },
      undefined,
    )

    await user.click(sendToCavatica)

    expect(mockUseExportToCavatica).toHaveBeenCalledWith(
      mockQueryBundleRequest,
      mockQueryResultBundle.queryResult.queryResults.headers,
    )
  })

  it('allows exporting selected results', async () => {
    const { user, sendToCavatica } = setUp(
      undefined,
      {
        isRowSelectionVisible: true,
        hasSelectedRows: true,
        selectedRows: mockQueryResultBundle.queryResult.queryResults.rows.slice(
          0,
          2,
        ),
        rowSelectionPrimaryKey: ['id'],
      },
      undefined,
    )

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

  it('blocks submission while loading actions required', async () => {
    mockUseGetActionsRequiredForTableQuery.mockReturnValue({
      isLoading: true,
      data: undefined,
    })
    const { user, sendToCavatica } = setUp(
      undefined,
      {
        isRowSelectionVisible: false,
        selectedRows: [],
      },
      undefined,
    )

    expect(sendToCavatica).toBeDisabled()
  })
  it('blocks submission if actions required exist', async () => {
    mockUseGetActionsRequiredForTableQuery.mockReturnValue({
      isLoading: false,
      data: [
        {
          action: {
            concreteType: 'org.sagebionetworks.repo.model.download.EnableTwoFa',
            accessRequirementId: mockManagedACTAccessRequirement.id,
          },
          count: 1,
        },
      ],
    })
    const { user, sendToCavatica } = setUp(
      undefined,
      {
        isRowSelectionVisible: false,
        selectedRows: [],
      },
      undefined,
    )

    expect(sendToCavatica).toBeDisabled()
  })
})
