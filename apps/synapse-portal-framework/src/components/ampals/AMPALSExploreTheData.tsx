import React from 'react'
import { Box, useTheme } from '@mui/material'
import { PortalSectionHeader, UpsetPlot } from 'synapse-react-client'
import { handleUpsetPlotClick } from '@/utils/handleUpsetPlotClick'
import { useNavigate } from 'react-router'

type AMPALSExploreTheDataProps = {
  sql: string
}

const AMPALSExploreTheData = ({
  sql,
}: AMPALSExploreTheDataProps): React.ReactNode => {
  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <Box sx={{ padding: { xs: '40px', lg: '80px' } }}>
      <PortalSectionHeader
        title="Explore the data"
        summaryText="Use this UpSet Plot to explore the intersections of different datasets available in the portal. The bars represent the overlap between datasets, helping you easily identify shared data points across multiple sources for more targeted research."
        buttonText="View All Datasets"
        link="Explore/Datasets"
        reverseButtonAndText={true}
        sx={{
          '.MuiStack-root': {
            gap: '10px',
            '.MuiStack-root': {
              gap: '20px',
            },
          },
          h2: {
            color: 'grey.900',
            fontSize: '24px',
            lineHeight: 'normal',
            fontWeight: 700,
            border: 'none',
          },
          '.MuiTypography-body1': {
            fontSize: '16px',
            lineHeight: '20px',
            width: '640px',
            fontStyle: 'normal',
            color: 'grey.800',
          },
        }}
      />
      <UpsetPlot
        sql={sql}
        customPlotColor={theme.palette.primary.main}
        maxBarCount={20}
        setName="# People per data type (all datastes)"
        combinationName="# of Files"
        selectionOpacity={1}
        variant="ampals"
        onClick={handleUpsetPlotClick({
          sql: 'SELECT * FROM syn52234652', // todo: update this to the correct sql
          explorePath: 'Datasets',
          columnName: 'dataTypes',
          navigate,
        })}
      />
    </Box>
  )
}
export default AMPALSExploreTheData
