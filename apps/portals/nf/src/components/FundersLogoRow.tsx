import { Box, Skeleton } from '@mui/material'
import { FileHandleAssociateType } from '@sage-bionetworks/synapse-types'
import { useGetFullTableQueryResults } from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { useGetStablePresignedUrl } from 'synapse-react-client/synapse-queries/file/useFiles'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { fundersSql } from '../config/resources'
import ntapLogoSrc from '../config/synapseConfigs/icons/NTAP-funders-row.png'

// Logos that are hard to read against a white background get a local override
const LOCAL_LOGO_OVERRIDES: Record<string, string> = {
  NTAP: ntapLogoSrc,
}

const FUNDERS_TABLE_ID = 'syn16858699'

function FunderLogo({
  fileHandleId,
  abbreviation,
}: {
  fileHandleId: string
  abbreviation: string
}) {
  const localSrc = LOCAL_LOGO_OVERRIDES[abbreviation]

  const { dataUrl } = useGetStablePresignedUrl(
    {
      fileHandleId,
      associateObjectId: FUNDERS_TABLE_ID,
      associateObjectType: FileHandleAssociateType.TableEntity,
    },
    false,
    { enabled: !!fileHandleId && !localSrc },
  )

  const src = localSrc ?? dataUrl

  if (!src) {
    return (
      <Skeleton
        variant="rectangular"
        width={120}
        height={56}
        sx={{ borderRadius: 1 }}
      />
    )
  }

  return (
    <Box
      component="a"
      href={`/Organizations/${abbreviation}/Details`}
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      <Box
        component="img"
        src={src}
        alt={abbreviation}
        sx={{
          height: 56,
          maxWidth: 160,
          objectFit: 'contain',
          opacity: 0.85,
          transition: 'opacity 0.2s',
          '&:hover': { opacity: 1 },
        }}
      />
    </Box>
  )
}

export default function FundersLogoRow() {
  const { data, isLoading } = useGetFullTableQueryResults(
    {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
      entityId: FUNDERS_TABLE_ID,
      query: { sql: fundersSql },
    },
    { enabled: true },
  )

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {[1, 2, 3].map(i => (
          <Skeleton
            key={i}
            variant="rectangular"
            width={120}
            height={56}
            sx={{ borderRadius: 1 }}
          />
        ))}
      </Box>
    )
  }

  const headers = data?.queryResult?.queryResults?.headers ?? []
  const rows = data?.queryResult?.queryResults?.rows ?? []

  const logoColIdx = headers.findIndex(h => h.name === 'cardLogo')
  const abbrevColIdx = headers.findIndex(h => h.name === 'abbreviation')

  if (logoColIdx === -1 || abbrevColIdx === -1) return null

  const funders = rows
    .map(row => ({
      fileHandleId: row.values?.[logoColIdx] ?? '',
      abbreviation: row.values?.[abbrevColIdx] ?? '',
    }))
    .filter(f => f.fileHandleId && f.abbreviation)

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: { xs: 4, md: 6 },
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {funders.map(f => (
        <FunderLogo
          key={f.abbreviation}
          fileHandleId={f.fileHandleId}
          abbreviation={f.abbreviation}
        />
      ))}
    </Box>
  )
}
