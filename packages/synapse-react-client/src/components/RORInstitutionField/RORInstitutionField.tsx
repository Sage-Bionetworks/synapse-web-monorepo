import { ROROrganization } from '@/ror-client/types/ROROrganization'
import { useSearchRegistry } from '@/synapse-queries/ror'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { TextFieldProps } from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useDebouncedEffect } from '@react-hookz/web'
import noop from 'lodash-es/noop'
import { useState } from 'react'

export type RORLinkedInstitutionFieldProps = {
  value?: string
  onChange?: (value: string | undefined, rorIdentifier?: string) => void
  error?: TextFieldProps['error']
}

function getOrganizationDisplayName(organization: ROROrganization) {
  return organization.names.find(name => name.types.includes('ror_display'))!
}

/**
 * Provides a text field for entering an organization name with an autocomplete dropdown of ROR organizations, fetched from the
 * ROR API.
 * @param props
 * @constructor
 */
export default function RORInstitutionField(
  props: RORLinkedInstitutionFieldProps,
) {
  const { value: valueFromProps, onChange = noop, error } = props

  const isControlled = valueFromProps !== undefined

  const [internalInputValue, setInternalInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  useDebouncedEffect(
    () => {
      if (isControlled) {
        setSearchValue(valueFromProps || '')
      } else {
        setSearchValue(internalInputValue)
      }
    },
    [valueFromProps, internalInputValue, isControlled],
    500,
  )

  const { data: searchResults, isLoading: isLoadingSearch } = useSearchRegistry(
    `${searchValue}`,
    {
      enabled: searchValue.length > 0,
    },
  )

  return (
    <Autocomplete
      freeSolo
      loading={isLoadingSearch}
      onInputChange={(_event, newValue) => {
        if (!isControlled) {
          setInternalInputValue(newValue)
        }
        onChange(newValue)
      }}
      renderInput={params => (
        <TextField
          {...params}
          label="Current Affiliation"
          placeholder={'Type to search, or enter free text.'}
          error={error}
        />
      )}
      inputValue={isControlled ? valueFromProps : internalInputValue}
      getOptionLabel={option =>
        typeof option === 'string'
          ? option
          : getOrganizationDisplayName(option).value
      }
      renderOption={(props, option) => {
        const displayName = getOrganizationDisplayName(option).value
        const otherNames = option.names.filter(
          name => !name.types.includes('ror_display'),
        )
        return (
          <Box component="li" {...props}>
            <div>
              <Typography variant={'body1'}>{displayName}</Typography>
              <Typography
                variant={'smallText1'}
                sx={{
                  color: 'grey.700',
                  fontStyle: 'italic',
                  fontSize: '11px',
                }}
              >
                {otherNames.map(name => name.value).join(', ')}
              </Typography>
            </div>
          </Box>
        )
      }}
      filterOptions={x => x}
      options={searchResults?.items || []}
    />
  )
}
