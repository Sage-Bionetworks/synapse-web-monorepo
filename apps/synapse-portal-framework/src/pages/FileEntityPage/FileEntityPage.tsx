import { useGetPortalComponentSearchParams } from '@/utils/UseGetPortalComponentSearchParams'
import { Container, Stack } from '@mui/material'
import { ProvenanceGraph } from 'synapse-react-client'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import { useGetEntityBundle } from 'synapse-react-client/synapse-queries'
import CollapsibleSection from '@/components/CollapsibleSection'
import { DetailsPageSectionLayoutType } from '@/components/DetailsPage/DetailsPageSectionLayout'
import { SynapseSpinner } from 'synapse-react-client/components/LoadingScreen/LoadingScreen'
import DetailsPageMenu from '../../components/DetailsPageMenu'
import DetailsPageLayout from '@/components/DetailsPageLayout'

function FileEntityPage() {
  const searchParams = useGetPortalComponentSearchParams()
  const entityId = searchParams?.entityId
  const version = searchParams?.version
    ? Number(searchParams.version)
    : undefined

  const { data: entityBundle, isLoading } = useGetEntityBundle(
    entityId,
    version,
    {
      includeEntity: true,
      includeRootWikiId: true,
    },
  )

  const fileEntityPageSections = [
    entityBundle?.rootWikiId && { id: 'wiki', title: 'Wiki' },
    { id: 'provenance', title: 'Provenance' },
  ].filter(Boolean) as DetailsPageSectionLayoutType[]

  if (isLoading) {
    return (
      <Stack sx={{ my: 3 }}>
        <SynapseSpinner size={40} />
      </Stack>
    )
  }
  return (
    <Container>
      <DetailsPageLayout>
        <DetailsPageMenu menuSections={fileEntityPageSections} />
        <Stack
          sx={{
            flex: 1,
            gap: '40px',
          }}
        >
          {entityBundle?.rootWikiId && (
            <CollapsibleSection title="Wiki" id="wiki">
              <MarkdownSynapse
                ownerId={entityId}
                wikiId={entityBundle?.rootWikiId}
              />
            </CollapsibleSection>
          )}
          <CollapsibleSection title="Provenance" id="provenance">
            <ProvenanceGraph
              entityRefs={[
                { targetId: entityId, targetVersionNumber: version },
              ]}
              containerHeight="400px"
            />
          </CollapsibleSection>
        </Stack>
      </DetailsPageLayout>
    </Container>
  )
}

export default FileEntityPage
