import React from 'react'
import { SourceAppConfig } from 'components/SourceAppConfigs'
import { digitalHealthPortalPalette } from 'synapse-react-client/dist/utils/theme/palette/Palettes'
import LogoSvg from '../assets/DHealthLogo.svg'

const logo = <img src={LogoSvg} alt="Logo" />

const description =
  'A Digital Health Knowledge Portal to enable the discovery and download digital and mobile health data, tools, and benchmarked outcomes and digital biomarkers.'

export const dHealth: SourceAppConfig = {
  appId: 'DH',
  appURL: 'https://dhealth.synapse.org/',
  friendlyName: 'dHealth Digital Health Data Portal',
  logo,
  palette: digitalHealthPortalPalette,
  description,
}
