import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import React from 'react'
import {
  RecentPublicationsGrid,
  ImageCardGridWithLinks,
} from 'synapse-react-client'
import ELContributeYourData from '@sage-bionetworks/synapse-portal-framework/components/elportal/ELContributeYourData'
import { topPublicationsSql, whatWeDoSql } from '../config/resources'
import { Box } from '@mui/material'

export default function HomePage() {
  return (
    <>
      <ImageCardGridWithLinks
        sql={whatWeDoSql}
        title="What We Do"
        summaryText="We provide multi-omic datasets, software tools, and publications that empower researchers to discover the latest health-promoting therapeutics."
      />
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
          style: { maxWidth: '100%', padding: 0 },
        }}
      >
        <ELContributeYourData />
      </SectionLayout>
    </>
  )
}
