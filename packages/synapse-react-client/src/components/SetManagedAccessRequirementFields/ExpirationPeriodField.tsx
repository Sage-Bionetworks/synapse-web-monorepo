import { DAY_IN_MS } from '@/utils/SynapseConstants'
import { TextField } from '@mui/material'

export const getValidExpirationPeriodOrErrorMessage = (
  expirationPeriodDays: string,
) => {
  if (expirationPeriodDays === '') return 0

  const msgPrefix = 'Please enter a valid expiration period (in days): '
  if (/^[-]?\d+$/.test(expirationPeriodDays)) {
    const num = Number(expirationPeriodDays)
    if (num < 0) {
      return `${msgPrefix}If expiration period is set, then it must be greater than 0.`
    }
    return num * DAY_IN_MS
  }
  return `${msgPrefix}For input string: "${expirationPeriodDays}"`
}

export type ExpirationPeriodFieldProps = {
  /* The expiration period in days, as typed by the user */
  days: string
  error: string | null
  onChange: (days: string) => void
  onBlur: () => void
}

export function ExpirationPeriodField(props: ExpirationPeriodFieldProps) {
  const { days, error, onChange, onBlur } = props
  return (
    <TextField
      id="expirationPeriod"
      name="expirationPeriod"
      label="Expiration period (days)"
      value={days}
      error={Boolean(error)}
      helperText={error}
      sx={{ mt: 1 }}
      fullWidth
      onChange={event => onChange(event.target.value)}
      onBlur={onBlur}
    />
  )
}
