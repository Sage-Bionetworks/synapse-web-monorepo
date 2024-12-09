import { Link } from '@mui/material'
import { CSSProperties } from 'react'
import { SRC_SIGN_IN_CLASS } from '../utils/SynapseConstants'

export type SignInProps = {
  className?: string
  style?: CSSProperties
}
// An event listener for the class SRC_SIGN_IN_CLASS is needed to trigger a download
// modal
const SignInButton = ({ className, style }: SignInProps) => {
  return (
    <Link
      type="button"
      style={style}
      className={`SignInButton ${SRC_SIGN_IN_CLASS} ${className}`}
    >
      Sign In
    </Link>
  )
}

export default SignInButton
