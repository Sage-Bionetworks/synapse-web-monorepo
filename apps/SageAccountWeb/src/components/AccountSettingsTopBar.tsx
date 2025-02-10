import React, { RefObject, useRef } from 'react'
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
import accountSettingsPanelConfig from './accountSettingsPanelConfig.json'

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

  const handleScroll = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
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
          anchorEl={anchorEl}
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
          MenuListProps={{
            onMouseLeave: handleClose,
          }}
        >
          {accountSettingsPanelConfig.map((item: any, index: number) => (
            <MenuItem
              key={index}
              onClick={() => {
                handleClose()
                if (item.ref === 'signOutSectionRef') {
                  SynapseClient.signOut().then(() => {
                    refreshSession()
                  })
                } else if (item.ref) {
                  const ref = useRef<HTMLDivElement>(null)
                  handleScroll(ref)
                }
              }}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.08)',
                },
                '&:active': {
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  )
}

export default AccountSettingsTopBar
