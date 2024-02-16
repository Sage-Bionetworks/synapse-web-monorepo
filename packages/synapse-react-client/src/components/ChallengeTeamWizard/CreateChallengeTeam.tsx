import React, { useEffect, useImperativeHandle, useState } from 'react'
import { Alert, Box, Typography } from '@mui/material'
import TextField from '../TextField'
import { CreateTeamRequest, Team } from '@sage-bionetworks/synapse-types'
import useCreateAndRegisterChallengeTeam from './useCreateAndRegisterChallengeTeam'
import { noop } from 'lodash-es'

type CreateChallengeTeamProps = {
  challengeId: string
  onCanSubmitChange?: (canSubmit: boolean) => void
  onFinished?: (teamId: string) => void
}

const INVITEE_LIMIT = 3
const TOO_MANY_INVITEES_ERROR =
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
    const [invitees, setInvitees] = useState('')

    const handleTeamUpdate = (update: Partial<Team>) => {
      const updatedTeam: CreateTeamRequest = { ...team, ...update }
      setTeam(updatedTeam)
    }

    const numberOfInvitees = invitees.split(',').length
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
            const inviteeEmails = invitees
              .split(',')
              .map(email => email.trim())
              .filter(email => Boolean(email))

            createAndRegisterTeam(
              team,
              challengeId,
              inviteeEmails,
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
        challengeId,
        createAndRegisterTeam,
        invitationMessage,
        invitees,
        onFinished,
        team,
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
          value={invitees}
          fullWidth
          onChange={event => setInvitees(event.target.value)}
          disabled={mutationIsPending}
        />
        {(tooManyInvitees || errors) && (
          <Alert severity="error">
            {tooManyInvitees && (
              <Typography variant={'body1'}>
                {TOO_MANY_INVITEES_ERROR}
              </Typography>
            )}
            {(errors || []).map(error => (
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
