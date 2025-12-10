import { ButtonProps, Typography } from '@mui/material'
import { upperFirst } from 'lodash-es'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useExportTableQueryToAnalysisPlatform } from '../../../synapse-queries/entity/useExportTableQueryToAnalysisPlatform'
import { getPrimaryKeyINFilter } from '../../../utils/functions/QueryFilterUtils'
import { TableQueryActionsRequired } from '../../DownloadCart/TableQueryActionsRequired'
import { useQueryContext } from '../../QueryContext'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper/index'
import {
  useHasSelectedRowsAtomValue,
  useRowSelectionPrimaryKeyAtomValue,
  useSelectedRowsAtomValue,
} from '../../QueryWrapper/TableRowSelectionState'
import { useGetQueryMetadata } from '../../QueryWrapper/useGetQueryMetadata'
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
    fileIdColumnName,
    fileVersionColumnName,
    fileNameColumnName,
  } = useQueryContext()

  const { data: queryMetadata, isLoading } = useGetQueryMetadata()
  const selectedRows = useSelectedRowsAtomValue()
  const rowSelectionPrimaryKey = useRowSelectionPrimaryKeyAtomValue()
  const hasSelectedRows = useHasSelectedRowsAtomValue()

  const { unitDescription } = useQueryVisualizationContext()

  const [numberOfRequiredActions, setNumberOfRequiredActions] = useState<
    number | undefined
  >(undefined)

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

  const {
    exportToCavatica,
    exportToTerra,
    exportToPluto,
    exportToPlutoDev,
    exportToADWorkbench,
    exportToADWorkbenchDev,
  } = useExportTableQueryToAnalysisPlatform({
    queryBundleRequest: queryFilteredBySelection,
    selectColumns: queryMetadata?.selectColumns,
    fileIdColumnName,
    fileVersionColumnName,
    fileNameColumnName,
  })

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
      case 'pluto':
        await exportToPluto()
        break
      case 'plutodev':
        await exportToPlutoDev()
        break
      case 'adworkbench':
        // TODO: switch to exportToADWorkbench when AD Workbench is live
        await exportToADWorkbenchDev()
        break
    }
    onSuccessfulExport()
  }, [
    exportToCavatica,
    exportToTerra,
    exportToPluto,
    exportToPlutoDev,
    onSuccessfulExport,
    selectedPlatform,
    exportToADWorkbench,
    exportToADWorkbenchDev,
  ])

  useEffect(() => {
    onConfirmButtonPropsChange({
      id: getConfirmButtonId(selectedPlatform),
      children: confirmButtonText,
      disabled: isLoading || numberOfRequiredActions !== 0,
      onClick: () => {
        void onConfirmButtonClick()
      },
    })
  }, [
    numberOfRequiredActions,
    confirmButtonText,
    isLoading,
    onConfirmButtonClick,
    onConfirmButtonPropsChange,
    selectedPlatform,
  ])

  if (isLoading) return <SkeletonParagraph numRows={4} />

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
      <TableQueryActionsRequired
        queryBundleRequest={queryFilteredBySelection}
        columnModels={queryMetadata?.columnModels ?? []}
        onNumberOfRequiredActionsChanged={setNumberOfRequiredActions}
        onViewSharingSettingsClicked={onViewSharingSettingsClicked}
      />
      <Typography variant="body1" sx={{ fontWeight: 700, marginTop: '15px' }}>
        When completed, click “Send to {platform.name}“ to finish the process
        outside this application. You will be redirected to {platform.name}.
      </Typography>
    </>
  )
}
