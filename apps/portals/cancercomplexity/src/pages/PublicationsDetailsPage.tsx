import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { createDetailPageRouteExports } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import { useParams } from 'react-router'
import columnAliases from '../config/columnAliases'
import { portalMetadata } from '../config/portalMetadata'
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
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic/index'
import { metadataConfig } from './PublicationsDetailsPage.config'

export { metadataConfig }

const _routeExports = createDetailPageRouteExports(
  metadataConfig,
  portalMetadata,
)
export const loader = _routeExports.loader
export const clientLoader = _routeExports.clientLoader
export const meta = _routeExports.meta

function PublicationsDetailsPage() {
  const { pubMedId } = useParams<{ pubMedId: string }>()

  if (!pubMedId) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <>
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
      searchParams={{ pubMedId }}
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      resourcePrimaryKey={['pubMedId']}
      disableCanonicalUrl
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
                    sqlOperator={ColumnMultiValueFunction.HAS}
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
