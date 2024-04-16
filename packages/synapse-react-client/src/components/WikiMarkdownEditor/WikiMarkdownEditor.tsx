import { Alert, Box, Button, TextField } from '@mui/material'
import { ObjectType, WikiPageKey } from '@sage-bionetworks/synapse-types'
import { noop } from 'lodash-es'
import React, { useEffect, useMemo, useState } from 'react'
import {
  CreateWikiPageInput,
  UpdateWikiPageInput,
  useCreateWikiPage,
  useGetRootWikiPageKey,
  useGetWikiPage,
  useUpdateWikiPage,
} from '../../synapse-queries'
import ConfirmationDialog from '../ConfirmationDialog'
import { DialogBase } from '../DialogBase'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { MarkdownEditor } from '../Markdown'

export const UNSAVED_CHANGES = 'Unsaved Changes'
export const NAVIGATE_AWAY_CONFIRMATION_MESSAGE =
  'Any unsaved changes may be lost. Are you sure that you would like to navigate away from this editor?'
export const ERROR_LOADING_WIKI_FAILED = 'Failed to load the wiki page: '
export const ERROR_SAVING_WIKI =
  'Could not save your changes. It is recommended that you copy your version of the wiki text so that it is not lost. '

export type WikiMarkdownEditorProps = {
  ownerObjectType: ObjectType
  ownerObjectId: string
  // if wikiPageId is undefined, will get (or create) the root WikiPage for this ownerObject
  // otherwise, will get the WikiPage with the specified wikiPageId
  wikiPageId?: string
  onCancel?: () => void
  onSave?: () => void
  // TODO: SWC-6774 - expose delete prop
  // showDeleteButton: boolean
}

export const WikiMarkdownEditor: React.FunctionComponent<
  WikiMarkdownEditorProps
> = (props: WikiMarkdownEditorProps) => {
  // TODO: SWC-6774 - get showDeleteButton from props
  const showDeleteButton = false
  const {
    ownerObjectType,
    ownerObjectId,
    wikiPageId: initialWikiPageId,
    onCancel = noop,
    onSave = noop,
  } = props

  const [wikiPageId, setWikiPageId] = useState<string | undefined>(
    initialWikiPageId,
  )
  const [open, setOpen] = useState<boolean>(true)
  const [title, setTitle] = useState<string>('')
  const [markdown, setMarkdown] = useState<string>('')
  const [showConfirmCancelDialog, setShowConfirmDialog] =
    useState<boolean>(false)

  const { data: rootWikiPageKey, error: errorLoadingRootWikiPageKey } =
    useGetRootWikiPageKey(ownerObjectType, ownerObjectId, {
      enabled: wikiPageId === undefined,
    })

  const { mutate: createWikiPage, error: errorCreatingWikiPage } =
    useCreateWikiPage({
      onSuccess: wikiPage => {
        setWikiPageId(wikiPage.id)
      },
    })

  useEffect(() => {
    // an existing root WikiPageKey was found
    if (rootWikiPageKey) {
      setWikiPageId(rootWikiPageKey.wikiPageId)
    }

    // root WikiPageKey was not found,
    // then create a root WikiPage for this ownerObject
    if (rootWikiPageKey === null) {
      const rootWikiPage: CreateWikiPageInput['wikiPage'] = {
        parentWikiId: undefined,
        title: '',
        markdown: '',
        attachmentFileHandleIds: [],
      }
      const input: CreateWikiPageInput = {
        ownerObjectId,
        ownerObjectType,
        wikiPage: rootWikiPage,
      }
      createWikiPage(input)
    }
  }, [
    rootWikiPageKey,
    ownerObjectId,
    ownerObjectType,
    errorLoadingRootWikiPageKey,
    createWikiPage,
  ])

  const wikiPageKey = useMemo(() => {
    const wikiPageKey: WikiPageKey = {
      ownerObjectType,
      ownerObjectId,
      wikiPageId: wikiPageId || '',
    }
    return wikiPageKey
  }, [wikiPageId, ownerObjectId, ownerObjectType])

  const { data: wikiPage, error: errorLoadingWikiPage } = useGetWikiPage(
    wikiPageKey,
    {
      enabled: wikiPageId !== undefined,
      // Set staleTime to infinity to prevent re-fetching while editing
      staleTime: Infinity,
    },
  )

  useEffect(() => {
    if (wikiPage) {
      setTitle(wikiPage.title)
      setMarkdown(wikiPage.markdown)
    }
  }, [wikiPage])

  const handleCancel = () => {
    if (wikiPage && wikiPage.markdown !== markdown) {
      setShowConfirmDialog(true)
    } else {
      setOpen(false)
      onCancel()
    }
  }

  const {
    mutate: updateWikiPage,
    isPending: isUpdatingWikiPage,
    error: errorUpdatingWikiPage,
  } = useUpdateWikiPage({
    onSuccess: () => {
      setOpen(false)
      onSave()
    },
  })

  const error = useMemo(() => {
    if (errorLoadingRootWikiPageKey) {
      return ERROR_LOADING_WIKI_FAILED + errorLoadingRootWikiPageKey.reason
    }
    if (errorLoadingWikiPage) {
      return ERROR_LOADING_WIKI_FAILED + errorLoadingWikiPage.reason
    }
    if (errorCreatingWikiPage) {
      return errorCreatingWikiPage.reason
    }
    if (errorUpdatingWikiPage) {
      return ERROR_SAVING_WIKI + errorUpdatingWikiPage.reason
    }
    return null
  }, [
    errorLoadingRootWikiPageKey,
    errorLoadingWikiPage,
    errorCreatingWikiPage,
    errorUpdatingWikiPage,
  ])

  const isLoading = !wikiPage && !error
  const areButtonsDisabled = isLoading || isUpdatingWikiPage

  return (
    <DialogBase
      open={open}
      onCancel={handleCancel}
      maxWidth={'xl'}
      fullWidth={true}
      title="Edit Wiki Markdown"
      content={
        <>
          {isLoading && <SynapseSpinner />}
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
                  setOpen(false)
                  onCancel()
                }}
              />
            </>
          )}
          {error && <Alert severity="error">{error}</Alert>}
        </>
      }
      actions={
        <Box
          display="flex"
          flexDirection="row-reverse"
          justifyContent="space-between"
          width="100%"
        >
          <Box display="flex" gap={1}>
            <Button
              variant="outlined"
              disabled={areButtonsDisabled}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={areButtonsDisabled}
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
              disabled={areButtonsDisabled}
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
