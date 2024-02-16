import React from 'react'
import { Stack, Typography } from '@mui/material'
import {
  AccessTokenGenerationRequest,
  scopeDescriptions,
} from '@sage-bionetworks/synapse-types'
import { CopyToClipboardInput } from '../CopyToClipboardInput/CopyToClipboardInput'
import { ErrorBanner } from '../error/ErrorBanner'
import loadingScreen from '../LoadingScreen/LoadingScreen'
import { Checkbox } from '../widgets/Checkbox'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'
import TextField from '../TextField/TextField'
import { useCreatePersonalAccessToken } from '../../synapse-queries/user/usePersonalAccessToken'
import { noop } from 'lodash-es'

const INVALID_INPUT_MSG =
  'You must provide a token name and at least one permission.'

export type CreateAccessTokenModalProps = {
  onClose?: () => void
  onCreate?: () => void
}

export function CreateAccessTokenModal(props: CreateAccessTokenModalProps) {
  const { onClose = noop, onCreate = noop } = props
  const [tokenName, setTokenName] = React.useState('')
  const [viewAccess, setViewAccess] = React.useState(true)
  const [downloadAccess, setDownloadAccess] = React.useState(false)
  const [modifyAccess, setModifyAccess] = React.useState(false)

  const [validationError, setValidationError] = React.useState<string | null>(
    null,
  )

  const {
    mutate,
    isPending: createIsPending,
    error: mutationError,
    data: createdTokenResponse,
  } = useCreatePersonalAccessToken()

  const handleTokenNameChange = (event: React.ChangeEvent) => {
    setTokenName((event.target as HTMLInputElement).value)
  }

  const validateInput = (tokenName: string, access: boolean[]): boolean => {
    return !!tokenName && access.some(x => x)
  }

  const onSubmit = () => {
    if (validateInput(tokenName, [viewAccess, downloadAccess, modifyAccess])) {
      setValidationError(null)

      const request: AccessTokenGenerationRequest = {
        scope: [],
        name: tokenName,
      }
      if (viewAccess) request.scope.push('view')
      if (downloadAccess) request.scope.push('download')
      if (modifyAccess) request.scope.push('modify')

      mutate(request)

      onCreate()
    } else {
      setValidationError(INVALID_INPUT_MSG)
    }
  }

  const dialogContent = createdTokenResponse ? (
    <>
      <Typography variant={'body1'}>
        <Typography variant={'body1'} component={'span'} fontWeight={700}>
          This token will not be able to be retrieved again.
        </Typography>{' '}
        If needed, generate a new personal access token, and delete this one.
      </Typography>
      <div>
        <CopyToClipboardInput
          value={createdTokenResponse.token}
          inputWidth={'350px'}
        />
      </div>
      <Typography variant={'body1'}>
        This token grants access to your account functions and should be treated
        like a password.
      </Typography>
    </>
  ) : (
    <div>
      <TextField
        autoFocus
        label="Token Name"
        value={tokenName}
        onChange={handleTokenNameChange}
        placeholder="e.g. Synapse command line access on my laptop"
        sx={{ mb: 2 }}
      />
      <Typography variant="label">Token Permissions</Typography>
      <Stack gap={2} my={1}>
        <Checkbox
          label={scopeDescriptions.view.displayName}
          checked={viewAccess}
          onChange={() => setViewAccess(!viewAccess)}
        >
          <Typography variant={'smallText1'} color={'grey.700'}>
            {scopeDescriptions.view.description}. Required to use Synapse
            programmatic clients.
          </Typography>
        </Checkbox>
        <Checkbox
          label={scopeDescriptions.download.displayName}
          checked={downloadAccess}
          onChange={() => setDownloadAccess(!downloadAccess)}
        >
          <Typography variant={'smallText1'} color={'grey.700'}>
            {scopeDescriptions.download.description}
          </Typography>
        </Checkbox>
        <Checkbox
          label={scopeDescriptions.modify.displayName}
          checked={modifyAccess}
          onChange={() => setModifyAccess(!modifyAccess)}
        >
          <Typography variant={'smallText1'} color={'grey.700'}>
            {scopeDescriptions.modify.description}
          </Typography>
        </Checkbox>
      </Stack>
      {validationError && <ErrorBanner error={validationError} />}
      {mutationError && <ErrorBanner error={mutationError.reason} />}
    </div>
  )

  return (
    <ConfirmationDialog
      open={true}
      title="Create New Personal Access Token"
      content={createIsPending ? loadingScreen : dialogContent}
      confirmButtonProps={{
        children: createdTokenResponse ? 'Close' : 'Create Token',
        variant: createdTokenResponse ? 'outlined' : 'contained',
      }}
      hasCancelButton={!createdTokenResponse}
      onCancel={onClose}
      onConfirm={
        createdTokenResponse
          ? () => onClose()
          : () => {
              void onSubmit()
            }
      }
    />
  )
}
