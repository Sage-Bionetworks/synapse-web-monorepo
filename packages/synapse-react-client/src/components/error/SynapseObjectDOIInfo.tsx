import { useGetDOI } from '@/synapse-queries/doi/useDOI'
import { Box, Typography } from '@mui/material'
import { DoiObjectType } from '@sage-bionetworks/synapse-client'

export type SynapseObjectDOIInfoProps = {
  id: string
  type: DoiObjectType
  version?: number
  portalId?: string
}

export default function SynapseObjectDOIInfo(props: SynapseObjectDOIInfoProps) {
  const { id, version, type, portalId } = props
  const { data: doi } = useGetDOI(
    { id, version, type, portalId },
    {
      enabled: !!id,
    },
  )
  if (!doi) {
    return <></>
  }
  return (
    <Box
      sx={{
        backgroundColor: 'tertiary.100',
        borderRadius: '3px',
        p: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Requested resource
      </Typography>
      <Box>
        <Typography variant="body1">
          {doi.creators?.map(doiCreator => doiCreator.creatorName).join(', & ')}{' '}
          ({doi.publicationYear}).{' '}
          {doi.titles?.map(doiTitle => `${doiTitle.title}.`)} Synapse.
          https://doi.org/{doi.doiUri}
        </Typography>
      </Box>
    </Box>
  )
}
