import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import { Box, Button, Link, Typography } from '@mui/material'
import { Link as ReactRouterLink } from 'react-router'
import { ReleaseCardProps } from './ReleaseCard'
import { ReleaseCardMediumConfig, ReleaseCardStat } from './ReleaseCardTypes'
import { formatReleaseCardData } from './ReleaseCardUtils'

function StatGrid({ value, label }: ReleaseCardStat) {
  return (
    <>
      <Box
        sx={{
          gridColumn: 'span 1',
          gridRow: 'span 1',
          justifySelf: 'flex-end',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            lineHeight: '20px',
          }}
        >
          {value}
        </Typography>
      </Box>
      <Box
        sx={{
          gridColumn: 'span 1',
          gridRow: 'span 1',
          justifySelf: 'flex-start',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            lineHeight: '20px',
            color: 'grey.700',
          }}
        >
          {label}
        </Typography>
      </Box>
    </>
  )
}

export type ReleaseCardMediumProps = Omit<
  ReleaseCardProps,
  'releaseCardConfig'
> & { releaseCardConfig: ReleaseCardMediumConfig }

export function ReleaseCardMedium({
  data,
  schema,
  includePortalCardClass = true,
  releaseCardConfig,
}: ReleaseCardMediumProps) {
  const { releaseName, releaseEntityId, releaseDate, stats } =
    formatReleaseCardData(
      schema,
      data,
      releaseCardConfig.releaseMetadataConfig,
      releaseCardConfig.statsConfig,
    )

  if (releaseName === null) return <></>

  const nCols = 2
  const SPAN_ALL_COLS = `span ${nCols}`
  const nRows = stats.length + 4

  return (
    <Box
      className={`ReleaseCard ${
        includePortalCardClass ? 'SRC-portalCard' : ''
      }`}
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${nCols}, 1fr)`, // columns are controlled by this component, not the parent grid
        columnGap: '10px',
        gridTemplateRows: 'subgrid', // rows are controlled by parent grid, so text will be aligned across cards
        gridRow: `span ${nRows}`, // ensures that card spans the correct number of rows in the parent grid
        rowGap: '0px', // prevent parent grid from applying its gap to the subgrid rows
        alignItems: 'center',
        justifyItems: 'center',
        textAlign: 'center',
        padding: '30px 40px 40px',
        my: 0, // remove margin added by .SRC-portalCard - CardContainer list will set the gap between cards
      }}
    >
      <Box
        sx={{
          gridColumn: SPAN_ALL_COLS,
          gridRow: 'span 1',
          alignSelf: 'end',
        }}
      >
        <Typography variant="headline1">{releaseName}</Typography>
      </Box>
      <Box
        sx={{
          gridColumn: SPAN_ALL_COLS,
          gridRow: 'span 1',
          mb: '30px',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            lineHeight: '20px',
            fontStyle: 'italic',
            color: 'grey.800',
          }}
        >{`Released ${releaseDate.value}`}</Typography>
      </Box>
      {stats.map(stat => (
        <StatGrid key={stat.label} {...stat} />
      ))}
      <Box
        sx={{
          gridColumn: SPAN_ALL_COLS,
          gridRow: 'span 1',
          mt: '20px',
          mb: '5px',
        }}
      >
        <Button
          component={ReactRouterLink}
          to={releaseCardConfig.requestAccessPath}
          sx={{ fontSize: '14px' }}
        >
          Request Access
        </Button>
      </Box>
      <Box
        sx={{
          gridColumn: SPAN_ALL_COLS,
          gridRow: 'span 1',
        }}
      >
        {releaseEntityId && (
          <Link
            href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${releaseEntityId}`}
            target="_blank"
            rel="noreferrer"
            sx={{
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            View on Synapse.org
          </Link>
        )}
      </Box>
    </Box>
  )
}
