import React from 'react'
import { Button, SxProps } from '@mui/material'
import { SyntheticEvent, useState } from 'react'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import * as SynapseClient from 'synapse-react-client/synapse-client/SynapseClient'
import { displayToast } from 'synapse-react-client/components/ToastMessage/ToastMessage'
import { generateCsrfToken } from 'synapse-react-client/utils/functions/generateCsrfToken'
import { OAuth2State } from 'synapse-react-client/utils/index'

export type RASButtonProps = {
  redirectAfter?: string
  sx?: SxProps
}

const csrfToken = generateCsrfToken()

const onBindToRAS = (
  event: SyntheticEvent,
  setIsLoading: (isLoading: boolean) => void,
  state: OAuth2State,
  redirectAfter?: string,
) => {
  event.preventDefault()
  setIsLoading(true)
  try {
    if (redirectAfter) {
      localStorage.setItem(
        SynapseConstants.LAST_PLACE_LOCALSTORAGE_KEY,
        redirectAfter,
      )
    }
    const redirectUrl = `${SynapseClient.getRootURL()}?provider=${
      SynapseConstants.OAUTH2_PROVIDERS.NIH_RESEARCHER_AUTH_SERVICE
    }`
    SynapseClient.oAuthUrlRequest(
      SynapseConstants.OAUTH2_PROVIDERS.NIH_RESEARCHER_AUTH_SERVICE,
      redirectUrl,
      state,
    )
      .then((data: any) => {
        const authUrl = data.authorizationUrl
        window.location.assign(authUrl)
      })
      .catch((err: any) => {
        displayToast(err.reason as string, 'danger')
      })
  } catch (err: any) {
    displayToast(err.reason as string, 'danger')
  } finally {
    setIsLoading(false)
  }
}

export const RASButton = (props: RASButtonProps): React.ReactNode => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Button
      variant="outlined"
      onClick={e =>
        onBindToRAS(e, setIsLoading, { csrfToken }, props.redirectAfter)
      }
      type="button"
      sx={props.sx}
      disabled={isLoading}
    >
      Link your NIH account
    </Button>
  )
}
