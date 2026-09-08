import { Box } from '@mui/material'
import AddConditionsForUseButton from '../../../AccessRequirement/AddConditionsForUseButton/AddConditionsForUseButton'

export type TitleBarPropertiesProps = {
  entityId: string
  /* Callback invoked when an ACT member clicks "Add Conditions for Use". */
  onActMemberClickAddConditionsForUse: () => void
}

/**
 * The TitleBarProperties component displays a tabular view of the entity metadata on the Entity page.
 */
export default function TitleBarProperties(props: TitleBarPropertiesProps) {
  const { entityId, onActMemberClickAddConditionsForUse } = props

  return (
    <Box sx={{ padding: '20px 0' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <AddConditionsForUseButton
          entityId={entityId}
          onACTMemberClick={onActMemberClickAddConditionsForUse}
        />
      </Box>
    </Box>
  )
}
