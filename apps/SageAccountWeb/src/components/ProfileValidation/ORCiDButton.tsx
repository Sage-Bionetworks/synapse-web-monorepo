import OrcId from '@/assets/ORCID.svg?url'
import EditIcon from '@/assets/RedEditPencil.svg?url'
import { Button, SxProps } from '@mui/material'
import { SyntheticEvent, useState } from 'react'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { ValidationWizardStep } from './ProfileValidation'
import * as SynapseClient from 'synapse-react-client/synapse-client/SynapseClient'
import { displayToast } from 'synapse-react-client/components/ToastMessage/ToastMessage'
import { useCsrfToken } from 'synapse-react-client/utils/hooks'
import { OAuth2State } from 'synapse-react-client/utils'

export type ORCiDButtonProps = {
  redirectAfter?: string
  editButton?: boolean
  sx?: SxProps
}

const onBindToORCiD = (
  event: SyntheticEvent,
  setIsLoading: (isLoading: boolean) => void,
  state: OAuth2State,
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

export const ORCiDButton = (props: ORCiDButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const csrfToken = useCsrfToken()

  return (
    <>
      {props.editButton ? (
        <button
          onClick={e =>
            onBindToORCiD(e, setIsLoading, { csrfToken }, props.redirectAfter)
          }
        >
          <img src={EditIcon} alt="edit icon" />
        </button>
      ) : (
        <Button
          variant="outlined"
          onClick={e =>
            onBindToORCiD(e, setIsLoading, { csrfToken }, props.redirectAfter)
          }
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
