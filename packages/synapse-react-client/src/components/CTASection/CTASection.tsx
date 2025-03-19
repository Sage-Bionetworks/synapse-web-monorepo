import { AddAlertTwoTone } from '@mui/icons-material'
import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
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
  return (
    <>
      <Stack
        sx={{
          padding: { xs: '40px', lg: '80px' },
          justifyContent: 'center',
          alignItems: 'center',
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
              width: '250px',
              top: 5,
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
              width: '420px',
              top: 65,
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
        {buttonText && (
          <Button
            variant="contained"
            href="https://news.eliteportal.org/elite-portal-newsletter/"
            target="_blank"
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
