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
      {/* <SectionLayout ContainerProps={{ className: 'home-spacer' }}> */}
      <ImageCardGridWithLinks
        sql={whatWeDoSql}
        title="What We Do"
        summaryText="We provide multi-omic datasets, software tools, and publications that empower researchers to discover the latest health-promoting therapeutics."
      />
      {/* </SectionLayout> */}
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
          sqlString={topPublicationsSql}
          buttonLink="/Explore/Publications"
          buttonLinkText="See More Publications"
          summaryText="Never miss a new finding from the frontiers of aging research."
        />
      </Box>
      {/*<div className={'home-bg-dark'}>*/}
      {/*  <SectionLayout ContainerProps={{ className: 'home-spacer' }}>*/}
      {/*    <FeaturedDataTabs*/}
      {/*      sql={dataSql}*/}
      {/*      rgbIndex={3}*/}
      {/*      configs={[*/}
      {/*        {*/}
      {/*          title: 'Human Studies',*/}
      {/*          icon: 'PERSON',*/}
      {/*          explorePagePath: '/Explore/Studies',*/}
      {/*          exploreObjectType: 'Studies',*/}
      {/*          plotsConfig: {*/}
      {/*            configs: [*/}
      {/*              {*/}
      {/*                title:*/}
      {/*                  'The Mendelian randomization of human longevity using genetically-predicted exposures from the GWAS catalog study',*/}
      {/*                description:*/}
      {/*                  'This study provides analysis results of a two Sample Mendelian Randomization used to analyze the relationship between significantly associated GWAS traits and five distinct definitions of longevity.',*/}
      {/*                facetsToPlot: ['dataType'],*/}
      {/*                selectFacetColumnName: 'study',*/}
      {/*                selectFacetColumnValue: 'MRGWAS',*/}
      {/*                detailsPagePath:*/}
      {/*                  '/Explore/Studies/DetailsPage?studyKey=MRGWAS',*/}
      {/*                unitDescription: 'Files',*/}
      {/*              },*/}
      {/*              {*/}
      {/*                title:*/}
      {/*                  'The Characterization of gene associations with aging-related traits with a genetically-predicted transcriptome-wide association study',*/}
      {/*                description:*/}
      {/*                  'This study provides analyses of candidate genes and the association of Longevity-Associated Variants (LAVs) with aging-related traits and diseases.',*/}
      {/*                facetsToPlot: ['dataType'],*/}
      {/*                selectFacetColumnName: 'study',*/}
      {/*                selectFacetColumnValue: 'ADAMTS7',*/}
      {/*                detailsPagePath:*/}
      {/*                  '/Explore/Studies/DetailsPage?studyKey=ADAMTS7',*/}
      {/*                unitDescription: 'Files',*/}
      {/*              },*/}
      {/*              {*/}
      {/*                title:*/}
      {/*                  'The Phenome-wide association study of aging: data files and a web resource',*/}
      {/*                description:*/}
      {/*                  'This study is a collection of genetically-predicted tissue-specific gene expression associations with a collection of aging-related traits and outcomes.',*/}
      {/*                facetsToPlot: ['dataType'],*/}
      {/*                selectFacetColumnName: 'study',*/}
      {/*                selectFacetColumnValue: 'Aging-PheWAS',*/}
      {/*                detailsPagePath:*/}
      {/*                  '/Explore/Studies/DetailsPage?studyKey=Aging-PheWAS',*/}
      {/*                unitDescription: 'Files',*/}
      {/*              },*/}
      {/*            ],*/}
      {/*          },*/}
      {/*        },*/}
      {/*        {*/}
      {/*          title: 'Animal Model Studies',*/}
      {/*          icon: 'MOUSE',*/}
      {/*          explorePagePath: '/Explore/Studies',*/}
      {/*          exploreObjectType: 'Studies',*/}
      {/*          plotsConfig: {*/}
      {/*            configs: [],*/}
      {/*          },*/}
      {/*        },*/}
      {/*      ]}*/}
      {/*    />*/}
      {/*  </SectionLayout>*/}
      {/*</div>*/}
      {/* PORTALS-3208: Surface Our Partners (similar to NF) */}

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
