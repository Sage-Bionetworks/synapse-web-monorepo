import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import {
  RecentPublicationsGrid,
  ImageCardGridWithLinks,
  PortalFeatureHighlights,
  FeaturedResearch,
  UpsetPlot,
  PortalHomePageHeader,
  GoalsV2,
  PortalFeaturedPartners,
} from 'synapse-react-client'
import ELContributeYourData from '@sage-bionetworks/synapse-portal-framework/components/elportal/ELContributeYourData'
import ELGettingStarted from '@sage-bionetworks/synapse-portal-framework/components/elportal/ELGettingStarted'
import ELSupportedByNIH from '@sage-bionetworks/synapse-portal-framework/components/elportal/ELSupportedByNIH'

import {
  topPublicationsSql,
  whatWeDoSql,
  featuredResearchSql,
  dataSql,
  upsetPlotSql,
  goalsV2Table,
  partnersSql2,
} from '../config/resources'
import { Link, Typography, useTheme } from '@mui/material'
import analyzetheclouds from '../assets/analyzetheclouds.png'
import computationaltools from '../assets/computationaltools.png'
import headerbackground from '../assets/headerbackground.png'
import { Box } from '@mui/material'
import { FeaturedDataTabs } from 'synapse-react-client'
import { handleUpsetPlotClick } from 'src/config/synapseConfigs/handleUpsetPlotClick'
import { TypeAnimation } from 'react-type-animation'

export default function HomePage() {
  const theme = useTheme()

  const styledPortalFeatureHighlightsSummaryText = (
    <>
      The portal supports secure access to leading cloud-based analysis
      platforms, such as{' '}
      <Typography
        component="span"
        sx={{
          fontWeight: 'bold',
          color: 'primary.main',
        }}
      >
        <Link
          href="https://www.cavatica.org/"
          target="_blank"
          sx={{ textDecoration: 'none' }}
        >
          CAVATICA
        </Link>
      </Typography>
      .<br />
      <br />
      This is just the beginning. Future integrations will further expand
      resources for data analysis and collaboration.
    </>
  )
  const title = (
    <Box sx={{ color: 'grey.100' }}>
      <div>Explore the data</div>
      about&nbsp;
      <Box
        component={'span'}
        sx={theme => ({
          [theme.breakpoints.down('sm')]: {
            minHeight: '150px',
            display: 'block',
          },
        })}
      >
        <TypeAnimation
          sequence={[
            'exceptional longevity',
            3000,
            'healthy aging',
            3000,
            'lifespan',
            3000,
            'healthspan',
            3000,
            'familial longevity',
            3000,
            'centenarians',
            3000,
            'long-lived animal species',
            3000,
            'longevity-associated genes',
            3000,
            'comparative biogerontology',
            3000,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          style={{
            fontWeight: 700,
            color: theme.palette.primary.main,
          }}
        />
      </Box>
    </Box>
  )
  const subTitle = (
    <span style={{ color: theme.palette.grey[100] }}>
      The open science hub for breakthroughs in lifespan and healthspan
    </span>
  )
  const description = (
    <span style={{ color: theme.palette.grey[200] }}>
      People with Exceptional Longevity (EL) can live in good health to 95, 100,
      or even beyond. <br /> <br /> The ELITE Portal brings together the latest
      research so that we can crack the code of longevity and all live longer,
      healthier lives.
    </span>
  )
  return (
    <>
      <PortalHomePageHeader
        backgroundCss={`linear-gradient(90deg, #1C3D4F 45.5%, rgba(28, 61, 79, 0.00) 100%), url(${headerbackground}) lightgray 50% / cover no-repeat`}
        title={title}
        subTitle={subTitle}
        description={description}
      />
      <PortalFeaturedPartners sql={partnersSql2} />
      <ImageCardGridWithLinks
        sql={whatWeDoSql}
        title="What We Do"
        summaryText="We provide multi-omic datasets, software tools, and publications that empower researchers to discover the latest health-promoting therapeutics."
      />
      <FeaturedResearch sql={featuredResearchSql} />
      <Box sx={{ backgroundColor: 'grey.100' }}>
        <RecentPublicationsGrid
          sql={topPublicationsSql}
          buttonLink="/Explore/Publications"
          buttonLinkText="See More Publications"
          summaryText="Never miss a new finding from the frontiers of aging research."
        />
      </Box>
      <SectionLayout
        ContainerProps={{
          className: 'home-spacer',
          style: { maxWidth: '100%', padding: 0 },
        }}
      >
        <ELGettingStarted />
        <GoalsV2 entityId={goalsV2Table} dataLink="/Explore/Data" />
        <div className={'home-bg-dark'}>
          <SectionLayout
            title="Exploring the Data"
            centerTitle
            ContainerProps={{ className: 'home-spacer' }}
          >
            <UpsetPlot
              sql={upsetPlotSql}
              rgbIndex={0}
              maxBarCount={20}
              setName="Set size"
              combinationName="Intersection size"
              onClick={handleUpsetPlotClick}
              // summaryLinkText='Explore All Data'
              // summaryLink='/Explore/Data'
            />
          </SectionLayout>
        </div>
        <div className={'home-bg-dark'}>
          <SectionLayout ContainerProps={{ className: 'home-spacer' }}>
            <FeaturedDataTabs
              sql={dataSql}
              rgbIndex={3}
              configs={[
                {
                  title: 'Human Studies',
                  icon: 'PERSON',
                  explorePagePath: '/Explore/Studies',
                  exploreObjectType: 'Studies',
                  plotsConfig: {
                    configs: [
                      {
                        title: 'The Long Life Family Study',
                        description:
                          'The Long Life Family Study (LLFS) investigates genetic and familial factors in exceptional longevity. Families were recruited based on a Family Longevity Selection Score (FLOSS) of ≥7. Over 4,953 individuals from 539 families were phenotyped through in-home visits in the U.S. and Denmark with centralized assays and standardized protocols.',
                        facetsToPlot: ['dataTypes'],
                        selectFacetColumnName: 'Study',
                        selectFacetColumnValue: 'LLFS',
                        detailsPagePath:
                          '/Explore/Studies/DetailsPage?studyKey=LLFS',
                        unitDescription: 'Files',
                        plotType: 'STACKED_HORIZONTAL_BAR',
                      },
                      {
                        title: 'ADAMTS7 Study',
                        description: '',
                        facetsToPlot: ['dataTypes'],
                        selectFacetColumnName: 'Study',
                        selectFacetColumnValue: 'ADAMTS7',
                        detailsPagePath:
                          '/Explore/Studies/DetailsPage?studyKey=ADAMTS7',
                        unitDescription: 'Files',
                        plotType: 'STACKED_HORIZONTAL_BAR',
                      },
                    ],
                  },
                },
                {
                  title: 'Translation Studies',
                  icon: 'TRANSLATIONAL',
                  explorePagePath: '/Explore/Studies',
                  exploreObjectType: 'Studies',
                  plotsConfig: {
                    configs: [
                      {
                        title: 'MRGWAS',
                        description:
                          'The Mendelian randomization of human longevity using genetically-predicted exposures from the GWAS catalog (MRGWAS) study provides analysis results of a two Sample Mendelian Randomization used to analyze the relationship between significantly associated GWAS  traits and five distinct definitions of longevity.',
                        facetsToPlot: ['dataTypes'],
                        selectFacetColumnName: 'Study',
                        selectFacetColumnValue: 'MRGWAS',
                        detailsPagePath:
                          '/Explore/Studies/DetailsPage?studyKey=MRGWAS',
                        unitDescription: 'Files',
                        plotType: 'STACKED_HORIZONTAL_BAR',
                      },
                      {
                        title: 'Aging-PheWAS',
                        description:
                          'This study is a collection of genetically-predicted tissue-specific gene expression associations with a collection of aging-related traits and outcomes.',
                        facetsToPlot: ['dataTypes'],
                        selectFacetColumnName: 'Study',
                        selectFacetColumnValue: 'Aging-PheWAS',
                        detailsPagePath:
                          '/Explore/Studies/DetailsPage?studyKey=Aging-PheWAS',
                        unitDescription: 'Files',
                        plotType: 'STACKED_HORIZONTAL_BAR',
                      },
                    ],
                  },
                },
              ]}
            />
          </SectionLayout>
        </div>
        <ELContributeYourData />
        <PortalFeatureHighlights
          image={analyzetheclouds}
          title="Analyze on the Cloud"
          buttonText="Learn About Our Analysis Platforms"
          summaryText={styledPortalFeatureHighlightsSummaryText}
          link="/Analysis Platforms"
        />
        <PortalFeatureHighlights
          image={computationaltools}
          title="Computational Tools"
          buttonText="Check out our Computational Tools"
          summaryText="We provide researchers with unique access to toolkits for probing and interpreting longevity-related data. The power of new software, pipelines, and applications are all at your fingertips."
          reverseOrder={true}
          link="/Explore/Computational Tools"
        />
        <ELSupportedByNIH />
      </SectionLayout>
    </>
  )
}
