import React from 'react'
import { signOut } from 'synapse-react-client/dist/utils/SynapseClient'
import { BadgeOutlined } from '@mui/icons-material'
import { Box, SxProps, Button } from '@mui/material'
import { Typography } from 'synapse-react-client'

const AccountSettingsTopBar: React.FunctionComponent = () => {
  const iconSx: SxProps = {
    width: '32px',
    height: '32px',
    ml: '20px',
    mr: '10px',
  }
  return (
    <>
      {
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
          </Box>
          <Button
            variant="text"
            sx={{ color: '#515359', marginRight: '15px' }}
            onClick={() => {
              signOut(() => {
                window.location.reload()
              })
            }}
          >
            Sign out
          </Button>
        </Box>
      }
    </>
  )
}

export default AccountSettingsTopBar
