import RadioGroupWithOtherString from '@/components/form/RadioGroupWithOtherString'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import { CsvTableDescriptor } from '@sage-bionetworks/synapse-client'
import noop from 'lodash-es/noop'
import { useEffect, useImperativeHandle, useState, Ref } from 'react'

export type CsvTableDescriptorFormHandle = {
  getFormData: () => CsvTableDescriptor
}

export type CsvTableDescriptorFormProps = {
  ref?: Ref<CsvTableDescriptorFormHandle>
  onChange?: (descriptor: CsvTableDescriptor) => void
}

export default function CsvTableDescriptorForm(
  props: CsvTableDescriptorFormProps,
) {
  const { onChange = noop } = props
  const [csvTableDescriptor, setCsvTableDescriptor] = useState({
    separator: ',',
    quoteCharacter: '"',
    escapeCharacter: '\\',
    lineEnd: '\n',
    isFirstLineHeader: true,
  })

  useEffect(() => {
    onChange(csvTableDescriptor)
  }, [csvTableDescriptor, onChange])

  useImperativeHandle(
    props.ref,
    () => ({
      getFormData: () => csvTableDescriptor,
    }),
    [csvTableDescriptor],
  )

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <InputLabel>Separator</InputLabel>
        <RadioGroupWithOtherString
          radioGroupProps={{ row: true, name: 'separator' }}
          value={csvTableDescriptor.separator}
          onChange={value =>
            setCsvTableDescriptor(current => ({
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
          value={csvTableDescriptor.escapeCharacter}
          onChange={value =>
            setCsvTableDescriptor(current => ({
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
          checked={csvTableDescriptor.isFirstLineHeader}
          onChange={(_e, checked) => {
            setCsvTableDescriptor(current => ({
              ...current,
              isFirstLineHeader: checked,
            }))
          }}
        />
      </Grid>
    </Grid>
  )
}
