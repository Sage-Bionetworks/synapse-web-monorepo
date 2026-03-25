import { AgentPromptSessionContext } from '@sage-bionetworks/synapse-client'
import { AddCircleOutline } from '@mui/icons-material'
import {
  Box,
  Chip,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import SynapseChatContextChip from './SynapseChatContextChip'

export type SynapseChatContextChipsProps = {
  contexts: AgentPromptSessionContext[]
  onRemove?: (context: AgentPromptSessionContext) => void
  onAdd?: () => void
  maxVisible?: number
  variant?: 'default' | 'compact'
}

export function SynapseChatContextChips({
  contexts,
  onRemove,
  onAdd,
  maxVisible,
  variant = 'default',
}: SynapseChatContextChipsProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Don't render anything if there are no contexts and no add handler
  if ((!contexts || contexts.length === 0) && !onAdd) {
    return null
  }

  // Determine which contexts to show
  const shouldTruncate = maxVisible && contexts.length > maxVisible
  const visibleContexts =
    shouldTruncate && !isExpanded ? contexts.slice(0, maxVisible) : contexts
  const hiddenCount = shouldTruncate ? contexts.length - maxVisible : 0

  return (
    <Box
      sx={{
        backgroundColor: 'grey.50',
        borderRadius: 1,
        px: 2,
        py: 1.5,
        border: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      <Stack direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <Typography
          variant="smallText1"
          sx={{ color: 'grey.700', fontWeight: 500, flexGrow: 1 }}
        >
          Context included with your message:
        </Typography>
        {onAdd && (
          <Tooltip title="Add entity">
            <IconButton size="medium" onClick={onAdd} aria-label="Add entity">
              <AddCircleOutline fontSize="medium" />
            </IconButton>
          </Tooltip>
        )}
      </Stack>
      <Stack
        direction="row"
        sx={{
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        {visibleContexts.map((context, index) => (
          <SynapseChatContextChip
            key={`${context.concreteType}-${index}`}
            context={context}
            onRemove={onRemove}
            variant={variant}
          />
        ))}
        {shouldTruncate && !isExpanded && hiddenCount > 0 && (
          <Chip
            label={`+${hiddenCount} more`}
            size={variant === 'compact' ? 'small' : 'medium'}
            variant="outlined"
            onClick={() => setIsExpanded(true)}
            sx={{
              cursor: 'pointer',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'grey.100',
              },
            }}
          />
        )}
        {isExpanded && shouldTruncate && (
          <Chip
            label="Show less"
            size={variant === 'compact' ? 'small' : 'medium'}
            variant="outlined"
            onClick={() => setIsExpanded(false)}
            sx={{
              cursor: 'pointer',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'grey.100',
              },
            }}
          />
        )}
      </Stack>
    </Box>
  )
}

export default SynapseChatContextChips
