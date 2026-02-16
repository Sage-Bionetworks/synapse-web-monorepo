import { isInSynapseExperimentalMode } from '@/synapse-client/SynapseClient'
import { EXPERIMENTAL_MODE_COOKIE } from '@/utils/SynapseConstants'
import { InfoOutlined } from '@mui/icons-material'
import { Box, IconButton, Tooltip, Typography, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import Switch from 'react-switch'
import UniversalCookies from 'universal-cookie'

const EXPERIMENTAL_MODE_SWITCH_ID = 'experimental-mode'
const experimentalModeText =
  'This mode gives you early access to features that are still in development. Please note that we do not guarantee an absence of errors, and that the data created using these features may be lost during product upgrade.'

export type ExperimentalModeProps = {
  onExperimentalModeToggle?: (newValue: boolean) => void
}
function ExperimentalMode({ onExperimentalModeToggle }: ExperimentalModeProps) {
  const [isExperimentalModeOn, setIsExperimentalModeOn] =
    useState<boolean>(false)
  const cookies = new UniversalCookies()
  let mounted = true
  const theme = useTheme()
  useEffect(() => {
    if (mounted) {
      if (isInSynapseExperimentalMode()) {
        setIsExperimentalModeOn(true)
      }
    }
    return () => {
      mounted = false
    }
  }, [])

  const createExperimentalModeCookie = () => {
    const hostname = window.location.hostname.toLowerCase()
    cookies.set(EXPERIMENTAL_MODE_COOKIE, 'true', {
      path: '/',
      domain: hostname.endsWith('.synapse.org') ? 'synapse.org' : undefined,
    })
    setIsExperimentalModeOn(true)
    if (onExperimentalModeToggle) {
      onExperimentalModeToggle(true)
    }
  }

  const deleteExperimentalModeCookie = () => {
    cookies.remove(EXPERIMENTAL_MODE_COOKIE, { path: '/' })
    setIsExperimentalModeOn(false)
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
        checked={isExperimentalModeOn}
        onChange={
          isExperimentalModeOn
            ? deleteExperimentalModeCookie
            : createExperimentalModeCookie
        }
      />
    </Box>
  )
}

export default ExperimentalMode
