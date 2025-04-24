import { Box, Button, Typography, useTheme } from '@mui/material'
import { UpsetPlot } from 'synapse-react-client'

type AMPALSExploretheDataProps = {
  sql: string
}

const AMPALSExploretheData = ({ sql }: AMPALSExploretheDataProps) => {
  const theme = useTheme()
  return (
    <Box sx={{ padding: { xs: '40px', lg: '80px' } }}>
      <h2>Explore the data</h2>
      <p>
        Use this UpSet Plot to explore the intersections of different datasets
        available in the portal. The bars represent the overlap between
        datasets, helping you easily identify shared data points across multiple
        sources for more targeted research.
      </p>
      <Button
        variant="contained"
        href="https://www.all-als.org/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          padding: '6px 24px',
          whiteSpace: 'nowrap',
          height: '38px',
          width: { xs: '100%', md: 'fit-content' },
          bordeRadius: '3px',
          display: 'flex',
          gap: '10px',
        }}
      >
        <Typography
          sx={{ fontSize: '18px', fontWeight: '600', lineHeight: '144%' }}
        >
          View All Datasets
        </Typography>
      </Button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', width: 0, height: 0 }}
      >
        <defs>
          <pattern
            id="diagonalHatchPattern"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            {/* Draw a backward slash line pattern going from top-left to bottom-right */}
            <line
              x1="0"
              y1="0"
              x2="10"
              y2="10"
              stroke={theme.palette.grey[700]}
              strokeWidth="1"
            />
          </pattern>
        </defs>
      </svg>
      <UpsetPlot
        sql={sql}
        customPlotColor={theme.palette.primary.main}
        maxBarCount={20}
        setName="# People per data type (all datastes)"
        combinationName="# of Files"
        selectionOpacity={1}
        sx={{
          width: '100%',
          '& .selectionHint-upset-': {
            stroke: 'transparent !important',
          },
          '& [class^="selectionHint-upset-"]': {
            stroke: 'transparent !important',
          },
          '& g[class^="interactive-upset-"]:hover line[class^="upsetLine-"]': {
            stroke: theme.palette.primary.main,
            strokeWidth: '3px',
            strokeOpacity: 1,
          },
          '& line[class^="upsetLine-"]': {
            strokeOpacity: 0,
          },
          '& rect[class^="fillPrimary-upset-"]': {
            fill: 'url(#diagonalHatchPattern)',
            stroke: theme.palette.grey[700],
            strokeWidth: 2,
          },
        }}
        // onClick={handleUpsetPlotClick}
        // summaryLinkText='Explore All Data'
        // summaryLink='/Explore/Data'
      />
    </Box>
  )
}
export default AMPALSExploretheData
