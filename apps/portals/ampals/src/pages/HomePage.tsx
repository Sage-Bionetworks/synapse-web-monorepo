import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import AMPALSHeader from '@sage-bionetworks/synapse-portal-framework/components/amlals/AMPALSHeader'
import { dataSql } from '../config/resources'
import { FeaturedDataTabs } from 'synapse-react-client'
import columnAliases from '../config/columnAliases'
import headerSvg from '../config/style/header.svg?url'

//TODO
export default function HomePage() {
  return (
    <>
      <AMPALSHeader headerSvgURL={headerSvg} />
      {/* <SectionLayout ContainerProps={{ className: 'home-spacer' }}>
        <Goals entityId={'syn23518009'} />
      </SectionLayout> */}
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'Featured Datasets'}
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
                exploreObjectType: 'Datasets',
                plotsConfig: {
                  sql: `${dataSql} where responsibleOrgName is not null`,
                  configs: [
                    {
                      facetsToPlot: ['topic', 'responsibleOrgName'],
                      unitDescription: 'dataset',
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
