import React from 'react'
import { Link } from '@mui/material'
import Typography from '@mui/material/Typography'

export const ADDiscoveryPortalInstructions = (): React.ReactNode => {
  return (
    <>
      <Typography variant="body1" sx={{ fontWeight: 700 }} gutterBottom>
        You must meet these requirements from AD Discovery Portal to send data:
      </Typography>
      <Typography
        variant="body1"
        component={'ol'}
        gutterBottom
        sx={{ marginLeft: '10px', li: { mb: 1 } }}
      >
        <li>You must complete all required Access Actions in the next step.</li>
        <li>
          Ensure you can perform an SSO login with AD Discovery Portal.&nbsp;
          <Link
            href={'https://discover.alzheimersdata.org/login'}
            rel={'noopener noreferrer'}
            target={'_blank'}
          >
            Click here, and then click the Synapse Button under: Continue with
            your partner account
          </Link>
          .
        </li>
      </Typography>

      <Typography variant="body1" gutterBottom>
        Note that we cannot provide support for AD Discovery Portal. Please
        contact AD Discovery Portal{' '}
        <Link
          href={'https://community.addi.ad-datainitiative.org/w/faq'}
          rel={'noopener noreferrer'}
          target={'_blank'}
        >
          technical support
        </Link>{' '}
        for issues related to the above.
      </Typography>
    </>
  )
}
