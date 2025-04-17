import ArrayFieldDescriptionTemplate from '@/components/JsonSchemaForm/templates/ArrayFieldDescriptionTemplate'
import ArrayFieldItemTemplate from '@/components/JsonSchemaForm/templates/ArrayFieldItemTemplate'
import ArrayFieldTemplate from '@/components/JsonSchemaForm/templates/ArrayFieldTemplate'
import ArrayFieldTitleTemplate from '@/components/JsonSchemaForm/templates/ArrayFieldTitleTemplate'
import BaseInputTemplate from '@/components/JsonSchemaForm/templates/BaseInputTemplate'
import ButtonTemplate from '@/components/JsonSchemaForm/templates/ButtonTemplate'
import DescriptionFieldTemplate from '@/components/JsonSchemaForm/templates/DescriptionFieldTemplate'
import ErrorListTemplate from '@/components/JsonSchemaForm/templates/ErrorListTemplate'
import FieldErrorTemplate from '@/components/JsonSchemaForm/templates/FieldErrorTemplate'
import { FieldTemplate } from '@/components/JsonSchemaForm/templates/FieldTemplate'
import { BooleanWidget } from '@/components/JsonSchemaForm/widgets/BooleanWidget'
import { DateTimeWidget } from '@/components/JsonSchemaForm/widgets/DateTimeWidget'
import { SelectWidget } from '@/components/JsonSchemaForm/widgets/SelectWidget'
import { Optional } from '@/utils/types/Optional'
import RJSFForm, { FormProps } from '@rjsf/core'
import Form from '@rjsf/mui'
import { GenericObjectType, RJSFSchema } from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'
import { Ref } from 'react'

/**
 * Wrapper around react-jsonschema-form that supplies default styling/templates/widgets for
 * Synapse/Portals
 */
export function JsonSchemaForm<T = any>(
  props: Optional<FormProps, 'validator'> & {
    formRef?: Ref<RJSFForm<T, RJSFSchema, GenericObjectType>>
  },
) {
  return (
    <Form
      ref={props.formRef}
      validator={validator}
      className="JsonSchemaForm"
      {...props}
      templates={{
        ArrayFieldDescriptionTemplate: ArrayFieldDescriptionTemplate,
        ArrayFieldItemTemplate: ArrayFieldItemTemplate,
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
        DateTimeWidget: DateTimeWidget,
        CheckboxWidget: BooleanWidget,
        SelectWidget: SelectWidget,
        ...props.widgets,
      }}
    />
  )
}
