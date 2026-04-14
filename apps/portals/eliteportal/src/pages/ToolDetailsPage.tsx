import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnMultiValueFunction } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
// import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { computationalSql, projectsSql } from '../config/resources'
import { computationalCardConfiguration } from '../config/synapseConfigs/computational_tools'
import { projectCardConfiguration } from '@/config/synapseConfigs/projects'

function ToolDetailsPage() {
  const { name } = useGetPortalComponentSearchParams()

  return (
    <DetailsPage
      header={
        <CardContainerLogic
          sql={computationalSql}
          cardConfiguration={{
            ...computationalCardConfiguration,
            titleLinkConfig: undefined,
            isHeader: true,
          }}
          searchParams={{ name }}
        />
      }
      sql={computationalSql}
      resourcePrimaryKey={['name']}
    >
      <DetailsPageContent
        content={[
          {
            id: 'Related Projects',
            title: 'Related Projects',

            element: (
              <DetailsPageContextConsumer columnName={'grants'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={projectCardConfiguration}
                    sql={projectsSql}
                    searchParams={{ grant: value! }}
                    sqlOperator={ColumnMultiValueFunction.HAS}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          //   {
          //     id: 'People',
          //     title: 'People',
          //     element: (
          //       <DetailsPageContextConsumer columnName={'contributor'}>
          //         {({ value }) => (
          //           <CardContainerLogic
          //             sql={peopleSql}
          //             limit={6}
          //             cardConfiguration={{
          //               type: SynapseConstants.MEDIUM_USER_CARD,
          //             }}
          //             searchParams={{ contributor: value! }}
          //             sqlOperator={ColumnMultiValueFunction.HAS}
          //           />
          //         )}
          //       </DetailsPageContextConsumer>
          //     ),
          //   },
        ]}
      />
    </DetailsPage>
  )
}

export default ToolDetailsPage
