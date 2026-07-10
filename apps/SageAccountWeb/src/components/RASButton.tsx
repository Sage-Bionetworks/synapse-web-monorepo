import React from 'react'
import { Button, SxProps } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
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

export const RASButton = (props: RASButtonProps): React.ReactNode => {
  const { mutate, isPending } = useMutation({
    mutationFn: (state: OAuth2State) => {
      if (props.redirectAfter) {
        localStorage.setItem(
          SynapseConstants.LAST_PLACE_LOCALSTORAGE_KEY,
          props.redirectAfter,
        )
      }
      const redirectUrl = `${SynapseClient.getRootURL()}?provider=${
        SynapseConstants.OAUTH2_PROVIDERS.NIH_RESEARCHER_AUTH_SERVICE
      }`
      return SynapseClient.oAuthUrlRequest(
        SynapseConstants.OAUTH2_PROVIDERS.NIH_RESEARCHER_AUTH_SERVICE,
        redirectUrl,
        state,
      )
    },
    onSuccess: data => {
      window.location.assign(data.authorizationUrl)
    },
    onError: (err: { reason: string }) => {
      displayToast(err.reason, 'danger')
    },
  })

  return (
    <Button
      variant="outlined"
      onClick={e => {
        e.preventDefault()
        mutate({ csrfToken })
      }}
      type="button"
      sx={props.sx}
      loading={isPending}
    >
      Link your NIH account
    </Button>
  )
}
