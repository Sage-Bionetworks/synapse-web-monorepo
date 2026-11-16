import { Chip, Link, Stack, Typography } from '@mui/material'
import { Ref, useMemo } from 'react'
import { DataGridRow } from '../DataGridTypes'
import { countValidationErrors } from '../utils/groupValidationErrors'
import styles from './ValidationErrorSummary.module.scss'

type ValidationErrorSummaryProps = {
  rowValues: DataGridRow[]
  onShow: () => void
  showLinkRef?: Ref<HTMLButtonElement>
}

/** Compact stand-in for a hidden ValidationAlert: the error count and a link to show the banner again. */
export function ValidationErrorSummary({
  rowValues,
  onShow,
  showLinkRef,
}: ValidationErrorSummaryProps) {
  const errorCount = useMemo(
    () => countValidationErrors(rowValues),
    [rowValues],
  )

  return (
    <Stack
      direction="row"
      role="group"
      aria-label="Validation errors summary"
      className={styles.container}
    >
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
        ref={showLinkRef}
        onClick={onShow}
        aria-label="Show validation errors"
      >
        Show
      </Link>
    </Stack>
  )
}
