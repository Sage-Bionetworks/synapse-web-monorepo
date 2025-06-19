import { useGetDOI } from '@/synapse-queries/doi/useDOI'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { DoiObjectType } from '@sage-bionetworks/synapse-client'

export type EntityDOIInfoProps = {
  entityId: string
  version?: number
}

export default function EntityDOIInfo(props: EntityDOIInfoProps) {
  const { entityId, version } = props
  const { data: doi } = useGetDOI(
    { id: entityId, version, type: DoiObjectType.ENTITY },
    {
      enabled: !!entityId,
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
