import React from 'react'
import { SourceAppConfig } from 'components/SourceAppConfigs'
import { cancerComplexityPortalPalette } from 'synapse-react-client/dist/utils/theme/palette/Palettes'
import LogoSvg from '../assets/CCKPLogo.svg'

const logo = <img src={LogoSvg} alt="Logo" />

const description =
  'The NIH National Cancer Institute-sponsored Cancer Systems Biology Consortium (CSBC) and Physical Sciences in Oncology Network (PS-ON) aim to tackle the most perplexing issues in cancer to increase our understanding of tumor biology, treatment options, and patient outcome. The CSBC PS-ON Data Portal highlights ongoing research efforts in these richly interdisciplinary fields, including the data generated and methods developed in the addresssing fundamental questions in cancer research.'

export const cckp: SourceAppConfig = {
  appId: 'CCKP',
  appURL: 'https://cancercomplexity.synapse.org/',
  friendlyName: 'Cancer Complexity Knowledge Portal',
  logo,
  theme: {
    palette: cancerComplexityPortalPalette,
  },
  description,
}
