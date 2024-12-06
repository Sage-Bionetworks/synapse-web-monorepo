import { Box, Typography } from '@mui/material'
import { memo } from 'react'
import { ExperimentalMode } from 'synapse-react-client'

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
        <ExperimentalMode />
      </Box>
    </footer>
  )
}

export default memo(Footer)
