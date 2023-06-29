import React, { useMemo } from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog'
import { Box, Link, Stack, Typography } from '@mui/material'
import { ActionRequiredListItem } from '../DownloadCart/ActionRequiredListItem'
import {
  ActionRequiredCount,
  ColumnModel,
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
} from '@sage-bionetworks/synapse-types'
import { useQueryContext } from '../QueryContext'
import { SkeletonParagraph } from '../Skeleton'
import { useExportToCavatica } from '../../synapse-queries/entity/useExportToCavatica'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { getNumberOfResultsToInvokeActionCopy } from './TopLevelControls/TopLevelControlsUtils'
import { useGetActionsRequiredForTableQuery } from '../../synapse-queries/entity/useActionsRequiredForTableQuery'

export type SendToCavaticaConfirmationDialogProps = {
  cavaticaHelpURL?: string
}

export default function SendToCavaticaConfirmationDialog(
  props: SendToCavaticaConfirmationDialogProps,
) {
  const { cavaticaHelpURL } = props
  const {
    data,
    getLastQueryRequest,
    onViewSharingSettingsClicked,
    hasResettableFilters,
  } = useQueryContext()
  const {
    isShowingExportToCavaticaModal,
    setIsShowingExportToCavaticaModal,
    isRowSelectionVisible,
    selectedRows,
    unitDescription,
    rowSelectionPrimaryKey,
  } = useQueryVisualizationContext()

  const hasSelectedRows = isRowSelectionVisible && selectedRows.length > 0

  const cavaticaQueryRequest = useMemo(() => {
    const request = getLastQueryRequest()
    if (!hasSelectedRows) {
      return request
    } else {
      if (!rowSelectionPrimaryKey || rowSelectionPrimaryKey.length !== 1) {
        // TODO: Handle composite/undefined key
        throw new Error(
          'rowSelectionPrimaryKey must be defined and have length 1',
        )
      }
      // Add a filter that will just return the selected rows.
      const idColIndex = data?.columnModels?.findIndex(cm => cm.name === 'id')
      const idColumnFilter: ColumnSingleValueQueryFilter = {
        concreteType:
          'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
        columnName: rowSelectionPrimaryKey[0],
        operator: ColumnSingleValueFilterOperator.IN,
        values: selectedRows!.map(row => row.values[idColIndex!]!),
      }
      request.query.additionalFilters = [
        ...(request.query.additionalFilters || []),
        idColumnFilter,
      ]
      return request
    }
  }, [data?.columnModels, getLastQueryRequest, selectedRows, hasSelectedRows])

  const exportToCavatica = useExportToCavatica(
    cavaticaQueryRequest,
    data?.queryResult?.queryResults.headers,
  )

  const { data: actions, isLoading } = useGetActionsRequiredForTableQuery(
    cavaticaQueryRequest,
    data?.columnModels as ColumnModel[],
    undefined,
    {
      useErrorBoundary: true,
      enabled: !!data?.columnModels,
    },
  )

  const confirmButtonText = `Send ${getNumberOfResultsToInvokeActionCopy(
    hasResettableFilters,
    isRowSelectionVisible,
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
        exportToCavatica()
      }}
      onCancel={() => setIsShowingExportToCavaticaModal(false)}
      maxWidth="md"
    />
  )
}
