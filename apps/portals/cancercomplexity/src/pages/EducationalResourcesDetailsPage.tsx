import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import columnAliases from '../config/columnAliases'
import { educationSql, grantsSql } from '../config/resources'
import { educationDetailsCardConfiguration } from '../config/synapseConfigs/education'
import { grantsCardConfiguration } from '../config/synapseConfigs/grants'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic'

function EducationalResourcesDetailsPage() {
  const { title } = useGetPortalComponentSearchParams()

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
