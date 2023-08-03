import React from 'react'
import CardContainer from '../CardContainer'
import SynapseTable, { SynapseTableProps } from '../SynapseTable'
import { CardConfiguration } from '../CardContainerLogic'
import { useQueryContext } from '../QueryContext'
import { useSynapseContext } from '../../utils'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import LastUpdatedOn from './LastUpdatedOn'
import { Box, LinearProgress, Typography } from '@mui/material'

export type FilterAndViewProps = {
  tableConfiguration:
    | Omit<
        SynapseTableProps,
        'synapseContext' | 'queryContext' | 'queryVisualizationContext'
      >
    | undefined
  cardConfiguration: CardConfiguration | undefined
  hideDownload?: boolean
}

const FilterAndView = (props: FilterAndViewProps) => {
  const { tableConfiguration, cardConfiguration, hideDownload } = props
  const synapseContext = useSynapseContext()
  const queryContext = useQueryContext()
  const { data, isLoadingNewBundle, asyncJobStatus } = queryContext
  const queryVisualizationContext = useQueryVisualizationContext()
  return (
    <div className={`FilterAndView`}>
      {!data && isLoadingNewBundle && (
        <Box sx={{ mt: 15, mx: 15 }}>
          <LinearProgress />
          {asyncJobStatus?.progressMessage && (
            <Typography
              variant={'smallText1'}
              sx={{
                color: 'grey.600',
                fontSize: '10px',
                textAlign: 'center',
                my: 1,
              }}
            >
              {asyncJobStatus?.progressMessage}
            </Typography>
          )}
        </Box>
      )}
      {tableConfiguration ? (
        <SynapseTable
          {...tableConfiguration}
          synapseContext={synapseContext}
          queryContext={queryContext}
          queryVisualizationContext={queryVisualizationContext}
          hideDownload={hideDownload}
        />
      ) : (
        <></>
      )}
      {cardConfiguration ? <CardContainer {...cardConfiguration} /> : <></>}
      <LastUpdatedOn />
    </div>
  )
}

export default FilterAndView
