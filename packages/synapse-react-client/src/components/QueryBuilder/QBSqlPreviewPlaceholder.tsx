import styles from './QueryBuilderControls.module.scss'

const QB_SQL_LOADING_TEXT = 'Loading SQL…'

export function QBSqlPreviewPlaceholder() {
  return <span className={styles.sqlPlaceholder}>{QB_SQL_LOADING_TEXT}</span>
}
