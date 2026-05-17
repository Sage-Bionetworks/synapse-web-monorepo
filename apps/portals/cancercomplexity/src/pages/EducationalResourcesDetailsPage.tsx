import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { createDetailPageRouteExports } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { useParams } from 'react-router'
import columnAliases from '../config/columnAliases'
import { portalMetadata } from '../config/portalMetadata'
import { educationSql, grantsSql } from '../config/resources'
import { educationDetailsCardConfiguration } from '../config/synapseConfigs/education'
import { grantsCardConfiguration } from '../config/synapseConfigs/grants'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic/index'
import { metadataConfig } from './EducationalResourcesDetailsPage.config'

export { metadataConfig }

const _routeExports = createDetailPageRouteExports(
  metadataConfig,
  portalMetadata,
)
export const loader = _routeExports.loader
export const clientLoader = _routeExports.clientLoader
export const meta = _routeExports.meta

function EducationalResourcesDetailsPage() {
  const { title } = useParams<{ title: string }>()

  if (!title) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <>
          <CardContainerLogic
            cardConfiguration={{
              ...educationDetailsCardConfiguration,
              secondaryLabelLimit: Infinity,
              isHeader: true,
            }}
            sql={educationSql}
            columnAliases={columnAliases}
            sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
            searchParams={{ title }}
          />
        </>
      }
      sql={educationSql}
      searchParams={{ title }}
      sqlOperator={ColumnSingleValueFilterOperator.LIKE}
      resourcePrimaryKey={['title']}
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
        ]}
      />
    </DetailsPage>
  )
}

export default EducationalResourcesDetailsPage
