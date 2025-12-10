import { Box, CardMedia, Fade, Slide } from '@mui/material'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import PortalSectionHeader from '../PortalSectionHeader'

export type PortalFeatureHighlightsProps = {
  reverseOrder?: boolean
  title: string
  image?: string
  buttonText?: string
  summaryText?: React.ReactNode
  link?: string
}

const transitionTimeoutMs = 400

const PortalFeatureHighlights = (
  props: PortalFeatureHighlightsProps,
): React.ReactNode => {
  const { reverseOrder, image, title, buttonText, summaryText, link } = props
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  return (
    <Box
      ref={ref}
      sx={{
        display: 'grid',
        padding: { xs: '40px', lg: '80px' },
        gap: { xs: '38px', md: '80px' },
        gridTemplateColumns: {
          xs: 'minmax(100px, 1fr)',
          md: '1fr 1fr',
          lg: reverseOrder
            ? 'minmax(150px, 1fr) minmax(300px, 2fr)'
            : 'minmax(300px, 2fr) minmax(150px, 1fr)',
        },
        gridTemplateAreas: {
          xs: `'image' 'content'`,
          md: reverseOrder ? `'content image'` : `'image content'`,
        },
      }}
    >
      <Fade in={inView} timeout={transitionTimeoutMs}>
        <div>
          <Slide
            direction={reverseOrder ? 'left' : 'right'}
            timeout={transitionTimeoutMs}
            in={inView}
          >
            <div>
              <CardMedia
                component="img"
                image={image}
                sx={{
                  gridArea: 'image',
                  borderRadius: '12px',
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </Slide>
        </div>
      </Fade>
      <PortalSectionHeader
        title={title}
        buttonText={buttonText}
        link={link}
        summaryText={summaryText}
        sx={{ gridArea: 'content', h2: { width: '100%' } }}
      />
    </Box>
  )
}

export default PortalFeatureHighlights
