import { MenuItem, Select, Typography } from '@mui/material'
import { useId, useState } from 'react'
import { qbGroupFromDefinition } from '../QueryBuilder/queryBuilderOperations'
import { QBGroup, QBGroupDefinition } from '../QueryBuilder/QueryBuilderTypes'
import { useQBFacetSourceMetadata } from '../QueryBuilder/useQBFacetSourceMetadata'
import styles from './CohortBuilder.module.scss'

export const SAMPLE_QUERY_TITLE = 'Try a sample query'
export const SAMPLE_QUERY_DESCRIPTION =
  'Not sure where to start? Load a sample query below to see how conditions and groups work.'
export const SAMPLE_QUERY_PLACEHOLDER = 'Select a query'

export type CohortSampleQuerySelectorProps = {
  /** Sample queries by name, listed in insertion order. */
  sampleQueries: Record<string, QBGroupDefinition>
  tree: QBGroup | null
  onTreeChange: (next: QBGroup) => void
}

/**
 * Loads a sample query into the Query Builder, replacing its tree. The results update when the user applies the
 * query. Must be rendered inside a Suspense boundary, as it reads the Query Builder's column models.
 */
export function CohortSampleQuerySelector(
  props: CohortSampleQuerySelectorProps,
) {
  const { sampleQueries, tree, onTreeChange } = props
  const { columnModels } = useQBFacetSourceMetadata()
  const [loaded, setLoaded] = useState<{ name: string; tree: QBGroup }>()
  const titleId = useId()

  // Any edit replaces the loaded tree, which shows the placeholder again so that the same sample can be reloaded.
  const selectedName = loaded?.tree === tree ? loaded.name : ''

  return (
    <section className={styles.sampleQuery} aria-labelledby={titleId}>
      <Typography
        id={titleId}
        component="h2"
        className={styles.sampleQueryTitle}
      >
        {SAMPLE_QUERY_TITLE}
      </Typography>
      <Typography variant="body1">{SAMPLE_QUERY_DESCRIPTION}</Typography>
      <Select
        labelId={titleId}
        size="small"
        displayEmpty
        value={selectedName}
        className={styles.sampleQuerySelect}
        renderValue={name =>
          name || (
            <span className={styles.sampleQueryPlaceholder}>
              {SAMPLE_QUERY_PLACEHOLDER}
            </span>
          )
        }
        onChange={event => {
          const name = event.target.value
          const next = qbGroupFromDefinition(sampleQueries[name], columnModels)
          setLoaded({ name, tree: next })
          onTreeChange(next)
        }}
      >
        {Object.keys(sampleQueries).map(name => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </section>
  )
}
