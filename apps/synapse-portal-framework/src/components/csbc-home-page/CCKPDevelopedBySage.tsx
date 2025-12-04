import React from 'react'
import { ReactComponent as SageLogo } from '../assets/sage-logo.svg'
import { ReactComponent as NCI } from './assets/nci.svg'
import { ReactComponent as NIH } from './assets/nih.svg'
import { Link, Stack, Typography } from '@mui/material'
import DevelopedBySage from '../DevelopedBySage'

const CCKPDevelopedBySage = (): React.ReactNode => {
  return (
    <DevelopedBySage>
      <Typography sx={{ mb: 0 }}>
        Research and Portal development was supported by the NCI at the NIH
        (U24CA209923, U24CA274494)
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ mt: 2 }}
      >
        <Link
          href="https://www.nih.gov/"
          target="_blank"
          rel="noreferrer"
          sx={{ svg: { width: { xs: '100%', sm: '150px' } } }}
        >
          <NIH />
        </Link>
        <Link
          href="https://sagebionetworks.org/platform/synapse"
          target="_blank"
          rel="noreferrer"
          sx={{ svg: { width: { xs: '100%', sm: '250px' } } }}
        >
          <SageLogo />
        </Link>
        <Link
          href="https://www.cancer.gov/"
          target="_blank"
          rel="noreferrer"
          sx={{ svg: { width: { xs: '100%', sm: '150px' } } }}
        >
          <NCI />
        </Link>
      </Stack>
    </DevelopedBySage>
  )
}
export default CCKPDevelopedBySage
