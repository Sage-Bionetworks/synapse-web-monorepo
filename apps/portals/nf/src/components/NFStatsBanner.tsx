import { Box, Container, Skeleton, Typography } from '@mui/material'
import { Link } from 'react-router'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { parseEntityIdFromSqlStatement } from 'synapse-react-client/utils/functions/SqlFunctions'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import {
  datasetsSql,
  filesSql,
  publicationsSql,
  studiesSql,
  toolsSql,
} from '../config/resources'

function StatCount({ sql }: { sql: string }) {
  const entityId = parseEntityIdFromSqlStatement(sql)
  const { data } = useGetQueryResultBundle({
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: { sql },
    entityId,
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
  })
  const count = data?.queryCount?.toLocaleString()
  if (!count)
    return (
      <Skeleton
        variant="text"
        width={64}
        sx={{ fontSize: 'inherit', display: 'inline-block' }}
      />
    )
  return <>{count}</>
}

const STATS = [
  { label: 'Studies', sql: studiesSql, href: '/Explore/Studies' },
  { label: 'Files', sql: filesSql, href: '/Explore/Files' },
  { label: 'Datasets', sql: datasetsSql, href: '/Explore/Datasets' },
  { label: 'Tools', sql: toolsSql, href: '/Explore/Tools' },
  {
    label: 'Publications',
    sql: publicationsSql,
    href: '/Explore/Publications',
  },
]

export default function NFStatsBanner() {
  return (
    <Box
      sx={{
        background: '#fff',
        borderBottom: '1px solid #DDE3EA',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(5, 1fr)',
            },
            py: { xs: 3, md: 4 },
            gap: { xs: 3, md: 0 },
          }}
        >
          {STATS.map(({ label, sql, href }, i) => (
            <Box
              key={label}
              component={Link}
              to={href}
              sx={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 0.5,
                px: { md: 3 },
                borderRight: {
                  md: i < STATS.length - 1 ? '1px solid #DDE3EA' : 'none',
                },
                transition: 'opacity 0.15s',
                '&:hover': { opacity: 0.7 },
              }}
            >
              <Typography
                component="div"
                sx={{
                  fontSize: { xs: '2.25rem', md: '2.5rem' },
                  fontWeight: 900,
                  lineHeight: 1,
                  color: '#1B2A41',
                  letterSpacing: '-0.02em',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                <StatCount sql={sql} />
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: '#6B7F94',
                }}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
