import RadioGroupWithOtherString from '@/components/form/RadioGroupWithOtherString'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import { CsvTableDescriptor } from '@sage-bionetworks/synapse-client'
import noop from 'lodash-es/noop'
import { useEffect, useImperativeHandle, useState, Ref } from 'react'

export type CsvTableDescriptorFormHandle = {
  /** Call to retrieve the current form data */
  getFormData: () => CsvTableDescriptor
}

export type CsvTableDescriptorFormProps = {
  ref?: Ref<CsvTableDescriptorFormHandle>
  /** The current value of the form, if a controlled form */
  value?: CsvTableDescriptor
  /** Invoked when the form data changes */
  onChange?: (descriptor: CsvTableDescriptor) => void
}

/**
 * A form to describe a CsvTableDescriptor
 */
export default function CsvTableDescriptorForm(
  props: CsvTableDescriptorFormProps,
) {
  const { value: valueFromProps, onChange = noop } = props
  const [localStateValue, setLocalStateValue] = useState<CsvTableDescriptor>({
    separator: ',',
    quoteCharacter: '"',
    escapeCharacter: '\\',
    lineEnd: '\n',
    isFirstLineHeader: true,
  })

  const value = valueFromProps ?? localStateValue

  useEffect(() => {
    onChange(localStateValue)
  }, [localStateValue, onChange])

  useImperativeHandle(
    props.ref,
    () => ({
      getFormData: () => localStateValue,
    }),
    [localStateValue],
  )

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <InputLabel>Separator</InputLabel>
        <RadioGroupWithOtherString
          radioGroupProps={{ row: true, name: 'separator' }}
          value={value.separator ?? ','}
          onChange={value =>
            setLocalStateValue(current => ({
              ...current,
              separator: value,
            }))
          }
          options={[
            { value: ',', label: 'Comma' },
            {
              value: '\t',
              label: 'Tab',
            },
            {
              value: ';',
              label: 'Semicolon',
            },
          ]}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <InputLabel>Escape Character</InputLabel>
        <RadioGroupWithOtherString
          radioGroupProps={{ row: true, name: 'escapeCharacter' }}
          value={value.escapeCharacter ?? '\\'}
          onChange={value =>
            setLocalStateValue(current => ({
              ...current,
              escapeCharacter: value,
            }))
          }
          options={[{ value: '\\', label: 'Backslash' }]}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <FormControlLabel
          control={<Checkbox />}
          label={'First line is the header'}
          checked={localStateValue.isFirstLineHeader}
          onChange={(_e, checked) => {
            setLocalStateValue(current => ({
              ...current,
              isFirstLineHeader: checked,
            }))
          }}
        />
      </Grid>
    </Grid>
  )
}
