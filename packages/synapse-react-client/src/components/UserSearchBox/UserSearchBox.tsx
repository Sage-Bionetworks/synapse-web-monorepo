import {
  useGetUserGroupHeader,
  useSearchUserGroupHeaders,
} from '@/synapse-queries'
import { useDebouncedEffect } from '@/utils/hooks/useDebouncedEffect'
import { Autocomplete, Box, Skeleton, TextField } from '@mui/material'
import { TYPE_FILTER, UserGroupHeader } from '@sage-bionetworks/synapse-types'
import { useMemo, useState } from 'react'
import UserOrTeamBadge from '../UserOrTeamBadge/UserOrTeamBadge'

export type UserSearchBoxProps = {
  /* id for the input element, for associating with a <label> */
  inputId?: string
  /* The initial principal ID (uncontrolled). Ignored if `value` is provided. */
  defaultValue?: string
  onChange?: (
    principalId: string | null,
    header: UserGroupHeader | null,
  ) => void
  typeFilter?: TYPE_FILTER
  filterPredicate?: (item: UserGroupHeader) => boolean
  placeholder?: string
  autoFocus?: boolean
  /**
   * The principal ID of the currently selected user or team.
   * - `undefined`: uncontrolled — the component manages its own selection state
   * - `null`: controlled with no selection (clears the field)
   * - string: controlled with the given principal ID selected
   */
  value?: string | null
}

/**
 * Autocomplete component used to search for and select a user or team.
 */
function UserSearchBox(props: UserSearchBoxProps) {
  const {
    inputId,
    defaultValue = null,
    onChange,
    filterPredicate,
    typeFilter,
    placeholder,
    autoFocus = false,
    value: valueProp,
  } = props

  const isControlled = valueProp !== undefined

  const [inputValue, setInputValue] = useState('')
  const [debouncedInput, setDebouncedInput] = useState('')
  useDebouncedEffect(
    () => {
      setDebouncedInput(inputValue)
    },
    [inputValue],
    500,
  )

  // Tracks whether the dropdown is open, used to toggle between badge display
  // and text-input search mode.
  const [isSearching, setIsSearching] = useState(false)

  // Resolve defaultValue principalId → UserGroupHeader for the initial uncontrolled state
  const { data: defaultUserGroupHeader, isLoading: isLoadingDefaultValue } =
    useGetUserGroupHeader(defaultValue ?? '', {
      enabled: !!defaultValue && !isControlled,
    })

  // Resolve controlled string principalId → UserGroupHeader
  const controlledPrincipalId =
    isControlled && typeof valueProp === 'string' ? valueProp : null

  const {
    data: resolvedControlledHeader,
    isLoading: isLoadingControlledValue,
  } = useGetUserGroupHeader(controlledPrincipalId ?? '', {
    enabled: !!controlledPrincipalId,
  })

  // Internal state for uncontrolled mode.
  // undefined = user hasn't interacted yet → falls back to defaultUserGroupHeader
  // null      = user explicitly cleared the selection
  // header    = user's current selection
  const [internalValue, setInternalValue] = useState<
    UserGroupHeader | null | undefined
  >(undefined)

  const controlledValue =
    typeof valueProp === 'string' ? resolvedControlledHeader ?? null : null
  const uncontrolledValue =
    internalValue !== undefined ? internalValue : defaultUserGroupHeader ?? null
  const resolvedValue: UserGroupHeader | null = isControlled
    ? controlledValue
    : uncontrolledValue

  // Show the badge in the input field when a value is selected and the user
  // is not actively searching.
  const showBadge = resolvedValue !== null && !isSearching

  const isSearchEnabled = !!debouncedInput
  const { data, isLoading } = useSearchUserGroupHeaders(
    debouncedInput,
    typeFilter,
    {
      enabled: isSearchEnabled,
    },
  )

  const options = useMemo(
    () => (data ?? []).filter(filterPredicate ?? (() => true)),
    [data, filterPredicate],
  )

  const placeholderText = useMemo(() => {
    if (placeholder !== undefined) {
      return placeholder
    } else if (typeFilter == TYPE_FILTER.USERS_ONLY) {
      return 'Name (first and last)'
    } else if (typeFilter == TYPE_FILTER.TEAMS_ONLY) {
      return 'Team name'
    } else {
      return 'Name (first and last) or team name'
    }
  }, [placeholder, typeFilter])

  if (isLoadingDefaultValue || isLoadingControlledValue) {
    return <Skeleton width="100%" />
  }

  return (
    <Autocomplete<UserGroupHeader, false, false, false>
      id={inputId}
      value={resolvedValue}
      inputValue={inputValue}
      onInputChange={(_event, newInputValue, reason) => {
        if (reason === 'selectOption' || reason === 'reset') {
          // After an option is selected/removed, clear the input text so it's ready for the next search.
          setInputValue('')
        } else {
          setInputValue(newInputValue)
        }
      }}
      // When a value is selected, clicking the badge area should re-open the search.
      openOnFocus={resolvedValue !== null}
      onOpen={() => {
        setIsSearching(true)
      }}
      onClose={() => setIsSearching(false)}
      options={options}
      filterOptions={x => x}
      loading={isLoading || inputValue !== debouncedInput}
      isOptionEqualToValue={(option, val) => option.ownerId === val.ownerId}
      getOptionLabel={option => option.userName}
      renderOption={(optionProps, option) => (
        <li {...optionProps} key={option.ownerId}>
          <UserOrTeamBadge
            userGroupHeader={option}
            disableHref
            showFullName
            showCardOnHover={false}
          />
        </li>
      )}
      renderInput={({
        inputProps: inputPropsFromParams,
        InputProps: InputPropsFromParams,
        ...params
      }) => (
        <TextField
          {...params}
          placeholder={showBadge ? undefined : placeholderText}
          autoFocus={autoFocus}
          slotProps={{
            htmlInput: {
              ...inputPropsFromParams,
              // While the badge is displayed, hide the underlying input text and cursor.
              // Merge custom styles with parent styles to preserve mouse selection and other behaviors.
              style: {
                ...inputPropsFromParams.style,
                ...(showBadge ? { color: 'transparent' } : {}),
              },
            },
            input: {
              ...InputPropsFromParams,
              startAdornment: showBadge ? (
                <Box sx={{ ml: 1 }}>
                  <UserOrTeamBadge
                    userGroupHeader={resolvedValue}
                    disableHref
                    showFullName
                    showCardOnHover={false}
                  />
                </Box>
              ) : undefined,
            },
          }}
        />
      )}
      onChange={(_event, newValue) => {
        if (!isControlled) {
          setInternalValue(newValue)
        }
        onChange?.(
          newValue?.ownerId != null ? newValue.ownerId.toString() : null,
          newValue ?? null,
        )
      }}
      noOptionsText={
        isLoading || inputValue !== debouncedInput ? 'Loading…' : 'No options'
      }
      clearOnEscape
    />
  )
}

export default UserSearchBox
