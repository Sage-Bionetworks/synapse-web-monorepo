import { RJSFInputLabelWrapper } from '@/components/JsonSchemaForm/templates/RJSFInputLabel'
import { CustomFormContext } from '@/components/JsonSchemaForm/CustomFormContext'
import { GridLegacy as Grid, InputLabel } from '@mui/material'
import {
  FieldTemplateProps,
  FormContextType,
  getTemplate,
  getUiOptions,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'

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
    hideError,
    rawErrors,
  } = props
  const uiOptions = getUiOptions<T, S, F>(uiSchema)
  const hasDescription = Boolean(uiOptions.description ?? schema.description)

  // The real checkbox widget (formContext.booleanWidget === 'checkbox') renders its own label
  // via MUI's FormControlLabel; only the Yes/No select needs FieldTemplate to force one, since
  // RJSF hides labels for boolean schemas by default.
  const usesRealCheckbox =
    (registry.formContext as CustomFormContext | undefined)?.booleanWidget ===
    'checkbox'
  const WrapIfAdditionalTemplate = getTemplate<
    'WrapIfAdditionalTemplate',
    T,
    S,
    F
  >('WrapIfAdditionalTemplate', registry, uiOptions)

  if (hidden) {
    return <div className="hidden">{children}</div>
  }
  const classNamesList: string[] = ['form-group', props.classNames || '']
  if (!hideError && rawErrors && rawErrors.length > 0) {
    classNamesList.push('has-error')
  }

  return (
    <WrapIfAdditionalTemplate
      {...props}
      classNames={classNamesList.join(' ').trim()}
    >
      <RJSFInputLabelWrapper<T, S, F>
        // RJSF hides labels for boolean schemas by default; the Yes/No select widget doesn't
        // render its own label, so force one on — the real checkbox widget does, so don't.
        hideLabel={
          !(displayLabel || (schema.type === 'boolean' && !usesRealCheckbox))
        }
        fieldLabel={
          <InputLabel htmlFor={id}>
            {label}
            {required && <span className="required">*</span>}
          </InputLabel>
        }
        description={hasDescription ? description : undefined}
        registry={registry}
      >
        {children}
        <Grid item xs={12}>
          {errors}
        </Grid>
      </RJSFInputLabelWrapper>
      {help}
    </WrapIfAdditionalTemplate>
  )
}
