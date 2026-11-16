import { Link, Stack } from '@mui/material'
import { DatasetAccessStatus } from './DatasetAccessStatus'
import { getDatasetFilesLink } from './datasetSource'

export type DatasetCardAdornmentProps = {
  /** Maps a column name to its index in `data` */
  schema: Record<string, number>
  /** The card's row values */
  data: string[]
}

function getValue(
  props: DatasetCardAdornmentProps,
  columnName: string,
): string | null {
  const index = props.schema[columnName]
  return index === undefined ? null : (props.data[index] ?? null)
}

/**
 * Card adornment for ALS KP dataset cards: the dataset's access status and a
 * direct link to its files (on Synapse or in the external repository).
 */
export function DatasetCardAdornment(props: DatasetCardAdornmentProps) {
  const id = getValue(props, 'id')
  const source = getValue(props, 'source')
  const filesLink = getDatasetFilesLink(source, id, getValue(props, 'url'))

  return (
    <Stack direction="row" sx={{ alignItems: 'center', gap: '10px' }}>
      {id && (
        <DatasetAccessStatus
          source={source}
          id={id}
          datasetCode={getValue(props, 'dataset_code')}
          showText
        />
      )}
      {filesLink && (
        <Link href={filesLink.href} target="_blank" rel="noreferrer">
          {filesLink.label}
        </Link>
      )}
    </Stack>
  )
}
