import React, { useState } from 'react'
import { useGetQueryResultBundleWithAsyncStatus } from '../../synapse-queries'
import { BUNDLE_MASK_QUERY_RESULTS } from '../../utils/SynapseConstants'
import { Box, useMediaQuery } from '@mui/material'
import { SynapseInActionItem } from './SynapseInActionItem'
import { useTheme } from '@mui/material'
import ImageFromSynapseTable from '../ImageFromSynapseTable'
import { useInView } from 'react-intersection-observer'
import { ColorPartial } from '@mui/material/styles/createPalette'

export type SynapseInActionProps = {
  tableId: string
}

export const SynapseInAction: React.FunctionComponent<SynapseInActionProps> = ({
  tableId,
}) => {
  const theme = useTheme()
  // Show the associated image (in desktop mode) if 10% of the div is visible
  const [ref, inView] = useInView({ threshold: 0.1 })
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
  const mobileImageFileColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'mobileImage',
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
      <Box sx={{ width: { xs: '100%', sm: '45%' } }}>
        <Box
          sx={{
            maxWidth: '450px',
            m: 'auto',
            zIndex: 100,
            position: 'relative',
            backgroundColor: 'rgba(245, 249, 249, .8)',
            borderRadius: '12px',
          }}
        >
          {rowSet.rows.map((row, index) => {
            const title = row.values[titleColIndex]!
            const description = row.values[descriptionColIndex]!
            const tags: string[] = JSON.parse(row.values[tagsColIndex]!)
            const imageFileHandleId = row.values[imageFileColIndex]!
            const mobileImageFileHandleId = row.values[mobileImageFileColIndex]!
            const logoFileHandleId = row.values[logoColIndex]!
            const link = row.values[linkColIndex]!
            const friendlyName = row.values[friendlyNameColIndex]!
            const primaryColor = row.values[primaryColorColIndex]!
            const secondaryColor = row.values[secondaryColorColIndex]!
            const backgroundColor =
              isMobileView && index % 2
                ? (theme.palette.secondary as ColorPartial)[100]
                : undefined
            return (
              <Box
                key={row.rowId}
                sx={{
                  py: { xs: '30px', sm: '120px' },
                  backgroundColor: { backgroundColor },
                }}
              >
                {/* Preload the desktop image file handle ID so it is ready when the user scrolls down to view it */}
                <Box
                  sx={{
                    display: 'none',
                  }}
                >
                  <ImageFromSynapseTable
                    tableId={tableId}
                    fileHandleId={imageFileHandleId}
                  />
                </Box>
                {/* If mobile, show the mobile image file */}
                <Box
                  sx={{
                    display: { xs: 'flex', sm: 'none' },
                    justifyContent: 'center',
                    width: '100%',
                    img: { width: '320px' },
                  }}
                >
                  <ImageFromSynapseTable
                    tableId={tableId}
                    fileHandleId={mobileImageFileHandleId}
                  />
                </Box>
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
