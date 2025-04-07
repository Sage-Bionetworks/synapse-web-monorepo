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
  helperText: string
  placeholder?: string
  isRequired: boolean
  selections?: {
    [id: string]: string
  }
  additionalOptions?: {
    [id: string]: any
  }
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

export default function Form({ fields, onSubmit }: FormProps) {
  const [formData, setFormData] = useState<FormData>({})
  const theme = useTheme()

  const handleChange = (id: string, value: string) => {
    setFormData((prev: FormData) => {
      if (prev[id] === value) return prev
      return { ...prev, [id]: value }
    })
  }

  const handleSubmission = (evt: FormEvent) => {
    evt.preventDefault()
    const wasSuccessful = onSubmit(formData)

    if (wasSuccessful) {
      setFormData({})
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
            sx={{ position: 'relative', bottom: '20px' }}
          >
            {config.label}
          </InputLabel>
          <Select
            fullWidth
            labelId={`${id}-label`}
            id={id}
            value={formData[id] || ''}
            onChange={e => handleChange(id, e.target.value)}
            displayEmpty
            renderValue={selected => {
              if (!selected) {
                return (
                  <span style={{ color: theme.palette.text.disabled }}>
                    Select a Category
                  </span>
                )
              }
              return selected
            }}
            {...config.additionalOptions}
          >
            <MenuItem value="" disabled>
              Select a Category
            </MenuItem>
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
          value={formData[id] || ''}
          label={config.label}
          onChange={e => handleChange(id, e.target.value)}
          required={config.isRequired}
          helperText={config.helperText}
          placeholder={config?.placeholder}
          fullWidth
          {...config.additionalOptions}
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
