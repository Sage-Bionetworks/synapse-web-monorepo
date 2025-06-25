import GenieHomePageHeader from '@sage-bionetworks/synapse-portal-framework/components/genie/GenieHomePageHeader'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic'
import Goals from 'synapse-react-client/components/Goals'
import { currentDataReleasesProps } from '../config/synapseConfigs/dataReleases'
import Markdown from 'synapse-react-client/components/Markdown/MarkdownSynapse'

export default function GenieHomePage() {
  return (
    <>
      <GenieHomePageHeader />
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'Our Data'}
          centerTitle
          ContainerProps={{ className: 'home-spacer' }}
        >
          <Goals entityId={'syn54352754'} />
        </SectionLayout>
      </div>
      <SectionLayout
        title={'What Else Is In The Portal'}
        centerTitle
        ContainerProps={{ className: 'home-spacer' }}
      >
        <Goals entityId={'syn54355188'} />
      </SectionLayout>
      <div className={'home-bg-dark'}>
        <SectionLayout title={'Current Data Releases'} centerTitle>
          <CardContainerLogic {...currentDataReleasesProps} />
        </SectionLayout>
      </div>
      <SectionLayout title={'Related Resources'} centerTitle>
        <Markdown
          ownerId={'syn53013218'}
          wikiId={'626554'}
          loadingSkeletonRowCount={10}
        />
      </SectionLayout>
    </>
  )
}
