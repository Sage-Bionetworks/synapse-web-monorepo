import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { createDetailPageRouteExports } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { useParams } from 'react-router'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import { initiativesSql, studiesSql } from '../config/resources'
import { columnAliases } from '../config/synapseConfigs/commonProps'
import { initiativeCardConfiguration } from '../config/synapseConfigs/initiatives'
import { studyCardConfiguration } from '../config/synapseConfigs/studies'
import { metadataConfig } from './InitiativeDetailsPage.config'
import { portalMetadata } from '@/config/portalMetadata'

export { metadataConfig }

const _routeExports = createDetailPageRouteExports(
  metadataConfig,
  portalMetadata,
)
export const loader = _routeExports.loader
export const clientLoader = _routeExports.clientLoader
export const meta = _routeExports.meta

function InitiativeDetailsPage() {
  const { initiative } = useParams<{ initiative: string }>()

  if (!initiative) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <CardContainerLogic
          sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
          cardConfiguration={{ ...initiativeCardConfiguration, isHeader: true }}
          columnAliases={columnAliases}
          sql={initiativesSql}
          searchParams={{ initiative }}
        />
      }
      sql={initiativesSql}
      searchParams={{ initiative }}
      ContainerProps={{
        maxWidth: 'xl',
      }}
      resourcePrimaryKey={['initiative']}
      disableCanonicalUrl
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
  )
}

export default InitiativeDetailsPage
