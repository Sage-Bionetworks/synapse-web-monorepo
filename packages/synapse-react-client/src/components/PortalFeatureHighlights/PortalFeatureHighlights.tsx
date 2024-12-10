import { Typography, Box, Button, CardMedia, Grid, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export type PortalFeatureHighlightsProps = {
  reverseOrder?: boolean
  title?: string
  image?: string
  buttonText?: string
  summaryText?: React.ReactNode
  link?: string
}

const PortalFeatureHighlights = (props: PortalFeatureHighlightsProps) => {
  const { reverseOrder, image, title, buttonText, summaryText, link } = props

  return (
    <Grid
      container
      gap={{ xs: '38px', md: '80px' }}
      padding={{ xs: '40px', lg: '80px' }}
      justifyContent="center"
      alignItems={{ md: 'center', lg: 'flex-start' }}
      flexDirection={{
        md: reverseOrder ? 'row-reverse' : 'row',
      }}
    >
      <Grid item xs={12} md={6} lg={7} xl={8}>
        <CardMedia
          component="img"
          image={image}
          sx={{
            height: {
              xs: '250px',
              sm: '400px',
              md: '450px',
              xl: '627.563px',
            },
            borderRadius: '12px',
            objectFit: 'cover',
            width: '100%',
          }}
        />
      </Grid>
      <Grid item xs={12} md={4} lg={3} xl={2}>
        <Stack
          sx={{
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
            sx={{
              minWidth: '265px',
              whiteSpace: 'nowrap',
              padding: '6px 24px',
              fontWeight: '600',
            }}
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
      </Grid>
    </Grid>
  )
}

export default PortalFeatureHighlights
