import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function OmicsProfilesInHumans() {
  return (
    <SectionLayout title={'Omics Profiles in Humans'}>
      <Markdown
        ownerId="syn27229419"
        wikiId="630616"
        loadingSkeletonRowCount={15}
      />
    </SectionLayout>
  )
}

export default OmicsProfilesInHumans
