import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import {
  CardContainerLogic,
  ErrorPage,
  SynapseErrorType,
} from 'synapse-react-client'
import columnAliases from '../config/columnAliases'
import {
  grantsSql,
  peopleSql,
  publicationSql,
  toolsSql,
} from '../config/resources'
import DatasetSvg from '../config/style/Dataset.svg?url'
import { grantsCardConfiguration } from '../config/synapseConfigs/grants'
import { peopleCardConfiguration } from '../config/synapseConfigs/people'
import { publicationsCardConfiguration } from '../config/synapseConfigs/publications'
import { toolsConfiguration } from '../config/synapseConfigs/tools'

export default function ToolsDetailsPage() {
  const { toolName } = useGetPortalComponentSearchParams()

  if (!toolName) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <>
      <CardContainerLogic
        isHeader={true}
        {...toolsConfiguration}
        iconOptions={{
          dataset: DatasetSvg,
        }}
        secondaryLabelLimit={Infinity}
        sql={toolsSql}
        columnAliases={columnAliases}
        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
        searchParams={{ toolName }}
      />
      <DetailsPage
        sql={toolsSql}
        sqlOperator={ColumnSingleValueFilterOperator.LIKE}
      >
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
                      {...grantsCardConfiguration}
                      sql={grantsSql}
                      columnAliases={columnAliases}
                      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
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
                  {...peopleCardConfiguration}
                  sql={peopleSql}
                  columnAliases={columnAliases}
                  sqlOperator={ColumnSingleValueFilterOperator.LIKE}
                  searchParams={{
                    toolId: toolName,
                  }}
                />
              ),
            },
            {
              id: 'Related Publications',
              title: 'Related Publications',
              helpText:
                'The publication in which the resource was first reported',
              element: (
                <DetailsPageContextConsumer columnName={'pubMedId'}>
                  {({ value }) => (
                    <CardContainerLogic
                      {...publicationsCardConfiguration}
                      sql={publicationSql}
                      columnAliases={columnAliases}
                      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
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
      </DetailsPage>
    </>
  )
}
