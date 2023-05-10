import React, { useState } from 'react'
import { Button, SxProps } from '@mui/material'
import {
  displayToast,
  SynapseConstants,
  SynapseClient,
} from 'synapse-react-client'
import { ValidationWizardStep } from './ProfileValidation'
import OrcId from '../../assets/ORCID.svg'
import EditIcon from '../../assets/RedEditPencil.svg'

export type ORCiDButtonProps = {
  redirectAfter?: string
  editButton?: boolean
  sx?: SxProps
}

export const onBindToORCiD = (
  event: React.SyntheticEvent,
  setIsLoading: (isLoading: boolean) => void,
  redirectAfter?: string,
) => {
  event.preventDefault()
  setIsLoading(true)
  try {
    // after binding, go to ???
    if (redirectAfter) {
      localStorage.setItem(
        SynapseConstants.POST_SSO_REDIRECT_URL_LOCALSTORAGE_KEY,
        redirectAfter,
      )
    } else {
      localStorage.setItem(
        SynapseConstants.POST_SSO_REDIRECT_URL_LOCALSTORAGE_KEY,
        `${SynapseClient.getRootURL()}authenticated/validate?step=${
          ValidationWizardStep.VERIFY_IDENTITY
        }`,
      )
    }
    const redirectUrl = `${SynapseClient.getRootURL()}?provider=${
      SynapseConstants.OAUTH2_PROVIDERS.ORCID
    }`
    SynapseClient.oAuthUrlRequest(
      SynapseConstants.OAUTH2_PROVIDERS.ORCID,
      redirectUrl,
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

export const ORCiDButton = (props: ORCiDButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      {props.editButton ? (
        <button
          onClick={e => onBindToORCiD(e, setIsLoading, props.redirectAfter)}
        >
          <img src={EditIcon} alt="edit icon" />
        </button>
      ) : (
        <Button
          variant="outlined"
          onClick={e => onBindToORCiD(e, setIsLoading, props.redirectAfter)}
          type="button"
          sx={props.sx}
          disabled={isLoading}
        >
          <img src={OrcId} alt="orcid logo" />
          &nbsp; Link your ORCID profile
        </Button>
      )}
    </>
  )
}
