import { Box, Link, Button, Typography, darken } from '@mui/material'
import React from 'react'
import exploreIcon from './assets/explore_icon.png'
import uncoverIcon from './assets/uncover_icon.png'
import accessIcon from './assets/access_icon.png'

// TODO Fix vertical column space (getting started section is slightly bigger)
// TODO Set padding for mobile and desktop

const ELGettingStarted: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#39AC97',
        display: 'grid',
        gridTemplateColumns: '25% 25% 25% 25%',
        position: 'relative',
        pt: '80px',
        pb: '80px',
        pl: '80px',
        pr: '80px',
      }}
    >
      <Box
        sx={{
          flex: '1 1 auto',
          width: '100%',
          height: '100%',
          borderTop: '3px solid #ffffff88',
          pt: '20px',
          pb: '20px',
        }}
      >
        <Typography
          variant="headline1"
          style={{
            color: 'white',
            fontFamily: "'Merriweather', serif",
            fontWeight: 400,
            fontSize: '24px',
          }}
          sx={{
            width: '100%',
          }}
        >
          Getting Started
        </Typography>
        <Typography
          variant="body1"
          style={{
            color: 'white',
            fontStyle: 'italic',
            fontSize: '13px',
            lineHeight: '20px',
          }}
          sx={{
            maxWidth: '100%',
            mt: '16px',
            mb: '16px',
          }}
        >
          We provide all the help you need for navigating the portal and
          accelerating your research.
        </Typography>
        <Button
          variant="contained"
          // TODO: href="<LINK TO HELP SECTION>"
          style={{
            fontSize: '14px',
            fontWeight: 500,
          }}
          sx={{
            backgroundColor: '#39AC97',
            border: '1px solid white',
            padding: '6px 24px',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: darken('#5BA998', 0.05),
              boxShadow: 'none',
            },
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
        flex: '1 1 auto',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          flex: '0 0 auto',
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
        style={{
          color: 'white',
          fontFamily: "'Merriweather', serif",
          fontWeight: 400,
        }}
        sx={{
          mb: '10px',
          maxWidth: '100%',
        }}
      >
        {headline}
      </Typography>
      <Typography
        variant="body1"
        style={{
          color: 'white',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '13px',
          lineHeight: '15px',
          fontWeight: 400,
        }}
        sx={{
          maxWidth: '100%',
        }}
      >
        {description}
      </Typography>
    </Box>
  )
}
