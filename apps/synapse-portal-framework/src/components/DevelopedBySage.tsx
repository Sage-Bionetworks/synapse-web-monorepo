import React from 'react'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { Box, Link, Typography } from '@mui/material'
import { ReactNode } from 'react'

type DevelopedBySageProps = {
  children?: ReactNode
}

const DevelopedBySage = ({
  children,
}: DevelopedBySageProps): React.ReactNode => {
  return (
    <Box
      sx={{ mt: '65px', fontSize: 15, color: '#515359', textAlign: 'center' }}
    >
      <Typography sx={{ mb: 0 }}>
        This Portal was developed by
        <Link
          href="https://sagebionetworks.org/"
          target="_blank"
          rel="noreferrer"
          sx={{ fontWeight: 'bold', color: 'primary.main', mx: 0.5 }}
        >
          Sage Bionetworks
        </Link>
        and is part of the
        <Link
          href="https://sagebionetworks.org/platform/synapse"
          target="_blank"
          rel="noreferrer"
          sx={{ fontWeight: 'bold', color: 'primary.main', mx: 0.5 }}
        >
          Sage Platform.
        </Link>
      </Typography>

      <Typography sx={{ mb: 0 }}>
        Use of this Portal is governed by the
        <Link
          href={SynapseConstants.URL_TERMS_CONDITIONS_AGREEMENT}
          target="_blank"
          rel="noreferrer"
          sx={{ fontWeight: 'bold', color: 'primary.main', ml: 0.5 }}
        >
          Terms and Conditions
        </Link>
        .
      </Typography>
      {children}
    </Box>
  )
}

export default DevelopedBySage
