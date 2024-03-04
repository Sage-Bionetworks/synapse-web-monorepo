import React, { useMemo, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { formatDate } from '../../utils/functions/DateFormatter'
import dayjs from 'dayjs'
import { RadioOption } from '../widgets/RadioGroup'
import { ChallengeTeamSearch } from './ChallengeTeamSearch'
import { Team } from '@sage-bionetworks/synapse-types'
import {
  useGetAllOpenMembershipInvitations,
  useGetChallengeTeamList,
  useGetCurrentUserProfile,
  useGetTeamList,
} from '../../synapse-queries'
import { Box, Tooltip, Link } from '@mui/material'
import { BackendDestinationEnum, getEndpoint } from '../../utils/functions'
import { EmailTwoTone } from '@mui/icons-material'

export type ChallengeTeamTableProps = {
  challengeId: string
  selectedTeamId?: string
  onSelectTeam: (teamId?: string) => void
}

// Custom type for the challenge team table that combines fields from the Team and the ChallengeTeam record
type RowData = Team & {
  hasInvitation: boolean
}

/**
 * Table component that displays teams that
 *  1. are registered for the challenge specified by the challengeId prop
 *  2. the current user is able to join, create a request to join, or accept an invitation to join
 */
export default function ChallengeTeamTable(props: ChallengeTeamTableProps) {
  const { challengeId, onSelectTeam, selectedTeamId } = props
  const { data: registeredTeams, isLoading: isLoadingChallengeTeams } =
    useGetChallengeTeamList(challengeId)
  const { data: user } = useGetCurrentUserProfile()
  const { data: openInvitationsToJoinTeams } =
    useGetAllOpenMembershipInvitations(user?.ownerId!, {
      enabled: Boolean(user?.ownerId),
    })
  const [searchValue, setSearchValue] = useState('')
  const teamIdList = registeredTeams?.map(team => team.teamId) ?? []
  const { data: teamsList, isLoading: isLoadingTeamList } = useGetTeamList(
    teamIdList,
    {
      enabled: !!teamIdList.length,
    },
  )

  const allRows: RowData[] = useMemo(() => {
    const term = searchValue.toLowerCase()
    const teams =
      teamsList?.list.filter(
        team =>
          team.canPublicJoin ||
          // `canRequestMembership` is true by default if the property is not present
          team.canRequestMembership !== false ||
          openInvitationsToJoinTeams?.some(
            invitation => invitation.teamId === team.id,
          ),
      ) ?? []

    let filtered = teams
    if (term.length) {
      filtered = teams.filter(team => {
        return (
          team.name.toLowerCase().includes(term) ||
          team.description?.toLowerCase().includes(term)
        )
      })
    }
    return filtered.map(
      (team): RowData => ({
        ...team,
        hasInvitation: Boolean(
          openInvitationsToJoinTeams?.some(
            invitation => invitation.teamId === team.id,
          ),
        ),
      }),
    )
  }, [openInvitationsToJoinTeams, searchValue, teamsList?.list])

  const isLoading = isLoadingChallengeTeams || isLoadingTeamList

  const columns: GridColDef<RowData>[] = useMemo(
    () => [
      {
        field: 'radiobutton',
        headerName: '',
        width: 25,
        sortable: false,
        filterable: false,
        hideable: false,
        disableColumnMenu: true,
        renderCell: ({ row }) => {
          return (
            <RadioOption
              value={row.id}
              checked={String(row.id) === selectedTeamId}
              onChange={(teamId: string) => {
                onSelectTeam(teamId)
              }}
              label=""
              aria-label={`Select ${row.name}`}
            />
          )
        },
      },
      {
        field: 'name',
        headerName: 'Team Name',
        flex: 1,
        filterable: false,
        hideable: false,
        disableColumnMenu: true,
        renderCell: ({ row }) => (
          <Link
            href={`${getEndpoint(
              BackendDestinationEnum.PORTAL_ENDPOINT,
            )}/#!Team:${row.id}`}
            target="_blank"
            underline={'hover'}
          >
            {row.name}
          </Link>
        ),
      },
      {
        field: 'hasInvitation',
        headerName: '',
        width: 15,
        filterable: false,
        hideable: false,
        disableColumnMenu: true,
        align: 'center',
        renderCell: ({ value }) =>
          value ? (
            <Tooltip title={'You have been invited to join this team'}>
              <EmailTwoTone fontSize={'small'} sx={{ color: 'grey.700' }} />
            </Tooltip>
          ) : null,
      },
      {
        field: 'created',
        headerName: 'Created On',
        width: 100,
        filterable: false,
        hideable: false,
        disableColumnMenu: true,
        renderCell: ({ value }) => formatDate(dayjs(value), 'MM/DD/YY'),
      },
      {
        field: 'description',
        headerName: 'Description',
        flex: 1,
        filterable: false,
        hideable: false,
        disableColumnMenu: true,
      },
    ],
    [onSelectTeam, selectedTeamId],
  )

  return (
    <Box sx={{ height: 220 }}>
      {!isLoading && (
        <ChallengeTeamSearch
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          rowCount={allRows.length}
        />
      )}
      <DataGrid
        initialState={{
          sorting: {
            sortModel: [{ field: 'hasInvitation', sort: 'desc' }],
          },
        }}
        loading={isLoading}
        rows={allRows}
        columns={columns}
        rowCount={5}
        hideFooter
        density="compact"
        rowBuffer={5} // Buffer ensures all rows required in test are loaded.
        sx={{
          border: 'none',
          height: '100%',
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: '#F1F3F5',
          },
          '& .Mui-odd': {
            backgroundColor: '#FBFBFC',
          },
          '.MuiDataGrid-columnHeaderTitleContainer': {
            justifyContent: 'space-between',
          },
          '.radio': {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          },
        }}
        getRowClassName={params =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
        }
      />
    </Box>
  )
}
