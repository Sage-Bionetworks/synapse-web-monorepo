import React, { useState } from 'react'
import { Box } from '@mui/material'
import { FormControl } from 'react-bootstrap'
import {
  useCreateThread,
  useUpdateThreadTitle,
  useUpdateThreadMessage,
} from '../../synapse-queries/forum/useThread'
import { usePostReply, usePutReply } from '../../synapse-queries/forum/useReply'
import { CreateDiscussionThread } from '@sage-bionetworks/synapse-types'
import { MarkdownEditor } from '../Markdown/MarkdownEditor'
import {
  ConfirmationButtons,
  ConfirmationDialog,
} from '../ConfirmationDialog/ConfirmationDialog'

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
  const { mutate: updateTitle, isPending: titleUpdateIsPending } =
    useUpdateThreadTitle({
      onSuccess: () => onClose(),
    })
  const { mutate: updateMessage, isPending: messageUpdateIsPending } =
    useUpdateThreadMessage({
      onSuccess: () => onClose(),
    })
  const { mutate: createThread, isPending: createThreadIsPending } =
    useCreateThread({
      onSuccess: () => onClose(),
    })
  const { mutate: createReply, isPending: createReplyIsPending } = usePostReply(
    {
      onSuccess: () => onClose(),
    },
  )
  const { mutate: updateReply, isPending: updateReplyIsPending } = usePutReply({
    onSuccess: () => onClose(),
  })

  const updateIsPending =
    messageUpdateIsPending ||
    createReplyIsPending ||
    createThreadIsPending ||
    titleUpdateIsPending ||
    updateReplyIsPending

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

  const confirmButtonText = updateIsPending ? 'Saving' : 'Save'

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
          confirmButtonProps={{ children: confirmButtonText }}
        />
      ) : (
        <>
          {editorContent}
          <Box display="flex" justifyContent="flex-end">
            <ConfirmationButtons
              onCancel={onClose}
              onConfirm={() => onSave(text, title)}
              confirmButtonProps={{ children: confirmButtonText }}
            />
          </Box>
        </>
      )}
    </>
  )
}
