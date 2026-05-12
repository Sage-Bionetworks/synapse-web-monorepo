import { useEffect, useRef } from 'react'
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  SxProps,
  TextField,
  Typography,
} from '@mui/material'
import { ReactComponent as EmailWithNotification } from '@/assets/icons/emailWithNotification.svg'
import EmailAddressAdornment from '@/assets/icons/EmailAddressAdornment'
import MailchimpSubscribe, {
  EmailFormFields,
  FormHooks,
} from 'react-mailchimp-subscribe'
import styles from './MailchimpSubscribeSection.module.scss'

export type MailchimpSubscribeSectionProps = {
  headline: string
  description: string
  mailchimpUrl: string
  headlineSx?: SxProps
  background?: string
}

type MailchimpFormProps = FormHooks<EmailFormFields>

function MailchimpForm({ subscribe, status, message }: MailchimpFormProps) {
  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (status === 'success' && emailRef.current) {
      emailRef.current.value = ''
    }
  }, [status])

  return (
    <form
      className={styles.formWrapper}
      onSubmit={e => {
        e.preventDefault()
        if (emailRef.current) {
          subscribe({ EMAIL: emailRef.current.value })
        }
      }}
    >
      <div className={styles.formRow}>
        <TextField
          inputRef={emailRef}
          placeholder="Your email"
          type="email"
          size="small"
          required
          inputProps={{ 'aria-label': 'Email address' }}
          className={styles.emailInput}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailAddressAdornment color="primary" fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          disableElevation
          disabled={status === 'sending'}
          className={styles.submitButton}
        >
          Sign Up
        </Button>
      </div>
      {status === 'sending' && (
        <Typography variant="caption" className={styles.statusMessage}>
          Sending...
        </Typography>
      )}
      {status === 'error' && (
        <Typography
          variant="caption"
          color="error"
          className={styles.statusMessage}
        >
          {typeof message === 'string' ? message : 'An error occurred.'}
        </Typography>
      )}
      {status === 'success' && (
        <Typography
          variant="caption"
          sx={{ color: 'success.main' }}
          className={styles.statusMessage}
        >
          {message}
        </Typography>
      )}
    </form>
  )
}

export default function MailchimpSubscribeSection({
  headline,
  description,
  mailchimpUrl,
  headlineSx,
  background,
}: MailchimpSubscribeSectionProps) {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={4}
      alignItems="center"
      sx={theme => ({
        background: background ? background : theme.palette.lightPrimary.main,
        borderRadius: '12px',
        padding: 3,
      })}
    >
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="headline1" sx={headlineSx}>
          {headline}
        </Typography>
        <Typography variant="body1" className={styles.description}>
          {description}
        </Typography>
        <MailchimpSubscribe
          url={mailchimpUrl}
          render={props => <MailchimpForm {...props} />}
        />
      </Box>
      <div className={styles.imageColumn}>
        <EmailWithNotification />
      </div>
    </Stack>
  )
}
