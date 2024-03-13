import React from 'react'
import { Box, SxProps, Typography, useMediaQuery } from '@mui/material'
import Background from './assets/genie-homepage-background.png?url'
import GreenPolygon from './assets/Genie-green-rectangle.svg?url'

const GenieHomePageHeader = () => {
  const isDesktop = useMediaQuery(`(min-width: ${1315}px)`)
  // if larger screen, show an additional extra background and show GreenPolygon's right side (which is angled)
  const additionalGreenBackgroundProps: SxProps = isDesktop
    ? {}
    : {
        marginRight: '-240px',
        paddingRight: '150px',
      }
  const content = (
    <Box
      sx={{
        ...additionalGreenBackgroundProps,
        backgroundImage: `url(${GreenPolygon})`,
        backgroundSize: 'cover',
      }}
    >
      <Box sx={{ color: 'grey.100', padding: '50px 15% 50px 100px' }}>
        <Typography variant="h1" sx={{ fontSize: '36px' }}>
          Welcome to the {import.meta.env.VITE_PORTAL_NAME}
        </Typography>

        <Typography variant="body1" sx={{ marginTop: '20px' }}>
          {import.meta.env.VITE_PORTAL_DESCRIPTION}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '20px' }}>
          Experience the power of collaboration with our consortium, fueled by
          openness, transparency, and inclusion. Together, we ensure that our
          project output remains accessible to the global cancer research
          community, empowering advancements for all.
        </Typography>
      </Box>
    </Box>
  )
  return (
    <>
      {isDesktop ? (
        <Box
          sx={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
          }}
        >
          <Box sx={{ display: 'grid', gridTemplateColumns: '80% 20%' }}>
            {content}
            <div />
          </Box>
        </Box>
      ) : (
        content
      )}
    </>
  )
}

export default GenieHomePageHeader
