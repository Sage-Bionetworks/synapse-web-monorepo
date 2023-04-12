import React from 'react'
import { Button, FormControl, FormLabel } from 'react-bootstrap'
import { displayToast } from '../../../src/lib/containers/ToastMessage'
import { RadioGroup } from '../../../src/lib/containers/widgets/RadioGroup'

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
    <div className="bootstrap-4-backport">
      <FormLabel>Alert Variant</FormLabel>
      <RadioGroup
        id="toast-demo-variant"
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
      <FormLabel>Message</FormLabel>
      <FormControl value={message} onChange={e => setMessage(e.target.value)} />
      <FormLabel>Title</FormLabel>
      <FormControl value={title} onChange={e => setTitle(e.target.value)} />
      <FormLabel>Auto-close (ms)</FormLabel>
      <FormControl
        type="number"
        value={autoClose}
        onChange={e => setAutoClose(Number.parseInt(e.target.value))}
      />
      <FormLabel>Optional Button Text</FormLabel>
      <FormControl
        value={buttonText}
        onChange={e => setButtonText(e.target.value)}
      />
      <FormLabel>Optional Link Text</FormLabel>
      <FormControl
        value={linkText}
        onChange={e => setLinkText(e.target.value)}
      />

      <Button variant="primary-500" onClick={fireToast}>
        Push toast message
      </Button>
    </div>
  )
}
