import { Widget, WidgetProps } from '@rjsf/utils'

/**
 * Yes/No radio group for react-jsonschema-form booleans, storing `true`/`false`. The "Yes"/"No"
 * labels are the `enumOptions` that RJSF's `BooleanField` supplies. `FieldTemplate` renders the
 * field's label and description, so the radio group renders none of its own.
 */
export const YesNoRadioWidget: Widget = (props: WidgetProps) => {
  const { RadioWidget } = props.registry.widgets
  return (
    <RadioWidget
      {...props}
      hideLabel
      options={{ ...props.options, inline: true }}
    />
  )
}
