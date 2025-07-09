import { Link } from '@mui/material'
import Typography from '@mui/material/Typography'
import { ReactComponent as AdWorkbenchLogo } from '../../../assets/logos/other/ad-workbench-logo.svg'
import { ReactComponent as CavaticaLogo } from '../../../assets/logos/other/cavatica-logo.svg'
import { ReactComponent as TerraLogo } from '../../../assets/logos/other/terra-logo.svg'
import { ReactComponent as PlutoLogo } from '../../../assets/logos/other/pluto-logo.svg'

export type PlatformInstructionProps = {
  cavaticaConnectAccountURL?: string
}

type ExternalAnalysisPlatformDescription = {
  name: string
  description: string
  Logo: React.ComponentType<React.SVGProps<SVGSVGElement>>
  PlatformInstructions?: React.ComponentType<PlatformInstructionProps>
}

export type ExternalAnalysisPlatform =
  | 'cavatica'
  | 'terra'
  | 'adworkbench'
  | 'pluto'
  | 'plutodev'

const ExternalAnalysisPlatformInstructions = (props: {
  platformName: string
  platformLoginURL: string
  platformConnectAccountURL?: string
  platformSupportEmail?: string
}) => {
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

const plutoAnalysisPlatformDescription: ExternalAnalysisPlatformDescription = {
  name: 'Pluto',
  description:
    'Intuitively store, search, analyze, and visualize complex biological data (including large, raw data files) and run bioinformatics pipelines in a few clicks without needing to write code or manage any of your own cloud infrastructure.',
  Logo: PlutoLogo,
  PlatformInstructions: () => (
    <ExternalAnalysisPlatformInstructions
      platformName="Pluto"
      platformLoginURL="https://app.pluto.bio/login"
      platformConnectAccountURL="https://help.pluto.bio/en/articles/synapse-pluto"
      platformSupportEmail="mailto:support@pluto.bio"
    />
  ),
}
const plutoDevAnalysisPlatformDescription: ExternalAnalysisPlatformDescription =
  {
    ...plutoAnalysisPlatformDescription,
    name: 'Pluto (Development)',
    PlatformInstructions: () => (
      <ExternalAnalysisPlatformInstructions
        platformName="Pluto"
        platformLoginURL="https://dev.pluto.bio/login"
        platformConnectAccountURL="https://help.pluto.bio/en/articles/synapse-pluto"
        platformSupportEmail="mailto:support@pluto.bio"
      />
    ),
  }

export const EXTERNAL_ANALYSIS_PLATFORMS: Record<
  ExternalAnalysisPlatform,
  ExternalAnalysisPlatformDescription
> = {
  cavatica: {
    name: 'CAVATICA',
    description:
      'CAVATICA is a storage, sharing, and analysis platform designed to handle large volumes of pediatric tumor genomics data. It is produced in collaboration with Seven Bridges and based on the Seven Bridges Platform for cloud storage and bioinformatics analysis.',
    Logo: CavaticaLogo,
    PlatformInstructions: (props: PlatformInstructionProps) => (
      <ExternalAnalysisPlatformInstructions
        platformName={'CAVATICA'}
        platformLoginURL={'https://cavatica.sbgenomics.com/'}
        platformConnectAccountURL={props.cavaticaConnectAccountURL}
        platformSupportEmail={'mailto:support@velsera.com'}
      />
    ),
  },
  terra: {
    name: 'Terra',
    description:
      'Terra is an analysis platform that allows users to access data, run analysis tools, and collaborate. Terra is powered by Google Cloud Platform, enabling the user to scale and manage billing of their own projects.',
    Logo: TerraLogo,
    PlatformInstructions: () => (
      <ExternalAnalysisPlatformInstructions
        platformName="TERRA"
        platformLoginURL="https://app.terra.bio/"
        platformConnectAccountURL="https://app.terra.bio/#profile?tab=externalIdentities"
        platformSupportEmail="mailto:support@terra.bio"
      />
    ),
  },
  pluto: plutoAnalysisPlatformDescription,
  plutodev: plutoDevAnalysisPlatformDescription,
  adworkbench: {
    name: 'AD Workbench',
    description:
      'AD Workbench – a secure, cloud-based data sharing and analytics environment – is the interoperability layer of the AD Data Initiative technical suite and its flagship product offering. Easy to use and available at no cost, AD Workbench empowers researchers around the world to share, access and analyze data across platforms.',
    Logo: AdWorkbenchLogo,
  },
} as const
