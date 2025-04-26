import { Box, IconButton } from '@mui/material'
import { createRef, RefObject, SyntheticEvent, useState } from 'react'
import { ToastMessage } from './ToastMessage/ToastMessage'
import { BoxProps } from '@mui/material'
import IconSvg from './IconSvg'
import { copyStringToClipboard } from '@/utils/functions/StringUtils'

export type CopyToClipboardIconProps = BoxProps & {
  value: string
  size?: number
}

export function CopyToClipboardIcon({
  value,
  size = 16,
  ...props
}: CopyToClipboardIconProps) {
  const [showModal, setShowModal] = useState(false)
  const ref = createRef<HTMLDivElement>()

  const copyToClipboard =
    (ref: RefObject<HTMLElement>, value: string) => (event: SyntheticEvent) => {
      event.preventDefault()

      copyStringToClipboard(value, () => {
        // show modal and hide after 4 seconds, the timing is per Material Design
        setShowModal(true)
        // hide after 4 seconds
        setTimeout(() => {
          setShowModal(false)
        }, 4000)
      })
    }

  return (
    <>
      <ToastMessage
        text="Successfully copied to clipboard"
        show={showModal}
        autohide={true}
      ></ToastMessage>
      <Box display="flex" ref={ref} {...props}>
        <IconButton
          onClick={copyToClipboard(ref, value)}
          aria-label="Copy to clipboard"
        >
          <IconSvg
            icon="contentCopy"
            wrap={false}
            sx={{ width: `${size}px`, height: `${size}px` }}
          />
        </IconButton>
      </Box>
    </>
  )
}

export default CopyToClipboardIcon
