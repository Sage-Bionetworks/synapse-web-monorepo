import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { currentDataReleasesSql, dataReleasesSql } from '../resources'
import { SynapseConstants } from 'synapse-react-client'

const sourceTablePathColumnName = 'releaseExplorePath'
const sourceTableSqlColumnName = 'exploreDataSql'

const selectedFacetConfigs = [
  {
    destinationTableColumnName: 'cohort',
    sourceTableColumnName: 'Cohort',
  },
  {
    destinationTableColumnName: 'version',
    sourceTableColumnName: 'version',
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
        releaseEntityIdColumnName: 'id',
        releaseNameColumnName: 'nameReleaseCard',
      },
      statsConfig: [
        { columnName: 'Patients', label: 'Patients' },
        { columnName: 'Samples', label: 'Samples' },
      ],
      primaryBtnConfig: {
        label: 'Explore Data Release',
        sourceTablePathColumnName: sourceTablePathColumnName,
        sourceTableSqlColumnName: sourceTableSqlColumnName,
        selectedFacetConfigs: selectedFacetConfigs,
      },
      secondaryBtnConfig: {
        label: 'View Data Guide',
        sourceTablePathColumnName: sourceTablePathColumnName,
        sourceTableSqlColumnName: sourceTableSqlColumnName,
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
