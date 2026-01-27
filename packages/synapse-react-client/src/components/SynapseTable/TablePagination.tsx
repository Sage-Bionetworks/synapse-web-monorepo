import {
  MenuItem,
  Pagination,
  PaginationItem,
  PaginationRenderItemParams,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import {
  ChangeEvent,
  ComponentProps,
  forwardRef,
  Ref,
  useCallback,
} from 'react'
import React from 'react'
import { useQueryContext } from '../QueryContext'
import { useSuspenseGetQueryMetadata } from '../QueryWrapper/useGetQueryMetadata'

import { usePrefetchTableRows } from './usePrefetchTableData'

const PAGE_SIZE_OPTIONS = [10, 25, 100, 500]

export const TablePagination = (): React.ReactNode => {
  const { goToPage, pageSize, setPageSize, currentPage, currentQueryRequest } =
    useQueryContext()

  const prefetchPage = usePrefetchTableRows()

  const {
    data: { queryCount, maxRowsPerPage },
  } = useSuspenseGetQueryMetadata()

  const currentLimit = currentQueryRequest.query.limit
  const resolvedPageSize = currentLimit ?? pageSize

  // Filter by backend limit maxRowsPerPage
  let pageSizeOptions = maxRowsPerPage
    ? PAGE_SIZE_OPTIONS.filter(option => option < maxRowsPerPage)
    : [...PAGE_SIZE_OPTIONS]

  if (queryCount) {
    // first option that is >= queryCount (show all rows)
    const firstSufficientOptionIndex = pageSizeOptions.findIndex(
      option => option >= queryCount,
    )
    // If found, slice to only include options up to and including that one
    if (firstSufficientOptionIndex !== -1) {
      pageSizeOptions = pageSizeOptions.slice(0, firstSufficientOptionIndex + 1)
    }
  }

  // If resolvedPageSize isn't in the options, use the smallest available option
  const displayedPageSize = pageSizeOptions.includes(resolvedPageSize)
    ? resolvedPageSize
    : pageSizeOptions[0]

  const handlePage = (_event: ChangeEvent<unknown>, value: number) => {
    goToPage(value)
  }

  const handlePageSize = (event: SelectChangeEvent<number>) => {
    const value = event.target.value

    setPageSize(value)
    goToPage(1)
  }

  // A custom `renderItem` implementation for the MUI Pagination component that prefetches a page's data when the page number button is hovered over
  const renderPaginationItem = useCallback(
    (params: PaginationRenderItemParams) => {
      // eslint-disable-next-line react/no-unstable-nested-components -- this declaration is within a useCallback itself, so it is stable (enough)
      const ButtonWithPagePrefetchOnHover = forwardRef(
        function PaginationItemButton(
          props: ComponentProps<'button'>,
          ref: Ref<HTMLButtonElement>,
        ) {
          return (
            <button
              ref={ref}
              {...props}
              onMouseOver={() => {
                if (params.page) {
                  void prefetchPage(params.page)
                }
              }}
            />
          )
        },
      )

      return (
        <PaginationItem {...params} component={ButtonWithPagePrefetchOnHover} />
      )
    },
    [prefetchPage],
  )

  // PORTALS-2259: Special presentation case.  If we're on the first page,
  // and the total query count is equal to 1 (and is the page size is not 1), then hide the pagination UI.
  // Also hide pagination if the query count is unavailable.
  if (
    (currentPage == 1 && queryCount == 1 && pageSize != 1) ||
    queryCount == undefined ||
    (maxRowsPerPage && maxRowsPerPage < 5)
  ) {
    return null
  }

  return (
    <div>
      <Pagination
        page={currentPage}
        count={Math.ceil(queryCount / displayedPageSize)}
        color="secondary"
        onChange={handlePage}
        shape={'rounded'}
        sx={{
          display: 'inline-block',
          float: 'left',
          '.MuiPaginationItem-root': { fontSize: '14px' },
        }}
        renderItem={renderPaginationItem}
      />
      <Typography variant="body1" style={{ display: 'inline-block' }}>
        {`${queryCount?.toLocaleString()} total rows /`}
      </Typography>
      <Select
        name="page size"
        value={displayedPageSize}
        size="small"
        onChange={handlePageSize}
        sx={{ ml: 0.5 }}
      >
        {pageSizeOptions.map(pageSize => {
          return (
            <MenuItem key={pageSize} value={pageSize}>
              {pageSize} per page
            </MenuItem>
          )
        })}
      </Select>
    </div>
  )
}
