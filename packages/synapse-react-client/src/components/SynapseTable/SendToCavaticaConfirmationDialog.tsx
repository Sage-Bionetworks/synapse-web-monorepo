import React, { useMemo } from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog'
import { Box, Link, Stack, Typography } from '@mui/material'
import { ActionRequiredListItem } from '../DownloadCart/ActionRequiredListItem'
import {
  ActionRequiredCount,
  ColumnModel,
} from '@sage-bionetworks/synapse-types'
import { useQueryContext } from '../QueryContext'
import { SkeletonParagraph } from '../Skeleton'
import { useExportToCavatica } from '../../synapse-queries/entity/useExportToCavatica'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { getNumberOfResultsToInvokeActionCopy } from './TopLevelControls/TopLevelControlsUtils'
import { useGetActionsRequiredForTableQuery } from '../../synapse-queries/entity/useActionsRequiredForTableQuery'
import { getPrimaryKeyINFilter } from '../../utils/functions/QueryFilterUtils'
import { tableQueryDataAtom } from '../QueryWrapper/QueryWrapper'
import { useAtomValue } from 'jotai'
import {
  hasSelectedRowsAtom,
  rowSelectionPrimaryKeyAtom,
  selectedRowsAtom,
} from '../QueryWrapper/TableRowSelectionState'

export type SendToCavaticaConfirmationDialogProps = {
  fileIdColumnName?: string
  fileNameColumnName?: string
  fileVersionColumnName?: string
  cavaticaHelpURL?: string
}

export default function SendToCavaticaConfirmationDialog(
  props: SendToCavaticaConfirmationDialogProps,
) {
  const {
    fileIdColumnName,
    fileNameColumnName,
    fileVersionColumnName,
    cavaticaHelpURL,
  } = props
  const {
    getCurrentQueryRequest,
    onViewSharingSettingsClicked,
    hasResettableFilters,
  } = useQueryContext()
  const data = useAtomValue(tableQueryDataAtom)
  const selectedRows = useAtomValue(selectedRowsAtom)
  const rowSelectionPrimaryKey = useAtomValue(rowSelectionPrimaryKeyAtom)
  const hasSelectedRows = useAtomValue(hasSelectedRowsAtom)
  const {
    isShowingExportToCavaticaModal,
    setIsShowingExportToCavaticaModal,
    unitDescription,
  } = useQueryVisualizationContext()

  const cavaticaQueryRequest = useMemo(() => {
    const request = getCurrentQueryRequest()
    if (hasSelectedRows && rowSelectionPrimaryKey && data?.columnModels) {
      request.query.additionalFilters = [
        ...(request.query.additionalFilters || []),
        getPrimaryKeyINFilter(
          rowSelectionPrimaryKey,
          selectedRows,
          data.columnModels,
        ),
      ]
    }
    return request
  }, [
    getCurrentQueryRequest,
    hasSelectedRows,
    rowSelectionPrimaryKey,
    data?.columnModels,
    selectedRows,
  ])

  const exportToCavatica = useExportToCavatica(
    cavaticaQueryRequest,
    data?.queryResult?.queryResults.headers,
    fileIdColumnName,
    fileNameColumnName,
    fileVersionColumnName,
  )

  const { data: actions, isLoading } = useGetActionsRequiredForTableQuery(
    cavaticaQueryRequest,
    data?.columnModels as ColumnModel[],
    {
      useErrorBoundary: true,
      enabled: !!data?.columnModels && isShowingExportToCavaticaModal,
    },
  )

  const confirmButtonText = `Send ${getNumberOfResultsToInvokeActionCopy(
    hasResettableFilters,
    hasSelectedRows,
    selectedRows,
    data,
    unitDescription,
  )} to CAVATICA`

  return (
    <ConfirmationDialog
      open={isShowingExportToCavaticaModal}
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
                  sx={{ fontWeight: 700, my: '10px' }}
                >
                  You must also take these actions before sending the selected
                  data to CAVATICA:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ marginLeft: '10px', marginBottom: '10px' }}
                >
                  The data you’ve selected is contains potentially identifying
                  information about study participants.
                  <br />
                  You must take the following actions before we can send this
                  data to CAVATICA.
                </Typography>
                <Stack gap={3}>
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
                </Stack>
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
      confirmButtonText={confirmButtonText}
      confirmButtonDisabled={isLoading || (actions && actions.length > 0)}
      onConfirm={() => {
        exportToCavatica().then(
          // on success, close the modal
          () => setIsShowingExportToCavaticaModal(false),
        )
      }}
      onCancel={() => setIsShowingExportToCavaticaModal(false)}
      maxWidth="md"
    />
  )
}
