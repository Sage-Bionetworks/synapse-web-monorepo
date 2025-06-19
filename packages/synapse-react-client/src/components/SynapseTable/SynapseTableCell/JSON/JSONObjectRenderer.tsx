import { useState } from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Typography from '@mui/material/Typography'
import ExpandCollapseButton from '../../ExpandCollapseButton'
import { JSONPrimitiveType } from './JSONRendererUtils'
import { JSONPrimitiveRenderer } from './JSONPrimitiveRenderer'

const OBJECT_DEFAULT_NUM_KEYS_TO_SHOW = 3
type JSONObjectKeyValuePairProps = {
  keyName: string
  value: JSONPrimitiveType
}

function JSONObjectKeyValuePair(props: JSONObjectKeyValuePairProps) {
  const { keyName, value } = props

  return (
    <Box
      sx={{
        display: 'flex',
        mb: 1,
      }}
    >
      <Typography variant={'smallText1'}>
        <JSONPrimitiveRenderer value={keyName} />
      </Typography>
      <Typography
        variant={'smallText1'}
        sx={{ color: 'grey.600', fontStyle: 'italic', px: 0.5 }}
      >
        <JSONPrimitiveRenderer value={value} />
      </Typography>
    </Box>
  )
}

type JSONObjectRendererProps = {
  value: Record<string, JSONPrimitiveType>
}

/**
 * Handles rendering a JSON object where all values are JSON primitives in a Synapse table cell.
 * @param props
 * @constructor
 */
export function JSONObjectRenderer(props: JSONObjectRendererProps) {
  const { value } = props
  const numKeys = Object.keys(value).length
  const isCollapsible = numKeys > OBJECT_DEFAULT_NUM_KEYS_TO_SHOW
  const [expanded, setExpanded] = useState(false)

  if (numKeys === 0) {
    return (
      <Typography variant={'smallText1'} className="SRC-inactive">
        {'Empty object'}
      </Typography>
    )
  }

  return (
    <>
      {Object.entries(value)
        // Render the first set of items unconditionally
        .slice(0, OBJECT_DEFAULT_NUM_KEYS_TO_SHOW)
        .map(([key, val]) => (
          <JSONObjectKeyValuePair key={key} keyName={key} value={val} />
        ))}
      {/* Render the rest of the items in a Collapse */}
      {isCollapsible && (
        <>
          <Collapse in={expanded}>
            {Object.entries(value)
              .slice(OBJECT_DEFAULT_NUM_KEYS_TO_SHOW)
              .map(([key, val]) => (
                <JSONObjectKeyValuePair key={key} keyName={key} value={val} />
              ))}
          </Collapse>
          <Typography
            variant={'smallText1'}
            sx={{ mb: 0.5, color: 'grey.600', fontStyle: 'italic' }}
          >
            {expanded
              ? ''
              : `${(
                  numKeys - OBJECT_DEFAULT_NUM_KEYS_TO_SHOW
                ).toLocaleString()} more`}
            <ExpandCollapseButton
              isExpanded={expanded}
              className="ExpandableTableData__expandButton"
              onClick={() => setExpanded(v => !v)}
            />
          </Typography>
        </>
      )}
    </>
  )
}
