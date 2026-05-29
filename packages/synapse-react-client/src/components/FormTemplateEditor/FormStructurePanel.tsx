import { FormTemplateStep } from '@/utils/types/AccessRequirementFormTypes'
import { Alert, Box, Button, Paper, Stack, Typography } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { RJSFSchema } from '@rjsf/utils'
import { useMemo } from 'react'
import { StepCard } from './StepCard'
import { moveItem } from './utils'

const EMPTY_STEP: FormTemplateStep = {
  title: 'New Step',
  description: '',
  fields: [],
}

export type FormStructurePanelProps = {
  steps: FormTemplateStep[]
  jsonSchema: RJSFSchema
  onStepsChange: (next: FormTemplateStep[]) => void
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
  onStepsChange,
}: FormStructurePanelProps) {
  const usedKeys = useMemo(() => {
    const keys = new Set<string>()
    for (const step of steps) {
      for (const f of step.fields) {
        if (f.schemaPath.startsWith('/')) {
          const seg = f.schemaPath.slice(1)
          if (seg && !seg.includes('/')) keys.add(seg)
        }
      }
    }
    return keys
  }, [steps])

  const unboundProperties = useMemo(() => {
    const properties = (jsonSchema.properties ?? {}) as Record<
      string,
      RJSFSchema
    >
    return Object.entries(properties)
      .filter(([key]) => !usedKeys.has(key))
      .map(([key, prop]) => ({
        propertyKey: key,
        displayLabel: prop.title ? `${prop.title} (/${key})` : `/${key}`,
      }))
  }, [jsonSchema.properties, usedKeys])

  const handleStepChange = (idx: number, patch: Partial<FormTemplateStep>) => {
    onStepsChange(steps.map((s, i) => (i === idx ? { ...s, ...patch } : s)))
  }

  const handleAddStep = () => {
    onStepsChange([...steps, { ...EMPTY_STEP, fields: [] }])
  }

  const handleRemoveStep = (idx: number) => {
    onStepsChange(steps.filter((_, i) => i !== idx))
  }

  const handleMoveStep = (idx: number, direction: -1 | 1) => {
    onStepsChange(moveItem(steps, idx, direction))
  }

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

      {unboundProperties.length > 0 && (
        <Alert severity="warning" sx={{ mb: 1.5 }}>
          {unboundProperties.length}{' '}
          {unboundProperties.length === 1 ? 'field is' : 'fields are'} not yet
          bound to a step. Use a step's "Bind field" dropdown to add{' '}
          {unboundProperties.length === 1 ? 'it' : 'them'}.
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
              key={stepIdx}
              step={step}
              stepIndex={stepIdx}
              isFirst={stepIdx === 0}
              isLast={stepIdx === steps.length - 1}
              unboundProperties={unboundProperties}
              jsonSchema={jsonSchema}
              defaultExpanded={stepIdx === 0}
              onChange={patch => handleStepChange(stepIdx, patch)}
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
