import React from 'react'
import { useSourceApp } from './SourceApp'
import { Link, Typography } from '@mui/material'

export type TermsOfUseRightPanelTextProps = {}

export const TermsOfUseRightPanelText = (
  props: TermsOfUseRightPanelTextProps,
) => {
  const sourceApp = useSourceApp()
  const sourceAppName = sourceApp?.friendlyName

  return (
    <>
      <Typography variant="headline2">What is the Synapse Pledge?</Typography>
      {sourceApp?.appId !== 'synapse.org' && (
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          {sourceAppName} is powered by{' '}
          <Link href={'https://www.synapse.org/'} target="_blank">
            Synapse
          </Link>
          , and follows the Synapse Governance polices.
        </Typography>
      )}
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        To ensure secure and confidential access to data, we ask all account
        holders to affirm their agreement with our governance policies before
        finishing registration.
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: '20px' }}>
        If you have questions, please contact{' '}
        <Link href={'mailto:act@sagebionetworks.org'}>
          act@sagebionetworks.org
        </Link>
      </Typography>
    </>
  )
}
