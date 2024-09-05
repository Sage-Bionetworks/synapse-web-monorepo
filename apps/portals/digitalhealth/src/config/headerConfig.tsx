import React from 'react'
import { HomePageHeaderConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { ReactComponent as HeaderImg } from './style/dna_header.svg'

const homePageHeader: HomePageHeaderConfig = {
  title: 'Welcome to dHealth',
  summary: (
    <>
      A Digital Health Knowledge Portal to enable the discovery and download of
      digital and mobile health data, tools, and benchmarked outcomes and
      digital biomarkers.
      <br />
      <br />
      Supported by SAGE BIONETWORKS
    </>
  ),
  showBlur: true,
  HeaderSvg: HeaderImg, // need's to be direct svg import for proper scaling
}

export default homePageHeader
