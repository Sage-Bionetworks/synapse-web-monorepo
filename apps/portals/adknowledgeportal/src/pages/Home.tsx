import { dataSql, peopleSql } from '@/config/resources'
import programsHomePageConfig from '@/config/synapseConfigs/programsHomePage'
import EcosystemLayout from 'synapse-react-client/components/Ecosystem/EcosystemLayout'
import Header from '@sage-bionetworks/synapse-portal-framework/components/Header'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { FeaturedDataTabs } from 'synapse-react-client/components/FeaturedDataTabs'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import { Programs } from 'synapse-react-client/components/Programs'
import RssFeedCards from 'synapse-react-client/components/RssFeedCards/RssFeedCards'
import { UserCardListRotate } from 'synapse-react-client/components/UserCardList/UserCardListRotate'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'

function Home() {
  return (
    <>
      <Header />
      <SectionLayout
        title={'Programs'}
        centerTitle={true}
        ContainerProps={{
          sx: {
            '.Programs__Card': {
              width: '32%',
            },
          },
        }}
      >
        <Programs {...programsHomePageConfig} />
      </SectionLayout>
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'Featured Data'}
          centerTitle={true}
          ContainerProps={{
            className: 'home-spacer',
          }}
        >
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
                      title: 'The Whole Genome Sequencing Harmonization Study',
                      description:
                        'This study provides a set of harmonized WGS data generated from the three primary AMP-AD cohort studies: ROSMAP, MSBB, and MayoRNAseq.',
                      facetsToPlot: ['dataType', 'assay'],
                      selectFacetColumnName: 'study',
                      selectFacetColumnValue: 'WGS_Harmonization',
                      detailsPagePath:
                        '/Explore/Studies/DetailsPage?Study=syn22264775',
                      unitDescription: 'Files',
                    },
                    {
                      title: 'The RNAseq Harmonization Study',
                      description:
                        'This study provides harmonized RNA sequencing data from the ROSMAP, MSBB, and MayoRNAseq studies that have been aligned to the GRCh38 human genome build.',
                      facetsToPlot: ['dataType', 'assay'],
                      selectFacetColumnName: 'study',
                      selectFacetColumnValue: 'RNAseq_Harmonization',
                      detailsPagePath:
                        '/Explore/Studies/DetailsPage?Study=syn21241740',
                      unitDescription: 'Files',
                    },
                    {
                      title:
                        'The Religious Orders and Memory and Aging Project Study',
                      description:
                        'This study generated genomic variants, gene expression, epigenetic, proteomics, and metabolomics data on two human cohorts: the Religious Orders Study (ROS) and the Memory and Aging Project (MAP).',
                      facetsToPlot: ['dataType', 'assay'],
                      selectFacetColumnName: 'study',
                      selectFacetColumnValue: 'ROSMAP',
                      detailsPagePath:
                        '/Explore/Studies/DetailsPage?Study=syn3219045',
                      unitDescription: 'Files',
                    },
                  ],
                },
              },
              {
                title: 'Animal Model Studies',
                icon: 'MOUSE',
                explorePagePath: '/Explore/Studies',
                exploreObjectType: 'Studies',
                plotsConfig: {
                  configs: [
                    {
                      title: 'The UCI MODEL-AD 5XFAD Study',
                      description:
                        "This study provides deep phenotyping data on the early onset Alzheimer's disease 5XFAD mouse model.",
                      facetsToPlot: ['dataType', 'assay'],
                      selectFacetColumnName: 'study',
                      selectFacetColumnValue: 'UCI_5XFAD',
                      detailsPagePath:
                        '/Explore/Studies/DetailsPage?Study=syn16798076',
                      unitDescription: 'Files',
                    },
                    {
                      title:
                        'The IU/Jax/Pitt MODEL-AD Levetiracetam 5XFAD Study',
                      description:
                        'This study provides pharmacokinetic, imaging, and behavior data on the 5XFAD mouse model dosed with levetiracetam.',
                      facetsToPlot: ['dataType', 'assay'],
                      selectFacetColumnName: 'study',
                      selectFacetColumnValue: 'Jax.IU.Pitt_Levetiracetam_5XFAD',
                      detailsPagePath:
                        '/Explore/Studies/DetailsPage?Study=syn21784897',
                      unitDescription: 'Files',
                    },
                    {
                      title:
                        'The IU/Jax/Pitt MODEL-AD Verubecestat 5XFAD Study',
                      description:
                        'This study provides pharmacokinetic, imaging, immunoassay, and behavior data on the 5XFAD mouse model dosed with verubecestat.',
                      facetsToPlot: ['dataType', 'assay'],
                      selectFacetColumnName: 'study',
                      selectFacetColumnValue: 'Jax.IU.Pitt_Verubecestat_5XFAD',
                      detailsPagePath:
                        '/Explore/Studies/DetailsPage?Study=syn21863375',
                      unitDescription: 'Files',
                    },
                  ],
                },
              },
            ]}
          />
        </SectionLayout>
      </div>
      <SectionLayout
        title={'Related Resources'}
        centerTitle={true}
        subtitle={
          'The AD Knowledge Portal ecosystem contains a growing list of tools and resources. Explore some of them below.'
        }
        ContainerProps={{
          className: 'home-spacer',
        }}
      >
        <EcosystemLayout
          config={[
            {
              title: 'Results Explorers',
              content: <Markdown ownerId={'syn12666371'} wikiId={'607139'} />,
            },
            {
              title: 'Data Portals',
              content: <Markdown ownerId={'syn12666371'} wikiId={'607138'} />,
            },
            {
              title: 'Program Websites',
              content: <Markdown ownerId={'syn12666371'} wikiId={'607140'} />,
            },
          ]}
        />
      </SectionLayout>
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'Our People and Institutions'}
          centerTitle={true}
          ContainerProps={{
            className: 'home-spacer',
          }}
        >
          <UserCardListRotate
            sql={`${peopleSql} where isFeatured=true`}
            count={3}
            size={SynapseConstants.MEDIUM_USER_CARD}
            useQueryResultUserData={true}
            summaryLink="Explore/People"
            summaryLinkText="Explore All People"
          />
        </SectionLayout>
      </div>
      <SectionLayout
        title={"What's New"}
        centerTitle={true}
        ContainerProps={{
          className: 'home-spacer',
        }}
      >
        <RssFeedCards
          url="https://news.adknowledgeportal.org"
          itemsToShow={3}
          allowCategories={[]}
          mailChimpListName="AMP-AD quarterly newsletter"
          mailChimpUrl="https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&amp;id=96b614587a"
          filter={{
            value: "what's-new",
          }}
        />
      </SectionLayout>
    </>
  )
}

export default Home
