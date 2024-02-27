import React, { useMemo, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { formatDate } from '../../utils/functions/DateFormatter'
import dayjs from 'dayjs'
import { RadioOption } from '../widgets/RadioGroup'
import { ChallengeTeamSearch } from './ChallengeTeamSearch'
import { Team } from '@sage-bionetworks/synapse-types'
import { useGetChallengeTeamList, useGetTeamList } from '../../synapse-queries'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { BackendDestinationEnum, getEndpoint } from '../../utils/functions'

export type ChallengeTeamTableProps = {
  challengeId: string
  selectedTeamId?: string
  onSelectTeam: (teamId?: string) => void
}

// Custom type for the challenge team table that combines fields from the Team and the ChallengeTeam record
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
  const { data: registeredTeams, isLoading: isLoadingChallengeTeams } =
    useGetChallengeTeamList(challengeId)
  const [searchValue, setSearchValue] = useState('')
  const teamIdList = registeredTeams?.map(team => team.teamId) ?? []
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
          // `canRequestMembership` is true by default if the property is not present
          team.canRequestMembership !== false,
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
  }, [searchValue, teamsList?.list])

  const isLoading = isLoadingChallengeTeams || isLoadingTeamList

  const columns: GridColDef<ChallengeTeamRow>[] = useMemo(
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
            to={{
              pathname: `${getEndpoint(
                BackendDestinationEnum.PORTAL_ENDPOINT,
              )}/#!Team:${row.id}`,
            }}
            target="_blank"
          >
            {row.name}
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
