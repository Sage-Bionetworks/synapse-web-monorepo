import React from 'react'
import { Button, ButtonProps } from '@mui/material'
import { Link, LinkProps } from 'react-router-dom'
import { SRC_SIGN_IN_CLASS } from '../../utils/SynapseConstants'
import { useSynapseContext } from '../../utils'

/* Allow component to behave as a MUI Button or a React Router Link */
export type LoginAwareButtonProps = ButtonProps &
  Partial<Pick<LinkProps, 'to' | 'replace'>>

export const LoginAwareButton: React.FunctionComponent<
  LoginAwareButtonProps
> = (props: LoginAwareButtonProps) => {
  const { accessToken } = useSynapseContext()
  const isSignedIn = !!accessToken
  const mergedProps = { ...props }
  const linkProps = {
    to: props.to,
    replace: props.replace,
  }
  delete mergedProps.to
  delete mergedProps.replace
  if (!isSignedIn) {
    /* If token is missing, add css class to flag button to require login before continuing */
    delete mergedProps.href
    mergedProps.className = SRC_SIGN_IN_CLASS
  }
  let linkBtn = <Button {...mergedProps}>{mergedProps.children}</Button>
  if (isSignedIn && linkProps.to && !mergedProps.href) {
    linkBtn = (
      <Link to={linkProps.to} replace={linkProps.replace}>
        {linkBtn}
      </Link>
    )
  }
  return linkBtn
}
