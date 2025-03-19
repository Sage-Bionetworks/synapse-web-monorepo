import { AddAlertTwoTone } from '@mui/icons-material'
import {
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
  Link as MuiLink,
} from '@mui/material'
import { Link as RouterLink } from 'react-router'
import Illustrations from '../../assets/illustrations'

export type CTASectionProps = {
  title: string
  subtitle?: string
  buttonText?: string
  buttonLink?: string
}

const blobStyles = {
  position: 'absolute',
  height: '100%',
  overflow: 'hidden',
  display: { xs: 'none', md: 'block' },
}

const CTASection = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
}: CTASectionProps) => {
  const theme = useTheme()
  const isExternalLink =
    buttonLink?.startsWith('http://') || buttonLink?.startsWith('https://')
  return (
    <>
      <Stack
        sx={{
          padding: { xs: '40px', lg: '80px' },
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          background: `linear-gradient(0deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.80) 100%), ${theme.palette.primary.main}`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={theme => ({
            ...blobStyles,
            left: 0,
            [theme.breakpoints.down('lg')]: {
              svg: {
                width: '270px',
                height: '100%',
              },
            },
          })}
        >
          <Illustrations.LeftDotBlob />
        </Box>
        <Box
          sx={theme => ({
            ...blobStyles,
            right: 0,
            top: 50,
            [theme.breakpoints.down('lg')]: {
              svg: {
                width: '300px',
                height: '100%',
              },
            },
          })}
        >
          <Illustrations.RightDotBlob />
        </Box>
        <Typography
          variant="headline2"
          sx={{
            fontSize: '24px',
            color: 'grey.900',
            lineHeight: 'normal',
            marginBottom: '16px',
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            sx={{
              color: 'grey.900',
              fontStyle: 'italic',
              lineHeight: '22.4px',
              marginBottom: '26px',
            }}
          >
            {subtitle}
          </Typography>
        )}
        {buttonText && buttonLink && (
          <Button
            variant="contained"
            component={isExternalLink ? MuiLink : RouterLink}
            {...(isExternalLink
              ? {
                  href: buttonLink,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
              : { to: buttonLink })}
            sx={{
              color: '#FFF',
              '&:hover': { color: '#FFF', textDecorationColor: '#FFF' },
              '&:focus': { color: '#FFF' },
              textDecorationColor: '#FFF',
              display: 'flex',
              padding: '6px 24px',
              gap: '10px',
            }}
          >
            <AddAlertTwoTone sx={{ width: '24px', height: '24px' }} />
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: '600',
                lineHeight: '144%',
              }}
            >
              {buttonText}
            </Typography>
          </Button>
        )}
      </Stack>
    </>
  )
}

export default CTASection
