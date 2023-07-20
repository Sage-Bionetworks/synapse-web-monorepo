import { Box, Typography } from '@mui/material'
import React, { ReactElement } from 'react'

export type SynapseFeatureItemProps = {
  title: string
  description: ReactElement
  logo: ReactElement
}

export const SynapseFeatureItem: React.FunctionComponent<
  SynapseFeatureItemProps
> = ({ title, description, logo }) => {
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
