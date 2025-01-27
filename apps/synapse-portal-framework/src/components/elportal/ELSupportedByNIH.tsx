import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import NIHLogo from './assets/nih_logo.png'

const ELSupportedByNIH: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '100%',
          sm: '50% 50%',
          md: '25% 75%',
        },
        position: 'relative',
        p: '80px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderTop: '3px solid #B5D3CE',
          py: '30px',
        }}
      >
        <Typography
          variant="headline2"
          sx={{
            color: '#2225A',
            fontSize: '28px',
            mb: '20px',
          }}
        >
          Supported by the NIA’s Division of Geriatrics and Clinical Gerontology
          (DGCG)
        </Typography>
        <Button
          variant="contained"
          href="https://www.nia.nih.gov/research/dgcg"
          rel="noopener noreferrer"
          target="_blank"
          sx={theme => ({
            padding: '6px 24px',
            fontWeight: '600',
            [theme.breakpoints.down('sm')]: {
              width: '100%',
            },
          })}
        >
          Visit the DCGC Website
        </Button>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          pl: { xs: 'none', md: '80px' },
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
        ></Box>
        <Typography
          variant="body1"
          sx={{
            pt: '32px',
          }}
        >
          The National Institute on Aging (NIA) is a leading research
          organization dedicated understanding the nature of aging, and extend
          the healthy, active years of life. As part of the National Institutes
          of Health (NIH), NIA supports cutting-edge research on aging and
          age-related diseases, including Alzheimer's disease and other forms of
          dementia. With a mission to improve the health and well-being of older
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
