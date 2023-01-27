import React, { useEffect, useState } from 'react'
import { SynapseClient } from 'synapse-react-client'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { getSearchParam, hexDecodeAndDeserialize } from 'URLUtils'
import {
  Box,
  Button,
  Chip,
  IconButton,
  InputLabel,
  TextField,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/DeleteTwoTone'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone'
import { StyledFormControl } from './StyledComponents'
import {
  useGetCurrentUserProfile,
  useGetNotificationEmail,
} from 'synapse-react-client/dist/utils/hooks/SynapseAPI'

export type ConfigureEmailProps = {
  returnToPath: string
}

export const ConfigureEmail = (props: ConfigureEmailProps) => {
  const { accessToken } = useSynapseContext()
  const { data: currentProfile, refetch: refetchCurrentProfile } =
    useGetCurrentUserProfile()
  const { data: primaryEmail, refetch: refetchNotificationEmail } =
    useGetNotificationEmail()
  const [newEmail, setNewEmail] = useState('')
  const emailVerificationToken = getSearchParam('emailValidationSignedToken')

  useEffect(() => {
    if (emailVerificationToken) {
      const hexDecodeEmailToken = hexDecodeAndDeserialize(
        emailVerificationToken,
      )
      try {
        SynapseClient.addEmailAddressStep2(
          hexDecodeEmailToken,
          accessToken,
        ).then(() => {
          displayToast('Email has been successfully added', 'success')
          history.replaceState(
            {},
            '',
            `${SynapseClient.getRootURL()}${props.returnToPath}`,
          )
        })
      } catch (err: any) {
        displayToast(err.reason as string, 'danger')
      }
    }
  }, [emailVerificationToken])

  const changePrimaryEmail = async (
    event: React.SyntheticEvent,
    email: string,
  ) => {
    event.preventDefault()
    try {
      await SynapseClient.updateNotificationEmail(email, accessToken)
      refetchNotificationEmail()
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const deleteEmail = async (event: React.SyntheticEvent, email: string) => {
    event.preventDefault()
    try {
      await SynapseClient.deleteEmail(accessToken, email)
      refetchCurrentProfile()
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const addEmail = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    try {
      const callbackUrl = `${SynapseClient.getRootURL()}${
        props.returnToPath
      }?emailValidationSignedToken=`
      await SynapseClient.addEmailAddressStep1(
        newEmail,
        currentProfile!.ownerId!,
        callbackUrl,
        accessToken,
      )
      displayToast(
        `We've sent an email to ${newEmail}. Please check your email to continue.`,
        'success',
      )
      setNewEmail('')
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const emails = currentProfile?.emails
  return (
    <div>
      {emails?.map(email => {
        if (email === primaryEmail?.email) {
          return (
            <Box
              key={email}
              sx={{ padding: '15px 0px', borderBottom: '1px solid #dcdcdc' }}
            >
              {email}{' '}
              <Chip
                sx={{ color: '#fff', marginLeft: '10px' }}
                label="PRIMARY"
                color="warning"
              />
            </Box>
          )
        } else {
          return (
            <Box
              key={email}
              sx={{
                display: 'flex',
                padding: '15px 0px',
                borderBottom: '1px solid #dcdcdc',
              }}
            >
              <Box sx={{ flexGrow: 1, marginRight: '10px' }}>{email}</Box>
              <Button
                variant="outlined"
                onClick={e => changePrimaryEmail(e, email)}
              >
                Make Primary
              </Button>
              <IconButton
                aria-label="close"
                onClick={e => deleteEmail(e, email)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          )
        }
      })}
      <StyledFormControl variant="standard" margin="normal" fullWidth>
        <InputLabel shrink>Add an email address</InputLabel>
        <Box sx={{ display: 'flex' }}>
          <TextField
            variant="filled"
            sx={{ flexGrow: 1, marginRight: '10px' }}
            value={newEmail}
            onChange={e => setNewEmail(e.target.value)}
          />
          <Button
            disabled={!newEmail}
            variant={'contained'}
            sx={{ alignSelf: 'flex-end', height: '47px' }}
            onClick={e => {
              addEmail(e)
            }}
          >
            <AddCircleTwoToneIcon /> Add
          </Button>
        </Box>
      </StyledFormControl>
    </div>
  )
}
