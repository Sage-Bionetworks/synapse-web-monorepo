import SynapseClient from '@/synapse-client'
import { useGetOAuthClientInfinite } from '@/synapse-queries'
import { useSynapseContext } from '@/utils'
import { formatDate } from '@/utils/functions/DateFormatter'
import { AddCircleTwoTone } from '@mui/icons-material'
import { Box, Button, Link } from '@mui/material'
import { OAuthClient } from '@sage-bionetworks/synapse-client/generated/models/OAuthClient'
import {
  createColumnHelper,
  getCoreRowModel,
  Table,
  useReactTable,
} from '@tanstack/react-table'
import dayjs from 'dayjs'
import { useMemo, useState } from 'react'
import CopyToClipboardInput from '../CopyToClipboardInput/CopyToClipboardInput'
import { DialogBase } from '../DialogBase'
import WarningDialog from '../SynapseForm/WarningDialog'
import ColumnHeader from '../TanStackTable/ColumnHeader'
import StyledTanStackTable from '../TanStackTable/StyledTanStackTable'
import { displayToast } from '../ToastMessage'
import { CreateOAuthModal } from './CreateOAuthClient'

const columnHelper = createColumnHelper<OAuthClient>()
function getColumns(columnOptions: {
  setIsShowingVerification: (value: boolean) => void
  setSelectedClient: (value: OAuthClient) => void
  setIsShowingSecretWarning: (value: boolean) => void
  setIsEdit: (value: boolean) => void
  setIsShowingCreateClientModal: (value: boolean) => void
}) {
  const {
    setIsShowingVerification,
    setSelectedClient,
    setIsShowingSecretWarning,
    setIsEdit,
    setIsShowingCreateClientModal,
  } = columnOptions
  return [
    columnHelper.accessor('createdOn', {
      header: props => <ColumnHeader {...props} title={'Created'} />,
      cell: info => formatDate(dayjs(info.getValue())),
    }),
    columnHelper.accessor('modifiedOn', {
      header: props => <ColumnHeader {...props} title={'Modified'} />,
      cell: info => formatDate(dayjs(info.getValue())),
    }),
    columnHelper.accessor('client_id', {
      header: props => <ColumnHeader {...props} title={'ID'} />,
    }),
    columnHelper.accessor('client_name', {
      header: props => <ColumnHeader {...props} title={'Client'} />,
    }),
    columnHelper.accessor('verified', {
      header: props => <ColumnHeader {...props} title={'Verified'} />,
      cell: ({ getValue }) =>
        getValue() ? (
          'Yes'
        ) : (
          <Button
            variant="outlined"
            size="small"
            onClick={() => setIsShowingVerification(true)}
          >
            Submit Verification
          </Button>
        ),
    }),
    columnHelper.display({
      id: 'generateSecret',
      header: props => <ColumnHeader {...props} title={'App Secret'} />,
      cell: ({ row }) => (
        <Button
          variant="outlined"
          onClick={() => {
            setSelectedClient(row.original)
            setIsShowingSecretWarning(true)
          }}
          size="small"
        >
          Generate Secret
        </Button>
      ),
    }),
    columnHelper.display({
      id: 'actions',
      header: props => <ColumnHeader {...props} title={'Actions'} />,
      cell: ({ row }) => (
        <Button
          variant="outlined"
          onClick={() => {
            setSelectedClient(row.original)
            setIsEdit(true)
            setIsShowingCreateClientModal(true)
          }}
          size="small"
        >
          Edit
        </Button>
      ),
    }),
  ]
}

export function OAuthManagement() {
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
  const oAuthClientList = useMemo(
    () => data?.pages.flatMap(page => page.results || []) || [],
    [data],
  )

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

  const columns = useMemo(
    () =>
      getColumns({
        setIsShowingVerification,
        setSelectedClient,
        setIsShowingSecretWarning,
        setIsEdit,
        setIsShowingCreateClientModal,
      }),
    [],
  )

  const table: Table<OAuthClient> = useReactTable<OAuthClient>({
    data: oAuthClientList,
    columns,
    getRowId: row => row.client_id!,
    enableRowSelection: true,
    enableSorting: false,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
  })

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
          mb: 2,
        }}
      >
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
      </Box>
      <StyledTanStackTable table={table} />
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

export default OAuthManagement
