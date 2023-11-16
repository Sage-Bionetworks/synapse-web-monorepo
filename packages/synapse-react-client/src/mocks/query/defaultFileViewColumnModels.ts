import { ColumnModel } from '@sage-bionetworks/synapse-types'

const defaultFileViewColumnModels: ColumnModel[] = [
  {
    name: 'id',
    columnType: 'ENTITYID',
    id: '81721',
  },
  {
    name: 'name',
    columnType: 'STRING',
    id: '81722',
    maximumSize: 256,
  },
  {
    name: 'description',
    columnType: 'STRING',
    id: '87941',
    maximumSize: 1000,
  },
  {
    name: 'createdOn',
    columnType: 'DATE',
    facetType: 'range',
    id: '81723',
  },
  {
    name: 'createdBy',
    columnType: 'USERID',
    facetType: 'enumeration',
    id: '81724',
  },
  {
    name: 'etag',
    columnType: 'STRING',
    id: '81725',
    maximumSize: 36,
  },
  {
    name: 'modifiedOn',
    columnType: 'DATE',
    facetType: 'range',
    id: '81726',
  },
  {
    name: 'modifiedBy',
    columnType: 'USERID',
    facetType: 'enumeration',
    id: '81727',
  },
  {
    name: 'type',
    columnType: 'STRING',
    facetType: 'enumeration',
    id: '196992',
    maximumSize: 20,
  },
  {
    name: 'currentVersion',
    columnType: 'INTEGER',
    id: '81729',
  },
  {
    name: 'parentId',
    columnType: 'ENTITYID',
    facetType: 'enumeration',
    id: '81730',
  },
  {
    name: 'benefactorId',
    columnType: 'ENTITYID',
    id: '81731',
  },
  {
    name: 'projectId',
    columnType: 'ENTITYID',
    facetType: 'enumeration',
    id: '81732',
  },
  {
    name: 'dataFileHandleId',
    columnType: 'FILEHANDLEID',
    id: '81733',
  },
  {
    name: 'dataFileName',
    columnType: 'STRING',
    id: '199088',
    maximumSize: 256,
  },
  {
    name: 'dataFileSizeBytes',
    columnType: 'INTEGER',
    id: '112368',
  },
  {
    name: 'dataFileMD5Hex',
    columnType: 'STRING',
    id: '112369',
    maximumSize: 100,
  },
  {
    name: 'dataFileConcreteType',
    columnType: 'STRING',
    facetType: 'enumeration',
    id: '196995',
    maximumSize: 65,
  },
  {
    name: 'dataFileBucket',
    columnType: 'STRING',
    facetType: 'enumeration',
    id: '196996',
    maximumSize: 100,
  },
  {
    name: 'dataFileKey',
    columnType: 'STRING',
    id: '184972',
    maximumSize: 700,
  },
]

export default defaultFileViewColumnModels
