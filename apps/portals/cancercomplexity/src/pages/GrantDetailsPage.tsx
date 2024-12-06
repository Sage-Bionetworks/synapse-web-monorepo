import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client'
import columnAliases from '../config/columnAliases'
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

export default function GrantDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()
  return (
    <>
      <CardContainerLogic
        isHeader
        {...grantsCardConfiguration}
        secondaryLabelLimit={Infinity}
        sql={grantsSql}
        searchParams={searchParams}
      />
      <DetailsPage
        sql={grantsSql}
        sqlOperator={ColumnSingleValueFilterOperator.LIKE}
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
                      {...projectCardConfiguration}
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
                      {...peopleCardConfiguration}
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
                      {...publicationsCardConfiguration}
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
                      {...datasetCardConfiguration}
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
                      {...toolsConfiguration}
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
                      {...educationDetailsCardConfiguration}
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
    </>
  )
}
