import { FormTemplatePreview } from '@/components/FormTemplateEditor/FormTemplatePreview'
import { useGetRegisteredSchema } from '@/synapse-queries/jsonschema/useSchema'
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Skeleton,
} from '@mui/material'
import { RJSFSchema } from '@rjsf/utils'
import { FormTemplate } from '@sage-bionetworks/synapse-client'

export type FormTemplatePreviewDialogProps = {
  open: boolean
  onClose: () => void
  template: FormTemplate
}

/** Previews the form that a FormTemplate version presents to a requester. */
export function FormTemplatePreviewDialog(
  props: FormTemplatePreviewDialogProps,
) {
  const { open, onClose, template } = props

  const {
    data: schema,
    isLoading,
    error,
  } = useGetRegisteredSchema(template.schema$id, { enabled: open })

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        Preview: {template.name} (version {template.versionNumber})
      </DialogTitle>
      <DialogContent>
        {isLoading && <Skeleton variant="rounded" height={200} />}
        {error && <Alert severity="error">{error.reason}</Alert>}
        {schema && (
          <FormTemplatePreview
            template={template}
            jsonSchema={schema as RJSFSchema}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}
