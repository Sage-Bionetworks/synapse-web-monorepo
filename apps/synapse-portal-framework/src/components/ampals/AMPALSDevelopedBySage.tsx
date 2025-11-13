import { ReactComponent as SageLogo } from '../assets/sage-logo.svg'
import { ReactComponent as ARIDHIA } from './assets/aridhia.svg'
import { ReactComponent as FNIH } from './assets/fnih.svg'
import NINDSUrl from './assets/nih-ninds.png'
import { Link, Stack, Typography } from '@mui/material'
import DevelopedBySage from '../DevelopedBySage'

const AMPALSDevelopedBySage = () => {
  return (
    <DevelopedBySage>
      <Typography sx={{ mb: 0 }}>
        Research and Portal development was supported by NIH (1OT2NS136939-01)
      </Typography>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        spacing={5}
        sx={{ mt: 2 }}
      >
        <Link
          href="https://c-path.org/"
          target="_blank"
          rel="noreferrer"
          sx={{ svg: { width: { xs: '80%', md: '150px' } } }}
        >
          <CPATH />
        </Link>
        <Link
          href="https://sagebionetworks.org/platform/synapse"
          target="_blank"
          rel="noreferrer"
          sx={{ svg: { width: { xs: '100%', md: '250px' } } }}
        >
          <SageLogo />
        </Link>
        <Link
          href="https://fnih.org/"
          target="_blank"
          rel="noreferrer"
          sx={{ svg: { width: { xs: '80%', md: '130px' } } }}
        >
          <FNIH />
        </Link>
        <Link
          href="https://www.ninds.nih.gov/"
          target="_blank"
          rel="noreferrer"
          sx={{ img: { width: { xs: '420px', md: '300px' } } }}
        >
          <img
            src={NINDSUrl}
            alt="National Institute of Neurological Disorders and Stroke logo"
          />
        </Link>
      </Stack>
    </DevelopedBySage>
  )
}
export default AMPALSDevelopedBySage
