import React, { ChangeEvent, useImperativeHandle, useState } from 'react'
import { Alert, Box, TextField, Typography } from '@mui/material'
import {
  useGetCurrentUserProfile,
  useGetTeam,
  useRequestToJoinTeam,
} from '../../synapse-queries'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { noop } from 'lodash-es'

type JoinRequestFormProps = {
  teamId: string
  onRequestSubmitted: () => void
}

export type MembershipRequestFormHandle = {
  // Allow the parent component to trigger a submit of the form, so this may be embedded in an arbitrary modal.
  submit: () => void
}

/**
 * Component that provides a form that a user can use to create a MembershipRequest for a Team.
 *
 * To submit the form, pass a ref and call the `submit` handle on the ref.
 */
export const MembershipRequestForm = React.forwardRef(
  function MembershipRequestForm(
    props: JoinRequestFormProps,
    ref: React.ForwardedRef<MembershipRequestFormHandle>,
  ) {
    const { teamId, onRequestSubmitted = noop } = props
    const [message, setMessage] = useState<string>('')

    const { data: userProfile } = useGetCurrentUserProfile()

    const {
      data: team,
      status,
      error,
    } = useGetTeam(teamId, { enabled: !!teamId })

    const { mutate: requestToJoinTeam } = useRequestToJoinTeam({
      onSuccess: () => {
        onRequestSubmitted()
      },
    })
    const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.target.value
      setMessage(value)
    }

    useImperativeHandle(
      ref,
      () => {
        return {
          submit() {
            if (userProfile) {
              requestToJoinTeam({
                teamId: teamId,
                userId: userProfile.ownerId,
                message: message,
                expiresOn: undefined,
              })
            }
          },
        }
      },
      [message, requestToJoinTeam, teamId, userProfile],
    )

    if (status === 'pending') {
      return (
        <Box display="flex" flexDirection="column" gap={1}>
          <SynapseSpinner />
        </Box>
      )
    }

    if (status === 'error') {
      return <Alert severity={'error'}>{error.message}</Alert>
    }

    return (
      <>
        <Typography variant="body1" sx={{ lineHeight: '20px' }}>
          The following message will be sent to the Team Manager(s) of the{' '}
          <strong>{team.name}</strong> team.
        </Typography>
        <Box>
          <TextField
            label={'Your Message to Team Managers(s)'}
            id="membershipRequestMessage"
            value={message}
            fullWidth
            multiline
            rows={4}
            autoFocus
            onChange={handleMessageChange}
          />
        </Box>
      </>
    )
  },
)
