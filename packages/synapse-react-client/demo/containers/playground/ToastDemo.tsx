import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { displayToast } from '../../../src/components/ToastMessage/ToastMessage'
import { RadioGroup } from '../../../src/components/widgets/RadioGroup'

export const ToastDemo = () => {
  const [variant, setVariant] = React.useState<
    'info' | 'success' | 'warning' | 'danger'
  >('info')

  const [title, setTitle] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [autoClose, setAutoClose] = React.useState(0)
  const [buttonText, setButtonText] = React.useState('')
  const [linkText, setLinkText] = React.useState('')

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
      {/* 
        theme will be provided by StorybookComponentWrapper when this component appears in a Story, 
        which is the only place where this component is used, 
        so ignore that "smallText2" is not a default MUI Typography variant
      @ts-ignore */}
      <Typography component="label" variant="smallText2">
        Alert Variant
      </Typography>
      <RadioGroup
        options={[
          { label: 'Info', value: 'info' },
          { label: 'Success', value: 'success' },
          { label: 'Warning', value: 'warning' },
          { label: 'Danger', value: 'danger' },
        ]}
        value={variant}
        onChange={value =>
          setVariant(value as 'info' | 'success' | 'warning' | 'danger')
        }
      />
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
