import { Button, ButtonProps } from '@mui/material'
import { useSmartLink } from './useSmartLink'

interface SmartButtonProps extends ButtonProps {
  href?: string
  target?: string
}

export function SmartButton({
  href,
  target,
  children,
  ...props
}: SmartButtonProps) {
  const navProps = useSmartLink(href, target)
  return (
    <Button {...navProps} {...props}>
      {children}
    </Button>
  )
}
