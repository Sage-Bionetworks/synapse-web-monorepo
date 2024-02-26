import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { RadioOption } from '../widgets/RadioGroup'
import {
  Direction,
  DockerCommit,
  SortBy,
} from '@sage-bionetworks/synapse-types'
import { formatDate } from '../../utils/functions/DateFormatter'
import dayjs from 'dayjs'
import { useGetDockerTags } from '../../synapse-queries/docker'
import { EntityItem } from './ChallengeSubmission'

type SubmissionCommitRow = {
  id: string
  createdOn: string
  digest: string
  tag: string
}

type SubmissionCommitListProps = {
  repository: EntityItem
  selectedCommit: DockerCommit | undefined
  onCommitChanged: (value: DockerCommit) => void
}

function SubmissionCommitList({
  repository,
  selectedCommit,
  onCommitChanged,
}: SubmissionCommitListProps) {
  const [page, setPage] = useState<number>(0)
  const PER_PAGE = 10

  const { isLoading, data: commitResults } = useGetDockerTags(
    repository.id!,
    page * PER_PAGE,
    PER_PAGE,
    SortBy.CREATED_ON,
    Direction.DESC,
  )

  const commitChangeHandler = (digest: string) => {
    const commits = commitResults?.results ?? []
    const commit = commits.find(commit => commit.digest === digest)
    if (commit) onCommitChanged(commit)
  }

  const columns: GridColDef[] = [
    {
      field: 'radiobutton',
      headerName: '',
      width: 25,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: params => {
        return (
          <RadioOption
            value={params.id as string}
            checked={params.id === selectedCommit?.digest}
            onChange={commitChangeHandler}
            label=""
          />
        )
      },
    },
    {
      field: 'tag',
      headerName: 'Tag',
      flex: 1,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: 'createdOn',
      headerName: 'Created On',
      width: 100,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: 'digest',
      headerName: 'Digest',
      width: 200,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
  ]

  const getRows = (commits: DockerCommit[]) => {
    const newRows: SubmissionCommitRow[] = []
    commits.forEach(commit => {
      newRows.push({
        id: commit.digest,
        tag: commit.tag,
        digest: commit.digest,
        createdOn: formatDate(dayjs(commit.createdOn), 'MM/DD/YY'),
      })
    })
    return newRows
  }

  const getPageData = () => {
    return getRows(commitResults?.results ?? [])
  }

  const handlePageChange = (newPageNum: number) => {
    setPage(newPageNum)
  }

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: '#FBFBFC',
          padding: '10px',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: '18px', lineHeight: '20px', fontWeight: 700 }}
        >
          Available commits for {repository.repositoryName}
        </Typography>
      </Box>
      <Box>
        <DataGrid
          loading={isLoading}
          columns={columns}
          rows={getPageData()}
          rowCount={commitResults?.totalNumberOfResults ?? 0}
          pagination
          paginationMode="server"
          paginationModel={{ page, pageSize: PER_PAGE }}
          onPaginationModelChange={({ page }) => handlePageChange(page)}
          pageSizeOptions={[PER_PAGE]}
          density="compact"
          autoHeight
          sx={{
            fontSize: '14px',
            border: 'none',
            height: '100%',
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: '#F1F3F5',
            },
            '& .Mui-odd': {
              backgroundColor: '#FBFBFC',
            },
            '.MuiDataGrid-columnHeaderTitleContainer': {
              justifyContent: 'space-between',
            },
            '.radio': {
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            },
          }}
          getRowClassName={params =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
          }
        />
      </Box>
    </Box>
  )
}

export default SubmissionCommitList
