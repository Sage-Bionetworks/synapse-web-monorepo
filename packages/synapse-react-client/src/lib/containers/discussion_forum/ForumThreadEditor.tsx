import React, { useState } from 'react'
import { Button, FormControl } from 'react-bootstrap'
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

export type ForumThreadEditorProps = {
  initialTitle?: string
  initialText?: string
  id: string
  onClose: () => void
  isReply: boolean
}

export const ForumThreadEditor: React.FunctionComponent<
  ForumThreadEditorProps
> = ({ initialText, initialTitle, id, onClose, isReply }) => {
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
      if (initialTitle) {
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

  return (
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
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={onClose} variant="light">
          Cancel
        </Button>
        <Button
          disabled={isLoading}
          onClick={() => onSave(text, title)}
          variant="primary"
        >
          {isLoading ? 'Saving' : 'Save'}
        </Button>
      </div>
    </div>
  )
}
