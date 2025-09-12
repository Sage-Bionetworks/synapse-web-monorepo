import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
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
import { sharePageLinkButtonDetailPageProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import SharePageLinkButton from 'synapse-react-client/components/SharePageLinkButton'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic'

function PublicationsDetailsPage() {
  const { pubMedId } = useGetPortalComponentSearchParams()

  if (!pubMedId) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <>
          <SharePageLinkButton {...sharePageLinkButtonDetailPageProps} />
          <CardContainerLogic
            cardConfiguration={{
              ...publicationsCardConfiguration,
              iconOptions: {
                Person: personGraySvg,
              },
              secondaryLabelLimit: Infinity,
              isHeader: true,
            }}
            sql={publicationSql}
            columnAliases={columnAliases}
            sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
            searchParams={{ pubMedId }}
          />
        </>
      }
      sql={publicationSql}
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
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
              <DetailsPageContextConsumer columnName={'pubMedId'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={peopleCardConfiguration}
                    sql={peopleSql}
                    columnAliases={columnAliases}
                    sqlOperator={ColumnSingleValueFilterOperator.LIKE}
                    searchParams={{
                      publicationId: value!,
                    }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            title: 'Related Datasets',
            id: 'Related Datasets',
            helpText:
              'Novel dataset(s) collected and shared as part of this study',
            element: (
              <DetailsPageContextConsumer columnName={'pubMedId'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={datasetCardConfiguration}
                    sql={datasetsSql}
                    columnAliases={columnAliases}
                    sqlOperator={ColumnSingleValueFilterOperator.LIKE}
                    searchParams={{
                      pubMedId: value!,
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
              'Novel computational tool(s) developed and shared as part of this study',
            element: (
              <DetailsPageContextConsumer columnName={'pubMedId'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={toolsConfiguration}
                    sql={toolsSql}
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
  )
}

export default PublicationsDetailsPage
