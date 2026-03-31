import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import AMPALSHeader from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSHeader'
import AMPALSPublishingRequirements from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSPublishingRequirements'
import HowToAccessData from '@sage-bionetworks/synapse-portal-framework/components/ampals/HowToAccessData'
// import AMPALSExploreTheData from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSExploreTheData'
import FeaturedDataTabs from 'synapse-react-client/components/FeaturedDataTabs/FeaturedDataTabs'
import { RssFeedCards } from 'synapse-react-client/components/RssFeedCards/RssFeedCards'
// import columnAliases from '../config/columnAliases'
import headerSvg from '../config/style/header.svg?url'
import CardGridWithLinks from 'synapse-react-client/components/CardGridWithLinks/CardGridWithLinks'
import GoalsV3 from 'synapse-react-client/components/GoalsV3/GoalsV3'
import PortalFeaturedPartners from 'synapse-react-client/components/PortalFeaturedPartners/PortalFeaturedPartners'
import {
  datasetsSql,
  goalsTableEntityId,
  partnersSql,
} from '@/config/resources'
import { ReactComponent as DatasetsIcon } from '../../src/config/style/datasets.svg'
import { ReactComponent as FilesIcon } from '../../src/config/style/files.svg'
import { ReactComponent as ProjectsIcon } from '../../src/config/style/projects.svg'
import AMPALSDevelopedBySage from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSDevelopedBySage'
import { Query } from '@sage-bionetworks/synapse-types'
import { generateCompressedQueryURL } from 'synapse-react-client/utils/functions/deepLinkingUtils'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [geoUrl, setGeoUrl] = useState<string>('')
  const [nygcUrl, setNygcUrl] = useState<string>('')
  const [barmadaUrl, setBarmadaUrl] = useState<string>('')

  useEffect(() => {
    const initQuery: Query = {
      sql: datasetsSql,
    }

    // Generate URL for Gene Expression Omnibus
    const geoQuery: Query = {
      sql: datasetsSql,
      limit: 25,
      selectedFacets: [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'source',
          facetValues: ['Gene Expression Omnibus'],
        },
      ],
    }
    generateCompressedQueryURL(
      '/Explore/Datasets',
      0,
      geoQuery,
      initQuery,
    ).then(setGeoUrl)

    // Generate URL for NYGC ALS Consortium
    const nygcQuery: Query = {
      sql: datasetsSql,
      limit: 25,
      selectedFacets: [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'contributor',
          facetValues: ['NYGC ALS Consortium'],
        },
      ],
    }
    generateCompressedQueryURL(
      '/Explore/Datasets',
      0,
      nygcQuery,
      initQuery,
    ).then(setNygcUrl)

    // Generate URL for Barmada Lab
    const barmadaQuery: Query = {
      sql: datasetsSql,
      limit: 25,
      selectedFacets: [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'contributor',
          facetValues: ['Barmada Lab - University of Michigan'],
        },
      ],
    }
    generateCompressedQueryURL(
      '/Explore/Datasets',
      0,
      barmadaQuery,
      initQuery,
    ).then(setBarmadaUrl)
  }, [])

  const moreResourcesCards = [
    {
      title: 'For Researchers',
      description:
        'Tutorials about using this portal, as well as links to external partner resources, and related ALS knowledge portals.',
      link: '/Data Access',
    },
    {
      title: 'For Data Contributors',
      description:
        'Visit this page for instructions on how to contribute data to this portal.',
      link: '/Contribute Data',
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
          sx: {
            backgroundColor: 'white',
            pb: '50px',
          },
        }}
      >
        <PortalFeaturedPartners
          sql={partnersSql}
          titleText="Our Contributors"
        />
      </SectionLayout>
      <AMPALSPublishingRequirements />
      <SectionLayout
        title={"What's New"}
        centerTitle={true}
        ContainerProps={{
          className: 'home-spacer',
        }}
      >
        <RssFeedCards
          url=" https://salsportalnews.wpenginepowered.com"
          itemsToShow={3}
          allowCategories={[]}
          // filter={{
          //   value: "what's-new",
          // }}
        />
      </SectionLayout>
      <SectionLayout
        title={'Featured Datasets'}
        centerTitle
        ContainerProps={{
          sx: {
            maxWidth: '100% !important',
            padding: { xs: '40px', lg: '60px 80px 80px 80px' },
            h2: {
              lineHeight: 'normal',
              margin: '0',
            },
          },
        }}
      >
        <FeaturedDataTabs
          sql={datasetsSql}
          rgbIndex={3}
          configs={[
            {
              title: 'Datasets',
              icon: 'DATASET',
              explorePagePath: '/Explore/Datasets',
              exploreObjectType: 'Datasets',
              plotsConfig: {
                configs: [
                  {
                    title: 'Gene Expression Omnibus',
                    description: '',
                    facetsToPlot: ['dataType'],
                    selectFacetColumnName: 'source',
                    selectFacetColumnValue: 'Gene Expression Omnibus',
                    detailsPagePath: geoUrl,
                    unitDescription: 'Datasets',
                    plotType: 'STACKED_HORIZONTAL_BAR',
                  },
                  {
                    title: 'NYGC ALS Consortium',
                    description: '',
                    facetsToPlot: ['dataType'],
                    selectFacetColumnName: 'contributor',
                    selectFacetColumnValue: 'NYGC ALS Consortium',
                    detailsPagePath: nygcUrl,
                    unitDescription: 'Datasets',
                    plotType: 'STACKED_HORIZONTAL_BAR',
                  },
                  {
                    title: 'Barmada Lab - University of Michigan',
                    description: '',
                    facetsToPlot: ['dataType'],
                    selectFacetColumnName: 'contributor',
                    selectFacetColumnValue:
                      'Barmada Lab - University of Michigan',
                    detailsPagePath: barmadaUrl,
                    unitDescription: 'Datasets',
                    plotType: 'STACKED_HORIZONTAL_BAR',
                  },
                ],
              },
            },
          ]}
        />
      </SectionLayout>
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
