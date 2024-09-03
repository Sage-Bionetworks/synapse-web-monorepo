import {
  ColumnTypeEnum,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'

export const mockQueryResult = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn23567477',
      etag: 'DEFAULT',
      headers: [
        {
          name: 'id',
          columnType: ColumnTypeEnum.ENTITYID,
          id: '81721',
        },
        {
          name: 'name',
          columnType: ColumnTypeEnum.STRING,
          id: '81722',
        },
        {
          name: 'createdOn',
          columnType: ColumnTypeEnum.DATE,
          id: '81723',
        },
        {
          name: 'createdBy',
          columnType: ColumnTypeEnum.USERID,
          id: '81724',
        },
        {
          name: 'etag',
          columnType: ColumnTypeEnum.STRING,
          id: '81725',
        },
        {
          name: 'modifiedOn',
          columnType: ColumnTypeEnum.DATE,
          id: '81726',
        },
        {
          name: 'modifiedBy',
          columnType: ColumnTypeEnum.USERID,
          id: '81727',
        },
        {
          name: 'projectDescription',
          columnType: ColumnTypeEnum.STRING,
          id: '127153',
        },
        {
          name: 'projectDisplayName',
          columnType: ColumnTypeEnum.STRING,
          id: '127154',
        },
        {
          name: 'projectImageFileName',
          columnType: ColumnTypeEnum.STRING,
          id: '127219',
        },
      ],
      rows: [
        {
          rowId: 2343195,
          versionNumber: 1,
          values: [
            'syn2343195',
            'Synodos NF2',
            '1391528762703',
            '273979',
            '5a647ee2-7ab2-11e9-98fa-026b0a0ad230',
            '1466018152160',
            '2166046',
            'Synodos NF2 Project Data',
            'A blurb about Synodos NF2 efforts.',
            'nf2-banner.jpg',
          ],
        },
        {
          rowId: 2759792,
          versionNumber: 1,
          values: [
            'syn2759792',
            'CommonMind Consortium Knowledge Portal',
            '1413042227885',
            '273995',
            '5b1e29c5-7ab2-11e9-98fa-026b0a0ad230',
            '1443082930856',
            '372127',
            'CommonMind Consortium Knowledge Portal Data',
            'A blurb about CommonMind Consortium efforts.',
            'commonmind-landing-image.png',
          ],
        },
        {
          rowId: 7222066,
          versionNumber: 1,
          values: [
            'syn7222066',
            'GENIE',
            '1473446410097',
            '3324230',
            '72a4da2a-7ab2-11e9-98fa-026b0a0ad230',
            '1481756110444',
            '3324230',
            'GENIE Data portal',
            'A blurb about GENIE efforts.',
            '3',
          ],
        },
        {
          rowId: 18405991,
          versionNumber: 1,
          values: [
            'syn18405991',
            'EHR DREAM Challenge - Patient Mortality Prediction',
            '1551937155204',
            '3329874',
            '4687dc90-c0ff-4d8c-af54-fb6fda6106d5',
            '1567197636057',
            '3329874',
            'EHR DREAM Challenge Synapse Project',
            'A blurb about the EHR DREAM Challenge.',
            '',
          ],
        },
        {
          rowId: 21849255,
          versionNumber: 1,
          values: [
            'syn21849255',
            'COVID-19 DREAM Challenge',
            '1585429461191',
            '3329874',
            '545fc9e6-3aee-4914-b8a6-6af435b73e32',
            '1585678543908',
            '3329874',
            'COVID-19 DREAM Challenge Synapse Project',
            'A blurb about the COVID-19 DREAM Challenge.',
            'covid-dream-challenge.png',
          ],
        },
      ],
    },
  },
  selectColumns: [
    {
      name: 'id',
      columnType: ColumnTypeEnum.ENTITYID,
      id: '81721',
    },
    {
      name: 'name',
      columnType: ColumnTypeEnum.STRING,
      id: '81722',
    },
    {
      name: 'createdOn',
      columnType: ColumnTypeEnum.DATE,
      id: '81723',
    },
    {
      name: 'createdBy',
      columnType: ColumnTypeEnum.USERID,
      id: '81724',
    },
    {
      name: 'etag',
      columnType: ColumnTypeEnum.STRING,
      id: '81725',
    },
    {
      name: 'modifiedOn',
      columnType: ColumnTypeEnum.DATE,
      id: '81726',
    },
    {
      name: 'modifiedBy',
      columnType: ColumnTypeEnum.USERID,
      id: '81727',
    },
    {
      name: 'projectDescription',
      columnType: ColumnTypeEnum.STRING,
      id: '127153',
    },
    {
      name: 'projectDisplayName',
      columnType: ColumnTypeEnum.STRING,
      id: '127154',
    },
    {
      name: 'projectImageFileName',
      columnType: ColumnTypeEnum.FILEHANDLEID,
      id: '127279',
    },
  ],
} satisfies QueryResultBundle
