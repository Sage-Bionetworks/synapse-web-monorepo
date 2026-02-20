import { useSynapseContext } from '@/utils/context/SynapseContext'
import { SRC_SIGN_IN_CLASS } from '@/utils/SynapseConstants'
import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import { Link, LinkProps } from 'react-router'

/* Allow component to behave as a MUI Button or a React Router Link */
export type LoginAwareButtonProps = ButtonProps &
  Partial<Pick<LinkProps, 'to' | 'replace'>>

export function LoginAwareButton(
  props: LoginAwareButtonProps,
): React.ReactNode {
  const { isAuthenticated } = useSynapseContext()
  const mergedProps = { ...props }
  const linkProps = {
    to: props.to,
    replace: props.replace,
  }
  delete mergedProps.to
  delete mergedProps.replace
  if (!isAuthenticated) {
    /* If token is missing, add css class to flag button to require login before continuing */
    delete mergedProps.href
    mergedProps.className = SRC_SIGN_IN_CLASS
  }
  let linkBtn = <Button {...mergedProps}>{mergedProps.children}</Button>
  if (isAuthenticated && linkProps.to && !mergedProps.href) {
    linkBtn = (
      <Link to={linkProps.to} replace={linkProps.replace}>
        {linkBtn}
      </Link>
    )
  }
  return linkBtn
}
