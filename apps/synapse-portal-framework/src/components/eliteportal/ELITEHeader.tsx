import React from 'react'
import { Box, Typography } from '@mui/material'
import HeaderSearchBox from '../HeaderSearchBox'
import { FeatureFlagEnum } from 'synapse-react-client/utils/featureflag/FeatureFlags'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/index'

type ELITEHeaderProps = {
  backgroundCss: string
  title: React.ReactNode
  description: React.ReactNode
  backgroundMp4?: string
  backgroundMp4Css?: string
}

const ELITEHeader = ({
  backgroundCss,
  title,
  description,
  backgroundMp4,
  backgroundMp4Css,
}: ELITEHeaderProps): React.ReactNode => {
  return (
    <header id="header">
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 0',
        }}
      >
        {backgroundMp4 && (
          <Box
            component="video"
            autoPlay
            loop
            muted
            playsInline
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'fill',
              zIndex: 0,
              background: backgroundMp4Css,
            }}
          >
            <source src={backgroundMp4} type="video/mp4" />
            Your browser does not support the video tag.
          </Box>
        )}
        {/* Gradient overlay sits above the video but below content */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: backgroundCss,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            flex: 1,
            padding: { xs: '40px', lg: '40px 80px' },
            zIndex: 2,
          }}
        >
          <Typography
            variant="headline2"
            sx={{
              fontWeight: 300,
              lineHeight: '130%',
              fontSize: { xs: '36px', md: '42px' },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontSize: '18px', lineHeight: '140%', marginTop: '15px' }}
          >
            {description}
          </Typography>
        </Box>
        <HeaderSearchBox
          searchExampleTerms={[
            'whole genome sequencing',
            'LLFS',
            'RNAseq',
            'proteomics aging',
            'APOE cognitive aging',
            'epigenetics',
            'open access',
            'longevity intervention',
            'GWAS',
            'healthspan',
          ]}
          searchPlaceholder="Search for longevity and aging data and resources"
          path="/Search"
          isChatEnabled={useGetFeatureFlag(FeatureFlagEnum.PORTAL_CHAT)}
          sx={{
            flex: 1,
            zIndex: 2,
            '& > :first-child': {
              background: 'rgba(184, 204, 226, 0.60)',
            },
          }}
        />
      </Box>
    </header>
  )
}

export default ELITEHeader
