'use no memo' // skip react compiler for this component

import InfiniteTableLayout from '@/components/layout/InfiniteTableLayout'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import { Button, Typography } from '@mui/material'
import { StarTwoTone } from '@mui/icons-material'
import { useAccessRequirementTable } from './UseAccessRequirementTable'
import StyledTanStackTable from '../TanStackTable/StyledTanStackTable'
import { noop } from 'lodash-es'

export type AccessRequirementTableProps = {
  nameOrID?: string
  relatedProjectId?: string
  reviewerId?: string
  accessType?: ACCESS_TYPE
  onCreateNewAccessRequirementClicked?: () => void
  typeFilter?: string
  onTypeFilterChange?: (typeFilter: string | undefined) => void
}

export function AccessRequirementTable(props: AccessRequirementTableProps) {
  const {
    nameOrID,
    relatedProjectId,
    reviewerId,
    accessType,
    onCreateNewAccessRequirementClicked,
    typeFilter,
    onTypeFilterChange = noop,
  } = props

  const { table, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useAccessRequirementTable({
      nameOrID,
      relatedProjectId,
      reviewerId,
      accessType,
      typeFilter,
      onTypeFilterChange,
    })

  const isEmpty = !isLoading && table.getRowModel().rows.length === 0

  return (
    <div>
      <div className="SRC-split">
        <Typography variant="headline3" style={{ marginBottom: 0 }}>
          Access Requirements
        </Typography>
        {onCreateNewAccessRequirementClicked && (
          <Button
            variant="outlined"
            color="primary"
            onClick={onCreateNewAccessRequirementClicked}
            startIcon={<StarTwoTone />}
          >
            New Access Requirement
          </Button>
        )}
      </div>
      <InfiniteTableLayout
        table={
          <StyledTanStackTable
            table={table}
            styledTableContainerProps={{ sx: { my: 2 } }}
          />
        }
        isLoading={isLoading}
        isEmpty={isEmpty}
        hasNextPage={hasNextPage}
        onFetchNextPageClicked={() => {
          fetchNextPage()
        }}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  )
}
