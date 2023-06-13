import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid'
import { RadioOption } from '../widgets/RadioGroup'
import {
  Entity,
  EntityChildrenRequest,
  EntityType,
} from '@sage-bionetworks/synapse-types'
import { Link } from 'react-router-dom'
import { SkeletonTable } from '../Skeleton'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import { useGetEntityChildren } from '../../synapse-queries'

type SubmissionDirectoryRow = {
  id: string
  repo: string
  updated: string
}

type SubmissionDirectoryListProps = {
  loading: boolean
  challengeProjectId: string | undefined
}

function SubmissionDirectoryList({
  loading,
  challengeProjectId,
}: SubmissionDirectoryListProps) {
  const [selectedRepo, setSelectedRepo] = useState<
    string | number | undefined
  >()
  const [rows, setRows] = useState<SubmissionDirectoryRow[]>([])

  const request: EntityChildrenRequest = {
    parentId: challengeProjectId,
    nextPageToken: null,
    includeTypes: [EntityType.DOCKER_REPO],
    includeTotalChildCount: true,
  }

  const { data: response } = useGetEntityChildren(request, {
    enabled: !!challengeProjectId,
    refetchInterval: Infinity,
  })

  const repoChangeHandler = (value: string | number) => {
    setSelectedRepo(value)
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
            value={params.id}
            currentValue={selectedRepo}
            onChange={repoChangeHandler}
            label=""
            groupId="radiogroup"
            style={{ marginBottom: '16px' }}
          />
        )
      },
    },
    {
      field: 'repo',
      headerName: 'Docker Repository',
      flex: 1,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams<Entity, SubmissionDirectoryRow>) => (
        <Link
          to={{
            pathname: `${getEndpoint(
              BackendDestinationEnum.PORTAL_ENDPOINT,
            )}/#!Team:${params.row.id}`,
          }}
          target="_blank"
        >
          {params.row.repo}
        </Link>
      ),
    },
    {
      field: 'updated',
      headerName: 'Updated On',
      width: 100,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: 'id',
      headerName: 'ID',
      width: 200,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
  ]
  return (
    <Box>
      <Box
        sx={{ display: 'flex', backgroundColor: '#FBFBFC', padding: '10px' }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: '18px', lineHeight: '20px', fontWeight: 700 }}
        >
          Your Submission Directory
        </Typography>
      </Box>
      <Box sx={{ height: 220 }}>
        {loading && <SkeletonTable numRows={10} numCols={1} />}
        {!loading && (
          <DataGrid
            columns={columns}
            rows={rows}
            rowCount={response?.totalChildCount ?? 0}
            density="compact"
            sx={{
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
            }}
            getRowClassName={params =>
              params.indexRelativeToCurrentPage % 2 === 0
                ? 'Mui-even'
                : 'Mui-odd'
            }
          />
        )}
      </Box>
    </Box>
  )
}

export default SubmissionDirectoryList
