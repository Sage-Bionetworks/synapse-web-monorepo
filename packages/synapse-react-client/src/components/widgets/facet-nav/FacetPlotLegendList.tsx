import { FacetPlotLegendProps } from './FacetPlotLegendUtils'
import { ElementWithTooltip } from '../ElementWithTooltip'
import { Box, Typography } from '@mui/material'

export function FacetPlotLegendList(props: FacetPlotLegendProps) {
  const { labels, colors = [], isExpanded } = props
  if (!labels) {
    return <></>
  }
  const numLegendItems = isExpanded
    ? Math.min(labels.length, 9)
    : Math.min(labels.length, 4)
  if (numLegendItems === 0) {
    return <></>
  }
  return (
    <div
      className={`FacetNavPanel__body__legend${isExpanded ? '--expanded' : ''}`}
    >
      {labels.slice(0, numLegendItems).map((facetValue, index) => {
        return (
          <ElementWithTooltip
            tooltipText={facetValue.label}
            key={facetValue.label}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '20px auto 60px',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Box
                sx={{
                  width: '14px',
                  height: '14px',
                  cursor: 'default',
                  backgroundColor: colors[index],
                }}
                key={`legendLabel_${index}`}
                style={{ cursor: 'default' }}
              />
              <Typography
                variant="body2"
                sx={{
                  display: 'block',
                  width: '100%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  fontSize: '14px',
                }}
              >
                {facetValue.label}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'grey.600', fontSize: '14px' }}
              >
                {facetValue.count.toLocaleString()}
              </Typography>
            </Box>
          </ElementWithTooltip>
        )
      })}
    </div>
  )
}
