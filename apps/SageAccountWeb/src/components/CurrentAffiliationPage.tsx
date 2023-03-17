import React, { useEffect, useState } from 'react'
import { useSourceApp, SourceAppLogo } from './SourceApp'
import { Typography } from 'synapse-react-client'
import { InputLabel, TextField } from '@mui/material'
import { LeftRightPanel } from './LeftRightPanel'
import { StyledFormControl } from './StyledComponents'
import { useGetCurrentUserProfile } from 'synapse-react-client/dist/utils/hooks/SynapseAPI'
import { updateMyUserProfile } from 'synapse-react-client/dist/utils/SynapseClient'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { Redirect } from 'react-router-dom'
import { ContinueButton } from './ProfileValidation/ContinueButton'

export const CurrentAffiliationPage = () => {
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
    return <Redirect to="/authenticated/accountcreated" />
  }
  return (
    <>
      <LeftRightPanel
        className={'CurrentAffiliationPage'}
        leftContent={
          <div>
            <SourceAppLogo
              sx={{ textAlign: 'center', paddingBottom: '50px' }}
            />
            <StyledFormControl
              fullWidth
              variant="standard"
              margin="normal"
              required
            >
              <InputLabel shrink htmlFor="company">
                Current Affiliation
              </InputLabel>
              <TextField
                fullWidth
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
                  updateMyUserProfile(currentUserProfile, accessToken)
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
