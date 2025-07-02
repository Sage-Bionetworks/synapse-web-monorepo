import { useGetPortalComponentSearchParams } from '@/utils/UseGetPortalComponentSearchParams'
import { Box, Container, Stack } from '@mui/material'
import { ProvenanceGraph } from 'synapse-react-client'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import { useGetEntityBundle } from 'synapse-react-client/synapse-queries'
import CollapsibleSection from '@/components/CollapsibleSection'
import { DetailsPageSectionLayoutType } from '@/components/DetailsPage/DetailsPageSectionLayout'
import { useLocation, useNavigate } from 'react-router'
import { SynapseSpinner } from 'synapse-react-client/components/LoadingScreen/LoadingScreen'
import EntityPageMenu from '../../components/EntityPageMenu'

function FileEntityPage() {
  const searchParams = useGetPortalComponentSearchParams()
  const entityId = searchParams?.entityId
  const version = searchParams?.version
    ? Number(searchParams.version)
    : undefined
  const location = useLocation()
  const navigate = useNavigate()

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
      <Box
        sx={{
          display: 'flex',
          gap: '50px',
          padding: '50px 0px 80px 0px',
        }}
      >
        <EntityPageMenu
          menuSections={fileEntityPageSections}
          navigate={navigate}
          location={location}
        />
        <Stack
          sx={{
            flex: 1,
            gap: '40px',
          }}
        >
          {entityBundle?.rootWikiId && (
            <Box>
              <CollapsibleSection title="Wiki" id="wiki">
                <MarkdownSynapse
                  ownerId={entityId}
                  wikiId={entityBundle?.rootWikiId}
                />
              </CollapsibleSection>
            </Box>
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
      </Box>
    </Container>
  )
}

export default FileEntityPage
