import React, { useEffect, useMemo, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid'
import { RadioOption } from '../widgets/RadioGroup'
import {
  Direction,
  Entity,
  EntityChildrenRequest,
  EntityHeader,
  EntityLookupRequest,
  EntityType,
  FILE_ENTITY_CONCRETE_TYPE_VALUE,
  FileUploadComplete,
  SortBy,
} from '@sage-bionetworks/synapse-types'
import { Link } from 'react-router-dom'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import {
  invalidateAllQueriesForEntity,
  useGetEntities,
  useGetEntityChildren,
} from '../../synapse-queries'
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
import ConfirmationDialog from '../ConfirmationDialog'
import { useQueryClient } from '@tanstack/react-query'

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

type FileUploadAttempt = FileUploadComplete & {
  entityId?: string
}

function SubmissionDirectoryList({
  pageSize,
  challengeProjectId,
  entityType,
  onItemSelected,
}: SubmissionDirectoryListProps) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()
  const [page, setPage] = useState<number>(0)
  const [selectedItem, setSelectedItem] = useState<EntityItem | undefined>()
  const [errorMessage, setErrorMessage] = useState<string>()
  const [canSubmit, setCanSubmit] = useState<boolean>()
  const [fetchedHeaders, setFetchedHeaders] = useState<EntityHeader[]>([])
  const [nextPageToken, setNextPageToken] = useState<string | undefined>()
  const [fetchNextPage, setFetchNextPage] = useState<boolean>(false)
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false)
  const [uploadAttempt, setUploadAttempt] = useState<FileUploadAttempt>()

  const PER_PAGE = pageSize
  const HEADERS_PER_PAGE = 50
  const PROJECT_URL = `${getEndpoint(
    BackendDestinationEnum.PORTAL_ENDPOINT,
  )}#!Synapse:${challengeProjectId}`

  const request: EntityChildrenRequest = {
    parentId: challengeProjectId,
    nextPageToken: fetchNextPage ? nextPageToken : null,
    includeTypes: [entityType],
    includeTotalChildCount: true,
    sortBy: SortBy.MODIFIED_ON,
    sortDirection: Direction.DESC,
  }

  const { data: headerResults, refetch } = useGetEntityChildren(request, {
    enabled: !!challengeProjectId,
    throwOnError: true,
  })

  useEffect(() => {
    if (headerResults) {
      const newHeaders = [...fetchedHeaders]
      const headerPage = Math.floor(((page + 1) * PER_PAGE) / HEADERS_PER_PAGE)
      const start = headerPage * HEADERS_PER_PAGE
      newHeaders.splice(start, start + HEADERS_PER_PAGE, ...headerResults.page)
      setFetchedHeaders(newHeaders)
      setFetchNextPage(false)
      setNextPageToken(headerResults.nextPageToken)
    }
    // TODO: Temporary useEffect hook to remove onSuccess QueryOption for @tanstack/react-query v5
    // Refactor this component to remove this effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerResults])

  function getPageHeaders() {
    const pageStart = page * PER_PAGE
    const pageHeaders = fetchedHeaders.slice(pageStart, pageStart + PER_PAGE)
    return pageHeaders
  }

  function reset() {
    setErrorMessage(undefined)
    setCanSubmit(undefined)
    setFetchedHeaders([])
    setNextPageToken(undefined)
    setFetchNextPage(false)
    refetch()
  }

  useEffect(() => {
    reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityType, pageSize])

  const queries = useGetEntities(getPageHeaders())
  const entities = useMemo(
    () =>
      queries
        .filter(q => q.status === 'success')
        .map(q => q.data) as EntityItem[],
    [queries],
  )
  const areEntitiesLoading = queries.some(q => q.isLoading)

  const entityChangeHandler = async (value: string) => {
    setCanSubmit(false)
    const entity = entities.find(entity => entity?.id === value)
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
            checked={params.id === selectedItem?.id}
            onChange={selectedItemId => {
              entityChangeHandler(selectedItemId as string)
            }}
            label=""
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
            ? entity.repositoryName ?? entity.name
            : entity.name,
        modifiedOn: formatDate(dayjs(entity.modifiedOn), 'MM/DD/YY'),
      })
    })
    return newRows
  }

  const handlePageChange = (newPageNum: number) => {
    const lastIndexNeeded = Math.min(
      headerResults?.totalChildCount ?? 0,
      (newPageNum + 1) * PER_PAGE,
    )
    if (lastIndexNeeded > fetchedHeaders.length) {
      setFetchNextPage(true)
    }
    setPage(newPageNum)
  }

  const itemSelectedHandler = () => {
    onItemSelected(selectedItem!)
  }

  function createEntity(file: FileUploadAttempt) {
    // Create Entity
    if (!file) return
    const { fileHandleId, fileName } = file
    const newFileEntity: FileEntity = {
      parentId: challengeProjectId,
      name: fileName,
      concreteType: FILE_ENTITY_CONCRETE_TYPE_VALUE,
      dataFileHandleId: fileHandleId,
    }
    SynapseClient.createEntity(newFileEntity, accessToken)
      .then(() => {
        reset()
      })
      .catch((err: SynapseClientError) => {
        setErrorMessage(err.reason)
      })
  }

  async function updateEntity() {
    if (!uploadAttempt) return
    const { fileHandleId, entityId } = uploadAttempt
    if (!entityId)
      return setErrorMessage('Error: missing entityId. Please try again.')
    // Get the entity
    let entity: FileEntity
    try {
      entity = await SynapseClient.getEntity(accessToken, entityId)
    } catch (err) {
      return setErrorMessage(`The entity ${entityId} could not be retrieved.`)
    }

    const updateRequest: FileEntity = {
      id: entity.id,
      name: entity.name,
      dataFileHandleId: fileHandleId,
      concreteType: FILE_ENTITY_CONCRETE_TYPE_VALUE,
      parentId: entity.parentId,
      etag: entity.etag,
      modifiedOn: entity.modifiedOn,
    }

    try {
      const updatedEntity = await SynapseClient.updateEntity(
        updateRequest,
        accessToken,
        true,
      )
      await invalidateAllQueriesForEntity(
        queryClient,
        keyFactory,
        updatedEntity.id!,
      )
      queryClient.setQueryData(
        keyFactory.getEntityQueryKey(updatedEntity.id!),
        updatedEntity,
      )
      reset()
    } catch (err) {
      setErrorMessage(err.reason)
    }
  }

  const handleUpload = async (response: UploadCallbackResp) => {
    if (response.success && response.resp) {
      const { fileName } = response.resp

      // Lookup entity
      const entityLookupRequest: EntityLookupRequest = {
        entityName: fileName,
        parentId: challengeProjectId,
      }
      try {
        const entityId = await SynapseClient.lookupChildEntity(
          entityLookupRequest,
          accessToken,
        )
        // Entity exists, prompt user to update it
        if (entityId) {
          setUploadAttempt({ ...response.resp, entityId: entityId.id })
          setConfirmOpen(true)
        }
      } catch (err) {
        // An existing entity was not found for this file, create it
        setUploadAttempt(undefined)
        createEntity(response.resp)
      }
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
          loading={areEntitiesLoading}
          columns={columns}
          rows={getRows(entities)}
          rowCount={headerResults?.totalChildCount ?? 0}
          pagination
          paginationMode="server"
          paginationModel={{ page, pageSize: PER_PAGE }}
          pageSizeOptions={[PER_PAGE]}
          onPaginationModelChange={({ page }) => {
            handlePageChange(page)
          }}
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
            onComplete={resp => {
              handleUpload(resp)
            }}
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
      <ConfirmationDialog
        open={confirmOpen}
        title="File exists"
        content={
          <Typography variant="body1" sx={{ fontSize: '16px' }}>
            A file named &quot;{uploadAttempt?.fileName}&quot; (
            {uploadAttempt?.entityId}) already exists in this location. Do you
            want to update the existing file and create a new version?
          </Typography>
        }
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => {
          updateEntity()
          setConfirmOpen(false)
        }}
      />
    </Box>
  )
}

export default SubmissionDirectoryList
