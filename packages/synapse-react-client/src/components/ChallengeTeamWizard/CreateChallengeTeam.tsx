import React, { useEffect, useImperativeHandle, useMemo, useState } from 'react'
import { Alert, Box, Typography } from '@mui/material'
import TextField from '../TextField'
import { CreateTeamRequest, Team } from '@sage-bionetworks/synapse-types'
import useCreateAndRegisterChallengeTeam from './useCreateAndRegisterChallengeTeam'
import { isEmpty, noop } from 'lodash-es'
import { parse } from 'papaparse'

type CreateChallengeTeamProps = {
  challengeId: string
  onCanSubmitChange?: (canSubmit: boolean) => void
  onFinished?: (teamId: string) => void
}

const INVITEE_LIMIT = 3
export const TOO_MANY_INVITEES_ERROR =
  'Please limit the initial number of invited members to three. You may add additional members after the team has been created.'

export type CreateChallengeTeamHandle = {
  // Allow the parent component to trigger a submit of the form, so this may be embedded in an arbitrary modal.
  submit: () => void
}

export const CreateChallengeTeam = React.forwardRef(
  function CreateChallengeTeam(
    props: CreateChallengeTeamProps,
    ref: React.ForwardedRef<CreateChallengeTeamHandle>,
  ) {
    const { challengeId, onCanSubmitChange = noop, onFinished = noop } = props
    const [team, setTeam] = useState<CreateTeamRequest>({
      name: '',
      description: '',
    })
    const [invitationMessage, setInvitationMessage] = useState('')
    const [rawInvitees, setRawInvitees] = useState('')

    const handleTeamUpdate = (update: Partial<Team>) => {
      const updatedTeam: CreateTeamRequest = { ...team, ...update }
      setTeam(updatedTeam)
    }

    const { inviteesParseResult, parsedInvitees } = useMemo(() => {
      const inviteesParseResult = parse<string[]>(rawInvitees, {
        delimiter: ',',
        transform(value) {
          return value.trim()
        },
      })
      const parsedInvitees: string[] = inviteesParseResult.data[0] || []

      return { inviteesParseResult, parsedInvitees }
    }, [rawInvitees])

    const numberOfInvitees = parsedInvitees.length
    const tooManyInvitees = numberOfInvitees > INVITEE_LIMIT

    const formDataIsValid = Boolean(
      team && team.name && team.name.length > 1 && !tooManyInvitees,
    )

    useEffect(() => {
      onCanSubmitChange(formDataIsValid)
    }, [formDataIsValid, onCanSubmitChange])

    const {
      createAndRegisterTeam,
      isPending: mutationIsPending,
      errors,
    } = useCreateAndRegisterChallengeTeam()

    useImperativeHandle(
      ref,
      () => {
        return {
          submit() {
            if (!formDataIsValid) {
              console.warn(
                'Attempted to submit when form data was not valid. Nothing will happen.',
              )
              return
            }
            createAndRegisterTeam(
              team,
              challengeId,
              parsedInvitees,
              invitationMessage,
            )
              .then(([newTeam]) => {
                onFinished(newTeam.id)
              })
              .catch(() => {
                // The hook will return errors, so no need to handle them here
              })
          },
        }
      },
      [
        formDataIsValid,
        parsedInvitees,
        createAndRegisterTeam,
        team,
        challengeId,
        invitationMessage,
        onFinished,
      ],
    )

    return (
      <Box>
        <Typography variant="body1" sx={{ lineHeight: '20px' }}>
          Create a new team for this Challenge!
        </Typography>
        <TextField
          id="name"
          label="Team Name"
          value={team.name}
          fullWidth
          autoFocus
          required
          onChange={event => handleTeamUpdate({ name: event.target.value })}
          disabled={mutationIsPending}
        />
        <Box display="flex">
          <TextField
            id="description"
            label={
              <Box display="flex" gap={2}>
                <Box>Team Description</Box>
              </Box>
            }
            value={team.description}
            fullWidth
            multiline
            rows={4}
            onChange={event =>
              handleTeamUpdate({ description: event.target.value })
            }
            disabled={mutationIsPending}
          />
        </Box>
        <Box display="flex">
          <TextField
            id="message"
            label={
              <Box display="flex" gap={2}>
                <Box>Recruitment Message</Box>
              </Box>
            }
            value={invitationMessage}
            fullWidth
            multiline
            rows={4}
            onChange={event => setInvitationMessage(event.target.value)}
            disabled={mutationIsPending}
          />
        </Box>
        <TextField
          id="invitees"
          label="Emails of Additional Members to Invite (max 3)"
          placeholder="Enter emails separated by comma"
          value={rawInvitees}
          fullWidth
          onChange={event => setRawInvitees(event.target.value)}
          disabled={mutationIsPending}
        />
        {(tooManyInvitees ||
          !isEmpty(inviteesParseResult.errors) ||
          errors) && (
          <Alert severity="error">
            {tooManyInvitees && (
              <Typography variant={'body1'}>
                {TOO_MANY_INVITEES_ERROR}
              </Typography>
            )}
            {inviteesParseResult.errors.map((error, index) => (
              <Typography key={index} variant={'body1'}>
                {error.message}
              </Typography>
            ))}
            {errors &&
              errors.map(error => (
                <Typography key={error.reason} variant={'body1'}>
                  {error.reason}
                </Typography>
              ))}
          </Alert>
        )}
      </Box>
    )
  },
)
