import React from 'react'
import ConfirmationDialog from '../ConfirmationDialog'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { Link } from '@mui/material'
import { ActionRequiredListItem } from '../DownloadCart/ActionRequiredListItem'
import { ActionRequiredCount } from '@sage-bionetworks/synapse-types'
import { useQueryContext } from '../QueryContext'
import { SynapseConstants } from '../../utils'
import { useGetQueryResultBundleWithAsyncStatus } from '../../synapse-queries'
import { SkeletonParagraph } from '../Skeleton'
import { useExportToCavatica } from '../../synapse-queries/entity/useExportToCavatica'

export type SendToCavaticaConfirmationDialogProps = {
  showing: boolean
  cavaticaHelpURL?: string
  onHide: () => void
}

export default function SendToCavaticaConfirmationDialog(
  props: SendToCavaticaConfirmationDialogProps,
) {
  const { cavaticaHelpURL, onHide, showing } = props
  const { data, getLastQueryRequest, onViewSharingSettingsClicked } =
    useQueryContext()
  const exportToCavatica = useExportToCavatica(
    getLastQueryRequest(),
    data?.queryResult?.queryResults.headers,
  )
  const queryRequestCopy = getLastQueryRequest()
  queryRequestCopy.partMask = SynapseConstants.BUNDLE_MASK_ACTIONS_REQUIRED
  const { data: asyncJobStatus, isLoading } =
    useGetQueryResultBundleWithAsyncStatus(queryRequestCopy, {
      useErrorBoundary: true,
    })

  const queryResultBundle = asyncJobStatus?.responseBody
  const actions: ActionRequiredCount[] | undefined =
    queryResultBundle?.actionsRequired
  return (
    <ConfirmationDialog
      open={showing}
      title="Send to CAVATICA"
      content={
        <>
          <Box
            sx={{
              backgroundColor: 'grey.100',
              border: '1px solid',
              borderColor: 'grey.300',
              marginBottom: '15px',
              padding: '10px 20px 10px 20px',
            }}
          >
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              CAVATICA is a data analysis and sharing platform.
              {cavaticaHelpURL && (
                <>
                  {' '}
                  Read more about CAVATICA{' '}
                  <Link href={cavaticaHelpURL} target="_blank">
                    here
                  </Link>
                  .
                </>
              )}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{ fontWeight: 700, marginBottom: '10px' }}
          >
            You must meet these requirements from CAVATICA to send data:
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginLeft: '10px', marginBottom: '10px' }}
          >
            1. You must be logged in to a CAVATICA account.
            <br />
            2. You must connect your CAVATICA account to Synapse.
          </Typography>
          <Typography variant="body1">
            <Link
              href="https://help.eliteportal.org/help/limited-data-commons#LimitedDataCommons-GainingAccess"
              target="_blank"
            >
              Click here for instructions
            </Link>
          </Typography>
          <Box
            sx={{
              backgroundColor: 'grey.100',
              marginTop: '15px',
              padding: '10px 20px 10px 20px',
            }}
          >
            <Typography variant="body1">
              Note that we cannot provide support for CAVATICA. Please contact
              CAVATICA’s{' '}
              <Link href="mailto:support@sevenbridges.com "> support</Link> for
              issues related to the above.
            </Typography>
          </Box>
          {isLoading ? (
            <SkeletonParagraph numRows={4} />
          ) : (
            actions &&
            actions.length > 0 && (
              <>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 700, marginBottom: '10px' }}
                >
                  You must also take these actions before sending the selected
                  data to Cavatica:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ marginLeft: '10px', marginBottom: '10px' }}
                >
                  The data you’ve selected is contains potentially identifying
                  information about study participants.
                  <br />
                  You must take the following actions before we can send this
                  data to Cavatica.
                </Typography>
                <Box>
                  {actions.map((item: ActionRequiredCount, index) => {
                    if (item) {
                      return (
                        <ActionRequiredListItem
                          key={index}
                          action={item.action}
                          count={item.count}
                          onViewSharingSettingsClicked={
                            onViewSharingSettingsClicked
                          }
                        />
                      )
                    } else return false
                  })}
                </Box>
              </>
            )
          )}
          <Typography
            variant="body1"
            sx={{ fontWeight: 700, marginTop: '15px' }}
          >
            When completed, click “Send to CAVATICA“ to finish the process
            outside this application. You will be redirected to CAVATICA.
          </Typography>
        </>
      }
      confirmButtonText="Send to CAVATICA"
      confirmButtonDisabled={isLoading || (actions && actions.length > 0)}
      onConfirm={() => {
        exportToCavatica()
      }}
      onCancel={onHide}
      maxWidth="md"
    />
  )
}
