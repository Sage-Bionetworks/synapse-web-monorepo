import { ecosystemResourcesSql } from '@/config/resources'
import consortiaHomePageConfig from '@/config/synapseConfigs/consortiaHomePage'
import {
  onIndividualThemeBarPlotPointClick,
  onPointClick,
} from '@/config/synapseConfigs/onPointClick'
import CancerComplexityHeader from '@sage-bionetworks/synapse-portal-framework/components/cancercomplexity/CancerComplexityHeader'
import CancerComplexityIntro from '@sage-bionetworks/synapse-portal-framework/components/cancercomplexity/CancerComplexityIntro'
import AboutPortal from '@sage-bionetworks/synapse-portal-framework/components/csbc-home-page/AboutPortal'
import ConsortiaGoals from '@sage-bionetworks/synapse-portal-framework/components/csbc-home-page/ConsortiaGoals'
import DevelopedBySage from '@sage-bionetworks/synapse-portal-framework/components/csbc-home-page/DevelopedBySage'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import TableQueryEcosystem from 'synapse-react-client/components/Ecosystem/TableQueryEcosystem'
import { ThemesPlot } from 'synapse-react-client/components/Plot/ThemesPlot'
import Programs from 'synapse-react-client/components/Programs'
import RssFeedCards from 'synapse-react-client/components/RssFeedCards'

function Home() {
  return (
    <>
      <CancerComplexityHeader />
      <SectionLayout>
        <CancerComplexityIntro />
      </SectionLayout>
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'Portal Goals'}
          centerTitle
          ContainerProps={{
            className: 'home-spacer',
          }}
        >
          <ConsortiaGoals />
        </SectionLayout>
      </div>
      {/* <SectionLayout
              title="What Resources are Available?"
              centerTitle
              ContainerProps={{
                className: 'home-spacer',
              }}
            >
              <CardDeck {...availableResearchCardDeckConfig} />
            </SectionLayout> */}

      <SectionLayout
        title={'What Research Themes are Scientists Currently Focusing On?'}
        centerTitle
        ContainerProps={{
          className: 'home-spacer',
        }}
      >
        <ThemesPlot
          onPointClick={onPointClick}
          onIndividualThemeBarPlotPointClick={
            onIndividualThemeBarPlotPointClick
          }
          topBarPlot={{
            entityId: 'syn21641485',
            xField: 'totalCount',
            yField: 'groupBy',
            groupField: 'consortium',
            colors: {
              CCBIR: 'rgba(24, 115, 107, 1)',
              CSBC: 'rgba(156, 196, 233, 1)',
              ICBP: 'rgba(226, 149, 12, 1)',
              MetNet: 'rgba(30, 44, 72, 1)',
              NCI: 'rgba(249, 204, 125, 1)',
              PDMC: 'rgba(32, 171, 159, 1)',
              'PS-ON': 'rgba(197, 191, 223, 1)',
              TEC: 'rgba(59, 88, 143, 1)',
              'Sage Bionetworks': 'rgba(127, 127, 127, 1)',
            },
            whereClause: 'totalCount is not NULL',
          }}
          sideBarPlot={{
            entityId: 'syn21649281',
            xField: 'totalCount',
            yField: 'theme',
            groupField: 'consortium',
            countLabel: 'grants',
            plotStyle: {
              backgroundColor: '#f5f9fa',
            },
            colors: {
              CSBC: '#1c76af',
              'PS-ON': '#5bb0b5',
              ICBP: '#9cc4e9',
              TEC: '#c5bfdf',
            },
          }}
          dotPlot={{
            entityId: 'syn21639584',
            xField: 'totalCount',
            yField: 'theme',
            groupField: 'groupBy',
            infoField: 'themeDescription',
            whereClause: "groupBy IN ('publications', 'tools', 'datasets')",
            markerSymbols: {
              tools: 'y-down',
              datasets: 'diamond-x',
              publications: 'circle',
            },
            plotStyle: {
              markerLine: 'rgba(0, 0, 0,1)',
              markerFill: 'rgba(255, 255, 255,1)',
              markerSize: 11,
              backgroundColor: '#f5f9fa',
            },
          }}
        />
      </SectionLayout>
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={"What's New"}
          centerTitle
          ContainerProps={{ className: 'home-spacer' }}
        >
          <RssFeedCards
            url={'https://news.cancercomplexity.synapse.org'}
            itemsToShow={3}
            allowCategories={[]}
            filter={{
              value: 'CCKP',
              type: 'category',
            }}
          />
        </SectionLayout>
      </div>
      <SectionLayout
        title={'Consortia'}
        centerTitle
        ContainerProps={{
          className: 'home-spacer cancercomplexity-consortia',
        }}
      >
        <Programs {...consortiaHomePageConfig} />
      </SectionLayout>
      <div className={'home-bg-dark'}>
        <SectionLayout
          title="The Cancer Resource Information Ecosystem"
          subtitle="The Cancer Resource Information ecosystem contains a growing list of tools and resources. Explore some of them below."
          centerTitle
          ContainerProps={{
            className: 'home-spacer',
          }}
        >
          <TableQueryEcosystem
            query={{
              sql: ecosystemResourcesSql,
            }}
          />
        </SectionLayout>
      </div>
      <SectionLayout
        title={'About the Cancer Complexity Knowledge Portal'}
        subtitle={
          'The portal is built to disseminate resources to accelerate discovery and collaboration in the cancer research community. We aim to provide rich context about and access to activities and contributors that have produced the resources hosted within this and other repositories.'
        }
        centerTitle
        ContainerProps={{ className: 'home-spacer' }}
      >
        <AboutPortal
          cardProps={[
            { ownerId: 'syn21498902', wikiId: '601369' },
            { ownerId: 'syn21498902', wikiId: '601370' },
          ]}
        />
      </SectionLayout>
      <SectionLayout>
        <DevelopedBySage />
      </SectionLayout>
    </>
  )
}

export default Home
