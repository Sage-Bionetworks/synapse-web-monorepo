import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import {
  CardContainerLogic,
  ErrorPage,
  SynapseErrorType,
} from 'synapse-react-client'
import { initiativesSql, studiesSql } from '../config/resources'
import { columnAliases } from '../config/synapseConfigs/commonProps'
import { initiativeCardConfiguration } from '../config/synapseConfigs/initiatives'
import { studyCardConfiguration } from '../config/synapseConfigs/studies'

export default function InitiativeDetailsPage() {
  const { initiative } = useGetPortalComponentSearchParams()

  if (!initiative) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <>
      <CardContainerLogic
        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
        cardConfiguration={{ ...initiativeCardConfiguration, isHeader: true }}
        columnAliases={columnAliases}
        sql={initiativesSql}
        searchParams={{ initiative }}
      />
      <DetailsPage
        sql={initiativesSql}
        ContainerProps={{
          maxWidth: 'xl',
        }}
        resourcePrimaryKey={['initiative']}
      >
        <DetailsPageContent
          content={[
            {
              id: 'Studies',
              title: 'Studies',
              element: (
                <CardContainerLogic
                  sql={studiesSql}
                  cardConfiguration={studyCardConfiguration}
                  searchParams={{ initiative }}
                />
              ),
            },
          ]}
        />
      </DetailsPage>
    </>
  )
}
