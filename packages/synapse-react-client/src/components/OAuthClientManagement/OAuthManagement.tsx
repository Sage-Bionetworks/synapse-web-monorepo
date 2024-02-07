import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { formatDate } from '../../utils/functions/DateFormatter'
import dayjs from 'dayjs'
import { useGetOAuthClientInfinite } from '../../synapse-queries'
import { CreateOAuthModal } from './CreateOAuthClient'
import { OAuthClient } from '@sage-bionetworks/synapse-types'
import WarningDialog from '../SynapseForm/WarningDialog'
import SynapseClient from '../../synapse-client'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import CopyToClipboardInput from '../CopyToClipboardInput/CopyToClipboardInput'
import { displayToast } from '../ToastMessage/ToastMessage'
import { DialogBase } from '../DialogBase'
import { Button, Link } from '@mui/material'
import { AddCircleTwoTone } from '@mui/icons-material'

export const OAuthManagement: React.FunctionComponent = () => {
  const { accessToken } = useSynapseContext()
  const [isShowingCreateClientModal, setIsShowingCreateClientModal] =
    useState(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [selectedClient, setSelectedClient] = useState<OAuthClient>()
  const [isShowingConfirmModal, setIsShowingConfirmModal] = useState(false)
  const [isShowingSecretWarning, setIsShowingSecretWarning] = useState(false)
  const [isShowingSecret, setIsShowingSecret] = useState(false)
  const [secret, setSecret] = useState<string>()
  const [isShowingVerification, setIsShowingVerification] = useState(false)

  const { data, hasNextPage, fetchNextPage } = useGetOAuthClientInfinite()
  const oAuthClientList = data?.pages.flatMap(page => page.results) ?? []

  const warningHeader = 'Are you absolutely sure?'
  const warningBody =
    'If you have an existing secret, generating a new secret will make your application invalid after generation. This action cannot be undone.'

  const onShowSecret = async () => {
    setIsShowingSecretWarning(false)
    try {
      const secret = await SynapseClient.createOAuthClientSecret(
        accessToken!,
        selectedClient?.client_id!,
      )
      setSelectedClient(undefined)
      setIsShowingSecret(true)
      setSecret(secret.client_secret)
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  return (
    <div className="bootstrap-4-backport">
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setIsShowingCreateClientModal(true)
          setIsEdit(false)
        }}
        sx={{ float: 'right' }}
        startIcon={<AddCircleTwoTone />}
      >
        Create New Client
      </Button>
      <Table striped>
        <thead>
          <tr>
            <th>Created</th>
            <th>Modified</th>
            <th>ID</th>
            <th>Client</th>
            <th>Verified</th>
            <th>App Secret</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {oAuthClientList.map(item => {
            return (
              <tr key={item.client_id}>
                <td>{formatDate(dayjs(item.createdOn))}</td>
                <td>{formatDate(dayjs(item.modifiedOn))}</td>
                <td>{item.client_id}</td>
                <td>{item.client_name}</td>
                <td>
                  {item.verified ? (
                    'Yes'
                  ) : (
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => setIsShowingVerification(true)}
                    >
                      Submit Verification
                    </Button>
                  )}
                </td>
                <td>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setSelectedClient(item)
                      setIsShowingSecretWarning(true)
                    }}
                    size="small"
                  >
                    Generate Secret
                  </Button>
                </td>
                <td>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setSelectedClient(item)
                      setIsEdit(true)
                      setIsShowingCreateClientModal(true)
                    }}
                    size="small"
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      {hasNextPage && (
        <div className="text-center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              fetchNextPage()
            }}
          >
            Load more
          </Button>
        </div>
      )}

      <CreateOAuthModal
        onClose={() => {
          setIsShowingCreateClientModal(false)
        }}
        isShowingModal={isShowingCreateClientModal}
        client={isEdit ? selectedClient : undefined}
        isEdit={isEdit}
        setIsShowingConfirmModal={setIsShowingConfirmModal}
        isShowingConfirmModal={isShowingConfirmModal}
        setIsShowingModal={setIsShowingCreateClientModal}
      />
      <DialogBase
        open={isShowingVerification}
        onCancel={() => setIsShowingVerification(false)}
        title="Submit Verification"
        content={
          <>
            <p>
              In order to verify an OAuth client please submit a request to the{' '}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://sagebionetworks.jira.com/servicedesk/customer/portal/9"
              >
                Synapse Service Desk.
              </Link>
            </p>
            <b>Please list the following items in your request:</b>
            <ul>
              <li>Your name</li>
              <li>
                The ID of the client to be verified <br />
              </li>
              <li>A description of your application</li>
            </ul>
            {/* <p>
            Verification can take up to X weeks and we will notify you via X.
          </p> */}
          </>
        }
      />
      <WarningDialog
        open={isShowingSecretWarning}
        title={warningHeader}
        content={warningBody}
        onCancel={() => {
          setIsShowingSecretWarning(false)
          setSelectedClient(undefined)
        }}
        onConfirm={onShowSecret}
        confirmButtonColor="error"
        confirmButtonText="Yes, Continue"
      />
      {secret && (
        <DialogBase
          open={isShowingSecret}
          title="App Secret"
          onCancel={() => {
            setIsShowingSecret(false)
            setSecret(undefined)
          }}
          content={
            <>
              <p>
                <b>This secret will not be able to be retrieved again.</b> If
                needed, in order to generate a new secret select Generate from
                the Client List.
              </p>
              <CopyToClipboardInput value={secret} inputWidth={'400px'} />
            </>
          }
        />
      )}
    </div>
  )
}
