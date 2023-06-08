import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { ChangePasswordWithCurrentPassword } from '@sage-bionetworks/synapse-types'
import { displayToast } from '../ToastMessage/ToastMessage'
import SynapseClient from '../../synapse-client'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { UserProfile } from '@sage-bionetworks/synapse-types'

export const ChangePassword: React.FunctionComponent = () => {
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
        displayToast(
          'New password and confirm password does not match.',
          'danger',
        )
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
          .then(() => displayToast('Successfully changed', 'success'))
          .catch((err: any) => displayToast(err.reason as string, 'danger'))
      }
    } catch (err) {
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
        <TextField
          id="oldPassword"
          label="Current Password"
          type="password"
          onChange={e => setOldPassword(e.target.value)}
          value={oldPassword}
          fullWidth
        />
        <TextField
          id="newPassword"
          label="New Password"
          type="password"
          onChange={e => setNewPassword(e.target.value)}
          value={newPassword}
          fullWidth
          margin="normal"
        />
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          onChange={e => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onSubmit={e => {
            handleChangePassword(e)
          }}
          sx={{ mt: 2 }}
        >
          Change Password
        </Button>
      </form>
    </div>
  )
}

export default ChangePassword
