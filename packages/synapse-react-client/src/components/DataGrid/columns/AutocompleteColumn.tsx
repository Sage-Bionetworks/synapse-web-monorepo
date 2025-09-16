import parseFreeTextGivenJsonSchemaType from '@/components/DataGrid/utils/parseFreeTextUsingJsonSchemaType'
import { Autocomplete, TextField, Chip } from '@mui/material'
import { JSONSchema7Type } from 'json-schema'
import { useState } from 'react'
import { CellComponent, CellProps, Column } from 'react-datasheet-grid'

export type AutocompleteOption =
  | string
  | number
  | boolean
  | null
  | Record<string, unknown>
  | Array<unknown>

export type AutocompleteCellProps = CellProps & {
  rowData: AutocompleteOption
  setRowData: (value: AutocompleteOption) => void
  choices: AutocompleteOption[]
  colType?: JSONSchema7Type
}

function castCellValueToString(toCast: any): string {
  if (typeof toCast === 'object') {
    return JSON.stringify(toCast)
  }
  return String(toCast)
}

function AutocompleteCell({
  rowData,
  setRowData,
  choices,
  colType,
}: AutocompleteCellProps) {
  const [localInputState, setLocalInputState] = useState<string>(
    castCellValueToString(rowData),
  )

  return (
    <Autocomplete
      freeSolo
      disablePortal={false}
      options={choices}
      getOptionLabel={option => castCellValueToString(option)}
      value={rowData}
      onInputChange={(_, newInputValue) => {
        setLocalInputState(newInputValue)
      }}
      onChange={(_e, newVal, reason) => {
        if (reason === 'createOption') {
          // The user typed an option that wasn't a defined enum. Try to cast it to the correct type
          setRowData(
            parseFreeTextGivenJsonSchemaType(newVal as string, colType),
          )
        } else {
          // The value was selected, so explicitly set it
          setRowData(newVal)
        }
      }}
      blurOnSelect={true}
      onBlur={() => setRowData(localInputState)}
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
        },
        '& .MuiFormControl-root': { height: '100%' },
      }}
    />
  )
}

export type AutocompleteColumnProps = {
  choices: AutocompleteOption[]
  colType?: JSONSchema7Type
}

export function autocompleteColumn({
  choices,
  colType,
}: AutocompleteColumnProps): Partial<Column> {
  return {
    component: ((props: Omit<AutocompleteCellProps, 'choices'>) => (
      <AutocompleteCell {...props} choices={choices} colType={colType} />
    )) as CellComponent,
    // If we update our enums to support labels, then we can update copy to copy the label and paste to lookup the mapping from label -> value
    copyValue: ({ rowData }) => rowData,
    pasteValue: ({ value }) => value,
    disableKeys: true,
    keepFocus: true,
  }
}

export type AutocompleteMultipleCellProps = CellProps & {
  rowData: AutocompleteOption[]
  setRowData: (value: AutocompleteOption[]) => void
  choices: AutocompleteOption[]
  colType?: JSONSchema7Type
  limitTags?: number
}

function AutocompleteMultipleCell({
  rowData,
  setRowData,
  choices,
  colType,
  limitTags,
}: AutocompleteMultipleCellProps) {
  const [localInputState, setLocalInputState] = useState<string>('')

  return (
    <Autocomplete
      multiple
      freeSolo
      disablePortal={false}
      disableCloseOnSelect
      limitTags={limitTags}
      size="small"
      options={choices}
      getOptionLabel={option => castCellValueToString(option)}
      value={rowData || []}
      onInputChange={(_, newInputValue) => {
        setLocalInputState(newInputValue)
      }}
      onChange={(_e, newVal, reason) => {
        if (reason === 'createOption') {
          const lastValue = newVal[newVal.length - 1] as string
          const parsedValue = parseFreeTextGivenJsonSchemaType(
            lastValue,
            colType,
          )
          const updatedValues = [...newVal.slice(0, -1), parsedValue]
          setRowData(updatedValues)
        } else {
          setRowData(newVal as AutocompleteOption[])
        }
      }}
      onBlur={() => {
        if (localInputState.trim()) {
          const parsedValue = parseFreeTextGivenJsonSchemaType(
            localInputState,
            colType,
          )
          setRowData([...(rowData || []), parsedValue])
          setLocalInputState('')
        }
      }}
      renderValue={(value: readonly string[], getItemProps) =>
        value.map((option: string, index: number) => {
          const { key, ...itemProps } = getItemProps({ index })
          return <Chip label={option} key={key} {...itemProps} />
        })
      }
      renderInput={params => <TextField {...params} />}
      sx={{
        width: '100%',
        height: '100%',
        '& .MuiAutocomplete-inputRoot': {
          padding: '0 10px',
          backgroundColor: 'inherit',
        },
        '& .MuiFormControl-root': { height: '100%' },
      }}
    />
  )
}

export type AutocompleteMultipleColumnProps = {
  choices: AutocompleteOption[]
  colType?: JSONSchema7Type
  limitTags?: number
}

export function autocompleteMultipleColumn({
  choices,
  colType,
  limitTags,
}: AutocompleteMultipleColumnProps): Partial<Column> {
  return {
    component: ((
      props: Omit<AutocompleteMultipleCellProps, 'choices' | 'limitTags'>,
    ) => (
      <AutocompleteMultipleCell
        {...props}
        choices={choices}
        colType={colType}
        limitTags={limitTags}
      />
    )) as CellComponent,
    copyValue: ({ rowData }) => JSON.stringify(rowData || []),
    pasteValue: ({ value }) => {
      try {
        return JSON.parse(value)
      } catch {
        return [value]
      }
    },
    disableKeys: true,
    keepFocus: true,
  }
}
