import * as React from 'react'
import { Button, IconButton, Tooltip } from '@mui/material'
import { useEffect, useState } from 'react'
import UniversalCookies from 'universal-cookie'
import { isInSynapseExperimentalMode } from '../utils/SynapseClient'
import { EXPERIMENTAL_MODE_COOKIE } from '../utils/SynapseConstants'
import { InfoOutlined } from '@mui/icons-material'

const experimentalModeText =
  'This mode gives you early access to features that are still in development. Please note that we do not guarantee an absence of errors, and that the data created using these features may be lost during product upgrade.'

const ExperimentalMode: React.FC = () => {
  const [isExperimentalModeOn, setIsExperimentalModeOn] =
    useState<boolean>(false)
  const cookies = new UniversalCookies()
  let mounted = true

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
  }

  const deleteExperimentalModeCookie = () => {
    // cookie.remove requires to re-calculate date obj each time, this is more straightforward
    document.cookie = `${EXPERIMENTAL_MODE_COOKIE}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`
    setIsExperimentalModeOn(false)
  }

  return (
    <span className={'experimental-mode-wrapper'}>
      <Button
        className={'experimental-mode'}
        variant="text"
        onClick={
          isExperimentalModeOn
            ? deleteExperimentalModeCookie
            : createExperimentalModeCookie
        }
      >
        Experimental mode is {isExperimentalModeOn ? 'on' : 'off'}
      </Button>
      <Tooltip title={experimentalModeText} arrow placement="top">
        <IconButton
          aria-label="info"
          color="inherit"
          sx={{ '&:hover': { backgroundColor: 'transparent' } }}
        >
          <InfoOutlined sx={{ verticalAlign: 'middle' }} />
        </IconButton>
      </Tooltip>
    </span>
  )
}

export default ExperimentalMode
