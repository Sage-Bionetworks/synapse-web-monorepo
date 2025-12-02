import {
  Box,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material'
import { useRef, useState, useEffect } from 'react'
import {
  commandList,
  CommandListType,
  MARKDOWN_COMMANDS_DATA,
} from '@sage-bionetworks/synapse-types'
import IconSvg from '../IconSvg/IconSvg'
import MarkdownSynapse from './MarkdownSynapse/MarkdownSynapse'
import { UserMentionModal } from './UserMentionModal'
import { startCase } from 'lodash-es'

const MarkdownEditorTabs = ['WRITE', 'PREVIEW'] as const

export type MarkdownEditorProps = {
  placeholder?: string
  text: string
  setText: (text: string) => void
}

export function MarkdownEditor({
  placeholder,
  text,
  setText,
}: MarkdownEditorProps) {
  const [currentTab, setCurrentTab] = useState<number>(0)
  const [selectionStart, setSelectionStart] = useState<number>(0)
  const [isShowingTagModal, setIsShowingTagModal] = useState<boolean>(false)
  const [tagModalWithKeyboard, setTagModalWithKeyboard] =
    useState<boolean>(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  /**
   * Updates the position of the cursor. This must occur within `useEffect` because we need to ensure that the
   * cursor position is updated after the state of `text` is updated.
   */
  useEffect(() => {
    const input = textAreaRef.current
    if (input) {
      input.setSelectionRange(selectionStart, selectionStart)
    }
  }, [textAreaRef, selectionStart])

  useEffect(() => {
    textAreaRef.current?.focus()
  }, [isShowingTagModal])

  const handleUserTag = (user: string) => {
    const newText: string[] = []
    const textVal = textAreaRef.current
    if (textVal) {
      const start = textVal?.selectionStart
      const textBeforeTag = text.substring(0, start)
      const textAfterTag = text.substring(start, text.length)
      setSelectionStart(start + user.length)
      newText.push(
        textBeforeTag,
        `${tagModalWithKeyboard ? '' : '@'}${user.replace(/\s/g, '')}`,
        textAfterTag,
      )
    }
    setText(newText.join(''))
    setTagModalWithKeyboard(false)
  }

  const handleTagModal = (text: string) => {
    const start = textAreaRef.current && textAreaRef.current.selectionStart
    if (start && start > 0 && text.charAt(start - 1) === '@') {
      setTagModalWithKeyboard(true)
      setIsShowingTagModal(true)
    }
  }
  const handleCommands = (command: CommandListType) => {
    const textVal = textAreaRef.current
    if (textVal) {
      const start = textVal.selectionStart
      const end = textVal.selectionEnd
      const selected = text.substring(start, end)
      const textBeforeSelection = text.substring(0, start)
      const textAfterSelection = text.substring(end, text.length)

      const openSyntax = MARKDOWN_COMMANDS_DATA[command].openSyntax
      const closeSyntax = MARKDOWN_COMMANDS_DATA[command].closeSyntax

      switch (command) {
        case 'code': {
          const newText: string[] = []
          newText.push(
            textBeforeSelection,
            openSyntax,
            selected,
            closeSyntax,
            textAfterSelection,
          )

          setText(newText.join('\r\n'))
          textVal.focus()
          // adds 2 due to new line
          setSelectionStart(start + openSyntax.length + 2)
          break
        }
        case 'title':
        case 'bold':
        case 'italic':
        case 'strikethrough':
        case 'latex':
        case 'subscript':
        case 'superscript':
        case 'link':
        case 'image': {
          const newText = `${textBeforeSelection}${openSyntax}${selected}${closeSyntax}${textAfterSelection}`
          textVal.focus()
          setSelectionStart(start + openSyntax.length)
          setText(newText)
        }
      }
    }
  }

  return (
    <div className="MarkdownEditor">
      <div className="MarkdownEditorControls">
        <Tabs
          textColor="secondary"
          indicatorColor="secondary"
          value={currentTab}
          onChange={(_e, newValue) => setCurrentTab(newValue)}
        >
          {MarkdownEditorTabs.map(tabName => {
            return <Tab label={tabName} key={tabName} />
          })}
        </Tabs>
        {MarkdownEditorTabs[currentTab] === 'WRITE' && (
          <div className="MarkdownEditorControlsToolbar">
            {commandList.map(type => {
              return (
                <IconButton
                  size={'small'}
                  key={type}
                  onClick={() => handleCommands(type)}
                  sx={{ width: '32px', height: '32px' }}
                >
                  <IconSvg
                    sx={{ fontSize: 'inherit' }}
                    icon={type}
                    label={startCase(type)}
                  />
                </IconButton>
              )
            })}
            <IconButton
              size={'small'}
              onClick={() => setIsShowingTagModal(true)}
              sx={{ width: '32px', height: '32px' }}
            >
              <IconSvg
                sx={{ fontSize: 'inherit' }}
                icon="tag"
                label="Mention"
              />
            </IconButton>
          </div>
        )}
      </div>
      <div>
        {MarkdownEditorTabs[currentTab] === 'WRITE' ? (
          <TextField
            inputProps={{
              ['aria-label']: 'markdown',
            }}
            onChange={e => {
              setText(e.target.value)
              handleTagModal(e.target.value)
            }}
            style={{ width: '100%' }}
            multiline
            minRows={6}
            value={text}
            inputRef={textAreaRef}
            placeholder={placeholder}
            sx={{
              textarea: {
                resize: 'vertical',
              },
            }}
          />
        ) : (
          <Box sx={{ mx: 1, my: 2 }}>
            {text ? (
              <MarkdownSynapse markdown={text} />
            ) : (
              <Typography>Nothing to preview</Typography>
            )}
          </Box>
        )}
      </div>

      <UserMentionModal
        show={isShowingTagModal}
        onClose={() => setIsShowingTagModal(false)}
        handleUserTag={handleUserTag}
      />
    </div>
  )
}
