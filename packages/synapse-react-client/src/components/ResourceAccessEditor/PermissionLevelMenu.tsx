import { MenuItem, TextField, Typography } from '@mui/material'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import React from 'react'
import {
  PermissionLevelEnum,
  getAccessTypeFromPermissionLevel,
  getPermissionLevelFromAccessType,
} from '../../utils/PermissionLevelToAccessType'

export type PermissionLevelMenuProps = {
  currentAccessType: ACCESS_TYPE[]
  availablePermissionLevels: PermissionLevelEnum[]
  onChange: (accessTypes: ACCESS_TYPE[]) => void
}

export const PermissionLevelMenu: React.FunctionComponent<
  PermissionLevelMenuProps
> = (props: PermissionLevelMenuProps) => {
  const { currentAccessType, availablePermissionLevels, onChange } = props

  return (
    <TextField
      value={getPermissionLevelFromAccessType(currentAccessType) || null}
      onChange={e => {
        const accessType = getAccessTypeFromPermissionLevel(
          e.target.value as PermissionLevelEnum,
        )
        if (!accessType) {
          console.error(
            `ACCESS_TYPE[] not found for PermissionLevelEnum value: ${e.target.value}`,
          )
        }
        onChange(accessType || [])
      }}
      fullWidth
      select
      size="small"
    >
      {Object.values(availablePermissionLevels).map(permissionLevel => {
        return (
          <MenuItem key={permissionLevel} value={permissionLevel}>
            <Typography variant="smallText1" textTransform="capitalize" noWrap>
              {permissionLevel}
            </Typography>
          </MenuItem>
        )
      })}
    </TextField>
  )
}
