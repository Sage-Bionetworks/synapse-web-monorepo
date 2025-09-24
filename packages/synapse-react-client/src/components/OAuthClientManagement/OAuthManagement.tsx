import InfiniteTableLayout from '@/components/layout/InfiniteTableLayout'
import SynapseClient from '@/synapse-client'
import { useGetOAuthClientInfinite } from '@/synapse-queries'
import { MoreVert } from '@mui/icons-material'
import { useSynapseContext } from '@/utils'
import { formatDate } from '@/utils/functions/DateFormatter'
import { AddCircleTwoTone } from '@mui/icons-material'
import { Box, Button, Link, IconButton, Menu, MenuItem } from '@mui/material'
import { OAuthClient } from '@sage-bionetworks/synapse-client/generated/models/OAuthClient'
import {
  createColumnHelper,
  getCoreRowModel,
  Row,
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
import OAuthAclEditorModal from '../OAuthClientAclEditor/OAuthAclEditorModal'

const columnHelper = createColumnHelper<OAuthClient>()
function getColumns(columnOptions: {
  setIsShowingVerification: (value: boolean) => void
  setSelectedClient: (value: OAuthClient) => void
  setIsShowingSecretWarning: (value: boolean) => void
  setIsEdit: (value: boolean) => void
  setIsShowingCreateClientModal: (value: boolean) => void
  setIsShowingSharingSettings: (value: boolean) => void
}) {
  const {
    setIsShowingVerification,
    setSelectedClient,
    setIsShowingSecretWarning,
    setIsEdit,
    setIsShowingCreateClientModal,
    setIsShowingSharingSettings,
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
      id: 'actions',
      header: props => <ColumnHeader {...props} title={'Actions'} />,
      cell: ({ row }) => (
        <ActionsMenuCell
          row={row}
          setSelectedClient={setSelectedClient}
          setIsEdit={setIsEdit}
          setIsShowingCreateClientModal={setIsShowingCreateClientModal}
          setIsShowingSecretWarning={setIsShowingSecretWarning}
          setIsShowingSharingSettings={setIsShowingSharingSettings}
        />
      ),
    }),
  ]
}

function ActionsMenuCell({
  row,
  setSelectedClient,
  setIsEdit,
  setIsShowingCreateClientModal,
  setIsShowingSecretWarning,
  setIsShowingSharingSettings,
}: {
  row: Row<OAuthClient>
  setSelectedClient: (value: OAuthClient) => void
  setIsEdit: (value: boolean) => void
  setIsShowingCreateClientModal: (value: boolean) => void
  setIsShowingSecretWarning: (value: boolean) => void
  setIsShowingSharingSettings: (value: boolean) => void
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls={`actions-menu-${row.id}`}
        aria-haspopup="true"
        onClick={handleMenuOpen}
        size="small"
      >
        <MoreVert />
      </IconButton>
      <Menu
        id={`actions-menu-${row.id}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem
          onClick={() => {
            setSelectedClient(row.original)
            setIsEdit(true)
            setIsShowingCreateClientModal(true)
            handleMenuClose()
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSelectedClient(row.original)
            setIsShowingSecretWarning(true)
            handleMenuClose()
          }}
        >
          Generate Secret
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSelectedClient(row.original)
            setIsShowingSharingSettings(true)
            handleMenuClose()
          }}
        >
          Sharing Settings
        </MenuItem>
      </Menu>
    </>
  )
}

export function OAuthManagement() {
  const { accessToken } = useSynapseContext()
  const [isShowingSharingSettings, setIsShowingSharingSettings] =
    useState(false)
  const [isShowingCreateClientModal, setIsShowingCreateClientModal] =
    useState(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [selectedClient, setSelectedClient] = useState<OAuthClient>()
  const [isShowingConfirmModal, setIsShowingConfirmModal] = useState(false)
  const [isShowingSecretWarning, setIsShowingSecretWarning] = useState(false)
  const [isShowingSecret, setIsShowingSecret] = useState(false)
  const [secret, setSecret] = useState<string>()
  const [isShowingVerification, setIsShowingVerification] = useState(false)

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetOAuthClientInfinite()
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
        setIsShowingSharingSettings,
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

  const isEmpty = !isLoading && table.getRowModel().rows.length === 0

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
      <InfiniteTableLayout
        table={<StyledTanStackTable table={table} />}
        isLoading={isLoading}
        isEmpty={isEmpty}
        hasNextPage={hasNextPage}
        onFetchNextPageClicked={() => {
          void fetchNextPage()
        }}
        isFetchingNextPage={isFetchingNextPage}
      />
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
      <OAuthAclEditorModal
        clientId={selectedClient?.client_id!}
        open={isShowingSharingSettings}
        onClose={() => setIsShowingSharingSettings(false)}
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
