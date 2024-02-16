import React, { useMemo, useState } from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog'
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

import { useLocalStorageValue } from '@react-hookz/web'
import { Link, Typography, Box, Stack } from '@mui/material'
import { Checkbox } from '../widgets/Checkbox'
import { EXTERNAL_COMPUTE_ENV_DISCLAIMER } from '../../utils/SynapseConstants'

const SEND_TO_CAVATICA_CONFIRM_BUTTON_ID =
  'SendToCavaticaButtonFromConfirmationDialog'

export type SendToCavaticaConfirmationDialogProps = {
  fileIdColumnName?: string
  fileNameColumnName?: string
  fileVersionColumnName?: string
  cavaticaConnectAccountURL?: string
}

export default function SendToCavaticaConfirmationDialog(
  props: SendToCavaticaConfirmationDialogProps,
) {
  const {
    fileIdColumnName,
    fileNameColumnName,
    fileVersionColumnName,
    cavaticaConnectAccountURL,
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
  // The disclaimer should be shown every time. The checkbox state will be pre-filled based on localStorage.
  const [isShowingDisclaimerPage, setIsShowingDisclaimerPage] = useState(true)

  // disclaimerAcknowledged is tracking the checkbox state
  const { value: disclaimerAcknowledged, set: setDisclaimerAcknowledged } =
    useLocalStorageValue<boolean>(EXTERNAL_COMPUTE_ENV_DISCLAIMER)

  const showDisclaimer =
    isShowingExportToCavaticaModal && isShowingDisclaimerPage
  const showExport = isShowingExportToCavaticaModal && !isShowingDisclaimerPage

  const cavaticaQueryRequest = useMemo(() => {
    const request = getCurrentQueryRequest()
    if (hasSelectedRows && rowSelectionPrimaryKey && data?.selectColumns) {
      request.query.additionalFilters = [
        ...(request.query.additionalFilters || []),
        getPrimaryKeyINFilter(
          rowSelectionPrimaryKey,
          selectedRows,
          data.selectColumns,
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
      throwOnError: true,
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
    <div>
      <ConfirmationDialog
        open={showDisclaimer}
        title="Disclaimer"
        content={
          <>
            <Box
              sx={{
                backgroundColor: 'grey.100',
                marginBottom: '15px',
                padding: '20px',
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, marginBottom: '10px' }}
              >
                Disclaimer
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                Sage Bionetworks may integrate with, and provide links to,
                compute environments as an alternative to downloading files.
                These integrations or provisions do not signify an endorsement
                of that particular environment by Sage Bionetworks or funders,
                nor does it alter the relationship between Sage Bionetworks,
                existing data contributors, project sponsors or funders, or
                computational providers.
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                Furthermore, it is the responsibility of individual users to
                review the terms of data use for each compute environment, as
                well as for the portal or repository from which the data is
                sourced. Users must personally ensure that all data access terms
                and conditions are met.
              </Typography>
              <Checkbox
                label="I acknowledge and accept these terms"
                checked={disclaimerAcknowledged}
                onChange={setDisclaimerAcknowledged}
              />
            </Box>
          </>
        }
        confirmButtonProps={{
          children: 'Continue',
          disabled: !disclaimerAcknowledged,
        }}
        onConfirm={() => {
          setIsShowingDisclaimerPage(false)
        }}
        onCancel={() => {
          setIsShowingExportToCavaticaModal(false)
        }}
        maxWidth="md"
      />
      <ConfirmationDialog
        open={showExport}
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
            {cavaticaConnectAccountURL && (
              <Typography variant="body1">
                <Link href={cavaticaConnectAccountURL} target="_blank">
                  Click here for instructions
                </Link>
              </Typography>
            )}
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
                <Link href="mailto:support@velsera.com"> support</Link> for
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
        confirmButtonProps={{
          id: SEND_TO_CAVATICA_CONFIRM_BUTTON_ID,
          children: confirmButtonText,
          disabled: isLoading || (actions && actions.length > 0),
        }}
        onConfirm={() => {
          exportToCavatica().then(
            // on success, reset to the disclaimer page and close the modal
            () => {
              setIsShowingDisclaimerPage(true)
              setIsShowingExportToCavaticaModal(false)
            },
          )
        }}
        onCancel={() => {
          setIsShowingDisclaimerPage(true)
          setIsShowingExportToCavaticaModal(false)
        }}
        maxWidth="md"
      />
    </div>
  )
}
