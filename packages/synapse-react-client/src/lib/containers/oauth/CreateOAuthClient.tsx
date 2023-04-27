import React, { useEffect, useMemo, useState } from 'react'
import { useSynapseContext } from '../../utils/SynapseContext'
import { Alert, Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { displayToast } from '../ToastMessage'
import { Typography } from '@mui/material'
import { OAuthClient } from '../../utils/synapseTypes/OAuthClient'
import {
  useCreateOAuthClient,
  useDeleteOAuthClient,
  useUpdateOAuthClient,
} from '../../utils/hooks/SynapseAPI'
import IconSvg from '../IconSvg'
import { WarningDialog } from '../synapse_form_wrapper/WarningDialog'
import { HelpOutlineTwoTone } from '@mui/icons-material'
import { Tooltip } from '@mui/material'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { SynapseSpinner } from '../LoadingScreen'
import { SynapseClient } from '../../utils'
import { useDebouncedEffect } from '../../utils/hooks'

const INPUT_CHANGE_DEBOUNCE_DELAY_MS = 500

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

  return (
    <div className="bootstrap-4-backport">
      <Modal
        show={isShowingModal && !isShowingConfirmModal}
        animation={false}
        backdrop="static"
        onHide={() => {
          hide()
          setError(undefined)
        }}
        size="lg"
        className="OAuthDialog bootstrap-4-backport"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {isEdit ? 'Client Details' : 'Create New OAuth Client'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoadingUpdate && (
            <div className={'SRC-center-text'}>
              <SynapseSpinner size={40} />
            </div>
          )}
          {!isLoadingUpdate && (
            <>
              <Typography variant="body1">
                To protect you and your users, your consent screen and
                application will need to be verified by Sage Bionetworks. Before
                your consent screen and application are verified by Sage
                Bionetworks, you can still test your application with
                limitations.
              </Typography>

              {isEdit && (
                <Typography style={{ marginTop: '16px' }} variant="label">
                  Client ID: {client?.client_id}
                </Typography>
              )}
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Group className="required">
                    <Form.Label htmlFor="clientName">Client Name</Form.Label>
                    <Form.Control
                      required
                      onChange={e => setClientName(e.target.value)}
                      placeholder="Client Name"
                      type="text"
                      value={clientName}
                      id="clientName"
                    />
                  </Form.Group>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Label className="required" htmlFor="clientUri">
                    Client Homepage
                  </Form.Label>
                  <Form.Control
                    onChange={e => setClientUri(e.target.value)}
                    placeholder="https://"
                    type="text"
                    value={clientUri}
                    id="clientUri"
                  />
                </Col>
              </Row>
              <Row>
                {!isEdit && (
                  <>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <Form.Group className="required">
                        <Form.Label htmlFor="redirect-uri-0">
                          Redirect URI(s)
                        </Form.Label>
                        <Tooltip title={uriHelpMessage} placement="top">
                          <HelpOutlineTwoTone className={`HelpButton`} />
                        </Tooltip>
                        {redirectUris?.map((singleUri, idx) => (
                          <div key={idx}>
                            <Form.Control
                              name="uri"
                              required
                              id={`redirect-uri-${idx}`}
                              onChange={e => handleUriChange(e, idx)}
                              value={singleUri.uri}
                              placeholder="https://"
                              type="text"
                            />
                            {redirectUris.length > 1 && (
                              <button
                                onClick={() => handleRedirectUriRemove(idx)}
                              >
                                <IconSvg
                                  icon="delete"
                                  sx={{ color: 'error.main' }}
                                />
                              </button>
                            )}

                            {redirectUris.length - 1 === idx && (
                              <Button
                                onClick={handleRedirectUriAdd}
                                disabled={singleUri.uri.length === 0}
                              >
                                Add URI
                              </Button>
                            )}
                          </div>
                        ))}
                      </Form.Group>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <Form.Label>Sector Identifier URI</Form.Label>
                      <Form.Control
                        onChange={e => setSectorUri(e.target.value)}
                        placeholder="https://"
                        type="text"
                      />
                    </Col>
                  </>
                )}
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Label>Link to Privacy Policy</Form.Label>
                  <Form.Control
                    onChange={e => setPolicyUri(e.target.value)}
                    placeholder="https://"
                    type="text"
                    value={policyUri}
                  />
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Label>Links to Terms of Service</Form.Label>
                  <Form.Control
                    onChange={e => setTosUri(e.target.value)}
                    placeholder="https://"
                    type="text"
                    value={tosUri}
                  />
                </Col>
              </Row>
              {isEdit && (
                <div className="danger">
                  <Typography
                    style={{ marginTop: '8px' }}
                    color="error"
                    variant="headline3"
                  >
                    DANGER ZONE
                  </Typography>
                  <Typography variant="smallText1">
                    Editing the following information will render your client
                    invalid and will require you to create it again and resubmit
                    verification if needed.
                  </Typography>
                  <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <Form.Label htmlFor="redirect-uri-0">
                        Redirect URI(s)
                      </Form.Label>
                      <Tooltip title={uriHelpMessage} placement="top">
                        <HelpOutlineTwoTone className={`HelpButton`} />
                      </Tooltip>

                      {redirectUris?.map((singleUri, idx) => (
                        <div key={idx}>
                          <Form.Control
                            id={`redirect-uri-${idx}`}
                            required
                            name="uri"
                            onChange={e => handleUriChange(e, idx)}
                            value={singleUri.uri}
                            placeholder="https://"
                            type="text"
                          />
                          {redirectUris.length > 1 && (
                            <button
                              onClick={() => handleRedirectUriRemove(idx)}
                            >
                              <IconSvg
                                icon="delete"
                                sx={{ color: 'error.main' }}
                              />
                            </button>
                          )}

                          {redirectUris.length - 1 === idx && (
                            <Button
                              onClick={handleRedirectUriAdd}
                              disabled={singleUri.uri.length === 0}
                            >
                              Add Uri
                            </Button>
                          )}
                        </div>
                      ))}
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <Form.Label>Sector Identifier URI</Form.Label>
                      <Form.Control
                        onChange={e => setSectorUri(e.target.value)}
                        placeholder="https://"
                        type="text"
                        value={sectorUri}
                      />
                    </Col>
                  </Row>

                  <button
                    className="delete-button"
                    onClick={() => {
                      setIsDelete(true)
                      setIsShowingConfirmModal(true)
                    }}
                  >
                    <IconSvg icon="delete" sx={{ color: 'error.main' }} />
                    DELETE CLIENT
                  </button>
                </div>
              )}
            </>
          )}
        </Modal.Body>
        {error && <Alert variant="danger">{error?.reason}</Alert>}
        <Modal.Footer>
          <Button
            variant="default"
            onClick={() => {
              hide()
              setError(undefined)
            }}
          >
            CANCEL
          </Button>
          <Button variant="primary" onClick={onCreateClient}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
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
    </div>
  )
}
