import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
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
import { studiesSql } from '../../config/resources'
import { columnAliases } from '../../config/synapseConfigs/commonProps'
import {
  studyCardConfiguration,
  studyHeaderIconOptions,
} from '../../config/synapseConfigs/studies'
import {
  STUDY_DETAILS_PAGE_ADDITIONAL_FILES_TAB_PATH,
  STUDY_DETAILS_PAGE_DATASETS_TAB_PATH,
  STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
  STUDY_DETAILS_PAGE_FILES_TAB_PATH,
} from '@/config/routeConstants'
import { sharePageLinkButtonDetailPageProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'

const metadataConfig: DetailPageMetadataConfig = {
  sql: studiesSql,
  titleColumn: 'studyName',
  descriptionColumn: 'summary',
  paramName: 'studyId',
}

/** Runs on the server for SSR. Produces .data files for client navigation. */
export async function loader({ params }: { params: { studyId?: string } }) {
  if (!params.studyId) return { title: null, description: null }
  return fetchDetailPageMetadata(metadataConfig, params.studyId)
}

/** Runs on the client for hydration and client-side navigation. */
export async function clientLoader({
  params,
  serverLoader,
}: {
  params: { studyId?: string }
  serverLoader: () => Promise<{
    title: string | null
    description: string | null
  }>
}) {
  try {
    return await serverLoader()
  } catch {
    if (!params.studyId) return { title: null, description: null }
    return fetchDetailPageMetadata(metadataConfig, params.studyId)
  }
}

/** Produces <title> and <meta> tags via <Meta /> in root.tsx.
 *
 * In React Router, the deepest route's meta() completely replaces the parent's.
 * We must always return at least a title to avoid an empty <head>. When the
 * loader has no data (e.g. invalid entity ID), we use the `matches` parameter
 * to inherit the ancestor route's meta as a fallback.
 */
export function meta({
  loaderData,
  matches,
}: {
  loaderData?: { title: string | null; description: string | null }
  matches: Array<{ meta: MetaDescriptor[] }>
}): MetaDescriptor[] {
  if (!loaderData?.title) {
    // No page-specific data — fall back to ancestor meta (root.tsx defaults)
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

const tabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Study Details',
    path: STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
    iconName: 'study',
    tooltip: 'Description, methods, acknowledgements and related studies',
  },
  {
    title: 'Study Datasets',
    path: STUDY_DETAILS_PAGE_DATASETS_TAB_PATH,
    iconName: 'dataset',
    tooltip: 'All of the Datasets generated within this study',
    iconClassName: 'tab-dataset',
  },
  {
    title: 'Study Files',
    path: STUDY_DETAILS_PAGE_FILES_TAB_PATH,
    iconName: 'database',
    tooltip: 'File data generated within this study',
    iconClassName: 'tab-database',
  },
  {
    title: 'Additional Files',
    path: STUDY_DETAILS_PAGE_ADDITIONAL_FILES_TAB_PATH,
    iconName: 'database',
    tooltip: 'Additional file data generated within this study',
    iconClassName: 'tab-database',
  },
]

function StudyDetailsPage() {
  const { studyId } = useParams<{ studyId: string }>()

  if (!studyId) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <>
          <CardContainerLogic
            sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
            cardConfiguration={{
              ...studyCardConfiguration,
              secondaryLabelLimit: Infinity,
              iconOptions: studyHeaderIconOptions,
              isHeader: true,
              sharePageLinkButtonProps: sharePageLinkButtonDetailPageProps,
            }}
            columnAliases={columnAliases}
            sql={studiesSql}
            searchParams={{ studyId }}
          />
        </>
      }
      sql={studiesSql}
      searchParams={{ studyId }}
      ContainerProps={{ maxWidth: 'xl' }}
      resourcePrimaryKey={['studyId']}
    >
      <DetailsPageTabs tabConfig={tabConfig} />
      <Outlet />
    </DetailsPage>
  )
}

export default StudyDetailsPage
