import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material'
import { useSmartLink } from './useSmartLink'

interface SmartLinkProps extends MuiLinkProps {
  href: string
}

export function SmartLink({
  href,
  target,
  children,
  ...props
}: SmartLinkProps) {
  const navProps = useSmartLink(href, target)
  return (
    <MuiLink {...navProps} {...props}>
      {children}
    </MuiLink>
  )
}
