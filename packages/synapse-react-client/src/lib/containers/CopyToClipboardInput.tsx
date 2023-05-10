import * as React from 'react'
import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { ToastMessage } from './ToastMessage'

export type CopyToClipboardInputProps = {
  value: string
  inputWidth: string
}

/**
 * Component that holds a large string in a readonly <input> to be copied to the user's clipboard when clicked.
 * This component should only be used when the full length of the string value to copy does not necessarily need to be
 * seen by the user. This component was adapted from the email address copy to clipboard functionality in UserCardMedium.
 * For smaller/inline strings, look at UserCardMedium functionality for displaying the value in a <p> tag instead of a
 * readonly <input> tag.
 */
export const CopyToClipboardInput: React.FunctionComponent<
  CopyToClipboardInputProps
> = ({ value, inputWidth }: CopyToClipboardInputProps) => {
  const [showModal, setShowModal] = React.useState(false)
  const ref = React.createRef<HTMLDivElement>()

  const copyToClipboard =
    (ref: React.RefObject<HTMLElement>, value: string) =>
    (event: React.SyntheticEvent) => {
      event.preventDefault()

      // use the Clipboard API
      // https://caniuse.com/mdn-api_clipboard_writetext
      navigator.clipboard.writeText(value).then(() => {
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
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          my: 2,
          mx: 0,
        }}
        ref={ref}
      >
        <TextField
          sx={{
            width: inputWidth,
          }}
          value={value}
          inputProps={{
            readOnly: true,
            onClick: copyToClipboard(ref, value),
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={copyToClipboard(ref, value)}>
                  <ContentCopyIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  )
}

export default CopyToClipboardInput
