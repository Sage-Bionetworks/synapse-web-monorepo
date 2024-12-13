import { CardContainerLogicProps } from 'synapse-react-client/components/CardContainerLogic/index'
import { currentDataReleasesSql } from '../resources'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'

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

export const currentDataReleasesProps: CardContainerLogicProps = {
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
}
