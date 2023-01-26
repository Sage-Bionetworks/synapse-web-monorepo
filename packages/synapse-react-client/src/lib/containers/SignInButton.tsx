import * as React from 'react'
import { SRC_SIGN_IN_CLASS } from '../utils/SynapseConstants'

export type SignInProps = {
  className?: string
  style?: React.CSSProperties
}
// An event listener for the class SRC_SIGN_IN_CLASS is needed to trigger a download
// modal
const SignInButton = ({ className, style }: SignInProps) => {
  return (
    <a
      type="button"
      style={style}
      className={`SignInButton ${SRC_SIGN_IN_CLASS} ${className}`}
    >
      Sign In
    </a>
  )
}

export default SignInButton
