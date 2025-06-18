import OrcId from '@/assets/ORCID.svg?url'
import EditIcon from '@/assets/RedEditPencil.svg?url'
import Button from '@mui/material/Button'
import { SxProps } from '@mui/material/styles'
import { SyntheticEvent, useState } from 'react'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { ValidationWizardStep } from './ProfileValidation'
import * as SynapseClient from 'synapse-react-client/synapse-client/SynapseClient'
import { displayToast } from 'synapse-react-client/components/ToastMessage/ToastMessage'

export type ORCiDButtonProps = {
  redirectAfter?: string
  editButton?: boolean
  sx?: SxProps
}

export const onBindToORCiD = (
  event: SyntheticEvent,
  setIsLoading: (isLoading: boolean) => void,
  redirectAfter?: string,
) => {
  event.preventDefault()
  setIsLoading(true)
  try {
    // after binding, go to ???
    if (redirectAfter) {
      localStorage.setItem(
        SynapseConstants.LAST_PLACE_LOCALSTORAGE_KEY,
        redirectAfter,
      )
    } else {
      localStorage.setItem(
        SynapseConstants.LAST_PLACE_LOCALSTORAGE_KEY,
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
