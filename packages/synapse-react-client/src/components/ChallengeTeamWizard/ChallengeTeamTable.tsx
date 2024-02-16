import React, { useMemo, useState } from 'react'
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid'
import { formatDate } from '../../utils/functions/DateFormatter'
import dayjs from 'dayjs'
import { RadioOption } from '../widgets/RadioGroup'
import { ChallengeTeamSearch } from './ChallengeTeamSearch'
import { Team } from '@sage-bionetworks/synapse-types'
import {
  useGetChallengeTeamList,
  useGetTeamList,
} from '../../synapse-queries/team/useTeamList'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import { useGetAllOpenMembershipInvitations } from '../../synapse-queries/team/useTeamMembers'
import { useGetCurrentUserProfile } from '../../synapse-queries'

export type ChallengeTeamTableProps = {
  challengeId: string
  selectedTeamId?: string
  onSelectTeam: (teamId?: string) => void
}

type ChallengeTeamRow = {
  id: string
  name: string
  created: string
  description?: string
}

const getTeamRow = (team: Team): ChallengeTeamRow => {
  return {
    id: team.id,
    name: team.name,
    created: formatDate(dayjs(team.createdOn), 'MM/DD/YY'),
    description: team.description,
  }
}

export default function ChallengeTeamTable(props: ChallengeTeamTableProps) {
  const { challengeId, onSelectTeam, selectedTeamId } = props
  const { data: regTeams, isLoading: isLoadingChallengeTeams } =
    useGetChallengeTeamList(challengeId)
  const { data: user } = useGetCurrentUserProfile()
  const { data: openInvitationsToJoinTeams } =
    useGetAllOpenMembershipInvitations(user?.ownerId!, {
      enabled: Boolean(user?.ownerId),
    })
  const [searchValue, setSearchValue] = useState('')
  const teamIdList = regTeams?.map(team => team.teamId) ?? []
  const { data: teamsList, isLoading: isLoadingTeamList } = useGetTeamList(
    teamIdList,
    {
      enabled: !!teamIdList.length,
    },
  )

  const allRows: ChallengeTeamRow[] = useMemo(() => {
    const term = searchValue.toLowerCase()
    const teams =
      teamsList?.list.filter(
        team =>
          team.canPublicJoin ||
          team.canRequestMembership ||
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
    return filtered.map(team => getTeamRow(team))
  }, [openInvitationsToJoinTeams, searchValue, teamsList?.list])

  const isLoading = isLoadingChallengeTeams || isLoadingTeamList

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: '',
        headerName: '',
        width: 25,
        sortable: false,
        filterable: false,
        hideable: false,
        disableColumnMenu: true,
        renderCell: params => {
          return (
            <RadioOption
              value={String(params.id)}
              onChange={() => {
                onSelectTeam(params.row.id)
              }}
              checked={params.api.isRowSelected(params.id)}
              label=""
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
        renderCell: (params: GridCellParams<Team, ChallengeTeamRow>) => (
          <Link
            to={{
              pathname: `${getEndpoint(
                BackendDestinationEnum.PORTAL_ENDPOINT,
              )}/#!Team:${params.row.id}`,
            }}
            target="_blank"
          >
            {params.row.name}
          </Link>
        ),
      },
      {
        field: 'created',
        headerName: 'Created On',
        width: 100,
        filterable: false,
        hideable: false,
        disableColumnMenu: true,
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
    [onSelectTeam],
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
        loading={isLoading}
        rows={allRows}
        columns={columns}
        rowSelectionModel={selectedTeamId ? [selectedTeamId] : []}
        rowCount={5}
        hideFooter
        density="compact"
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
