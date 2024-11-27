import { Box, BoxProps } from '@mui/material'
import React from 'react'

const NoSearchResults = (props: BoxProps) => (
  <Box
    {...props}
    component={'img'}
    src={
      'https://s3.us-east-1.amazonaws.com/static.synapse.org/images/NoSearchResults.svg'
    }
  />
)

export default NoSearchResults
