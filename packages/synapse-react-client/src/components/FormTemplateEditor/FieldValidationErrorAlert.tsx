import { Alert } from '@mui/material'
import { PropsWithChildren } from 'react'
import { FormTemplateFieldValidationError } from './formTemplateValidation'
import styles from './FieldValidationErrorAlert.module.scss'

type FieldValidationErrorAlertProps = PropsWithChildren<{
  errors: FormTemplateFieldValidationError[]
}>

/** Lists template field validation errors, after an optional lead-in passed as children. */
export function FieldValidationErrorAlert({
  errors,
  children,
}: FieldValidationErrorAlertProps) {
  return (
    <Alert severity="error" sx={{ mt: 2 }}>
      {children}
      <ul className={styles.errorList}>
        {errors.map((e, i) => (
          <li key={i}>{e.message}</li>
        ))}
      </ul>
    </Alert>
  )
}
