import Ecosystem from '@sage-bionetworks/synapse-portal-framework/components/csbc-home-page/Ecosystem'
import Header from '@sage-bionetworks/synapse-portal-framework/components/Header'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import React from 'react'
import {
  CardContainerLogic,
  Goals,
  Markdown,
  RssFeedCards,
  SynapseConstants,
  UserCardListRotate,
} from 'synapse-react-client'
import { partnersSql, peopleSql } from '../config/resources'
import ELContributeYourData from '@sage-bionetworks/synapse-portal-framework/components/elportal/ELContributeYourData'

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionLayout
        title={'About the Portal'}
        centerTitle
        ContainerProps={{ className: 'home-spacer' }}
      >
        <Markdown
          ownerId={'syn27229419'}
          wikiId="626030"
          loadingSkeletonRowCount={10}
        />
      </SectionLayout>
      <SectionLayout ContainerProps={{ className: 'home-spacer' }}>
        <Goals entityId={'syn51449135'} />
      </SectionLayout>
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
      <SectionLayout
        title={"What's New"}
        centerTitle
        ContainerProps={{ className: 'home-spacer' }}
      >
        <RssFeedCards
          url="https://news.eliteportal.org"
          itemsToShow={3}
          allowCategories={[]}
          // mailChimpListName='AMP-AD quarterly newsletter',
          // mailChimpUrl='https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&amp;id=96b614587a',
          filter={{
            value: 'whats-new',
          }}
        />
      </SectionLayout>
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
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'Related Resources'}
          centerTitle
          ContainerProps={{ className: 'home-spacer' }}
        >
          <Ecosystem
            config={[
              {
                title: 'Data Repositories',
                ownerId: 'syn27229419',
                wikiId: '621470',
              },
              {
                title: 'Cross-Species Research Resources',
                ownerId: 'syn27229419',
                wikiId: '621472',
              },
            ]}
          />
        </SectionLayout>
      </div>
      {/* PORTALS-3208: Surface Our Partners (similar to NF) */}
      <SectionLayout
        title={'Our Partners'}
        centerTitle
        ContainerProps={{ className: 'home-spacer' }}
      >
        <CardContainerLogic
          sql={partnersSql}
          type={SynapseConstants.GENERIC_CARD}
          genericCardSchema={{
            title: 'organizationName',
            type: SynapseConstants.ORGANIZATION,
            description: 'summary',
            icon: 'abbreviation',
            link: 'organizationPath',
            thumbnailRequiresPadding: true,
            imageFileHandleColumnName: 'cardLogo',
          }}
          descriptionConfig={{
            showFullDescriptionByDefault: true,
          }}
          ctaLinkConfig={{
            text: 'Visit Website',
            link: 'website',
          }}
        />
      </SectionLayout>
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'Our People & Institutions'}
          centerTitle
          ContainerProps={{ className: 'home-spacer' }}
        >
          <UserCardListRotate
            sql={`${peopleSql} WHERE isFeatured=true ORDER BY firstName`}
            count={3}
            size={SynapseConstants.MEDIUM_USER_CARD}
            useQueryResultUserData={true}
            summaryLink="Explore/People"
            summaryLinkText="View All People"
          />
        </SectionLayout>
      </div>
      <SectionLayout>
        <ELContributeYourData />
      </SectionLayout>
    </>
  )
}
