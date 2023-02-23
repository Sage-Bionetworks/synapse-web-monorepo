import React from 'react'
import { Box, Button } from '@mui/material'
import { MuiOtpInput } from 'mui-one-time-password-input'

const TOTP_LENGTH = 6
const DIGIT_CHARACTERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

type TOTPFormProps = {
  onSubmit: (value: string) => void
}

export default function TOTPForm(props: TOTPFormProps) {
  const { onSubmit } = props
  const [verificationCode, setVerificationCode] = React.useState('')
  return (
    <Box>
      <MuiOtpInput
        length={TOTP_LENGTH}
        value={verificationCode}
        onChange={setVerificationCode}
        onComplete={onSubmit}
        validateChar={(character: string) => {
          return DIGIT_CHARACTERS.includes(character) || character === ''
        }}
        gap={0}
        sx={{
          '.MuiFormControl-root:first-of-type > .MuiInputBase-root': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
          '.MuiFormControl-root:last-of-type > .MuiInputBase-root': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
          '.MuiFormControl-root:not(:first-of-type):not(:last-of-type) > .MuiInputBase-root':
            {
              borderRadius: 0,
            },
        }}
      />

      <Button
        fullWidth
        type="submit"
        color="primary"
        variant="contained"
        sx={{
          height: '50px',
          mt: 4,
          mb: 2,
        }}
        disabled={verificationCode.length !== TOTP_LENGTH}
        onClick={e => {
          e.preventDefault()
          onSubmit(verificationCode)
        }}
      >
        Submit
      </Button>
    </Box>
  )
}
