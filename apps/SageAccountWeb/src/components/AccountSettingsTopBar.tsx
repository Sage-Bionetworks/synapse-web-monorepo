import React, { RefObject, useRef } from 'react'
import { BadgeOutlined } from '@mui/icons-material'
import { Box, SxProps, Typography } from '@mui/material'
import { useSourceApp } from './useSourceApp'
import { useAppContext } from '../AppContext'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useApplicationSessionContext } from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext'

interface AccountSettingsTopBarProps {
  accountSettingsPanelConfig: Array<{
    label: string
    ref: RefObject<HTMLDivElement | null>
  }>
}

const AccountSettingsTopBar: React.FC<AccountSettingsTopBarProps> = ({
  accountSettingsPanelConfig,
}) => {
  const sourceApp = useSourceApp()
  const iconSx: SxProps = {
    width: '32px',
    height: '32px',
    ml: '20px',
    mr: '10px',
  }
  const appContext = useAppContext()
  const { clearSession } = useApplicationSessionContext()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const signOutSectionRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = React.useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen)
  }

  const handleScroll = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '60px',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        zIndex: 10,
        backgroundColor: 'white',
      }}
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
          onClick={handleClick}
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
          open={isOpen}
          onClose={handleClose}
          sx={{ mt: '30px' }}
        >
          {accountSettingsPanelConfig.map((item: any, index: number) => (
            <MenuItem
              key={index}
              onClick={() => {
                handleClose()
                if (item.ref === signOutSectionRef) {
                  clearSession()
                } else if (item.ref) {
                  handleScroll(item.ref)
                  setAnchorEl(item.ref)
                  setIsOpen(false)
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
