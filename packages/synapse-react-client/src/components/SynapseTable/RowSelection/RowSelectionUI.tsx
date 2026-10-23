import InlineBadge from '@/components/styled/InlineBadge'
import { Box, Button, Paper, Typography } from '@mui/material'
import { useAtomValue } from 'jotai'
import pluralize from 'pluralize'
import { ReactNode } from 'react'
import { isRowSelectionUIFloatingAtom } from '../../QueryWrapper/TableRowSelectionState'

export const FLOATING_ROW_SELECTION_BAR_CLASS_NAME =
  'SynapseFloatingRowSelectionBar'

const HEIGHT_CSS_VARIABLE = 'var(--synapse-floating-row-selection-bar-height)'

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
      className={
        isRowSelectionUIFloating
          ? FLOATING_ROW_SELECTION_BAR_CLASS_NAME
          : undefined
      }
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: isRowSelectionUIFloating ? 'fixed' : 'absolute',
        bottom: isRowSelectionUIFloating
          ? 0
          : `calc(-1 * ${HEIGHT_CSS_VARIABLE})`,
        left: 0,
        width: '100%',
        height: HEIGHT_CSS_VARIABLE,
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
