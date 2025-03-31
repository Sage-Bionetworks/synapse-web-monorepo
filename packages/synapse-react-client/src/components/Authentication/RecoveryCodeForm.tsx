import { UseLoginReturn } from '@/utils/hooks'
import { Box, Button } from '@mui/material'
import { useState } from 'react'
import TextField from '../TextField/TextField'

// 16 characters separated into chunks of 4 by 3 hyphens
const RECOVERY_CODE_LENGTH = 19

type RecoveryCodeFormProps = {
  onSubmit: (value: string) => void
  loginIsPending: UseLoginReturn['loginIsPending']
}

export default function RecoveryCodeForm(props: RecoveryCodeFormProps) {
  const { onSubmit, loginIsPending } = props
  const [recoveryCode, setRecoveryCode] = useState('')
  return (
    <Box>
      <TextField
        placeholder="Enter backup code"
        value={recoveryCode}
        onChange={e => {
          // coerce the input to lowercase and remove any nonalphanumeric or hyphen characters
          const valueWithAllowedChars = e.target.value
            .toLowerCase()
            .replace(/[^a-z0-9-]/gi, '')
          setRecoveryCode(valueWithAllowedChars)
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
        disabled={
          recoveryCode.length !== RECOVERY_CODE_LENGTH || loginIsPending
        }
        onClick={e => {
          e.preventDefault()
          onSubmit(recoveryCode)
        }}
      >
        {loginIsPending ? 'Verifying...' : 'Submit'}
      </Button>
    </Box>
  )
}
