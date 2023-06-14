import React, { useEffect, useState } from 'react'
import LinkIcon from '@mui/icons-material/Link'
import { Box, Button, Typography } from '@mui/material'
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid'
import { RadioOption } from '../widgets/RadioGroup'
import {
  Direction,
  DockerRepository,
  Entity,
  EntityChildrenRequest,
  EntityType,
  SortBy,
} from '@sage-bionetworks/synapse-types'
import { Link } from 'react-router-dom'
import { SkeletonTable } from '../Skeleton'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import { useGetEntities, useGetEntityChildren } from '../../synapse-queries'
import { formatDate } from '../../utils/functions/DateFormatter'
import dayjs from 'dayjs'

type SubmissionDirectoryRow = {
  id: string
  repositoryName: string
  modifiedOn: string
}

type SubmissionDirectoryListProps = {
  loading: boolean
  needsRefetch: boolean
  challengeProjectId: string | undefined
  onAddRepo: () => void
}

function SubmissionDirectoryList({
  loading,
  needsRefetch,
  challengeProjectId,
  onAddRepo,
}: SubmissionDirectoryListProps) {
  const [page, setPage] = useState<number>(0)
  const [selectedRepo, setSelectedRepo] = useState<
    string | number | undefined
  >()
  const [rows, setRows] = useState<SubmissionDirectoryRow[]>([])

  const request: EntityChildrenRequest = {
    parentId: challengeProjectId,
    nextPageToken: null,
    includeTypes: [EntityType.DOCKER_REPO],
    includeTotalChildCount: true,
    sortBy: SortBy.MODIFIED_ON,
    sortDirection: Direction.DESC,
  }

  const { data: headers, refetch } = useGetEntityChildren(request, {
    enabled: !!challengeProjectId,
    useErrorBoundary: true,
  })

  if (needsRefetch) {
    refetch()
  }

  const { isLoading: areEntitiesLoading, results: entities } = useGetEntities(
    headers?.page ?? [],
    {
      enabled: headers !== undefined && !!headers.page,
    },
  )

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
      field: 'repositoryName',
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
            )}/#!Synapse:${params.row.id}`,
          }}
          target="_blank"
        >
          {params.row.repositoryName}
        </Link>
      ),
    },
    {
      field: 'modifiedOn',
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

  useEffect(() => {
    // const areEntitiesLoading = entities.some(result => result.isLoading)
    if (!areEntitiesLoading) {
      console.log({ entities })
      const newRows: SubmissionDirectoryRow[] = []
      entities.forEach(result => {
        if (result.data !== undefined) {
          const repo = result.data as DockerRepository
          newRows.push({
            id: repo.id!,
            repositoryName: repo.repositoryName,
            modifiedOn: formatDate(dayjs(repo.modifiedOn), 'MM/DD/YY'),
          })
        }
      })
      setRows(newRows)
    }
  }, [areEntitiesLoading, entities])

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
      <Box>
        {loading && <SkeletonTable numRows={10} numCols={1} />}
        {!loading && (
          <DataGrid
            initialState={{ pagination: { page: page } }}
            columns={columns}
            rows={rows}
            pageSize={20}
            rowCount={headers?.totalChildCount ?? 0}
            page={page}
            pagination
            onPageChange={n => setPage(n)}
            density="compact"
            autoHeight
            rowsPerPageOptions={[]}
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          color="primary"
          variant="outlined"
          onClick={onAddRepo}
          endIcon={<LinkIcon />}
        >
          Add External Docker Repository
        </Button>

        <Button
          color="primary"
          variant="contained"
          onClick={() => undefined}
          disabled={!selectedRepo}
        >
          Submit Selection
        </Button>
      </Box>
    </Box>
  )
}

export default SubmissionDirectoryList
