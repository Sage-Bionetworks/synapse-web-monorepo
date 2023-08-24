import React from 'react'
import SendToCavaticaConfirmationDialog from './SendToCavaticaConfirmationDialog'
import { QueryWrapper } from '../../index'
import { act, render, screen, waitFor } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import userEvent from '@testing-library/user-event'
import {
  mockQueryBundleRequest,
  mockQueryResultBundle,
} from '../../mocks/mockFileViewQuery'
import {
  QueryVisualizationContextType,
  QueryVisualizationWrapper,
  useQueryVisualizationContext,
} from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { mockManagedACTAccessRequirement } from '../../mocks/mockAccessRequirements'
import * as UseExportToCavaticaModule from '../../synapse-queries/entity/useExportToCavatica'
import * as UseActionsRequiredForTableQueryModule from '../../synapse-queries/entity/useActionsRequiredForTableQuery'
import { server } from '../../mocks/msw/server'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import { useSetAtom } from 'jotai'
import { selectedRowsAtom } from '../QueryWrapper/TableRowSelectionState'
import {
  getUseQueryLoadingMock,
  getUseQuerySuccessMock,
} from '../../testutils/ReactQueryMockUtils'

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
  .mockReturnValue(getUseQuerySuccessMock([]))

let showSendToCavaticaModal:
  | QueryVisualizationContextType['setIsShowingExportToCavaticaModal']
  | undefined
let setSelectedRows: ReturnType<typeof useSetAtom> | undefined

function ContextReceiver(props: React.PropsWithChildren<any>) {
  setSelectedRows = useSetAtom(selectedRowsAtom)
  showSendToCavaticaModal =
    useQueryVisualizationContext().setIsShowingExportToCavaticaModal
  return <>{props.children}</>
}

function renderComponent() {
  return render(
    <QueryWrapper
      initQueryRequest={mockQueryBundleRequest}
      rowSelectionPrimaryKey={['id']}
    >
      <QueryVisualizationWrapper unitDescription={'result'}>
        <ContextReceiver>
          <SendToCavaticaConfirmationDialog />
        </ContextReceiver>
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    {
      wrapper: createWrapper(),
    },
  )
}

async function setUp() {
  const user = userEvent.setup()
  const component = renderComponent()

  await waitFor(() => {
    expect(showSendToCavaticaModal).toBeDefined()
  })

  act(() => {
    showSendToCavaticaModal!(true)
  })

  const sendToCavatica = screen.getByRole('button', { name: /CAVATICA/i })
  return { component, user, sendToCavatica }
}

describe('Send to CAVATICA Confirmation Dialog', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    jest.clearAllMocks()
    server.use(...getHandlersForTableQuery(mockQueryResultBundle))
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('allows exporting all results', async () => {
    const { user, sendToCavatica } = await setUp()

    // No selection

    await user.click(sendToCavatica)

    await waitFor(() => {
      expect(mockUseExportToCavatica).toHaveBeenCalledWith(
        mockQueryBundleRequest,
        mockQueryResultBundle.queryResult!.queryResults.headers,
        undefined,
        undefined,
        undefined,
      )
    })
  })

  it('allows exporting selected results', async () => {
    const { user, sendToCavatica } = await setUp()

    await waitFor(() => {
      expect(setSelectedRows).toBeDefined()
    })
    // Select rows
    act(() => {
      setSelectedRows!(
        mockQueryResultBundle.queryResult!.queryResults.rows.slice(0, 2),
      )
    })

    await user.click(sendToCavatica)

    await waitFor(() => {
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
                values: mockQueryResultBundle
                  .queryResult!.queryResults.rows.slice(0, 2)
                  .map(row => row.values[0]),
              },
            ],
          },
        }),
        mockQueryResultBundle.queryResult!.queryResults.headers,
        undefined,
        undefined,
        undefined,
      )
    })
  })

  it('blocks submission while loading actions required', async () => {
    mockUseGetActionsRequiredForTableQuery.mockReturnValue(
      getUseQueryLoadingMock(),
    )
    const { sendToCavatica } = await setUp()

    expect(sendToCavatica).toBeDisabled()
  })

  it('blocks submission if actions required exist', async () => {
    mockUseGetActionsRequiredForTableQuery.mockReturnValue(
      getUseQuerySuccessMock([
        {
          action: {
            concreteType: 'org.sagebionetworks.repo.model.download.EnableTwoFa',
            accessRequirementId: mockManagedACTAccessRequirement.id,
          },
          count: 1,
        },
      ]),
    )
    const { sendToCavatica } = await setUp()

    expect(sendToCavatica).toBeDisabled()
  })
})
