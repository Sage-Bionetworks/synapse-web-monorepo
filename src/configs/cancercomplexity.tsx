import React from 'react'
import { SourceAppConfig } from 'components/SourceAppConfigs'
import { cancerComplexityPortalPalette } from 'synapse-react-client/dist/utils/theme/palette/Palettes'
import LogoSvg from '../assets/CCKPLogo.svg'

const logo = <img src={LogoSvg} alt="Logo" />

const description =
  "Data and tools from the NIH National Cancer Institute-sponsored Cancer Systems Biology Consortium (CSBC) and Physical Sciences in Oncology Network (PS-ON) for the study of Alzheimer's disease, related dementias, and healthy aging."

export const cckp: SourceAppConfig = {
  appId: 'CCKP',
  appURL: 'https://cancercomplexity.synapse.org/',
  friendlyName: 'Cancer Complexity Knowledge Portal',
  logo,
  palette: cancerComplexityPortalPalette,
  description,
}
