import { useGetPortalComponentSearchParams } from '@/utils/UseGetPortalComponentSearchParams'
import { Box, Container, Stack } from '@mui/material'
import { IconSvg, ProvenanceGraph } from 'synapse-react-client'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import { useGetEntityBundle } from 'synapse-react-client/synapse-queries'
import CollapsibleSection from '@/components/CollapsibleSection'
import { DetailsPageSectionLayoutType } from '@/components/DetailsPage/DetailsPageSectionLayout'
import { SynapseSpinner } from 'synapse-react-client/components/LoadingScreen/LoadingScreen'
import DetailsPageMenu from '../../components/DetailsPageMenu'
import DetailsPageLayout from '@/components/DetailsPageLayout'
import HeaderCard from 'synapse-react-client/components/HeaderCard'

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
      includeDOIAssociation: true,
    },
  )

  const fileEntityPageSections = [
    entityBundle?.rootWikiId && { id: 'wiki', title: 'Wiki' },
    { id: 'provenance', title: 'Provenance' },
  ].filter(Boolean) as DetailsPageSectionLayoutType[]

  const title = entityBundle?.entity.name ?? ''
  const type = entityBundle?.entityType ?? 'Entity'
  const doiUri = entityBundle?.doiAssociation?.doiUri

  if (isLoading) {
    return (
      <Stack sx={{ my: 3 }}>
        <SynapseSpinner size={40} />
      </Stack>
    )
  }

  const icon = (
    <Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        borderRadius: '50%',
        width: '72px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IconSvg
        icon={'file'}
        wrap={false}
        sx={{ width: '32px', height: '32px' }}
      />
    </Box>
  )

  return (
    <article>
      <HeaderCard
        type={type}
        title={title}
        description={''}
        icon={icon}
        doiUri={doiUri}
      />
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
    </article>
  )
}

export default FileEntityPage
