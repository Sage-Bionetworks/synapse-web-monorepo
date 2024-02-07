import {
  ADDITIONAL_PROPERTY_FLAG,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  TranslatableString,
  WrapIfAdditionalTemplateProps,
} from '@rjsf/utils'
import React, { FocusEventHandler } from 'react'
import { Grid, TextField } from '@mui/material'

/** The `WrapIfAdditional` component is used by the `FieldTemplate` to rename, or remove properties that are
 * part of an `additionalProperties` part of a schema.
 *
 * @param props - The `WrapIfAdditionalProps` for this component
 */
export default function WrapIfAdditionalTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WrapIfAdditionalTemplateProps<T, S, F>) {
  const {
    id,
    classNames,
    disabled,
    label,
    onKeyChange,
    readonly,
    required,
    schema,
    children,
    registry,
  } = props
  const { translateString } = registry
  const keyLabel = translateString(TranslatableString.KeyLabel, [''])
  const additional = ADDITIONAL_PROPERTY_FLAG in schema

  if (!additional) {
    return <div className={classNames}>{children}</div>
  }

  const handleBlur: FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target }) => {
    if (target) onKeyChange(target.value)
  }

  return (
    <div className={classNames}>
      <Grid container my={1} columnSpacing={2} rowSpacing={0}>
        <Grid item xs={3}>
          <TextField
            fullWidth={true}
            required={required}
            label={keyLabel}
            defaultValue={label}
            disabled={disabled || readonly}
            id={`${id}-key`}
            name={`${id}-key`}
            onBlur={!readonly ? handleBlur : undefined}
            type="text"
          />
        </Grid>
        {children}
        {/* All additional properties are treated as arrays, so we don't show a remove button here. */}
        {/* To drop the property, drop the last array item. */}
      </Grid>
    </div>
  )
}
