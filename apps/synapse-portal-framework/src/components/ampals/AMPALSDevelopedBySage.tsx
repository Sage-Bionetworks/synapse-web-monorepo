import { ReactComponent as SageLogo } from '../assets/sage-logo.svg'
import { ReactComponent as CPATH } from './assets/cpath.svg'
import { ReactComponent as FNIH } from './assets/fnih.svg'
import { Link, Stack, Typography } from '@mui/material'
import DevelopedBySage from '../DevelopedBySage'

const AMPALSDevelopedBySage = () => {
  return (
    <DevelopedBySage>
      <Typography sx={{ mb: 0 }}>
        Research and Portal development was supported by FNIH (1OT2NS136939-01)
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ mt: 2 }}
      >
        <Link
          href="https://c-path.org/"
          target="_blank"
          rel="noreferrer"
          sx={{ svg: { width: { xs: '80%', sm: '150px' } } }}
        >
          <CPATH />
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
          href="https://fnih.org/"
          target="_blank"
          rel="noreferrer"
          sx={{ svg: { width: { xs: '80%', sm: '130px' } } }}
        >
          <FNIH />
        </Link>
      </Stack>
    </DevelopedBySage>
  )
}
export default AMPALSDevelopedBySage
