import { Widgets } from '@rjsf/mui'
import { RJSFSchema, WidgetProps } from '@rjsf/utils'

// See PORTALS-3246
export default function SynapseFormCheckboxWidget<
  T = any,
  S = RJSFSchema,
  F = any,
>(props: WidgetProps) {
  return <Widgets.CheckboxWidget {...props} hideLabel />
}
