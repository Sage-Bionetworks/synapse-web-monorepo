import React from 'react'
import { ReactComponent as AdWorkbenchLogo } from '../../../assets/logos/other/ad-workbench-logo.svg'
import { ReactComponent as CavaticaLogo } from '../../../assets/logos/other/cavatica-logo.svg'
import { ReactComponent as TerraLogo } from '../../../assets/logos/other/terra-logo.svg'
import { ReactComponent as PlutoLogo } from '../../../assets/logos/other/pluto-logo.svg'
import { ExternalAnalysisPlatformInstructions } from './ExternalAnalysisPlatformInstructions'
import { ADDiscoveryPortalInstructions } from './ADDiscoveryPortalInstructions'

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
        platformName="Terra"
        platformLoginURL="https://app.terra.bio/"
        platformConnectAccountURL="https://app.terra.bio/#profile?tab=externalIdentities"
        platformSupportEmail="mailto:support@terra.bio"
      />
    ),
  },
  pluto: plutoAnalysisPlatformDescription,
  plutodev: plutoDevAnalysisPlatformDescription,
  adworkbench: {
    name: 'AD Discovery Portal',
    description:
      "The AD Discovery Portal is designed to help researchers explore novel Alzheimer's disease and related dementias data through a publicly accessible dataset catalog. It offers a diverse collection of data, including imaging, omics, clinical, and multi-modal approaches, and brings together datasets from both industry and academia. The Discovery Portal is fully integrated with AD Workbench and enables seamless exploration, dataset access requests, and analysis.",
    Logo: AdWorkbenchLogo,
    PlatformInstructions: () => <ADDiscoveryPortalInstructions />,
  },
} as const
