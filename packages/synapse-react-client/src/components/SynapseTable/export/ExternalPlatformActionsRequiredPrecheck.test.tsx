import '@/mocks/msw/server'
import {
  ColumnModel,
  ColumnSingleValueFilterOperator,
  ColumnTypeEnum,
  QueryBundleRequest,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import { ButtonProps } from '@mui/material'
import { cloneDeep, upperFirst } from 'lodash-es'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_RESULTS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
} from '@/utils/SynapseConstants'
import { useExportTableQueryToAnalysisPlatform } from '../../../synapse-queries/entity/useExportTableQueryToAnalysisPlatform'
import { TableQueryActionsRequired } from '../../DownloadCart/TableQueryActionsRequired'
import { useQueryContext } from '../../QueryContext'
import { QueryContextType } from '../../QueryContext/index'
import {
  QueryVisualizationContextType,
  useQueryVisualizationContext,
} from '../../QueryVisualizationWrapper/index'
import {
  useHasSelectedRowsAtomValue,
  useRowSelectionPrimaryKeyAtomValue,
  useSelectedRowsAtomValue,
} from '../../QueryWrapper/TableRowSelectionState'
import { getTableQueryUseQueryOptions } from '../../QueryWrapper/TableQueryUseQueryOptions'
import {
  EXTERNAL_ANALYSIS_PLATFORMS,
  ExternalAnalysisPlatform,
} from './ExternalAnalysisPlatformsConstants'
import ExternalPlatformActionsRequiredPrecheck from './ExternalPlatformActionsRequiredPrecheck'

vi.mock('../../../synapse-queries/entity/useExportTableQueryToAnalysisPlatform')
vi.mock('../../DownloadCart/TableQueryActionsRequired')
vi.mock('../../QueryContext')
vi.mock('../../QueryVisualizationWrapper/index')
vi.mock('../../QueryWrapper/TableRowSelectionState')

const mockUseExportTableQueryToAnalysisPlatform = vi.mocked(
  useExportTableQueryToAnalysisPlatform,
)
const mockUseQueryContext = vi.mocked(useQueryContext)
const mockUseQueryVisualizationContext = vi.mocked(useQueryVisualizationContext)
const MockTableQueryActionsRequired = vi.mocked(TableQueryActionsRequired)
const mockOnConfirmButtonPropsChange = vi.fn<(props: ButtonProps) => void>()
const mockOnSuccessfulExport = vi.fn()

const mockUseHasSelectedRowsAtomValue = vi.mocked(useHasSelectedRowsAtomValue)
const mockUseRowSelectionPrimaryKeyAtomValue = vi.mocked(
  useRowSelectionPrimaryKeyAtomValue,
)
const mockUseSelectedRowsAtomValue = vi.mocked(useSelectedRowsAtomValue)

const mockFileIdColumnName = 'file_id'
const mockFileVersionColumnName = 'file_version'
const mockFileNameColumnName = 'file_name'

const queryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  query: {
    sql: 'SELECT * FROM syn123',
  },
  entityId: 'syn123',
  partMask:
    BUNDLE_MASK_QUERY_RESULTS |
    BUNDLE_MASK_QUERY_COLUMN_MODELS |
    BUNDLE_MASK_QUERY_SELECT_COLUMNS,
}

const columnModels: ColumnModel[] = [
  { id: '123', name: 'foo', columnType: ColumnTypeEnum.STRING },
]
const selectColumns: SelectColumn[] = columnModels

const { queryMetadataQueryOptions } = getTableQueryUseQueryOptions(
  queryRequest,
  undefined,
  MOCK_CONTEXT_VALUE.keyFactory,
  MOCK_CONTEXT_VALUE.accessToken,
)

const mockQueryContext: QueryContextType = {
  // The component under test mutates the request it receives, so hand out a fresh copy on each call
  getCurrentQueryRequest: vi.fn(() => cloneDeep(queryRequest)),
  hasResettableFilters: false,
  fileIdColumnName: mockFileIdColumnName,
  fileVersionColumnName: mockFileVersionColumnName,
  fileNameColumnName: mockFileNameColumnName,
  // remaining fields are unused
  entityId: 'syn123',
  currentQueryRequest: queryRequest,
  isInfinite: false,
  versionNumber: undefined,
  nextQueryRequest: queryRequest,
  getInitQueryRequest: vi.fn(),
  executeQueryRequest: vi.fn(),
  resetQuery: vi.fn(),
  resetDebounceTimer: vi.fn(),
  addValueToSelectedFacet: vi.fn(),
  setRangeFacetValue: vi.fn(),
  removeSelectedFacet: vi.fn(),
  removeValueFromSelectedFacet: vi.fn(),
  removeQueryFilter: vi.fn(),
  removeValueFromQueryFilter: vi.fn(),
  hasFacetedSelectColumn: false,
  rowDataQueryOptions: {
    queryKey: ['rowDataQueryOptions'],
    queryFn: vi.fn() as never,
  },
  rowDataInfiniteQueryOptions: {
    queryKey: ['rowDataInfiniteQueryOptions'],
    queryFn: vi.fn() as never,
    initialPageParam: undefined,
    getNextPageParam: vi.fn() as never,
  },
  queryMetadataQueryOptions,
  goToPage: vi.fn(),
  currentPage: 0,
  setPageSize: vi.fn(),
  pageSize: 0,
  lockedColumn: undefined,
}

const mockQueryVisualizationContext: QueryVisualizationContextType = {
  unitDescription: 'file',
  // remaining fields are unused
  NoContentPlaceholder: vi.fn(),
  columnsToShowInTable: [],
  enabledExternalAnalysisPlatforms: [],
  getColumnDisplayName: vi.fn(),
  getDisplayValue: vi.fn(),
  getHelpText: vi.fn(),
  isShowingExportToAnalysisPlatformModal: false,
  setColumnsToShowInTable: vi.fn(),
  setIsShowingExportToAnalysisPlatformModal: vi.fn(),
  setShowCopyToClipboard: vi.fn(),
  setShowDownloadConfirmation: vi.fn(),
  setShowFacetFilter: vi.fn(),
  setShowPlots: vi.fn(),
  setShowSearchBar: vi.fn(),
  setShowSqlEditor: vi.fn(),
  showCopyToClipboard: false,
  showDownloadConfirmation: false,
  showFacetFilter: false,
  showPlots: false,
  showSearchBar: false,
  showSqlEditor: false,
  hideSearchBarControl: false,
  lockTextMatchesQueryFilterPill: true,
}
const mockExportToCavatica = vi.fn()
const mockExportToTerra = vi.fn()
const mockExportToPluto = vi.fn()
const mockExportToPlutoDev = vi.fn()
const mockExportToADWorkbench = vi.fn()

describe('ExternalPlatformActionsRequiredPrecheck', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    registerTableQueryResult(queryRequest.query, {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
      columnModels,
      selectColumns,
    })

    mockUseQueryContext.mockReturnValue(mockQueryContext)
    mockUseQueryVisualizationContext.mockReturnValue(
      mockQueryVisualizationContext,
    )

    mockUseSelectedRowsAtomValue.mockReturnValue([])
    mockUseHasSelectedRowsAtomValue.mockReturnValue(false)
    mockUseRowSelectionPrimaryKeyAtomValue.mockReturnValue(['foo'])
    mockUseExportTableQueryToAnalysisPlatform.mockReturnValue({
      exportToCavatica: mockExportToCavatica,
      exportToTerra: mockExportToTerra,
      exportToPluto: mockExportToPluto,
      exportToPlutoDev: mockExportToPlutoDev,
      exportToADWorkbench: mockExportToADWorkbench,
    })

    MockTableQueryActionsRequired.mockReturnValue(<></>)
  })

  test.each<ExternalAnalysisPlatform>(['cavatica', 'terra'])(
    'Supports sending a query to %s',
    async externalPlatform => {
      render(
        <ExternalPlatformActionsRequiredPrecheck
          selectedPlatform={externalPlatform}
          onConfirmButtonPropsChange={mockOnConfirmButtonPropsChange}
          onSuccessfulExport={mockOnSuccessfulExport}
        />,
        { wrapper: createWrapper() },
      )

      await screen.findByText(
        `Before sending the selected data to ${EXTERNAL_ANALYSIS_PLATFORMS[externalPlatform].name}:`,
      )

      // Actions required component reports 0 actions required
      expect(MockTableQueryActionsRequired).toHaveBeenLastRenderedWithProps({
        queryBundleRequest: queryRequest,
        columnModels: columnModels,
        onNumberOfRequiredActionsChanged: expect.any(Function),
      })
      act(() => {
        MockTableQueryActionsRequired.mock.lastCall![0]
          .onNumberOfRequiredActionsChanged!(0)
      })

      expect(
        mockUseExportTableQueryToAnalysisPlatform,
      ).toHaveBeenLastCalledWith({
        queryBundleRequest: queryRequest,
        selectColumns: selectColumns,
        fileIdColumnName: mockFileIdColumnName,
        fileVersionColumnName: mockFileVersionColumnName,
        fileNameColumnName: mockFileNameColumnName,
      })

      expect(mockOnConfirmButtonPropsChange).toHaveBeenLastCalledWith({
        id: `SendTo${upperFirst(externalPlatform)}ButtonFromConfirmationDialog`,
        children: `Send all files to ${EXTERNAL_ANALYSIS_PLATFORMS[externalPlatform].name}`,
        disabled: false,
        onClick: expect.any(Function),
      })

      // Simulate clicking the confirm button
      act(() => {
        ;(
          mockOnConfirmButtonPropsChange.mock.lastCall![0].onClick as () => void
        )()
      })

      await waitFor(() => {
        if (externalPlatform === 'cavatica') {
          expect(mockExportToCavatica).toHaveBeenCalled()
          expect(mockExportToTerra).not.toHaveBeenCalled()
        } else if (externalPlatform === 'terra') {
          expect(mockExportToTerra).toHaveBeenCalled()
          expect(mockExportToCavatica).not.toHaveBeenCalled()
        }
        expect(mockOnSuccessfulExport).toHaveBeenCalled()
      })
    },
  )

  test('Appends a filter to the query when a subset of rows are selected', async () => {
    mockUseSelectedRowsAtomValue.mockReturnValue([{ rowId: 1, values: ['1'] }])
    mockUseHasSelectedRowsAtomValue.mockReturnValue(true)
    mockUseRowSelectionPrimaryKeyAtomValue.mockReturnValue(['foo'])

    const filteredQueryRequest: QueryBundleRequest = {
      ...queryRequest,
      query: {
        ...queryRequest.query,
        additionalFilters: [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
            columnName: 'foo',
            operator: ColumnSingleValueFilterOperator.IN,
            values: ['1'],
          },
        ],
      },
    }

    render(
      <ExternalPlatformActionsRequiredPrecheck
        selectedPlatform={'cavatica'}
        onConfirmButtonPropsChange={mockOnConfirmButtonPropsChange}
        onSuccessfulExport={mockOnSuccessfulExport}
      />,
      { wrapper: createWrapper() },
    )

    await screen.findByText(`Before sending the selected data to CAVATICA:`)

    // Actions required component reports 0 actions required
    expect(MockTableQueryActionsRequired).toHaveBeenLastRenderedWithProps({
      queryBundleRequest: filteredQueryRequest,
      columnModels: columnModels,
      onNumberOfRequiredActionsChanged: expect.any(Function),
    })
    act(() => {
      MockTableQueryActionsRequired.mock.lastCall![0]
        .onNumberOfRequiredActionsChanged!(0)
    })

    expect(mockUseExportTableQueryToAnalysisPlatform).toHaveBeenLastCalledWith({
      queryBundleRequest: filteredQueryRequest,
      selectColumns: selectColumns,
      fileIdColumnName: mockFileIdColumnName,
      fileVersionColumnName: mockFileVersionColumnName,
      fileNameColumnName: mockFileNameColumnName,
    })

    expect(mockOnConfirmButtonPropsChange).toHaveBeenLastCalledWith({
      id: `SendToCavaticaButtonFromConfirmationDialog`,
      children: `Send 1 file to CAVATICA`,
      disabled: false,
      onClick: expect.any(Function),
    })

    // Simulate clicking the confirm button
    act(() => {
      ;(
        mockOnConfirmButtonPropsChange.mock.lastCall![0].onClick as () => void
      )()
    })

    await waitFor(() => {
      expect(mockExportToCavatica).toHaveBeenCalled()
      expect(mockExportToTerra).not.toHaveBeenCalled()
      expect(mockOnSuccessfulExport).toHaveBeenCalled()
    })
  })

  test('Blocks sending data when actions are required and allows exporting data after actions are fulfilled', async () => {
    render(
      <ExternalPlatformActionsRequiredPrecheck
        selectedPlatform={'cavatica'}
        onConfirmButtonPropsChange={mockOnConfirmButtonPropsChange}
        onSuccessfulExport={mockOnSuccessfulExport}
      />,
      { wrapper: createWrapper() },
    )

    await screen.findByText(`Before sending the selected data to CAVATICA:`)

    // Actions required component reports one action required
    expect(MockTableQueryActionsRequired).toHaveBeenLastRenderedWithProps({
      queryBundleRequest: queryRequest,
      columnModels: columnModels,
      onNumberOfRequiredActionsChanged: expect.any(Function),
    })
    act(() => {
      MockTableQueryActionsRequired.mock.lastCall![0]
        .onNumberOfRequiredActionsChanged!(1)
    })

    expect(mockOnConfirmButtonPropsChange).toHaveBeenLastCalledWith({
      id: `SendToCavaticaButtonFromConfirmationDialog`,
      children: `Send all files to CAVATICA`,
      disabled: true, // button is disabled because actions are required
      onClick: expect.any(Function),
    })

    // Simulate fulfilling all requirements -- number of required actions is now 0
    act(() => {
      MockTableQueryActionsRequired.mock.lastCall![0]
        .onNumberOfRequiredActionsChanged!(0)
    })

    expect(mockOnConfirmButtonPropsChange).toHaveBeenLastCalledWith({
      id: `SendToCavaticaButtonFromConfirmationDialog`,
      children: `Send all files to CAVATICA`,
      disabled: false, // Button should now be enabled.
      onClick: expect.any(Function),
    })

    // Simulate clicking the confirm button
    act(() => {
      ;(
        mockOnConfirmButtonPropsChange.mock.lastCall![0].onClick as () => void
      )()
    })

    await waitFor(() => {
      expect(mockExportToCavatica).toHaveBeenCalled()
      expect(mockExportToTerra).not.toHaveBeenCalled()
      expect(mockOnSuccessfulExport).toHaveBeenCalled()
    })
  })
})
