import { Box, Link, Button, Typography, darken } from '@mui/material'
import React from 'react'
// TODO import assets
import exploreIcon from './assets/explore_icon.svg'

const ELGettingStarted: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#5BA998',
        display: 'grid',
        gridTemplateColumns: '25% 25% 25% 25%',
        position: 'relative',
        pt: 6,
        pb: 5,
        pl: 3,
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
            backgroundColor: '#5BA998',
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
    </Box>
  )
}

export default ELGettingStarted
