import { Stack, TextField, Typography } from '@mui/material'
import {
  instanceOfExternalObjectStoreUploadDestination,
  UploadDestination,
} from '@sage-bionetworks/synapse-client'
import { Dispatch, SetStateAction } from 'react'

type ExternalObjectStoreCredentialsFormProps = {
  uploadDestination?: UploadDestination
  accessKey: string
  setAccessKey: Dispatch<SetStateAction<string>>
  secretKey: string
  setSecretKey: Dispatch<SetStateAction<string>>
}

export function ExternalObjectStoreCredentialsForm(
  props: ExternalObjectStoreCredentialsFormProps,
) {
  const {
    uploadDestination,
    accessKey,
    setAccessKey,
    secretKey,
    setSecretKey,
  } = props

  if (
    uploadDestination == null ||
    !instanceOfExternalObjectStoreUploadDestination(uploadDestination) ||
    !uploadDestination.endpointUrl
  ) {
    return <></>
  }

  return (
    <Stack gap={1.5} mb={3}>
      <Typography>
        Authorization is required to access{' '}
        <strong>{uploadDestination.endpointUrl}</strong>
      </Typography>
      <TextField
        label={'Access Key'}
        fullWidth
        value={accessKey}
        onChange={e => {
          setAccessKey(e.target.value)
        }}
      />
      <TextField
        label={'Secret Key'}
        type={'password'}
        fullWidth
        value={secretKey}
        onChange={e => {
          setSecretKey(e.target.value)
        }}
      />
      <Typography variant={'smallText1'} fontStyle={'italic'}>
        Keys are used to locally sign a web request. They are not transmitted or
        stored by Synapse.
      </Typography>
    </Stack>
  )
}
