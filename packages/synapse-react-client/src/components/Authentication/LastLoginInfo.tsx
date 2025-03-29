import { formatDate } from '@/utils/functions/DateFormatter'
import {
  CURRENT_SOURCEAPP_NAME_LOCALSTORAGE_KEY,
  LAST_LOGIN_DATE_LOCALSTORAGE_KEY,
  LAST_LOGIN_METHOD_LOCALSTORAGE_KEY,
  LAST_LOGIN_SOURCEAPP_NAME_LOCALSTORAGE_KEY,
  LAST_LOGIN_SOURCEAPP_URL_LOCALSTORAGE_KEY,
} from '@/utils/SynapseConstants'
import { InfoTwoTone } from '@mui/icons-material'
import { Box, Link, Tooltip, Typography } from '@mui/material'
import { useLocalStorageValue } from '@react-hookz/web'
import dayjs from 'dayjs'
import { getLoginMethodFriendlyName, LoginMethod } from './LoginMethod'

export type LastLoginInfoProps = {
  currentSourceAppName: string | undefined
  lastLoginMethod: LoginMethod | undefined
  lastLoginSourceAppName: string | undefined
  lastLoginSourceAppURL: string | undefined
  lastLoginDate: string | undefined
  display: 'sentence' | 'box'
}

export function useLastLoginInfoState() {
  return {
    currentSourceAppNameState: useLocalStorageValue<string>(
      CURRENT_SOURCEAPP_NAME_LOCALSTORAGE_KEY,
    ),
    lastLoginMethodState: useLocalStorageValue<LoginMethod>(
      LAST_LOGIN_METHOD_LOCALSTORAGE_KEY,
    ),
    lastLoginSourceAppNameState: useLocalStorageValue<string>(
      LAST_LOGIN_SOURCEAPP_NAME_LOCALSTORAGE_KEY,
    ),
    lastLoginSourceAppURLState: useLocalStorageValue<string>(
      LAST_LOGIN_SOURCEAPP_URL_LOCALSTORAGE_KEY,
    ),
    lastLoginDateState: useLocalStorageValue<string>(
      LAST_LOGIN_DATE_LOCALSTORAGE_KEY,
    ),
  }
}

export function useLastLoginInfo() {
  const states = useLastLoginInfoState()
  return {
    currentSourceAppName: states.currentSourceAppNameState.value,
    lastLoginMethod: states.lastLoginMethodState.value,
    lastLoginSourceAppName: states.lastLoginSourceAppNameState.value,
    lastLoginSourceAppURL: states.lastLoginSourceAppURLState.value,
    lastLoginDate: states.lastLoginDateState.value,
  }
}

export function clearLastLoginInfo() {
  const keys = [
    CURRENT_SOURCEAPP_NAME_LOCALSTORAGE_KEY,
    LAST_LOGIN_METHOD_LOCALSTORAGE_KEY,
    LAST_LOGIN_SOURCEAPP_NAME_LOCALSTORAGE_KEY,
    LAST_LOGIN_SOURCEAPP_URL_LOCALSTORAGE_KEY,
    LAST_LOGIN_DATE_LOCALSTORAGE_KEY,
  ]
  keys.forEach(key => localStorage.removeItem(key))
}

function getSourceAppIndefiniteArticle(val: string) {
  return val.match(/^[aeiou]/i) ? 'an' : 'a'
}

function getSourceAppDefiniteArticle(val: string) {
  return val.match(' Portal$') ? 'the ' : ''
}

export default function LastLoginInfo(props: LastLoginInfoProps) {
  const {
    currentSourceAppName,
    lastLoginMethod,
    lastLoginSourceAppName,
    lastLoginSourceAppURL,
    lastLoginDate,
    display,
  } = props

  const showLastLoginInfo =
    currentSourceAppName &&
    lastLoginMethod &&
    lastLoginSourceAppName &&
    lastLoginSourceAppURL &&
    lastLoginDate &&
    currentSourceAppName !== lastLoginSourceAppName

  if (!showLastLoginInfo) {
    return null
  }

  const currentSourceAppIndefiniteArticle =
    getSourceAppIndefiniteArticle(currentSourceAppName)
  const currentSourceAppDefiniteArticle =
    getSourceAppDefiniteArticle(currentSourceAppName)
  const lastLoginSourceAppDefiniteArticle = getSourceAppDefiniteArticle(
    lastLoginSourceAppName,
  )

  const title = `You may already have ${currentSourceAppIndefiniteArticle} ${currentSourceAppName} account`
  const accountLastUsed = `Account last used on ${formatDate(
    dayjs(lastLoginDate),
    'MMMM D, YYYY',
  )}`

  const tooltipText = (
    <>
      <Typography variant="smallText2" mb={1}>
        {title}
      </Typography>
      <Typography variant="smallText1" mb={1} color="white">
        {`This computer was used to sign in to an account on ${lastLoginSourceAppDefiniteArticle}${lastLoginSourceAppName}. 
          You can use the same account to sign in to ${currentSourceAppDefiniteArticle}${currentSourceAppName}.`}
      </Typography>
      <Typography variant="smallText1" color="white">
        {accountLastUsed}
      </Typography>
    </>
  )

  const boxText = (
    <>
      <Typography
        variant="smallText2"
        mb={1}
        sx={{ color: 'grey.900', fontSize: '12px' }}
      >
        {title}
      </Typography>
      <Typography
        variant="smallText1"
        mb={1}
        sx={{ color: 'grey.900', fontSize: '12px' }}
      >
        It looks like you already have an account, last used on{' '}
        {lastLoginSourceAppDefiniteArticle}
        <Link href={lastLoginSourceAppURL}>{lastLoginSourceAppName}</Link>.{' '}
        {`You can use this account to sign in via ${getLoginMethodFriendlyName(
          lastLoginMethod,
        )}.`}
      </Typography>
      <Typography
        variant="smallText1"
        sx={{ color: 'grey.700', fontSize: '10px' }}
      >
        {accountLastUsed}
      </Typography>
    </>
  )

  return (
    <>
      {display === 'sentence' ? (
        <Typography
          variant="smallText1"
          sx={{ color: 'grey.700', textTransform: 'none' }}
        >
          You may be able to use an existing account
          <Tooltip
            title={tooltipText}
            placement={'top'}
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: '#63676C',
                  '& .MuiTooltip-arrow': {
                    color: '#63676C',
                  },
                },
              },
            }}
          >
            <InfoTwoTone
              sx={{
                color: 'grey.700',
                width: '12px',
                height: '12px',
                ml: '4px',
                verticalAlign: 'middle',
              }}
            />
          </Tooltip>
        </Typography>
      ) : (
        <Box sx={{ backgroundColor: 'grey.100', p: '10px' }}>{boxText}</Box>
      )}
    </>
  )
}
