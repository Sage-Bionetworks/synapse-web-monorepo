import {
  getAccessTypeFromPermissionLevel,
  getPermissionLevelFromAccessType,
  PermissionLevel,
  permissionLevelToLabel,
} from '@/utils/PermissionLevelToAccessType'
import { MenuItem, TextField, Typography } from '@mui/material'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import React from 'react'

export type PermissionLevelMenuProps = {
  currentAccessType: ACCESS_TYPE[]
  availablePermissionLevels: PermissionLevel[]
  onChange: (accessTypes: ACCESS_TYPE[]) => void
}

const CUSTOM_VALUE = 'CUSTOM'
const CUSTOM_TEXT = 'Custom'

export function PermissionLevelMenu(
  props: PermissionLevelMenuProps,
): React.JSX.Element {
  const { currentAccessType, availablePermissionLevels, onChange } = props

  const selectedPermissionLevel: PermissionLevel | null =
    getPermissionLevelFromAccessType(currentAccessType)

  const isCustomPermissionSelected = selectedPermissionLevel == null

  return (
    <TextField
      value={
        isCustomPermissionSelected ? CUSTOM_VALUE : selectedPermissionLevel
      }
      onChange={e => {
        const accessType = getAccessTypeFromPermissionLevel(
          e.target.value as PermissionLevel,
        )

        onChange(accessType || currentAccessType)
      }}
      fullWidth
      select
      size="small"
      slotProps={{
        select: {
          renderValue: selected => {
            if (selected == CUSTOM_VALUE) {
              return CUSTOM_TEXT
            }
            return permissionLevelToLabel[selected as PermissionLevel]
          },
        },
      }}
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
      {isCustomPermissionSelected && (
        <MenuItem value={CUSTOM_VALUE}>
          <Typography variant="smallText1" noWrap>
            {CUSTOM_TEXT}
          </Typography>
        </MenuItem>
      )}
    </TextField>
  )
}
