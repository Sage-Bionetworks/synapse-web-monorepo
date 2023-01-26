import * as React from 'react'
import { UserProfile } from '../utils/synapseTypes/'
import { SEPERATOR } from '../utils/SynapseConstants'

export type MenuAction = {
  field: string
  callback?: (userProfile: UserProfile) => void
}

export type UserCardContextMenuProps = {
  userProfile: UserProfile
  menuActions: MenuAction[]
}

const UserCardContextMenu: React.FC<UserCardContextMenuProps> = (
  props: UserCardContextMenuProps,
) => {
  const { menuActions = [], userProfile } = props
  return (
    <div className="dropdown open">
      <ul
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="dropdownMenu1"
      >
        {menuActions.map((menuAction, index) => {
          const callback = () => menuAction.callback!(userProfile)
          if (menuAction.field === SEPERATOR) {
            return (
              <hr className="SRC-break" key={`${menuAction.field}_${index}`} />
            )
          }
          return (
            <li
              role="menuitem"
              key={menuAction.field}
              style={{ listStyle: 'none' }}
              className="SRC-menu-item SRC-table-dropdown-list SRC-primary-background-color-hover"
              onClick={callback}
              onKeyPress={callback}
            >
              <button className="SRC-menuAction">{menuAction.field}</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UserCardContextMenu
