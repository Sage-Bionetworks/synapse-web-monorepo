import Header from '@sage-bionetworks/synapse-portal-framework/components/Header'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import Goals from 'synapse-react-client/components/Goals'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import { UserCardListGroups } from 'synapse-react-client/components/UserCardList'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'

function Home() {
  return (
    <>
      <Header />
      <SectionLayout title={'About the Portal'} centerTitle>
        <MarkdownSynapse ownerId={'syn21645000'} loadingSkeletonRowCount={10} />
      </SectionLayout>
      <SectionLayout
        ContainerProps={{
          className: 'home-spacer',
        }}
      >
        <Goals entityId={'syn23021143'} />
      </SectionLayout>
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'Grants and Principal Investigators'}
          centerTitle
          ContainerProps={{
            className: 'home-spacer',
          }}
        >
          <UserCardListGroups
            sql="SELECT * FROM syn21781196 WHERE isFeatured='true'"
            columnName="Project Title"
            facetValues={[
              'Somatic Mosaicism in the brain of Tourette syndrome',
              'Somatic Mosaicism in Schizophrenia and Control Brains',
              '1/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
              '2/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
              '3/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
              'Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder',
              'Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease',
              '1/2-Somatic mosaicism and autism spectrum disorder',
              '2/2-Somatic mosaicism and autism spectrum disorder',
            ]}
            size={SynapseConstants.MEDIUM_USER_CARD}
            useQueryResultUserData={true}
            summaryLinkText="Explore All People"
            summaryLink="/Explore/People"
            count={6}
          />
        </SectionLayout>
      </div>
      <SectionLayout title={'Acknowledgement'} centerTitle>
        <MarkdownSynapse ownerId={'syn23308351'} loadingSkeletonRowCount={10} />
      </SectionLayout>
    </>
  )
}

export default Home
