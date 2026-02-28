import { toolsSql } from '@/config/resources'
import {
  TOOLS_DETAILS_PAGE_DATA_TAB_PATH,
  TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH,
  TOOLS_DETAILS_PAGE_OBSERVATIONS_TAB_PATH,
} from '@/config/routeConstants'
import { toolsSchema } from '@/config/synapseConfigs/tools'
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
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'

const metadataConfig: DetailPageMetadataConfig = {
  sql: toolsSql,
  titleColumn: 'resourceName',
  descriptionColumn: 'description',
  paramName: 'resourceId',
}

export async function loader({ params }: { params: { resourceId?: string } }) {
  if (!params.resourceId) return { title: null, description: null }
  return fetchDetailPageMetadata(metadataConfig, params.resourceId)
}

export async function clientLoader({
  params,
  serverLoader,
}: {
  params: { resourceId?: string }
  serverLoader: () => Promise<{
    title: string | null
    description: string | null
  }>
}) {
  try {
    return await serverLoader()
  } catch {
    if (!params.resourceId) return { title: null, description: null }
    return fetchDetailPageMetadata(metadataConfig, params.resourceId)
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

/**
 * Sets HTTP cache headers on the SSR response for this route.
 *
 * - `max-age=300` (5 min): CDN/browser serves cached HTML without revalidation.
 * - `stale-while-revalidate=3600` (1 hr): After max-age, serves stale while
 *   refreshing in the background.
 */
export function headers() {
  return {
    'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600',
  }
}

export const toolDetailsPageTabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Details',
    path: TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH,
  },
  {
    title: 'Observations',
    path: TOOLS_DETAILS_PAGE_OBSERVATIONS_TAB_PATH,
  },
  {
    title: 'Data',
    path: TOOLS_DETAILS_PAGE_DATA_TAB_PATH,
  },
] satisfies DetailsPageTabConfig[]

function ToolDetailsPage() {
  const { resourceId } = useParams<{ resourceId: string }>()

  if (!resourceId) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <>
          <CardContainerLogic
            sql={toolsSql}
            cardConfiguration={{
              type: SynapseConstants.GENERIC_CARD,
              genericCardSchema: toolsSchema,
              secondaryLabelLimit: 6,
              isHeader: true,
            }}
            searchParams={{ resourceId }}
          />
        </>
      }
      sql={toolsSql}
      searchParams={{ resourceId }}
      ContainerProps={{ maxWidth: 'xl' }}
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      resourcePrimaryKey={['resourceId']}
    >
      <DetailsPageTabs tabConfig={toolDetailsPageTabConfig} />
      <Outlet />
    </DetailsPage>
  )
}

export default ToolDetailsPage
