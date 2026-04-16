import {
  FormStep,
  PreFillScope,
  SubmissionContext,
} from '@/utils/types/AccessRequirementFormTypes'
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material'
import {
  FIELD_TYPE_LABELS,
  FieldType,
  VisualFieldConfig,
} from './formFieldEditorUtils'

type FormFieldVisualBuilderProps = {
  config: VisualFieldConfig
  onChange: (config: VisualFieldConfig) => void
  formSteps: FormStep[]
  /** Metadata fields stored on the FormField (not on the schema). */
  metadata: {
    name: string
    stepId: string | null
    orderWeight: number
    preFillScope: PreFillScope
    submissionContext: SubmissionContext
  }
  onMetadataChange: (metadata: FormFieldVisualBuilderProps['metadata']) => void
}

export function FormFieldVisualBuilder({
  config,
  onChange,
  formSteps,
  metadata,
  onMetadataChange,
}: FormFieldVisualBuilderProps) {
  const handleFieldTypeChange = (fieldType: FieldType) => {
    onChange({
      ...config,
      fieldType,
      enumOptions:
        fieldType === 'select' && config.enumOptions.length === 0
          ? ['Option 1']
          : config.enumOptions,
    })
  }

  const handleAddEnumOption = () => {
    onChange({
      ...config,
      enumOptions: [
        ...config.enumOptions,
        `Option ${config.enumOptions.length + 1}`,
      ],
    })
  }

  const handleRemoveEnumOption = (index: number) => {
    onChange({
      ...config,
      enumOptions: config.enumOptions.filter((_, i) => i !== index),
    })
  }

  const handleEnumOptionChange = (index: number, value: string) => {
    const updated = [...config.enumOptions]
    updated[index] = value
    onChange({ ...config, enumOptions: updated })
  }

  return (
    <Stack spacing={2.5}>
      <Typography variant="subtitle2" color="text.secondary">
        Field Configuration
      </Typography>

      <TextField
        label="Internal Name"
        value={metadata.name}
        onChange={e => onMetadataChange({ ...metadata, name: e.target.value })}
        size="small"
        helperText="Used by ACT to identify and reuse this field. Not shown to requesters."
        fullWidth
      />

      <TextField
        select
        label="Field Type"
        value={config.fieldType}
        onChange={e => handleFieldTypeChange(e.target.value as FieldType)}
        size="small"
        fullWidth
      >
        {(Object.entries(FIELD_TYPE_LABELS) as [FieldType, string][]).map(
          ([value, label]) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ),
        )}
      </TextField>

      <TextField
        label="Title"
        value={config.title}
        onChange={e => onChange({ ...config, title: e.target.value })}
        size="small"
        helperText="Display label shown to the user filling out the form."
        fullWidth
      />

      <TextField
        label="Description"
        value={config.description}
        onChange={e => onChange({ ...config, description: e.target.value })}
        size="small"
        multiline
        rows={2}
        helperText="Help text or instructions shown below the field."
        fullWidth
      />

      {config.fieldType === 'select' && (
        <Box>
          <Typography variant="body2" gutterBottom>
            Dropdown Options
          </Typography>
          <Stack spacing={1}>
            {config.enumOptions.map((option, index) => (
              <Stack
                key={index}
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <TextField
                  value={option}
                  onChange={e => handleEnumOptionChange(index, e.target.value)}
                  size="small"
                  fullWidth
                />
                <IconButton
                  size="small"
                  onClick={() => handleRemoveEnumOption(index)}
                  disabled={config.enumOptions.length <= 1}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Stack>
            ))}
            <Button
              size="small"
              startIcon={<AddIcon />}
              onClick={handleAddEnumOption}
            >
              Add Option
            </Button>
          </Stack>
        </Box>
      )}

      <Typography variant="subtitle2" color="text.secondary" sx={{ pt: 1 }}>
        Form Placement
      </Typography>

      <TextField
        select
        label="Form Step"
        value={metadata.stepId ?? ''}
        onChange={e =>
          onMetadataChange({
            ...metadata,
            stepId: e.target.value || null,
          })
        }
        size="small"
        fullWidth
      >
        <MenuItem value="">
          <em>None (General)</em>
        </MenuItem>
        {formSteps.map(step => (
          <MenuItem key={step.id} value={step.id}>
            {step.title}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Order Weight"
        type="number"
        value={metadata.orderWeight}
        onChange={e =>
          onMetadataChange({
            ...metadata,
            orderWeight: parseInt(e.target.value) || 0,
          })
        }
        size="small"
        helperText="Lower values appear earlier in the form."
        fullWidth
      />

      <TextField
        select
        label="Pre-Fill Scope"
        value={metadata.preFillScope}
        onChange={e =>
          onMetadataChange({
            ...metadata,
            preFillScope: e.target.value as PreFillScope,
          })
        }
        size="small"
        fullWidth
      >
        <MenuItem value="RENEWAL">
          Renewal (from prior submission on same AR)
        </MenuItem>
        <MenuItem value="USER">User (from any prior submission)</MenuItem>
        <MenuItem value="NONE">None</MenuItem>
      </TextField>

      <TextField
        select
        label="Submission Context"
        value={metadata.submissionContext}
        onChange={e =>
          onMetadataChange({
            ...metadata,
            submissionContext: e.target.value as SubmissionContext,
          })
        }
        size="small"
        fullWidth
      >
        <MenuItem value="ALWAYS">Always</MenuItem>
        <MenuItem value="RENEWAL_ONLY">Renewal Only</MenuItem>
      </TextField>
    </Stack>
  )
}
