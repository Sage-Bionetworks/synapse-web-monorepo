import React, { useCallback, useState } from 'react'
import { Alert, AlertProps, Box, Button } from '@mui/material'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { SynapseConstants } from '../../utils'
import SynapseClient from '../../synapse-client'
import { useGetDownloadListStatistics } from '../../synapse-queries/download/useDownloadList'
import { useGetEntityChildren } from '../../synapse-queries/entity/useGetEntityChildren'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { EntityType, QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { AddToDownloadListRequest } from '@sage-bionetworks/synapse-types'
import { FilesStatisticsResponse } from '@sage-bionetworks/synapse-types'
import { TopLevelControlsState } from '../QueryVisualizationWrapper'
import SignInButton from '../SignInButton'
import { displayToast } from '../ToastMessage/ToastMessage'
import DownloadDetails from './DownloadDetails'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
} from '../QueryContext/QueryContext'

enum StatusEnum {
  LOADING_INFO,
  PROCESSING,
  INFO,
  INFO_ITEMS_IN_LIST,
  SIGNED_OUT,
}

export type DownloadConfirmationProps = {
  fnClose?: () => void
  getLastQueryRequest?: () => QueryBundleRequest
  folderId?: string
  topLevelControlsState?: TopLevelControlsState
  setTopLevelControlsState?: React.Dispatch<
    React.SetStateAction<TopLevelControlsState>
  >
}

// add files to download list
async function addToDownload(
  token: string,
  closeConfirmationFn: () => void,
  queryBundleRequest?: QueryBundleRequest,
  folderId?: string,
  goToDownloadListFn?: () => void,
): Promise<[StatusEnum, string]> {
  try {
    const req: AddToDownloadListRequest = {
      query: queryBundleRequest?.query,
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
      parentId: folderId,
    }
    await SynapseClient.addFilesToDownloadListV2(req, token)
    displayToast(
      'File(s) were successfully added to your Download Cart.',
      'success',
      {
        primaryButtonConfig: {
          text: 'View Download Cart',
          onClick: goToDownloadListFn,
        },
      },
    )
    closeConfirmationFn()
    return [StatusEnum.LOADING_INFO, '']
  } catch (error) {
    displayToast(error.reason, 'danger')
    closeConfirmationFn()
    return [StatusEnum.LOADING_INFO, '']
  }
}

type UiStateDictionary = {
  [key: string]: {
    severity: AlertProps['severity']
    infoText: string | JSX.Element
    closeText: string
  }
}

// css classes, text, and close button text associated with different stages
const StatusConstruct: UiStateDictionary = {
  [StatusEnum.INFO]: {
    severity: 'info',
    infoText: 'Would you like to add all files to the download cart?',
    closeText: 'Cancel',
  },
  [StatusEnum.INFO_ITEMS_IN_LIST]: {
    severity: 'info',
    infoText: (
      <>
        Note: Files that you add will be mixed in with the files already in your
        download cart.
        <br />
        If you don&apos;t want to mix these files, clear your download cart
        before continuing.
      </>
    ),
    closeText: 'Cancel',
  },
  [StatusEnum.PROCESSING]: {
    severity: 'info',
    infoText: 'Adding Files To List',
    closeText: 'Cancel',
  },

  [StatusEnum.LOADING_INFO]: {
    severity: 'info',
    infoText: 'Calculating File Size',
    closeText: 'Cancel',
  },
  [StatusEnum.SIGNED_OUT]: {
    severity: 'error',
    closeText: 'Close',
    infoText: (
      <>
        Please&nbsp; <SignInButton />
        &nbsp;to add files to your download cart.
      </>
    ),
  },
}

const DownloadConfirmationContent = (props: {
  status: StatusEnum
  fileCount: number
  fileSize?: number
}): JSX.Element => {
  switch (props.status) {
    case StatusEnum.LOADING_INFO:
    case StatusEnum.PROCESSING:
      return (
        <div>
          <span className={'spinner white'} />
          <span className={'spinner__text'}>
            {StatusConstruct[props.status].infoText}
          </span>
        </div>
      )

    case StatusEnum.SIGNED_OUT:
      return <>{StatusConstruct[props.status].infoText}</>
    case StatusEnum.INFO:
    case StatusEnum.INFO_ITEMS_IN_LIST:
      return (
        <>
          <DownloadDetails
            numFiles={props.fileCount}
            numBytes={props.fileSize}
          ></DownloadDetails>
          <span
            className="download-confirmation-infoText"
            style={{ paddingLeft: '8px' }}
          >
            {StatusConstruct[props.status].infoText}
          </span>
        </>
      )

    default:
      return <></>
  }
}

//============= DownloadConfirmation component =============

export function DownloadConfirmation(props: DownloadConfirmationProps) {
  const {
    getLastQueryRequest,
    folderId,
    fnClose,
    setTopLevelControlsState,
    topLevelControlsState,
  } = props

  const { accessToken, downloadCartPageUrl } = useSynapseContext()
  const { showDownloadConfirmation = true } = topLevelControlsState ?? {}
  const [status, setStatus] = useState<StatusEnum>(
    accessToken ? StatusEnum.LOADING_INFO : StatusEnum.SIGNED_OUT,
  )

  const [fileCount, setFileCount] = useState(0)
  const [fileSize, setFileSize] = useState<number>()

  const { data: downloadListStatistics, refetch } =
    useGetDownloadListStatistics()

  const lastQueryRequest = getLastQueryRequest!()
  // is not defined (configured for a container)
  const [showDownloadList, setShowDownloadList] = useState(false)
  const updateStats = useCallback(
    (
      count?: number,
      bytes?: number,
      downloadListStatistics?: FilesStatisticsResponse,
    ) => {
      if (accessToken && downloadListStatistics) {
        const hasFilesInDownloadList =
          downloadListStatistics.totalNumberOfFiles > 0

        const fileCount = count ?? 0
        setStatus(
          hasFilesInDownloadList
            ? StatusEnum.INFO_ITEMS_IN_LIST
            : StatusEnum.INFO,
        )
        setFileCount(fileCount)
        setFileSize(bytes)
      }
    },
    [accessToken],
  )

  const { data: entityChildrenData, isSuccess } = useGetEntityChildren({
    parentId: folderId,
    includeSumFileSizes: true,
    includeTotalChildCount: true,
    includeTypes: [EntityType.FILE],
  })
  useDeepCompareEffect(() => {
    if (isSuccess && entityChildrenData && downloadListStatistics) {
      updateStats(
        entityChildrenData.totalChildCount,
        entityChildrenData.sumFileSizesBytes,
        downloadListStatistics,
      )
    }
  }, [
    updateStats,
    folderId,
    isSuccess,
    entityChildrenData,
    downloadListStatistics,
  ])

  const partMask =
    SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
    SynapseConstants.BUNDLE_MASK_SUM_FILES_SIZE_BYTES

  const queryBundleRequestSizeInformation: QueryBundleRequest = {
    ...lastQueryRequest,
    partMask,
  }

  const { data: queryResultBundle } = useGetQueryResultBundle(
    queryBundleRequestSizeInformation,
  )

  useDeepCompareEffect(() => {
    if (queryResultBundle && downloadListStatistics) {
      const isGreaterThanReportedValue =
        queryResultBundle.sumFileSizes?.greaterThan
      updateStats(
        queryResultBundle.queryCount,
        isGreaterThanReportedValue
          ? undefined
          : queryResultBundle.sumFileSizes?.sumFileSizesBytes,
        downloadListStatistics,
      )
    }
  }, [updateStats, lastQueryRequest, queryResultBundle, downloadListStatistics])

  const onCancel = fnClose
    ? () => fnClose()
    : () => {
        if (setTopLevelControlsState) {
          setTopLevelControlsState(topLevelControlsState => ({
            ...topLevelControlsState,
            showDownloadConfirmation: false,
          }))
        }
      }

  const triggerAddToDownload = async () => {
    if (!accessToken) {
      setStatus(StatusEnum.SIGNED_OUT)
    } else {
      setStatus(StatusEnum.PROCESSING)
      const goToDownloadListFn = () => setShowDownloadList(true)
      const result = await addToDownload(
        accessToken,
        onCancel,
        lastQueryRequest,
        folderId,
        goToDownloadListFn,
      )
      const newStatus = result[0]
      setStatus(newStatus)
      refetch()
    }
  }

  if (showDownloadList) {
    // go to the Download Cart Page
    window.location.href = downloadCartPageUrl
  }
  const showFacetFilter = topLevelControlsState?.showFacetFilter
  return (
    <>
      <Alert
        sx={{ pr: 4, py: 1 }}
        icon={StatusConstruct[status].severity === 'error' ? undefined : false}
        severity={StatusConstruct[status].severity}
        className={`download-confirmation ${
          showDownloadConfirmation ? '' : 'hidden'
        }
          ${
            showFacetFilter
              ? QUERY_FILTERS_EXPANDED_CSS
              : QUERY_FILTERS_COLLAPSED_CSS
          }
        `}
        action={
          <>
            {status !== StatusEnum.PROCESSING && (
              <Button variant="text" color="primary" onClick={onCancel}>
                {StatusConstruct[status].closeText}
              </Button>
            )}

            {(status === StatusEnum.INFO ||
              status === StatusEnum.INFO_ITEMS_IN_LIST) && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  triggerAddToDownload()
                }}
                sx={{ ml: '5px' }}
              >
                Add
              </Button>
            )}
          </>
        }
      >
        <Box display="flex">
          <DownloadConfirmationContent
            status={status}
            fileCount={fileCount}
            fileSize={fileSize}
          />
        </Box>
      </Alert>
    </>
  )
}
