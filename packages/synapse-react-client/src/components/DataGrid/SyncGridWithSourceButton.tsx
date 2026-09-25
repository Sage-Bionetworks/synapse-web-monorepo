import GridMenuButton from '@/components/DataGrid/components/GridMenuButton/GridMenuButton'
import { GridSourceSync } from '@/components/DataGrid/hooks/useGridSourceSync'
import { getSyncButtonLabels } from '@/components/DataGrid/utils/gridSyncMessages'
import { CloudDownloadTwoTone, CloudSyncTwoTone } from '@mui/icons-material'
import { Skeleton, Tooltip } from '@mui/material'

export type SyncGridWithSourceButtonProps = {
  gridSourceSync: GridSourceSync
}

/**
 * Applies this session's changes to its source entity. When the source already has updates
 * that have not been imported, offers that import instead, since it must happen first.
 */
export default function SyncGridWithSourceButton(
  props: SyncGridWithSourceButtonProps,
) {
  const { gridSourceSync } = props
  const {
    isSourceOutdated,
    sourceEntityType,
    isLoading,
    isPending,
    importChanges,
    submit,
  } = gridSourceSync

  const { buttonText, tooltipText } = getSyncButtonLabels(
    isSourceOutdated,
    sourceEntityType,
  )

  if (isLoading) {
    return <Skeleton width="100px" />
  }

  return (
    <Tooltip title={tooltipText} describeChild>
      <GridMenuButton
        startIcon={
          isSourceOutdated ? <CloudDownloadTwoTone /> : <CloudSyncTwoTone />
        }
        loading={isPending}
        onClick={isSourceOutdated ? importChanges : submit}
        variant="contained"
      >
        {buttonText}
      </GridMenuButton>
    </Tooltip>
  )
}
