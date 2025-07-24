export const datasetsSql = `SELECT * FROM syn21897968`
export const filesSql =
  'SELECT fileName, title, species, dataFormat, assay, tumorType, gender, tissue, grantName, grantType, consortium FROM syn9630847'
export const grantsSql = `SELECT * FROM syn21918972`
export const projectsSql = `SELECT * FROM syn21868602`
export const publicationSql = 'SELECT * FROM syn21868591'
export const toolsSql = 'SELECT * FROM syn26127427 WHERE portalDisplay = true'
export const toolkitSql = 'SELECT * FROM syn68561794'
export const metricsConfigSql = 'SELECT * FROM syn68722545'
export const peopleSql = 'SELECT * FROM syn28073190 where portalDisplay = true'
export const educationSql = 'SELECT * FROM syn51497305'

export const mc2SupplementSql = 'SELECT * FROM syn52743383' // see PORTALS-2984

export const ecosystemResourcesSql = `SELECT * FROM syn68572934`
