import React from 'react'
import CardContainer from '../CardContainer'
import SynapseTable, { SynapseTableProps } from '../SynapseTable'
import { CardConfiguration } from '../CardContainerLogic'
import { useQueryContext } from '../QueryContext'
import LastUpdatedOn from './LastUpdatedOn'
import { Box, LinearProgress, Typography } from '@mui/material'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import { useAtomValue } from 'jotai'
import {
  isLoadingNewBundleAtom,
  tableQueryDataAtom,
} from '../QueryWrapper/QueryWrapper'

export type FilterAndViewProps = {
  tableConfiguration?: SynapseTableProps
  cardConfiguration: CardConfiguration | undefined
  hideDownload?: boolean
}

const FilterAndView = (props: FilterAndViewProps) => {
  const { cardConfiguration, hideDownload } = props
  const tableConfiguration = useDeepCompareMemoize(
    props.tableConfiguration
      ? {
          ...props.tableConfiguration,
          hideDownload,
        }
      : undefined,
  )
  const queryContext = useQueryContext()
  const { asyncJobStatus } = queryContext
  const isLoadingNewBundle = useAtomValue(isLoadingNewBundleAtom)
  const data = useAtomValue(tableQueryDataAtom)
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
      {tableConfiguration ? <SynapseTable {...tableConfiguration} /> : <></>}
      {cardConfiguration ? <CardContainer {...cardConfiguration} /> : <></>}
      <LastUpdatedOn />
    </div>
  )
}

export default FilterAndView
