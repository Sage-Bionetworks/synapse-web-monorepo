import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { memo } from 'react'
import { ExperimentalMode } from 'synapse-react-client/components/ExperimentalMode'

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
