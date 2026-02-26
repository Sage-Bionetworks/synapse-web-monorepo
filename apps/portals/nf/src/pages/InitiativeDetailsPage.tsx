import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import {
  fetchDetailPageMetadata,
  type DetailPageMetadataConfig,
} from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import type { MetaDescriptor } from 'react-router'
import { useParams } from 'react-router'
import {
  CardContainerLogic,
  ErrorPage,
  SynapseErrorType,
} from 'synapse-react-client'
import { initiativesSql, studiesSql } from '../config/resources'
import { columnAliases } from '../config/synapseConfigs/commonProps'
import { initiativeCardConfiguration } from '../config/synapseConfigs/initiatives'
import { studyCardConfiguration } from '../config/synapseConfigs/studies'

const metadataConfig: DetailPageMetadataConfig = {
  sql: initiativesSql,
  titleColumn: 'initiative',
  descriptionColumn: 'summary',
  paramName: 'initiative',
}

export async function loader({ params }: { params: { initiative?: string } }) {
  if (!params.initiative) return { title: null, description: null }
  return fetchDetailPageMetadata(metadataConfig, params.initiative)
}

export async function clientLoader({
  params,
  serverLoader,
}: {
  params: { initiative?: string }
  serverLoader: () => Promise<{
    title: string | null
    description: string | null
  }>
}) {
  try {
    return await serverLoader()
  } catch {
    if (!params.initiative) return { title: null, description: null }
    return fetchDetailPageMetadata(metadataConfig, params.initiative)
  }
}

export function meta({
  loaderData,
  matches,
}: {
  loaderData?: { title: string | null; description: string | null }
  matches: Array<{ meta: MetaDescriptor[] }>
}): MetaDescriptor[] {
  if (!loaderData?.title) {
    return matches.flatMap(match => match.meta ?? [])
  }
  const descriptors: MetaDescriptor[] = [
    { title: `${loaderData.title} | NF Data Portal` },
  ]
  if (loaderData.description) {
    descriptors.push({ name: 'description', content: loaderData.description })
  }
  return descriptors
}

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
  )
}

export default InitiativeDetailsPage
