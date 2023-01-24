import { Button } from '@mui/material'
import { useAppContext } from 'AppContext'
import React from 'react'

export const ReturnToAppButton: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const { redirectURL } = useAppContext()
  const redirectFn = () => {
    redirectURL
      ? window.location.assign(redirectURL)
      : window.location.assign('/authenticated/myaccount')
  }
  const element = (
    <Button variant="text" onClick={redirectFn} fullWidth>
      {' '}
      Cancel
    </Button>
  )
  if (!children) {
    return element
  } else {
    return React.cloneElement(children as React.ReactElement, {
      onClick: redirectFn,
    })
  }
}
