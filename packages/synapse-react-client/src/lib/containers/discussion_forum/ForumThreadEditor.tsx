import React, { useState } from 'react'
import { Box } from '@mui/material'
import { FormControl } from 'react-bootstrap'
import {
  useCreateThread,
  useUpdateThreadTitle,
  useUpdateThreadMessage,
} from '../../utils/hooks/SynapseAPI/forum/useThread'
import {
  usePostReply,
  usePutReply,
} from '../../utils/hooks/SynapseAPI/forum/useReply'
import { CreateDiscussionThread } from '../../utils/synapseTypes/DiscussionBundle'
import { MarkdownEditor } from '../markdown/MarkdownEditor'
import { ConfirmationButtons, ConfirmationDialog } from '../ConfirmationDialog'

export type ForumThreadEditorProps = {
  initialTitle?: string
  initialText?: string
  id: string
  onClose: () => void
  isReply: boolean
} & (
  | { isDialog: false; openDialog?: never }
  | { isDialog: true; openDialog: boolean }
)

export const ForumThreadEditor: React.FunctionComponent<
  ForumThreadEditorProps
> = props => {
  const {
    initialText,
    initialTitle,
    id,
    onClose,
    isReply,
    isDialog,
    openDialog,
  } = props

  const [title, setTitle] = useState<string>(initialTitle ?? '')
  const [text, setText] = useState<string>(initialText ?? '')
  const { mutate: updateTitle, isLoading: isLoadingTitle } =
    useUpdateThreadTitle({
      onSuccess: () => onClose(),
    })
  const { mutate: updateMessage, isLoading: isLoadingMessage } =
    useUpdateThreadMessage({
      onSuccess: () => onClose(),
    })
  const { mutate: createThread, isLoading: isLoadingThread } = useCreateThread({
    onSuccess: () => onClose(),
  })
  const { mutate: createReply, isLoading: isLoadingReply } = usePostReply({
    onSuccess: () => onClose(),
  })
  const { mutate: updateReply, isLoading: isLoadingReplyUpdate } = usePutReply({
    onSuccess: () => onClose(),
  })

  const isLoading =
    isLoadingMessage ||
    isLoadingReply ||
    isLoadingThread ||
    isLoadingTitle ||
    isLoadingReplyUpdate

  const isExistingThread = !isReply && initialTitle

  const onSave = (text: string, title: string) => {
    if (isReply) {
      if (initialText) {
        // updating reply
        updateReply({
          replyId: id,
          messageMarkdown: text,
        })
      } else {
        // posting reply
        createReply({
          threadId: id,
          messageMarkdown: text,
        })
      }
    } else {
      if (isExistingThread) {
        // updating thread
        updateTitle({
          title: title,
          threadId: id,
        })
        updateMessage({
          messageMarkdown: text,
          threadId: id,
        })
      } else {
        // posting thread
        const request: CreateDiscussionThread = {
          forumId: id,
          title: title,
          messageMarkdown: text,
        }
        createThread(request)
      }
    }
  }

  const editorContent = (
    <div className="bootstrap-4-backport">
      {!isReply && (
        <FormControl
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      )}
      <MarkdownEditor text={text} setText={setText} />
    </div>
  )

  const confirmButtonText = isLoading ? 'Saving' : 'Save'

  return (
    <>
      {isDialog ? (
        <ConfirmationDialog
          maxWidth="md"
          open={openDialog}
          onCancel={onClose}
          title={
            isReply
              ? 'Edit Reply'
              : isExistingThread
              ? 'Edit Thread'
              : 'New Thread'
          }
          content={editorContent}
          onConfirm={() => onSave(text, title)}
          confirmButtonText={confirmButtonText}
        />
      ) : (
        <>
          {editorContent}
          <Box display="flex" justifyContent="flex-end">
            <ConfirmationButtons
              onCancel={onClose}
              onConfirm={() => onSave(text, title)}
              confirmButtonText={confirmButtonText}
            />
          </Box>
        </>
      )}
    </>
  )
}
