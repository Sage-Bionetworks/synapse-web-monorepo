import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import IconSvg from '../IconSvg/IconSvg'
import {
  useGetFullTableQueryResults,
  useUpdateDataAccessSubmissionState,
} from '../../synapse-queries'
import {
  BUNDLE_MASK_QUERY_RESULTS,
  REJECT_SUBMISSION_CANNED_RESPONSES_TABLE,
} from '../../utils/SynapseConstants'
import { Set } from 'immutable'
import {
  QueryResultBundle,
  Row,
  SubmissionState,
} from '@sage-bionetworks/synapse-types'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { SynapseClientError } from '../../utils/SynapseClientError'
import FullWidthAlert from '../FullWidthAlert/FullWidthAlert'
import { UseQueryResult } from '@tanstack/react-query'
import { ErrorBanner } from '../error/ErrorBanner'
import { displayToast } from '../ToastMessage/ToastMessage'

const CATEGORY_COLUMN_NAME = 'category'
const CATEGORY_SECTION_EMAIL_TEXT_COLUMN_NAME = 'category email prompt'
const REJECTION_REASON_FORM_TEXT_COLUMN_NAME = 'rejection reason'
const REJECTION_REASON_EMAIL_TEXT_COLUMN_NAME = 'email text'

export type RejectDataAccessRequestModalProps = {
  /* ID of the submission for which a rejection should be drafted/sent */
  submissionId: string | number
  /* SynID of the table which contains the email responses which should populate this modal. Defaults to syn50683097, which is in production Synapse */
  tableId?: string
  open: boolean
  onClose: () => void
}

type RejectionCategoryProps = {
  category: string
  rows: Row[]
  rejectionReasonFormTextIndex: number
  selectedRowIds: Set<number>
  setSelectedRowIds: React.Dispatch<React.SetStateAction<Set<number>>>
}

type SelectRejectionReasonsFormProps = {
  tableQuery: UseQueryResult<QueryResultBundle, SynapseClientError>
  selectedRowIds: Set<number>
  setSelectedRowIds: React.Dispatch<React.SetStateAction<Set<number>>>
}

const DEFAULT_MESSAGE_PREPEND =
  'Thank you for submitting your data access request.\n'
const DEFAULT_MESSAGE_APPEND =
  '\nIf you have questions, do not respond to this email address. Instead, reply to:\nact@sagebionetworks.org'

/**
 * Renders a rejection reason category and checkboxes for each reason in the category
 */
function RejectionCategory(props: RejectionCategoryProps) {
  const {
    category,
    rows,
    selectedRowIds,
    setSelectedRowIds,
    rejectionReasonFormTextIndex,
  } = props
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <>
      <Typography
        variant="body1"
        onClick={() => setIsExpanded(!isExpanded)}
        sx={{ fontWeight: 700, cursor: 'pointer', my: 1 }}
      >
        <IconSvg
          icon={isExpanded ? 'expandMore' : 'chevronRight'}
          sx={{ color: 'grey.700' }}
          wrap={false}
        />
        {category}
      </Typography>
      <Collapse in={isExpanded}>
        <Stack sx={{ ml: 3 }}>
          {(rows ?? []).map(row => (
            <FormControlLabel
              key={row.rowId}
              control={
                <Checkbox
                  checked={selectedRowIds.has(row.rowId!)}
                  size={'small'}
                  onChange={event => {
                    if (event.target.checked) {
                      setSelectedRowIds(selectedRowIds.add(row.rowId!))
                    } else {
                      setSelectedRowIds(selectedRowIds.remove(row.rowId!))
                    }
                  }}
                />
              }
              label={
                <Typography variant={'smallText1'}>
                  {row.values[rejectionReasonFormTextIndex]}
                </Typography>
              }
            />
          ))}
        </Stack>
      </Collapse>
    </>
  )
}

/**
 * Renders a form for selecting individual rejection reasons grouped by category.
 * The rejection reason data comes from the table whose data is fetched in the tableQuery prop.
 */
function SelectRejectionReasonsForm(props: SelectRejectionReasonsFormProps) {
  const { tableQuery, selectedRowIds, setSelectedRowIds } = props
  const { data: tableData, isLoading, error } = tableQuery
  const categoryIndex = tableData?.queryResult?.queryResults.headers.findIndex(
    header => header.name.toLowerCase() === CATEGORY_COLUMN_NAME,
  )
  const rejectionReasonFormTextIndex =
    tableData?.queryResult?.queryResults.headers.findIndex(
      header =>
        header.name.toLowerCase() === REJECTION_REASON_FORM_TEXT_COLUMN_NAME,
    )

  const rowsGroupedByCategory =
    tableData &&
    tableData.queryResult &&
    tableData.queryResult.queryResults.rows.reduce(
      (acc: Record<string, Row[]>, row) => {
        const category: string = row.values[categoryIndex!]!
        acc[category] = [...(acc[category] || []), row]
        return acc
      },
      {},
    )
  return (
    <>
      <Typography variant="headline3" gutterBottom>
        Reasons for rejecting
      </Typography>
      <Typography variant="body1" gutterBottom>
        You may wish to reject the user&apos;s data access request for a
        specific reason. The list below contains some common rejection reasons.
        You will have a chance to edit the response before submitting it,
        including adding any rejection reason(s) not listed here.
      </Typography>
      {isLoading && (
        <Stack sx={{ my: 2 }}>
          <SynapseSpinner size={30} />
        </Stack>
      )}
      {error && <ErrorBanner error={error} />}
      {rowsGroupedByCategory && (
        <FormControl>
          {Object.keys(rowsGroupedByCategory).map(category => (
            <RejectionCategory
              key={category}
              category={category}
              rows={rowsGroupedByCategory[category]}
              selectedRowIds={selectedRowIds}
              setSelectedRowIds={setSelectedRowIds}
              rejectionReasonFormTextIndex={rejectionReasonFormTextIndex!}
            />
          ))}
        </FormControl>
      )}
      <Typography variant="headline3" sx={{ mt: 1 }} gutterBottom>
        We’ll generate a response email message based on your selections.
      </Typography>
      <Typography variant="body1" gutterBottom>
        If your reasons for rejecting are not shown here, that’s okay! You can
        edit the complete text of the message on the next screen before sending
        it.
      </Typography>
    </>
  )
}

type DraftRejectionMessageProps = {
  emailText: string
  setEmailText: React.Dispatch<React.SetStateAction<string>>
}

/**
 * Presents a text field form that can be used to directly modify the rejection message.
 */
function DraftRejectionMessage(props: DraftRejectionMessageProps) {
  const { emailText, setEmailText } = props
  return (
    <>
      <Typography variant="headline3" gutterBottom>
        Edit the text of the rejection message
      </Typography>
      <Typography variant="body1" gutterBottom>
        This message will be sent to the data requester. You may edit it, or add
        custom text to the message.
      </Typography>
      <TextField
        multiline
        fullWidth
        rows={15}
        value={emailText}
        onChange={event => {
          setEmailText(event.target.value)
        }}
      />
    </>
  )
}
type RejectionMessageObject = {
  [category: string]: {
    sectionText: string
    reasons: string[]
  }
}

/**
 * Modal component presented to a data access submission reviewer when they decide to reject a request.
 * The modal contains a form for selecting rejection reasons and a text field for editing the rejection message.
 * After crafting a message, the user can reject the submission and send the message to the requester.
 */
export default function RejectDataAccessRequestModal(
  props: RejectDataAccessRequestModalProps,
) {
  const {
    open,
    tableId = REJECT_SUBMISSION_CANNED_RESPONSES_TABLE,
    onClose,
    submissionId,
  } = props

  const [step, setStep] = React.useState<1 | 2>(1)
  const [error, setError] = React.useState<SynapseClientError | null>(null)
  // selectedRowIds are the row IDs of the canned responses the user selected:
  const [emailText, setEmailText] = useState('')
  const [selectedRowIds, setSelectedRowIds] = useState(Set<number>())

  // Fetch the table data
  const tableQuery = useGetFullTableQueryResults({
    entityId: tableId,
    query: {
      sql: `SELECT * FROM ${tableId}`,
    },
    partMask: BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  })

  const { data } = tableQuery

  const categoryIndex = data?.queryResult?.queryResults.headers.findIndex(
    header => header.name.toLowerCase() === CATEGORY_COLUMN_NAME,
  )
  const categorySectionEmailTextIndex =
    data?.queryResult?.queryResults.headers.findIndex(
      header =>
        header.name.toLowerCase() === CATEGORY_SECTION_EMAIL_TEXT_COLUMN_NAME,
    )

  const reasonEmailTextIndex =
    data?.queryResult?.queryResults.headers.findIndex(
      header =>
        header.name.toLowerCase() === REJECTION_REASON_EMAIL_TEXT_COLUMN_NAME,
    )

  // Transform the selected rejection reasons into an object that can be easily transformed into an email
  const defaultEmailMessageObject: RejectionMessageObject | undefined =
    data &&
    data.queryResult &&
    selectedRowIds.reduce((messageObject: RejectionMessageObject, rowId) => {
      const row = data.queryResult!.queryResults.rows.find(
        row => row.rowId === rowId,
      )!
      const category = row.values[categoryIndex!]!
      const sectionText = row.values[categorySectionEmailTextIndex!]!
      const reasonText = row.values[reasonEmailTextIndex!]!
      if (messageObject[category]) {
        messageObject[category].reasons = [
          ...messageObject[category].reasons,
          reasonText,
        ]
      } else {
        messageObject[category] = {
          sectionText: sectionText,
          reasons: [reasonText],
        }
      }
      return messageObject
    }, {})

  // Using the rejection message object, create the email template.
  const defaultEmailMessage =
    defaultEmailMessageObject &&
    DEFAULT_MESSAGE_PREPEND +
      Object.keys(defaultEmailMessageObject).reduce((message, key) => {
        const sectionText = defaultEmailMessageObject[key].sectionText
        message += '\n' + sectionText + '\n'
        for (const reason of defaultEmailMessageObject[key].reasons) {
          message += '\n* ' + reason + '\n'
        }
        return message
      }, '') +
      DEFAULT_MESSAGE_APPEND

  /* If the selected rows change, then reset the email text. */
  useEffect(() => {
    if (defaultEmailMessage) {
      setEmailText(defaultEmailMessage)
    }
    // Specifically fire on update to just selectedRowIds
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRowIds])

  const { mutate } = useUpdateDataAccessSubmissionState()

  function rejectSubmission(reason: string) {
    mutate(
      {
        submissionId: submissionId.toString(),
        newState: SubmissionState.REJECTED,
        rejectedReason: reason,
      },
      {
        onSuccess: () => {
          setError(null)
          displayToast(
            'Submission rejected and message sent to requester',
            'info',
          )
          onClose()
        },
        onError: e => {
          setError(e)
        },
      },
    )
  }

  // If fetching/processing the table fails, gracefully fall back to just show the email template
  return (
    <Dialog open={open} onClose={onClose} maxWidth={'md'} fullWidth>
      <DialogTitle>
        <Stack direction="row" alignItems={'center'} gap={'5px'}>
          Reject Request?
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={onClose}>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        {step === 1 && (
          <SelectRejectionReasonsForm
            tableQuery={tableQuery}
            selectedRowIds={selectedRowIds}
            setSelectedRowIds={setSelectedRowIds}
          />
        )}
        {step === 2 && (
          <DraftRejectionMessage
            emailText={emailText}
            setEmailText={setEmailText}
          />
        )}
        {error && (
          <FullWidthAlert
            variant={'danger'}
            description={error.reason}
            isGlobal={false}
          />
        )}
      </DialogContent>
      <DialogActions>
        {step === 2 && (
          <Button variant="outlined" onClick={() => setStep(1)}>
            Back
          </Button>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        {step === 1 && (
          <Button variant="contained" onClick={() => setStep(2)}>
            Generate Email
          </Button>
        )}
        {step === 2 && (
          <Button
            variant="contained"
            onClick={() => {
              rejectSubmission(emailText)
            }}
          >
            Reject and Notify Requester
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}
