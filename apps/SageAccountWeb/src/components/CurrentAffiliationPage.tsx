import React, { useEffect, useState } from 'react'
import { SourceAppLogo } from './SourceApp'
import { TextField, Typography } from '@mui/material'
import { LeftRightPanel } from './LeftRightPanel'
import { StyledFormControl } from './StyledComponents'
import {
  displayToast,
  SynapseClient,
  SynapseQueries,
  useSynapseContext,
} from 'synapse-react-client'
import { Redirect } from 'react-router-dom'
import { ContinueButton } from './ProfileValidation/ContinueButton'
import { useSourceApp } from './useSourceApp'

export const CurrentAffiliationPage = () => {
  const sourceApp = useSourceApp()
  const { accessToken } = useSynapseContext()
  const { data: currentUserProfile } = SynapseQueries.useGetCurrentUserProfile()
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
