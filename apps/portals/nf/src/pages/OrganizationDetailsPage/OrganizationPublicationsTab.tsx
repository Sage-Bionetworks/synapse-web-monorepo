import { publicationsSql } from '@/config/resources'
import { columnAliases } from '@/config/synapseConfigs/commonProps'
import { publicationsCardConfiguration } from '@/config/synapseConfigs/publications'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function OrganizationPublicationsTab() {
  const { value: fundingAgency } = useDetailsPageContext('fundingAgency')

  if (fundingAgency == null) {
    return null
  }

  return (
    <DetailsPageContent
      content={[
        {
          id: 'Publications',
          title: 'Publications',
          element: (
            <QueryWrapperPlotNav
              rgbIndex={0}
              shouldDeepLink={false}
              defaultShowPlots={true}
              sql={publicationsSql}
              sqlOperator={ColumnSingleValueFilterOperator.LIKE}
              cardConfiguration={publicationsCardConfiguration}
              columnAliases={columnAliases}
              facetsToPlot={['year', 'diseaseFocus', 'manifestation']}
              availableFacets={[
                'year',
                'diseaseFocus',
                'manifestation',
                'journal',
              ]}
              searchConfiguration={{
                searchable: [
                  'title',
                  'author',
                  'journal',
                  'year',
                  'studyName',
                  'diseaseFocus',
                ],
              }}
              searchParams={{ fundingAgency }}
              lockedColumn={{
                columnName: 'fundingAgency',
                value: fundingAgency,
              }}
              hideQueryCount
            />
          ),
        },
      ]}
    />
  )
}

export default OrganizationPublicationsTab
