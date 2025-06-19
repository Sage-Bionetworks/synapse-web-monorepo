import Header from '@sage-bionetworks/synapse-portal-framework/components/Header'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import {
  FeaturedDataTabs,
  Goals,
  SynapseConstants,
  TableFeedCards,
} from 'synapse-react-client'

function HomePage() {
  return (
    <>
      <Header />
      <SectionLayout ContainerProps={{ className: 'home-spacer' }}>
        <Goals entityId={'syn23518009'} />
      </SectionLayout>
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'Collections'}
          centerTitle
          ContainerProps={{ className: 'home-spacer' }}
        >
          <FeaturedDataTabs
            sql="SELECT * FROM syn21994974"
            rgbIndex={3}
            configs={[
              {
                title: 'Studies',
                icon: SynapseConstants.FILE,
                explorePagePath: '/Explore/Collections',
                exploreObjectType: 'Collections',
                plotsConfig: {
                  sql: 'SELECT * FROM syn21994974 WHERE ( ( "collectionType" = \'Validation Study\' OR "collectionType" = \'Interventional Study\' OR "collectionType" = \'Observational Study\' ) )',
                  configs: [
                    {
                      facetsToPlot: [
                        'diagnosis',
                        'dataCollectionMethod',
                        'digitalAssessmentCategory',
                        'sensorType',
                        'devicePlatform',
                      ],
                      unitDescription: 'Collections',
                    },
                  ],
                },
              },
              {
                title: 'Analysis',
                icon: SynapseConstants.CHART2,
                explorePagePath: '/Explore/Collections',
                exploreObjectType: 'Collections',
                plotsConfig: {
                  sql: 'SELECT * FROM syn21994974 WHERE ( ( "collectionType" = \'Analysis\' OR "collectionType" = \'Challenge\' ) )',
                  configs: [
                    {
                      facetsToPlot: [
                        'diagnosis',
                        'dataCollectionMethod',
                        'digitalAssessmentCategory',
                        'sensorType',
                        'devicePlatform',
                      ],
                      unitDescription: 'Collections',
                    },
                  ],
                },
              },
            ]}
          />
        </SectionLayout>
        <SectionLayout title={"What's New"} centerTitle>
          <TableFeedCards tableEntityId={'syn23520190'} />
        </SectionLayout>
      </div>
    </>
  )
}

export default HomePage
