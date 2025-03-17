import { ButtonProps, Stack, Typography } from '@mui/material'
import {
  ActionRequiredCount,
  ColumnModel,
} from '@sage-bionetworks/synapse-types'
import { useQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { upperFirst } from 'lodash-es'
import { useCallback, useEffect, useMemo } from 'react'
import { useGetActionsRequiredForTableQuery } from '../../../synapse-queries/entity/useActionsRequiredForTableQuery'
import { useExportTableQueryToAnalysisPlatform } from '../../../synapse-queries/entity/useExportTableQueryToAnalysisPlatform'
import { getPrimaryKeyINFilter } from '../../../utils/functions/QueryFilterUtils'
import useTrackTransientListItems from '../../../utils/hooks/useTrackTransientListItems'
import { ActionRequiredListItem } from '../../DownloadCart/ActionRequiredListItem'
import { useQueryContext } from '../../QueryContext'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper/index'
import {
  hasSelectedRowsAtom,
  rowSelectionPrimaryKeyAtom,
  selectedRowsAtom,
} from '../../QueryWrapper/TableRowSelectionState'
import { SkeletonParagraph } from '../../Skeleton/index'
import { getNumberOfResultsToInvokeActionCopy } from '../TopLevelControls/TopLevelControlsUtils'
import {
  EXTERNAL_ANALYSIS_PLATFORMS,
  ExternalAnalysisPlatform,
} from './ExternalAnalysisPlatformsConstants'

/**
 * Get the ID of the confirm button for the selected platform, used in Google Tag Manager
 * @param selectedPlatform
 */
function getConfirmButtonId(
  selectedPlatform: ExternalAnalysisPlatform,
): string {
  return `SendTo${upperFirst(
    selectedPlatform.replace('\\s', ''),
  )}ButtonFromConfirmationDialog`
}

export type ExternalPlatformActionsRequiredPrecheckProps = {
  /* The external analysis platform that the user selected */
  selectedPlatform: ExternalAnalysisPlatform
  /* Callback to propagate the current confirm button appearance and behavior */
  onConfirmButtonPropsChange: (props: ButtonProps) => void
  /* Callback invoked when export to the external platform succeeds */
  onSuccessfulExport: () => void
}

export default function ExternalPlatformActionsRequiredPrecheck(
  props: ExternalPlatformActionsRequiredPrecheckProps,
) {
  const { selectedPlatform, onConfirmButtonPropsChange, onSuccessfulExport } =
    props
  const platform = EXTERNAL_ANALYSIS_PLATFORMS[selectedPlatform]

  const {
    getCurrentQueryRequest,
    onViewSharingSettingsClicked,
    hasResettableFilters,
    queryMetadataQueryOptions,
    fileIdColumnName,
    fileVersionColumnName,
    fileNameColumnName,
  } = useQueryContext()

  const { data: queryMetadata } = useQuery(queryMetadataQueryOptions)
  const selectedRows = useAtomValue(selectedRowsAtom)
  const rowSelectionPrimaryKey = useAtomValue(rowSelectionPrimaryKeyAtom)
  const hasSelectedRows = useAtomValue(hasSelectedRowsAtom)

  const { unitDescription } = useQueryVisualizationContext()

  const queryFilteredBySelection = useMemo(() => {
    const request = getCurrentQueryRequest()
    if (
      hasSelectedRows &&
      rowSelectionPrimaryKey &&
      queryMetadata?.selectColumns
    ) {
      request.query.additionalFilters = [
        ...(request.query.additionalFilters || []),
        getPrimaryKeyINFilter(
          rowSelectionPrimaryKey,
          selectedRows,
          queryMetadata.selectColumns,
        ),
      ]
    }
    return request
  }, [
    getCurrentQueryRequest,
    hasSelectedRows,
    rowSelectionPrimaryKey,
    queryMetadata?.selectColumns,
    selectedRows,
  ])

  const { exportToCavatica, exportToTerra } =
    useExportTableQueryToAnalysisPlatform({
      queryBundleRequest: queryFilteredBySelection,
      selectColumns: queryMetadata?.selectColumns,
      fileIdColumnName,
      fileVersionColumnName,
      fileNameColumnName,
    })

  const { data: actions, isLoading } = useGetActionsRequiredForTableQuery(
    queryFilteredBySelection,
    queryMetadata?.columnModels as ColumnModel[],
    {
      throwOnError: true,
      enabled: !!queryMetadata?.columnModels,
    },
  )

  const allCompleteAndIncompleteActions = useTrackTransientListItems(actions)

  const confirmButtonText = `Send ${getNumberOfResultsToInvokeActionCopy(
    hasResettableFilters,
    hasSelectedRows,
    selectedRows,
    queryMetadata?.queryCount,
    unitDescription,
  )} to ${platform.name}`

  const onConfirmButtonClick = useCallback(async () => {
    switch (selectedPlatform) {
      case 'cavatica':
        await exportToCavatica()
        break
      case 'terra':
        await exportToTerra()
        break
      case 'adworkbench':
        console.warn('AD Workbench export not yet implemented')
        break
    }
    onSuccessfulExport()
  }, [exportToCavatica, exportToTerra, onSuccessfulExport, selectedPlatform])

  useEffect(() => {
    onConfirmButtonPropsChange({
      id: getConfirmButtonId(selectedPlatform),
      children: confirmButtonText,
      disabled: isLoading || (actions && actions.length > 0),
      onClick: () => {
        void onConfirmButtonClick()
      },
    })
  }, [
    actions,
    confirmButtonText,
    isLoading,
    onConfirmButtonClick,
    onConfirmButtonPropsChange,
    selectedPlatform,
  ])

  return (
    <>
      <Typography variant="body1" sx={{ fontWeight: 700, my: '10px' }}>
        Before sending the selected data to {platform.name}:
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        You must meet all requirements to download the selected data. You must
        take the following actions before we can send this data to{' '}
        {platform.name}.
      </Typography>
      {isLoading && <SkeletonParagraph numRows={4} />}
      {!isLoading && (
        <Stack gap={3}>
          {allCompleteAndIncompleteActions &&
            allCompleteAndIncompleteActions.length > 0 &&
            allCompleteAndIncompleteActions.map(
              (item: ActionRequiredCount, index) => {
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
              },
            )}
          {allCompleteAndIncompleteActions.length == 0 && (
            <Typography
              variant={'body1Italic'}
              sx={{ p: 4, textAlign: 'center', color: 'grey.700' }}
            >
              All requirements have been met. No actions are required.
            </Typography>
          )}
        </Stack>
      )}
      <Typography variant="body1" sx={{ fontWeight: 700, marginTop: '15px' }}>
        When completed, click “Send to {platform.name}“ to finish the process
        outside this application. You will be redirected to {platform.name}.
      </Typography>
    </>
  )
}
