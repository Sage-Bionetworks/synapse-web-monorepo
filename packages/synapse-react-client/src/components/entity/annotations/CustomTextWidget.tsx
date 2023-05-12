import { Widget, WidgetProps } from '@sage-bionetworks/rjsf-core'
import React from 'react'

/**
 * This TextWidget is almost identical to the rjsf TextWidget, except we handle numbers like strings to prevent issues if
 * the actual annotation data is not a string.
 */
export const CustomTextWidget: Widget = (props: WidgetProps) => {
  const { BaseInput } = props.registry.widgets

  // options.inputType will override the input type determined via schema
  let inputType: string | null = null
  if (props.schema.type === 'number' || props.schema.type === 'integer') {
    inputType = 'text'
  }

  return <BaseInput {...props} options={{ ...props.options, inputType }} />
}

export default CustomTextWidget
