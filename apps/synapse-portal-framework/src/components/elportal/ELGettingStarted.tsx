import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import exploreIcon from './assets/explore_icon.png'
import uncoverIcon from './assets/uncover_icon.png'
import accessIcon from './assets/access_icon.png'

const ELGettingStarted: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        display: 'grid',
        padding: { xs: '40px', md: '80px' },
        gridTemplateColumns: {
          xs: '100%',
          sm: '50% 50%',
          md: '25% 25% 25% 25%',
        },
        gap: '10px',
        gridAutoRows: '1fr',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderTop: '3px solid #ffffff88',
          py: '20px',
        }}
      >
        <Typography
          variant="headline2"
          sx={{
            width: '100%',
            color: 'white',
            fontSize: '24px',
          }}
        >
          Getting Started
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: '100%',
            my: '16px',
            color: 'white',
            fontStyle: 'italic',
            fontSize: '13px',
            lineHeight: '20px',
          }}
        >
          We provide all the help you need for navigating the portal and
          accelerating your research.
        </Typography>
        <Button
          variant="contained"
          href="https://help.eliteportal.org/help/"
          rel="noopener noreferrer"
          target="_blank"
          sx={{
            border: '1px solid white',
            padding: '6px 24px',
            fontSize: '14px',
          }}
        >
          Visit Our Help Section
        </Button>
      </Box>
      <IconSquare
        iconUrl={exploreIcon}
        headline="Explore"
        description="Get the latest data, publications, and news from the Exceptional
         Longevity Research community"
      />
      <IconSquare
        iconUrl={accessIcon}
        headline="Access"
        description="Download data, review metadata, and obtain method summaries for
          the latest groundbreaking studies."
      />
      <IconSquare
        iconUrl={uncoverIcon}
        headline="Uncover"
        description="Analyze and transform the data using translational research tools
          and AI/ML models. Make a longevity breakthrough. Then repeat."
      />
    </Box>
  )
}

export default ELGettingStarted

export function IconSquare({ iconUrl, headline, description }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        sx={{
          width: '50%',
          height: '50%',
          mb: '10px',
          backgroundImage: `url(${iconUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      ></Box>
      <Typography
        variant="headline3"
        sx={{
          mb: '10px',
          maxWidth: '100%',
          color: 'white',
          fontWeight: 400,
        }}
      >
        {headline}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: '100%',
          color: 'white',
          fontSize: '13px',
        }}
      >
        {description}
      </Typography>
    </Box>
  )
}
