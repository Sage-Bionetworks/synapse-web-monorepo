import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import ExpandCollapseButton from '../../ExpandCollapseButton'
import { chromeLight, Inspector } from 'react-inspector'

type ComplexJSONRendererProps = {
  value: any
}

/**
 * Handles rendering any complex JSON value in a Synapse table cell. This generally acts as a fallback renderer if the
 * JSON data doesn't have a simple structure handled by a different renderer.
 * @param props
 * @constructor
 */
export function ComplexJSONRenderer(props: ComplexJSONRendererProps) {
  const { value } = props
  const [expandAll, setExpandAll] = useState(false)

  // @ts-expect-error - the theme prop type provided by react-inspector is wrong
  const theme: ComponentProps<typeof Inspector>['theme'] = {
    ...chromeLight,
    BASE_BACKGROUND_COLOR: 'none',
  }

  return (
    <>
      <Typography
        variant={'smallText1'}
        sx={{
          py: 0.5,
          color: 'grey.600',
          fontStyle: 'italic',
          cursor: 'pointer',
        }}
        onClick={() => setExpandAll(v => !v)}
      >
        {expandAll ? 'Collapse' : 'Expand'} all
        <ExpandCollapseButton
          className="ExpandableTableData__expandButton"
          isExpanded={expandAll}
        />
      </Typography>
      <Box sx={{ pl: '2px' }}>
        <Inspector
          data={value}
          theme={theme}
          table={false}
          key={
            // Setting `expandLevel` to 0 doesn't trigger a re-render, so force the rerender by updating the key
            String(expandAll)
          }
          expandLevel={
            expandAll
              ? // making this number very large actually results in a performance hit, so choose a reasonably small number
                20
              : 0
          }
        />
      </Box>
    </>
  )
}
