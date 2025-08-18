import columnAliases from '@/config/columnAliases'
import { grantsSql, peopleSql, publicationSql } from '@/config/resources'
import { grantsCardConfiguration } from '@/config/synapseConfigs/grants'
import { peopleCardConfiguration } from '@/config/synapseConfigs/people'
import { publicationsCardConfiguration } from '@/config/synapseConfigs/publications'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import {
  DetailsPageContextConsumer,
  useDetailsPageContext,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client'

function ToolsDetailsPageDetailsTab() {
  const { value: toolName } = useDetailsPageContext('toolName')

  return (
    <DetailsPageContent
      content={[
        {
          id: 'Related Grants',
          title: 'Related Grants',
          helpText:
            'MC2 Center member grant(s) that supported development of the resource',
          element: (
            <DetailsPageContextConsumer columnName={'grantNumber'}>
              {({ value }) => (
                <CardContainerLogic
                  cardConfiguration={grantsCardConfiguration}
                  sql={grantsSql}
                  columnAliases={columnAliases}
                  sqlOperator={ColumnSingleValueFilterOperator.IN}
                  searchParams={{
                    grantNumber: value!,
                  }}
                />
              )}
            </DetailsPageContextConsumer>
          ),
        },
        {
          title: 'Related People',
          id: 'Related People',
          helpText:
            'Individual(s) that contributed to the development of the resource',
          element: (
            <CardContainerLogic
              cardConfiguration={peopleCardConfiguration}
              sql={peopleSql}
              columnAliases={columnAliases}
              sqlOperator={ColumnSingleValueFilterOperator.LIKE}
              searchParams={{
                toolId: toolName!,
              }}
            />
          ),
        },
        {
          id: 'Related Publications',
          title: 'Related Publications',
          helpText: 'The publication in which the resource was first reported',
          element: (
            <DetailsPageContextConsumer columnName={'pubMedId'}>
              {({ value }) => (
                <CardContainerLogic
                  cardConfiguration={publicationsCardConfiguration}
                  sql={publicationSql}
                  columnAliases={columnAliases}
                  sqlOperator={ColumnSingleValueFilterOperator.IN}
                  searchParams={{
                    pubMedId: value!,
                  }}
                />
              )}
            </DetailsPageContextConsumer>
          ),
        },
      ]}
    />
  )
}

export default ToolsDetailsPageDetailsTab
