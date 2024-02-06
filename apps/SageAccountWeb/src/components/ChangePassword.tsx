import React, { useEffect, useState } from 'react'
import { Button, Link, TextField } from '@mui/material'
import {
  ChangePasswordWithCurrentPassword,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import {
  displayToast,
  SynapseClient,
  useSynapseContext,
} from 'synapse-react-client'
import { Link as RouterLink } from 'react-router-dom'
import { StyledFormControl } from './StyledComponents'

export type ChangePasswordProps = {
  onCancel?: () => void
}

export const ChangePassword = (props: ChangePasswordProps) => {
  const { accessToken } = useSynapseContext()
  const [oldPassword, setOldPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [currentUserProfile, setUserProfile] = useState<UserProfile>()

  useEffect(() => {
    async function getUserProfile() {
      const userProfile = await SynapseClient.getUserProfile(accessToken)
      setUserProfile(userProfile)
    }
    if (accessToken) {
      getUserProfile()
    } else {
      setUserProfile(undefined)
    }
  }, [accessToken])

  const handleChangePassword = async (
    clickEvent: React.FormEvent<HTMLElement>,
  ) => {
    clickEvent.preventDefault()
    try {
      if (newPassword !== confirmPassword) {
        displayToast('Passwords do not match.', 'danger')
      } else if (accessToken) {
        const changeRequest: ChangePasswordWithCurrentPassword = {
          newPassword,
          concreteType:
            'org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword',
          username: currentUserProfile?.userName!,
          currentPassword: oldPassword,
        }
        await SynapseClient.changePasswordWithCurrentPassword(
          changeRequest,
          accessToken,
        )
          .then(() => {
            displayToast('Successfully changed', 'success')
            props.onCancel && props.onCancel()
          })
          .catch((err: any) => displayToast(err.reason as string, 'danger'))
      }
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  return (
    <div className="changePassword">
      <form
        onSubmit={e => {
          handleChangePassword(e)
        }}
      >
        <StyledFormControl
          fullWidth
          required
          variant="standard"
          margin="normal"
        >
          <TextField
            fullWidth
            required
            type="password"
            id="currentPassword"
            name="currentPassword"
            label={'Current password'}
            onChange={e => setOldPassword(e.target.value)}
            value={oldPassword || ''}
          />
        </StyledFormControl>
        <StyledFormControl
          fullWidth
          required
          variant="standard"
          margin="normal"
        >
          <TextField
            fullWidth
            required
            type="password"
            id="newPassword"
            name="newPassword"
            label={'New password'}
            onChange={e => setNewPassword(e.target.value)}
            value={newPassword || ''}
          />
        </StyledFormControl>
        <StyledFormControl
          fullWidth
          required
          variant="standard"
          margin="normal"
          sx={{ marginBottom: '10px' }}
        >
          <TextField
            fullWidth
            required
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            label={'Confirm password'}
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword || ''}
          />
        </StyledFormControl>
        {props.onCancel && (
          <Button
            className="btn-container emptyButton"
            onClick={() => props.onCancel!()}
          >
            Cancel
          </Button>
        )}
        <div style={{ marginTop: '30px' }}>
          <Button
            sx={{ marginRight: '26px' }}
            disabled={!oldPassword || !newPassword || !confirmPassword}
            variant="contained"
            type="submit"
            onSubmit={e => {
              handleChangePassword(e)
            }}
          >
            Change Password
          </Button>
          <Link component={RouterLink} to="/resetPassword">
            Forgot password?
          </Link>
        </div>
      </form>
    </div>
  )
}
