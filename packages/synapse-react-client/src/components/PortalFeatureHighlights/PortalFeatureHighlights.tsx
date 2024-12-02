import { Typography, Box, Button, CardMedia, Grid } from '@mui/material'
import { Row } from '@sage-bionetworks/synapse-types'
import React from 'react'
import { Link } from 'react-router-dom'

export type PortalFeatureHighlightsProps = {
  sql?: string
  reverseOrder?: boolean
  title?: string
  buttonText?: string
  summaryText?: string
}

type PortalFeatureHighlightsCardProps = {
  feat: Row
}

const PortalFeatureHighlights = (props: PortalFeatureHighlightsProps) => {
  const { reverseOrder } = props
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
        lg={8}
      >
        <CardMedia
          component="img"
          image="https://picsum.photos/400/300"
          style={{
            borderRadius: '12px',
            objectFit: 'cover',
            width: '100%',
          }}
        />
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
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
            fontSize={'31px'}
          >
            Computational Tools
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to=""
            sx={{
              whiteSpace: 'nowrap',
            }}
          >
            button text
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
            The portal supports secure access to leading cloud-based analysis
            platforms, such as CAVATICA. This is just the beginning. Future
            integrations will further expand resources for data analysis and
            collaboration.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default PortalFeatureHighlights
