import React from 'react'
import { useGetEntityHeader } from '../../synapse-queries/entity/useGetEntityHeaders'
import { DOWNLOAD_PERMISSION_REQUIRED } from '../../utils/SynapseConstants'
import { Button, Typography } from '@mui/material'
import { ActionRequiredCard } from './ActionRequiredCard/ActionRequiredCard'

export type RequestDownloadCardProps = {
  entityId: string
  count?: number
  /** Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission*/
  onViewSharingSettingsClicked?: (benefactorId: string) => void
}

const DEFAULT_ON_VIEW_SHARING_SETTINGS_CLICKED: RequestDownloadCardProps['onViewSharingSettingsClicked'] =
  benefactorEntityId =>
    window.open(
      `https://www.synapse.org/#!Synapse:${benefactorEntityId}`,
      '_blank',
    )

export const REQUEST_DOWNLOAD_TITLE = 'Download Permission Required'
export const RequestDownloadCard: React.FunctionComponent<
  RequestDownloadCardProps
> = ({
  entityId,
  count,
  onViewSharingSettingsClicked = DEFAULT_ON_VIEW_SHARING_SETTINGS_CLICKED,
}: RequestDownloadCardProps) => {
  const { data: entityHeader, isLoading } = useGetEntityHeader(
    entityId,
    undefined,
    {
      throwOnError: true,
    },
  )

  return (
    <ActionRequiredCard
      isLoading={isLoading}
      title={REQUEST_DOWNLOAD_TITLE}
      description={
        <>
          You must be granted the download permission on{' '}
          <strong>{entityHeader?.name}</strong> in order to download this set of
          files.
        </>
      }
      iconType={DOWNLOAD_PERMISSION_REQUIRED}
      count={count}
      actionNode={
        <>
          <Typography variant="smallText1" sx={{ mb: 1, color: 'grey.700' }}>
            Contact an administrator to request download permission
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              onViewSharingSettingsClicked(entityId)
            }}
          >
            View Sharing Settings
          </Button>
        </>
      }
    />
  )
}
