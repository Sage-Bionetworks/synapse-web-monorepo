import * as React from 'react'
import {
  Button,
  Form,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
} from 'react-bootstrap'
import { SynapseClient } from '../../utils'
import { useSynapseContext } from '../../utils/SynapseContext'
import { AccessTokenGenerationRequest } from '../../utils/synapseTypes/AccessToken/AccessTokenGenerationRequest'
import { scopeDescriptions } from '../../utils/synapseTypes/AccessToken/ScopeDescriptions'
import { CopyToClipboardInput } from '../CopyToClipboardInput'
import { ErrorBanner } from '../error/ErrorBanner'
import loadingScreen from '../LoadingScreen'
import { Checkbox } from '../widgets/Checkbox'

const INVALID_INPUT_MSG =
  'You must provide a token name and at least one permission.'

export type CreateAccessTokenModalProps = {
  onClose: (...args: any[]) => void
  onCreate: (...args: any[]) => void
}

export const CreateAccessTokenModal: React.FunctionComponent<
  CreateAccessTokenModalProps
> = ({ onClose, onCreate }: CreateAccessTokenModalProps) => {
  const { accessToken } = useSynapseContext()
  const [tokenName, setTokenName] = React.useState('')
  const [viewAccess, setViewAccess] = React.useState(true)
  const [downloadAccess, setDownloadAccess] = React.useState(false)
  const [modifyAccess, setModifyAccess] = React.useState(false)

  const [isLoading, setIsLoading] = React.useState(false)

  const [showCreatedToken, setShowCreatedToken] = React.useState(false)
  const [createdToken, setCreatedToken] = React.useState('')

  const [errorMessage, setErrorMessage] = React.useState('')
  const [showErrorMessage, setShowErrorMessage] = React.useState(false)

  const handleTokenNameChange = (event: React.ChangeEvent) => {
    setTokenName((event.target as HTMLInputElement).value)
  }

  const validateInput = (tokenName: string, access: boolean[]): boolean => {
    return !!tokenName && access.some(x => x)
  }

  const onSubmit = async (
    clickEvent: React.MouseEvent<HTMLElement, MouseEvent>,
  ): Promise<void> => {
    clickEvent.preventDefault()
    if (validateInput(tokenName, [viewAccess, downloadAccess, modifyAccess])) {
      try {
        const request: AccessTokenGenerationRequest = {
          scope: [],
          name: tokenName,
        }
        if (viewAccess) request.scope.push('view')
        if (downloadAccess) request.scope.push('download')
        if (modifyAccess) request.scope.push('modify')

        setIsLoading(true)

        const response = await SynapseClient.createPersonalAccessToken(
          request,
          accessToken,
        )

        setIsLoading(false)
        setCreatedToken(response.token)
        setShowCreatedToken(true)
        onCreate()
      } catch (err) {
        setIsLoading(false)
        setErrorMessage(err.reason)
        setShowErrorMessage(true)
      }
    } else {
      setErrorMessage(INVALID_INPUT_MSG)
      setShowErrorMessage(true)
    }
  }

  return (
    <Modal
      className={'bootstrap-4-backport AccessTokenModal'}
      animation={false}
      show={true}
      onHide={onClose}
      backdrop="static"
    >
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>Create New Personal Access Token</Modal.Title>
        </Modal.Header>
        <ModalBody>
          {isLoading ? (
            loadingScreen
          ) : showCreatedToken ? (
            <>
              <span className="SRC-boldText">
                This token will not be able to be retrieved again.
              </span>{' '}
              <span>
                If needed, generate a new personal access token, and delete this
                one.
              </span>
              <div className="AccessTokenModal__CopyToClipboardContainer">
                <CopyToClipboardInput
                  value={createdToken}
                  inputWidth={'350px'}
                />
              </div>
              <p>
                This token grants access to your account functions and should be
                treated like a password.
              </p>
            </>
          ) : (
            <div className="SRC-marginFive">
              <div className="SRC-marginBottomTen">
                <FormLabel className="SRC-boldText">Token Name</FormLabel>
                <FormControl
                  autoFocus
                  className="AccessTokenModal__TokenNameInput"
                  value={tokenName}
                  onChange={handleTokenNameChange}
                  type="text"
                  placeholder="e.g. Synapse command line access on my laptop"
                ></FormControl>
              </div>
              <div className="SRC-marginBottomTop">
                <FormLabel className="SRC-boldText">
                  Token Permissions
                </FormLabel>
                <Checkbox
                  label={scopeDescriptions.view.displayName}
                  checked={viewAccess}
                  onChange={() => setViewAccess(!viewAccess)}
                >
                  <div className="AccessTokenModal__ScopeDescription">
                    {scopeDescriptions.view.description}. Required to use
                    Synapse programmatic clients.
                  </div>
                </Checkbox>
                <Checkbox
                  label={scopeDescriptions.download.displayName}
                  checked={downloadAccess}
                  onChange={() => setDownloadAccess(!downloadAccess)}
                >
                  <div className="AccessTokenModal__ScopeDescription">
                    {scopeDescriptions.download.description}
                  </div>
                </Checkbox>
                <Checkbox
                  label={scopeDescriptions.modify.displayName}
                  checked={modifyAccess}
                  onChange={() => setModifyAccess(!modifyAccess)}
                >
                  <div className="AccessTokenModal__ScopeDescription">
                    {scopeDescriptions.modify.description}
                  </div>
                </Checkbox>
              </div>
              <div className="SRC-center-text">
                {showErrorMessage && (
                  <ErrorBanner error={errorMessage}></ErrorBanner>
                )}
              </div>
            </div>
          )}
        </ModalBody>
        <Modal.Footer>
          {showCreatedToken ? (
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          ) : (
            <>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" variant="sds-primary" onClick={onSubmit}>
                Create Token
              </Button>
            </>
          )}
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
