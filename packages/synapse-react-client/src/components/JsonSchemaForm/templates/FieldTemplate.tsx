import { RJSFInputLabelWrapper } from '@/components/JsonSchemaForm/templates/RJSFInputLabel'
import { CustomFormContext } from '@/components/JsonSchemaForm/CustomFormContext'
import { isMustCheckBoolean } from '@/components/JsonSchemaForm/mustCheckBoolean'
import { Grid, InputLabel } from '@mui/material'
import {
  FieldTemplateProps,
  FormContextType,
  getTemplates,
  getUiOptions,
  RJSFSchema,
  StrictRJSFSchema,
  templateDrawsLabel,
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
    registry,
    uiSchema,
    schema,
    hasErrors,
  } = props
  const uiOptions = getUiOptions<T, S, F>(uiSchema, registry.globalUiOptions)
  const hasDescription = Boolean(uiOptions.description ?? schema.description)

  // In the requester's form, a must-be-true boolean is a checkbox labelled by the field's title,
  // so only its description is shown here.
  const booleanWidget = (registry.formContext as CustomFormContext | undefined)
    ?.booleanWidget
  const labelledByMustCheck =
    booleanWidget === 'yesNoRadio' && isMustCheckBoolean(schema as RJSFSchema)
  const { WrapIfAdditionalTemplate } = getTemplates<T, S, F>(
    registry,
    uiOptions,
  )

  if (hidden) {
    return <div className="hidden">{children}</div>
  }
  const classNamesList: string[] = ['form-group', props.classNames || '']
  if (hasErrors) {
    classNamesList.push('has-error')
  }

  return (
    <WrapIfAdditionalTemplate
      {...props}
      classNames={classNamesList.join(' ').trim()}
    >
      <RJSFInputLabelWrapper<T, S, F>
        // `JsonSchemaForm`'s presentation has this template label every field but MUI's real
        // checkbox, which labels itself.
        hideLabel={!templateDrawsLabel<T, S, F>(props)}
        fieldLabel={
          labelledByMustCheck ? null : (
            <InputLabel htmlFor={id}>
              {label}
              {required && <span className="required">*</span>}
            </InputLabel>
          )
        }
        description={hasDescription ? description : undefined}
        registry={registry}
      >
        {children}
        <Grid size={12}>{errors}</Grid>
      </RJSFInputLabelWrapper>
      {help}
    </WrapIfAdditionalTemplate>
  )
}
