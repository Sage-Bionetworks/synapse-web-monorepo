import { Box, Link, Typography } from '@mui/material'
import {
  FacetPlotLegendProps,
  MAX_LEGEND_LENGTH,
  truncate,
} from './FacetPlotLegendUtils'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'

type FacetPlotLegendTableProps = FacetPlotLegendProps & {
  facetName?: string
  linkToFullQuery?: string
}

export function FacetPlotLegendTable(props: FacetPlotLegendTableProps) {
  const { facetName, labels, colors = [], isExpanded, linkToFullQuery } = props

  const { unitDescription } = useQueryVisualizationContext()

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
    <>
      <Box
        component={'table'}
        className={`FacetNavPanel__body__legend${
          isExpanded ? '--expanded' : ''
        }`}
        sx={{ width: '100%', color: 'grey.800', 'td,th': { py: 0.5 } }}
      >
        <thead>
          <Box
            component={'tr'}
            sx={{ borderBottom: '1px solid', borderBottomColor: 'grey.300' }}
          >
            <th>
              <Typography
                variant={'body1'}
                sx={{
                  fontWeight: 700,
                  size: '14px',
                }}
              >
                {facetName}
              </Typography>
            </th>
            <th style={{ textAlign: 'right', marginRight: '16px' }}>
              <Typography
                variant={'body1'}
                sx={{
                  size: '14px',
                  fontWeight: 700,
                  textAlign: 'right',
                }}
              >
                {unitDescription}
              </Typography>
            </th>
          </Box>
        </thead>
        <tbody>
          {labels.slice(0, numLegendItems).map((facetValue, index) => {
            const labelDisplay = truncate(facetValue.label, MAX_LEGEND_LENGTH)
            return (
              <tr key={facetValue.label}>
                <td>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
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
                    <Typography variant="body1" sx={{ fontSize: '14px' }}>
                      {labelDisplay}
                    </Typography>
                  </Box>
                </td>
                <td>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '14px',
                      color: 'grey.600',
                      textAlign: 'right',
                    }}
                  >
                    {facetValue.count}
                  </Typography>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Box>
      {linkToFullQuery && (
        <Box sx={{ my: 2 }}>
          <Link href={linkToFullQuery}>
            View {labels.length} {facetName} options
          </Link>
        </Box>
      )}
    </>
  )
}
