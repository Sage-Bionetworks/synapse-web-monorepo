import * as React from 'react'
import { HomePageHeaderConfig } from 'types/portal-config'
import { ReactComponent as HeaderImg } from './style/dna_header.svg'
import { ReactComponent as SageLogo } from './style/SageLogo.svg'
import { ReactComponent as DreamLogo } from './style/DreamLogo.svg'
import { Box } from '@mui/material'

const homePageHeader: HomePageHeaderConfig = {
  title: 'Welcome to the Sage Challenge Portal!',
  summary: (
    <>
      Crowd-sourced challenge-based benchmarking is an emerging paradigm for the development and unbiased assessment of tools and algorithms that aim to translate biological and biomedical big data into useful knowledge. By distributing problems to large communities of expert volunteers, complex biological, health care, and life sciences questions can be addressed efficiently and quickly, while incentivizing adoption of new standards. Challenges provide a successful resolution to the “self-assessment trap,” providing an objective framework for the evaluation of algorithms and methods
      <Box sx={{marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '30px'}}>
        <DreamLogo /> <SageLogo />
      </Box>
      
    </>
  ),
  showBlur: true,
  HeaderSvg: HeaderImg, // need's to be direct svg import for proper scaling
}

export default homePageHeader
