import { copyStringToClipboard } from '@/utils/functions/StringUtils'
import { IconButton, IconButtonProps, Tooltip } from '@mui/material'
import { createRef, RefObject, SyntheticEvent } from 'react'
import IconSvg from './IconSvg'
import { displayToast } from './ToastMessage/ToastMessage'

export type CopyToClipboardIconProps = IconButtonProps & {
  value: string
  sizePx?: number
}

export function CopyToClipboardIcon({
  value,
  sizePx = 16,
  ...props
}: CopyToClipboardIconProps) {
  const ref = createRef<HTMLButtonElement>()

  const copyToClipboard =
    (ref: RefObject<HTMLElement | null>, value: string) =>
    (event: SyntheticEvent) => {
      event.preventDefault()

      copyStringToClipboard(value).then(() => {
        displayToast('Successfully copied to clipboard', 'success')
      })
    }

  return (
    <Tooltip title={'Copy to Clipboard'}>
      <IconButton
        ref={ref}
        {...props}
        onClick={copyToClipboard(ref, value)}
        aria-label="Copy to clipboard"
      >
        <IconSvg
          icon="contentCopy"
          wrap={false}
          fontSize={'inherit'}
          sx={
            sizePx ? { width: `${sizePx}px`, height: `${sizePx}px` } : undefined
          }
        />
      </IconButton>
    </Tooltip>
  )
}

export default CopyToClipboardIcon
