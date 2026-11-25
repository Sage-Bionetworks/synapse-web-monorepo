import {
  ADDITIONAL_PROPERTY_FLAG,
  additionalKeyId,
  FormContextType,
  hasSchemaMarker,
  RJSFSchema,
  StrictRJSFSchema,
  TranslatableString,
  WrapIfAdditionalTemplateProps,
} from '@rjsf/utils'
import { Grid, TextField } from '@mui/material'

/** The `WrapIfAdditional` component is used by the `FieldTemplate` to rename, or remove properties that are
 * part of an `additionalProperties` part of a schema.
 *
 * @param props - The `WrapIfAdditionalProps` for this component
 */
export default function SynapseAnnotationsWrapIfAdditionalTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WrapIfAdditionalTemplateProps<T, S, F>) {
  const {
    id,
    classNames,
    disabled,
    keyName,
    onKeyRenameBlur,
    readonly,
    required,
    schema,
    children,
    registry,
  } = props
  const { translateString } = registry
  const keyLabel = translateString(TranslatableString.KeyLabel, [''])
  const additional = hasSchemaMarker(schema, ADDITIONAL_PROPERTY_FLAG)

  if (!additional) {
    return <div className={classNames}>{children}</div>
  }

  const keyId = additionalKeyId(id)
  return (
    <div className={classNames}>
      <Grid
        container
        columnSpacing={2}
        rowSpacing={0}
        sx={{
          my: 1,
        }}
      >
        <Grid size={3}>
          <TextField
            // The field keeps its state through a rename, so the uncontrolled input restarts from the key it was given
            key={keyName}
            fullWidth={true}
            required={required}
            label={keyLabel}
            defaultValue={keyName}
            disabled={disabled || readonly}
            id={keyId}
            name={keyId}
            onBlur={!readonly ? onKeyRenameBlur : undefined}
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
