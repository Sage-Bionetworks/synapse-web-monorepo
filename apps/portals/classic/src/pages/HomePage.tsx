import headerbackgroundvideo from '@/assets/header-video.mp4'
import { Box, useTheme } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'

import { HomePageThemeProvider } from '@/themes/HomePageThemeProvider'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Goals } from 'synapse-react-client/components/Goals/Goals'
import ImageCardGridWithLinks from 'synapse-react-client/components/ImageCardGridWithLinks/ImageCardGridWithLinks'
import PortalHomePageHeader from 'synapse-react-client/components/PortalHomePageHeader/PortalHomePageHeader'
import { RssFeedCards } from 'synapse-react-client/components/RssFeedCards/RssFeedCards'
import {
  featuredResearchSql,
  goalsTable,
  whatWeDoSql,
} from '@/config/resources'
import FeaturedResearch from 'synapse-react-client/components/FeaturedResearch/FeaturedResearch'
import ClassicSupportedByNIABanner from '@sage-bionetworks/synapse-portal-framework/components/classic/ClassicSupportedByNIABanner/ClassicSupportedByNIABanner'
import ClassicDevelopedBySage from '@sage-bionetworks/synapse-portal-framework/components/classic/ClassicDevelopedBySage'
import { visuallyHidden } from 'synapse-react-client'

function HomePageInternal() {
  const theme = useTheme()

  const animationPhrases = [
    'richly phenotyped longitudinal behavioral focused studies',
    'social science studies',
    'small and mid sized studies',
  ]

  const title = (
    <Box sx={{ color: 'grey.100' }}>
      Discover and explore research and tools from&nbsp; <br />
      <Box
        component={'span'}
        sx={theme => ({
          display: 'block',
          minHeight: '110px',
          [theme.breakpoints.down('sm')]: {
            minHeight: '150px',
          },
        })}
      >
        <TypeAnimation
          aria-hidden="true"
          sequence={animationPhrases.flatMap(phrase => [phrase, 3000])}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          style={{
            fontWeight: 700,
            color: '#27FF81',
          }}
        />
        {/* Screen reader only text */}
        <Box component="span" sx={visuallyHidden}>
          {animationPhrases.join(', ')}
        </Box>
      </Box>
    </Box>
  )
  const description = (
    <span style={{ color: theme.palette.grey[200] }}>
      The Consortium for Longitudinal behavioral and Social Science data
      Integration and Coordination (CLASSIC) (U24AG081810) is an NIH-funded
      initiative aimed at facilitating and stimulating collaboration among
      deeply phenotyped longitudinal studies of aging. While NIH has
      successfully built infrastructure for large, population-based studies
      (e.g., HRS, NHATS), many studies with rich measures of social and
      behavioral data—including intensive studies of cognitive function in daily
      life—have not been featured in existing catalogs. Our experience and
      interviews with study teams confirm that significant roadblocks make
      collaboration and data sharing burdensome and time-consuming.
    </span>
  )
  return (
    <>
      <PortalHomePageHeader
        backgroundCss={`linear-gradient(93deg, #098169 44.61%, rgba(9, 129, 105, 0.70) 100%)`}
        title={title}
        subTitle={''}
        description={description}
        backgroundMp4={headerbackgroundvideo}
        backgroundMp4Css="#024472"
        textAreaWidth="850px"
      />
      <ClassicSupportedByNIABanner />
      <ImageCardGridWithLinks
        sql={whatWeDoSql}
        title="What We Do"
        summaryText="Supported by the National Institute on Aging, we provide tools and training to make study metadata easier to create, share, and reuse. The CLASSIC Network hosts workshops and trainings on metadata preparation, provides standardized codebooks and templates for studies, develops standardized access procedures, and curates metadata resources to support collaboration."
        columnCount={2}
        heightPx={350}
      />
      <FeaturedResearch sql={featuredResearchSql} />
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'Featured Studies'}
          centerTitle={true}
          ContainerProps={{
            className: 'home-spacer',
          }}
        >
          <Goals entityId={goalsTable} linkText="View Study" />
        </SectionLayout>
      </div>
      <SectionLayout
        title={"What's New?"}
        centerTitle={true}
        ContainerProps={{
          className: 'home-spacer',
        }}
      >
        <RssFeedCards
          url="https://sclasportnews.wpenginepowered.com"
          itemsToShow={3}
          allowCategories={[]}
          // filter={{
          //   value: "what's-new",
          // }}
        />
      </SectionLayout>
      <div className={'home-bg-dark'}>
        <SectionLayout
          ContainerProps={{
            className: 'home-spacer',
          }}
        >
          <ClassicDevelopedBySage />
        </SectionLayout>
      </div>
    </>
  )
}

function HomePage() {
  return (
    <HomePageThemeProvider>
      <HomePageInternal />
    </HomePageThemeProvider>
  )
}

export default HomePage
