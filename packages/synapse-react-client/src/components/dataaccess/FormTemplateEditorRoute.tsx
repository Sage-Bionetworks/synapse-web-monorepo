import { Link as MuiLink } from '@mui/material'
import { Link, useNavigate, useParams } from 'react-router'
import { FormTemplateEditor } from '../FormTemplateEditor/FormTemplateEditor'
import { FORM_TEMPLATES_PATH } from './FormTemplateTable'

/**
 * Route element for creating a form template (no `templateId` param) or editing an existing one.
 * Saving or cancelling returns to the template list.
 */
export function FormTemplateEditorRoute() {
  const { templateId } = useParams<{ templateId: string }>()
  const navigate = useNavigate()
  const goToList = () => void navigate(FORM_TEMPLATES_PATH)

  return (
    <>
      <MuiLink
        component={Link}
        to={FORM_TEMPLATES_PATH}
        sx={{ display: 'block', mb: 2 }}
      >
        Form Templates
      </MuiLink>
      <FormTemplateEditor
        // Reset editor state when navigating between templates
        key={templateId ?? 'new'}
        templateId={templateId}
        onSaved={goToList}
        onCancel={goToList}
      />
    </>
  )
}

export default FormTemplateEditorRoute
