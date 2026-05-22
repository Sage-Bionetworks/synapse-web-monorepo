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

export const datasetsSearchIndexId = 'syn74911639'
export const filesSearchIndexId = 'syn74937071'
export const grantsSearchIndexId = 'syn74911636'
export const projectsSearchIndexId = 'syn74937075'
export const publicationsSearchIndexId = 'syn74911638'
export const toolsSearchIndexId = 'syn74937079'
export const toolkitSearchIndexId = 'syn74937082'
export const metricsConfigSearchIndexId = 'syn74937084'
export const peopleSearchIndexId = 'syn74911637'
export const educationSearchIndexId = 'syn74911640'
export const ecosystemResourcesSearchIndexId = 'syn74937088'
