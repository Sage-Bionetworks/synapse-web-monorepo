import React, { useMemo, useState } from 'react'
import { Autocomplete, Box, TextField, Typography } from '@mui/material'
import { useDebouncedEffect } from '@react-hookz/web'
import { useGetOrganization, useSearchRegistry } from '../../synapse-queries'
import { ROROrganization } from '../../ror-client/types/ROROrganization'

type RORLinkedInstitutionFieldProps = {
  value: string
  onChange: (value: string) => void
}

function getOrganizationDisplayName(organization: ROROrganization) {
  return organization.names.filter(name =>
    name.types.includes('ror_display'),
  )[0]
}

export default function RORInstitutionField(
  props: RORLinkedInstitutionFieldProps,
) {
  const { value = '', onChange } = props
  const [searchValue, setSearchValue] = useState('')

  useDebouncedEffect(
    () => {
      setSearchValue(value)
    },
    [value],
    500,
  )

  let rorId: string | null = null
  if (value.startsWith('https://ror.org/')) {
    rorId = value.split('https://ror.org/')[1]
  }

  const { data: organization, isLoading: isLoadingSelectedOrganization } =
    useGetOrganization(rorId || '', {
      enabled: !!rorId,
    })

  const { data: searchResults, isLoading: isLoadingSearch } = useSearchRegistry(
    searchValue,
    {
      enabled: !rorId && searchValue.length > 0,
    },
  )

  const inputValue = useMemo(() => {
    if (rorId) {
      if (isLoadingSelectedOrganization) {
        return 'Loading...'
      } else if (organization) {
        return getOrganizationDisplayName(organization).value
      }
    }
    return value
  }, [isLoadingSelectedOrganization, organization, rorId, value])

  return (
    <Autocomplete
      freeSolo
      loading={isLoadingSearch}
      onInputChange={(_event, newValue) => onChange(newValue)}
      onChange={(_event, newValue) => () => {
        if (typeof newValue === 'string' || newValue === null) {
          onChange(newValue || '')
        } else {
          onChange(`https://ror.org/${newValue.id}`)
        }
      }}
      renderInput={params => <TextField {...params} label="Organization" />}
      inputValue={inputValue}
      getOptionLabel={option =>
        typeof option === 'string' ? option : option.id
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
