import { RJSFInputLabelWrapper } from '@/components/JsonSchemaForm/templates/RJSFInputLabel'
import Grid from '@mui/material/GridLegacy'
import InputLabel from '@mui/material/InputLabel'
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
        // RJSF hides labels for boolean checkboxes, but since we replaced checkboxes with a custom component, we want to show them
        hideLabel={!(displayLabel || schema.type === 'boolean')}
        fieldLabel={
          <InputLabel htmlFor={id}>
            {label}
            {required && <span className="required">*</span>}
          </InputLabel>
        }
        description={description}
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
