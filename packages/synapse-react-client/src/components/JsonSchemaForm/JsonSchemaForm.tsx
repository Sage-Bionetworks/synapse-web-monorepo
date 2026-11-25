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
import { FormProps, FormRef } from '@rjsf/core'
import Form from '@rjsf/mui'
import {
  DefaultFormStateBehavior,
  PartialTemplatesType,
  RegistryWidgetsType,
  ThemePresentation,
  Widget,
  WidgetProps,
} from '@rjsf/utils'
import { jsonSchemaFormValidator } from '@/components/JsonSchemaForm/JsonSchemaFormValidator'
import { Ref, useMemo } from 'react'
import styles from './JsonSchemaForm.module.scss'

/** Yes/No radios, or a single checkbox for a boolean that must be true. */
function RequesterBooleanWidget(props: WidgetProps) {
  return isMustCheckBoolean(props.schema) ? (
    <MustCheckWidget {...props} />
  ) : (
    <YesNoRadioWidget {...props} />
  )
}

type BooleanWidgetMode = NonNullable<CustomFormContext['booleanWidget']>

/** The widget that replaces RJSF's `CheckboxWidget` for each `booleanWidget` mode, if any. */
const BOOLEAN_WIDGETS: Record<BooleanWidgetMode, Widget | undefined> = {
  yesNoSelect: BooleanWidget,
  yesNoRadio: RequesterBooleanWidget,
  checkbox: undefined,
}

const TEMPLATES: PartialTemplatesType = {
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
}

/**
 * Which parts of a field our templates and widgets draw. `@rjsf/mui` declares that its widgets draw their own
 * labels, but our `FieldTemplate` draws the label (with its description control) above every widget, and our
 * `BaseInputTemplate` and `SelectWidget` draw none. Only MUI's real checkbox draws its own label and description.
 * The replacements registered under `CheckboxWidget` (a true/false select, Yes/No radios) leave an unchecked box's
 * `false` out of it, so a required boolean is still required.
 */
const TEMPLATE_LABELLED_BOOLEAN: ThemePresentation = {
  default: { label: 'template' },
  widgets: {
    CheckboxWidget: {
      label: 'template',
      description: 'template',
      uncheckedIsFalse: false,
    },
  },
}
const PRESENTATIONS: Record<BooleanWidgetMode, ThemePresentation> = {
  yesNoSelect: TEMPLATE_LABELLED_BOOLEAN,
  yesNoRadio: TEMPLATE_LABELLED_BOOLEAN,
  checkbox: {
    default: { label: 'template' },
    widgets: { CheckboxWidget: { label: 'self', description: 'self' } },
  },
}

export type JsonSchemaFormProps<T = any> = Optional<
  FormProps<T>,
  'validator'
> & {
  formRef?: Ref<FormRef<T>>
}

/**
 * Wrapper around react-jsonschema-form that supplies default styling/templates/widgets for
 * Synapse/Portals.
 *
 * RJSF compares its props shallowly, so pass stable `templates`, `widgets`, `fields`, `formContext`, `uiSchema` and
 * callbacks (define them outside the component, or memoize them).
 */
export function JsonSchemaForm<T = any>(props: JsonSchemaFormProps<T>) {
  const {
    formRef,
    templates,
    widgets,
    defaultFormStateBehavior,
    ...formProps
  } = props
  const booleanWidgetMode =
    (props.formContext as CustomFormContext | undefined)?.booleanWidget ??
    'yesNoSelect'
  const booleanWidget = BOOLEAN_WIDGETS[booleanWidgetMode]

  const mergedTemplates = useMemo(
    () => ({ ...TEMPLATES, ...templates }),
    [templates],
  )
  const mergedWidgets = useMemo<RegistryWidgetsType>(
    () => ({
      ...(booleanWidget ? { CheckboxWidget: booleanWidget } : {}),
      DateTimeWidget: DateTimeWidget,
      SelectWidget: SelectWidget,
      ...widgets,
    }),
    [booleanWidget, widgets],
  )
  // RJSF fills a required boolean with `false` unless told to skip it, which would answer "No" for the user and keep
  // `required` from catching an unanswered question
  const mergedDefaultFormStateBehavior = useMemo<DefaultFormStateBehavior>(
    () => ({ requiredBooleanDefault: 'skip', ...defaultFormStateBehavior }),
    [defaultFormStateBehavior],
  )

  return (
    <Form<T>
      ref={formRef}
      validator={jsonSchemaFormValidator}
      className={styles.jsonSchemaForm}
      // The inputs carry schema limits such as `min`/`max`; without this, the browser's own
      // validation would block `submit()` before RJSF could show its messages.
      noHtml5Validate
      presentation={PRESENTATIONS[booleanWidgetMode]}
      {...formProps}
      defaultFormStateBehavior={mergedDefaultFormStateBehavior}
      templates={mergedTemplates}
      widgets={mergedWidgets}
    />
  )
}
