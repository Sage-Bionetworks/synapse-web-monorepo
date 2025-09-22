import parseFreeTextGivenJsonSchemaType from '@/components/DataGrid/utils/parseFreeTextUsingJsonSchemaType'
import { Autocomplete, TextField, Tooltip } from '@mui/material'
import { JSONSchema7Type } from 'json-schema'
import { useState } from 'react'
import { CellComponent, Column } from 'react-datasheet-grid'
import {
  AutocompleteOption,
  AutocompleteCellProps,
  castCellValueToString,
} from './AutocompleteColumn'

export type AutocompleteMultipleEnumOption =
  | AutocompleteOption
  | unknown
  | unknown[]

export type AutocompleteMultipleEnumCellProps = Omit<
  AutocompleteCellProps,
  'choices'
> & {
  choices: AutocompleteMultipleEnumOption[]
  limitTags?: number
}

type EnumOption = {
  label: string
  value: AutocompleteMultipleEnumOption
}

function createOptionFromValue(
  value: AutocompleteMultipleEnumOption,
): EnumOption {
  return {
    label: castCellValueToString(value),
    value: value,
  }
}

// When using freeSolo options, we need to cast the string input to the correct type based on colType
function castStringToType(
  value: string,
  colType?: JSONSchema7Type,
): AutocompleteMultipleEnumOption {
  if (!colType) {
    return parseFreeTextGivenJsonSchemaType(value, colType)
  }

  switch (colType) {
    case 'boolean[]':
      if (value.toLowerCase() === 'true') return true
      if (value.toLowerCase() === 'false') return false
      // Fallback to parseFreeTextGivenJsonSchemaType for edge cases
      return parseFreeTextGivenJsonSchemaType(value, colType)

    case 'number[]':
    case 'integer[]': {
      const numValue = Number(value)
      return isNaN(numValue)
        ? parseFreeTextGivenJsonSchemaType(value, colType)
        : numValue
    }

    case 'string[]':
      return value

    case 'null[]':
      return value.toLowerCase() === 'null'
        ? null
        : parseFreeTextGivenJsonSchemaType(value, colType)

    default:
      return parseFreeTextGivenJsonSchemaType(value, colType)
  }
}

function AutocompleteMultipleEnumCell({
  rowData,
  setRowData,
  choices,
  colType,
  limitTags = 2,
  active,
}: AutocompleteMultipleEnumCellProps) {
  const [localInputState, setLocalInputState] = useState<string>('')

  const safeRowData = Array.isArray(rowData)
    ? rowData
    : rowData
    ? [rowData]
    : []
  const optionsWithLabels = choices.map(createOptionFromValue)
  const selectedOptions = safeRowData.map(createOptionFromValue)
  const effectiveLimitTags = active ? -1 : limitTags

  // Create tooltip content showing all values
  const tooltipContent =
    safeRowData.length > 0
      ? safeRowData.map(item => castCellValueToString(item)).join(', ')
      : ''

  return (
    <Tooltip
      title={tooltipContent}
      placement="top-start"
      arrow
      enterDelay={500}
      disableHoverListener={active || safeRowData.length <= limitTags}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <Autocomplete
          multiple
          freeSolo
          disablePortal={false}
          limitTags={effectiveLimitTags}
          options={optionsWithLabels}
          getOptionLabel={option => {
            // Handle both string (for freeSolo) and object options
            return typeof option === 'string' ? option : option.label
          }}
          isOptionEqualToValue={(option, value) => {
            // Compare the actual values, not labels
            const optionValue =
              typeof option === 'string' ? option : option.value
            const valueValue = typeof value === 'string' ? value : value.value
            return JSON.stringify(optionValue) === JSON.stringify(valueValue)
          }}
          value={selectedOptions}
          inputValue={localInputState}
          onInputChange={(_, newInputValue) => {
            setLocalInputState(newInputValue)
          }}
          onChange={(_e, newVal, reason) => {
            console.log('onChange reason:', reason, 'newVal:', newVal)
            let values: AutocompleteMultipleEnumOption[] = []

            if (reason === 'createOption') {
              // Handle free text creation
              if (newVal && Array.isArray(newVal)) {
                values = newVal.map(item => {
                  if (typeof item === 'string') {
                    // This is a new free text entry - cast it to the proper type
                    return castStringToType(item, colType)
                  } else {
                    // This is an existing option - use its value
                    return item.value
                  }
                })
              }
            } else {
              // Handle normal selection/deselection (including chip removal)
              values = (newVal || []).map(item => {
                return typeof item === 'string'
                  ? castStringToType(item, colType)
                  : item.value
              })
            }
            setRowData(values)
            setLocalInputState('')
          }}
          onBlur={() => {
            if (localInputState.trim()) {
              const parsedValue = castStringToType(localInputState, colType)
              setRowData([...safeRowData, parsedValue])
              setLocalInputState('')
            }
          }}
          renderInput={params => (
            <TextField
              {...params}
              slotProps={{
                input: {
                  ...params.InputProps,
                  disableUnderline: true,
                  sx: {
                    height: '100%',
                    padding: '0 10px',
                    backgroundColor: 'inherit',
                    borderRadius: 0,
                  },
                },
              }}
            />
          )}
          sx={{
            width: '100%',
            height: '100%',
            '& .MuiAutocomplete-inputRoot': {
              padding: '0 10px',
              backgroundColor: 'inherit',
              // Allow tags to wrap and enable scrolling
              flexWrap: active ? 'wrap' : 'nowrap',
              minHeight: '100%',
              maxHeight: '100%',
              overflowY: active ? 'auto' : 'hidden',
              overflowX: active ? 'hidden' : 'auto',
              // Custom scrollbar styling
              '&::-webkit-scrollbar': {
                width: '6px',
                height: '6px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#888',
                borderRadius: '3px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: '#555',
              },
            },
            '& .MuiFormControl-root': {
              height: '100%',
            },
            // Adjust chip sizes for better fit
            '& .MuiChip-root': {
              maxWidth: active ? 'none' : '120px',
              fontSize: '0.75rem',
              height: '24px',
              margin: '1px',
              flexShrink: 0, // Prevent chips from shrinking
            },
            // Ensure the tag container is scrollable
            '& .MuiAutocomplete-tag': {
              margin: '1px',
            },
          }}
        />
      </div>
    </Tooltip>
  )
}

export type AutocompleteMultipleEnumColumnProps = {
  choices: AutocompleteMultipleEnumOption[]
  colType?: JSONSchema7Type
  limitTags?: number
  dynamicHeight?: boolean
}

export function autocompleteMultipleEnumColumn({
  choices,
  colType,
  limitTags = 2,
  dynamicHeight = false,
}: AutocompleteMultipleEnumColumnProps): Partial<Column> {
  return {
    component: ((
      props: Omit<AutocompleteMultipleEnumCellProps, 'choices' | 'limitTags'>,
    ) => (
      <AutocompleteMultipleEnumCell
        {...props}
        choices={choices}
        colType={colType}
        limitTags={limitTags}
      />
    )) as CellComponent,
    copyValue: ({ rowData }) => rowData,
    pasteValue: ({ value }) => value,
    disableKeys: true,
    keepFocus: true,
    ...(dynamicHeight && {
      cellClassName: ({ rowData }) => {
        const safeRowData = Array.isArray(rowData)
          ? rowData
          : rowData
          ? [rowData]
          : []
        return safeRowData.length > 3
          ? 'multi-value-cell-large'
          : 'multi-value-cell'
      },
    }),
  }
}
