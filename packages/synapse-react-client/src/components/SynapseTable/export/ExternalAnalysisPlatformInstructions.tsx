import React from 'react'
import { Link } from '@mui/material'
import Typography from '@mui/material/Typography'

export type ExternalAnalysisPlatformInstructionsProps = {
  platformName: string
  platformLoginURL: string
  platformConnectAccountURL?: string
  platformSupportEmail?: string
}

export const ExternalAnalysisPlatformInstructions = (
  props: ExternalAnalysisPlatformInstructionsProps,
): React.ReactNode => {
  const {
    platformName,
    platformLoginURL,
    platformConnectAccountURL,
    platformSupportEmail,
  } = props
  return (
    <>
      <Typography variant="body1" sx={{ fontWeight: 700 }} gutterBottom>
        You must meet these requirements from {platformName} to send data:
      </Typography>
      <Typography
        variant="body1"
        component={'ol'}
        gutterBottom
        sx={{ marginLeft: '10px', li: { mb: 1 } }}
      >
        <li>You must complete all required Access Actions in the next step.</li>
        <li>
          You must be logged in to a {platformName} account.{' '}
          <Link
            href={platformLoginURL}
            rel={'noopener noreferrer'}
            target={'_blank'}
          >
            Click here to login or register for {platformName}
          </Link>
          .
        </li>
        <li>
          You must connect your {platformName} account to Synapse.{' '}
          {platformConnectAccountURL && (
            <Link href={platformConnectAccountURL} target="_blank">
              Click here for instructions.
            </Link>
          )}
        </li>
      </Typography>

      <Typography variant="body1" gutterBottom>
        Note that we cannot provide support for {platformName}.&nbsp;&nbsp;
        {platformSupportEmail && (
          <>
            Please contact {platformName}'s{' '}
            <Link href={platformSupportEmail}>technical support</Link> for
            issues related to the above.
          </>
        )}
      </Typography>
    </>
  )
}
