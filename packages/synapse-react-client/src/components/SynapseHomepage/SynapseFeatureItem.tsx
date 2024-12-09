import { Box, Typography } from '@mui/material'
import { ReactElement } from 'react'

export type SynapseFeatureItemProps = {
  title: string
  description: ReactElement
  logo: ReactElement
}

export function SynapseFeatureItem({
  title,
  description,
  logo,
}: SynapseFeatureItemProps) {
  return (
    <div className="SynapseFeatureItem">
      <Box sx={{ height: '60px' }}>{logo}</Box>
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      {description}
    </div>
  )
}
