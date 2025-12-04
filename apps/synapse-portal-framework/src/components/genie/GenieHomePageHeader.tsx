import React from 'react'
import { Box, SxProps, Typography, useMediaQuery } from '@mui/material'
import Background from './assets/genie-homepage-background.jpg?url'

const GenieHomePageHeader = (): React.ReactNode => {
  const isDesktop = useMediaQuery(`(min-width: ${1250}px)`)
  // if larger screen, show an additional extra background and show GreenPolygon's right side (which is angled)
  const additionalGreenBackgroundProps: SxProps = isDesktop
    ? { clipPath: 'polygon(0 0%, 90% 0%, 100% 100%, 0% 100%)' }
    : {}
  const content = (
    <Box
      sx={{
        ...additionalGreenBackgroundProps,
        background: 'linear-gradient(98.34deg, #14683D 0%, #46AF3F 100%)',
      }}
    >
      <Box sx={{ color: 'grey.100', padding: '50px 10% 50px 100px' }}>
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
