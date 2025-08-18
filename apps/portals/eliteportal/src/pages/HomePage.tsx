import analyzetheclouds from '@/assets/analyzetheclouds.png'
import computationaltools from '@/assets/computationaltools.png'
import headerbackgroundvideo from '@/assets/header-video.mp4'
import { handleUpsetPlotClick } from '@sage-bionetworks/synapse-portal-framework/utils/handleUpsetPlotClick'
import { Box, Link, Typography, useTheme } from '@mui/material'
import ELContributeYourData from '@sage-bionetworks/synapse-portal-framework/components/eliteportal/ELContributeYourData'
import ELGettingStarted from '@sage-bionetworks/synapse-portal-framework/components/eliteportal/ELGettingStarted'
import ElNewsletterSection from '@sage-bionetworks/synapse-portal-framework/components/eliteportal/ELNewsletterSection'
import ELSupportedByNIH from '@sage-bionetworks/synapse-portal-framework/components/eliteportal/ELSupportedByNIH'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { TypeAnimation } from 'react-type-animation'
import {
  FeaturedDataTabs,
  FeaturedResearch,
  GoalsV2,
  ImageCardGridWithLinks,
  PortalFeaturedPartners,
  PortalFeatureHighlights,
  PortalHomePageHeader,
  PortalSectionHeader,
  RecentPublicationsGrid,
  UpsetPlot,
} from 'synapse-react-client'
import {
  cohortBuilderSql,
  dataSql,
  featuredResearchSql,
  goalsV2Table,
  partnersSql2,
  topPublicationsSql,
  upsetPlotSql,
  whatWeDoSql,
} from '../config/resources'
import { useNavigate } from 'react-router'
import { HomePageThemeProvider } from '@/themes/HomePageThemeProvider'

function HomePageInternal() {
  const theme = useTheme()
  const navigate = useNavigate()

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
      Discover and explore data&nbsp;
      <Box
        component={'span'}
        sx={theme => ({
          [theme.breakpoints.up('md')]: {
            display: 'block',
          },
        })}
      ></Box>
      about&nbsp;
      <Box
        component={'span'}
        sx={theme => ({
          [theme.breakpoints.down('md')]: {
            display: 'block',
            minHeight: '100px',
          },
          [theme.breakpoints.down('sm')]: {
            minHeight: '150px',
          },
        })}
      >
        <TypeAnimation
          sequence={[
            'exceptional longevity',
            3000,
            'healthy aging',
            3000,
            'life span',
            3000,
            'health span',
            3000,
            'familial longevity',
            3000,
            'centenarians',
            3000,
            'cross-species studies',
            3000,
            'longevity-associated genes',
            3000,
            'longevity-associated omics',
            3000,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          style={{
            fontWeight: 700,
            color: '#35E7C6',
          }}
        />
      </Box>
    </Box>
  )
  const subTitle = (
    <span style={{ color: theme.palette.grey[100] }}>
      The open science hub for breakthroughs in life span and health span
    </span>
  )
  const description = (
    <span style={{ color: theme.palette.grey[200] }}>
      People with Exceptional Longevity (EL) can live in good health to 95, 100,
      or even beyond. <br /> <br /> The ELITE Portal brings together the latest
      research so we can turn biological insights into treatments that will help
      us all live longer, healthier lives.
    </span>
  )
  return (
    <>
      <PortalHomePageHeader
        backgroundCss={`linear-gradient(90deg, #024472 45.5%, rgba(2, 68, 114, 0.00) 100%)`}
        title={title}
        subTitle={subTitle}
        description={description}
        backgroundMp4={headerbackgroundvideo}
        backgroundMp4Css="#024472"
      />
      <ImageCardGridWithLinks
        sql={whatWeDoSql}
        title="What We Do"
        summaryText="The ELITE Portal provides rich multi-omic datasets, computational tools, publications, and resources that empower researchers to discover novel therapeutic targets of health and disease. Learn more about our research domains and tools."
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
          maxWidth: false,
          style: { padding: 0 },
        }}
      >
        <ELGettingStarted />
      </SectionLayout>
      <SectionLayout
        ContainerProps={{
          className: 'home-spacer',
          maxWidth: false,
          style: { padding: 0 },
        }}
      >
        <GoalsV2 entityId={goalsV2Table} dataLink="/Explore/Data" />
      </SectionLayout>
      <SectionLayout>
        <PortalSectionHeader
          title="Explore the Data"
          buttonText="View All Studies"
          link="/Explore/Studies"
          centered
          sx={{ marginBottom: '90px' }}
        />
        <UpsetPlot
          sql={upsetPlotSql}
          rgbIndex={0}
          maxBarCount={20}
          setName="Set Size"
          combinationName="Intersection Size"
          onClick={handleUpsetPlotClick({
            sql: cohortBuilderSql,
            explorePath: 'Cohort Builder',
            columnName: 'dataTypes',
            navigate,
          })}
          // summaryLinkText='Explore All Data'
          // summaryLink='/Explore/Data'
        />
      </SectionLayout>
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
                        'The Long Life Family Study (LLFS) is an international study of genetics and familial components of exceptional survival, longevity, and healthy aging, providing rich longitudinal data including physical, cognitive, and cardiovascular phenotypes and comprehensive genetic and multi-OMIC profiles from families with exceptional longevity.',
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
                      description:
                        'This study evaluates Longevity-Associated Variants (LAVs) from a GWAS of parental lifespan and assesses their translational potential by applying Mendelian Randomization to evaluate the influence of tissue-specific LAG expression on disease pathways using data from the MrOS, SOF, and Health ABC cohorts.',
                      facetsToPlot: ['dataTypes'],
                      selectFacetColumnName: 'Study',
                      selectFacetColumnValue: 'ADAMTS7',
                      detailsPagePath:
                        '/Explore/Studies/DetailsPage?studyKey=ADAMTS7',
                      unitDescription: 'Files',
                      plotType: 'STACKED_HORIZONTAL_BAR',
                    },
                    {
                      title:
                        'Shotgun Metagenomics Analysis of the Gut Microbiome',
                      description:
                        'The study provides metagenomics data from 209 samples including 78 centenarian samples (over 100 years of age) and 131 younger samples (59-99). Samples were collected as part of the Integrative longevity Omics (ILO) study with the aim to discover molecular profiles that associate with exceptional longevity and healthy aging phenotypes including delay of or escape from Alzheimer’s disease.',
                      facetsToPlot: ['dataTypes'],
                      selectFacetColumnName: 'Study',
                      selectFacetColumnValue: 'ILOMGS',
                      detailsPagePath:
                        '/Explore/Studies/DetailsPage?studyKey=ILOMGS',
                      unitDescription: 'Files',
                      plotType: 'STACKED_HORIZONTAL_BAR',
                    },
                  ],
                },
              },
              {
                title: 'Translational Studies',
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
              {
                title: 'Cross Species Studies',
                icon: 'tree_horizontal',
                explorePagePath: '/Explore/Studies',
                exploreObjectType: 'Studies',
                plotsConfig: {
                  configs: [
                    {
                      title:
                        'Multi-Omic Signatures of Longevity Across Avian and Mammalian Species',
                      description:
                        'The Gladyshev Multi-Omic Signatures of Longevity Across Avian and Mammalian Species (G_M-OSLAMS) study analyzes transcriptomic, proteomic, and metabolomic data across multiple avian tissues to identify key gene expression biomarkers linked to lifespan. Comparing these longevity signatures to those previously identified in mammals, the research aims to uncover universal and species-specific pathways regulating lifespan across vertebrates.',
                      facetsToPlot: ['dataTypes'],
                      selectFacetColumnName: 'Study',
                      selectFacetColumnValue: 'G_M-OSLAMS',
                      detailsPagePath:
                        '/Explore/Studies/DetailsPage?studyKey=G_M-OSLAMS',
                      unitDescription: 'Files',
                      plotType: 'STACKED_HORIZONTAL_BAR',
                    },
                    {
                      title:
                        'Comparative transcriptomics reveals circadian and pluripotency networks as two pillars of longevity regulation',
                      description:
                        'This study conducted comparative transcriptomics on 26 species with diverse lifespans, identifying thousands of genes correlated with maximum lifespan. This work provides targets for anti-aging interventions by defining pathways correlated with longevity across mammals and uncovers circadian and pluripotency networks as central regulators of longevity.',
                      facetsToPlot: ['dataTypes'],
                      selectFacetColumnName: 'Study',
                      selectFacetColumnValue: 'Gorbunova_CP_Transcriptomics',
                      detailsPagePath:
                        '/Explore/Studies/DetailsPage?studyKey=Gorbunova_CP_Transcriptomics',
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
      <SectionLayout
        ContainerProps={{
          className: 'home-spacer',
          maxWidth: false,
          style: { padding: 0 },
        }}
      >
        <ELContributeYourData />
      </SectionLayout>
      <SectionLayout
        ContainerProps={{
          className: 'home-spacer',
          maxWidth: false,
          style: { padding: 0 },
        }}
      >
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
          summaryText="Access toolkits generated by our partners for probing and interpreting longevity-related data. The power of new software, pipelines, and applications are all at your fingertips."
          reverseOrder={true}
          link="/Explore/Computational Tools"
        />
      </SectionLayout>
      <SectionLayout
        ContainerProps={{
          className: 'home-spacer',
          maxWidth: false,
          style: { padding: 0 },
        }}
      >
        <PortalFeaturedPartners sql={partnersSql2} />
      </SectionLayout>
      <div className={'home-bg-dark'}>
        <SectionLayout
          ContainerProps={{
            className: 'home-spacer',
            maxWidth: false,
            style: { padding: 0 },
          }}
        >
          <ELSupportedByNIH />
        </SectionLayout>
      </div>
      <div className={'home-bg-dark'}>
        <ElNewsletterSection />
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
