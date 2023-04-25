export const computationalSql = 'Select * from syn20337467'
export const dataSql = 'SELECT * FROM syn11346063.34'
export const dataOnStudiesPageSql =
  "SELECT id, name, metadataType, dataType, assay FROM syn11346063.34 WHERE `resourceType` = 'metadata'"
export const peopleSql = 'SELECT * FROM syn51209684'
export const projectsSql = 'SELECT * FROM syn51209786 ORDER BY isFeatured DESC'
export const publicationsSql = 'SELECT * FROM syn51209321'
export const studiesSql = 'SELECT * FROM syn51209885 ORDER BY isFeatured DESC'

export const experimentalModelsSql = 'select * from syn22219805 ORDER BY isFeatured DESC'

// Convert the `title` column to markdown, linking to the `link` column
export const targetEnablingResourcesExploreSql =
  'select * from syn26146692 WHERE `isPublic` = true'
export const targetEnablingResourcesDetailsPageSql =
  'select * from syn26146692 WHERE `isPublic` = true'
