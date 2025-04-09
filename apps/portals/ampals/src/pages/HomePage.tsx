import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import AMPALSHeader from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSHeader'
// import { dataSql } from '../config/resources'
// import { FeaturedDataTabs } from 'synapse-react-client'
// import columnAliases from '../config/columnAliases'
import headerSvg from '../config/style/header.svg?url'
import { FullWidthAlert, MoreResources } from 'synapse-react-client'
import { OrientationBanner } from 'synapse-react-client'

//TODO
export default function HomePage() {
  const resources = [
    {
      title: 'For Researchers',
      description:
        'Tutorials about using this portal, as well as links to external partner resources, and related ALS knowledge portals.',
      link: '/Resources/For Researchers',
    },
    {
      title: 'For Data Contributors',
      description:
        'Visit this page for instructions on how to contribute data to this portal.',
      link: '/Resources/For Contributors',
    },
    {
      title: 'For Persons with Lived Experience',
      description:
        'Visit this page for links to external resources with information about clinical trials, ongoing research, and community.',
      link: '/Resources/For Persons with Lived Experience',
    },
  ]
  return (
    <>
      <OrientationBanner
        name="UnderConstruction"
        title="Welcome to a design preview of our portal!"
        text="The ALS Knowledge Portal is actively under construction, but we wanted to give you a preview. As we build out the portal, this page will be updated with more to see and explore. Stay tuned!"
        sx={{
          width: 'auto',
        }}
      />
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
          <FullWidthAlert
            sx={{ m: 0 }}
            isGlobal={false}
            variant={'warning'}
            show={true}
            title={''}
            description={'This area is under construction'}
          />
          {/* <FeaturedDataTabs
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
          /> */}
          <MoreResources resources={resources} />
        </SectionLayout>
      </div>
    </>
  )
}
