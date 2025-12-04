import React from 'react'
import { displayToast } from '@/components/ToastMessage/index'
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'

export const ToastDemo = (): React.ReactNode => {
  const [variant, setVariant] = useState<
    'info' | 'success' | 'warning' | 'danger'
  >('info')

  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [autoClose, setAutoClose] = useState(0)
  const [buttonText, setButtonText] = useState('')
  const [linkText, setLinkText] = useState('')

  function fireToast() {
    const primaryButtonConfig =
      buttonText === ''
        ? undefined
        : {
            text: buttonText,
            onClick: () => {
              console.log('Primary button clicked!')
            },
          }
    const secondaryButtonConfig =
      linkText === ''
        ? undefined
        : {
            text: linkText,
            href: '#',
          }

    displayToast(message, variant, {
      title: title,
      autoCloseInMs: autoClose,
      primaryButtonConfig: primaryButtonConfig,
      secondaryButtonConfig: secondaryButtonConfig,
    })
  }
  return (
    <div>
      <Typography component="label" variant="smallText2">
        Alert Variant
      </Typography>
      <RadioGroup
        value={variant}
        onChange={(_event, value) =>
          setVariant(value as 'info' | 'success' | 'warning' | 'danger')
        }
      >
        <FormControlLabel control={<Radio />} label={'Info'} value={'info'} />
        <FormControlLabel
          control={<Radio />}
          label={'Success'}
          value={'success'}
        />
        <FormControlLabel
          control={<Radio />}
          label={'Warning'}
          value={'warning'}
        />
        <FormControlLabel
          control={<Radio />}
          label={'Danger'}
          value={'danger'}
        />
      </RadioGroup>
      <TextField
        fullWidth
        margin="dense"
        label="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <TextField
        fullWidth
        margin="dense"
        label="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <TextField
        fullWidth
        margin="dense"
        label="Auto-close (ms)"
        type="number"
        value={autoClose}
        onChange={e => setAutoClose(Number.parseInt(e.target.value))}
      />
      <TextField
        fullWidth
        margin="dense"
        label="Optional Button Text"
        value={buttonText}
        onChange={e => setButtonText(e.target.value)}
      />
      <TextField
        fullWidth
        margin="dense"
        label="Optional Link Text"
        value={linkText}
        onChange={e => setLinkText(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={fireToast}
        sx={{ mt: 2 }}
      >
        Push toast message
      </Button>
    </div>
  )
}
