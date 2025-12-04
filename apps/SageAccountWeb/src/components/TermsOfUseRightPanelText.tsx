import React from 'react'
import { Link, Typography } from '@mui/material'
import { useSourceApp } from './useSourceApp'
import { STATIC_SOURCE_APP_CONFIG } from 'synapse-react-client/utils/hooks/useSourceAppConfigs'

export const TermsOfUseRightPanelText = (): React.ReactNode => {
  const sourceApp = useSourceApp()
  const sourceAppName = sourceApp?.friendlyName
  const synapseAppName = STATIC_SOURCE_APP_CONFIG.friendlyName
  return (
    <>
      <Typography variant="headline2">What is the Synapse Pledge?</Typography>

      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        {sourceAppName} is powered by{' '}
        {sourceApp?.friendlyName !== synapseAppName ? (
          <Link href={'https://www.synapse.org/'} target="_blank">
            Synapse
          </Link>
        ) : (
          <>Trust</>
        )}
        , and follows the Synapse Governance polices.
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        To ensure secure and confidential access to data, we ask all account
        holders to affirm their agreement with our governance policies before
        finishing registration.
      </Typography>
      <Typography variant="smallText1" sx={{ marginBottom: '20px' }}>
        If you have questions, please contact{' '}
        <Link href={'mailto:act@sagebionetworks.org'}>
          act@sagebionetworks.org
        </Link>
      </Typography>
    </>
  )
}
