import { useState } from 'react'
import {
  FieldTemplateProps,
  FormContextType,
  getTemplate,
  getUiOptions,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'
import { HelpOutline } from '@mui/icons-material'
import { Collapse, Grid, IconButton, InputLabel, Tooltip } from '@mui/material'

// TODO: Wrap and pull out class names to remove bootstrap classes
//  https://rjsf-team.github.io/react-jsonschema-form/docs/advanced-customization/custom-templates/#baseinputtemplate

export function FieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FieldTemplateProps<T, S, F>) {
  const {
    id,
    label,
    children,
    errors,
    help,
    description,
    hidden,
    required,
    displayLabel,
    registry,
    uiSchema,
    schema,
  } = props
  const uiOptions = getUiOptions<T, S, F>(uiSchema)
  const WrapIfAdditionalTemplate = getTemplate<
    'WrapIfAdditionalTemplate',
    T,
    S,
    F
  >('WrapIfAdditionalTemplate', registry, uiOptions)
  const [showDetails, setShowDetails] = useState(false)

  if (hidden) {
    return <div className="hidden">{children}</div>
  }
  return (
    <WrapIfAdditionalTemplate {...props}>
      {/* RJSF hides labels for boolean checkboxes, but since we replaced checkboxes with a custom component, we want to show them */}
      {(displayLabel || schema.type === 'boolean') && (
        <div className="LabelContainer">
          <InputLabel htmlFor={id}>
            {label}
            {required && <span className="required">*</span>}
          </InputLabel>
          <Tooltip title={'More Info'}>
            <IconButton
              onClick={e => {
                e.preventDefault()
                setShowDetails(!showDetails)
              }}
              aria-expanded={showDetails}
              size={'small'}
            >
              <HelpOutline
                color={'primary'}
                sx={{ width: '16px', height: '16px' }}
              />
            </IconButton>
          </Tooltip>
        </div>
      )}
      {children}
      <Grid item xs={12}>
        {errors}
      </Grid>
      <Collapse className="field-description" in={showDetails}>
        {description}
      </Collapse>
      {help}
    </WrapIfAdditionalTemplate>
  )
}
