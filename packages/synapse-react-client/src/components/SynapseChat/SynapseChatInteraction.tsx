import React from 'react'
import { ListItem, ListItemText } from '@mui/material'
import { useTheme } from '@mui/material'
import { ColorPartial } from '@mui/material/styles/createPalette'
import { SkeletonParagraph } from '../Skeleton'

export type SynapseChatInteractionProps = {
  userMessage: string
  chatResponseText?: string
}

export const SynapseChatInteraction: React.FunctionComponent<
  SynapseChatInteractionProps
> = ({ userMessage, chatResponseText }) => {
  const theme = useTheme()

  return (
    <>
      <ListItem sx={{ justifyContent: 'flex-end' }}>
        <ListItemText
          primary={userMessage}
          sx={{
            backgroundColor: (theme.palette.secondary as ColorPartial)[100],
            borderRadius: '10px',
            padding: '10px',
            maxWidth: '75%',
          }}
        />
      </ListItem>
      {chatResponseText && (
        <ListItem>
          <ListItemText
            primary={chatResponseText}
            sx={{
              borderRadius: '10px',
              padding: '10px',
              maxWidth: '100%',
            }}
          />
        </ListItem>
      )}
      {!chatResponseText && <SkeletonParagraph numRows={3} />}
    </>
  )
}

export default SynapseChatInteraction
