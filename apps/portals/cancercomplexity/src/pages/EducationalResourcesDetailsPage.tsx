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
import { educationSql, grantsSql } from '../config/resources'
import { educationDetailsCardConfiguration } from '../config/synapseConfigs/education'
import { grantsCardConfiguration } from '../config/synapseConfigs/grants'

export default function EducationalResourcesDetailsPage() {
  const { title } = useGetPortalComponentSearchParams()

  if (!title) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <>
      <CardContainerLogic
        isHeader={true}
        {...educationDetailsCardConfiguration}
        secondaryLabelLimit={Infinity}
        sql={educationSql}
        columnAliases={columnAliases}
        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
        searchParams={{ title }}
      />
      <DetailsPage
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
          ]}
        />
      </DetailsPage>
    </>
  )
}
