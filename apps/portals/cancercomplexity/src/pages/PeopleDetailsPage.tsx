import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic'
import columnAliases from '../config/columnAliases'
import {
  datasetsSql,
  grantsSql,
  peopleSql,
  publicationSql,
  toolsSql,
} from '../config/resources'
import personGraySvg from '../config/style/PersonGray.svg?url'
import { datasetCardConfiguration } from '../config/synapseConfigs/datasets'
import { grantsCardConfiguration } from '../config/synapseConfigs/grants'
import { peopleCardConfiguration } from '../config/synapseConfigs/people'
import { publicationsCardConfiguration } from '../config/synapseConfigs/publications'
import { toolsConfiguration } from '../config/synapseConfigs/tools'

function PeopleDetailsPage() {
  const { name } = useGetPortalComponentSearchParams()

  if (!name) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <CardContainerLogic
          sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
          cardConfiguration={{
            ...peopleCardConfiguration,
            iconOptions: {
              Person: personGraySvg,
            },
            secondaryLabelLimit: Infinity,
            isHeader: true,
          }}
          sql={peopleSql}
          columnAliases={columnAliases}
          searchParams={{ name: name }}
        />
      }
      sql={peopleSql}
      sqlOperator={ColumnSingleValueFilterOperator.LIKE}
    >
      <DetailsPageContent
        content={[
          {
            title: 'Related Grants',
            id: 'Related Grants',
            helpText:
              'MC2 Center member grant(s) that supported research performed by this person',
            element: (
              <DetailsPageContextConsumer columnName={'grantNumber'}>
                {/* TODO: How do we know if sqlOperator should be IN or EQUAL ? Can this be determined automatically? */}
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
            title: 'Related Publications',
            id: 'Related Publications',
            helpText: 'Publication(s) to which this person contributed',
            element: (
              <DetailsPageContextConsumer columnName={'publicationId'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={publicationsCardConfiguration}
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
          {
            id: 'Related Datasets',
            title: 'Related Datasets',
            helpText:
              'Dataset(s) developed and shared with contribution from this person',
            element: (
              <DetailsPageContextConsumer columnName={'datasetId'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={datasetCardConfiguration}
                    sql={datasetsSql}
                    columnAliases={columnAliases}
                    sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                    searchParams={{
                      datasetAlias: value!,
                    }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'Related Tools',
            title: 'Related Tools',
            helpText:
              'Tool(s) developed and shared with contribution from this person',
            element: (
              <DetailsPageContextConsumer columnName={'toolId'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={toolsConfiguration}
                    sql={toolsSql}
                    columnAliases={columnAliases}
                    sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                    searchParams={{
                      toolName: value!,
                    }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
        ]}
      />
    </DetailsPage>
  )
}

export default PeopleDetailsPage
