import { Box, Link, Button, Typography, darken } from '@mui/material'
import React from 'react'
// TODO import assets
import exploreIcon from './assets/explore_icon.png'

const ELGettingStarted: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#39AC97',
        display: 'grid',
        gridTemplateColumns: '25% 25% 25% 25%',
        position: 'relative',
        // TODO: Add padding for both desktop and mobile
        pt: '80px',
        pb: '80px',
        pl: '50px',
        pr: 3,
      }}
    >
      <Box
        sx={{
          flex: '1 1 auto',
          width: '100%',
          height: '100%',
        }}
      >
        <Typography
          variant="headline1"
          style={{ color: 'white' }}
          sx={{
            pt: 2,
            pb: 2,
            width: 'max-content',
            borderTop: '3px solid #ffffff88',
          }}
        >
          Getting Started
        </Typography>
        <Typography
          variant="body1"
          style={{ color: 'white', fontStyle: 'italic' }}
          sx={{
            mb: 1,
            pb: 1,
            maxWidth: '100%',
          }}
        >
          We provide all the help you need for navigating the portal and
          accelerating your research.
        </Typography>
        <Button
          variant="contained"
          // TODO: href="<LINK TO HELP SECTION>"
          sx={{
            backgroundColor: '#39AC97',
            border: '1px solid white',
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
      <IconSquare />
      <IconSquare />
      <IconSquare />
    </Box>
  )
}

export default ELGettingStarted

export function IconSquare() {
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
          backgroundImage: `url(${exploreIcon})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      ></Box>
      <Typography
        variant="headline3"
        style={{ color: 'white', fontStyle: 'italic' }}
        sx={{
          mb: 1,
          pt: 1,
          pb: 1,
          maxWidth: '100%',
        }}
      >
        Explore
      </Typography>
      <Typography
        variant="body1"
        // TODO Text is running off of component
        style={{ color: 'white', fontStyle: 'italic' }}
        sx={{
          mb: 1,
          pb: 1,
          maxWidth: '100%',
        }}
      >
        Get the latest data, publications, and news from the Exceptional
        Longevity research community.
      </Typography>
    </Box>
  )
}
