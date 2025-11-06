import { useGetDownloadListStatistics } from '@/synapse-queries'
import { useSynapseContext } from '@/utils'
import { Alert, AlertProps, Box, Button, Typography } from '@mui/material'
import { ReactNode, useMemo } from 'react'
import SignInButton from '../SignInButton'
import DownloadDetails from './DownloadDetails'

enum StatusEnum {
  LOADING_INFO,
  PROCESSING,
  INFO,
  INFO_ITEMS_IN_LIST,
  SIGNED_OUT,
}

export type DownloadConfirmationUIProps = {
  onAddToDownloadCart: () => void
  fileCount?: number
  fileSize?: number
  onCancel: () => void
  isLoadingStats?: boolean
  isAddingToDownloadCart?: boolean
}

type UiStateDictionary = {
  [key: string]: {
    severity: AlertProps['severity']
    infoText: string | ReactNode
    closeText: string
  }
}

// css classes, text, and close button text associated with different stages
const StatusConstruct: UiStateDictionary = {
  [StatusEnum.INFO]: {
    severity: 'info',
    infoText: 'Would you like to add these files to the download cart?',
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
    infoText: 'Adding files to download cart',
    closeText: 'Cancel',
  },

  [StatusEnum.LOADING_INFO]: {
    severity: 'info',
    infoText: 'Calculating file size',
    closeText: 'Cancel',
  },
  [StatusEnum.SIGNED_OUT]: {
    severity: 'error',
    closeText: 'Close',
    infoText: (
      <>
        Please <SignInButton /> to add files to your download cart.
      </>
    ),
  },
}

type DownloadConfirmationContentProps = {
  status: StatusEnum
  fileCount?: number
  fileSize?: number
}

function DownloadConfirmationContent(props: DownloadConfirmationContentProps) {
  const { status, fileCount, fileSize } = props
  switch (status) {
    case StatusEnum.LOADING_INFO:
    case StatusEnum.PROCESSING:
      return (
        <>
          <div className={'spinner white'} />
          <Typography variant={'smallText1'}>
            {StatusConstruct[status].infoText}
          </Typography>
        </>
      )

    case StatusEnum.SIGNED_OUT:
      return (
        <Typography variant={'smallText1'}>
          {StatusConstruct[status].infoText}
        </Typography>
      )
    case StatusEnum.INFO:
    case StatusEnum.INFO_ITEMS_IN_LIST:
      return (
        <>
          <DownloadDetails
            numFiles={fileCount}
            numBytes={fileSize}
          ></DownloadDetails>
          <Typography variant={'smallText1'} sx={{ flexGrow: 1 }}>
            {StatusConstruct[status].infoText}
          </Typography>
        </>
      )

    default:
      return <></>
  }
}

/**
 * This component is used to display the download confirmation dialog that presents to a user the number of files and the
 * total size of the files they are about to add to their download cart.
 */
export function DownloadConfirmationUI(props: DownloadConfirmationUIProps) {
  const {
    onAddToDownloadCart,
    onCancel,
    fileCount,
    fileSize,
    isLoadingStats = false,
    isAddingToDownloadCart = false,
  } = props
  const { accessToken } = useSynapseContext()

  const { data: downloadListStatistics } = useGetDownloadListStatistics()

  const status = useMemo(() => {
    if (!accessToken) return StatusEnum.SIGNED_OUT
    if (isLoadingStats) return StatusEnum.LOADING_INFO
    if (isAddingToDownloadCart) return StatusEnum.PROCESSING
    if (downloadListStatistics && downloadListStatistics.totalNumberOfFiles > 0)
      return StatusEnum.INFO_ITEMS_IN_LIST
    return StatusEnum.INFO
  }, [
    accessToken,
    isLoadingStats,
    isAddingToDownloadCart,
    downloadListStatistics,
  ])

  return (
    <>
      <Alert
        sx={{
          pr: 4,
          py: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        icon={StatusConstruct[status].severity === 'error' ? undefined : false}
        severity={StatusConstruct[status].severity}
        className={`download-confirmation`}
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
                  onAddToDownloadCart()
                }}
                sx={{ ml: '5px' }}
              >
                Add
              </Button>
            )}
          </>
        }
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
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

export default DownloadConfirmationUI
