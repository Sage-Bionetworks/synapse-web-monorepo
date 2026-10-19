import { FormTemplateStep } from '@sage-bionetworks/synapse-client'
import { Alert, Box, Button, Paper, Stack, Typography } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import pluralize from 'pluralize'
import { RJSFSchema } from '@rjsf/utils'
import {
  propertyKeyToPointer,
  ResolvedSchemaProperty,
} from '@/utils/jsonschema/submissionContext'
import { StepCard } from './StepCard'
import {
  BIND_FIELD_LABEL,
  createEditableStep,
  EditableFormTemplateStep,
  moveItem,
} from './utils'

export type FormStructurePanelProps = {
  steps: EditableFormTemplateStep[]
  jsonSchema: RJSFSchema
  /** Properties not yet bound to any step in the template. */
  unboundProperties: ResolvedSchemaProperty[]
  /** The FormTemplate's id, if it has been saved. Threaded down to file-field template uploads. */
  formTemplateId: string | undefined
  onStepsChange: (next: EditableFormTemplateStep[]) => void
  onBindField: (propertyKey: string, stepKey: string) => void
}

/**
 * Right pane: the multi-step form structure. Steps are collapsible cards;
 * each step contains a list of field slots (with inline-expand for slot config)
 * and a "Bind field" dropdown listing any library fields not yet bound to a
 * step.
 */
export function FormStructurePanel({
  steps,
  jsonSchema,
  unboundProperties,
  formTemplateId,
  onStepsChange,
  onBindField,
}: FormStructurePanelProps) {
  const handleStepChange = (idx: number, patch: Partial<FormTemplateStep>) => {
    onStepsChange(steps.map((s, i) => (i === idx ? { ...s, ...patch } : s)))
  }

  const handleAddStep = () => {
    onStepsChange([...steps, createEditableStep()])
  }

  const handleRemoveStep = (idx: number) => {
    onStepsChange(steps.filter((_, i) => i !== idx))
  }

  const handleMoveStep = (idx: number, direction: -1 | 1) => {
    onStepsChange(moveItem(steps, idx, direction))
  }

  const requiredUnbound = unboundProperties.filter(p => p.isRequired)
  const optionalUnbound = unboundProperties.filter(p => !p.isRequired)

  return (
    <Paper variant="outlined" sx={{ p: 2, height: '100%' }}>
      <Box
        sx={{
          mb: 1.5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 1,
        }}
      >
        <Box>
          <Typography variant="subtitle2">Steps</Typography>
          <Typography variant="caption" color="text.secondary">
            Arrange fields into pages requesters will fill out in order.
          </Typography>
        </Box>
        <Button
          size="small"
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={handleAddStep}
        >
          Add step
        </Button>
      </Box>

      {requiredUnbound.length > 0 && (
        <Alert severity="error" sx={{ mb: 1.5 }}>
          {pluralize('required field', requiredUnbound.length, true)}{' '}
          {pluralize('is', requiredUnbound.length)} not bound to a step and must
          be bound before saving:{' '}
          {requiredUnbound
            .map(p => p.subSchema.title ?? propertyKeyToPointer(p.propertyKey))
            .join(', ')}
          .
        </Alert>
      )}

      {optionalUnbound.length > 0 && (
        <Alert severity="warning" sx={{ mb: 1.5 }}>
          {pluralize('field', optionalUnbound.length, true)}{' '}
          {pluralize('is', optionalUnbound.length)} not yet bound to a step. Use
          a step's "{BIND_FIELD_LABEL}" dropdown to add{' '}
          {optionalUnbound.length === 1 ? 'it' : 'them'}.
        </Alert>
      )}

      <Stack spacing={1.5}>
        {steps.length === 0 ? (
          <Alert severity="info">
            No steps yet. Click "Add step" to create the first one.
          </Alert>
        ) : (
          steps.map((step, stepIdx) => (
            <StepCard
              key={step.uiKey}
              step={step}
              stepIndex={stepIdx}
              isFirst={stepIdx === 0}
              isLast={stepIdx === steps.length - 1}
              unboundProperties={unboundProperties}
              jsonSchema={jsonSchema}
              formTemplateId={formTemplateId}
              defaultExpanded={stepIdx === 0}
              onChange={patch => handleStepChange(stepIdx, patch)}
              onBindField={propertyKey => onBindField(propertyKey, step.uiKey)}
              onMoveUp={() => handleMoveStep(stepIdx, -1)}
              onMoveDown={() => handleMoveStep(stepIdx, 1)}
              onRemove={() => handleRemoveStep(stepIdx)}
            />
          ))
        )}
      </Stack>
    </Paper>
  )
}
