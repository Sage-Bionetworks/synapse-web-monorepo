import { Card, Link, Stack, Typography } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { ReactComponent as SynapseIconLogo } from './assets/SynapseIconLogo.svg'
import { getSynapseEntityUrl } from 'synapse-react-client/utils/functions/getSynapseEntityUrl'

const SynapseFileEntityLinkCard = ({
  synId,
  version,
}: {
  synId: string
  version?: number
}) => {
  const synapseUrl = getSynapseEntityUrl(synId, version)

  return (
    <Link
      href={synapseUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View this file on Synapse.org"
      sx={{
        display: 'block',
        textDecoration: 'none !important',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          padding: '30px',
        }}
      >
        <SynapseIconLogo />
        <Stack>
          <Typography
            variant="headline3"
            sx={{ color: 'grey.800', fontSize: '16px', marginBottom: '10px' }}
          >
            View this file on Synapse.org
          </Typography>
          <Typography variant="smallText1" sx={{ color: 'grey.700' }}>
            Synapse empowers biomedical researchers with tools for open science
            and collaboration.
          </Typography>
        </Stack>
        <OpenInNewIcon
          sx={{
            color: '#878E95',
            width: '32px',
            height: '32px',
            marginLeft: 'auto',
          }}
        />
      </Card>
    </Link>
  )
}

export default SynapseFileEntityLinkCard
