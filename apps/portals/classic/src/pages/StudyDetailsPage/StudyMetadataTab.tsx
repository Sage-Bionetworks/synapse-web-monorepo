import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import instrumentsPlotNavProps from '@/config/synapseConfigs/instruments'
import variablesPlotNavProps from '@/config/synapseConfigs/variables'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

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
