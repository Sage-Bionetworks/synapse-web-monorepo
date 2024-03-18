import { SynapseConfig } from 'types/portal-config'
import { currentDataReleasesSql, dataReleasesSql } from '../resources'
import { SynapseConstants } from 'synapse-react-client'

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
      statsConfig: [
        { columnName: 'Patients', label: 'Patients' },
        { columnName: 'Samples', label: 'Samples' },
      ],
      buttonToExplorePageConfig: {
        label: 'Explore Data Release',
        sourcePathColumnName: 'releaseExplorePath',
        exploreDataSql: currentDataReleasesSql,
        exploreDataFacetColumnName: 'releaseType',
        sourceDataFacetValueColumnName: 'releaseType',
      },
      dataGuidePath: 'data guide',
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
