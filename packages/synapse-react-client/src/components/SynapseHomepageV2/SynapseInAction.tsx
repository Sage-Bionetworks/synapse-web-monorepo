import { useGetQueryResultBundleWithAsyncStatus } from '@/synapse-queries'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'
import { Box } from '@mui/material'
import { SynapseInActionItem } from './SynapseInActionItem'

export type SynapseInActionProps = {
  tableId: string
}

export function SynapseInAction({ tableId }: SynapseInActionProps) {
  const { data } = useGetQueryResultBundleWithAsyncStatus({
    entityId: tableId,
    query: {
      sql: `SELECT * FROM ${tableId}`,
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
    <Box sx={{ m: 'auto', maxWidth: '1500px' }}>
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
          index % 2
            ? '#E9F2F1' // SWC-6984: intentional break out of color palette
            : undefined
        return (
          <Box
            key={row.rowId}
            sx={{
              py: { xs: '30px', sm: '0px' },
              backgroundColor: { backgroundColor },
            }}
          >
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
              imageFileHandleId={imageFileHandleId}
              mobileImageFileHandleId={mobileImageFileHandleId}
            />
          </Box>
        )
      })}
    </Box>
  )
}
