import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import {
  DetailsPageContextConsumer,
  useDetailsPageContext,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import instrumentsPlotNavProps from '@/config/synapseConfigs/instruments'
import variablesPlotNavProps from '@/config/synapseConfigs/variables'
import RowDataTable from 'synapse-react-client/components/RowDataTable/RowDataTable'
import { unCamelCase } from 'synapse-react-client/utils/functions/unCamelCase'
import { SkeletonTable } from 'synapse-react-client/components/Skeleton/SkeletonTable'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

const HEADER_CARD_COLUMNS = new Set([
  'study',
  'studyName',
  'studyFocus',
  'studyDescription',
  'metadataStatus',
  'measuredConstruct',
  'measureType',
  'constructDomain',
  'instrumentName',
  'diseaseFocus',
  'primaryHealthFocus',
  'grantNumber',
  'studyID',
  'studyMetadata',
  'Acknowledgement',
  'Instruments',
  'Variables',
  'metadataType',
])

function StudyMetadataTab() {
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
        {
          title: 'Metadata',
          id: 'Metadata',
          element: (
            <DetailsPageContextConsumer>
              {({ context }) => {
                if (!context.rowData || !context.rowSet) {
                  return <SkeletonTable numRows={4} numCols={1} />
                }
                const displayedColumns = context.rowSet.headers
                  .map(h => h.name)
                  .filter(name => !HEADER_CARD_COLUMNS.has(name))
                const columnAliases = Object.fromEntries(
                  displayedColumns.map(name => [name, unCamelCase(name)]),
                )
                return (
                  <RowDataTable
                    rowData={context.rowData.values ?? []}
                    headers={context.rowSet.headers}
                    displayedColumns={displayedColumns}
                    columnAliases={columnAliases}
                  />
                )
              }}
            </DetailsPageContextConsumer>
          ),
        },
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
