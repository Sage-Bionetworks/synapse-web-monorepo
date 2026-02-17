import SageFullLogo from '@/assets/icons/SageFullLogo'
import { Button, Paper, Typography } from '@mui/material'
import { ReactNode } from 'react'
import { useApplicationSessionContext } from '@/utils'

export type RegisterPageLogoutPromptProps = {
  logo?: ReactNode
}

export default function RegisterPageLogoutPrompt(
  props: RegisterPageLogoutPromptProps,
) {
  const { logo = <SageFullLogo width={'100%'} /> } = props

  const { clearSession } = useApplicationSessionContext()

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
          clearSession()
        }}
      >
        Log Out
      </Button>
    </Paper>
  )
}
