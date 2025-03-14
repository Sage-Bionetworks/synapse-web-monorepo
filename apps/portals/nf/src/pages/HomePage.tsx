import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { fundersSql, peopleSql, topProjectsSql } from '../config/resources'
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
import {
  CardContainerLogic,
  Goals,
  RssFeedCards,
  SynapseConstants,
  UserCardListRotate,
  JsonLdScript,
} from 'synapse-react-client'
import NFHeader from '@sage-bionetworks/synapse-portal-framework/components/nf/NFHeader'

const limit = 3

export default function HomePage() {
  return (
    <>
      <JsonLdScript
        thing={{
          '@context': 'https://schema.org',
          '@type': 'DataCatalog',
          '@id': 'https://nf.synapse.org',
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
        }}
      />
      <NFHeader />
      <SectionLayout
        title={'Resource Overview'}
        centerTitle
        ContainerProps={{ className: 'home-spacer' }}
      >
        <Goals entityId={'syn23516796'} />
      </SectionLayout>
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'New Studies'}
          centerTitle
          ContainerProps={{ className: 'home-spacer' }}
        >
          <CardContainerLogic
            initialLimit={limit}
            columnAliases={columnAliases}
            sql={newStudiesSql}
            {...studyCardConfiguration}
          />
        </SectionLayout>
      </div>
      <SectionLayout
        title={'Data Contributor Spotlight'}
        centerTitle
        ContainerProps={{ className: 'home-spacer' }}
      >
        <UserCardListRotate
          sql={`${peopleSql} where isFeatured=true`}
          count={3}
          size={SynapseConstants.LARGE_USER_CARD}
          useQueryResultUserData={true}
          // summaryLink: 'Explore/People',
          // summaryLinkText: 'Explore All People',
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
          type={SynapseConstants.GENERIC_CARD}
          titleLinkConfig={organizationDetailsPageLinkConfig}
          genericCardSchema={{
            ...organizationCardSchema,
            imageFileHandleColumnName: 'cardLogo',
          }}
          descriptionConfig={{
            showFullDescriptionByDefault: true,
          }}
          ctaLinkConfig={{
            text: 'Visit Website',
            link: 'website',
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
            url={'https://news.nfdataportal.org'}
            itemsToShow={3}
            allowCategories={[
              'Newsletter',
              'Hackathon',
              'Publication',
              'Funding',
            ]}
            // mailChimpListName: 'NF quarterly newsletter',
            // mailChimpUrl:'https://sagebase.us7.list-manage.com/subscribe/post?u=abcdefghi...',
            filter={{
              value: 'featured',
            }}
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
          type={SynapseConstants.GENERIC_CARD}
          genericCardSchema={{
            type: SynapseConstants.STUDY,
            title: 's.studyName',
            secondaryLabels: [
              'f.n_downloads',
              'f.n_unique_users',
              'f.egress_size_in_gb',
              's.studyId',
            ],
            dataTypeIconNames: 's.dataType',
          }}
          columnIconOptions={studyColumnIconConfigs}
          secondaryLabelLimit={5}
          columnAliases={{
            'f.n_downloads': '# Downloads',
            'f.n_unique_users': '# Unique Users',
            'f.egress_size_in_gb': 'Download Volume (GB)',
            's.studyId': 'On Synapse',
          }}
          titleLinkConfig={{
            isMarkdown: false,
            baseURL: 'Explore/Studies/DetailsPage',
            URLColumnName: 'studyId',
            matchColumnName: 's.studyId',
          }}
        />
      </SectionLayout>
    </>
  )
}
