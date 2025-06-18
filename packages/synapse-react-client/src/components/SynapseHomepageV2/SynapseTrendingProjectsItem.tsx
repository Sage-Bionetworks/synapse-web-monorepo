import { ReactComponent as EgressIcon } from '@/assets/homepage/egress.svg'

import { ReactComponent as UsersIcon } from '@/assets/homepage/users.svg'
import { useGetEntityHeader } from '@/synapse-queries'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import { NavigateNext } from '@mui/icons-material'
import Box from '@mui/material/Box'
import { SxProps } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { Color } from '@mui/material/styles'

export type SynapseTrendingProjectItemProps = {
  rank: number
  rowValues: (string | null)[]
  entityIdColIndex: number
  nUniqueUsersColIndex: number
  egressSizeGbColIndex: number
  projectDescriptionColumnIndex: number
  altLinkColIndex: number
  isMobileView: boolean
}

const formatter = Intl.NumberFormat('en')
export const trendingProjectsGridTemplateColumns: SxProps = {
  gridTemplateColumns: {
    xs: '100px auto 40px',
    sm: '100px auto 170px 150px 40px',
  },
}

export function SynapseTrendingProjectItem({
  rank,
  rowValues,
  entityIdColIndex,
  nUniqueUsersColIndex,
  egressSizeGbColIndex,
  projectDescriptionColumnIndex,
  altLinkColIndex,
  isMobileView,
}: SynapseTrendingProjectItemProps) {
  const theme = useTheme()
  const entityId = rowValues[entityIdColIndex]
  const egressSize = rowValues[egressSizeGbColIndex]
  const altLink = rowValues[altLinkColIndex]
  const { data: entityHeader } = useGetEntityHeader(entityId!, undefined, {
    enabled: !!entityId,
  })
  const friendlyEgressSize = egressSize
    ? calculateFriendlyFileSize(parseFloat(egressSize) * 1e9)
    : ''

  const projectDescription = rowValues[projectDescriptionColumnIndex]

  const userCount = rowValues[nUniqueUsersColIndex]
  const friendlyUserCount = userCount
    ? formatter.format(parseInt(userCount))
    : ''
  let backgroundColor = (theme.palette.primary as unknown as Color)[700]
  let borderRadius
  switch (rank) {
    case 1:
      backgroundColor = '#447A74'
      borderRadius = '12px 12px 0px 0px'
      break
    case 2:
      backgroundColor = '#33575E'
      break
    case 3:
      backgroundColor = '#294251'
      break
    case 10:
      borderRadius = '0px 0px 12px 12px'
      break
  }
  const displayedName = projectDescription ?? entityHeader?.name
  const egress = (
    <Typography variant="body1">
      <EgressIcon />
      {friendlyEgressSize}
    </Typography>
  )
  const users = (
    <Typography variant="body1">
      <UsersIcon />
      {friendlyUserCount}
    </Typography>
  )
  return (
    <div
      onClick={() => {
        if (altLink) {
          window.open(altLink, '_blank')
        } else {
          window.open(
            `${getEndpoint(
              BackendDestinationEnum.PORTAL_ENDPOINT,
            )}Synapse:${entityId!}`,
            '_blank',
          )
        }
      }}
    >
      <Box
        sx={{
          color: 'primary.100',
          backgroundColor,
          borderRadius,
          '&:hover': {
            color: 'white',
            cursor: 'pointer',
            filter: 'brightness(105%)',
          },
          p: '15px 0px',
          display: 'grid',
          ...trendingProjectsGridTemplateColumns,
          justifyItems: 'start',
          svg: { m: '0 3px -3px 0' },
        }}
      >
        <Typography variant="body1" sx={{ ml: '30px' }}>
          {rank}
        </Typography>
        <Box>
          <Typography variant="body1">{displayedName}</Typography>
          {isMobileView && (
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {egress}
              {users}
            </Box>
          )}
        </Box>

        {!isMobileView && egress}
        {!isMobileView && users}
        <Box>
          <NavigateNext />
        </Box>
      </Box>
    </div>
  )
}
