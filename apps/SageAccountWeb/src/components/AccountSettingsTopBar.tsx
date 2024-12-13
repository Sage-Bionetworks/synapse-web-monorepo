import { BadgeOutlined } from '@mui/icons-material'
import { Box, Link, SxProps, Typography } from '@mui/material'
import SynapseClient from 'synapse-react-client/synapse-client'
import { useApplicationSessionContext } from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext'
import { useAppContext } from '../AppContext'
import { useSourceApp } from './useSourceApp'

function AccountSettingsTopBar() {
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
      <Link
        sx={{ marginRight: '15px' }}
        onClick={() => {
          SynapseClient.signOut().then(() => {
            refreshSession()
          })
        }}
      >
        Sign out
      </Link>
    </Box>
  )
}

export default AccountSettingsTopBar
