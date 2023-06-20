import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid'
import { RadioOption } from '../widgets/RadioGroup'
import {
  Direction,
  Entity,
  EntityChildrenRequest,
  EntityHeader,
  EntityType,
  FILE_ENTITY_CONCRETE_TYPE_VALUE,
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
import { InfoTwoTone } from '@mui/icons-material'
import SynapseClient from '../../synapse-client'
import { useSynapseContext } from '../../utils'
import { ErrorBanner } from '../error/ErrorBanner'
import FileUpload from '../FileUpload'
import IconSvg from '../IconSvg'
import { UploadCallbackResp } from '@sage-bionetworks/synapse-types'
import { FileEntity } from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { EntityItem } from './ChallengeSubmission'

type SubmissionDirectoryRow = {
  id: string
  name: string
  modifiedOn: string
}

type SubmissionDirectoryListProps = {
  pageSize: number
  challengeProjectId: string
  entityType: EntityType.DOCKER_REPO | EntityType.FILE
  onItemSelected: (selected: EntityItem) => void
}

function SubmissionDirectoryList({
  pageSize,
  challengeProjectId,
  entityType,
  onItemSelected,
}: SubmissionDirectoryListProps) {
  const [page, setPage] = useState<number>(0)
  const [selectedItem, setSelectedItem] = useState<EntityItem | undefined>()
  const { accessToken } = useSynapseContext()
  const [errorMessage, setErrorMessage] = useState<string>()
  const [canSubmit, setCanSubmit] = useState<boolean>()
  const [fetchedHeaders, setFetchedHeaders] = useState<EntityHeader[]>([])
  const [entities, setEntities] = useState<EntityItem[]>([])
  const [total, setTotal] = useState<number>(0)
  const [nextPageToken, setNextPageToken] = useState<string | null>(null)
  const [fetchNextPage, setFetchNextPage] = useState<boolean>(false)
  const [rows, setRows] = useState<SubmissionDirectoryRow[]>([])
  const PER_PAGE = pageSize
  const HEADERS_PER_PAGE = 50
  const PROJECT_URL = `${getEndpoint(
    BackendDestinationEnum.PORTAL_ENDPOINT,
  )}#!Synapse:${challengeProjectId}`

  const reset = () => {
    setErrorMessage(undefined)
    setCanSubmit(undefined)
    setFetchedHeaders([])
    setEntities([])
    setTotal(0)
    setNextPageToken(null)
    setFetchNextPage(false)
    setRows([])
  }

  useEffect(() => {
    reset()
  }, [entityType, pageSize])

  const request: EntityChildrenRequest = {
    parentId: challengeProjectId,
    nextPageToken: fetchNextPage ? nextPageToken : null,
    includeTypes: [entityType],
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

  console.log({ entityType, docker: entityType === EntityType.DOCKER_REPO })

  const { isLoading: areEntitiesLoading, data: results } = useGetEntities(
    pageHeaders,
    {
      enabled:
        getEntityPage(page).length < pageHeaders.length &&
        entityType === EntityType.DOCKER_REPO,
      onSuccess: data => {
        console.log('useGetEntities', data)
        const newEntities = [...entities]
        const start = page * PER_PAGE
        newEntities.splice(
          start,
          start + data.length,
          ...(data as EntityItem[]),
        )
        setEntities(newEntities)
      },
    },
  )

  const entityChangeHandler = async (value: string) => {
    setCanSubmit(false)
    const entity = entities.find(entity => entity.id === value)
    if (entity) {
      setSelectedItem(entity)
      if (entityType === EntityType.DOCKER_REPO) {
        let commits
        try {
          commits = await SynapseClient.getDockerTag(
            entity.id!,
            accessToken,
            0,
            1,
          )
        } catch (e) {
          return setErrorMessage(e.message)
        }
        if (commits.totalNumberOfResults === 0) {
          return setErrorMessage(
            'No commits have been made to this repository. Please select a repository with at least one commit.',
          )
        }
      }
      setCanSubmit(true)
      setErrorMessage(undefined)
    }
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
            currentValue={selectedItem?.id}
            onChange={selectedItemId => {
              entityChangeHandler(selectedItemId as string)
            }}
            label=""
            groupId="radiogroup"
            style={{ marginBottom: '16px' }}
          />
        )
      },
    },
    {
      field: 'name',
      headerName:
        entityType === EntityType.DOCKER_REPO
          ? 'Docker Repository'
          : 'File Name',
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
          {params.row.name}
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

  const getRows = (entities: EntityItem[]) => {
    const newRows: SubmissionDirectoryRow[] = []
    entities.forEach(entity => {
      newRows.push({
        id: entity.id!,
        name:
          entityType === EntityType.DOCKER_REPO
            ? entity.repositoryName
            : entity.name,
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

  const itemSelectedHandler = () => {
    onItemSelected(selectedItem!)
  }

  const handleUpload = (response: UploadCallbackResp) => {
    if (response.success && response.resp) {
      // Create Entity
      const { fileHandleId, fileName } = response.resp
      const newFileEntity: FileEntity = {
        parentId: challengeProjectId,
        name: fileName,
        concreteType: FILE_ENTITY_CONCRETE_TYPE_VALUE,
        dataFileHandleId: fileHandleId,
      }
      SynapseClient.createEntity(newFileEntity, accessToken)
        .then(() => {
          // TODO: Invalidate entity query
          reset()
        })
        .catch((err: SynapseClientError) => {
          setErrorMessage(err.reason)
        })
    } else if (!response.success && response.error) {
      setErrorMessage(response.error.reason as string)
    } else {
      setErrorMessage('An unknown error occurred. Please try again.')
    }
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
      {errorMessage && <ErrorBanner error={errorMessage}></ErrorBanner>}
      <Box display="flex" justifyContent="space-between">
        {entityType === EntityType.FILE && (
          <FileUpload
            label="Upload File"
            buttonProps={{
              variant: 'outlined',
              endIcon: <IconSvg icon="upload" />,
              sx: { lineHeight: 1 },
            }}
            uploadCallback={handleUpload}
          />
        )}
        <Button
          color="primary"
          variant="contained"
          onClick={itemSelectedHandler}
          disabled={!canSubmit}
        >
          Submit Selection
        </Button>
      </Box>
      {entityType === EntityType.DOCKER_REPO && (
        <Box mt={4} display={'flex'}>
          <InfoTwoTone
            sx={{
              width: '16px',
              height: '16px',
              verticalAlign: 'text-bottom',
            }}
          />

          <Box ml={2}>
            To learn more about how to create and submit the Docker containers
            using command line, see our{' '}
            <Link
              to={{
                pathname:
                  'https://github.com/Sage-Bionetworks-Challenges/sample-model-templates#build-your-model',
              }}
              target="_blank"
            >
              Docker model submission guide
            </Link>
            .
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default SubmissionDirectoryList
