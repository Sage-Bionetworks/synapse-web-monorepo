import { Box, Typography } from '@mui/material'
import { AccessRequirement, ObjectType } from '@sage-bionetworks/synapse-types'
import React from 'react'
import WikiMarkdownEditorButton from '../WikiMarkdownEditorButton'

export type AccessRequirementWikiInstructionsProps = {
  accessRequirement: AccessRequirement
}

export const AccessRequirementWikiInstructions: React.FunctionComponent<
  AccessRequirementWikiInstructionsProps
> = (props: AccessRequirementWikiInstructionsProps) => {
  const { accessRequirement } = props

  return (
    <Box mb={2}>
      <Typography variant="body1" fontWeight={700}>
        {'Instructions (wiki)'}
      </Typography>
      <WikiMarkdownEditorButton
        ownerObjectType={ObjectType.ACCESS_REQUIREMENT}
        ownerObjectId={accessRequirement.id.toString()}
        displayWikiMarkdown={true}
        buttonProps={{ children: 'Edit Instructions' }}
      />
    </Box>
  )
}
