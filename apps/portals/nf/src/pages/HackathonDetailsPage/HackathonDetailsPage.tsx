import { hackathonsSql } from '@/config/resources'
import { columnAliases } from '@/config/synapseConfigs/commonProps'
import { hackathonCardConfiguration } from '@/config/synapseConfigs/hackathons'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import {
  fetchDetailPageMetadata,
  type DetailPageMetadataConfig,
} from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import type { MetaDescriptor } from 'react-router'
import { Outlet, useParams } from 'react-router'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import {
  HACKATHONS_DETAILS_PAGE_BACKGROUND_AND_RESULTS_TAB_PATH,
  HACKATHONS_DETAILS_PAGE_METHODOLOGY_TAB_PATH,
} from '@/config/routeConstants'

const metadataConfig: DetailPageMetadataConfig = {
  sql: hackathonsSql,
  titleColumn: 'name',
  descriptionColumn: 'summary',
  paramName: 'id',
}

export async function loader({ params }: { params: { id?: string } }) {
  if (!params.id) return { title: null, description: null }
  return fetchDetailPageMetadata(metadataConfig, params.id)
}

export async function clientLoader({
  params,
  serverLoader,
}: {
  params: { id?: string }
  serverLoader: () => Promise<{
    title: string | null
    description: string | null
  }>
}) {
  try {
    return await serverLoader()
  } catch {
    if (!params.id) return { title: null, description: null }
    return fetchDetailPageMetadata(metadataConfig, params.id)
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

const tabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Background & Results',
    path: HACKATHONS_DETAILS_PAGE_BACKGROUND_AND_RESULTS_TAB_PATH,
    iconName: 'chart',
  },
  {
    title: 'Methodology',
    path: HACKATHONS_DETAILS_PAGE_METHODOLOGY_TAB_PATH,
    iconName: 'database',
    iconClassName: 'tab-database',
  },
]

function HackathonDetailsPage() {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <CardContainerLogic
          sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
          cardConfiguration={{
            ...hackathonCardConfiguration,
            secondaryLabelLimit: Infinity,
            isHeader: true,
          }}
          columnAliases={{ ...columnAliases, studyStatus: 'Status' }}
          sql={hackathonsSql}
          searchParams={{ id }}
        />
      }
      sql={hackathonsSql}
      searchParams={{ id }}
      ContainerProps={{ maxWidth: 'xl' }}
      resourcePrimaryKey={['id']}
    >
      <DetailsPageTabs tabConfig={tabConfig} />
      <Outlet />
    </DetailsPage>
  )
}

export default HackathonDetailsPage
