import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { LinkProps, SxProps } from '@mui/material'

export type SynapseLinksColumnProps = {
  category: string
  synapseLinks: SynapseLink[]
}
export type SynapseLink = {
  text: string
  props: LinkProps
}

export const SynapseLinksColumn: React.FunctionComponent<
  SynapseLinksColumnProps
> = ({ category, synapseLinks }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
      <Typography
        variant="body1"
        sx={{
          color: 'white',
        }}
      >
        {category}
      </Typography>
      {synapseLinks.map(synapseLink => (
        <Link
          key={synapseLink.text}
          target="_blank"
          sx={{
            color: '#B0BDC9',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '24px',
            textDecoration: 'none',
            '&:focus': {
              color: '#B0BDC9',
              textDecoration: 'none',
            },
            '&:visited': {
              color: '#B0BDC9',
              textDecoration: 'none',
            },
            '&:hover': {
              color: 'white',
              textDecoration: 'none',
            },
          }}
          {...synapseLink.props}
        >
          {synapseLink.text}
        </Link>
      ))}
    </Box>
  )
}
