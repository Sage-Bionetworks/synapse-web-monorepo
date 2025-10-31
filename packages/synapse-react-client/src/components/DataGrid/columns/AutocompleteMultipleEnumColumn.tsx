import parseFreeTextGivenJsonSchemaType from '@/components/DataGrid/utils/parseFreeTextUsingJsonSchemaType'
import { Autocomplete, TextField, Tooltip } from '@mui/material'
import { JSONSchema7Type } from 'json-schema'
import { useEffect, useRef, useState } from 'react'
import { CellComponent, Column } from 'react-datasheet-grid'
import {
  AutocompleteOption,
  AutocompleteCellProps,
  castCellValueToString,
} from './AutocompleteColumn'
import { GridAutocompleteChip } from './GridAutocompleteChip'
import isNil from 'lodash-es/isNil'
import isEqual from 'lodash-es/isEqual'

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

function createSafeRowData(
  rowData: AutocompleteMultipleEnumOption,
): AutocompleteMultipleEnumOption[] {
  if (Array.isArray(rowData)) {
    return rowData
  } else if (isNil(rowData)) {
    return []
  } else {
    return [rowData]
  }
}

function AutocompleteMultipleEnumCell({
  rowData,
  setRowData,
  choices,
  colType,
  limitTags = 2,
  active,
  stopEditing,
  focus,
}: AutocompleteMultipleEnumCellProps) {
  const [localInputState, setLocalInputState] = useState<string>('')

  // Local state to programmatically control the Autocomplete's dropdown
  const [open, setOpen] = useState(false)
  const inputRef = useRef<HTMLDivElement>(null)

  // This useEffect is the solution.
  // It syncs the dropdown's open state with the grid's active state.
  useEffect(() => {
    if (active) {
      // Cell just became active: open the menu and focus the input.
      setOpen(true)
      // Use a brief timeout to ensure the input is rendered and focusable
      setTimeout(() => {
        inputRef.current?.querySelector('input')?.focus()
      }, 0)
    } else {
      // Cell just became *inactive*: force the menu to close.
      // This is what fires when you click another cell.
      setOpen(false)
    }
  }, [active]) // This effect re-runs every time the 'active' prop changes

  const safeRowData = createSafeRowData(rowData)
  const optionsWithLabels = choices.map(createOptionFromValue)
  const selectedOptions = safeRowData.map(createOptionFromValue)
  const effectiveLimitTags = active ? -1 : limitTags

  // Create tooltip content showing all values
  const tooltipContent =
    safeRowData.length > 0
      ? safeRowData.map(item => castCellValueToString(item)).join(',')
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
        ref={inputRef}
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
            return isEqual(optionValue, valueValue)
          }}
          open={open}
          onOpen={() => {
            // Only allow opening if the cell is active
            if (active) {
              setOpen(true)
            }
          }}
          onClose={() => {
            // When the component *itself* decides to close (e.g., user hits Escape),
            // we close the menu AND tell the grid to stop editing.
            setOpen(false)
            stopEditing()
          }}
          value={selectedOptions}
          inputValue={localInputState}
          onInputChange={(_, newInputValue) => {
            setLocalInputState(newInputValue)
          }}
          onChange={(_e, newVal, _reason) => {
            // Handle both selection/deselection and free text creation the same way
            const values = (newVal || []).map(item => {
              return typeof item === 'string'
                ? parseFreeTextGivenJsonSchemaType(item, colType)
                : item.value
            })
            setRowData(values)
            setLocalInputState('')
          }}
          onBlur={() => {
            if (localInputState.trim()) {
              const parsedValue = parseFreeTextGivenJsonSchemaType(
                localInputState,
                colType,
              )
              setRowData([...safeRowData, parsedValue])
              setLocalInputState('')
            }
          }}
          renderValue={(tagValue, getTagProps) =>
            tagValue.map((option, index) => {
              const { key, ...tagProps } = getTagProps({ index })
              const optionValue =
                typeof option === 'string' ? option : option.value
              return (
                <GridAutocompleteChip
                  key={key}
                  option={optionValue}
                  active={active}
                  {...tagProps}
                />
              )
            })
          }
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
              overflowX: 'hidden',
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
    copyValue: ({ rowData }) => {
      // Convert array to comma-separated string
      const safeRowData = createSafeRowData(rowData)
      return safeRowData.map(item => castCellValueToString(item)).join(',')
    },
    pasteValue: ({ value }) => {
      if (typeof value !== 'string') {
        return value
      }

      // Split by comma or tab and clean up values
      const delimiters = /[,\t]/
      const parsedValues = value
        .split(delimiters)
        .map(item => item.trim())
        .filter(item => item.length > 0)
        .map(item => parseFreeTextGivenJsonSchemaType(item, colType))
        .filter(item => item !== null && item !== undefined)

      return parsedValues.length > 0 ? parsedValues : []
    },
    disableKeys: true,
    keepFocus: true,
    ...(dynamicHeight && {
      cellClassName: ({ rowData }) => {
        const safeRowData = createSafeRowData(rowData)
        return safeRowData.length > 3
          ? 'multi-value-cell-large'
          : 'multi-value-cell'
      },
    }),
  }
}
