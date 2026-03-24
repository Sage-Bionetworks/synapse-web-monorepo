import { fundersSql } from '@/config/resources'
import { organizationCardSchema } from '@/config/synapseConfigs/organizations'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import {
  fetchDetailPageMetadata,
  type DetailPageMetadataConfig,
} from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import type { MetaDescriptor } from 'react-router'
import { Outlet, useParams } from 'react-router'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import {
  ORGANIZATION_DATA_TAB_PATH,
  ORGANIZATION_DETAILS_TAB_PATH,
} from '@/config/routeConstants'

const metadataConfig: DetailPageMetadataConfig = {
  sql: fundersSql,
  titleColumn: 'organizationName',
  descriptionColumn: 'summary',
  paramName: 'abbreviation',
}

export async function loader({
  params,
}: {
  params: { abbreviation?: string }
}) {
  if (!params.abbreviation) return { title: null, description: null }
  return fetchDetailPageMetadata(metadataConfig, params.abbreviation)
}

export async function clientLoader({
  params,
  serverLoader,
}: {
  params: { abbreviation?: string }
  serverLoader: () => Promise<{
    title: string | null
    description: string | null
  }>
}) {
  try {
    return await serverLoader()
  } catch {
    if (!params.abbreviation) return { title: null, description: null }
    return fetchDetailPageMetadata(metadataConfig, params.abbreviation)
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
    { title: `${loaderData.title} | ${import.meta.env.VITE_PORTAL_NAME}` },
  ]
  if (loaderData.description) {
    descriptors.push({ name: 'description', content: loaderData.description })
  }
  return descriptors
}

const tabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Organization Details',
    path: ORGANIZATION_DETAILS_TAB_PATH,
    iconName: 'study',
  },
  {
    title: 'Organization Data',
    path: ORGANIZATION_DATA_TAB_PATH,
    iconName: 'database',
    tooltip: "All of the Data generated from this Organization's studies",
    iconClassName: 'tab-database',
  },
]

function OrganizationDetailsPage() {
  const { abbreviation } = useParams<{ abbreviation: string }>()
  const searchParams: Record<string, string> = abbreviation
    ? { abbreviation }
    : {}
  return (
    <DetailsPage
      header={
        <CardContainerLogic
          sql={fundersSql}
          cardConfiguration={{
            type: SynapseConstants.GENERIC_CARD,
            genericCardSchema: {
              ...organizationCardSchema,
              imageFileHandleColumnName: 'headerLogo',
            },
            isHeader: true,
          }}
          searchParams={searchParams}
        />
      }
      sql={fundersSql}
      searchParams={searchParams}
      ContainerProps={{ maxWidth: 'xl' }}
      resourcePrimaryKey={['abbreviation']}
    >
      <DetailsPageTabs tabConfig={tabConfig} />
      <Outlet />
    </DetailsPage>
  )
}

export default OrganizationDetailsPage
