import React from 'react'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import UniversalCookies from 'universal-cookie'
import { isInSynapseExperimentalMode } from '../../synapse-client/SynapseClient'
import { EXPERIMENTAL_MODE_COOKIE } from '../../utils/SynapseConstants'
import { InfoOutlined } from '@mui/icons-material'
import Switch from 'react-switch'
import { useTheme } from '@mui/material'

const experimentalModeText =
  'This mode gives you early access to features that are still in development. Please note that we do not guarantee an absence of errors, and that the data created using these features may be lost during product upgrade.'

export type ExperimentalModeProps = {
  onExperimentalModeToggle?: (newValue: boolean) => void
}
const ExperimentalMode: React.FunctionComponent<ExperimentalModeProps> = ({
  onExperimentalModeToggle,
}) => {
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
    cookies.set(EXPERIMENTAL_MODE_COOKIE, { path: '/' })
    setIsExperimentalModeOn(true)
    if (onExperimentalModeToggle) {
      onExperimentalModeToggle(true)
    }
  }

  const deleteExperimentalModeCookie = () => {
    // cookie.remove requires to re-calculate date obj each time, this is more straightforward
    document.cookie = `${EXPERIMENTAL_MODE_COOKIE}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`
    setIsExperimentalModeOn(false)
    if (onExperimentalModeToggle) {
      onExperimentalModeToggle(false)
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body1">Experimental Mode</Typography>
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
