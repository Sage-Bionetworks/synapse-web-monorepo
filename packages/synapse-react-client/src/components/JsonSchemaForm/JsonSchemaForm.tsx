import ArrayFieldDescriptionTemplate from '@/components/JsonSchemaForm/templates/ArrayFieldDescriptionTemplate'
import ArrayFieldItemButtonsTemplate from '@/components/JsonSchemaForm/templates/ArrayFieldItemButtonTemplate'
import ArrayFieldItemTemplate from '@/components/JsonSchemaForm/templates/ArrayFieldItemTemplate'
import ArrayFieldTemplate from '@/components/JsonSchemaForm/templates/ArrayFieldTemplate'
import ArrayFieldTitleTemplate from '@/components/JsonSchemaForm/templates/ArrayFieldTitleTemplate'
import BaseInputTemplate from '@/components/JsonSchemaForm/templates/BaseInputTemplate'
import ButtonTemplate from '@/components/JsonSchemaForm/templates/ButtonTemplate'
import { CustomFormContext } from '@/components/JsonSchemaForm/CustomFormContext'
import DescriptionFieldTemplate from '@/components/JsonSchemaForm/templates/DescriptionFieldTemplate'
import ErrorListTemplate from '@/components/JsonSchemaForm/templates/ErrorListTemplate'
import FieldErrorTemplate from '@/components/JsonSchemaForm/templates/FieldErrorTemplate'
import { FieldTemplate } from '@/components/JsonSchemaForm/templates/FieldTemplate'
import { isMustCheckBoolean } from '@/components/JsonSchemaForm/mustCheckBoolean'
import { BooleanWidget } from '@/components/JsonSchemaForm/widgets/BooleanWidget'
import { DateTimeWidget } from '@/components/JsonSchemaForm/widgets/DateTimeWidget'
import { MustCheckWidget } from '@/components/JsonSchemaForm/widgets/MustCheckWidget'
import { SelectWidget } from '@/components/JsonSchemaForm/widgets/SelectWidget'
import { YesNoRadioWidget } from '@/components/JsonSchemaForm/widgets/YesNoRadioWidget'
import { Optional } from '@/utils/types/Optional'
import RJSFForm, { FormProps } from '@rjsf/core'
import Form from '@rjsf/mui'
import { GenericObjectType, RJSFSchema, Widget, WidgetProps } from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'
import { Ref } from 'react'
import styles from './JsonSchemaForm.module.scss'

/** Yes/No radios, or a single checkbox for a boolean that must be true. */
function RequesterBooleanWidget(props: WidgetProps) {
  return isMustCheckBoolean(props.schema) ? (
    <MustCheckWidget {...props} />
  ) : (
    <YesNoRadioWidget {...props} />
  )
}

/** The widget that replaces RJSF's `CheckboxWidget` for each `booleanWidget` mode, if any. */
const BOOLEAN_WIDGETS: Record<
  NonNullable<CustomFormContext['booleanWidget']>,
  Widget | undefined
> = {
  yesNoSelect: BooleanWidget,
  yesNoRadio: RequesterBooleanWidget,
  checkbox: undefined,
}

/**
 * Wrapper around react-jsonschema-form that supplies default styling/templates/widgets for
 * Synapse/Portals
 */
export function JsonSchemaForm<T = any>(
  props: Optional<FormProps, 'validator'> & {
    formRef?: Ref<RJSFForm<T, RJSFSchema, GenericObjectType>>
  },
) {
  const booleanWidget =
    BOOLEAN_WIDGETS[
      (props.formContext as CustomFormContext | undefined)?.booleanWidget ??
        'yesNoSelect'
    ]
  return (
    <Form
      ref={props.formRef}
      validator={validator}
      className={styles.jsonSchemaForm}
      {...props}
      templates={{
        ArrayFieldDescriptionTemplate: ArrayFieldDescriptionTemplate,
        ArrayFieldItemTemplate: ArrayFieldItemTemplate,
        ArrayFieldItemButtonsTemplate: ArrayFieldItemButtonsTemplate,
        ArrayFieldTemplate: ArrayFieldTemplate,
        ArrayFieldTitleTemplate: ArrayFieldTitleTemplate,
        BaseInputTemplate: BaseInputTemplate,
        FieldErrorTemplate: FieldErrorTemplate,
        FieldTemplate: FieldTemplate,
        ButtonTemplates: ButtonTemplate,
        DescriptionFieldTemplate: DescriptionFieldTemplate,
        ErrorListTemplate: ErrorListTemplate,
        ...props.templates,
      }}
      widgets={{
        ...(booleanWidget ? { CheckboxWidget: booleanWidget } : {}),
        DateTimeWidget: DateTimeWidget,
        SelectWidget: SelectWidget,
        ...props.widgets,
      }}
    />
  )
}
