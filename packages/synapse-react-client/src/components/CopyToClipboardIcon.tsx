import { copyStringToClipboard } from '@/utils/functions/StringUtils'
import { IconButton, IconButtonProps, Tooltip } from '@mui/material'
import { createRef, RefObject, SyntheticEvent, useState } from 'react'
import IconSvg from './IconSvg'
import { ToastMessage } from './ToastMessage/ToastMessage'

export type CopyToClipboardIconProps = IconButtonProps & {
  value: string
  sizePx?: number
}

export function CopyToClipboardIcon({
  value,
  sizePx = 16,
  ...props
}: CopyToClipboardIconProps) {
  const [showModal, setShowModal] = useState(false)
  const ref = createRef<HTMLButtonElement>()

  const copyToClipboard =
    (ref: RefObject<HTMLElement | null>, value: string) =>
    (event: SyntheticEvent) => {
      event.preventDefault()

      copyStringToClipboard(value).then(() => {
        // show modal and hide after 4 seconds, the timing is per Material Design
        setShowModal(true)
        // hide after 4 seconds
        setTimeout(() => {
          setShowModal(false)
        }, 4000)
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
        <ToastMessage
          text="Successfully copied to clipboard"
          show={showModal}
          autohide={true}
        />
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
