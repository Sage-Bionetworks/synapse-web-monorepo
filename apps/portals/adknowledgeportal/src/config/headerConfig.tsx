import React from 'react'
import { HomePageHeaderConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'

const homePageHeader: HomePageHeaderConfig = {
  summary: (
    <>
      Discover and download Alzheimer&apos;s Disease data, analyses, and tools
      from the National Institute on Aging&apos;s Alzheimer&apos;s Disease
      Translational Research Program.
      <p style={{ fontSize: 14 }}>
        <br />
        <i> Established by the &nbsp;</i>
        <span style={{ letterSpacing: 1.5 }}>
          ACCELERATING MEDICINES PARTNERSHIP
        </span>
      </p>
    </>
  ),
  title: 'Welcome to the AD Knowledge Portal',
}

export default homePageHeader
