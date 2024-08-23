import React from 'react'
import { Box, Typography } from '@mui/material'
import { useGetDOI } from 'src/synapse-queries/doi/useDOI'

export type EntityDOIInfoProps = {
  entityId: string
  version?: number
}

export default function EntityDOIInfo(props: EntityDOIInfoProps) {
  const { entityId, version } = props
  const { data: doi } = useGetDOI(entityId, version, 'ENTITY', {
    enabled: !!entityId,
  })
  if (!doi) {
    return <></>
  }
  return (
    <Box
      sx={{
        backgroundColor: '#FBF4E0',
        borderRadius: '3px',
        p: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Requested resource (DOI information)
      </Typography>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Title(s)
        </Typography>
        {doi.titles.map(doiTitle => (
          <Typography key={doiTitle.title} variant="body1">
            {doiTitle.title}
          </Typography>
        ))}
      </Box>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Publication Year
        </Typography>
        <Typography variant="body1">{doi.publicationYear}</Typography>
      </Box>
    </Box>
  )
}
