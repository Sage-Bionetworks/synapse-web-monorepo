import {
  ColumnModel,
  ColumnSingleValueFilterOperator,
  ColumnTypeEnum,
  QueryBundleRequest,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import { upperFirst } from 'lodash-es'
import { useExportTableQueryToAnalysisPlatform } from '../../../synapse-queries/entity/useExportTableQueryToAnalysisPlatform'
import { getUseQuerySuccessMock } from '../../../testutils/ReactQueryMockUtils'
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
import { useGetQueryMetadata } from '../../QueryWrapper/useGetQueryMetadata'
import {
  EXTERNAL_ANALYSIS_PLATFORMS,
  ExternalAnalysisPlatform,
} from './ExternalAnalysisPlatformsConstants'
import ExternalPlatformActionsRequiredPrecheck from './ExternalPlatformActionsRequiredPrecheck'

vi.mock('../../../synapse-queries/entity/useExportTableQueryToAnalysisPlatform')
vi.mock('../../DownloadCart/TableQueryActionsRequired')
vi.mock('../../QueryContext')
vi.mock('../../QueryWrapper/useGetQueryMetadata')
vi.mock('../../QueryVisualizationWrapper/index')
vi.mock('../../QueryWrapper/TableRowSelectionState')

const mockUseExportTableQueryToAnalysisPlatform = vi.mocked(
  useExportTableQueryToAnalysisPlatform,
)
const mockUseQueryContext = vi.mocked(useQueryContext)
const mockUseQueryVisualizationContext = vi.mocked(useQueryVisualizationContext)
const mockUseGetQueryMetadata = vi.mocked(useGetQueryMetadata)
const MockTableQueryActionsRequired = vi.mocked(TableQueryActionsRequired)
const mockOnConfirmButtonPropsChange = vi.fn()
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
  partMask: 1,
}

const columnModels: ColumnModel[] = [
  { id: '123', name: 'foo', columnType: ColumnTypeEnum.STRING },
]
const selectColumns: SelectColumn[] = columnModels

const mockQueryContext: QueryContextType = {
  getCurrentQueryRequest: vi.fn().mockReturnValue(queryRequest),
  onViewSharingSettingsClicked: vi.fn(),
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
    queryFn: vi.fn(),
  },
  rowDataInfiniteQueryOptions: {
    queryKey: ['rowDataInfiniteQueryOptions'],
    queryFn: vi.fn(),
    initialPageParam: undefined,
    getNextPageParam: vi.fn(),
  },
  queryMetadataQueryOptions: {
    queryKey: ['queryMetadataQueryOptions'],
    queryFn: vi.fn(),
  },
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
}
const mockExportToCavatica = vi.fn()
const mockExportToTerra = vi.fn()
const mockExportToPluto = vi.fn()
const mockExportToPlutoDev = vi.fn()
const mockExportToADWorkbench = vi.fn()

describe('ExternalPlatformActionsRequiredPrecheck', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    mockUseQueryContext.mockReturnValue(mockQueryContext)
    mockUseQueryVisualizationContext.mockReturnValue(
      mockQueryVisualizationContext,
    )

    mockUseGetQueryMetadata.mockReturnValue(
      getUseQuerySuccessMock({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        columnModels: columnModels,
        selectColumns: selectColumns,
      }),
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
      )

      await screen.findByText(
        `Before sending the selected data to ${EXTERNAL_ANALYSIS_PLATFORMS[externalPlatform].name}:`,
      )

      // Actions required component reports 0 actions required
      expect(MockTableQueryActionsRequired).toHaveBeenLastRenderedWithProps({
        queryBundleRequest: queryRequest,
        columnModels: columnModels,
        onNumberOfRequiredActionsChanged: expect.any(Function),
        onViewSharingSettingsClicked:
          mockQueryContext.onViewSharingSettingsClicked,
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
        mockOnConfirmButtonPropsChange.mock.lastCall![0].onClick()
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

    render(
      <ExternalPlatformActionsRequiredPrecheck
        selectedPlatform={'cavatica'}
        onConfirmButtonPropsChange={mockOnConfirmButtonPropsChange}
        onSuccessfulExport={mockOnSuccessfulExport}
      />,
    )

    await screen.findByText(`Before sending the selected data to CAVATICA:`)

    // Actions required component reports 0 actions required
    expect(MockTableQueryActionsRequired).toHaveBeenLastRenderedWithProps({
      queryBundleRequest: queryRequest,
      columnModels: columnModels,
      onNumberOfRequiredActionsChanged: expect.any(Function),
      onViewSharingSettingsClicked:
        mockQueryContext.onViewSharingSettingsClicked,
    })
    act(() => {
      MockTableQueryActionsRequired.mock.lastCall![0]
        .onNumberOfRequiredActionsChanged!(0)
    })

    expect(mockUseExportTableQueryToAnalysisPlatform).toHaveBeenLastCalledWith({
      queryBundleRequest: {
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
      },
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
      mockOnConfirmButtonPropsChange.mock.lastCall![0].onClick()
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
    )

    await screen.findByText(`Before sending the selected data to CAVATICA:`)

    // Actions required component reports one action required
    expect(MockTableQueryActionsRequired).toHaveBeenLastRenderedWithProps({
      queryBundleRequest: queryRequest,
      columnModels: columnModels,
      onNumberOfRequiredActionsChanged: expect.any(Function),
      onViewSharingSettingsClicked:
        mockQueryContext.onViewSharingSettingsClicked,
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
      mockOnConfirmButtonPropsChange.mock.lastCall![0].onClick()
    })

    await waitFor(() => {
      expect(mockExportToCavatica).toHaveBeenCalled()
      expect(mockExportToTerra).not.toHaveBeenCalled()
      expect(mockOnSuccessfulExport).toHaveBeenCalled()
    })
  })
})
