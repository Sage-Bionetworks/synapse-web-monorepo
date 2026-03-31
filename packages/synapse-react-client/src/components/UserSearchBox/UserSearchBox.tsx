import { useSearchUserGroupHeaders } from '@/synapse-queries'
import { useDebouncedEffect } from '@/utils/hooks/useDebouncedEffect'
import useGetInfoFromIds from '@/utils/hooks/useGetInfoFromIds'
import { Autocomplete, Box, Skeleton, TextField } from '@mui/material'
import { TYPE_FILTER, UserGroupHeader } from '@sage-bionetworks/synapse-types'
import { useMemo, useState } from 'react'
import UserOrTeamBadge from '../UserOrTeamBadge/UserOrTeamBadge'

export type UserSearchBoxProps = {
  /* id for the input element, for associating with a <label> */
  inputId?: string
  /* The initial principal ID (uncontrolled) */
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
  const [defaultUserGroupHeader = undefined] =
    useGetInfoFromIds<UserGroupHeader>({
      ids: defaultValue ? [defaultValue] : [],
      type: 'USER_PROFILE',
    })

  // Resolve controlled string principalId → UserGroupHeader
  const controlledPrincipalId =
    isControlled && typeof valueProp === 'string' ? valueProp : null
  const [resolvedControlledHeader = undefined] =
    useGetInfoFromIds<UserGroupHeader>({
      ids: controlledPrincipalId ? [controlledPrincipalId] : [],
      type: 'USER_PROFILE',
    })

  // Internal state for uncontrolled mode.
  // undefined = user hasn't interacted yet → falls back to defaultUserGroupHeader
  // null      = user explicitly cleared the selection
  // header    = user's current selection
  const [internalValue, setInternalValue] = useState<
    UserGroupHeader | null | undefined
  >(undefined)

  const resolvedValue: UserGroupHeader | null = isControlled
    ? typeof valueProp === 'string'
      ? resolvedControlledHeader ?? null
      : null
    : internalValue !== undefined
    ? internalValue
    : defaultUserGroupHeader ?? null

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

  const isLoadingDefaultValue =
    defaultValue != null &&
    internalValue === undefined &&
    defaultUserGroupHeader === undefined
  const isLoadingControlledValue =
    isControlled &&
    typeof valueProp === 'string' &&
    resolvedControlledHeader === undefined
  if (isLoadingDefaultValue || isLoadingControlledValue) {
    return <Skeleton width="100%" />
  }

  return (
    <Autocomplete<UserGroupHeader, false, false, false>
      value={resolvedValue}
      inputValue={inputValue}
      onInputChange={(_event, newInputValue, reason) => {
        // Only track user-typed input for debounced search. 'reset' (after
        // selection) is intentionally ignored — the text is hidden via
        // color:transparent when showBadge is true, so there's no visual need
        // to reset it.
        if (reason !== 'reset') {
          setInputValue(newInputValue)
        }
      }}
      // When a value is selected, clicking the badge area should re-open the search.
      openOnFocus={resolvedValue !== null}
      onOpen={() => {
        setIsSearching(true)
        // Clear the search text so the user starts with a fresh query.
        setInputValue('')
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
              id: inputId,
              // While the badge is displayed, hide the underlying input text and
              // cursor.
              style: showBadge ? { color: 'transparent' } : undefined,
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
