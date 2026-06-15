import { EXPERIMENTAL_MODE_COOKIE } from '@/utils/SynapseConstants'
import { InfoOutlined } from '@mui/icons-material'
import { Box, IconButton, Tooltip, Typography, useTheme } from '@mui/material'
import Switch from 'react-switch'
import { useCookieValue } from '@react-hookz/web/useCookieValue/index.js'

const EXPERIMENTAL_MODE_SWITCH_ID = 'experimental-mode'
const experimentalModeText =
  'This mode gives you early access to features that are still in development. Please note that we do not guarantee an absence of errors, and that the data created using these features may be lost during product upgrade.'

export type ExperimentalModeProps = {
  onExperimentalModeToggle?: (newValue: boolean) => void
}
function ExperimentalMode({ onExperimentalModeToggle }: ExperimentalModeProps) {
  const theme = useTheme()

  const getExperimentalModeCookieOptions = () => {
    const hostname =
      typeof window !== 'undefined'
        ? window.location.hostname.toLowerCase()
        : ''
    return {
      path: '/',
      domain: hostname.endsWith('.synapse.org') ? 'synapse.org' : undefined,
    }
  }

  const [
    experimentalModeCookie,
    setExperimentalModeCookie,
    removeExperimentalModeCookie,
  ] = useCookieValue(
    EXPERIMENTAL_MODE_COOKIE,
    getExperimentalModeCookieOptions(),
  )

  const createExperimentalModeCookie = () => {
    setExperimentalModeCookie('true')

    if (onExperimentalModeToggle) {
      onExperimentalModeToggle(true)
    }
  }

  const deleteExperimentalModeCookie = () => {
    removeExperimentalModeCookie()
    if (onExperimentalModeToggle) {
      onExperimentalModeToggle(false)
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        component={'label'}
        variant="body1"
        htmlFor={EXPERIMENTAL_MODE_SWITCH_ID}
      >
        Experimental Mode
      </Typography>
      <Tooltip title={experimentalModeText} arrow placement="top">
        <IconButton
          aria-label="info"
          color="inherit"
          sx={{ '&:hover': { backgroundColor: 'transparent' } }}
        >
          <InfoOutlined sx={{ verticalAlign: 'middle' }} />
        </IconButton>
      </Tooltip>
      <Switch
        id={EXPERIMENTAL_MODE_SWITCH_ID}
        width={35}
        height={20}
        onColor={theme.palette.secondary.main}
        checkedIcon={false}
        uncheckedIcon={false}
        checked={experimentalModeCookie === 'true'}
        onChange={
          experimentalModeCookie === 'true'
            ? deleteExperimentalModeCookie
            : createExperimentalModeCookie
        }
      />
    </Box>
  )
}

export default ExperimentalMode
