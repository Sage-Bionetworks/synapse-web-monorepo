import {
  isJSONObjectAllPrimitiveKeys,
  isJSONPrimitive,
} from './JSONRendererUtils'
import { JSONPrimitiveRenderer } from './JSONPrimitiveRenderer'
import { JSONArrayRenderer } from './JSONArrayRenderer'
import { JSONObjectRenderer } from './JSONObjectRenderer'
import { ComplexJSONRenderer } from './ComplexJSONRenderer'
import Typography from '@mui/material/Typography'

export type JSONTableCellRendererProps = {
  value: string | null
}

export default function JSONTableCellRenderer(
  props: JSONTableCellRendererProps,
) {
  let value: unknown = props.value
  try {
    if (typeof value === 'string') {
      value = JSON.parse(value)
    }
  } catch (e) {
    console.warn('JSONTableCellRenderer: failed to parse JSON', e)
  }

  if (isJSONPrimitive(value) || value === null) {
    return (
      <Typography variant="smallText1">
        <JSONPrimitiveRenderer value={value} />
      </Typography>
    )
  } else if (Array.isArray(value) && value.every(isJSONPrimitive)) {
    return <JSONArrayRenderer value={value} />
  } else if (
    typeof value === 'object' &&
    // To render a simple flat table, ensure that we have no array/object values
    isJSONObjectAllPrimitiveKeys(value)
  ) {
    return <JSONObjectRenderer value={value} />
  }

  return <ComplexJSONRenderer value={value} />
}
