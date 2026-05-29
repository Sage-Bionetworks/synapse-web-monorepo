import { FormTemplatePreview } from '@/components/FormTemplateEditor/FormTemplatePreview'
import {
  FormTemplate,
  JsonSchemaAccessRequirement,
} from '@/utils/types/AccessRequirementFormTypes'
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import { RJSFSchema } from '@rjsf/utils'
import { useMemo, useState } from 'react'

export type JsonSchemaAccessRequirementEditorProps = {
  /** Existing AR to edit, or undefined for creating a new one. */
  initialAR?: JsonSchemaAccessRequirement
  /** All FormTemplates ACT can pick from. */
  availableTemplates: FormTemplate[]
  /** Resolves a registered JSON Schema by its `$id`. */
  resolveJsonSchema: (schema$id: string) => RJSFSchema | undefined
  /** Called when the user saves. */
  onSave: (ar: Partial<JsonSchemaAccessRequirement>) => void
  /** Called when the user cancels. */
  onCancel?: () => void
}

export function JsonSchemaAccessRequirementEditor({
  initialAR,
  availableTemplates,
  resolveJsonSchema,
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

  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(
    initialAR?.formTemplateRef.templateId ?? '',
  )
  const [previewOpen, setPreviewOpen] = useState(false)

  const templateLookup = useMemo(() => {
    const map = new Map<string, FormTemplate>()
    for (const t of availableTemplates) {
      map.set(t.id, t)
    }
    return map
  }, [availableTemplates])

  const selectedTemplate = selectedTemplateId
    ? templateLookup.get(selectedTemplateId)
    : undefined

  const selectedSchema = useMemo(() => {
    if (!selectedTemplate) return undefined
    return resolveJsonSchema(selectedTemplate.schemaRef.$id)
  }, [selectedTemplate, resolveJsonSchema])

  const handleSave = () => {
    if (!selectedTemplate) return
    onSave({
      ...initialAR,
      name,
      formTemplateRef: {
        templateId: selectedTemplate.id,
        templateVersionNumber: selectedTemplate.versionNumber,
      },
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

        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Form Template
        </Typography>

        <TextField
          select
          label="Form Template"
          value={selectedTemplateId}
          onChange={e => setSelectedTemplateId(e.target.value)}
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          helperText="Pick the template to render this AR's data access request form."
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {availableTemplates.map(t => (
            <MenuItem key={t.id} value={t.id}>
              {t.name} (v{t.versionNumber})
            </MenuItem>
          ))}
        </TextField>

        {selectedTemplate && (
          <Alert severity="info" variant="outlined" sx={{ mb: 2 }}>
            Pinned schema: <code>{selectedTemplate.schemaRef.$id}</code> v
            {selectedTemplate.schemaRef.semanticVersion}
            {!selectedSchema && (
              <Typography variant="body2" color="warning.main" sx={{ mt: 0.5 }}>
                Schema body could not be resolved.
              </Typography>
            )}
          </Alert>
        )}

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="outlined"
            onClick={() => setPreviewOpen(true)}
            disabled={!selectedTemplate || !selectedSchema}
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
              disabled={!name || !selectedTemplate}
            >
              {initialAR ? 'Save Changes' : 'Create Access Requirement'}
            </Button>
          </Box>
        </Box>
      </Paper>

      <Dialog
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          Form Preview
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={() => setPreviewOpen(false)} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedTemplate && selectedSchema && (
            <FormTemplatePreview
              template={selectedTemplate}
              jsonSchema={selectedSchema}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
