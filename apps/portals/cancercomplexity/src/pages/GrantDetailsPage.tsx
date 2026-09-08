import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { createDetailPageRouteExports } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import { useParams } from 'react-router'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic/index'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import columnAliases from '../config/columnAliases'
import { portalMetadata } from '../config/portalMetadata'
import {
  datasetsSql,
  educationSql,
  grantsSql,
  peopleSql,
  projectsSql,
  publicationSql,
  toolsSql,
} from '../config/resources'
import { datasetCardConfiguration } from '../config/synapseConfigs/datasets'
import { educationDetailsCardConfiguration } from '../config/synapseConfigs/education'
import { grantsCardConfiguration } from '../config/synapseConfigs/grants'
import { peopleCardConfiguration } from '../config/synapseConfigs/people'
import { projectCardConfiguration } from '../config/synapseConfigs/projects'
import { publicationsCardConfiguration } from '../config/synapseConfigs/publications'
import { toolsConfiguration } from '../config/synapseConfigs/tools'
import { metadataConfig } from './GrantDetailsPage.config'

export { metadataConfig }

const _routeExports = createDetailPageRouteExports(
  metadataConfig,
  portalMetadata,
)
export const loader = _routeExports.loader
export const clientLoader = _routeExports.clientLoader
export const meta = _routeExports.meta

function GrantDetailsPage() {
  const { grantId } = useParams<{ grantId: string }>()

  if (!grantId) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <>
          <CardContainerLogic
            cardConfiguration={{
              ...grantsCardConfiguration,
              secondaryLabelLimit: Infinity,
              isHeader: true,
            }}
            sql={grantsSql}
            searchParams={{ grantId }}
          />
        </>
      }
      sql={grantsSql}
      searchParams={{ grantId }}
      sqlOperator={ColumnSingleValueFilterOperator.LIKE}
      resourcePrimaryKey={['grantNumber']}
      disableCanonicalUrl
    >
      <DetailsPageContent
        content={[
          {
            title: 'Related Projects',
            id: 'Related Projects',
            element: (
              <DetailsPageContextConsumer columnName={'grantNumber'}>
                {({ value }) => (
                  <CardContainerLogic
                    sqlOperator={ColumnSingleValueFilterOperator.LIKE}
                    sql={`${projectsSql} where grantType LIKE '%U54%'`}
                    cardConfiguration={projectCardConfiguration}
                    searchParams={{ grant: value! }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
            helpText:
              'Subprojects and cores supported by this grant, as listed on NIH RePORTER',
          },
          {
            title: 'Related People',
            id: 'Related People',
            element: (
              <DetailsPageContextConsumer columnName={'grantNumber'}>
                {({ value }) => (
                  <CardContainerLogic
                    sqlOperator={ColumnMultiValueFunction.HAS}
                    sql={peopleSql}
                    cardConfiguration={peopleCardConfiguration}
                    columnAliases={columnAliases}
                    searchParams={{
                      grantNumber: value!,
                    }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
            helpText: 'Contributors associated with this grant',
          },
          {
            title: 'Related Publications',
            id: 'Related Publications',
            element: (
              <DetailsPageContextConsumer columnName={'grantNumber'}>
                {({ value }) => (
                  <CardContainerLogic
                    sqlOperator={ColumnMultiValueFunction.HAS}
                    sql={publicationSql}
                    cardConfiguration={publicationsCardConfiguration}
                    columnAliases={columnAliases}
                    searchParams={{
                      grantNumber: value!,
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
              'Novel datasets collected and shared with support from this grant',
            element: (
              <DetailsPageContextConsumer columnName={'grantNumber'}>
                {({ value }) => (
                  <CardContainerLogic
                    sqlOperator={ColumnMultiValueFunction.HAS}
                    sql={datasetsSql}
                    cardConfiguration={datasetCardConfiguration}
                    columnAliases={columnAliases}
                    searchParams={{
                      grantNumber: value!,
                    }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            title: 'Related Tools',
            id: 'Related Tools',
            helpText:
              'Novel computational tools developed and shared with support from this grant',
            element: (
              <DetailsPageContextConsumer columnName={'grantNumber'}>
                {({ value }) => (
                  <CardContainerLogic
                    sqlOperator={ColumnMultiValueFunction.HAS}
                    sql={toolsSql}
                    cardConfiguration={toolsConfiguration}
                    columnAliases={columnAliases}
                    searchParams={{
                      grantNumber: value!,
                    }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            title: 'Related Educational Resources',
            id: 'Related Educational Resources',
            helpText:
              'Novel educational resources developed and shared with support from this grant',
            element: (
              <DetailsPageContextConsumer columnName={'grantNumber'}>
                {({ value }) => (
                  <CardContainerLogic
                    sqlOperator={ColumnMultiValueFunction.HAS}
                    sql={educationSql}
                    cardConfiguration={educationDetailsCardConfiguration}
                    columnAliases={columnAliases}
                    searchParams={{
                      grantNumber: value!,
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

export default GrantDetailsPage
