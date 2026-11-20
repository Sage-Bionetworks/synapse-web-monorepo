import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ColumnSingleValueFilterOperator,
  Query,
} from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/index'
import CategorizedRowDataTable from 'synapse-react-client/components/RowDataTable/CategorizedRowDataTable'
import {
  datasetsSql,
  modelColumnCategoriesTableId,
  modelsSql,
  publicationsSql,
} from '../config/resources'
import { datasetCardConfiguration } from '../config/synapseConfigs/datasets'
import {
  modelCardConfiguration,
  modelColumnAliases,
} from '../config/synapseConfigs/models'
import { publicationCardProps } from '../config/synapseConfigs/publications'

/**
 * @param sql query against a view/collection with an `id` column
 * @param entityIds comma-separated entity IDs, as provided by DetailsPageContextConsumer for an ENTITYID_LIST column
 */
function getEntityIdInQuery(sql: string, entityIds: string): Query {
  return {
    sql,
    additionalFilters: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
        columnName: 'id',
        operator: ColumnSingleValueFilterOperator.IN,
        values: entityIds.split(',').map(id => id.trim()),
      },
    ],
  }
}

function ModelDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()
  return (
    <DetailsPage
      header={
        <CardContainerLogic
          columnAliases={modelColumnAliases}
          cardConfiguration={{
            ...modelCardConfiguration,
            titleLinkConfig: undefined,
            isHeader: true,
          }}
          query={{
            sql: modelsSql,
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
        />
      }
      sql={modelsSql}
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      resourcePrimaryKey={['id']}
    >
      <DetailsPageContent
        content={[
          {
            id: 'Model Details',
            title: 'Model Details',
            element: (
              <DetailsPageContextConsumer>
                {({ context }) =>
                  context.rowData && context.rowSet ? (
                    <CategorizedRowDataTable
                      rowData={context.rowData.values}
                      headers={context.rowSet.headers}
                      columnCategoryTableId={modelColumnCategoriesTableId}
                    />
                  ) : null
                }
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'Acknowledgement',
            title: 'Acknowledgement',
            element: (
              <MarkdownSynapseFromColumnData
                columnName={'acknowledgment'}
                showNoContentAvailable
              />
            ),
          },
          {
            id: 'Acceptable Use',
            title: 'Acceptable Use',
            element: (
              <MarkdownSynapseFromColumnData
                columnName={'acceptableUse'}
                showNoContentAvailable
              />
            ),
          },
          {
            id: 'Related Datasets',
            title: 'Related Datasets',
            element: (
              <DetailsPageContextConsumer columnName={'datasetIds'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={datasetCardConfiguration}
                    query={getEntityIdInQuery(datasetsSql, value!)}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'Related Publications',
            title: 'Related Publications',
            element: (
              <DetailsPageContextConsumer columnName={'publicationIds'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={publicationCardProps}
                    query={getEntityIdInQuery(publicationsSql, value!)}
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

export default ModelDetailsPage
