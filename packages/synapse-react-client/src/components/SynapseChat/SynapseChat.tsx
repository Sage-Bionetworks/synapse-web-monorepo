import React, { KeyboardEventHandler, useState } from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  FormControl,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { useTheme } from '@mui/material'
import { ColorPartial } from '@mui/material/styles/createPalette'
import { OutlinedInput } from '@mui/material'
import { ArrowCircleUpTwoTone, ArrowUpward } from '@mui/icons-material'

export type SynapseChatProps = {}

export type ChatMessage = {
  text: string
  owner: string
}

export const SynapseChat: React.FunctionComponent<SynapseChatProps> = () => {
  const theme = useTheme()
  const initMessages: ChatMessage[] = [
    { text: 'what does the interaction look like?', owner: 'self' },
    {
      text: 'Here is an example fake response, what do you think?!',
      owner: 'synapse',
    },
  ]
  const [messages, setMessages] = useState(initMessages)
  const [currentMessage, setCurrentMessage] = useState('')

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, { text: currentMessage, owner: 'self' }])
      setCurrentMessage('')
    }
  }

  const handleKeyDown: KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSendMessage()
    }
  }
  const isMessage = !!currentMessage
  const sendMessageButtonColor = (theme.palette.secondary as ColorPartial)[300]
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
      maxWidth="600px"
      mx="auto"
      p={2}
    >
      <Paper elevation={3} sx={{ flexGrow: 1, overflowY: 'auto', p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          SynapseChat
        </Typography>
        <List>
          {messages.map((message, index) => {
            const isUserMessage = message.owner == 'self'
            return (
              <ListItem
                key={index}
                sx={{ justifyContent: isUserMessage ? 'flex-end' : undefined }}
              >
                <ListItemText
                  primary={message.text}
                  // secondary={message.owner}
                  sx={{
                    backgroundColor: isUserMessage
                      ? (theme.palette.secondary as ColorPartial)[100]
                      : undefined,
                    borderRadius: '10px',
                    padding: '10px',
                    maxWidth: isUserMessage ? '75%' : '100%',
                  }}
                />
              </ListItem>
            )
          })}
        </List>
      </Paper>
      <Box component="form" onSubmit={handleSendMessage}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <OutlinedInput
            value={currentMessage}
            endAdornment={
              <InputAdornment
                position="end"
                sx={{ p: '0px', ml: '7px', mr: '13px' }}
              >
                <IconButton
                  disabled={!isMessage}
                  onClick={handleSendMessage}
                  sx={{
                    color: sendMessageButtonColor,
                    borderStyle: 'solid',
                    borderWidth: isMessage ? '2px' : '1px',
                    borderColor: isMessage ? sendMessageButtonColor : 'gray',
                  }}
                >
                  <ArrowUpward />
                </IconButton>
              </InputAdornment>
            }
            placeholder={'Message SynapseChat'}
            sx={{ borderRadius: 96.6 }}
            onChange={e => setCurrentMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </FormControl>
      </Box>
    </Box>
  )
}

export default SynapseChat
