import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { IconButton, SxProps } from '@mui/material'
import React from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'

export type BackButtonProps = {
  sx?: SxProps
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  linkTo?: RouterLinkProps['to']
}

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

export const BackButton: React.FC<BackButtonProps> = ({
  sx = backButtonSx,
  onClick,
  linkTo = '/placeholder',
}) => {
  return (
    <>
      {onClick ? (
        <IconButton onClick={onClick} sx={sx}>
          <ArrowBackIcon />
        </IconButton>
      ) : (
        <IconButton component={RouterLink} sx={sx} to={linkTo}>
          <ArrowBackIcon />
        </IconButton>
      )}
    </>
  )
}
