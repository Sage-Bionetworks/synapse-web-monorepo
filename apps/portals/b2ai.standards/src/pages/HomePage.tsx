import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import StandardsHeader from '@sage-bionetworks/synapse-portal-framework/components/b2ai.standards/StandardsHeader'
import StandardsContributeToTheRegistry from '@sage-bionetworks/synapse-portal-framework/components/b2ai.standards/StandardsContributeToTheRegistry'
import CTASectionWrapper from 'synapse-react-client/components/CTASectionWrapper/CTASectionWrapper'
import { dataSql } from '../config/resources'
import { FeaturedDataTabs } from 'synapse-react-client'
import columnAliases from '../config/columnAliases'

//TODO
export default function HomePage() {
  return (
    <>
      <StandardsHeader dataSql={dataSql} />
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
            sql={dataSql}
            rgbIndex={3}
            configs={[
              {
                title: '',
                icon: 'chart2',
                explorePagePath: '/Explore',
                exploreObjectType: 'Standards',
                plotsConfig: {
                  sql: `${dataSql} where organizations is not null`,
                  configs: [
                    {
                      facetsToPlot: ['topic', 'organizations'],
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
