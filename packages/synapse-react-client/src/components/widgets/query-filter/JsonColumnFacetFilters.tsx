import { Box, Collapse } from '@mui/material'
import React, { useState } from 'react'
import { FacetFilterHeader } from './FacetFilterHeader'
import { ColumnModel, FacetColumnResult } from '@sage-bionetworks/synapse-types'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { useAtomValue } from 'jotai'
import { tableQueryDataAtom } from '../../QueryWrapper/QueryWrapper'
import { getCorrespondingColumnForFacet } from '../../../utils/functions/queryUtils'
import { EnumFacetFilter } from './EnumFacetFilter/EnumFacetFilter'
import { RangeFacetFilter } from './RangeFacetFilter'

export type JsonColumnFacetFiltersProps = {
  /* The parent ColumnModel that contains the JSON Subcolumns to show in this panel */
  columnModel: ColumnModel
  /* The set of JSON Subcolumn FacetColumnResults that will be shown in this panel */
  facets: FacetColumnResult[]
}

/**
 * Renders a set of facet filters that are all derived from the same JSON Column.
 * @param props
 * @constructor
 */
export default function JsonColumnFacetFilters(
  props: JsonColumnFacetFiltersProps,
) {
  const { columnModel, facets } = props
  const data = useAtomValue(tableQueryDataAtom)
  const { getColumnDisplayName } = useQueryVisualizationContext()
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  if (data?.columnModels == undefined) {
    return <></>
  }
  if (!columnModel.jsonSubColumns) {
    console.warn('Supplied column model has no jsonSubColumns')
    return <></>
  }
  return (
    <Box className={'FacetFilterControls__facet'}>
      <FacetFilterHeader
        label={getColumnDisplayName(columnModel.name)}
        isCollapsed={isCollapsed}
        onClick={(isCollapsed: boolean) => setIsCollapsed(isCollapsed)}
      />
      <Collapse className="JsonColumnFacetFilters" in={!isCollapsed}>
        <Box sx={{ my: 2 }}>
          {facets.map(jsonSubcolumnFacet => {
            const jsonSubColumnModel = getCorrespondingColumnForFacet(
              jsonSubcolumnFacet,
              data.columnModels!,
            )
            return (
              <Box
                className="FacetFilterControls__facet"
                key={jsonSubcolumnFacet.jsonPath}
                sx={{
                  my: 1.5,
                  backgroundColor: 'grey.100',
                  p: 2.5,
                  '.FacetFilterHeader': {
                    borderBottom: 'none',
                  },
                }}
              >
                {jsonSubcolumnFacet.facetType === 'enumeration' &&
                  jsonSubColumnModel && (
                    <EnumFacetFilter
                      containerAs="Collapsible"
                      facet={jsonSubcolumnFacet}
                      hideCollapsible={true}
                    />
                  )}
                {jsonSubcolumnFacet.facetType === 'range' &&
                  jsonSubColumnModel && (
                    <RangeFacetFilter
                      facetResult={jsonSubcolumnFacet}
                      hideCollapsible={true}
                    />
                  )}
              </Box>
            )
          })}
        </Box>
      </Collapse>
    </Box>
  )
}
