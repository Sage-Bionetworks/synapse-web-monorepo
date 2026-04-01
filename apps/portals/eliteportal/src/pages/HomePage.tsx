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
import FeaturedDataTabs from 'synapse-react-client/components/FeaturedDataTabs/FeaturedDataTabs'
import FeaturedResearch from 'synapse-react-client/components/FeaturedResearch/FeaturedResearch'
import { GoalsV2 } from 'synapse-react-client/components/GoalsV2/GoalsV2'
import ImageCardGridWithLinks from 'synapse-react-client/components/ImageCardGridWithLinks/ImageCardGridWithLinks'
import PortalFeaturedPartners from 'synapse-react-client/components/PortalFeaturedPartners/PortalFeaturedPartners'
import PortalFeatureHighlights from 'synapse-react-client/components/PortalFeatureHighlights/PortalFeatureHighlights'
import PortalHomePageHeader from 'synapse-react-client/components/PortalHomePageHeader/PortalHomePageHeader'
import PortalSectionHeader from 'synapse-react-client/components/PortalSectionHeader/PortalSectionHeader'
import RecentPublicationsGrid from 'synapse-react-client/components/RecentPublicationsGrid/RecentPublicationsGrid'
import { UpsetPlot } from 'synapse-react-client/components/Plot/UpsetPlot'
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
import { visuallyHidden } from 'synapse-react-client'

function HomePageInternal() {
  const theme = useTheme()
  const navigate = useNavigate()

  const animationPhrases = [
    'exceptional longevity',
    'healthy aging',
    'life span',
    'health span',
    'familial longevity',
    'centenarians',
    'cross-species studies',
    'longevity-associated genes',
    'longevity-associated omics',
  ]

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
          aria-hidden="true"
          sequence={animationPhrases.flatMap(phrase => [phrase, 3000])}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          style={{
            fontWeight: 700,
            color: '#35E7C6',
          }}
        />
        {/* Screen reader only text */}
        <Box component="span" sx={visuallyHidden}>
          {animationPhrases.join(', ')}
        </Box>
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
        columnCount={3}
        heightPx={245}
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
            explorePath: 'Cohort Builder/Individuals',
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
                      selectFacetColumnName: 'studyKey',
                      selectFacetColumnValue: 'LLFS',
                      detailsPagePath:
                        '/Explore/Studies/DetailsPage?studyKey=LLFS',
                      unitDescription: 'Files',
                      plotType: 'STACKED_HORIZONTAL_BAR',
                    },
                    {
                      title: 'The New England Centenarian Study APOE',
                      description:
                        'This study explores how the protective APOE e2 allele shapes metabolism in aging. It includes serum metabolomics and cognitive assessments from ~200 participants—centenarians, their offspring, and controls—all free of major diseases. A subset also has proteomics data, offering a deeper look into longevity-related biological signatures.',
                      facetsToPlot: ['dataTypes'],
                      selectFacetColumnName: 'studyKey',
                      selectFacetColumnValue: 'NECS_APOE',
                      detailsPagePath:
                        '/Explore/Studies/DetailsPage?studyKey=NECS_APOE',
                      unitDescription: 'Files',
                      plotType: 'STACKED_HORIZONTAL_BAR',
                    },
                    {
                      title: 'Arivale Scientific Wellness Study',
                      description:
                        'The Arivale-Providence Feasibility Study of Scientific Wellness is a 3-year pilot study examining the impact of a Scientific Wellness intervention on health, wellness, quality of life, productivity, and medical claims among Providence employees. Building on preliminary research by the Institute for Systems Biology, the study uses longitudinal monitoring of clinical labs, genetics, gut microbiome, and lifestyle data combined with personalized coaching to recommend actionable interventions.',
                      facetsToPlot: ['dataTypes'],
                      selectFacetColumnName: 'studyKey',
                      selectFacetColumnValue: 'Arivale_SWS',
                      detailsPagePath:
                        '/Explore/Studies/DetailsPage?studyKey=Arivale_SWS',
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
                      selectFacetColumnName: 'studyKey',
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
                      selectFacetColumnName: 'studyKey',
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
                      selectFacetColumnName: 'studyKey',
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
                      selectFacetColumnName: 'studyKey',
                      selectFacetColumnValue: 'Gorbunova_CP_Transcriptomics',
                      detailsPagePath:
                        '/Explore/Studies/DetailsPage?studyKey=Gorbunova_CP_Transcriptomics',
                      unitDescription: 'Files',
                      plotType: 'STACKED_HORIZONTAL_BAR',
                    },
                    {
                      title: 'Cross-Species Fibroblast Study',
                      description:
                        'Multiomic assays were applied to a large scale cross species fibroblast cell culture collection derived from nearly 150 primate, bat, rodent, and bird species to determine factors related to aging and longevity.',
                      facetsToPlot: ['dataTypes'],
                      selectFacetColumnName: 'studyKey',
                      selectFacetColumnValue: 'LC_CP_OMICS',
                      detailsPagePath:
                        '/Explore/Studies/DetailsPage/StudyDetails?studyKey=LC_CP_OMICS',
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
          sx: {
            backgroundColor: 'grey.100',
            p: 0,
          },
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
