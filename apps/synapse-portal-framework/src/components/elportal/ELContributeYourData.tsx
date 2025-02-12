import { Box } from '@mui/material'
import backgroundSpotsLeft from './assets/dot_blob_top_left.png'
import backgroundSpotsRight from './assets/dot_blob_bottom_right.png'
import { PortalSectionHeader } from 'synapse-react-client'

function ELContributeYourData() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        display: 'grid',
        gridTemplateColumns: { sm: '1fr', md: '33% 33% 33%' },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          flex: '0 0 auto',
          width: '100%',
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
          padding: { xs: '100px 40px', md: '100px 0' },
        }}
      >
        <PortalSectionHeader
          centered
          reverseButtonAndText
          title="Contribute Your Data"
          summaryText="If you are a funded portal contributor and ready to upload data to the
        ELITE Portal, you can begin the data submission process by contacting
        our data curation team through our service desk."
          buttonText="Start Contributing"
          link="https://sagebionetworks.jira.com/servicedesk/customer/portal/12"
          sx={{
            h2: {
              color: 'primary.contrastText',
              fontSize: '24px',
              borderColor: 'rgba(255, 255, 255, 0.40)',
            },
            '.MuiButton-root': { border: '1px solid white' },
            '& p': {
              fontSize: '16px',
              paddingBottom: '10px',
              color: 'primary.contrastText',
            },
          }}
        />
      </Box>
      <Box
        sx={{
          flex: '0 0 auto',
          width: '100%',
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
