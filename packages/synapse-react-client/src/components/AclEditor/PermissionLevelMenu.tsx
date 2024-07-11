import { MenuItem, TextField, Typography } from '@mui/material'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import React from 'react'
import {
  PermissionLevel,
  getAccessTypeFromPermissionLevel,
  getPermissionLevelFromAccessType,
  permissionLevelToLabel,
} from '../../utils/PermissionLevelToAccessType'

export type PermissionLevelMenuProps = {
  currentAccessType: ACCESS_TYPE[]
  availablePermissionLevels: PermissionLevel[]
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
          e.target.value as PermissionLevel,
        )
        if (!accessType) {
          console.error(
            `ACCESS_TYPE[] not found for PermissionLevel: ${e.target.value}`,
          )
        }
        onChange(accessType || null)
      }}
      fullWidth
      select
      SelectProps={{
        renderValue: selected =>
          permissionLevelToLabel[selected as PermissionLevel],
      }}
      size="small"
    >
      {Object.values(availablePermissionLevels).map(permissionLevel => {
        return (
          <MenuItem key={permissionLevel} value={permissionLevel}>
            <Typography variant="smallText1" noWrap>
              {permissionLevelToLabel[permissionLevel]}
            </Typography>
          </MenuItem>
        )
      })}
    </TextField>
  )
}
