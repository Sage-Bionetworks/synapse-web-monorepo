import React from 'react'
import { Box, BoxProps } from '@mui/material'

const NoSearchResults = (props: BoxProps): React.ReactNode => (
  <Box
    {...props}
    component={'img'}
    src={
      'https://s3.us-east-1.amazonaws.com/static.synapse.org/images/NoSearchResults.svg'
    }
  />
)

export default NoSearchResults
