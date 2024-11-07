import { Box, Link, Button } from '@mui/material'
import React from 'react'
import backgroundSpotsLeft from './assets/dot_blob_2.png'
import backgroundSpotsRight from './assets/dot_blob_1.png'

const ELContributeYourData: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#5BA998',
        height: '300px',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: 2,
      }}
    >
      <Box
        sx={{
          flex: '0 0 auto',
          width: '33%',
          height: '100%',
          backgroundImage: `url(${backgroundSpotsLeft})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'upper left',
          backgroundSize: '125%',
          opacity: 0.5,
          zIndex: 0,
          overflow: 'clip',
        }}
      />
      <Box
        sx={{
          flex: '1 1 auto',
          paddingLeft: 2,
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            width: '90%',
            height: '5px',
            backgroundColor: 'white',
            opacity: 0.5,
            marginBottom: 2,
            margin: '0 auto',
          }}
        />
        <h1 style={{ color: 'white' }}>Contribute Your Data</h1>
        <p style={{ color: 'white' }}>
          If you are a funded portal contributor and ready to upload data to the
          ELITE Portal, you can begin the data submission process by contacting
          our data curation team through our service desk.
        </p>
        <Link
          href="https://sagebionetworks.jira.com/servicedesk/customer/portal/12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="contained">Start Contributing</Button>
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
          backgroundSize: '125%',
          opacity: 0.5,
          zIndex: 0,
          overflow: 'clip',
        }}
      />
    </Box>
  )
}

export default ELContributeYourData
