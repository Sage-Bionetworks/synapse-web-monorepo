import React, { useState } from 'react'
import { useGetEntityBundle, useGetFeatureFlag } from '../../synapse-queries'
import { DOWNLOAD_PERMISSION_REQUIRED } from '../../utils/SynapseConstants'
import { Alert, Button, Typography } from '@mui/material'
import { ActionRequiredCard } from './ActionRequiredCard/ActionRequiredCard'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import EntityAclEditorModal from '../EntityAclEditor/EntityAclEditorModal'

export type RequestDownloadCardProps = {
  entityId: string
  count?: number
  /** Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission*/
  onViewSharingSettingsClicked?: (benefactorId: string) => void
}

const DEFAULT_ON_VIEW_SHARING_SETTINGS_CLICKED: RequestDownloadCardProps['onViewSharingSettingsClicked'] =
  benefactorEntityId =>
    window.open(
      `https://www.synapse.org/Synapse:${benefactorEntityId}`,
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
  const {
    data: entityBundle,
    isLoading,
    isError,
    error,
  } = useGetEntityBundle(entityId, undefined, {
    includeEntity: true,
    includePermissions: true,
  })

  const [showSharingSettings, setShowSharingSettings] = useState(false)

  const hasDownloadPermission = Boolean(entityBundle?.permissions.canDownload)

  const useReactACLEditor = useGetFeatureFlag(
    FeatureFlagEnum.REACT_ENTITY_ACL_EDITOR,
  )

  if (isError) {
    return <Alert severity={'error'}>{error.reason}</Alert>
  }
  return (
    <ActionRequiredCard
      isLoading={isLoading}
      title={REQUEST_DOWNLOAD_TITLE}
      description={
        <>
          You must be granted the download permission on{' '}
          <strong>{entityBundle?.entity.name}</strong> in order to download this
          set of files.
        </>
      }
      iconType={DOWNLOAD_PERMISSION_REQUIRED}
      count={count}
      actionNode={
        <>
          <Typography variant="smallText1" sx={{ mb: 1, color: 'grey.700' }}>
            Contact an administrator to request download permission
          </Typography>
          <EntityAclEditorModal
            entityId={entityId}
            open={showSharingSettings}
            onClose={() => setShowSharingSettings(false)}
          />
          <Button
            variant="outlined"
            onClick={() => {
              useReactACLEditor
                ? setShowSharingSettings(true)
                : onViewSharingSettingsClicked(entityId)
            }}
            disabled={hasDownloadPermission}
          >
            {hasDownloadPermission ? 'Complete' : 'View Sharing Settings'}
          </Button>
        </>
      }
    />
  )
}
