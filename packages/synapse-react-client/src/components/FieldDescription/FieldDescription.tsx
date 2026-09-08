import { ReactNode } from 'react'
import styles from './FieldDescription.module.scss'

export type FieldDescriptionProps = {
  /** Neutral supplementary text shown below a field's label. */
  children: ReactNode
  className?: string
}

/**
 * Neutral supplementary text shown below a field's label and above its input, matching the
 * Sage Design System (SDS) input fields. Always rendered in a neutral color regardless of form state.
 *
 * Rendered as a `<span>` so it can be composed inside a MUI `InputLabel` (which is a `<label>`)
 * as well as used standalone. For error or status messages, use a field's `helperText` instead.
 */
export default function FieldDescription({
  children,
  className,
}: FieldDescriptionProps) {
  return (
    <span
      className={
        className ? `${styles.description} ${className}` : styles.description
      }
    >
      {children}
    </span>
  )
}
