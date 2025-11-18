import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function About() {
  return (
    <SectionLayout title={'About'}>
      <MarkdownSynapse
        ownerId={'syn26710600'}
        wikiId={'619467'}
        loadingSkeletonRowCount={8}
      />
    </SectionLayout>
  )
}

export default About
