// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/ColumnType.html
export enum ColumnTypeEnum {
  STRING = 'STRING',
  DOUBLE = 'DOUBLE',
  BOOLEAN = 'BOOLEAN',
  INTEGER = 'INTEGER',
  DATE = 'DATE',
  FILEHANDLEID = 'FILEHANDLEID',
  ENTITYID = 'ENTITYID',
  LINK = 'LINK',
  MEDIUMTEXT = 'MEDIUMTEXT',
  LARGETEXT = 'LARGETEXT',
  USERID = 'USERID',
  STRING_LIST = 'STRING_LIST',
  INTEGER_LIST = 'INTEGER_LIST',
  BOOLEAN_LIST = 'BOOLEAN_LIST',
  DATE_LIST = 'DATE_LIST',
  USERID_LIST = 'USERID_LIST',
  ENTITYID_LIST = 'ENTITYID_LIST',
  EVALUATIONID = 'EVALUATIONID',
}

// Allow an instance of the enum or any of the values in the num
export type ColumnType = ColumnTypeEnum | `${ColumnTypeEnum}`
