import React from 'react'
import { UserProfile } from '@sage-bionetworks/synapse-types'
import { SEPERATOR } from '../../utils/SynapseConstants'
import { Divider, Menu, MenuItem } from '@mui/material'

export type MenuAction = {
  field: string
  callback?: (userProfile: UserProfile) => void
}

export type UserCardContextMenuProps = {
  userProfile: UserProfile
  menuActions: MenuAction[]
  open: boolean
  anchorEl?: HTMLElement | null
  onClose?: () => void
}

const UserCardContextMenu: React.FC<UserCardContextMenuProps> = (
  props: UserCardContextMenuProps,
) => {
  const {
    menuActions = [],
    userProfile,
    open,
    anchorEl = null,
    onClose,
  } = props
  return (
    <Menu open={open} anchorEl={anchorEl} onClose={onClose}>
      {menuActions.map((menuAction, index) => {
        const callback = () => menuAction.callback!(userProfile)
        if (menuAction.field === SEPERATOR) {
          return <Divider key={`${menuAction.field}_${index}`} />
        }
        return (
          <MenuItem role="menuitem" key={menuAction.field} onClick={callback}>
            {menuAction.field}
          </MenuItem>
        )
      })}
    </Menu>
  )
}

export default UserCardContextMenu
