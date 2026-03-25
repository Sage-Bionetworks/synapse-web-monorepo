import { AgentPromptSessionContext } from '@sage-bionetworks/synapse-client'
import { Chip, ChipProps } from '@mui/material'
import { Description, TableChart, Close } from '@mui/icons-material'
import React, { useMemo } from 'react'

export type SynapseChatContextChipProps = {
  context: AgentPromptSessionContext
  onRemove?: (context: AgentPromptSessionContext) => void
  variant?: 'default' | 'compact'
  showLabel?: boolean
}

type ChipConfig = {
  label: string
  icon: React.ReactElement
  color: ChipProps['color']
}

function getChipConfig(context: AgentPromptSessionContext): ChipConfig {
  const concreteType = context.concreteType

  if (concreteType === 'org.sagebionetworks.repo.model.agent.EntityContext') {
    const entityContext = context
    const versionSuffix = entityContext.versionNumber
      ? `.${entityContext.versionNumber}`
      : ''
    return {
      label: `Entity: ${entityContext.entityId ?? 'Unknown'}${versionSuffix}`,
      icon: <Description fontSize="small" />,
      color: 'primary',
    }
  } else if (
    concreteType === 'org.sagebionetworks.repo.model.agent.TableRowContext'
  ) {
    const tableContext = context
    const versionSuffix = tableContext.sourceTableEntityVersion
      ? `.${tableContext.sourceTableEntityVersion}`
      : ''
    return {
      label: `Table Row: ${
        tableContext.sourceTableEntityId ?? 'Unknown'
      }${versionSuffix}`,
      icon: <TableChart fontSize="small" />,
      color: 'secondary',
    }
  }

  // Fallback for unknown types
  return {
    label: 'Unknown Context',
    icon: <Description fontSize="small" />,
    color: 'default',
  }
}

export function SynapseChatContextChip({
  context,
  onRemove,
  variant = 'default',
  showLabel = true,
}: SynapseChatContextChipProps) {
  const chipConfig = useMemo(() => getChipConfig(context), [context])

  const handleDelete = onRemove
    ? () => {
        onRemove(context)
      }
    : undefined

  return (
    <Chip
      icon={chipConfig.icon}
      label={showLabel ? chipConfig.label : undefined}
      color={chipConfig.color}
      size={variant === 'compact' ? 'small' : 'medium'}
      onDelete={handleDelete}
      deleteIcon={handleDelete ? <Close /> : undefined}
      sx={{
        fontWeight: 500,
        '& .MuiChip-icon': {
          marginLeft: variant === 'compact' ? '4px' : '8px',
        },
      }}
    />
  )
}

export default SynapseChatContextChip
