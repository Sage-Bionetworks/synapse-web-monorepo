import MuiAlert, { AlertProps as MuiAlertProps } from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

export interface AlertProps extends MuiAlertProps {
  message: string
  title?: string
}

export const Alert = ({ message, title, ...rest }: AlertProps) => (
  <>
    <span>
      Note: use FullWidthAlert for alerts with primary, secondary, and close
      buttons or a global alert.
    </span>
    <br />
    <br />
    <MuiAlert {...rest}>
      <>
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </>
    </MuiAlert>
  </>
)
