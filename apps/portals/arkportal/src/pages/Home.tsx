import ARKWelcomePage from '@sage-bionetworks/synapse-portal-framework/components/arkportal/ARKWelcomePage'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { useLoaderData, type MetaArgs, type MetaDescriptor } from 'react-router'
import { mergeMeta } from '@sage-bionetworks/synapse-portal-framework/utils/mergeMeta'
import { createQueryClientForLoader } from '@sage-bionetworks/synapse-portal-framework/utils/createQueryClientForLoader'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import {
  Goals,
  prefetchGoals,
} from 'synapse-react-client/components/Goals/Goals'

export function meta(args: MetaArgs): MetaDescriptor[] {
  const portalDescription = import.meta.env.VITE_PORTAL_DESCRIPTION
  const portalUrl = `https://${import.meta.env.VITE_PORTAL_KEY}.synapse.org`
  return mergeMeta(args, [
    { title: import.meta.env.VITE_PORTAL_NAME },
    { name: 'description', content: portalDescription },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'DataCatalog',
        '@id': portalUrl,
        name: import.meta.env.VITE_PORTAL_NAME,
        description: portalDescription,
        provider: [
          {
            '@type': 'Organization',
            '@id': 'Sage Bionetworks',
            name: 'Sage Bionetworks',
            url: 'https://www.synapse.org/',
          },
        ],
      },
    },
  ])
}

const GOALS_ENTITY_ID = 'syn38103451'

export async function loader() {
  const queryClient = createQueryClientForLoader()
  await prefetchGoals(queryClient, GOALS_ENTITY_ID)
  return { dehydratedState: dehydrate(queryClient) }
}

function Home() {
  const { dehydratedState } = useLoaderData<typeof loader>()

  return (
    <HydrationBoundary state={dehydratedState}>
      <ARKWelcomePage />
      <SectionLayout>
        <Goals entityId={'syn38103451'} />
      </SectionLayout>
    </HydrationBoundary>
  )
}

export default Home
