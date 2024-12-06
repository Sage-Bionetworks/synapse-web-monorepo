import { Widget, WidgetProps } from '@rjsf/utils'

/**
 * Select widget compatible with react-jsonschema-form booleans
 */
export const BooleanWidget: Widget = (props: WidgetProps) => {
  const { SelectWidget } = props.registry.widgets

  const options = {
    enumOptions: [
      { value: true, label: 'true' },
      { value: false, label: 'false' },
    ],
  }
  return <SelectWidget {...props} options={options} />
}
