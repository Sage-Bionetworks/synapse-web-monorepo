import { CalendarTodayTwoTone } from '@mui/icons-material'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { Fragment } from 'react'
import { Link as ReactRouterLink } from 'react-router'
import { ReleaseCardProps } from './ReleaseCard'
import { ReleaseCardLargeConfig, ReleaseCardStat } from './ReleaseCardTypes'
import {
  formatExplorePagePathAndQueryString,
  formatReleaseCardData,
} from './ReleaseCardUtils'

function StatFlex({ value, label }: ReleaseCardStat) {
  return (
    <Stack
      direction="column"
      alignItems="center"
      padding={{ xs: '20px 10px', md: '20px 40px' }}
      gap="10px"
      width={{ xs: 'unset', lg: '200px' }} // ensure that stats are aligned when multiple cards are stacked vertically
    >
      <Typography variant="headline1">{value}</Typography>
      <Typography variant="body1" lineHeight="20px" color="grey.700">
        {label}
      </Typography>
    </Stack>
  )
}

export type ReleaseCardLargeProps = Omit<
  ReleaseCardProps,
  'releaseCardConfig'
> & { releaseCardConfig: ReleaseCardLargeConfig }

export function ReleaseCardLarge({
  data,
  schema,
  includePortalCardClass = true,
  releaseCardConfig,
}: ReleaseCardLargeProps) {
  const { releaseName, releaseDate, stats } = formatReleaseCardData(
    schema,
    data,
    releaseCardConfig.releaseMetadataConfig,
    releaseCardConfig.statsConfig,
  )
  const { primaryBtnConfig, secondaryBtnConfig } = releaseCardConfig
  const primaryBtnPathAndQuery = formatExplorePagePathAndQueryString(
    schema,
    data,
    primaryBtnConfig,
  )
  const secondaryBtnPathAndQuery = formatExplorePagePathAndQueryString(
    schema,
    data,
    secondaryBtnConfig,
  )

  if (releaseName === null) return <></>

  return (
    <Box
      className={`ReleaseCard ${
        includePortalCardClass ? 'SRC-portalCard' : ''
      }`}
      minWidth="200px"
    >
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        justifyContent="space-between"
        gap="20px"
        padding="20px"
      >
        <Stack direction="column" gap="20px">
          <Stack direction="row" alignItems="center" gap="10px">
            <CalendarTodayTwoTone sx={{ color: 'grey.700' }} />
            <Typography variant="headline1">
              {releaseCardConfig.prependRelease && 'Release '}
              {releaseName}
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            gap="20px"
          >
            {primaryBtnConfig && primaryBtnPathAndQuery && (
              <Button
                component={ReactRouterLink}
                variant="contained"
                color="primary"
                to={primaryBtnPathAndQuery}
              >
                {primaryBtnConfig.label}
              </Button>
            )}
            {secondaryBtnConfig && secondaryBtnPathAndQuery && (
              <Button component={ReactRouterLink} to={secondaryBtnPathAndQuery}>
                {secondaryBtnConfig.label}
              </Button>
            )}
          </Stack>
        </Stack>
        <Divider /> {/* divides stacks when page is narrow */}
        <Stack
          direction="row"
          gap={{ xs: 0, lg: '10px' }}
          alignItems="center"
          justifyContent={{ xs: 'space-evenly', lg: 'unset' }}
          flexWrap={{ xs: 'wrap', lg: 'nowrap' }}
        >
          <StatFlex {...releaseDate} />
          {stats.map(stat => {
            return (
              <Fragment key={stat.label}>
                <Divider orientation="vertical" flexItem />
                <StatFlex {...stat} />
              </Fragment>
            )
          })}
        </Stack>
      </Stack>
    </Box>
  )
}
