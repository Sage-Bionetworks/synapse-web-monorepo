import {
  ArrayFieldTitleProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'
import { InputLabel } from '@mui/material'

/**
 * Custom title template for array fields.
 *
 * @param props
 * @returns
 */
export default function ArrayFieldTitleTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ArrayFieldTitleProps<T, S, F>) {
  const { title, required } = props
  return (
    <InputLabel>
      {title}
      {required && <span className="required">*</span>}
    </InputLabel>
  )
}
