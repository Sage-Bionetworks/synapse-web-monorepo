import React from 'react'
import { Button, Paper, Typography } from '@mui/material'
import { ReactComponent as SageLogo } from '../../assets/logos/sage-logo.svg'
import SynapseClient from '../../synapse-client'
import { displayToast } from '../ToastMessage'

export type RegisterPageLogoutPromptProps = {
  onLogout: () => void
  logo?: React.ReactNode
}

export default function RegisterPageLogoutPrompt(
  props: RegisterPageLogoutPromptProps,
) {
  const { onLogout, logo = <SageLogo width={'100%'} /> } = props
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
      <Typography variant={'headline3'} my={1}>
        Already Logged In
      </Typography>
      <Typography variant={'smallText1'} my={1}>
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
