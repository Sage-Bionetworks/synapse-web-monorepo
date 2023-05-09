import React, { useEffect, useMemo, useState } from 'react'
import { useSynapseContext } from '../../utils/SynapseContext'
import { displayToast } from '../ToastMessage'
import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  InputLabel,
  TextField as MuiTextField,
  Tooltip,
  Typography,
} from '@mui/material'
import { OAuthClient } from '../../utils/synapseTypes/OAuthClient'
import {
  useCreateOAuthClient,
  useDeleteOAuthClient,
  useUpdateOAuthClient,
} from '../../utils/hooks/SynapseAPI'
import { WarningDialog } from '../synapse_form_wrapper/WarningDialog'
import { HelpOutlineTwoTone } from '@mui/icons-material'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { SynapseSpinner } from '../LoadingScreen'
import { SynapseClient } from '../../utils'
import { useDebouncedEffect } from '../../utils/hooks'
import { ConfirmationDialog } from '../ConfirmationDialog'
import StyledFormControl from '../../components/styled/StyledFormControl'
import TextField from '../TextField'

const INPUT_CHANGE_DEBOUNCE_DELAY_MS = 500
const GRID_NARROW = 12
const GRID_WIDE = 6
const GRID_ROW_SPACING = 1
const GRID_COL_SPACING = 2

export type CreateOAuthModalProps = {
  isShowingModal: boolean
  isEdit: boolean
  onClose: () => void
  setIsShowingConfirmModal: (a: boolean) => void
  isShowingConfirmModal: boolean
  client?: OAuthClient
  setIsShowingModal: (a: boolean) => void
}

export const CreateOAuthModal: React.FunctionComponent<
  CreateOAuthModalProps
> = ({
  isShowingModal = false,
  isEdit,
  onClose,
  client,
  setIsShowingConfirmModal,
  isShowingConfirmModal,
  setIsShowingModal,
}) => {
  const { accessToken } = useSynapseContext()
  const [clientName, setClientName] = useState('')
  const [redirectUris, setRedirectUris] = useState([{ uri: '' }])
  const [policyUri, setPolicyUri] = useState<string>()
  const [clientUri, setClientUri] = useState<string>()
  const [sectorUri, setSectorUri] = useState<string | undefined>()
  const [tosUri, setTosUri] = useState<string>()
  const [warnTrigger, setWarnTrigger] = useState(false)
  const [isDelete, setIsDelete] = useState<boolean>(false)
  const [updatedClient, setUpdatedClient] = useState<OAuthClient>()
  const [error, setError] = useState<SynapseClientError>()

  const warningHeader = 'Are you absolutely sure?'
  const warningBody =
    'Editing this detail will render your client invalid and will require you to resubmit verification. This action cannot be undone.'
  const uriHelpMessage = 'Click Add URI to add more Redirect URIs'

  // Return the OAuth Client definition based on the current client-side UI state
  const oAuthClient: OAuthClient = useMemo(() => {
    return {
      client_id: client?.client_id,
      client_name: clientName,
      redirect_uris: redirectUris?.map(str => str.uri) ?? [''],
      policy_uri: policyUri,
      client_uri: clientUri,
      sector_identifier_uri: sectorUri ?? '',
      tos_uri: tosUri,
      etag: client?.etag,
    }
  }, [
    client?.client_id,
    client?.etag,
    clientName,
    clientUri,
    policyUri,
    redirectUris,
    sectorUri,
    tosUri,
  ])

  useEffect(() => {
    setClientName(client?.client_name ?? '')
    setRedirectUris(
      client?.redirect_uris.map(str => ({ uri: str })) ?? [{ uri: '' }],
    )
    setPolicyUri(client?.policy_uri ?? '')
    setClientUri(client?.client_uri ?? '')
    setSectorUri(client?.sector_identifier_uri ?? undefined)
    setTosUri(client?.tos_uri ?? '')
  }, [isShowingModal, client])

  useDebouncedEffect(
    () => {
      if (accessToken) {
        // SWC-6365: use the pre-check service to determine if we need to show a warning on edit
        SynapseClient.isOAuthClientReverificationRequired(
          oAuthClient,
          accessToken,
        ).then(precheckResult => {
          setWarnTrigger(precheckResult.reverificationRequired)
        })
      }
    },
    [accessToken, oAuthClient],
    INPUT_CHANGE_DEBOUNCE_DELAY_MS,
  )

  const hide = () => {
    setClientName('')
    setRedirectUris([{ uri: '' }])
    setPolicyUri('')
    setClientUri('')
    setSectorUri('')
    setTosUri('')
    onClose()
  }

  const hideConfirmModal = () => {
    setIsShowingConfirmModal(false)
    setIsDelete(false)
  }

  const { mutate: createClient } = useCreateOAuthClient({
    onSuccess: () => {
      displayToast('Successfully created', 'success')
      setError(undefined)
      hide()
    },
    onError: err => {
      setError(err)
    },
  })

  const { mutate: updateClient, isLoading: isLoadingUpdate } =
    useUpdateOAuthClient({
      onSuccess: () => {
        displayToast('Successfully saved', 'success')
        setError(undefined)
        hide()
      },
      onError: err => {
        setError(err)
        setIsShowingModal(true)
      },
    })

  const { mutate: deleteClient } = useDeleteOAuthClient({
    onSuccess: () => {
      displayToast('Successfully deleted', 'success')
      hide()
    },
    onError: error => {
      displayToast(error.reason, 'danger')
    },
  })

  const onCreateClient = () => {
    try {
      if (accessToken) {
        setUpdatedClient(oAuthClient)
        if (warnTrigger === true) {
          setIsShowingConfirmModal(true)
        } else {
          if (isEdit) {
            updateClient(oAuthClient)
          } else {
            createClient(oAuthClient)
          }
        }
      }
    } catch (err) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const handleRedirectUriAdd = () => {
    if (redirectUris) {
      setRedirectUris([...redirectUris, { uri: '' }])
    }
  }

  const handleRedirectUriRemove = (index: number) => {
    if (redirectUris) {
      const list = [...redirectUris]
      list.splice(index, 1)
      setRedirectUris(list)
    }
  }

  const handleUriChange = (e: any, index: number) => {
    if (redirectUris) {
      const { name, value } = e.target
      const list = [...redirectUris]
      list[index][name] = value
      setRedirectUris(list)
    }
  }

  const sectorIdentifierURIInput = (
    <StyledFormControl fullWidth variant="standard" margin="normal">
      <InputLabel
        htmlFor="sectorURI"
        sx={{
          color: isEdit ? 'error.main' : undefined,
          fontWeight: 700,
          mb: '4px',
        }}
      >
        Sector Identifier URI
      </InputLabel>
      <MuiTextField
        onChange={e => setSectorUri(e.target.value)}
        placeholder="https://"
        type="text"
        value={sectorUri}
        id="sectorURI"
      />
    </StyledFormControl>
  )

  const redirectURIInputs = (
    <StyledFormControl fullWidth variant="standard" margin="normal">
      <InputLabel
        htmlFor="redirect-uri-0"
        required
        sx={{
          color: isEdit ? 'error.main' : undefined,
          fontWeight: 700,
          mb: '4px',
          pointerEvents: 'auto',
          zIndex: 1,
        }}
      >
        Redirect URI(s)
        <Tooltip title={uriHelpMessage} placement="top">
          <HelpOutlineTwoTone
            className={`HelpButton`}
            sx={{ float: 'right' }}
          />
        </Tooltip>
      </InputLabel>
      {redirectUris?.map((singleUri, idx) => (
        <div key={idx}>
          <Box display="flex" gap="2px">
            <MuiTextField
              name="uri"
              fullWidth
              id={`redirect-uri-${idx}`}
              onChange={e => handleUriChange(e, idx)}
              value={singleUri.uri}
              placeholder="https://"
              type="text"
            />
            {redirectUris.length > 1 && (
              <IconButton
                sx={{ mt: '24px', width: '50px' }}
                onClick={() => handleRedirectUriRemove(idx)}
              >
                <DeleteTwoToneIcon sx={{ color: 'error.main' }} />
              </IconButton>
            )}
          </Box>

          {redirectUris.length - 1 === idx && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleRedirectUriAdd}
              disabled={singleUri.uri.length === 0}
              sx={{ my: '10px' }}
            >
              Add URI
            </Button>
          )}
        </div>
      ))}
    </StyledFormControl>
  )

  const content = (
    <>
      {isLoadingUpdate && (
        <div className={'SRC-center-text'}>
          <SynapseSpinner size={40} />
        </div>
      )}
      {!isLoadingUpdate && (
        <>
          <Typography variant="body1" mb={'10px'}>
            To protect you and your users, your consent screen and application
            will need to be verified by Sage Bionetworks. Before your consent
            screen and application are verified by Sage Bionetworks, you can
            still test your application with limitations.
          </Typography>

          {isEdit && (
            <Typography sx={{ mt: '16px' }} variant="label">
              Client ID: {client?.client_id}
            </Typography>
          )}
          <Grid
            container
            rowSpacing={GRID_ROW_SPACING}
            columnSpacing={GRID_COL_SPACING}
          >
            <Grid item md={GRID_WIDE} xs={GRID_NARROW}>
              <TextField
                label="Client Name"
                required
                onChange={e => setClientName(e.target.value)}
                placeholder="Client Name"
                type="text"
                value={clientName}
                id="clientName"
              />
            </Grid>
            <Grid item md={GRID_WIDE} xs={GRID_NARROW}>
              <TextField
                label="Client Homepage"
                onChange={e => setClientUri(e.target.value)}
                placeholder="https://"
                type="text"
                value={clientUri}
                id="clientUri"
              />
            </Grid>
            {!isEdit && (
              <>
                <Grid item md={GRID_WIDE} xs={GRID_NARROW}>
                  {redirectURIInputs}
                </Grid>
                <Grid item md={GRID_WIDE} xs={GRID_NARROW}>
                  {sectorIdentifierURIInput}
                </Grid>
              </>
            )}
            <Grid item md={GRID_WIDE} xs={GRID_NARROW}>
              <TextField
                label="Link to Privacy Policy"
                onChange={e => setPolicyUri(e.target.value)}
                placeholder="https://"
                type="text"
                value={policyUri}
              />
            </Grid>
            <Grid item md={GRID_WIDE} xs={GRID_NARROW}>
              <TextField
                label="Links to Terms of Service"
                onChange={e => setTosUri(e.target.value)}
                placeholder="https://"
                type="text"
                value={tosUri}
              />
            </Grid>
          </Grid>
          {isEdit && (
            <Box
              sx={{ backgroundColor: 'rgb(178, 36, 42, 0.03)' }}
              mt="10px"
              padding="8px"
            >
              <Typography sx={{ mt: '8px' }} color="error" variant="headline3">
                DANGER ZONE
              </Typography>
              <Typography variant="smallText1">
                Editing the following information will render your client
                invalid and will require you to create it again and resubmit
                verification if needed.
              </Typography>
              <Grid
                container
                rowSpacing={GRID_ROW_SPACING}
                columnSpacing={GRID_COL_SPACING}
              >
                <Grid item md={GRID_WIDE} xs={GRID_NARROW}>
                  {redirectURIInputs}
                </Grid>
                <Grid item md={GRID_WIDE} xs={GRID_NARROW}>
                  {sectorIdentifierURIInput}
                </Grid>
              </Grid>

              <Button
                onClick={() => {
                  setIsDelete(true)
                  setIsShowingConfirmModal(true)
                }}
                color="error"
                variant="text"
                startIcon={<DeleteTwoToneIcon />}
                sx={{ padding: 0, mb: '8px' }}
              >
                DELETE CLIENT
              </Button>
            </Box>
          )}
        </>
      )}
      {error && <Alert severity="error">{error?.reason}</Alert>}
    </>
  )

  return (
    <>
      <ConfirmationDialog
        open={isShowingModal && !isShowingConfirmModal}
        onCancel={() => {
          hide()
          setError(undefined)
        }}
        maxWidth="md"
        title={isEdit ? 'Client Details' : 'Create New OAuth Client'}
        content={content}
        onConfirm={onCreateClient}
        confirmButtonText="Save"
      />
      <WarningDialog
        open={isShowingConfirmModal}
        title={warningHeader}
        content={warningBody}
        onCancel={hideConfirmModal}
        onConfirm={() => {
          isDelete
            ? deleteClient(client?.client_id!)
            : updateClient(updatedClient!)
          hideConfirmModal()
        }}
        confirmButtonColor="error"
        confirmButtonText="Yes, Continue"
      />
    </>
  )
}
