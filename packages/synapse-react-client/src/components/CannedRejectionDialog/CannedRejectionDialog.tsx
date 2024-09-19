import {
  Checkbox,
  Collapse,
  FormControl,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { QueryResultBundle, Row } from '@sage-bionetworks/synapse-types'
import { UseQueryResult } from '@tanstack/react-query'
import { Set } from 'immutable'
import React, { useEffect, useState } from 'react'
import { useGetFullTableQueryResults } from '../../synapse-queries'
import { SynapseClientError } from 'synapse-client/util/SynapseClientError'
import { BUNDLE_MASK_QUERY_RESULTS } from '../../utils/SynapseConstants'
import ConfirmationDialog from '../ConfirmationDialog'
import { ErrorBanner } from '../error/ErrorBanner'
import FullWidthAlert from '../FullWidthAlert/FullWidthAlert'
import IconSvg from '../IconSvg/IconSvg'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'

const CATEGORY_COLUMN_NAME = 'category'
const CATEGORY_SECTION_EMAIL_TEXT_COLUMN_NAME = 'category email prompt'
const REJECTION_REASON_FORM_TEXT_COLUMN_NAME = 'rejection reason'
const REJECTION_REASON_EMAIL_TEXT_COLUMN_NAME = 'email text'

export type CannedRejectionDialogProps = {
  open: boolean
  /* SynID of the table which contains the email responses which should populate this modal */
  tableId: string
  /* Callback invoked when the rejection is confirmed */
  onConfirm: (message: string) => void
  onClose: () => void
  /** Text injected into the beginning of the email template */
  defaultMessagePrefix?: string
  /** Text appended onto the end of the email template */
  defaultMessageAppend?: string
  /** Text to display above the canned rejection reasons */
  rejectionFormPromptCopy?: string
  /** Error to display, in case one occurred in the callback to `onReject` */
  error: SynapseClientError | null
  /** Optional children, can be used to extend the form as needed on step 2 */
  children?: React.ReactNode
}

type RejectionCategoryProps = {
  category: string
  rows: Row[]
  rejectionReasonFormTextIndex: number
  selectedRowIds: Set<number>
  setSelectedRowIds: React.Dispatch<React.SetStateAction<Set<number>>>
  initialIsExpanded?: boolean
}

type SelectRejectionReasonsFormProps = {
  tableQuery: UseQueryResult<QueryResultBundle, SynapseClientError>
  selectedRowIds: Set<number>
  setSelectedRowIds: React.Dispatch<React.SetStateAction<Set<number>>>
  rejectionFormPromptCopy?: string
}

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
    initialIsExpanded = false,
  } = props
  const [isExpanded, setIsExpanded] = React.useState(initialIsExpanded)

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
  const {
    tableQuery,
    selectedRowIds,
    setSelectedRowIds,
    rejectionFormPromptCopy,
  } = props
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
      {rejectionFormPromptCopy && (
        <Typography variant="body1" gutterBottom>
          {rejectionFormPromptCopy}
        </Typography>
      )}
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
              initialIsExpanded={
                Object.keys(rowsGroupedByCategory).length === 1
              }
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
        This message will be sent to the requester. You may edit it, or add
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
export function CannedRejectionDialog(props: CannedRejectionDialogProps) {
  const {
    open,
    tableId,
    onClose,
    onConfirm: onReject,
    defaultMessagePrefix = '',
    defaultMessageAppend = '',
    rejectionFormPromptCopy,
    children,
    error,
  } = props

  const [step, setStep] = React.useState<1 | 2>(1)
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
    defaultMessagePrefix +
      Object.keys(defaultEmailMessageObject).reduce((message, key) => {
        message += '\n'
        const sectionText = defaultEmailMessageObject[key].sectionText
        if (sectionText) {
          message += sectionText + '\n'
        }

        for (const reason of defaultEmailMessageObject[key].reasons) {
          if (reason != null) {
            message += '\n* ' + reason.replaceAll('\\n', '\n') + '\n'
          }
        }
        return message
      }, '') +
      defaultMessageAppend

  /* If the selected rows change, then reset the email text. */
  useEffect(() => {
    if (defaultEmailMessage) {
      setEmailText(defaultEmailMessage)
    }
    // Specifically fire on update to just selectedRowIds
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRowIds])

  // If fetching/processing the table fails, gracefully fall back to just show the email template
  return (
    <ConfirmationDialog
      open={open}
      onCancel={() => {
        if (step === 1) {
          onClose()
        }
        if (step === 2) {
          setStep(1)
        }
      }}
      maxWidth={'md'}
      fullWidth
      title="Reject Request?"
      content={
        <>
          {step === 1 && (
            <SelectRejectionReasonsForm
              tableQuery={tableQuery}
              selectedRowIds={selectedRowIds}
              setSelectedRowIds={setSelectedRowIds}
              rejectionFormPromptCopy={rejectionFormPromptCopy}
            />
          )}
          {step === 2 && (
            <>
              <DraftRejectionMessage
                emailText={emailText}
                setEmailText={setEmailText}
              />
              {children}
            </>
          )}
          {error && (
            <FullWidthAlert
              variant={'danger'}
              description={error.reason}
              isGlobal={false}
            />
          )}
        </>
      }
      onConfirm={() => {
        if (step === 1) {
          setStep(2)
        }
        if (step === 2) {
          onReject(emailText)
        }
      }}
      confirmButtonProps={{
        children: step === 1 ? 'Generate Email' : 'Reject and Notify Requester',
      }}
      cancelButtonProps={{
        children: step === 1 ? 'Cancel' : 'Back',
      }}
    />
  )
}
