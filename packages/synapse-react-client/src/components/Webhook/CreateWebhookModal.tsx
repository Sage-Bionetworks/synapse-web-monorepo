import {
  useCreateWebhook,
  useDeleteWebhook,
  useUpdateWebhook,
} from '@/synapse-queries/webhook/useWebhook'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  Link,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import {
  ErrorResponseCode,
  SynapseEventType,
  SynapseObjectType,
  Webhook,
  WebhookVerificationStatus,
} from '@sage-bionetworks/synapse-client'
import { upperFirst } from 'lodash-es'
import { Fragment, PropsWithChildren, useEffect, useState } from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'
import { EntityFinderModal } from '../EntityFinder/EntityFinderModal'
import { FinderScope } from '../EntityFinder/tree/EntityTree'
import { VersionSelectionType } from '../EntityFinder/VersionSelectionType'
import { HelpPopover } from '../HelpPopover/HelpPopover'
import { displayToast } from '../ToastMessage/ToastMessage'

type CreateWebhookModalProps = {
  initialData?: Webhook
  open: boolean
  onClose: () => void
}

const NEW_ENDPOINT_DOMAIN_REQUEST_TITLE = encodeURIComponent(
  'Request to add new domain for webhook verification',
)
const NEW_ENDPOINT_DOMAIN_REQUEST_SUMMARY = encodeURIComponent(
  '<Please provide the domain(s) you wish to use and any additional details related to your request.>',
)
const NEW_ENDPOINT_CONTACT_FORM_URL = `https://sagebionetworks.jira.com/servicedesk/customer/portal/9/group/16/create/85?summary=${NEW_ENDPOINT_DOMAIN_REQUEST_TITLE}&description=${NEW_ENDPOINT_DOMAIN_REQUEST_SUMMARY}`

function UpdateWarningWrapper(props: PropsWithChildren) {
  return (
    <Box
      sx={{
        mt: '10px',
        py: 2,
        px: 4,
        backgroundColor: 'rgb(178, 36, 42, 0.03)',
      }}
    >
      <Typography sx={{ my: 1 }} color="error" variant="headline3" gutterBottom>
        DANGER ZONE
      </Typography>
      <Typography variant="body1" gutterBottom>
        Editing the following information will require you to re-verify the
        webhook.
      </Typography>
      {props.children}
    </Box>
  )
}

export default function CreateWebhookModal(props: CreateWebhookModalProps) {
  const { initialData, open, onClose } = props

  // Form state
  const objectType: SynapseObjectType = SynapseObjectType.ENTITY // Currently only entities can be selected
  const [objectId, setObjectId] = useState<string>('')
  const [eventTypes, setEventTypes] = useState<Set<SynapseEventType>>(new Set())
  const [invokeEndpoint, setInvokeEndpoint] = useState<string>('')
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    setObjectId(initialData?.objectId || '')
    setEventTypes(
      new Set(initialData?.eventTypes || []) as Set<SynapseEventType>,
    )
    setInvokeEndpoint(initialData?.invokeEndpoint || '')
    setEnabled(initialData?.isEnabled ?? true)
  }, [initialData])

  const [showEntityFinder, setShowEntityFinder] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  const {
    mutate: createWebhook,
    isPending: isCreatePending,
    error: createError,
  } = useCreateWebhook({
    onSuccess: () => {
      displayToast('Webhook created', 'success')
      onClose()
    },
  })

  const {
    mutate: updateWebhook,
    isPending: isUpdatePending,
    error: updateError,
  } = useUpdateWebhook({
    onSuccess: () => {
      displayToast('Webhook updated', 'success')
      onClose()
    },
  })

  const {
    mutate: deleteWebhook,
    isPending: isDeletePending,
    error: deleteError,
  } = useDeleteWebhook({
    onSuccess: () => {
      displayToast('Webhook deleted', 'info')
      setShowDeleteConfirmation(false)
      onClose()
    },
  })

  const isPending = isCreatePending || isUpdatePending
  const error = createError || updateError

  function handleConfirm() {
    if (initialData) {
      updateWebhook({
        webhookId: initialData.id!,
        createOrUpdateWebhookRequest: {
          objectType,
          objectId,
          eventTypes,
          invokeEndpoint,
          isEnabled: enabled,
        },
      })
    } else {
      createWebhook({
        objectType,
        objectId,
        eventTypes,
        invokeEndpoint,
        isEnabled: enabled,
      })
    }
  }

  function handleDelete() {
    if (initialData) {
      deleteWebhook(initialData.id!)
    }
  }

  // If the user attempts to use a domain that has not been added to the allowlist, link to a form to create a request.
  const showRequestDomainForm =
    error &&
    error.errorResponse &&
    'errorCode' in error.errorResponse &&
    error.errorResponse.errorCode ===
      ErrorResponseCode.UNSUPPORTED_WEBHOOK_DOMAIN

  // Wrap certain fields in a wrapper if they will require re-verifying the webhook
  const RevalidationFieldsWrapper =
    initialData &&
    initialData.verificationStatus === WebhookVerificationStatus.VERIFIED
      ? UpdateWarningWrapper
      : Fragment

  return (
    <ConfirmationDialog
      open={open}
      title={'Create New Webhook'}
      maxWidth={'md'}
      onCancel={onClose}
      onConfirm={() => {
        handleConfirm()
      }}
      confirmButtonProps={{
        children: `${initialData ? 'Update' : 'Create'} Webhook`,
        disabled: isPending,
      }}
      cancelButtonProps={{
        disabled: isPending,
      }}
      content={
        <>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Typography variant={'body1'} gutterBottom>
                Specify the ID of the entity and the types of events you would
                like to receive. Once you complete this step, Synapse will send
                a verification code to the endpoint you specify. After you
                verify your webhook, Synapse will send your chosen events to the
                verified endpoint.
              </Typography>
            </Grid>
            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <EntityFinderModal
                configuration={{
                  initialScope: FinderScope.ALL_PROJECTS,
                  initialContainer: 'root',
                  selectMultiple: false,
                  treeOnly: false,
                  versionSelection: VersionSelectionType.DISALLOWED,
                }}
                show={showEntityFinder}
                onCancel={() => {
                  setShowEntityFinder(false)
                }}
                title={'Select item for Webhook'}
                promptCopy={
                  'Select an item to associate with the webhook. The webhook can be used to receive programmatic alerts when the item is updated.'
                }
                onConfirm={selected => {
                  setObjectId(selected[0].targetId)
                  setShowEntityFinder(false)
                }}
                confirmButtonCopy={'Select'}
              />
              <TextField
                required
                label={
                  <>
                    Entity ID
                    <HelpPopover
                      containerSx={{
                        position: 'fixed',
                        ml: '15px',
                        fontSize: '12px',
                      }}
                      markdownText={
                        'The ID of a Synapse entity for which to receive events. For folders and projects, matching events are published to the webhook endpoint for any entity in their hierarchy.'
                      }
                    />
                  </>
                }
                type="text"
                fullWidth
                value={objectId}
                onChange={e => {
                  setObjectId(e.target.value)
                }}
                slotProps={{
                  input: {
                    endAdornment: (
                      <IconButton onClick={() => setShowEntityFinder(true)}>
                        <SearchOutlined />
                      </IconButton>
                    ),
                  },
                }}
              />
            </Grid>
            <Grid size={6}>
              <FormControlLabel
                control={<Switch />}
                labelPlacement={'top'}
                label={<InputLabel>Enabled</InputLabel>}
                checked={enabled}
                onChange={(_e, checked) => {
                  setEnabled(checked)
                }}
              />
            </Grid>
            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <FormGroup>
                <InputLabel required>Events</InputLabel>
                {Object.values(SynapseEventType).map(eventType => (
                  <FormControlLabel
                    control={<Checkbox />}
                    label={upperFirst(eventType.toLowerCase())}
                    key={eventType}
                    checked={eventTypes.has(eventType)}
                    onChange={(_e, checked) => {
                      setEventTypes(curr => {
                        if (checked) {
                          const newSet = new Set(curr)
                          newSet.add(eventType)
                          return newSet
                        } else {
                          curr.delete(eventType)
                          return new Set<SynapseEventType>(curr)
                        }
                      })
                    }}
                  />
                ))}
              </FormGroup>
            </Grid>
            <Grid size={12}>
              <RevalidationFieldsWrapper>
                <TextField
                  label={'Endpoint'}
                  fullWidth
                  value={invokeEndpoint}
                  onChange={e => setInvokeEndpoint(e.target.value)}
                  required
                  placeholder={'https://'}
                />
                {initialData && (
                  <>
                    <Button
                      onClick={() => {
                        setShowDeleteConfirmation(true)
                      }}
                      color="error"
                      variant={'outlined'}
                      startIcon={<DeleteTwoToneIcon />}
                      sx={{ my: 2 }}
                    >
                      Delete Webhook
                    </Button>
                    <ConfirmationDialog
                      title={'Confirm Delete Webhook?'}
                      onCancel={() => setShowDeleteConfirmation(false)}
                      open={showDeleteConfirmation}
                      content={
                        <>
                          <Typography variant={'body1'}>
                            Are you sure you want to delete this webhook? This
                            action cannot be undone.
                          </Typography>
                          {deleteError && (
                            <Alert severity="error" sx={{ mt: 2 }}>
                              {deleteError.reason}
                            </Alert>
                          )}
                        </>
                      }
                      onConfirm={() => {
                        handleDelete()
                      }}
                      confirmButtonProps={{
                        children: 'Delete',
                        color: 'error',
                        disabled: isDeletePending,
                      }}
                      cancelButtonProps={{ disabled: isDeletePending }}
                    />
                  </>
                )}
              </RevalidationFieldsWrapper>
            </Grid>
          </Grid>

          {error && (
            <Alert severity="error" sx={{ my: 2 }}>
              {showRequestDomainForm && (
                <>
                  Synapse only permits configuring webhooks on verified domains,
                  which are specified in the{' '}
                  <Link
                    href={
                      'https://rest-docs.synapse.org/rest/index.html#org.sagebionetworks.repo.web.controller.WebhookController'
                    }
                    target={'_blank'}
                  >
                    REST documentation
                  </Link>
                  . You have entered a domain that has not been verified.{' '}
                  <Link href={NEW_ENDPOINT_CONTACT_FORM_URL} target={'_blank'}>
                    Please fill out this form to request verification for your
                    webhook domain
                  </Link>
                  .
                </>
              )}
              {!showRequestDomainForm && error.reason}
            </Alert>
          )}
        </>
      }
    />
  )
}
