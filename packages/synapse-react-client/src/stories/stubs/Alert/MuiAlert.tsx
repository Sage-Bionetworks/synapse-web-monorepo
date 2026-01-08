import React from 'react'
import {
  AlertTitle,
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
} from '@mui/material'

export interface AlertProps extends MuiAlertProps {
  message: string
  title?: string
}

export const Alert = ({
  message,
  title,
  ...rest
}: AlertProps): React.ReactNode => (
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
