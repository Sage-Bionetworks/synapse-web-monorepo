import { Stack, Typography } from '@mui/material'
import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import React from 'react'
import UserOrTeamBadge from '../UserOrTeamBadge'
import { PermissionLevelMenu } from './PermissionLevelMenu'
import { IconSvgButton } from '../IconSvgButton'
import { ReadOnlyPermissionLevel } from './ReadOnlyPermissionLevel'
import { PermissionLevel } from '../../utils/PermissionLevelToAccessType'

export const REMOVE_BUTTON_LABEL = 'Remove from AR Permissions'

type ResourceAccessItemProps = {
  canChangePermission: boolean
  showDeleteButton: boolean
  resourceAccess: ResourceAccess
  availablePermissionLevels: PermissionLevel[]
  displayedPermissionLevelOverride?: string
  onChange: (accessType: ACCESS_TYPE[]) => void
  onRemove: () => void
}

export const ResourceAccessItem: React.FunctionComponent<
  ResourceAccessItemProps
> = (props: ResourceAccessItemProps) => {
  const {
    resourceAccess,
    availablePermissionLevels,
    canChangePermission,
    showDeleteButton,
    onChange,
    onRemove,
    displayedPermissionLevelOverride,
  } = props

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap="10px"
        py="6px"
        role="row"
      >
        <Typography fontSize="16px" lineHeight="20px">
          <UserOrTeamBadge
            principalId={resourceAccess.principalId}
            openLinkInNewTab={true}
          />
        </Typography>
        <Stack
          direction="row"
          gap="10px"
          alignItems="center"
          width="200px"
          flexShrink={0}
        >
          {canChangePermission ? (
            <PermissionLevelMenu
              currentAccessType={resourceAccess.accessType}
              availablePermissionLevels={availablePermissionLevels}
              onChange={onChange}
            />
          ) : (
            <Typography variant={'smallText1'} flexGrow={1}>
              {displayedPermissionLevelOverride ?? (
                <ReadOnlyPermissionLevel
                  accessType={resourceAccess.accessType}
                />
              )}
            </Typography>
          )}
          {showDeleteButton && (
            <IconSvgButton
              aria-label={REMOVE_BUTTON_LABEL}
              onClick={() => onRemove()}
              icon="delete"
              sx={{
                '&:hover': {
                  color: 'error.main',
                },
              }}
            />
          )}
        </Stack>
      </Stack>
    </>
  )
}
