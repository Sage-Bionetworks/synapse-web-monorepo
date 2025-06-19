import { JSONPrimitiveType } from './JSONRendererUtils'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Typography from '@mui/material/Typography'
import { JSONPrimitiveRenderer } from './JSONPrimitiveRenderer'
import ExpandCollapseButton from '../../ExpandCollapseButton'

type JSONArrayRendererProps = { value: JSONPrimitiveType[] }

/**
 * Handles rendering a JSON array of "primitive" types in a Synapse table cell.
 * @param props
 * @constructor
 */
export function JSONArrayRenderer(props: JSONArrayRendererProps) {
  const { value } = props
  const [expanded, setExpanded] = useState(false)
  const showCollapseText = value.length > 1

  if (value.length === 0) {
    return (
      <Typography variant={'smallText1'} className="SRC-inactive">
        {'Empty array'}
      </Typography>
    )
  }
  if (value.length === 1) {
    return (
      <Typography variant={'smallText1'}>
        <JSONPrimitiveRenderer value={value[0]} />
      </Typography>
    )
  }
  return (
    <>
      {showCollapseText && (
        <Typography
          variant={'smallText1'}
          sx={{ color: 'grey.600', fontStyle: 'italic', mb: 1 }}
        >
          {`${value.length.toLocaleString()} items`}
          <ExpandCollapseButton
            isExpanded={expanded}
            className="ExpandableTableData__expandButton"
            onClick={() => setExpanded(!expanded)}
          />
        </Typography>
      )}
      <Collapse in={expanded}>
        {value.map((val: JSONPrimitiveType, index: number) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              gap: 0.5,
              mb: 1,
            }}
          >
            <Typography variant={'smallText1'}>
              <JSONPrimitiveRenderer value={val} />
            </Typography>
          </Box>
        ))}
      </Collapse>
    </>
  )
}
