import { Box, Typography } from '@mui/material'
import { memo } from 'react'
import { ExperimentalFeatures } from 'synapse-react-client/components/ExperimentalFeatures/index'

function Footer() {
  return (
    <footer id="footer">
      <Box
        sx={{
          backgroundColor: '#76919e',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: { xs: '20px 40px', md: '40px 80px' },
          color: 'white',
        }}
      >
        <Typography variant="body1">Sage Bionetworks</Typography>
        <ExperimentalFeatures
          scopes={['ACCOUNTS']}
          onSave={() => window.location.reload()}
        />
      </Box>
    </footer>
  )
}

export default memo(Footer)
