import { Box, Typography } from '@mui/material'
import { AccessRequirement, ObjectType } from '@sage-bionetworks/synapse-types'
import WikiMarkdownEditorButton from '../WikiMarkdownEditorButton'

export type AccessRequirementWikiInstructionsProps = {
  accessRequirement: AccessRequirement
}

export function AccessRequirementWikiInstructions(
  props: AccessRequirementWikiInstructionsProps,
) {
  const { accessRequirement } = props

  return (
    <Box
      sx={{
        mb: 2,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 700,
        }}
      >
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
