import React from 'react'
import { SourceAppConfig } from 'components/SourceAppConfigs'
import { mtbPalette } from 'synapse-react-client/dist/utils/theme/palette/Palettes'
import MobileToolboxLogoSvg from '../assets/MobileToolboxLogo.svg'

const logo = (
  <img
    src={MobileToolboxLogoSvg}
    alt="Mobile Toolbox Logo"
    style={{ height: '65px' }}
  />
)

const description =
  'Mobile Toolbox delivers digital tests of cognition to research study participants through a smartphone app, allowing researchers to conduct their studies remotely.'

export const mtb: SourceAppConfig = {
  appId: 'MTB',
  appURL: 'https://studies.mobiletoolbox.org/',
  friendlyName: 'Mobile Toolbox',
  logo,
  palette: mtbPalette,
  description,
}
