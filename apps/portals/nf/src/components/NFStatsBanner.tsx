import { Container, Skeleton } from '@mui/material'
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
import './NFStatsBanner.scss'

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
    <div className="nf-stats-banner">
      <Container maxWidth="lg">
        <div className="nf-stats-banner__grid">
          {STATS.map(({ label, sql, href }) => (
            <Link key={label} to={href} className="nf-stats-banner__stat">
              <div className="nf-stats-banner__number">
                <StatCount sql={sql} />
              </div>
              <div className="nf-stats-banner__label">{label}</div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}
