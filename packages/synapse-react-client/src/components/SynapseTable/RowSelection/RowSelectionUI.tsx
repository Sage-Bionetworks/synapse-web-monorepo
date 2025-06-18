import InlineBadge from '@/components/styled/InlineBadge'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useAtomValue } from 'jotai'
import pluralize from 'pluralize'
import { ReactNode } from 'react'
import { isRowSelectionUIFloatingAtom } from '../../QueryWrapper/TableRowSelectionState'

export type RowSelectionUIProps = {
  show?: boolean
  selectedRowCount: number
  onClearSelection: () => void
  customControls?: ReactNode
}

/**
 * UI-only component for displaying the number of table rows selected, along with actions that can be performed on those rows
 */
export function RowSelectionUI(props: RowSelectionUIProps) {
  const {
    show = true,
    selectedRowCount,
    onClearSelection,
    customControls = <></>,
  } = props
  const isRowSelectionUIFloating = useAtomValue(isRowSelectionUIFloatingAtom)
  if (!show) {
    return <></>
  }

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: isRowSelectionUIFloating ? 'fixed' : 'absolute',
        bottom: isRowSelectionUIFloating ? 0 : -70,
        left: 0,
        width: '100%',
        height: '70px',
        zIndex: 1,
        px: 2.5,
      }}
    >
      <Button
        variant="text"
        color="error"
        onClick={() => {
          onClearSelection()
        }}
      >
        Clear Selection
      </Button>
      <Box
        sx={{
          display: 'flex',
          gap: 2.5,
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 1.5,
          }}
        >
          <InlineBadge
            badgeContent={selectedRowCount.toLocaleString()}
            color="primary"
            max={Infinity}
          />
          <Typography variant="body1">
            {pluralize('Row', selectedRowCount)} Selected
          </Typography>
        </Box>
        {customControls}
      </Box>
    </Paper>
  )
}
