import { useMemo } from 'react'
import { formatSynapseSql } from './formatSynapseSql'
import styles from './QueryBuilderControls.module.scss'
import { QBSqlPreviewPlaceholder } from './QBSqlPreviewPlaceholder'
import { QBGroup } from './QueryBuilderTypes'
import { useQBCombinedSql } from './useQBCombinedSql'

type QBSqlPreviewProps = {
  tree: QBGroup
}

/** The formatted SQL that the backend would run for the Query Builder's conditions. */
export function QBSqlPreview({ tree }: QBSqlPreviewProps) {
  const { data: combinedSql, isPending, error } = useQBCombinedSql(tree)
  const formattedSql = useMemo(
    () => combinedSql && formatSynapseSql(combinedSql),
    [combinedSql],
  )

  if (error) {
    return (
      <span className={styles.sqlError}>
        Could not load SQL preview: {error.message}
      </span>
    )
  }
  if (isPending) {
    return <QBSqlPreviewPlaceholder />
  }
  return (
    <pre className={styles.sqlText}>
      <code>{formattedSql}</code>
    </pre>
  )
}
