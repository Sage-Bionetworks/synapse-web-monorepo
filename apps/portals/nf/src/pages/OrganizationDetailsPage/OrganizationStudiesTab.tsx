import { studiesSql } from '@/config/resources'
import { columnAliases } from '@/config/synapseConfigs/commonProps'
import { studyCardConfiguration } from '@/config/synapseConfigs/studies'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function OrganizationStudiesTab() {
  const { value: fundingAgency } = useDetailsPageContext('fundingAgency')

  if (fundingAgency == null) {
    return null
  }

  return (
    <DetailsPageContent
      content={[
        {
          id: 'Studies',
          title: 'Studies',
          element: (
            <QueryWrapperPlotNav
              rgbIndex={5}
              shouldDeepLink={false}
              defaultShowPlots={true}
              name="Funded Studies"
              sql={studiesSql}
              cardConfiguration={studyCardConfiguration}
              visibleColumnCount={7}
              sqlOperator={ColumnSingleValueFilterOperator.LIKE}
              columnAliases={columnAliases}
              facetsToPlot={[
                'dataStatus',
                'studyStatus',
                'diseaseFocus',
                'dataType',
              ]}
              searchConfiguration={{
                searchable: [
                  'studyName',
                  'studyLeads',
                  'institutions',
                  'diseaseFocus',
                  'manifestation',
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

export default OrganizationStudiesTab
