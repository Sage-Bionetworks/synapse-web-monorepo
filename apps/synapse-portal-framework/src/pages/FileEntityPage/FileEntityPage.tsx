import { useGetPortalComponentSearchParams } from '@/utils/UseGetPortalComponentSearchParams'
import { Box, Container, Stack } from '@mui/material'
import { IconSvg, ProvenanceGraph } from 'synapse-react-client'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import { useGetEntityBundle } from 'synapse-react-client/synapse-queries'
import { DetailsPageSectionLayoutType } from '@/components/DetailsPage/DetailsPageSectionLayout'
import { SynapseSpinner } from 'synapse-react-client/components/LoadingScreen/LoadingScreen'
import HeaderCard from 'synapse-react-client/components/HeaderCard'
import CitationPopover from 'synapse-react-client/components/CitationPopover'
import { DetailsPageContent } from '../../components/DetailsPage/DetailsPageContentLayout'
import SynapseFileEntityLinkCard from './SynapseFileEntityLinkCard'
import SynapseFileEntityPageProperties from './SynapseFileEntityPageProperties'

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
      includeFileHandles: true,
    },
  )

  const fileEntityPageSections = [
    {
      id: 'properties',
      title: 'Properties',
      element: (
        <SynapseFileEntityPageProperties
          entityId={entityId}
          versionNumber={version}
        />
      ),
    },
    {
      element: <SynapseFileEntityLinkCard synId={entityId} version={version} />,
    },
    entityBundle?.rootWikiId && {
      id: 'wiki',
      title: 'Wiki',
      element: (
        <MarkdownSynapse ownerId={entityId} wikiId={entityBundle?.rootWikiId} />
      ),
    },
    {
      id: 'provenance',
      title: 'Provenance',
      element: (
        <ProvenanceGraph
          entityRefs={[{ targetId: entityId, targetVersionNumber: version }]}
          containerHeight="400px"
        />
      ),
    },
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
        cardTopButtons={
          doiUri ? (
            <CitationPopover doi={doiUri} buttonSx={{ mr: 5 }} />
          ) : undefined
        }
        sx={{
          '& .SRC-boldText': {
            fontSize: '36px !important',
            marginTop: '0',
          },
          '& .SRC-portalCardMain': {
            alignItems: 'center',
          },
          '& .SRC-cardContent': {
            marginBottom: '0 ',
          },
        }}
      />
      <Container sx={{ '& .component-container': { flex: 1 } }}>
        <DetailsPageContent content={fileEntityPageSections} />
      </Container>
    </article>
  )
}

export default FileEntityPage
