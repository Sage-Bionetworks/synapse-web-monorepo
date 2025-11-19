import Button from '@/react-ui/components/Button'
import { styled } from '@mui/material/styles'
import type MUIButton from '@mui/material/Button'

const GenericCardActionButton = styled(Button)({
  height: '20px',
  padding: '2px 8px',
  borderColor: 'grey.400',
  fontWeight: 700,
  lineHeight: '20px',
  '& .MuiButton-startIcon': { marginRight: '4px', marginLeft: 0 },
}) as typeof MUIButton

export default GenericCardActionButton
