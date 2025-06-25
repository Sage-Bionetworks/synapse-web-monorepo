import { SxProps } from '@mui/material/styles'

export const darkTextColor = '#22252A'
export const homepageBodyText: SxProps = {
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '34px',
  color: darkTextColor,
}

export const h2Sx: SxProps = {
  fontSize: {
    xs: '36px',
    md: '52px',
  },
  fontWeight: 600,
  lineHeight: '52px',
  color: darkTextColor,
}

export const defaultHomepageText: SxProps = {
  color: darkTextColor,
  fontWeight: 600,
}

export const titleSx: SxProps = {
  ...defaultHomepageText,
  fontWeight: 300,
  fontSize: {
    xs: '48px',
    md: '72px',
  },
  lineHeight: {
    xs: '120%',
    md: '82px',
  },
  color: 'white',
}

export const sidePadding: SxProps = {
  pl: {
    xs: '15px',
    sm: '50px',
  },
  pr: {
    xs: '15px',
    sm: '50px',
  },
}
