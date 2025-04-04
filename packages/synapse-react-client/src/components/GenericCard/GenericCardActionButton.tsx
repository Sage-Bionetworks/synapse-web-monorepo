import { Button } from '@mui/material'
import { styled } from '@mui/system'

const GenericCardActionButton = styled(Button)({
  display: 'flex',
  height: '20px',
  padding: '2px 8px',
  borderColor: 'grey.400',
  '& .MuiButton-startIcon': { marginRight: '4px', marginLeft: 0 },
})

export default GenericCardActionButton
