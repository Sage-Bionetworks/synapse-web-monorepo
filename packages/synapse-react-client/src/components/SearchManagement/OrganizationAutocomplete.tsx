import { useListOrganizations } from '@/synapse-queries/jsonschema/useListOrganizations'
import { Alert, Autocomplete, TextField } from '@mui/material'
import { ReactNode, useMemo } from 'react'

export type OrganizationAutocompleteProps = {
  label: string
  value: string | null
  onChange: (organizationName: string | null) => void
  required?: boolean
  disabled?: boolean
  helperText?: ReactNode
}

/**
 * Picks an Organization (shared with JSON Schemas) by name.
 */
export function OrganizationAutocomplete({
  label,
  value,
  onChange,
  required,
  disabled,
  helperText,
}: OrganizationAutocompleteProps) {
  const { data: organizations = [], isLoading, error } = useListOrganizations()

  const options = useMemo(() => {
    const names = organizations.map(organization => organization.name!)
    // A resource's Organization must stay displayable even if it isn't in the fetched list.
    return value === null || names.includes(value) ? names : [value, ...names]
  }, [organizations, value])

  if (error) {
    return <Alert severity="error">{error.reason}</Alert>
  }

  return (
    <Autocomplete<string>
      options={options}
      value={value}
      onChange={(_event, next) => onChange(next)}
      loading={isLoading}
      disabled={disabled}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          required={required}
          helperText={helperText}
        />
      )}
    />
  )
}
