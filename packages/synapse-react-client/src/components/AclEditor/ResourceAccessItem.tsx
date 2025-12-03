import { PermissionLevel } from '@/utils/PermissionLevelToAccessType'
import { Stack, Typography } from '@mui/material'
import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import React from 'react'
import { IconSvgButton } from '../IconSvgButton'
import UserOrTeamBadge from '../UserOrTeamBadge'
import { PermissionLevelMenu } from './PermissionLevelMenu'
import { ReadOnlyPermissionLevel } from './ReadOnlyPermissionLevel'

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

export function ResourceAccessItem(
  props: ResourceAccessItemProps,
): React.JSX.Element {
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
        role="row"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
          py: '6px',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            lineHeight: '20px',
          }}
        >
          <UserOrTeamBadge
            principalId={resourceAccess.principalId}
            openLinkInNewTab={true}
          />
        </Typography>
        <Stack
          direction="row"
          sx={{
            gap: '10px',
            alignItems: 'center',
            width: '200px',
            flexShrink: 0,
          }}
        >
          {canChangePermission ? (
            <PermissionLevelMenu
              currentAccessType={resourceAccess.accessType}
              availablePermissionLevels={availablePermissionLevels}
              onChange={onChange}
            />
          ) : (
            <Typography
              variant={'smallText1'}
              sx={{
                flexGrow: 1,
              }}
            >
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
