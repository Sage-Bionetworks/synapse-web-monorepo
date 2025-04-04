import {
  FormControl,
  InputLabel,
  Input,
  Box,
  TextField,
  Select,
  MenuItem,
  FormHelperText,
  Button,
} from '@mui/material'
import { useState } from 'react'

type FormComponent = typeof TextField | typeof Select

type FormConfig = {
  componentType: FormComponent
  label: string
  options?: {
    [id: string]: string
  }
  validation?: () => any
  helperText: string
  isRequired: boolean
}

type FormSchema = {
  [fieldId: string]: FormConfig
}

type FormDataRecord = {
  [id: string]: string
}

export type FormProps = {
  fields: FormSchema
  onSubmit: () => any
}

export default function Form({ fields, onSubmit }: FormProps) {
  const [formData, setFormData] = useState<FormDataRecord>({})

  const handleChange = (id: string, value: string) => {
    setFormData((prev: FormDataRecord) => {
      if (prev[id] === value) return prev
      return { ...prev, [id]: value }
    })
  }

  const createField = (id: string, config: FormConfig) => {
    if (config.componentType === Select) {
      return (
        <FormControl fullWidth margin="normal" required={config.isRequired}>
          <InputLabel id={`${id}-label`}>{config.label}</InputLabel>
          <Select
            labelId={`${id}-label`}
            id={id}
            value={formData[id]}
            // label={config.label}
            onChange={e => handleChange(id, e.target.value)}
          >
            {Object.entries(config.options ?? {}).map(([label, value]) => (
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
          id={id}
          value={formData[id]}
          label={config.label}
          onChange={e => handleChange(id, e.target.value)}
          required={config.isRequired}
          helperText={config.helperText}
        />
      )
    }
    return
  }

  return (
    <Box component="form" onSubmit={onSubmit} noValidate sx={{ maxWidth: 400 }}>
      {Object.entries(fields).map(([id, config]) => createField(id, config))}
      <Button onSubmit={onSubmit}>Submit</Button>
    </Box>
  )
}
