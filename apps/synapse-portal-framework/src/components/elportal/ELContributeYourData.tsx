import { Box, Link, Button } from '@mui/material'
import React from 'react'
import backgroundSpotsLeft from './assets/dot_blob_top_left.png'
import backgroundSpotsRight from './assets/dot_blob_bottom_right.png'

const ELContributeYourData: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#5BA998',
        display: 'grid',
        gridTemplateColumns: '33% 33% 33%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          flex: '0 0 auto',
          width: '33%',
          height: '100%',
          backgroundImage: `url(${backgroundSpotsLeft})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top left',
          backgroundSize: '100%',
          zIndex: 0,
          overflow: 'clip',
        }}
      />
      <Box
        sx={{
          flex: '1 1 auto',
          zIndex: 1,
          textAlign: 'center',
          paddingTop: '100px',
          paddingBottom: '100px',
        }}
      >
        <Box
          sx={{
            width: '90%',
            height: '3px',
            backgroundColor: 'white',
            opacity: 0.5,
            marginBottom: 2,
            margin: '0 auto',
          }}
        />
        <Typography variant="headline1" style={{ color: 'white' }}>
          Contribute Your Data
        </Typography>
        <Typography variant="body1" style={{ color: 'white' }}>
          If you are a funded portal contributor and ready to upload data to the
          ELITE Portal, you can begin the data submission process by contacting
          our data curation team through our service desk.
        </Typography>
        <Link
          href="https://sagebionetworks.jira.com/servicedesk/customer/portal/12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="contained"
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
            Start Contributing
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          flex: '0 0 auto',
          width: '33%',
          height: '100%',
          backgroundImage: `url(${backgroundSpotsRight})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          backgroundSize: '100%',
          zIndex: 0,
          overflow: 'clip',
        }}
      />
    </Box>
  )
}

export default ELContributeYourData
