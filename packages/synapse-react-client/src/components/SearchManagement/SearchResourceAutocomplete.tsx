import { useListAllSearchManagementResources } from '@/synapse-queries/searchmanagement/useSearchManagement'
import {
  SearchManagementResource,
  SearchManagementResourceType,
} from '@/synapse-queries/searchmanagement/SearchManagementResourceType'
import { Alert, Autocomplete, TextField } from '@mui/material'
import { ReactNode, useMemo } from 'react'
import { getQualifiedName } from './SearchManagementUtils'

export type SearchResourceAutocompleteProps = {
  resourceType: SearchManagementResourceType
  label: ReactNode
  /**
   * Whether `value` is the resource's ID (e.g. SearchIndex.searchConfigurationId) or its qualified name
   * (e.g. the target of a `$ref`).
   */
  valueType: 'id' | 'qualifiedName'
  value: string | null
  onChange: (value: string | null) => void
  required?: boolean
  disabled?: boolean
  helperText?: ReactNode
}

/**
 * Picks a saved Search Management resource of one type from every Organization.
 */
export function SearchResourceAutocomplete({
  resourceType,
  label,
  valueType,
  value,
  onChange,
  required,
  disabled,
  helperText,
}: SearchResourceAutocompleteProps) {
  const {
    data: resources = [],
    isLoading,
    error,
  } = useListAllSearchManagementResources(resourceType)

  const resourcesByValue = useMemo(
    () =>
      new Map<string, SearchManagementResource>(
        resources.map(resource => [
          valueType === 'id' ? resource.id! : getQualifiedName(resource),
          resource,
        ]),
      ),
    [resources, valueType],
  )

  const options = useMemo(() => {
    const values = [...resourcesByValue.keys()]
    // Keep a value that isn't in the list (e.g. a dangling reference) selectable so it is visible and clearable.
    return value === null || resourcesByValue.has(value)
      ? values
      : [value, ...values]
  }, [resourcesByValue, value])

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
      getOptionLabel={option => {
        const resource = resourcesByValue.get(option)
        return resource ? getQualifiedName(resource) : option
      }}
      renderOption={(props, option) => {
        const resource = resourcesByValue.get(option)
        return (
          <li {...props} key={option}>
            <div>
              <div>{resource ? getQualifiedName(resource) : option}</div>
              {resource?.description && (
                <small style={{ opacity: 0.7 }}>{resource.description}</small>
              )}
            </div>
          </li>
        )
      }}
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
