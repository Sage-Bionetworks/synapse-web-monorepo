import { Box } from '@mui/material'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/index'
import CategorizedRowDataTable from 'synapse-react-client/components/RowDataTable/CategorizedRowDataTable'
import { modelColumnCategoriesTableId, modelsSql } from '../config/resources'
import {
  modelCardConfiguration,
  modelColumnAliases,
} from '../config/synapseConfigs/models'

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
      <DetailsPageContextConsumer>
        {({ context }) =>
          context.rowData && context.rowSet ? (
            <Box sx={{ mt: 4 }}>
              <CategorizedRowDataTable
                rowData={context.rowData.values}
                headers={context.rowSet.headers}
                columnCategoryTableId={modelColumnCategoriesTableId}
              />
            </Box>
          ) : null
        }
      </DetailsPageContextConsumer>
    </DetailsPage>
  )
}

export default ModelDetailsPage
