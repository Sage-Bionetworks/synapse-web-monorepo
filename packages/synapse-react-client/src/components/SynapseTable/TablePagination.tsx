import {
  ChangeEvent,
  ComponentProps,
  forwardRef,
  Ref,
  useCallback,
} from 'react'
import {
  MenuItem,
  Pagination,
  PaginationItem,
  PaginationRenderItemParams,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { useQueryContext } from '../QueryContext/QueryContext'
import { useSuspenseQuery } from '@tanstack/react-query'

import { usePrefetchTableRows } from './usePrefetchTableData'

export const TablePagination = () => {
  const {
    queryMetadataQueryOptions,
    goToPage,
    pageSize,
    setPageSize,
    currentPage,
  } = useQueryContext()

  const prefetchPage = usePrefetchTableRows()

  const {
    data: { queryCount, maxRowsPerPage },
  } = useSuspenseQuery(queryMetadataQueryOptions)

  const maxPageSize = maxRowsPerPage ?? pageSize

  const pageSizeOptions = [10, 25, 100, 500]
  const pageSizeOptionsBasedOnData = pageSizeOptions.filter(
    value => value < maxPageSize,
  )
  if (pageSizeOptionsBasedOnData.length == 0) {
    pageSizeOptionsBasedOnData.push(maxPageSize)
    if (maxRowsPerPage && pageSize > maxRowsPerPage) {
      setPageSize(maxRowsPerPage)
    }
  }
  const handlePage = (_event: ChangeEvent<unknown>, value: number) => {
    goToPage(value)
  }

  const handlePageSize = (event: SelectChangeEvent<number>) => {
    const value = event.target.value as number
    setPageSize(value)
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
    queryCount == undefined
  ) {
    return null
  }

  return (
    <div>
      <Pagination
        page={currentPage}
        count={Math.ceil(queryCount / pageSize)}
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
        value={pageSize}
        size="small"
        onChange={handlePageSize}
        sx={{ ml: 0.5 }}
      >
        {pageSizeOptionsBasedOnData.map(pageSize => {
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
