import Downshift from 'downshift'
import { useState } from 'react'
import { getUserGroupHeaders } from '../../synapse-client/SynapseClient'
import {
  UserGroupHeader,
  UserGroupHeaderResponsePage,
} from '@sage-bionetworks/synapse-types'
import { TYPE_FILTER } from '@sage-bionetworks/synapse-types'
import UserOrTeamBadge from '../UserOrTeamBadge/UserOrTeamBadge'

export type UserSearchBoxProps = {
  id?: string // id for the input tag
  onSelectCallback?: (selected: UserGroupHeader) => void
  typeFilter?: TYPE_FILTER
  filterUserIds?: string[]
}

function UserSearchBox(props: UserSearchBoxProps) {
  const { id, onSelectCallback, filterUserIds, typeFilter } = props
  const [users, setUsers] = useState<UserGroupHeader[]>([])

  const onInputValueChange = async (inputValue: string) => {
    try {
      const headers: UserGroupHeaderResponsePage = await getUserGroupHeaders(
        inputValue,
        typeFilter,
      )
      const filtered: UserGroupHeader[] = filterUserIds?.length
        ? headers.children.filter((user: UserGroupHeader) => {
            return !filterUserIds.includes(user.ownerId)
          })
        : headers.children
      setUsers(filtered)
    } catch (e) {
      console.log('onInputValueChange', e)
    }
  }

  const onSelectedItem = (selected: UserGroupHeader) => {
    if (onSelectCallback) {
      onSelectCallback(selected)
    }
  }

  return (
    <>
      <Downshift
        onInputValueChange={inputValue => {
          onInputValueChange(inputValue)
        }}
        onChange={selectedItem => onSelectedItem(selectedItem)}
        itemToString={item => (item?.name ? item.name : '')}
      >
        {({
          getInputProps,
          getMenuProps,
          getItemProps,
          isOpen,
          inputValue,
        }) => (
          <div className={'user-search-box'}>
            <input
              {...getInputProps({
                className: 'form-control',
                id: id,
                type: 'search',
                role: 'searchbox',
                placeholder: 'Enter the name...',
              })}
              style={{ marginBottom: '0' }}
            />
            <ul
              {...getMenuProps()}
              className={isOpen ? 'users-visible' : ''}
              role="list"
            >
              {isOpen
                ? users
                    .filter(
                      (user: UserGroupHeader) =>
                        !inputValue ||
                        `${user.firstName} ${user.lastName}`.includes(
                          inputValue,
                        ) ||
                        user.userName.includes(inputValue),
                    )
                    .map((item, index) => (
                      <li
                        key={`userSearchBox-${index}`}
                        {...getItemProps({ key: item.ownerId, index, item })}
                      >
                        <UserOrTeamBadge
                          userGroupHeader={item}
                          disableHref={true}
                          showFullName={true}
                        />
                      </li>
                    ))
                : null}
            </ul>
          </div>
        )}
      </Downshift>
    </>
  )
}

export default UserSearchBox
