import { Box, alpha, Typography, useTheme } from '@mui/material'
import React from 'react'
import NIHLogo from './assets/nia_logo.png'
import { PortalSectionHeader } from 'synapse-react-client'

const ELSupportedByNIH: React.FC = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 3fr' },
        gap: { xs: '38px', md: '80px' },
        padding: { xs: '40px', lg: '80px' },
      }}
    >
      <PortalSectionHeader
        title="Supported by the National Institute on Aging"
        buttonText="Visit the NIA Website"
        link="https://www.nia.nih.gov/research/dgcg"
        sx={{
          h2: {
            borderColor: alpha(theme.palette.primary.main, 0.2),
            width: '100%',
          },
        }}
      />
      <Box
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            width: 'auto',
            height: '50px',
            backgroundImage: `url(${NIHLogo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        />
        <Typography
          variant="body1"
          sx={{
            pt: '32px',
            fontSize: '18px',
          }}
        >
          The National Institute on Aging (NIA) is a leading research
          organization dedicated understanding the nature of aging, and extend
          the healthy, active years of life. As part of the National Institutes
          of Health (NIH), NIA supports cutting-edge research on aging and
          age-related diseases, including Alzheimer's disease and other forms of
          dementia.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            pt: '10px',
            fontSize: '18px',
          }}
        >
          With a mission to improve the health and well-being of older
          populations, NIA funds innovative scientific studies, promotes
          training for the next generation of researchers, and provides trusted
          health information to the public. By fostering collaboration across
          disciplines, NIA aims to advance our understanding of aging, extend
          healthspan, and ensure healthier lives for individuals of all ages.
        </Typography>
      </Box>
    </Box>
  )
}

export default ELSupportedByNIH
