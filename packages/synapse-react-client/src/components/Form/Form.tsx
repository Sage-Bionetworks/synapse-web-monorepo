import {
  FormControl,
  InputLabel,
  Input,
  Box,
  TextField,
  Select,
  MenuItem,
  FormHelperText,
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
      if (prev[id] === value) return prev // avoid unnecessary state update
      return { ...prev, [id]: value }
    })
  }

  const createField = (id: string, config: FormConfig) => {
    if (config.componentType === Select) {
      return (
        <FormControl fullWidth margin="normal">
          <InputLabel id={`${id}-label`}>{config.label}</InputLabel>
          <Select
            labelId={`${id}-label`}
            id={id}
            value={formData[id]}
            label={config.label}
            onChange={e => handleChange(id, e.target.value)}
          >
            {Object.entries(config.options ?? {}).map(([label, value]) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )
    } else {
      return <div>id</div>
    }
  }

  return (
    <Box component="form" onSubmit={onSubmit} noValidate sx={{ maxWidth: 400 }}>
      {Object.entries(fields).map(([id, config]) => createField(id, config))}
    </Box>
  )
}
