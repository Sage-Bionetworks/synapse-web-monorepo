import ChallengesCardDeck from '@/components/ChallengesCardDeck'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import StandardsHeader from '@/components/StandardsHeader'
import StandardsContributeToTheRegistry from '@/components/StandardsContributeToTheRegistry'
import {
  standardsFtsConfig,
  standardsSql,
  DST_TABLE_COLUMN_CONSTS,
} from '../config/resources'
import { FeaturedDataTabs } from 'synapse-react-client'
import CTASectionWrapper from 'synapse-react-client/components/CTASectionWrapper/CTASectionWrapper'
import columnAliases from '../config/columnAliases'

export default function HomePage() {
  return (
    <>
      <StandardsHeader sql={standardsSql} ftsConfig={standardsFtsConfig} />
      <div>
        <h2 className="title center-title">
          Standards Related to Bridge2AI Challenges
        </h2>
      </div>
      <ChallengesCardDeck />
      {/* <SectionLayout ContainerProps={{ className: 'home-spacer' }}>
        <Goals entityId={'syn23518009'} />
      </SectionLayout> */}
      <CTASectionWrapper
        sx={{ padding: '0px 0px 60px' }}
        showBlobs={false}
        themeMode={'dark'}
        content={
          <SectionLayout title={'Contribute to the Registry'}>
            <StandardsContributeToTheRegistry />
          </SectionLayout>
        }
      />
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'Exploring the Standards'}
          centerTitle
          ContainerProps={{ className: 'home-spacer' }}
        >
          <FeaturedDataTabs
            sql={standardsSql}
            rgbIndex={3}
            configs={[
              {
                title: '',
                icon: 'chart2',
                explorePagePath: '/Explore',
                exploreObjectType: 'Standards',
                plotsConfig: {
                  sql: `${standardsSql} where ${DST_TABLE_COLUMN_CONSTS.RELEVANT_ORG_NAMES} is not null`,
                  configs: [
                    {
                      facetsToPlot: [
                        'topic',
                        DST_TABLE_COLUMN_CONSTS.RELEVANT_ORG_NAMES,
                      ],
                      unitDescription: 'standard',
                      plotType: 'BAR',
                      columnAliases: columnAliases,
                    },
                  ],
                },
              },
            ]}
          />
        </SectionLayout>
      </div>
    </>
  )
}
