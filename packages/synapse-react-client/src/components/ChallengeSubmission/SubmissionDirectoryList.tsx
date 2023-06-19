import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid'
import { RadioOption } from '../widgets/RadioGroup'
import {
  Direction,
  DockerRepository,
  Entity,
  EntityChildrenRequest,
  EntityHeader,
  EntityType,
  SortBy,
} from '@sage-bionetworks/synapse-types'
import { Link } from 'react-router-dom'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import { useGetEntities, useGetEntityChildren } from '../../synapse-queries'
import { formatDate } from '../../utils/functions/DateFormatter'
import dayjs from 'dayjs'
import CopyToClipboardIcon from '../CopyToClipboardIcon'

type SubmissionDirectoryRow = {
  id: string
  repositoryName: string
  modifiedOn: string
}

type SubmissionDirectoryListProps = {
  needsRefetch: boolean
  challengeProjectId: string
  onRepoSelected: (selectedRepo: DockerRepository) => void
}

function SubmissionDirectoryList({
  challengeProjectId,
  onRepoSelected,
}: SubmissionDirectoryListProps) {
  const [page, setPage] = useState<number>(0)
  const [selectedRepo, setSelectedRepo] = useState<
    DockerRepository | undefined
  >()
  const [fetchedHeaders, setFetchedHeaders] = useState<EntityHeader[]>([])
  const [entities, setEntities] = useState<DockerRepository[]>([])
  const [total, setTotal] = useState<number>(0)
  const [nextPageToken, setNextPageToken] = useState<string | null>(null)
  const [fetchNextPage, setFetchNextPage] = useState<boolean>(false)
  const [rows, setRows] = useState<SubmissionDirectoryRow[]>([])
  const PER_PAGE = 20
  const HEADERS_PER_PAGE = 50
  const PROJECT_URL = `${getEndpoint(
    BackendDestinationEnum.PORTAL_ENDPOINT,
  )}#!Synapse:${challengeProjectId}`

  const request: EntityChildrenRequest = {
    parentId: challengeProjectId,
    nextPageToken: fetchNextPage ? nextPageToken : null,
    includeTypes: [EntityType.DOCKER_REPO],
    includeTotalChildCount: true,
    sortBy: SortBy.MODIFIED_ON,
    sortDirection: Direction.DESC,
  }

  const getEntityPage = (newPageNum: number) => {
    const start = newPageNum * PER_PAGE
    return entities.slice(start, start + PER_PAGE)
  }

  useGetEntityChildren(request, {
    enabled: !!challengeProjectId,
    useErrorBoundary: true,
    onSuccess: data => {
      const newHeaders = [...fetchedHeaders]
      const headerPage = Math.floor(((page + 1) * PER_PAGE) / HEADERS_PER_PAGE)
      const start = headerPage * HEADERS_PER_PAGE
      newHeaders.splice(start, start + HEADERS_PER_PAGE, ...data.page)
      setFetchedHeaders(newHeaders)
      setTotal(data.totalChildCount!)
      setFetchNextPage(false)
      setNextPageToken(data.nextPageToken)
    },
  })

  const start = page * PER_PAGE
  const pageHeaders = fetchedHeaders.slice(start, start + PER_PAGE)
  console.log('pageHeaders', {
    len: pageHeaders.length,
    id: pageHeaders[pageHeaders.length - 1]?.id ?? -1,
  })

  const { isLoading: areEntitiesLoading, data: results } = useGetEntities(
    pageHeaders,
    {
      enabled: getEntityPage(page).length < pageHeaders.length,
      onSuccess: data => {
        console.log('useGetEntities', data)
        const newEntities = [...entities]
        const start = page * PER_PAGE
        newEntities.splice(
          start,
          start + data.length,
          ...(data as DockerRepository[]),
        )
        setEntities(newEntities)
      },
    },
  )

  // console.log('results', {
  //   len: results.length,
  //   id: results[results.length - 1]?.id ?? -1,
  // })

  const repoChangeHandler = (value: string) => {
    const repo = entities.find(entity => entity.id === value)
    setSelectedRepo(repo)
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
            currentValue={selectedRepo?.id}
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
            )}#!Synapse:${params.row.id}`,
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

  const getRows = (entities: DockerRepository[]) => {
    const newRows: SubmissionDirectoryRow[] = []
    entities.forEach(entity => {
      newRows.push({
        id: entity.id!,
        repositoryName: entity.repositoryName,
        modifiedOn: formatDate(dayjs(entity.modifiedOn), 'MM/DD/YY'),
      })
    })
    return newRows
  }

  useEffect(() => {
    const r = getRows(getEntityPage(page))
    setRows(r)
  }, [entities])

  const handlePageChange = (newPageNum: number) => {
    const lastIndexNeeded = Math.min(total, (newPageNum + 1) * PER_PAGE)
    if (lastIndexNeeded > fetchedHeaders.length) {
      setFetchNextPage(true)
    }
    setPage(newPageNum)
    setRows(getRows(getEntityPage(newPageNum)))
  }

  const repoSelectedHandler = () => {
    onRepoSelected(selectedRepo)
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
          Your Submission Directory
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography
            variant="body1"
            sx={{ fontSize: '14px', color: '#71767F' }}
          >
            Project SynID:{'  '}
            <Link to={{ pathname: PROJECT_URL }} target="_blank">
              {challengeProjectId}
            </Link>
          </Typography>
          <CopyToClipboardIcon value={PROJECT_URL} sx={{ marginTop: '-4px' }} />
        </Box>
      </Box>
      <Box>
        <DataGrid
          initialState={{ pagination: { page: page } }}
          loading={areEntitiesLoading}
          columns={columns}
          rows={rows}
          pageSize={PER_PAGE}
          rowCount={total}
          page={page}
          pagination
          paginationMode="server"
          onPageChange={n => handlePageChange(n)}
          density="compact"
          autoHeight
          rowsPerPageOptions={[PER_PAGE]}
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
          }}
          getRowClassName={params =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
          }
        />
      </Box>
      <Box>
        <Button
          color="primary"
          variant="contained"
          onClick={repoSelectedHandler}
          disabled={!selectedRepo}
        >
          Submit Selection
        </Button>
      </Box>
    </Box>
  )
}

export default SubmissionDirectoryList
