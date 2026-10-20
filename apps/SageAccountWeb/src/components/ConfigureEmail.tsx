import React from 'react'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone'
import DeleteIcon from '@mui/icons-material/DeleteTwoTone'
import {
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { SyntheticEvent, useEffect, useState } from 'react'
import { getSearchParam, hexDecodeAndDeserialize } from '../URLUtils'
import { useSynapseContext } from 'synapse-react-client/utils/context/SynapseContext'
import {
  useGetCurrentUserProfile,
  useGetNotificationEmail,
} from 'synapse-react-client/synapse-queries/user/useUserBundle'
import { updateMyUserProfile } from 'synapse-react-client/synapse-client/SynapseClient'
import * as SynapseClient from 'synapse-react-client/synapse-client/SynapseClient'
import { displayToast } from 'synapse-react-client/components/ToastMessage/ToastMessage'
import { useGetCurrentRealm } from 'synapse-react-client/synapse-queries/realm/useRealmPrincipals'
import { SYNAPSE_REALM } from 'synapse-react-client/utils/SynapseConstants'
import Cookies from 'js-cookie'
import { ONE_SAGE_REDIRECT_COOKIE_KEY } from 'synapse-react-client/utils/AppUtils/AppUtils'
import { useAppContext } from '@/AppContext'

export type ConfigureEmailProps = {
  returnToPath: string
}

const UNDELIVERABLE_EMAIL_TEXT =
  'We can’t deliver email to this address. Until you set a working primary address, you won’t receive notifications about your account or data access. Choose another address below, or add a new one, and make it primary.'

export const ConfigureEmail = (props: ConfigureEmailProps): React.ReactNode => {
  const { accessToken } = useSynapseContext()
  const appContext = useAppContext()
  const { data: currentProfile, refetch: refetchCurrentProfile } =
    useGetCurrentUserProfile()
  const { data: primaryEmail, refetch: refetchNotificationEmail } =
    useGetNotificationEmail()
  const { data: currentRealm } = useGetCurrentRealm({
    select: realm => realm.id,
  })
  const [newEmail, setNewEmail] = useState('')
  const sendEmailNotifications =
    currentProfile?.notificationSettings?.sendEmailNotifications ?? true
  const emailVerificationToken = getSearchParam('emailValidationSignedToken')

  const updateEmailNotifications = async (
    newSendEmailNotificationsValue: boolean,
  ) => {
    try {
      if (currentProfile) {
        if (!currentProfile.notificationSettings) {
          currentProfile.notificationSettings = {
            sendEmailNotifications: true,
            markEmailedMessagesAsRead: false,
          }
        }
        currentProfile.notificationSettings.sendEmailNotifications =
          newSendEmailNotificationsValue
        await updateMyUserProfile(currentProfile, accessToken)
        await refetchCurrentProfile()
        displayToast(`Notification settings have been updated.`, 'success')
      }
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  useEffect(() => {
    if (emailVerificationToken) {
      const hexDecodeEmailToken = hexDecodeAndDeserialize(
        emailVerificationToken,
      )
      try {
        SynapseClient.addEmailAddressStep2(
          hexDecodeEmailToken,
          accessToken,
        ).then(async () => {
          // A quarantined primary means the user is replacing an undeliverable address,
          // so offer a way back to the source app page they were headed to
          const { data: notificationEmail } = await refetchNotificationEmail()
          const returnUrl =
            Cookies.get(ONE_SAGE_REDIRECT_COOKIE_KEY) ?? appContext.redirectURL
          if (notificationEmail?.quarantineStatus && returnUrl) {
            displayToast(
              <>
                Email has been successfully added.{' '}
                <Link href={returnUrl}>
                  Click here to pick up where you left off.
                </Link>
              </>,
              'success',
              { autoCloseInMs: 0 },
            )
          } else {
            displayToast('Email has been successfully added', 'success')
          }
          refetchCurrentProfile()
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

  const changePrimaryEmail = async (event: SyntheticEvent, email: string) => {
    event.preventDefault()
    try {
      await SynapseClient.updateNotificationEmail(email, accessToken)
      refetchNotificationEmail()
      displayToast('Notification email has been updated', 'success')
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const deleteEmail = async (event: SyntheticEvent, email: string) => {
    event.preventDefault()
    try {
      await SynapseClient.deleteEmail(accessToken, email)
      refetchCurrentProfile()
      displayToast('Email has been successfully removed', 'success')
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const addEmail = async (event: SyntheticEvent) => {
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
            <div key={email}>
              <Box sx={{ padding: '15px 0px' }}>
                {email}{' '}
                <Chip
                  sx={{
                    color: '#fff',
                    backgroundColor: 'var(--synapse-primary-action-color)',
                    marginLeft: '10px',
                  }}
                  label="PRIMARY"
                />
                {primaryEmail?.quarantineStatus && (
                  <>
                    <Chip
                      sx={{ color: '#fff', marginLeft: '10px' }}
                      label="UNDELIVERABLE"
                      color="error"
                    />
                    <Typography
                      variant="smallText1"
                      color="error"
                      sx={{ marginTop: '8px' }}
                    >
                      {UNDELIVERABLE_EMAIL_TEXT}
                    </Typography>
                  </>
                )}
              </Box>
              <Divider />
            </div>
          )
        } else {
          return (
            <>
              <Box
                key={email}
                sx={{
                  display: 'flex',
                  padding: '15px 0px',
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
              <Divider />
            </>
          )
        }
      })}
      <Stack
        sx={{
          my: 2,
          gap: 2,
        }}
      >
        {currentRealm === SYNAPSE_REALM && (
          <>
            <TextField
              label={'Add an email address'}
              id="additionalEmail"
              fullWidth
              value={newEmail}
              onChange={e => setNewEmail(e.target.value)}
            />
            <Button
              startIcon={<AddCircleTwoToneIcon />}
              disabled={!newEmail}
              variant={'contained'}
              onClick={e => {
                addEmail(e)
              }}
              sx={{
                alignSelf: 'flex-start',
              }}
            >
              Add
            </Button>
          </>
        )}
        <FormControlLabel
          control={
            <Checkbox
              checked={sendEmailNotifications}
              onChange={e => updateEmailNotifications(!sendEmailNotifications)}
            />
          }
          label={
            <Typography variant="smallText1">
              Allow Synapse to send me email notifications to my Primary email
              address.
            </Typography>
          }
        />
      </Stack>
    </div>
  )
}
