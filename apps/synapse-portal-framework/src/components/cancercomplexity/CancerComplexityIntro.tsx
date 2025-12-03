import React from 'react'
import { Box, Typography } from '@mui/material'
import { ReactComponent as IntroSvg } from '@/components/assets/cancerComplexityIntro.svg'
import CancerComplexityIntroSubItem from './CancerComplexityIntroSubItem'

const CancerComplexityIntro = (): React.ReactNode => {
  return (
    <>
      <Box
        sx={{
          m: { xs: '30px 0px', lg: '50px 0px 30px 0px' },
          display: 'flex',
          justifyContent: 'center',
          flexDirection: {
            xs: 'column',
            lg: 'row',
          },
        }}
      >
        <Box
          sx={{
            mt: '20px',
            mb: {
              xs: '10px',
              lg: '20px',
            },
          }}
        >
          <IntroSvg style={{ width: '100%' }} />
        </Box>
        <Box
          sx={{
            m: {
              xs: '15px',
              lg: '30px 0px 0px 30px',
            },
            width: { xs: '100%', lg: '45%' },
          }}
        >
          <Typography
            variant="headline1"
            sx={{
              fontSize: { xs: '22px', md: '25px' },
              fontWeight: 'bold',
              marginBottom: '15px',
              textTransform: 'uppercase',
            }}
          >
            What is the Cancer Complexity Knowledge Portal?
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: '16px', lineHeight: '144%' }}
          >
            The Cancer Complexity Knowledge Portal (CCKP) integrates robust,
            curated datasets, publications, grant information, and other
            resources, to streamline your ability to identify relevant data,
            refine analyses, and share insights with collaborators. With the
            CCKP, you can more efficiently connect the dots across multiple
            studies, advancing our understanding of cancer biology and
            accelerating innovations in prevention, diagnosis, and treatment.
          </Typography>
          <CancerComplexityIntroSubItem
            bulletColor="#862FB9"
            mainText="Explore"
            subText="Browse data, publications, and tools."
          />
          <CancerComplexityIntroSubItem
            bulletColor="#F46055"
            mainText="Find"
            subText="Search, filter, and refine to find the right data."
          />
          <CancerComplexityIntroSubItem
            bulletColor="#ECB915"
            mainText="Access"
            subText="Download datasets, publications, and tools."
          />
        </Box>
      </Box>
    </>
  )
}

export default CancerComplexityIntro
