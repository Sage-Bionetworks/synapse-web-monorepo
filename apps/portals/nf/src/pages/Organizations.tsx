import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Box, Container, Typography } from '@mui/material'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { fundersSql } from '@/config/resources'
import {
  organizationCardSchema,
  organizationDetailsPageLinkConfig,
} from '@/config/synapseConfigs/organizations'
import { iconOptions } from '@/config/synapseConfigs/iconOptions'

export default function Organizations() {
  return (
    <Box sx={{ bgcolor: '#F5F7FA', minHeight: '100vh' }}>
      <Box
        sx={{
          background: 'linear-gradient(180deg, #EAF2F8 0%, #F5F9FC 100%)',
          borderBottom: '1px solid #DDE3EA',
          py: { xs: 5, md: 7 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: '#125e81',
              mb: 1.5,
            }}
          >
            NF-OSI
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              fontWeight: 700,
              color: '#1B2A41',
              mb: 2,
            }}
          >
            Funding Organizations
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#354A63', fontSize: '1.0625rem', maxWidth: 640 }}
          >
            The NF Open Science Initiative (NF-OSI) is made possible by a
            collaborative network of funding organizations committed to
            accelerating neurofibromatosis research through open data sharing.
          </Typography>
        </Container>
      </Box>

      {/* Override SRC-cardThumbnail sizing to match SRC-imageThumbnail so local
          PNG logos render at full width. Required because iconOptions renders
          via the cardThumbnail path, which defaults to 15% / img 50%. */}
      <SectionLayout>
        <Box
          sx={{
            '& .SRC-cardThumbnail': {
              width: '25% !important',
              maxWidth: '215px !important',
              verticalAlign: 'top !important',
              pr: '15px !important',
              '& img': {
                width: '100% !important',
                display: 'block !important',
              },
            },
          }}
        >
          <CardContainerLogic
            sql={fundersSql}
            cardConfiguration={{
              type: SynapseConstants.GENERIC_CARD,
              titleLinkConfig: organizationDetailsPageLinkConfig,
              genericCardSchema: organizationCardSchema,
              iconOptions,
            }}
          />
        </Box>
      </SectionLayout>
    </Box>
  )
}
