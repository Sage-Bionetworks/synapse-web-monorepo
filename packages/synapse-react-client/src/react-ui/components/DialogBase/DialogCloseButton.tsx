import IconButton from '@mui/material/IconButton'
import { SxProps } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'

export type DialogCloseButtonProps = {
  sx?: SxProps
  onClick?: () => void
}

export const CLOSE_BUTTON_LABEL = 'close'
const DEFAULT_CLOSEBUTTON_SX: SxProps = { color: 'grey.700' }

export default function DialogCloseButton({
  sx = DEFAULT_CLOSEBUTTON_SX,
  onClick,
}: DialogCloseButtonProps) {
  return (
    <IconButton sx={sx} onClick={onClick} aria-label={CLOSE_BUTTON_LABEL}>
      <CloseIcon />
    </IconButton>
  )
}
