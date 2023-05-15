import React from 'react'
import { useGetEntityHeaders } from '../../utils/hooks/SynapseAPI/entity/useGetEntityHeaders'
import { EntityHeader } from '../../utils/synapseTypes'
import { DOWNLOAD_PERMISSION_REQUIRED } from '../../utils/SynapseConstants'
import { Button, Typography } from '@mui/material'
import { ActionRequiredCard } from './ActionRequiredCard'

export type RequestDownloadCardProps = {
  entityId: string
  count?: number
  /** Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission*/
  onViewSharingSettingsClicked?: (benefactorId: string) => void
}

export const REQUEST_DOWNLOAD_TITLE = 'Download Permission Required'
export const RequestDownloadCard: React.FunctionComponent<
  RequestDownloadCardProps
> = ({
  entityId,
  count,
  onViewSharingSettingsClicked = benefactorEntityId =>
    window.open(
      `https://www.synapse.org/#!Synapse:${benefactorEntityId}`,
      '_blank',
    ),
}: RequestDownloadCardProps) => {
  const { data, isLoading } = useGetEntityHeaders([{ targetId: entityId }], {
    useErrorBoundary: true,
  })
  const entityHeader: EntityHeader | undefined = data?.results[0]

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
