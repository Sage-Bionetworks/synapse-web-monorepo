import { Box, Button, SxProps } from '@mui/material'
import { MouseEventHandler } from 'react'
import IconSvg, { IconName } from '../IconSvg'
import LastLoginInfo, { useLastLoginInfo } from './LastLoginInfo'
import { LoginMethod, getLoginMethodFriendlyName } from './LoginMethod'

const buttonSx: SxProps = {
  color: 'grey.800',
  mb: '10px',
}

const iconSx: SxProps = {
  width: '28px',
  height: '28px',
}

export type LoginMethodButtonProps = {
  loginMethod: LoginMethod
  iconName?: IconName
  onClick: MouseEventHandler<HTMLButtonElement>
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

  const buttonText = `Sign in with ${getLoginMethodFriendlyName(loginMethod)}`

  return (
    <>
      {shouldShowLastLoginInfo ? (
        <Button
          fullWidth
          variant="outlined"
          onClick={onClick}
          sx={{ ...buttonSx, height: '74px', py: 1.5 }}
          data-testid="button-with-last-login-info"
        >
          <Box
            sx={{
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: '10px',
              }}
            >
              {iconName && (
                <IconSvg icon={iconName} sx={{ ...iconSx, mr: 1, ml: -0.5 }} />
              )}
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
          startIcon={iconName && <IconSvg icon={iconName} sx={iconSx} />}
          data-testid="button-without-last-login-info"
        >
          {buttonText}
        </Button>
      )}
    </>
  )
}
