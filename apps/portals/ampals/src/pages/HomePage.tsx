import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import AMPALSHeader from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSHeader'
import AMPALSPublishingRequirements from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSPublishingRequirements'
import HowToAccessData from '@sage-bionetworks/synapse-portal-framework/components/ampals/HowToAccessData'
// import AMPALSExploreTheData from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSExploreTheData'
// import { dataSql } from '../config/resources'
// import { FeaturedDataTabs } from 'synapse-react-client'
// import columnAliases from '../config/columnAliases'
import headerSvg from '../config/style/header.svg?url'
import {
  CardGridWithLinks,
  GoalsV3,
  PortalFeaturedPartners,
} from 'synapse-react-client'
import { goalsTableEntityId, partnersSql } from '@/config/resources'
import { ReactComponent as DatasetsIcon } from '../../src/config/style/datasets.svg'
import { ReactComponent as FilesIcon } from '../../src/config/style/files.svg'
import { ReactComponent as ProjectsIcon } from '../../src/config/style/projects.svg'
import AMPALSDevelopedBySage from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSDevelopedBySage'

//TODO
export default function HomePage() {
  const moreResourcesCards = [
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
      title: 'Publishing Requirements',
      description:
        'Learn about the requirements for publishing data in this portal.',
      link: '/Resources/Publishing Requirements',
    },
  ]
  return (
    <>
      <AMPALSHeader headerSvgURL={headerSvg} />
      <SectionLayout
        title={'Our ALS Resources'}
        centerTitle
        ContainerProps={{
          sx: {
            maxWidth: '100% !important',
            padding: { xs: '40px', lg: '60px 80px 80px 80px' },
            h2: {
              lineHeight: 'normal',
              margin: '0 0 40px 0',
            },
          },
        }}
      >
        <GoalsV3
          entityId={goalsTableEntityId}
          svgComponentMap={{
            datasets: DatasetsIcon,
            files: FilesIcon,
            projects: ProjectsIcon,
          }}
        />
      </SectionLayout>
      {/* <AMPALSExploreTheData sql={upsetPlotSql} /> */}
      <HowToAccessData />
      <SectionLayout
        ContainerProps={{
          className: 'home-spacer',
          maxWidth: false,
          style: { padding: 0 },
        }}
      >
        <PortalFeaturedPartners sql={partnersSql} />
      </SectionLayout>
      <AMPALSPublishingRequirements />
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'More Resources'}
          centerTitle
          ContainerProps={{
            maxWidth: false,
            sx: {
              padding: { xs: '40px', lg: '60px 80px 80px 80px' },
              h2: {
                lineHeight: 'normal',
                margin: '0 0 40px 0',
              },
            },
          }}
        >
          <CardGridWithLinks
            linkText={'More Resources'}
            cards={moreResourcesCards}
          />
        </SectionLayout>
      </div>
      <SectionLayout>
        <AMPALSDevelopedBySage />
      </SectionLayout>
    </>
  )
}
