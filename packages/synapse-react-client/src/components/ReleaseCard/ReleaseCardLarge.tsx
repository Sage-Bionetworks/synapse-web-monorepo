import { CalendarTodayTwoTone } from '@mui/icons-material'
import { Box, Button, Divider, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { ReleaseCardProps } from './ReleaseCard'
import { ReleaseCardLargeConfig, ReleaseCardStat } from './ReleaseCardTypes'
import {
  createButtonToExploreDataPathAndQueryString,
  formatReleaseCardData,
} from './ReleaseCardUtils'

const StatFlex: React.FunctionComponent<ReleaseCardStat> = ({
  value,
  label,
}: ReleaseCardStat) => {
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

export const ReleaseCardLarge: React.FunctionComponent<
  ReleaseCardLargeProps
> = ({
  data,
  schema,
  includePortalCardClass = true,
  releaseCardConfig,
}: ReleaseCardLargeProps) => {
  const { releaseVersion, releaseDate, stats } = formatReleaseCardData(
    schema,
    data,
    releaseCardConfig.statsConfig,
  )
  const { buttonToExplorePageConfig } = releaseCardConfig
  const pathAndQuery = createButtonToExploreDataPathAndQueryString(
    schema,
    data,
    buttonToExplorePageConfig,
  )

  if (releaseVersion === null) return <></>

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
              {releaseVersion}
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            gap="20px"
          >
            {buttonToExplorePageConfig && pathAndQuery && (
              <Button variant="contained" color="primary" href={pathAndQuery}>
                {buttonToExplorePageConfig.label}
              </Button>
            )}
            {releaseCardConfig.dataGuidePath && (
              <Link href={releaseCardConfig.dataGuidePath}>
                View Data Guide
              </Link>
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
              <React.Fragment key={stat.label}>
                <Divider orientation="vertical" flexItem />
                <StatFlex {...stat} />
              </React.Fragment>
            )
          })}
        </Stack>
      </Stack>
    </Box>
  )
}
