import React, { useMemo, useState } from 'react'
import BaseTable, {
  AutoResizer,
  Column,
} from '@sage-bionetworks/react-base-table'
import { ChallengeDataTableRowData, ChallengeDataTableProps } from './types'
import {
  Direction,
  EntityHeader,
  EntityType,
  Reference,
  SortBy,
} from '@sage-bionetworks/synapse-types'
import { NO_VERSION_NUMBER } from '../EntityFinder/EntityFinder'
import {
  CustomSortIndicator,
  EmptyRenderer,
  LoadingRenderer,
} from '../EntityFinder/details/view/DetailsViewTableRenderers'
import { VersionSelectionType } from '../EntityFinder/VersionSelectionType'
import { getEntityTypeFromHeader } from '../../utils/functions/EntityTypeUtils'
import { Checkbox } from '../widgets/Checkbox'
import {
  CheckboxRenderer,
  ModifiedOnRenderer,
  NameRenderer,
  SizeRenderer,
} from './Renderers'

// Move these string constants to a constants file for localization?
const ACTION = `Action`
const ID = `ID`
const MODIFIED_ON = `Modified On`
const NAME = `File Name`
const NO_RESULTS = `No Results`
const SELECT_ALL = `Select All`
const SIZE = `Size`

const noResultsPlaceholder = <p>{NO_RESULTS}</p>
const ROW_HEIGHT = 46
const selectAllIsChecked = false
const selectableTypes = [EntityType.FILE]
const visibleTypes = [EntityType.FILE]

/**
 * TODO:
 * * Fix Select All and individual select.
 * * Create render for Action column
 * * Create button
 * * Connect button to `add to download list` functionality
 * * Create download button and connect to download as zip functionality
 */
export function ChallengeDataTable({
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  minTableWidth = 1200,
  tableData,
  tableHeight = 350,
  versionSelection,
}: ChallengeDataTableProps) {
  const [sort, setSort] = useState({
    sortBy: SortBy.NAME,
    sortDirection: Direction.ASC,
  })
  const [shouldSelectAll, setShouldSelectAll] = useState(false)

  function fetchNextPage(): Promise<any> {
    return new Promise(() => {})
  }
  function toggleSelection(entity: Reference | Reference[]): void {
    console.log(`entity:`, entity)
  }

  const SelectAllCheckboxRenderer = useMemo(() => {
    // Enabled if there's at least one visible & selectable entity, OR there's a page we haven't fetched
    const isEnabled =
      hasNextPage ||
      tableData.filter(
        e =>
          selectableTypes.includes(getEntityTypeFromHeader(e)) &&
          visibleTypes.includes(getEntityTypeFromHeader(e)),
      ).length > 0
    return (
      <div
        data-testid={SELECT_ALL}
        style={isEnabled ? { cursor: 'pointer' } : { cursor: 'not-allowed' }}
        onClick={() => {
          if (isEnabled) {
            setShouldSelectAll(true)
          }
        }}
      >
        <Checkbox
          label={SELECT_ALL}
          hideLabel={true}
          className={`SRC-pointer-events-none`}
          checked={selectAllIsChecked}
          disabled={!isEnabled}
          onChange={() => {
            // no-op
          }}
        />
      </div>
    )
  }, [hasNextPage, tableData])

  const sortState = {}
  if (sort) {
    sortState[sort.sortBy] = sort.sortDirection.toLowerCase()
  }

  // This is taken from the `DeviceView` component (packages/synapse-react-client/src/components/EntityFinder/details/view/DetailsView.tsx)
  return (
    <AutoResizer className={`DetailsViewAutosizer`} height={tableHeight}>
      {({ height, width }: { height: number; width: number }) => {
        return (
          <BaseTable<ChallengeDataTableRowData>
            classPrefix={`DetailsViewTable`}
            data={tableData}
            height={height}
            width={width > minTableWidth ? width : minTableWidth}
            rowHeight={ROW_HEIGHT}
            overscanRowCount={5}
            // Apply classes to the rows for styling
            rowClassName={({ rowIndex }: { rowIndex: number }) => {
              let className = 'EntityFinderDetailsViewRow'
              if (rowIndex % 2 === 0) {
                // Apply a class based on index so we can get alternating colors
                // We don't use CSSs nth-child because the rows are virtualized, so an even child might change to odd on-the-fly
                className += ' isEven'
              }
              return className
            }}
            // Apply aria roles to the rows for a11y/styling
            rowProps={({ rowData }) => {
              return {
                'aria-selected': rowData.isSelected,
                'aria-disabled': rowData.isDisabled,
              }
            }}
            headerCellProps={{
              role: 'columnheader',
            }}
            // Sorting:
            sortState={sortState}
            components={{ SortIndicator: CustomSortIndicator }}
            onColumnSort={({ key, order }) => {
              if (sort && setSort) {
                setSort({
                  sortBy: key as SortBy,
                  sortDirection:
                    order === 'asc' ? Direction.ASC : Direction.DESC,
                })
              }
            }}
            rowEventHandlers={{
              onClick: ({ rowData }) => {
                const { id, isDisabled, isVersionableEntity } = rowData
                let { currentSelectedVersion } = rowData
                if (!isDisabled) {
                  if (
                    isVersionableEntity &&
                    versionSelection === VersionSelectionType.REQUIRED &&
                    currentSelectedVersion == null &&
                    Object.prototype.hasOwnProperty.call(
                      rowData,
                      'versionNumber',
                    )
                  ) {
                    currentSelectedVersion = (rowData as EntityHeader)
                      .versionNumber
                    // Note that here we aren't handling the case where the header doesn't have a version, e.g. a search result
                    // That case is actually handled by the VersionRenderer, which has an effect that will toggle the selection after data is fetched.
                  }

                  toggleSelection({
                    targetId: id,
                    targetVersionNumber:
                      currentSelectedVersion === NO_VERSION_NUMBER
                        ? undefined
                        : currentSelectedVersion,
                  })
                }
              },
            }}
            onEndReached={() => {
              if (hasNextPage && fetchNextPage && !isFetchingNextPage) {
                fetchNextPage()
              }
            }}
            emptyRenderer={
              isLoading ? (
                LoadingRenderer
              ) : (
                <EmptyRenderer noResultsPlaceholder={noResultsPlaceholder} />
              )
            }
          >
            <Column<ChallengeDataTableRowData>
              key={`isSelected`}
              title={``}
              minWidth={50}
              maxWidth={50}
              width={50}
              dataKey={`isSelected`}
              headerRenderer={SelectAllCheckboxRenderer}
              cellRenderer={CheckboxRenderer}
            />
            <Column<ChallengeDataTableRowData>
              key={SortBy.NAME}
              title={NAME}
              minWidth={90}
              maxWidth={800}
              width={220}
              sortable={sort != null}
              resizable={true}
              cellRenderer={NameRenderer}
            />
            <Column<ChallengeDataTableRowData>
              key={`size`}
              title={SIZE}
              width={90}
              maxWidth={220}
              minWidth={90}
              cellRenderer={SizeRenderer}
            />
            <Column<ChallengeDataTableRowData>
              key={SortBy.MODIFIED_ON}
              title={MODIFIED_ON}
              width={220}
              minWidth={170}
              sortable={sort != null}
              cellRenderer={ModifiedOnRenderer}
            />
            <Column<ChallengeDataTableRowData>
              key={`id`}
              width={130}
              dataKey={`id`}
              title={ID}
              minWidth={130}
            />
            <Column<ChallengeDataTableRowData>
              key={`action`}
              title={ACTION}
              minWidth={70}
              maxWidth={70}
              width={70}
              cellRenderer={<></>}
            />
          </BaseTable>
        )
      }}
    </AutoResizer>
  )
}
