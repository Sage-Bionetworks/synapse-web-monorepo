import React from 'react'
import { Pagination, Typography } from '@mui/material'
import { usePaginatedQueryContext } from '../QueryContext/QueryContext'
import { useAtomValue } from 'jotai'
import { tableQueryDataAtom } from '../QueryWrapper/QueryWrapper'

export const TablePagination = () => {
  const { goToPage, pageSize, setPageSize, currentPage } =
    usePaginatedQueryContext()
  const data = useAtomValue(tableQueryDataAtom)

  const queryCount = data?.queryCount

  const maxPageSize = data?.maxRowsPerPage ?? pageSize

  const pageSizeOptions = [10, 25, 100, 500]
  const pageSizeOptionsBasedOnData = pageSizeOptions.filter(
    value => value < maxPageSize,
  )
  if (pageSizeOptionsBasedOnData.length == 0) {
    pageSizeOptionsBasedOnData.push(maxPageSize)
    if (data?.maxRowsPerPage && pageSize > data.maxRowsPerPage) {
      setPageSize(data.maxRowsPerPage)
    }
  }
  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    goToPage(value)
  }

  const handlePageSize = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as number
    setPageSize(value)
  }

  // PORTALS-2259: Special presentation case.  If we're on the first page,
  // and the total query count is equal to 1 (and is the page size is not 1), then hide the pagination UI.
  // Also hide pagination if the query count is unavailable.
  if (
    (currentPage == 1 && queryCount == 1 && pageSize != 1) ||
    queryCount == undefined
  ) {
    return <></>
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
      />
      <Typography variant="body1" style={{ display: 'inline-block' }}>
        {`${queryCount?.toLocaleString()} total rows /`}
      </Typography>
      <select
        name="page size"
        onChange={handlePageSize}
        style={{ padding: '4px', marginLeft: '4px' }}
        value={pageSize}
      >
        {pageSizeOptionsBasedOnData.map(pageSize => {
          return (
            <option key={pageSize} value={pageSize}>
              {pageSize} per page
            </option>
          )
        })}
        {
          //TODO: PORTALS-2546: convert to MUI?
          /* <FormControl>
        <Select
          value={pageSize}
          size="small"
          onChange={handlePageSize}
          sx={{border: 'solid 1px #e5e7eb'}}
        >
          <MenuItem value={10}>10 per page</MenuItem>
          <MenuItem value={25}>25 per page</MenuItem>
          <MenuItem value={100}>100 per page</MenuItem>
          <MenuItem value={500}>500 per page</MenuItem>
        </Select>
        </FormControl> */
        }
      </select>
    </div>
  )
}
