import { Link } from '@mui/material'
import Typography from '@mui/material/Typography'
import { ReactComponent as AdWorkbenchLogo } from '../../../assets/logos/other/ad-workbench-logo.svg'
import { ReactComponent as CavaticaLogo } from '../../../assets/logos/other/cavatica-logo.svg'
import { ReactComponent as TerraLogo } from '../../../assets/logos/other/terra-logo.svg'

export const EXTERNAL_ANALYSIS_PLATFORMS = {
  cavatica: {
    name: 'CAVATICA',
    description:
      'CAVATICA is a storage, sharing, and analysis platform designed to handle large volumes of pediatric tumor genomics data. It is produced in collaboration with Seven Bridges and based on the Seven Bridges Platform for cloud storage and bioinformatics analysis.',
    Logo: CavaticaLogo,
    instructions: (
      <>
        <Typography variant="body1" sx={{ fontWeight: 700 }} gutterBottom>
          You must meet these requirements from CAVATICA to send data:
        </Typography>
        <Typography
          variant="body1"
          component={'ol'}
          gutterBottom
          sx={{ marginLeft: '10px', li: { mb: 1 } }}
        >
          <li>
            You must complete all required Access Actions in the next step.
          </li>
          <li>You must be logged in to a CAVATICA account.</li>
          <li>You must connect your CAVATICA account to Synapse.</li>
        </Typography>
        {/*{cavaticaConnectAccountURL && (*/}
        {/*  <Typography variant="body1">*/}
        {/*    <Link href={cavaticaConnectAccountURL} target="_blank">*/}
        {/*      Click here for instructions*/}
        {/*    </Link>*/}
        {/*  </Typography>*/}
        {/*)}*/}
        <Typography variant="body1" gutterBottom>
          Note that we cannot provide support for CAVATICA. Please contact
          CAVATICA’s{' '}
          <Link href="mailto:support@velsera.com">technical support</Link> for
          issues related to the above.
        </Typography>
      </>
    ),
  },
  terra: {
    name: 'Terra',
    description:
      'Terra is the world’s most trusted platform for biomedical data analysis, secure sharing, and global collaboration',
    Logo: TerraLogo,
  },
  adworkbench: {
    name: 'AD Workbench',
    description:
      'AD Workbench – a secure, cloud-based data sharing and analytics environment – is the interoperability layer of the AD Data Initiative technical suite and its flagship product offering. Easy to use and available at no cost, AD Workbench empowers researchers around the world to share, access and analyze data across platforms.',
    Logo: AdWorkbenchLogo,
  },
} as const

export type ExternalAnalysisPlatform = keyof typeof EXTERNAL_ANALYSIS_PLATFORMS
