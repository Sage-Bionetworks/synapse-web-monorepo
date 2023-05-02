import React from 'react'
import { signOut } from 'synapse-react-client/dist/utils/SynapseClient'
import { BadgeOutlined } from '@mui/icons-material'
import { Box, Button, SxProps, Typography } from '@mui/material'
import { useSourceApp } from './SourceApp'
import { useAppContext } from '../AppContext'
import { useApplicationSessionContext } from 'synapse-react-client/dist/utils/apputils/session/ApplicationSessionContext'

const AccountSettingsTopBar: React.FunctionComponent = () => {
  const sourceApp = useSourceApp()
  const iconSx: SxProps = {
    width: '32px',
    height: '32px',
    ml: '20px',
    mr: '10px',
  }
  const appContext = useAppContext()
  const { refreshSession } = useApplicationSessionContext()

  return (
    <Box
      sx={{
        display: 'flex',
        height: '60px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <BadgeOutlined sx={iconSx} />
        <Typography variant="headline3" sx={{ display: 'inline' }}>
          Account Settings
        </Typography>
        <Box
          className="AccountSettingsSourceAppLogo"
          sx={{ marginLeft: '30px' }}
        >
          <a href={appContext?.redirectURL}>{sourceApp?.logo}</a>
        </Box>
      </Box>
      <Button
        variant="text"
        sx={{ color: '#515359', marginRight: '15px' }}
        onClick={() => {
          signOut().then(() => {
            refreshSession()
          })
        }}
      >
        Sign out
      </Button>
    </Box>
  )
}

export default AccountSettingsTopBar
