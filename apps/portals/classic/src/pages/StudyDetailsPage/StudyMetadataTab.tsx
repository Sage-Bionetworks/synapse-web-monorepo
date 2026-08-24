import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import instrumentsPlotNavProps from '@/config/synapseConfigs/instruments'
import metadataPlotNavProps from '@/config/synapseConfigs/metadata'
import variablesPlotNavProps from '@/config/synapseConfigs/variables'
import {
  COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { metadataSql } from '@/config/resources'

function StudyMetadataTab() {
  const { value: study } = useDetailsPageContext('study')
  const { value: instruments } = useDetailsPageContext('Instruments')
  const { value: variables } = useDetailsPageContext('Variables')

  return (
    <DetailsPageContent
      content={[
        {
          title: 'Access Requirements',
          id: 'AccessRequirements',
          element: (
            <MarkdownSynapseFromColumnData columnName={'AccessRequirements'} />
          ),
        },
        {
          title: 'Study Metadata',
          id: 'StudyMetadata',
          element: (
            <MarkdownSynapseFromColumnData columnName={'studyMetadata'} />
          ),
        },
        ...(study
          ? [
              {
                title: 'Metadata',
                id: 'Metadata',
                element: (
                  <QueryWrapperPlotNav
                    {...metadataPlotNavProps}
                    name={undefined}
                    query={{
                      sql: metadataSql,
                      limit: 25,
                      additionalFilters: [
                        {
                          concreteType:
                            COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
                          columnName: 'study',
                          operator: ColumnSingleValueFilterOperator.EQUAL,
                          values: [study],
                        },
                      ],
                    }}
                    lockedColumn={{ columnName: 'study', value: study }}
                    shouldDeepLink={false}
                  />
                ),
              },
            ]
          : []),
        ...(instruments
          ? [
              {
                title: 'Instruments',
                id: 'Instruments',
                element: (
                  <QueryWrapperPlotNav
                    {...instrumentsPlotNavProps}
                    sql={`SELECT * FROM ${instruments}`}
                    rgbIndex={8}
                    shouldDeepLink={false}
                    hideQueryCount
                  />
                ),
              },
            ]
          : []),
        ...(variables
          ? [
              {
                title: 'Variables',
                id: 'Variables',
                element: (
                  <QueryWrapperPlotNav
                    {...variablesPlotNavProps}
                    sql={`SELECT * FROM ${variables}`}
                    rgbIndex={8}
                    shouldDeepLink={false}
                    hideQueryCount
                  />
                ),
              },
            ]
          : []),
      ]}
    />
  )
}

export default StudyMetadataTab
