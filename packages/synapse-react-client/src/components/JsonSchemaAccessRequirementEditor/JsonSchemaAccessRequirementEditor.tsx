import {
  FormField,
  FormFieldReference,
  FormStep,
  JsonSchemaAccessRequirement,
} from '@/utils/types/AccessRequirementFormTypes'
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { useCallback, useMemo, useState } from 'react'
import { AccessRequirementFormPreview } from './AccessRequirementFormPreview'
import { FormFieldSelector } from './FormFieldSelector'
import { SelectedFieldsList } from './SelectedFieldsList'

export type JsonSchemaAccessRequirementEditorProps = {
  /** Existing AR to edit, or undefined for creating a new one. */
  initialAR?: JsonSchemaAccessRequirement
  /** All available form fields. */
  availableFields: FormField[]
  /** All available form steps. */
  formSteps: FormStep[]
  /** Called when the user saves. */
  onSave: (ar: Partial<JsonSchemaAccessRequirement>) => void
  /** Called when the user cancels. */
  onCancel?: () => void
}

export function JsonSchemaAccessRequirementEditor({
  initialAR,
  availableFields,
  formSteps,
  onSave,
  onCancel,
}: JsonSchemaAccessRequirementEditorProps) {
  const [name, setName] = useState(initialAR?.name ?? '')
  const [expirationDays, setExpirationDays] = useState(() => {
    if (initialAR?.expirationPeriod) {
      return Math.round(initialAR.expirationPeriod / (1000 * 60 * 60 * 24))
    }
    return 365
  })
  const [isCertifiedUserRequired, setIsCertifiedUserRequired] = useState(
    initialAR?.isCertifiedUserRequired ?? false,
  )
  const [isValidatedProfileRequired, setIsValidatedProfileRequired] = useState(
    initialAR?.isValidatedProfileRequired ?? false,
  )
  const [isTwoFaRequired, setIsTwoFaRequired] = useState(
    initialAR?.isTwoFaRequired ?? false,
  )

  // Track selected field IDs in order
  const [selectedFieldIds, setSelectedFieldIds] = useState<string[]>(() => {
    if (initialAR?.formFields) {
      return initialAR.formFields.map(ref => ref.fieldId)
    }
    return []
  })

  // Track which fields are required (by field ID)
  const [requiredFieldIds, setRequiredFieldIds] = useState<Set<string>>(() => {
    if (initialAR?.formFields) {
      return new Set(
        initialAR.formFields
          .filter(ref => ref.required)
          .map(ref => ref.fieldId),
      )
    }
    return new Set()
  })

  const [previewOpen, setPreviewOpen] = useState(false)

  const selectedFieldIdSet = useMemo(
    () => new Set(selectedFieldIds),
    [selectedFieldIds],
  )

  const fieldLookup = useMemo(() => {
    const map = new Map<string, FormField>()
    for (const field of availableFields) {
      map.set(field.id, field)
    }
    return map
  }, [availableFields])

  const selectedFields = useMemo(
    () =>
      selectedFieldIds
        .map(id => fieldLookup.get(id))
        .filter((f): f is FormField => f != null),
    [selectedFieldIds, fieldLookup],
  )

  const handleToggleField = useCallback((fieldId: string) => {
    setSelectedFieldIds(prev => {
      if (prev.includes(fieldId)) {
        return prev.filter(id => id !== fieldId)
      }
      return [...prev, fieldId]
    })
  }, [])

  const handleRemoveField = useCallback((fieldId: string) => {
    setSelectedFieldIds(prev => prev.filter(id => id !== fieldId))
  }, [])

  const handleToggleRequired = useCallback((fieldId: string) => {
    setRequiredFieldIds(prev => {
      const next = new Set(prev)
      if (next.has(fieldId)) {
        next.delete(fieldId)
      } else {
        next.add(fieldId)
      }
      return next
    })
  }, [])

  // Build FormFieldReferences for schema generation and saving
  const fieldReferences: FormFieldReference[] = useMemo(
    () =>
      selectedFieldIds.map(fieldId => ({
        fieldId,
        fieldVersionNumber: fieldLookup.get(fieldId)?.versionNumber ?? 1,
        required: requiredFieldIds.has(fieldId),
      })),
    [selectedFieldIds, fieldLookup, requiredFieldIds],
  )

  const handleSave = () => {
    onSave({
      ...initialAR,
      name,
      formFields: fieldReferences,
      expirationPeriod: expirationDays * 1000 * 60 * 60 * 24,
      isCertifiedUserRequired,
      isValidatedProfileRequired,
      isTwoFaRequired,
    })
  }

  return (
    <>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          {initialAR ? 'Edit Access Requirement' : 'Create Access Requirement'}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        {/* AR Metadata */}
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          General Settings
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="Access Requirement Name"
              value={name}
              onChange={e => setName(e.target.value)}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="Expiration Period (days)"
              type="number"
              value={expirationDays}
              onChange={e => setExpirationDays(parseInt(e.target.value) || 0)}
              size="small"
              fullWidth
              helperText="0 = never expires"
            />
          </Grid>
          <Grid size={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isCertifiedUserRequired}
                  onChange={e => setIsCertifiedUserRequired(e.target.checked)}
                  size="small"
                />
              }
              label="Require Certified User"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isValidatedProfileRequired}
                  onChange={e =>
                    setIsValidatedProfileRequired(e.target.checked)
                  }
                  size="small"
                />
              }
              label="Require Validated Profile"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isTwoFaRequired}
                  onChange={e => setIsTwoFaRequired(e.target.checked)}
                  size="small"
                />
              }
              label="Require Two-Factor Auth"
            />
          </Grid>
        </Grid>

        <Divider sx={{ mb: 2 }} />

        {/* Field Selection */}
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Form Fields
        </Typography>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <FormFieldSelector
              availableFields={availableFields}
              selectedFieldIds={selectedFieldIdSet}
              formSteps={formSteps}
              onToggleField={handleToggleField}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <SelectedFieldsList
              selectedFields={selectedFields}
              requiredFieldIds={requiredFieldIds}
              onRemove={handleRemoveField}
              onToggleRequired={handleToggleRequired}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="outlined"
            onClick={() => setPreviewOpen(true)}
            disabled={selectedFields.length === 0}
          >
            Preview Form
          </Button>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {onCancel && (
              <Button variant="outlined" onClick={onCancel}>
                Cancel
              </Button>
            )}
            <Button
              variant="contained"
              onClick={handleSave}
              disabled={!name || selectedFields.length === 0}
            >
              {initialAR ? 'Save Changes' : 'Create Access Requirement'}
            </Button>
          </Box>
        </Box>
      </Paper>

      <AccessRequirementFormPreview
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        selectedFields={selectedFields}
        fieldReferences={fieldReferences}
        formSteps={formSteps}
      />
    </>
  )
}
