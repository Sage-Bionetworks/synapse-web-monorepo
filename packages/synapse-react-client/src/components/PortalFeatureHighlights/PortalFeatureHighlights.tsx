import { Box, Button, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'

export type PortalFeatureHighlightsProps = {
  reverseOrder?: boolean
  title?: string
  image?: string
  buttonText?: string
  summaryText?: React.ReactNode
  link?: string
}

const transitionTimeoutMs = 400

const PortalFeatureHighlights = (props: PortalFeatureHighlightsProps) => {
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
          lg: reverseOrder
            ? 'minmax(150px, 1fr) minmax(300px, 2fr)'
            : 'minmax(300px, 2fr) minmax(150px, 1fr)',
        },
        gridTemplateAreas: {
          xs: `'image' 'content'`,
          lg: reverseOrder ? `'content image'` : `'image content'`,
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
      <Stack
        sx={{
          gridArea: 'content',
          gap: '16px',
          borderTop: '3px solid',
          borderColor: 'grey.400',
        }}
      >
        <Typography
          variant="headline2"
          paddingTop="30px"
          paddingBottom="10px"
          color="grey.1000"
          fontSize={'31px'}
        >
          {title}
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to={link || ''}
          sx={theme => ({
            [theme.breakpoints.up('sm')]: {
              width: 'fit-content',
            },
            whiteSpace: 'nowrap',
            padding: '6px 24px',
            fontWeight: '600',
            fontSize: '16px',
          })}
        >
          {buttonText}
        </Button>
        <Typography
          variant="body1"
          sx={{
            fontStyle: 'italic',
            color: 'grey.800',
            fontSize: '18px',
            lineHeight: '27px',
          }}
        >
          {summaryText}
        </Typography>
      </Stack>
    </Box>
  )
}

export default PortalFeatureHighlights
