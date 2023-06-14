import React, { ChangeEvent, useEffect, useState } from 'react'
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid'
import { formatDate } from '../../utils/functions/DateFormatter'
import dayjs from 'dayjs'
import { RadioOption } from '../widgets/RadioGroup'
import { ChallengeTeamSearch } from './ChallengeTeamSearch'
import { SkeletonTable } from '../Skeleton'
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

export type ChallengeTeamTableProps = {
  challengeId: string
  onSelectTeam: (team: Team) => void
}

type ChallengeTeamRow = {
  id: string
  name: string
  created: string
  description: string
}

export default function ChallengeTeamTable({
  challengeId,
  onSelectTeam,
}: ChallengeTeamTableProps) {
  const [allRows, setAllRows] = useState<ChallengeTeamRow[]>([])
  const [teamIdList, setTeamIdList] = useState<string[]>([])
  const [teamsById, setTeamsById] = useState<Record<string, Team>>({})
  const { data: regTeams } = useGetChallengeTeamList(challengeId)

  const [selectedTeam, setSelectedTeam] = useState<
    string | number | undefined
  >()

  const { data: teamsList, isLoading } = useGetTeamList(teamIdList, {
    enabled: !!teamIdList.length,
  })

  const teamChangeHandler = (value: string | number) => {
    setSelectedTeam(value)
    onSelectTeam(teamsById[value])
  }

  const getTeamRow = (team: Team): ChallengeTeamRow => {
    return {
      id: team.id,
      name: team.name,
      created: formatDate(dayjs(team.createdOn), 'MM/DD/YY'),
      description: team.description,
    }
  }

  useEffect(() => {
    const ids = regTeams?.map(team => team.teamId) ?? []
    setTeamIdList(ids)
  }, [regTeams])

  useEffect(() => {
    const teams =
      teamsList?.list.filter(team => team.canRequestMembership !== false) ?? []
    const row: ChallengeTeamRow[] = []
    const teamRecords = {}
    teams.forEach(team => {
      row.push(getTeamRow(team))
      teamRecords[team.id] = team
    })
    setAllRows(row)
    setTeamsById(teamRecords)
  }, [teamsList])

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase()
    const teams =
      teamsList?.list.filter(team => team.canRequestMembership !== false) ?? []
    let filtered = teams

    if (term.length) {
      filtered = teams.filter(team => {
        return (
          team.name.toLowerCase().includes(term) ||
          team.description?.toLowerCase().includes(term)
        )
      })
    }
    setAllRows(filtered.map(team => getTeamRow(team)))
  }

  const columns: GridColDef[] = [
    {
      field: 'radiobutton',
      headerName: '',
      width: 25,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: params => {
        return (
          <RadioOption
            value={params.id}
            currentValue={selectedTeam}
            onChange={teamChangeHandler}
            label=""
            groupId="radiogroup"
            style={{ marginBottom: '16px' }}
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
  ]
  return (
    <Box sx={{ height: 220 }}>
      {!isLoading && (
        <>
          <ChallengeTeamSearch
            onChange={searchHandler}
            rowCount={allRows.length}
          />
          <DataGrid
            rows={allRows}
            columns={columns}
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
            }}
            getRowClassName={params =>
              params.indexRelativeToCurrentPage % 2 === 0
                ? 'Mui-even'
                : 'Mui-odd'
            }
          />
        </>
      )}
      {isLoading && <SkeletonTable numRows={10} numCols={1} />}
    </Box>
  )
}
