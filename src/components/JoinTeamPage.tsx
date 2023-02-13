import React, { useEffect, useState } from 'react'
import { useSourceApp, SourceAppLogo } from './SourceApp'
import { Button, Link } from '@mui/material'
import { useAppContext } from 'AppContext'
import { Typography, SynapseClient } from 'synapse-react-client'
import { Link as RouterLink, Redirect } from 'react-router-dom'

import {
  isJoinTeamSignedToken,
  JoinTeamSignedToken,
} from 'synapse-react-client/dist/utils/synapseTypes/SignedToken/JoinTeamSignedToken'
import {
  isMembershipInvtnSignedToken,
  MembershipInvtnSignedToken,
} from 'synapse-react-client/dist/utils/synapseTypes/SignedToken/MembershipInvtnSignedToken'

export type JoinTeamPageProps = {}

export const JoinTeamPage = (props: JoinTeamPageProps) => {
  const context = useAppContext()
  const [joinTeamToken, setJoinTeamToken] = useState<JoinTeamSignedToken>()
  const [membershipInvtnSignedToken, setMembershipInvtnSignedToken] =
    useState<MembershipInvtnSignedToken>()

  useEffect(() => {
    if (context && context.signedToken) {
      if (isJoinTeamSignedToken(context.signedToken)) {
        setJoinTeamToken(context.signedToken as JoinTeamSignedToken)
      } else if (isMembershipInvtnSignedToken(context.signedToken)) {
        setMembershipInvtnSignedToken(
          context.signedToken as MembershipInvtnSignedToken,
        )
      }
    }
  }, [context])

  useEffect(() => {
    if (joinTeamToken) {
      SynapseClient.addTeamMember(joinTeamToken)
        .then(responseMessage => {
          // TODO : clear token from local storage, and show success UI
        })
        .catch(error => {
          // TODO : show error
        })
    }
  }, [joinTeamToken])

  const sourceApp = useSourceApp()
  return (
    <>
      {membershipInvtnSignedToken && <Redirect to="/register1" />}
      <div>
        <SourceAppLogo sx={{ textAlign: 'center', paddingBottom: '50px' }} />
        <Typography variant="headline2">Account created</Typography>
        <Typography
          variant="subtitle1"
          sx={{ paddingTop: '10px', paddingBottom: '20px' }}
        >
          <strong>Welcome to {sourceApp?.friendlyName}!</strong>
        </Typography>
        <p>
          You’ve created a Sage Account, which you can use on the{' '}
          {sourceApp?.friendlyName}.
        </p>
        <p>
          For full access to data and other functionality, we’ll need additional
          information to verify your identity and certify you to upload data.
        </p>
        <Link
          color="primary"
          component={RouterLink}
          to="/authenticated/validate"
          sx={{ paddingTop: '30px' }}
        >
          Start identity verification
        </Link>
        <Link
          color="primary"
          component={RouterLink}
          to="/authenticated/certificationquiz"
          sx={{ paddingTop: '15px', paddingBottom: '15px' }}
        >
          Get certified for data upload
        </Link>
        <Button
          type="button"
          color="primary"
          variant="contained"
          sx={{ padding: '10px', height: '100%' }}
          onClick={() => {}}
        >
          Take me to {sourceApp?.friendlyName}
        </Button>
      </div>
    </>
  )
}
