import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { datasetsSql, filesSql } from 'src/config/resources'
import {
  columnAliases,
  searchConfiguration,
} from 'src/config/synapseConfigs/commonProps'
import { datasetCardConfiguration } from 'src/config/synapseConfigs/datasets'
import { CardContainerLogic, QueryWrapperPlotNav } from 'synapse-react-client'

export default function OrganizationDataTab() {
  const { value: fundingAgency } = useDetailsPageContext('fundingAgency')

  if (fundingAgency == null) {
    return null
  }

  return (
    <DetailsPageContent
      content={[
        {
          id: 'Data Files',
          element: (
            <QueryWrapperPlotNav
              rgbIndex={8}
              shouldDeepLink={false}
              sql={filesSql}
              visibleColumnCount={7}
              sqlOperator={ColumnSingleValueFilterOperator.LIKE}
              tableConfiguration={{
                showAccessColumn: true,
                showDownloadColumn: true,
              }}
              name="Data Files"
              columnAliases={columnAliases}
              searchConfiguration={searchConfiguration}
              searchParams={{ fundingAgency }}
              lockedColumn={{
                columnName: 'fundingAgency',
                value: fundingAgency,
              }}
              hideQueryCount
            />
          ),
        },
        {
          id: 'Datasets',
          title: 'Datasets',
          element: (
            <CardContainerLogic
              {...datasetCardConfiguration}
              sql={datasetsSql}
              initialLimit={3}
              searchParams={{ fundingAgency }}
            />
          ),
        },
      ]}
    ></DetailsPageContent>
  )
}
