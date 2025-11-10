import InfiniteTableLayout from '@/components/layout/InfiniteTableLayout'
import {
  useGetWebhooksInfinite,
  useResendVerificationCode,
} from '@/synapse-queries/webhook/useWebhook'
import { formatDate } from '@/utils/functions/DateFormatter'
import { AddCircleTwoTone } from '@mui/icons-material'
import {
  Box,
  Button,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import {
  SynapseObjectType,
  Webhook,
  WebhookVerificationStatus,
} from '@sage-bionetworks/synapse-client'
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import dayjs from 'dayjs'
import { upperFirst } from 'lodash-es'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { EntityLink } from '../EntityLink'
import { HelpPopover } from '../HelpPopover/HelpPopover'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import StyledTanStackTable from '../TanStackTable/StyledTanStackTable'
import CreateWebhookModal from './CreateWebhookModal'
import { WebhookVerificationDialog } from './WebhookVerificationDialog'

const WEBHOOK_CAN_RESEND_CODE_STATES: WebhookVerificationStatus[] = [
  WebhookVerificationStatus.FAILED,
  WebhookVerificationStatus.REVOKED,
]

const columnHelper = createColumnHelper<Webhook>()

function getWebhookTableColumns(
  onClickVerifyWebhook: (webhook: Webhook) => void,
  onClickResendVerificationCode: (webhook: Webhook) => void,
  onClickEditWebhook: (webhook: Webhook) => void,
) {
  return [
    columnHelper.accessor('id', {
      header: 'ID',
      size: 75,
      cell: ctx => ctx.cell.getValue(),
    }),
    columnHelper.display({
      header: 'Object',
      cell: ctx => {
        if (ctx.row.original.objectType === SynapseObjectType.ENTITY) {
          return (
            <>
              <EntityLink entity={ctx.row.original.objectId!} /> (syn
              {ctx.row.original.objectId})
            </>
          )
        }
        return `${ctx.row.original.objectType}: ${ctx.row.original.objectId}`
      },
    }),
    columnHelper.accessor('eventTypes', {
      header: 'Event Type(s)',
      cell: ctx => (
        <Stack>
          {Array.from<string>(ctx.cell.getValue()!)
            .map(s => s.toLowerCase())
            .map(upperFirst)
            .map(val => (
              <span key={val}>{val}</span>
            ))}
        </Stack>
      ),
    }),
    columnHelper.accessor('isEnabled', {
      header: 'Enabled',
      size: 10,
      cell: ctx => (ctx.cell.getValue() ? 'Yes' : 'No'),
    }),
    columnHelper.accessor('createdOn', {
      header: 'Created On',
      cell: ({ getValue }) => formatDate(dayjs(getValue())),
    }),
    columnHelper.accessor('modifiedOn', {
      header: 'Modified On',
      cell: ({ getValue }) => formatDate(dayjs(getValue())),
    }),
    columnHelper.accessor('verificationStatus', {
      header: 'Verification Status',
      cell: ctx => (
        <Stack
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1,
          }}
        >
          {ctx.row.original.verificationStatus === 'PENDING' && (
            // useEffect above will trigger a refetch until this resolves
            <SynapseSpinner size={20} />
          )}
          {ctx.row.original.verificationStatus !==
            WebhookVerificationStatus.PENDING &&
            upperFirst(
              (ctx.row.original.verificationStatus || '')
                .toLowerCase()
                .replaceAll('_', ' '),
            )}
          {ctx.row.original.verificationMsg && (
            <HelpPopover markdownText={ctx.row.original.verificationMsg} />
          )}
        </Stack>
      ),
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      size: 10,
      meta: {
        textAlign: 'right',
      },
      cell: ctx => (
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {ctx.row.original.verificationStatus ===
            WebhookVerificationStatus.CODE_SENT && (
            <Button
              variant={'outlined'}
              onClick={() => {
                onClickVerifyWebhook(ctx.row.original)
              }}
            >
              Verify code
            </Button>
          )}

          {WEBHOOK_CAN_RESEND_CODE_STATES.includes(
            ctx.row.original.verificationStatus as WebhookVerificationStatus,
          ) && (
            <Button
              variant={'outlined'}
              onClick={() => {
                onClickResendVerificationCode(ctx.row.original)
              }}
            >
              Resend code
            </Button>
          )}
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              onClickEditWebhook(ctx.row.original)
            }}
          >
            Edit
          </Button>
        </Stack>
      ),
    }),
  ]
}

export default function WebhookDashboard() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showVerificationDialog, setShowVerificationDialog] = useState(false)
  const [webhookToUpdate, setWebhookToUpdate] = useState<Webhook | undefined>(
    undefined,
  )

  const theme = useTheme()
  const hideOptionalColumns = useMediaQuery(theme.breakpoints.down('md'))

  const {
    data: infiniteData,
    refetch,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = useGetWebhooksInfinite()
  const webhooks = useMemo(
    () => infiniteData?.pages.flatMap(page => page.page!) ?? [],
    [infiniteData],
  )

  // If the Webhook verification status is PENDING, Synapse may not have sent the verification code, or may have not reported a response.
  // Refetch on an interval to check if the verification status has changed.
  useEffect(() => {
    let intervalId: NodeJS.Timeout
    if (webhooks.some(webhook => webhook.verificationStatus === 'PENDING')) {
      intervalId = setInterval(() => {
        void refetch()
      }, 2500)
    }
    return () => clearInterval(intervalId)
  }, [refetch, webhooks])

  const { mutate: resendVerificationCode } = useResendVerificationCode()

  const onClickVerifyWebhook = useCallback((webhook: Webhook) => {
    setWebhookToUpdate(webhook)
    setShowVerificationDialog(true)
  }, [])
  const onClickEditWebhook = useCallback((webhook: Webhook) => {
    setWebhookToUpdate(webhook)
    setShowCreateModal(true)
  }, [])
  const onClickResendVerificationCode = useCallback(
    (webhook: Webhook) => {
      resendVerificationCode(webhook.id!)
    },
    [resendVerificationCode],
  )

  const columns = useMemo(
    () =>
      getWebhookTableColumns(
        onClickVerifyWebhook,
        onClickResendVerificationCode,
        onClickEditWebhook,
      ),
    [onClickEditWebhook, onClickResendVerificationCode, onClickVerifyWebhook],
  )

  const webhookTable = useReactTable<Webhook>({
    data: webhooks,
    columns: columns,
    state: {
      columnVisibility: {
        createdOn: !hideOptionalColumns,
        modifiedOn: !hideOptionalColumns,
      },
    },
    getCoreRowModel: getCoreRowModel(),
  })

  const isEmpty = !isLoading && webhookTable.getRowModel().rows.length === 0

  return (
    <div>
      <WebhookVerificationDialog
        key={webhookToUpdate?.id}
        open={showVerificationDialog}
        onClose={() => setShowVerificationDialog(false)}
        webhookId={webhookToUpdate?.id!}
      />
      <Typography variant={'headline3'}>Webhook Dashboard</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          my: 2,
          gap: 3,
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <Typography variant={'body1'} gutterBottom>
            Webhooks can be used to programmatically receive alerts that are
            triggered by events in Synapse. A webhook can specify a Synapse
            entity to receive events related to that entity. For entities that
            represent a container (folder and project), matching events are
            published to the webhook endpoint for any entity in its hierarchy.
          </Typography>
          <Typography variant={'body1'} gutterBottom>
            For more information, see the{' '}
            <Link
              href={
                'http://dev.release.rest.doc.sagebase.org.s3-website-us-east-1.amazonaws.com/index.html#org.sagebionetworks.repo.web.controller.WebhookController'
              }
              target={'blank'}
            >
              Synapse API REST Docs section on Webhooks
            </Link>
            .
          </Typography>
        </div>
        <Button
          size="large"
          variant="contained"
          startIcon={<AddCircleTwoTone />}
          onClick={() => {
            setWebhookToUpdate(undefined)
            setShowCreateModal(true)
          }}
          sx={{ flexShrink: 0 }}
        >
          Create Webhook
        </Button>
        <CreateWebhookModal
          initialData={webhookToUpdate}
          open={showCreateModal}
          onClose={() => setShowCreateModal(false)}
        />
      </Box>
      <InfiniteTableLayout
        table={<StyledTanStackTable table={webhookTable} />}
        isLoading={isLoading}
        noResults={
          <Typography variant="body1">
            You have not created any webhooks. Click &quot;Create Webhook&quot;
            above to begin.
          </Typography>
        }
        isEmpty={isEmpty}
        hasNextPage={hasNextPage}
        onFetchNextPageClicked={() => {
          void fetchNextPage()
        }}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  )
}
