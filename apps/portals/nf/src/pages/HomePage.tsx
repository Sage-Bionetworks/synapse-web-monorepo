import NFHeader from '@sage-bionetworks/synapse-portal-framework/components/nf/NFHeader'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { createQueryClientForLoader } from '@sage-bionetworks/synapse-portal-framework/utils/createQueryClientForLoader'
import { mergeMeta } from '@sage-bionetworks/synapse-portal-framework/utils/mergeMeta'
import { ContainerProps } from '@mui/material'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import type { MetaArgs, MetaDescriptor } from 'react-router'
import { useLoaderData } from 'react-router'
import {
  CardContainerLogic,
  prefetchCardContainerLogicData,
} from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import {
  Goals,
  prefetchGoals,
} from 'synapse-react-client/components/Goals/Goals'
import RssFeedCards, {
  prefetchRssFeed,
} from 'synapse-react-client/components/RssFeedCards/RssFeedCards'
import {
  UserCardListRotate,
  prefetchUserCardListRotate,
} from 'synapse-react-client/components/UserCardList/UserCardListRotate'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { fundersSql, peopleSql, topProjectsSql } from '../config/resources'
import {
  TOUR_TARGET_HOME_GOALS,
  TOUR_TARGET_HOME_NEW_STUDIES,
} from '../config/tourConfig'
import { columnAliases } from '../config/synapseConfigs/commonProps'
import {
  organizationCardSchema,
  organizationDetailsPageLinkConfig,
} from '../config/synapseConfigs/organizations'
import {
  newStudiesSql,
  studyCardConfiguration,
  studyColumnIconConfigs,
} from '../config/synapseConfigs/studies'

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
        keywords: [
          'neurofibromatosis',
          'schwannomatosis',
          'NF1',
          'NF2',
          'RASopathies',
          'rare tumor syndrome',
          'genetics',
          'tumor biology',
          'biomedical research',
          'Human Data',
          'Life Science',
        ],
        description:
          'The NF Data Portal provides a data repository for neurofibromatosis type 1 and schwannomatosis research data, aimed at improving understanding and treatment of the disorder.',
        name: 'NF Data Portal',
        provider: [
          {
            '@type': 'Organization',
            '@id': 'Sage Bionetworks',
            name: 'Sage Bionetworks',
            url: 'https://www.synapse.org/',
          },
        ],
        alternateName: 'Neurofibromatosis Data Portal',
      },
    },
  ])
}

const STUDIES_INITIAL_LIMIT = 3

const FEATURED_USER_CARD_SQL = `${peopleSql} where isFeatured=true`
const FEATURED_USER_CARD_COUNT = 3

const RSS_URL = 'https://news.nfdataportal.org'
const RSS_FILTER = { value: 'featured' }

const GOALS_ENTITY_ID = 'syn23516796'

export async function loader() {
  const queryClient = createQueryClientForLoader()
  await Promise.all([
    prefetchGoals(queryClient, GOALS_ENTITY_ID),
    prefetchCardContainerLogicData(queryClient, newStudiesSql),
    prefetchCardContainerLogicData(queryClient, fundersSql),
    prefetchCardContainerLogicData(queryClient, topProjectsSql),
    prefetchUserCardListRotate(queryClient, FEATURED_USER_CARD_SQL, {
      count: FEATURED_USER_CARD_COUNT,
    }),
    prefetchRssFeed(queryClient, RSS_URL, RSS_FILTER),
  ])
  return { dehydratedState: dehydrate(queryClient) }
}

export default function HomePage() {
  const { dehydratedState } = useLoaderData<typeof loader>()
  return (
    <HydrationBoundary state={dehydratedState}>
      <NFHeader />
      <SectionLayout
        title={'Resource Overview'}
        centerTitle
        ContainerProps={
          {
            className: 'home-spacer',
            'data-tour': TOUR_TARGET_HOME_GOALS,
          } as ContainerProps
        }
      >
        <Goals entityId={GOALS_ENTITY_ID} />
      </SectionLayout>
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'New Studies'}
          centerTitle
          ContainerProps={
            {
              className: 'home-spacer',
              'data-tour': TOUR_TARGET_HOME_NEW_STUDIES,
            } as ContainerProps
          }
        >
          <CardContainerLogic
            initialLimit={STUDIES_INITIAL_LIMIT}
            columnAliases={columnAliases}
            sql={newStudiesSql}
            cardConfiguration={studyCardConfiguration}
          />
        </SectionLayout>
      </div>
      <SectionLayout
        title={'Data Contributor Spotlight'}
        centerTitle
        ContainerProps={{ className: 'home-spacer' }}
      >
        <UserCardListRotate
          sql={FEATURED_USER_CARD_SQL}
          count={FEATURED_USER_CARD_COUNT}
          size={SynapseConstants.LARGE_USER_CARD}
          useQueryResultUserData={true}
        />
      </SectionLayout>
      <SectionLayout
        title={'Our Partners'}
        centerTitle
        ContainerProps={{ className: 'home-spacer' }}
      >
        <CardContainerLogic
          columnAliases={columnAliases}
          sql={fundersSql}
          cardConfiguration={{
            type: SynapseConstants.GENERIC_CARD,
            titleLinkConfig: organizationDetailsPageLinkConfig,
            genericCardSchema: {
              ...organizationCardSchema,
              imageFileHandleColumnName: 'cardLogo',
            },
            descriptionConfig: {
              showFullDescriptionByDefault: true,
            },
            ctaLinkConfig: {
              text: 'Visit Website',
              link: 'website',
            },
          }}
        />
      </SectionLayout>
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={"What's New"}
          centerTitle
          ContainerProps={{ className: 'home-spacer' }}
        >
          <RssFeedCards
            url={RSS_URL}
            itemsToShow={3}
            allowCategories={[
              'Newsletter',
              'Hackathon',
              'Publication',
              'Funding',
            ]}
            // mailChimpListName: 'NF quarterly newsletter',
            // mailChimpUrl:'https://sagebase.us7.list-manage.com/subscribe/post?u=abcdefghi...',
            filter={RSS_FILTER}
          />
        </SectionLayout>
      </div>
      <SectionLayout
        title={'Top 10 Studies (Last 30 Days)'}
        centerTitle
        ContainerProps={{ className: 'home-spacer' }}
      >
        <CardContainerLogic
          sql={topProjectsSql}
          cardConfiguration={{
            type: SynapseConstants.GENERIC_CARD,
            genericCardSchema: {
              type: SynapseConstants.STUDY,
              title: 's.studyName',
              secondaryLabels: [
                'f.n_downloads',
                'f.n_unique_users',
                'f.egress_size_in_gb',
                's.studyId',
              ],
              dataTypeIconNames: 's.dataType',
            },
            columnIconOptions: studyColumnIconConfigs,
            secondaryLabelLimit: 5,
            titleLinkConfig: {
              isMarkdown: false,
              baseURL: 'Explore/Studies',
              URLColumnName: 'studyId',
              urlParamStyle: 'path-segment',
              matchColumnName: 's.studyId',
            },
          }}
          columnAliases={{
            'f.n_downloads': '# Downloads',
            'f.n_unique_users': '# Unique Users',
            'f.egress_size_in_gb': 'Download Volume (GB)',
            's.studyId': 'On Synapse',
          }}
        />
      </SectionLayout>
    </HydrationBoundary>
  )
}
