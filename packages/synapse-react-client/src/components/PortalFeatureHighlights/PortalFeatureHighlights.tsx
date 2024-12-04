import { Typography, Box, Button, CardMedia, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export type PortalFeatureHighlightsProps = {
  reverseOrder?: boolean
  title?: string
  image?: string
  buttonText?: string
  summaryText?: string | React.ReactNode
  link?: string
}

const PortalFeatureHighlights = (props: PortalFeatureHighlightsProps) => {
  const { reverseOrder, image, title, buttonText, summaryText, link } = props
  return (
    <Grid
      container
      gap={{ xs: '38px', md: '80px' }}
      padding={'0 56px 0px 56px'}
    >
      <Grid
        item
        order={{ xs: 0, md: reverseOrder ? 1 : 0 }}
        xs={12}
        md={5}
        lg={7.6}
      >
        <CardMedia
          component="img"
          image={image}
          style={{
            borderRadius: '12px',
            objectFit: 'cover',
            width: '100%',
          }}
        />
      </Grid>
      <Grid item xs={12} md={4} lg={3.4}>
        <Box
          display="flex"
          flexDirection="column"
          gap="16px"
          sx={{ borderTop: '3px solid', borderColor: 'grey.400' }}
        >
          <Typography
            variant="headline2"
            paddingTop="26px"
            paddingBottom="10px"
            color="grey.1000"
            fontSize={'32px'}
          >
            {title}
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to={link || ''}
            sx={{
              whiteSpace: 'nowrap',
              padding: '6px 24px',
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
        </Box>
      </Grid>
    </Grid>
  )
}

export default PortalFeatureHighlights
