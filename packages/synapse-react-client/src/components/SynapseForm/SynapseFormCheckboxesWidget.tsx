import { Widgets } from '@rjsf/mui'
import { RJSFSchema, WidgetProps } from '@rjsf/utils'

// See PORTALS-3246
export default function SynapseFormCheckboxesWidget<
  T = any,
  S = RJSFSchema,
  F = any,
>(props: WidgetProps) {
  return <Widgets.CheckboxesWidget {...props} hideLabel />
}
