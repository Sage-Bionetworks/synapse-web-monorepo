import React from 'react'
import { BadgeOutlined } from '@mui/icons-material'
import { Box, SxProps, Typography } from '@mui/material'
import { useSourceApp } from './useSourceApp'
import { useAppContext } from '../AppContext'
import {
  SynapseClient,
  useApplicationSessionContext,
} from 'synapse-react-client'
//import { Link } from '@mui/material'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        height: '60px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      onClick={event => setAnchorEl(event.currentTarget)}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <BadgeOutlined sx={iconSx} />
        <Typography variant="headline3" sx={{ display: 'inline' }}>
          Account Settings
        </Typography>
        <Box
          className="AccountSettingsSourceAppLogo"
          sx={{ marginLeft: '30px', display: { xs: 'none', md: 'block' } }}
        >
          <a href={appContext?.redirectURL}>{sourceApp?.logo}</a>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              SynapseClient.signOut().then(() => {
                refreshSession()
              })
            }}
          >
            Sign out
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  )
}

export default AccountSettingsTopBar
