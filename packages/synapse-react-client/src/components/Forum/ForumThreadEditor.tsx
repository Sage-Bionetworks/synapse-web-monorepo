import { usePostReply, usePutReply } from '@/synapse-queries/forum/useReply'
import {
  useCreateThread,
  useUpdateThreadMessage,
  useUpdateThreadTitle,
} from '@/synapse-queries/forum/useThread'
import { Box, TextField } from '@mui/material'
import { CreateDiscussionThread } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import {
  ConfirmationButtons,
  ConfirmationDialog,
} from '../ConfirmationDialog/ConfirmationDialog'
import { MarkdownEditor } from '../Markdown/MarkdownEditor'

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

export function ForumThreadEditor(props: ForumThreadEditorProps) {
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
    <div>
      {!isReply && (
        <TextField
          fullWidth
          sx={{ my: 1 }}
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      )}
      <MarkdownEditor
        placeholder={'Write a reply...'}
        text={text}
        setText={setText}
      />
    </div>
  )

  const confirmButtonText = updateIsPending ? 'Saving' : 'Post'

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
          <Box
            sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, my: 1 }}
          >
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
