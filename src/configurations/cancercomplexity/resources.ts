export const datasetsSql = `SELECT * FROM syn21897968`
export const filesSql =
  'SELECT fileName, title, species, dataFormat, assay, tumorType, gender, tissue, grantName, grantType, consortium FROM syn9630847'
export const grantsSql = `SELECT * FROM syn21918972`
export const projectsSql = `SELECT * FROM syn21868602`
export const publicationSql = 'SELECT * FROM syn21868591'
export const toolsSql = 'SELECT * FROM syn26127427 WHERE portalDisplay = true'
export const peopleSql = 'SELECT * FROM syn28073190 where portalDisplay = true'
