import React, { useState } from 'react'
import { useGetQueryResultBundleWithAsyncStatus } from '../../synapse-queries'
import { BUNDLE_MASK_QUERY_RESULTS } from '../../utils/SynapseConstants'
import { Box, useMediaQuery } from '@mui/material'
import { SynapseInActionItem } from './SynapseInActionItem'
import { useTheme } from '@mui/material'
import ImageFromSynapseTable from '../ImageFromSynapseTable'
import { useInView } from 'react-intersection-observer'

export type SynapseInActionProps = {
  tableId: string
}

export const SynapseInAction: React.FunctionComponent<SynapseInActionProps> = ({
  tableId,
}) => {
  const theme = useTheme()
  // Show the associated image (in desktop mode) if 15% of the div is visible
  const [ref, inView] = useInView({ threshold: 0.15 })
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))
  const [imageFileHandleIdInView, setImageFileHandleIdInView] = useState<
    string | undefined
  >()
  const { data } = useGetQueryResultBundleWithAsyncStatus({
    entityId: tableId,
    query: {
      sql: `SELECT * FROM ${tableId}`,
      limit: 5,
      sort: [{ column: 'order', direction: 'ASC' }],
    },
    partMask: BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  })

  const rowSet = data?.responseBody?.queryResult?.queryResults
  const headers = rowSet?.headers
  const titleColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'title',
  )!
  const descriptionColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'description',
  )!
  const tagsColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'tags',
  )!
  const imageFileColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'image',
  )!
  const logoColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'logo',
  )!
  const linkColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'url',
  )!
  const friendlyNameColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'friendlyName',
  )!
  const primaryColorColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'primaryColor',
  )!
  const secondaryColorColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'secondaryColor',
  )!

  if (!rowSet || rowSet.rows.length == 0) {
    return <></>
  }
  return (
    <Box sx={{ position: 'relative' }} ref={ref}>
      <Box sx={{ width: isMobileView ? '100%' : '45%' }}>
        <Box
          sx={{
            maxWidth: '450px',
            margin: 'auto',
            zIndex: 100,
            position: 'relative',
            backgroundColor: 'rgba(245, 249, 249, .8)',
            borderRadius: '12px',
          }}
        >
          {rowSet.rows.map(row => {
            const title = row.values[titleColIndex]!
            const description = row.values[descriptionColIndex]!
            const tags: string[] = JSON.parse(row.values[tagsColIndex]!)
            const imageFileHandleId = row.values[imageFileColIndex]!
            const logoFileHandleId = row.values[logoColIndex]!
            const link = row.values[linkColIndex]!
            const friendlyName = row.values[friendlyNameColIndex]!
            const primaryColor = row.values[primaryColorColIndex]!
            const secondaryColor = row.values[secondaryColorColIndex]!
            return (
              <Box key={row.rowId} sx={{ marginBottom: '120px' }}>
                <SynapseInActionItem
                  tableId={tableId}
                  friendlyName={friendlyName}
                  title={title}
                  description={description}
                  logoFileHandleId={logoFileHandleId}
                  tags={tags}
                  link={link}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  onInView={() => setImageFileHandleIdInView(imageFileHandleId)}
                />
                {/* In any case, preload the image file handle ID so it is ready when the user scrolls down to view it */}
                <Box sx={{ display: isMobileView ? 'block' : 'none' }}>
                  <ImageFromSynapseTable
                    tableId={tableId}
                    fileHandleId={imageFileHandleId}
                    style={{
                      marginTop: '-100px',
                    }}
                  />
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>
      {!isMobileView && inView && (
        <Box sx={{ position: 'fixed', top: '10%', right: 0, zIndex: 1 }}>
          {imageFileHandleIdInView && (
            <ImageFromSynapseTable
              tableId={tableId}
              fileHandleId={imageFileHandleIdInView}
              fadeInTimeoutMs={600}
              style={{
                marginTop: '-100px',
              }}
            />
          )}
        </Box>
      )}
    </Box>
  )
}
