import { Chip, Link, Typography } from '@mui/material'
import { useMemo } from 'react'
import { DataGridRow } from '../DataGridTypes'
import { collectValidationErrors } from '../utils/groupValidationErrors'
import styles from './HiddenValidationAlert.module.scss'

type HiddenValidationAlertProps = {
  rowValues: DataGridRow[]
  onShow: () => void
}

/** Compact stand-in for a hidden ValidationAlert: the error count and a link to show the banner again. */
export function HiddenValidationAlert({
  rowValues,
  onShow,
}: HiddenValidationAlertProps) {
  const errorCount = useMemo(
    () => collectValidationErrors(rowValues).length,
    [rowValues],
  )

  return (
    <div className={styles.container}>
      <Chip
        label={errorCount.toLocaleString()}
        color={errorCount > 0 ? 'error' : 'success'}
        size="small"
      />
      <Typography variant="body1" fontWeight="bold">
        Errors
      </Typography>
      <Link
        component="button"
        variant="body1"
        onClick={onShow}
        aria-label="Show validation errors"
        sx={{ fontWeight: 'normal' }}
      >
        Show
      </Link>
    </div>
  )
}
