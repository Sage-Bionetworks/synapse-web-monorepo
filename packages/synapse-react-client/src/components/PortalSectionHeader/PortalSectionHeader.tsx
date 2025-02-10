import { Stack, Typography, Button, SxProps, Theme } from '@mui/material'
import { Link } from 'react-router'
import { spreadSx } from '../../theme/spreadSx'

export type PortalSectionHeaderProps = {
  title: string
  buttonText?: string
  summaryText?: string
  link?: string
  sx?: SxProps<Theme>
}

const PortalSectionHeader = ({
  title,
  buttonText,
  summaryText,
  link,
  sx,
}: PortalSectionHeaderProps) => {
  return (
    <Stack
      // sx={{
      //   gridArea: 'content',
      //   gap: '16px',
      //   borderTop: '3px solid',
      //   borderColor: 'grey.400',
      // }}
      sx={spreadSx(sx, {
        gridArea: 'content',
        gap: '16px',
        borderTop: '3px solid',
        borderColor: 'grey.400',
      })}
    >
      <Typography
        variant="headline2"
        paddingTop="30px"
        paddingBottom="10px"
        color="grey.1000"
        fontSize={'31px'}
      >
        {title}
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to={link || ''}
        sx={theme => ({
          [theme.breakpoints.up('sm')]: {
            width: 'fit-content',
          },
          whiteSpace: 'nowrap',
          padding: '6px 24px',
          fontWeight: '600',
          fontSize: '16px',
        })}
      >
        {buttonText}
      </Button>
      <Typography
        variant="body1"
        sx={{
          fontStyle: 'italic',
          color: 'grey.800',
          fontSize: '18px',
          lineHeight: '27px',
        }}
      >
        {summaryText}
      </Typography>
    </Stack>
  )
}

export default PortalSectionHeader
