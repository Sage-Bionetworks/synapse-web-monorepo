import Typography from '@mui/material/Typography'
import { JSONPrimitiveType } from './JSONRendererUtils'

type JSONPrimitiveRendererProps = { value: JSONPrimitiveType }

/**
 * Handles rendering a JSON "primitive" value in a Synapse table cell.
 *
 * A JSON primitive value is a string, number, boolean, or null.
 * @param props
 * @constructor
 */
export function JSONPrimitiveRenderer(props: JSONPrimitiveRendererProps) {
  const { value } = props
  if (value === null) {
    return (
      <Typography variant={'smallText1'} className="SRC-inactive">
        {'<null value>'}
      </Typography>
    )
  }
  if (typeof value === 'number') {
    return <>{value.toLocaleString()}</>
  }
  return <>{String(value)}</>
}
