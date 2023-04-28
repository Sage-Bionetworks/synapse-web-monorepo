import React from 'react'
import { SourceAppLogo } from './SourceApp'
import { Typography } from '@mui/material'
import { LeftRightPanel } from './LeftRightPanel'
import { SynapseComponents } from 'synapse-react-client'

export const PersonalAccessTokensPage = () => {
  return (
    <LeftRightPanel
      className={'PersonalAccessTokensPage'}
      leftContent={
        <div>
          <SourceAppLogo sx={{ textAlign: 'center' }} />
          <SynapseComponents.AccessTokenPage title="" body="" />
        </div>
      }
      rightContent={
        <div className={'panel-right-text'}>
          <Typography
            variant="headline3"
            sx={{ paddingBottom: '20px', fontWeight: 600 }}
          >
            Personal Access Tokens
          </Typography>
          <Typography variant="body1" sx={{ paddingBottom: '10px' }}>
            Issue personal access tokens to access your Synapse resources in the
            command line clients. A personal access token will expire if it is
            unused for 180 consecutive days. You may create up to 100 personal
            access tokens.
          </Typography>
        </div>
      }
    ></LeftRightPanel>
  )
}
