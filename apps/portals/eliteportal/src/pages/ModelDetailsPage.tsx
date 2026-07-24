import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/index'
import { modelsSql } from '../config/resources'
import { modelCardConfiguration } from '../config/synapseConfigs/models'

function ModelDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()
  return (
    <DetailsPage
      header={
        <CardContainerLogic
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
    />
  )
}

export default ModelDetailsPage
