import React from 'react'
import { SourceAppConfig } from 'components/SourceAppConfigs'
import sageBionetworksPalette from 'synapse-react-client/dist/utils/theme/palette/Palettes'
import SageBionetworksLogo from '../assets/SageBionetworksLogo.svg'

const logo = <img src={SageBionetworksLogo} alt="Sage Bionetworks Logo" />

const description =
  'Sage Bionetworks is a nonprofit health research organization that is speeding the translation of science into medicine.'

export const sage: SourceAppConfig = {
  appId: 'sage',
  appURL: '/sageresources',
  friendlyName: 'Sage Bionetworks',
  logo,
  palette: sageBionetworksPalette,
  description,
}
