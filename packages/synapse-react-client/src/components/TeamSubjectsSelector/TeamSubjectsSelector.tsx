import { AddCircleTwoTone, HelpOutlineTwoTone } from '@mui/icons-material'
import {
  Alert,
  Box,
  Button,
  IconButton,
  InputLabel,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import {
  RestrictableObjectDescriptor,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import { noop } from 'lodash-es'
import React, { useMemo, useState } from 'react'
import IconSvg from '../IconSvg'
import { TeamBadgeOrError } from './TeamBadgeOrError'

export type TeamSubjectsSelectorProps = {
  // will be filtered to only team subjects
  subjects: RestrictableObjectDescriptor[]
  onUpdate: (subjects: RestrictableObjectDescriptor[]) => void
  onUpdateTeamIDsTextbox?: (value: string) => void // called when the team IDs text box is updated
}

export const TEAM_ALREADY_SELECTED = (teamId: string) =>
  `Team ${teamId} has already been added to this AR.`
export const TEAM_PARSING_ERROR = (teamId: string) =>
  `Parsing errors encountered. Invalid Team ID: ${teamId}`
export const NO_TEAMS_SELECTED = 'No teams selected.'
export const REMOVE_TEXT = 'Remove from Access Requirement'
export const HELP_TEXT = 'Enter Team IDs (i.e. 123, 456)'
const teamIdsStringDefault = ''

const TeamSubjectsSelector: React.FunctionComponent<
  TeamSubjectsSelectorProps
> = (props: TeamSubjectsSelectorProps) => {
  const { subjects, onUpdate, onUpdateTeamIDsTextbox = noop } = props
  const [teamIdsString, setTeamIdsString] =
    useState<string>(teamIdsStringDefault)
  const [error, setError] = useState<string | null>(null)

  const teamSubjects = useMemo(() => {
    return subjects.filter(subject => {
      return subject.type === RestrictableObjectType.TEAM ? subject : null
    })
  }, [subjects])

  const onChangeTeamIdsTextbox = (value: string) => {
    setTeamIdsString(value)
    onUpdateTeamIDsTextbox(value)
  }

  const onRemove = (subjectId: string) => {
    const updatedSubjects = teamSubjects.filter(subject => {
      return subject.id !== subjectId
    })
    onUpdate(updatedSubjects)
  }

  const onAddTeams = (teamIdsString: string | null) => {
    const teamIds = teamIdsString?.split(',').map(item => item.trim())
    const dedupedTeamIds = [...new Set(teamIds)]
    if (dedupedTeamIds && dedupedTeamIds.length > 0) {
      const updatedTeamSubjects = [...teamSubjects]
      for (const teamId of dedupedTeamIds) {
        const validId = /^\d+$/.test(teamId)
        const alreadyAdded = teamSubjects.some(subject => subject.id === teamId)
        if (!validId) {
          setError(TEAM_PARSING_ERROR(teamId))
          return
        } else if (alreadyAdded) {
          setError(TEAM_ALREADY_SELECTED(teamId))
          return
        } else {
          const newSubject: RestrictableObjectDescriptor = {
            id: teamId,
            type: RestrictableObjectType.TEAM,
          }
          updatedTeamSubjects.push(newSubject)
        }
      }
      onChangeTeamIdsTextbox(teamIdsStringDefault)
      onUpdate(updatedTeamSubjects)
    }
    setError(null)
  }

  return (
    <>
      <Box display="flex" flexWrap="wrap" gap="0px 15px" pb="10px">
        {teamSubjects.length === 0 && (
          <Typography variant="body1Italic" pb={2}>
            {NO_TEAMS_SELECTED}
          </Typography>
        )}
        {teamSubjects.map(subject => {
          return (
            <Stack
              key={subject.id}
              direction="row"
              alignItems="center"
              pb={1}
              data-testid="selected-team"
            >
              <TeamBadgeOrError teamId={subject.id} />
              <IconButton
                aria-label={REMOVE_TEXT}
                onClick={() => onRemove(subject.id)}
                sx={{
                  '&:hover': {
                    color: 'error.main',
                  },
                }}
              >
                <IconSvg icon={'delete'} fontSize={'inherit'} wrap={false} />
              </IconButton>
            </Stack>
          )
        })}
      </Box>
      <InputLabel htmlFor="teamIDs">Add Team IDs</InputLabel>
      <Stack direction="row" gap={1} alignItems="center" mb={2}>
        <TextField
          id="teamIDs"
          name="teamIDs"
          placeholder={HELP_TEXT}
          value={teamIdsString}
          onChange={event => onChangeTeamIdsTextbox(event.target.value)}
          fullWidth
        />
        <Button
          startIcon={<AddCircleTwoTone />}
          variant="outlined"
          sx={{ flexShrink: 0, height: '53px' }}
          onClick={() => onAddTeams(teamIdsString)}
          disabled={teamIdsString === ''}
        >
          Add Teams
        </Button>
        <Tooltip title={HELP_TEXT} placement="right">
          <HelpOutlineTwoTone sx={{ color: 'grey.600' }} />
        </Tooltip>
      </Stack>
      {error && <Alert severity="warning">{error}</Alert>}
    </>
  )
}

export default TeamSubjectsSelector
