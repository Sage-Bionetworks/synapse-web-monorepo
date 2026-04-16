import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import instrumentsPlotNavProps from '@/config/synapseConfigs/instruments'
import variablesPlotNavProps from '@/config/synapseConfigs/variables'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function StudyMetadataTab() {
  const { value: studyName } = useDetailsPageContext('studyName')

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
          title: 'Instruments',
          id: 'Instruments',
          element: (
            <QueryWrapperPlotNav
              {...instrumentsPlotNavProps}
              rgbIndex={8}
              shouldDeepLink={false}
              sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
              lockedColumn={{ columnName: 'studyName', value: studyName }}
              searchParams={{ studyName }}
              hideQueryCount
            />
          ),
        },
        {
          title: 'Variables',
          id: 'Variables',
          element: (
            <QueryWrapperPlotNav
              {...variablesPlotNavProps}
              rgbIndex={8}
              shouldDeepLink={false}
              sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
              lockedColumn={{ columnName: 'studyName', value: studyName }}
              searchParams={{ studyName }}
              hideQueryCount
            />
          ),
        },
      ]}
    />
  )
}

export default StudyMetadataTab
