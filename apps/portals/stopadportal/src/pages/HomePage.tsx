import Header from '@sage-bionetworks/synapse-portal-framework/components/Header'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function HomePage() {
  return (
    <>
      <Header />
      <SectionLayout ContainerProps={{ className: 'stop-ad-home-page' }}>
        <Markdown ownerId="syn20717442" wikiId="595390" />
      </SectionLayout>
    </>
  )
}

export default HomePage
