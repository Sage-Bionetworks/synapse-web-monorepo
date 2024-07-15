import { Stack, Typography } from '@mui/material'
import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import React from 'react'
import { PermissionLevel } from '../../utils/PermissionLevelToAccessType'
import UserOrTeamBadge from '../UserOrTeamBadge'
import { PermissionLevelMenu } from './PermissionLevelMenu'
import { IconSvgButton } from '../IconSvgButton'

export const REMOVE_BUTTON_LABEL = 'Remove from AR Permissions'

type ResourceAccessItemProps = {
  resourceAccess: ResourceAccess
  availablePermissionLevels: PermissionLevel[]
  onChange: (accessType: ACCESS_TYPE[]) => void
  onRemove: () => void
}

export const ResourceAccessItem: React.FunctionComponent<
  ResourceAccessItemProps
> = (props: ResourceAccessItemProps) => {
  const { resourceAccess, availablePermissionLevels, onChange, onRemove } =
    props

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
          <UserOrTeamBadge principalId={resourceAccess.principalId} />
        </Typography>
        <Stack direction="row" gap="10px" alignItems="center" width="225px">
          <PermissionLevelMenu
            currentAccessType={resourceAccess.accessType}
            availablePermissionLevels={availablePermissionLevels}
            onChange={onChange}
          />
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
        </Stack>
      </Stack>
    </>
  )
}
