import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid'
import { RadioOption } from '../widgets/RadioGroup'
import { Entity } from '@sage-bionetworks/synapse-types'
import { Link } from 'react-router-dom'
import { SkeletonTable } from '../Skeleton'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'

type SubmissionDirectoryRow = {
  id: string
  repo: string
  updated: string
}

type SubmissionDirectoryListProps = {
  loading: boolean
}

function SubmissionDirectoryList({ loading }: SubmissionDirectoryListProps) {
  const [selectedRepo, setSelectedRepo] = useState<
    string | number | undefined
  >()

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
            rows={[]}
            rowCount={5}
            hideFooter
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
