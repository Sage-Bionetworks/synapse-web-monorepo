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
  EntityHeader,
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
  const [fetchedHeaders, setFetchedHeaders] = useState<EntityHeader[]>([])
  const [headerPage, setHeaderPage] = useState<number>(0)
  const [entities, setEntities] = useState<DockerRepository[]>([])
  const [entityPage, setEntityPage] = useState<DockerRepository[]>([])
  // const [pageHeaders, setPageHeaders] = useState<EntityHeader[]>([])
  const [total, setTotal] = useState<number>(0)
  const [nextPageToken, setNextPageToken] = useState<string | null>(null)
  const [rows, setRows] = useState<SubmissionDirectoryRow[]>([])
  const PER_PAGE = 20
  const HEADERS_PER_PAGE = 50

  const request: EntityChildrenRequest = {
    parentId: challengeProjectId,
    nextPageToken,
    includeTypes: [EntityType.DOCKER_REPO],
    includeTotalChildCount: true,
    sortBy: SortBy.MODIFIED_ON,
    sortDirection: Direction.DESC,
  }

  const { refetch } = useGetEntityChildren(request, {
    enabled: !!challengeProjectId,
    useErrorBoundary: true,
    onSuccess: data => {
      console.log('useGetEntityChildren', data)
      // const headers = fetchedHeaders.splice(
      //   page * PER_PAGE,
      //   data.page.length,
      //   ...data.page,
      // )
      const newHeaders = [...fetchedHeaders]
      const start = headerPage * HEADERS_PER_PAGE
      newHeaders.splice(start, start + HEADERS_PER_PAGE, ...data.page)
      console.log('children', data.page, { newHeaders })
      setFetchedHeaders(newHeaders)
      setTotal(data.totalChildCount!)
      // setPageHeaders()
      setNextPageToken(data.nextPageToken)
    },
  })

  // useEffect(() => {}, [page])

  // A new repo had been added
  if (needsRefetch) {
    setNextPageToken(null)
    setPage(0)
    refetch()
  }

  const start = page * PER_PAGE
  const pageHeaders = fetchedHeaders.slice(start, start + PER_PAGE)
  console.log({ page, fetchedHeaders, pageHeaders })

  const { isLoading: areEntitiesLoading } = useGetEntities(pageHeaders, {
    enabled: fetchedHeaders.length > 0 && pageHeaders.length > 0,
    onSuccess: data => {
      console.log('onSuccess', { pageHeaders }, { data })
      const newEntities = [...entities]
      const start = page * PER_PAGE
      newEntities.splice(
        start,
        start + data.length,
        ...(data as DockerRepository[]),
      )
      console.log({ newEntities })
      setEntities(newEntities)
    },
  })

  console.log('ent', { entities })

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

  const getEntityPage = (newPageNum: number) => {
    const start = newPageNum * PER_PAGE
    return entities.slice(start, start + PER_PAGE)
  }

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
    // const areEntitiesLoading = entities.some(result => result.isLoading)
    const r = getRows(getEntityPage(page))
    console.log('ENTITIES CHANGED', r, entities)
    setRows(r)
  }, [entities])

  const handlePageChange = (newPageNum: number) => {
    setPage(newPageNum)
    setRows(getRows(getEntityPage(newPageNum)))
  }

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
