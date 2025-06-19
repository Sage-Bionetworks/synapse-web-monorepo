import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const GenericCardActionButton = styled(Button)({
  height: '20px',
  padding: '2px 8px',
  borderColor: 'grey.400',
  fontWeight: 700,
  lineHeight: '20px',
  '& .MuiButton-startIcon': { marginRight: '4px', marginLeft: 0 },
}) as typeof Button

export default GenericCardActionButton
