import SageFullLogo from '@/assets/icons/SageFullLogo'
import SynapseClient from '@/synapse-client'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { ReactNode } from 'react'
import { displayToast } from '../ToastMessage'

export type RegisterPageLogoutPromptProps = {
  onLogout: () => void
  logo?: ReactNode
}

export default function RegisterPageLogoutPrompt(
  props: RegisterPageLogoutPromptProps,
) {
  const { onLogout, logo = <SageFullLogo width={'100%'} /> } = props
  return (
    <Paper
      sx={{
        width: '450px',
        px: 8,
        py: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {logo}
      <Typography
        variant={'headline3'}
        sx={{
          my: 1,
        }}
      >
        Already Logged In
      </Typography>
      <Typography
        variant={'smallText1'}
        sx={{
          my: 1,
        }}
      >
        To register an account, please log out first
      </Typography>
      <Button
        variant={'contained'}
        size={'large'}
        fullWidth
        sx={{ p: 1.5, mt: 5, fontSize: '16px' }}
        onClick={() => {
          SynapseClient.signOut()
            .then(() => {
              onLogout()
            })
            .catch(err => {
              displayToast(err.message, 'danger')
            })
        }}
      >
        Log Out
      </Button>
    </Paper>
  )
}
