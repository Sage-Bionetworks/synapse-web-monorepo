import { ReactComponent as SageLogo } from '../assets/sage-logo.svg'
import { ReactComponent as NCState } from './assets/ncstate.svg'
import { ReactComponent as StonyBrook } from './assets/stonybrook.svg'
import { ReactComponent as NIA } from './assets/nia_light.svg'
import { Link, Stack, Typography } from '@mui/material'
import DevelopedBySage from '../DevelopedBySage'

const ClassicDevelopedBySage = () => {
  return (
    <DevelopedBySage>
      <Typography sx={{ mb: 0 }}>
        National Institute On Aging of the National Institutes of Health under
        Award Number U24AG081810
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        spacing={{
          xs: 1,
          sm: 4,
        }}
      >
        <Link
          href="https://www.nia.nih.gov"
          target="_blank"
          rel="noreferrer"
          sx={{ svg: { width: { xs: '60%', sm: '150px' } } }}
        >
          <NIA />
        </Link>
        <Link
          href="https://sagebionetworks.org/platform/synapse"
          target="_blank"
          rel="noreferrer"
          sx={{ svg: { width: { xs: '70%', sm: '250px' } } }}
        >
          <SageLogo />
        </Link>
        <Link
          href="https://www.stonybrook.edu/"
          target="_blank"
          rel="noreferrer"
          sx={{ svg: { width: { xs: '50%', sm: '250px' } } }}
        >
          <StonyBrook />
        </Link>
        <Link
          href="https://www.ncsu.edu/"
          target="_blank"
          rel="noreferrer"
          sx={{ svg: { width: { xs: '70%', sm: '110px' } } }}
        >
          <NCState />
        </Link>
      </Stack>
    </DevelopedBySage>
  )
}
export default ClassicDevelopedBySage
