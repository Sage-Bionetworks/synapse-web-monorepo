import { UpdateWikiPageInput, useUpdateWikiPage } from '@/synapse-queries'
import { Alert, Box, Button, TextField } from '@mui/material'
import { ObjectType, WikiPage } from '@sage-bionetworks/synapse-types'
import { noop } from 'lodash-es'
import { useState } from 'react'
import ConfirmationDialog from '../ConfirmationDialog'
import DialogBase from '@/react-ui/components/DialogBase'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { MarkdownEditor } from '../Markdown/MarkdownEditor'

export const UNSAVED_CHANGES = 'Unsaved Changes'
export const NAVIGATE_AWAY_CONFIRMATION_MESSAGE =
  'Any unsaved changes may be lost. Are you sure that you would like to navigate away from this editor?'
export const ERROR_SAVING_WIKI =
  'Could not save your changes. It is recommended that you copy your version of the wiki text so that it is not lost. '

export type WikiMarkdownEditorProps = {
  open: boolean
  ownerObjectType: ObjectType
  ownerObjectId: string
  wikiPage: WikiPage
  onCancel?: () => void
  onSave?: () => void
  // TODO: SWC-6774 - expose delete prop
  // showDeleteButton: boolean
}

export function WikiMarkdownEditor(props: WikiMarkdownEditorProps) {
  // TODO: SWC-6774 - get showDeleteButton from props
  const showDeleteButton = false
  const {
    open,
    ownerObjectId,
    ownerObjectType,
    wikiPage,
    onCancel = noop,
    onSave = noop,
  } = props

  const [title, setTitle] = useState<string>(wikiPage.title)
  const [markdown, setMarkdown] = useState<string>(wikiPage.markdown)
  const [showConfirmCancelDialog, setShowConfirmDialog] =
    useState<boolean>(false)

  const handleCancel = () => {
    if (wikiPage && wikiPage.markdown !== markdown) {
      setShowConfirmDialog(true)
    } else {
      onCancel()
    }
  }

  const {
    mutate: updateWikiPage,
    isPending: isUpdatingWikiPage,
    error: errorUpdatingWikiPage,
  } = useUpdateWikiPage({
    onSuccess: () => onSave(),
  })

  return (
    <DialogBase
      open={open}
      onCancel={handleCancel}
      maxWidth={'xl'}
      fullWidth={true}
      title="Edit Wiki Markdown"
      content={
        <>
          {isUpdatingWikiPage && <SynapseSpinner />}
          {wikiPage && (
            <>
              {wikiPage.parentWikiId && (
                <TextField
                  label="Title"
                  placeholder="Title"
                  fullWidth
                  sx={{ mb: 2 }}
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              )}
              <MarkdownEditor text={markdown} setText={setMarkdown} />
              <ConfirmationDialog
                open={showConfirmCancelDialog}
                title={UNSAVED_CHANGES}
                content={NAVIGATE_AWAY_CONFIRMATION_MESSAGE}
                onCancel={() => setShowConfirmDialog(false)}
                onConfirm={() => {
                  setShowConfirmDialog(false)
                  onCancel()
                }}
              />
            </>
          )}
          {errorUpdatingWikiPage && (
            <Alert severity="error">
              {ERROR_SAVING_WIKI + errorUpdatingWikiPage.reason}
            </Alert>
          )}
        </>
      }
      actions={
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 1,
            }}
          >
            <Button
              variant="outlined"
              disabled={isUpdatingWikiPage}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={isUpdatingWikiPage}
              onClick={() => {
                if (wikiPage) {
                  const input: UpdateWikiPageInput = {
                    ownerObjectId,
                    ownerObjectType,
                    wikiPage: { ...wikiPage, title: title, markdown: markdown },
                  }
                  updateWikiPage(input)
                }
              }}
            >
              {isUpdatingWikiPage ? 'Saving...' : 'Save'}
            </Button>
          </Box>
          {showDeleteButton && (
            <Button
              variant="contained"
              color="error"
              disabled={isUpdatingWikiPage}
              onClick={() => {
                // TODO: SWC-6774 - implement delete functionality
              }}
            >
              Delete Page
            </Button>
          )}
        </Box>
      }
    />
  )
}

export default WikiMarkdownEditor
