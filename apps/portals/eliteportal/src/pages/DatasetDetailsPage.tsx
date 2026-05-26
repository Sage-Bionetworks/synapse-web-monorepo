import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { datasetsSql, peopleSql, publicationsSql } from '../config/resources'
import {
  datasetCardConfiguration,
  datasetColumnAliases,
} from '../config/synapseConfigs/datasets'
import { publicationCardProps } from '../config/synapseConfigs/publications'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/index'
import DatasetDetailsFilesTable from './DatasetDetailsFilesTable'

function DatasetDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()
  return (
    <DetailsPage
      header={
        <CardContainerLogic
          cardConfiguration={{
            ...datasetCardConfiguration,
            secondaryLabelLimit: 4,
            isHeader: true,
          }}
          query={{
            sql: datasetsSql,
            additionalFilters: id
              ? [
                  {
                    concreteType:
                      'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
                    columnName: 'id',
                    operator: ColumnSingleValueFilterOperator.EQUAL,
                    values: [id],
                  },
                ]
              : [],
          }}
          columnAliases={datasetColumnAliases}
        />
      }
      sql={datasetsSql}
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      ContainerProps={{
        maxWidth: 'xl',
      }}
      resourcePrimaryKey={['id']}
    >
      <DetailsPageContent
        content={[
          {
            title: 'People',
            id: 'People',
            element: (
              <DetailsPageContextConsumer columnName={'id'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={{
                      type: SynapseConstants.MEDIUM_USER_CARD,
                    }}
                    query={{
                      sql: peopleSql,
                      additionalFilters: [
                        {
                          concreteType:
                            'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter',
                          columnName: 'datasetID',
                          function: ColumnMultiValueFunction.HAS,
                          _function: ColumnMultiValueFunction.HAS,
                          values: [value!],
                        },
                      ],
                    }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            title: 'Publications',
            id: 'Publications',
            element: (
              <DetailsPageContextConsumer columnName={'publicationIds'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={publicationCardProps}
                    query={{
                      sql: publicationsSql,
                      additionalFilters: [
                        {
                          concreteType:
                            'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
                          columnName: 'id',
                          operator: ColumnSingleValueFilterOperator.IN,
                          values: value!.split(',').map(v => v.trim()),
                        },
                      ],
                    }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            title: 'Files',
            id: 'Files',
            element: (
              <DetailsPageContextConsumer>
                {({ context }) => {
                  return <DatasetDetailsFilesTable rowData={context.rowData} />
                }}
              </DetailsPageContextConsumer>
            ),
          },
        ]}
      />
    </DetailsPage>
  )
}

export default DatasetDetailsPage
