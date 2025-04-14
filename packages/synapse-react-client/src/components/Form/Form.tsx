import {
  FormControl,
  InputLabel,
  Box,
  TextField,
  Select,
  MenuItem,
  FormHelperText,
  Button,
  useTheme,
} from '@mui/material'
import { FormEvent, useState } from 'react'

type FieldType = typeof TextField | typeof Select

type FieldConfig = {
  componentType: FieldType
  label: string
  helperText: string | React.ReactElement<'span'>
  placeholder: string
  isRequired: boolean
  selections?: {
    [id: string]: string
  } // Dropdown options for 'Select' componentTypes
  additionalProperties?: {
    [id: string]: any
  } // intentionally flexible to allow any additional properties to be added to form components
  validationFunc?: (input: string) => boolean
}

export type FieldSchema = {
  [fieldId: string]: FieldConfig
}

export type FormData = {
  [id: string]: string
}

export type FormProps = {
  fields: FieldSchema
  onSubmit: (data: FormData) => boolean
}

type ValidFields = {
  [id: string]: boolean
}

export default function Form({ fields, onSubmit }: FormProps) {
  const blankFormData = Object.fromEntries(
    Object.keys(fields).map(id => [id, '']),
  )
  const [formData, setFormData] = useState<FormData>(blankFormData)

  // Keeps track of validity of entries for each field
  const defaultValidFields = Object.fromEntries(
    Object.keys(fields).map(id => [id, true]),
  )
  const [validFields, setValidFields] =
    useState<ValidFields>(defaultValidFields)

  const handleChange = (id: string, value: string) => {
    // if field was in an error state, clear the error
    setValidFields((prev: ValidFields) => {
      if (prev[id]) return prev
      return { ...prev, [id]: true }
    })

    setFormData((prev: FormData) => {
      if (prev[id] === value) return prev
      return { ...prev, [id]: value }
    })
  }

  const handleSubmission = (evt: FormEvent) => {
    evt.preventDefault()

    // Validity checks
    const newValidFields: ValidFields = defaultValidFields
    for (const id of Object.keys(formData)) {
      if (fields[id].isRequired && formData[id].length === 0) {
        newValidFields[id] = false
      }
      if (fields[id].validationFunc) {
        newValidFields[id] = fields[id].validationFunc(formData[id])
      }
    }

    setValidFields(() => {
      return newValidFields
    })

    let wasSuccessful = false
    // Prevent submission if not all entries are valid
    if (!Object.values(newValidFields).some(value => value === false)) {
      wasSuccessful = onSubmit(formData)
    }

    // Clear the form on successful submission
    if (wasSuccessful) {
      setFormData(blankFormData)
    }
  }

  const createField = (id: string, config: FieldConfig) => {
    if (config.componentType === Select) {
      return (
        <FormControl
          fullWidth
          margin="normal"
          required={config.isRequired}
          key={id}
        >
          <InputLabel
            id={`${id}-label`}
            sx={{ position: 'relative', bottom: '20px' }} // places label above the field, to match styling of the other fields
            error={!validFields[id]}
          >
            {config.label}
          </InputLabel>
          <Select
            fullWidth
            labelId={`${id}-label`}
            id={id}
            value={formData[id]}
            onChange={e => handleChange(id, e.target.value)}
            displayEmpty
            {...config.additionalProperties}
            renderValue={selected => {
              // Default option to display if nothing is selected
              if (!selected) {
                return (
                  <MenuItem value="" disabled>
                    {config.placeholder}
                  </MenuItem>
                )
              }
              return selected
            }}
          >
            {Object.entries(config.selections ?? {}).map(([label, value]) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText id={`${id}-helper-text`}>
            {config.helperText}
          </FormHelperText>
        </FormControl>
      )
    } else if (config.componentType === TextField) {
      return (
        <TextField
          key={id}
          id={id}
          value={formData[id]}
          label={config.label}
          onChange={e => handleChange(id, e.target.value)}
          required={config.isRequired}
          helperText={config.helperText}
          placeholder={config.placeholder}
          error={!validFields[id]}
          fullWidth
          {...config.additionalProperties}
        />
      )
    }
    return
  }

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      sx={{
        width: '100%',
        maxWidth: 700,
        minWidth: { xs: '90%', sm: 400 },
        rowGap: '20px',
      }}
      onSubmit={evt => handleSubmission(evt)}
      noValidate
    >
      {Object.entries(fields).map(([id, config]) => createField(id, config))}
      <Button type="submit">Submit</Button>
    </Box>
  )
}
