import Box from '@mui/material/Box'
import { BoxProps } from '@mui/material/Box'

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
