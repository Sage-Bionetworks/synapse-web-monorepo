import { Box, Stack } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { ReactComponent as SynapseIconLogo } from './assets/SynapseIconLogo.svg'

const SynapseFileEntityLinkCard = () => {
  return (
    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <SynapseIconLogo />
      <Stack>
        <h2>View this file on Synapse.org</h2>
        <p>
          Synapse empowers biomedical researchers with tools for open science
          and collaboration.
        </p>
      </Stack>
      <OpenInNewIcon sx={{ marginLeft: 'auto' }} />
    </Box>
  )
}

export default SynapseFileEntityLinkCard
