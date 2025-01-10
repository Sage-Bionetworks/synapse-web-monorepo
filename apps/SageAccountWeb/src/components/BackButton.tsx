import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { IconButton, SxProps } from '@mui/material'
import { MouseEventHandler } from 'react'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router'

type StyleProps = { sx?: SxProps }
type BackLinkProps = { to: RouterLinkProps['to'] }
type BackButtonProps = { onClick: MouseEventHandler<HTMLButtonElement> }

export type BackButtonLinkProps = StyleProps & (BackLinkProps | BackButtonProps)

export const backButtonSx = {
  color: 'grey.700',
  position: 'absolute',
  height: '40px',
  width: '40px',
  top: '20px',
  left: '20px',
  '&:hover': {
    color: 'grey.700',
  },
}

export function BackButton({
  sx = backButtonSx,
  ...otherProps
}: BackButtonLinkProps) {
  return (
    <>
      {'onClick' in otherProps ? (
        <IconButton sx={sx} onClick={otherProps.onClick}>
          <ArrowBackIcon />
        </IconButton>
      ) : (
        <IconButton component={RouterLink} sx={sx} to={otherProps.to}>
          <ArrowBackIcon />
        </IconButton>
      )}
    </>
  )
}
