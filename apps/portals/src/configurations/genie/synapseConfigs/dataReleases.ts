import { SynapseConfig } from 'types/portal-config'
import { currentDataReleasesSql, dataReleasesSql } from '../resources'
import { SynapseConstants } from 'synapse-react-client'

const sourcePathColumnName = 'releaseExplorePath'
const sourceExploreDataSqlColumnName = 'exploreDataSql'

const selectedFacetConfigs = [
  {
    facetColumnName: 'cohort',
    facetValueColumnName: 'Cohort',
  },
  {
    facetColumnName: 'version',
    facetValueColumnName: 'version',
  },
]

export const currentDataReleases: SynapseConfig = {
  name: 'CardContainerLogic',
  title: 'Current Data Releases',
  props: {
    sql: currentDataReleasesSql,
    type: SynapseConstants.RELEASE_CARD,
    limit: 3,
    releaseCardConfig: {
      cardSize: 'large',
      prependRelease: false,
      releaseMetadataConfig: {
        releaseDateColumnName: 'ReleaseDate',
        releaseEntityColumnName: 'id',
        releaseNameColumnName: 'nameReleaseCard',
      },
      statsConfig: [
        { columnName: 'Patients', label: 'Patients' },
        { columnName: 'Samples', label: 'Samples' },
      ],
      primaryBtnConfig: {
        label: 'Explore Data Release',
        sourcePathColumnName: sourcePathColumnName,
        sourceExploreDataSqlColumnName: sourceExploreDataSqlColumnName,
        selectedFacetConfigs: selectedFacetConfigs,
      },
      secondaryBtnConfig: {
        label: 'View Data Guide',
        sourcePathColumnName: sourcePathColumnName,
        sourceExploreDataSqlColumnName: sourceExploreDataSqlColumnName,
        selectedFacetConfigs: selectedFacetConfigs,
        staticSelectedFacets: [
          {
            facet: 'dataType',
            facetValue: 'data_guide',
          },
        ],
      },
    },
  },
}

const dataReleases: SynapseConfig[] = [
  currentDataReleases,
  {
    name: 'Markdown',
    title: 'Previous Data Release',
    props: {
      markdown:
        'The **latest** version of the dataset is readily acccessible for free download, but access to **previous** versions must be requested.',
    },
  },
  {
    name: 'SynapseComponentCollapse',
    props: {
      text: 'View All Data Releases',
      synapseConfig: {
        name: 'StandaloneQueryWrapper',
        title: 'Releases',
        props: {
          visibleColumnCount: 7,
          sql: dataReleasesSql,
        },
      },
    },
  },
]

export default dataReleases
