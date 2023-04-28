import * as React from 'react'
import { Button, IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import UniversalCookies from 'universal-cookie'
import { isInSynapseExperimentalMode } from '../utils/SynapseClient'
import { EXPERIMENTAL_MODE_COOKIE } from '../utils/SynapseConstants'
import { InfoOutlined } from '@mui/icons-material'
import LightTooltip from '../components/styled/LightTooltip'

const experimentalModeText =
  'This mode gives you early access to features that are still in development. Please note that we do not guarantee an absence of errors, and that the data created using these features may be lost during product upgrade.'

const ExperimentalMode: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const toggleOpen = () => {
    setOpen(!open)
  }

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
      <LightTooltip
        title={experimentalModeText}
        arrow
        placement="top"
        open={open}
      >
        <IconButton
          aria-label="info"
          color="inherit"
          onClick={toggleOpen}
          sx={{ '&:hover': { backgroundColor: 'transparent' } }}
        >
          <InfoOutlined sx={{ verticalAlign: 'middle' }} />
        </IconButton>
      </LightTooltip>
    </span>
  )
}

export default ExperimentalMode
