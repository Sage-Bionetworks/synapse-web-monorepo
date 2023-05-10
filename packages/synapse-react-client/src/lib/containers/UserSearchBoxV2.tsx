import { Skeleton } from '@mui/material'
import React, { useMemo, useState } from 'react'
import Select, {
  components,
  GroupBase,
  PropsValue,
  SelectComponentsConfig,
} from 'react-select'
import { useSearchUserGroupHeaders } from '../utils/hooks/SynapseAPI'
import { useDebouncedEffect } from '../utils/hooks/useDebouncedEffect'
import useGetInfoFromIds from '../utils/hooks/useGetInfoFromIds'
import { UserGroupHeader } from '../utils/synapseTypes'
import { TYPE_FILTER } from '../utils/synapseTypes/UserGroupHeader'
import UserOrTeamBadge from './UserOrTeamBadge'

type UserSearchBoxValueType = {
  id: string
  value: string
  label: string
  header: UserGroupHeader
} | null

export type UserSearchBoxProps = {
  /* id for the input tag */
  inputId?: string
  /* The initial principal ID */
  defaultValue?: string
  onChange?: (
    principalId: string | null,
    header: UserGroupHeader | null,
  ) => void
  typeFilter?: TYPE_FILTER
  filterPredicate?: (item: UserGroupHeader) => boolean
  placeholder?: string
  focusOnSelect?: boolean
  /* The principal ID of the current selected user or team. If null, no selection is made. If undefined, state will be handled internally */
  value?: PropsValue<UserSearchBoxValueType> | undefined
}

const customSelectComponents: Partial<
  SelectComponentsConfig<
    UserSearchBoxValueType,
    false,
    GroupBase<UserSearchBoxValueType>
  >
> = {
  Control: props => {
    return (
      <components.Control
        {...props}
        className={`form-control ${props.className ?? ''}`}
      />
    )
  },
  SingleValue: props => {
    const { data } = props
    return (
      <components.SingleValue {...props} key={data?.id}>
        <UserOrTeamBadge
          key={data?.header.ownerId}
          userGroupHeader={data?.header}
          disableHref
          showFullName
        />
      </components.SingleValue>
    )
  },
  Option: props => {
    const { data } = props
    return (
      <components.Option {...props} key={data?.id}>
        <UserOrTeamBadge
          userGroupHeader={data?.header}
          disableHref={true}
          showFullName={true}
          showCardOnHover={false}
        />
      </components.Option>
    )
  },
}

const UserSearchBoxV2: React.FC<UserSearchBoxProps> = props => {
  const {
    inputId,
    defaultValue = null,
    onChange,
    filterPredicate,
    typeFilter,
    placeholder,
    focusOnSelect = false,
    value,
  } = props
  const [inputValue, setInputValue] = useState('')
  const [debouncedInput, setDebouncedInput] = useState('')
  useDebouncedEffect(
    () => {
      setDebouncedInput(inputValue)
    },
    [inputValue],
    500,
  )

  const [defaultUserGroupHeader = undefined] =
    useGetInfoFromIds<UserGroupHeader>({
      ids: defaultValue ? [defaultValue] : [],
      type: 'USER_PROFILE',
    })

  const { data, isLoading } = useSearchUserGroupHeaders(
    debouncedInput,
    typeFilter,
  )

  const selectRef = React.useRef<any>(null)
  React.useEffect(() => {
    if (focusOnSelect) {
      selectRef.current && selectRef.current.focus()
    }
  })

  const noOptionsMessage = useMemo(
    () =>
      isLoading || inputValue !== debouncedInput ? () => 'Loading…' : undefined,
    [isLoading, debouncedInput, inputValue],
  )

  const options = (data ?? [])
    .filter(filterPredicate ?? (() => true))
    // Map each user to an options object for the select input component
    .map(item => ({
      id: item.ownerId.toString(),
      value: item.ownerId.toString(),
      label: item.userName,
      header: item,
    }))

  if (defaultValue && defaultUserGroupHeader == null) {
    return <Skeleton width="100%" />
  }

  return (
    <Select
      className="bootstrap-4-backport UserSearchBoxV2"
      ref={selectRef}
      inputValue={inputValue}
      onInputChange={setInputValue}
      filterOption={() => true}
      isLoading={isLoading}
      options={(!isLoading && options) || []}
      noOptionsMessage={noOptionsMessage}
      defaultValue={
        defaultValue
          ? {
              id: defaultValue,
              value: defaultValue,
              label: defaultUserGroupHeader!.userName,
              header: defaultUserGroupHeader!,
            }
          : undefined
      }
      inputId={inputId}
      isClearable
      value={value}
      styles={{
        // Bootstrap's form-control class overrides the display value, manually set to flex (the default without Bootstrap)
        control: styles => ({ ...styles, display: 'flex !important' }),
        input: provided => ({
          ...provided,
          // SWC-6327 - Adjust the input style so a right-click focuses on the input field
          input: {
            gridArea: '1 / 2 / 4 / 4 !important',
          },
        }),
      }}
      components={customSelectComponents}
      onChange={option => {
        if (onChange) {
          onChange(option?.id ?? null, option?.header ?? null)
        }
      }}
      placeholder={placeholder}
    />
  )
}

export default UserSearchBoxV2
