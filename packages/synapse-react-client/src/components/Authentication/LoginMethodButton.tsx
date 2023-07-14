import { Box, Button } from '@mui/material'
import React from 'react'
import IconSvg, { IconName } from '../IconSvg'
import LastLoginInfo, { useLastLoginInfo } from './LastLoginInfo'
import { LoginMethod, getLoginMethodFriendlyName } from './LoginMethod'

export type LoginMethodButtonProps = {
  loginMethod: LoginMethod
  iconName: IconName
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function LoginMethodButton(props: LoginMethodButtonProps) {
  const { loginMethod, iconName, onClick } = props

  const { lastLoginMethod, ...rest } = useLastLoginInfo()
  const lastLoginInfo = LastLoginInfo({
    lastLoginMethod: lastLoginMethod,
    display: 'sentence',
    ...rest,
  })

  const shouldShowLastLoginInfo =
    lastLoginMethod === loginMethod && lastLoginInfo

  const buttonSx = {
    color: 'grey.800',
    mb: '10px',
  }
  const iconSx = {
    width: '28px',
    height: '28px',
  }

  const buttonText = `Sign in with ${getLoginMethodFriendlyName(loginMethod)}`

  return (
    <>
      {shouldShowLastLoginInfo ? (
        <Button
          fullWidth
          variant="outlined"
          onClick={onClick}
          sx={{ ...buttonSx, height: '74px', py: 1.5 }}
        >
          <Box flexDirection="column">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb="10px"
            >
              <IconSvg icon={iconName} sx={{ ...iconSx, mr: 1, ml: -0.5 }} />
              {buttonText}
            </Box>
            {lastLoginInfo}
          </Box>
        </Button>
      ) : (
        <Button
          fullWidth
          variant="outlined"
          onClick={onClick}
          sx={{ ...buttonSx, height: '50px' }}
          startIcon={<IconSvg icon={iconName} sx={iconSx} />}
        >
          {buttonText}
        </Button>
      )}
    </>
  )
}
