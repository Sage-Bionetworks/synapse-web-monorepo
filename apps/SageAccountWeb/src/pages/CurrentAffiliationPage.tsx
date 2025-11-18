import { TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import { LeftRightPanel } from '../components/LeftRightPanel'
import { ContinueButton } from '../components/ProfileValidation/ContinueButton'
import { SourceAppLogo } from '../components/SourceApp'
import { StyledFormControl } from '../components/StyledComponents'
import { useSourceApp } from '../components/useSourceApp'
import { useSynapseContext } from 'synapse-react-client/stores/SynapseContext'
import { useGetCurrentUserProfile } from 'synapse-react-client/synapse-queries/user/useUserBundle'
import SynapseClient from 'synapse-react-client/synapse-client'
import { displayToast } from 'synapse-react-client/components/ToastMessage'

function CurrentAffiliationPage() {
  const sourceApp = useSourceApp()
  const { accessToken } = useSynapseContext()
  const { data: currentUserProfile } = useGetCurrentUserProfile()
  const [newAffiliation, setNewAffiliation] = useState(
    currentUserProfile?.company,
  )
  const [isGoToAccountCreatedPage, setIsGoToAccountCreatedPage] =
    useState(false)
  useEffect(() => {
    setNewAffiliation(currentUserProfile?.company)
  }, [currentUserProfile])

  if (isGoToAccountCreatedPage) {
    return <Navigate to="/authenticated/accountcreated" />
  }
  return (
    <>
      <LeftRightPanel
        className={'CurrentAffiliationPage'}
        leftContent={
          <div>
            <SourceAppLogo sx={{ textAlign: 'center' }} />
            <StyledFormControl
              fullWidth
              variant="standard"
              margin="normal"
              required
            >
              <TextField
                fullWidth
                label={'Current Affiliation'}
                id="company"
                name="company"
                onChange={event => setNewAffiliation(event.target.value)}
                value={newAffiliation || ''}
              />
            </StyledFormControl>
            <ContinueButton
              onClick={() => {
                if (currentUserProfile) {
                  currentUserProfile.company = newAffiliation
                  SynapseClient.updateMyUserProfile(
                    currentUserProfile,
                    accessToken,
                  )
                    .then(() => {
                      // success!  go to the next page
                      setIsGoToAccountCreatedPage(true)
                    })
                    .catch(error => displayToast(error.reason, 'danger'))
                }
              }}
              disabled={!newAffiliation}
            />
          </div>
        }
        rightContent={
          <div className={'panel-right-text'}>
            <Typography
              variant="headline3"
              sx={{ paddingBottom: '30px', fontWeight: 500 }}
            >
              Before we get started...
            </Typography>
            <Typography variant="subtitle1">
              We need a little more information to grant access to{' '}
              <strong>{sourceApp?.friendlyName}</strong>.
            </Typography>
          </div>
        }
      ></LeftRightPanel>
    </>
  )
}

export default CurrentAffiliationPage
