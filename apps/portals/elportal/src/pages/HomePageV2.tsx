import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import {
  RecentPublicationsGrid,
  ImageCardGridWithLinks,
  PortalFeatureHighlights,
  FeaturedResearch,
} from 'synapse-react-client'
import ELContributeYourData from '@sage-bionetworks/synapse-portal-framework/components/elportal/ELContributeYourData'
import ELGettingStarted from '@sage-bionetworks/synapse-portal-framework/components/elportal/ELGettingStarted'
import ELSupportedByNIH from '@sage-bionetworks/synapse-portal-framework/components/elportal/ELSupportedByNIH'

import {
  topPublicationsSql,
  whatWeDoSql,
  featuredResearchSql,
} from '../config/resources'
import { Link, Typography } from '@mui/material'
import analyzetheclouds from '../assets/analyzetheclouds.png'
import computationaltools from '../assets/computationaltools.png'
import { Box } from '@mui/material'

export default function HomePage() {
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
  return (
    <>
      <ImageCardGridWithLinks
        sql={whatWeDoSql}
        title="What We Do"
        summaryText="We provide multi-omic datasets, software tools, and publications that empower researchers to discover the latest health-promoting therapeutics."
      />
      <FeaturedResearch sql={featuredResearchSql} />
      {/* Commented out for release (see EC-485) */}
      {/*<div className={'home-bg-dark'}>*/}
      {/*<SectionLayout*/}
      {/*  title="Exploring the Data"*/}
      {/*  centerTitle*/}
      {/*  ContainerProps={{ className: 'home-spacer' }}*/}
      {/*>*/}
      {/* Commented out for release (see EC-485) */}
      {/*  <UpsetPlot*/}
      {/*    sql={upsetPlotSql}*/}
      {/*    rgbIndex={0}*/}
      {/*    maxBarCount={20}*/}
      {/*    setName="# Files per assay"*/}
      {/*    combinationName="# individuals"*/}
      {/*    onClick={handleUpsetPlotClick}*/}
      {/*    // summaryLinkText='Explore All Data'*/}
      {/*    // summaryLink='/Explore/Data'*/}
      {/*  />*/}
      {/*</SectionLayout>*/}
      {/*</div>*/}
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
    </>
  )
}
