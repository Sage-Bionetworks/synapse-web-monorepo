import { QueryResultBundle } from '@sage-bionetworks/synapse-types'

export const mockSingleQueryResult: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  columnModels: [
    {
      id: '81721',
      name: 'id',
      columnType: 'ENTITYID',
    },
    {
      id: '81722',
      name: 'name',
      columnType: 'STRING',
      maximumSize: 256,
    },
    {
      id: '115314',
      name: 'consortium',
      columnType: 'STRING',
      maximumSize: 7,
    },
    {
      id: '126424',
      name: 'collectionType',
      columnType: 'STRING',
      maximumSize: 50,
      facetType: 'enumeration',
    },
    {
      id: '119622',
      name: 'diagnosis',
      columnType: 'STRING_LIST',
      maximumSize: 22,
      maximumListLength: 6,
      facetType: 'enumeration',
    },
    {
      id: '115707',
      name: 'intervention',
      columnType: 'STRING',
      maximumSize: 8,
      facetType: 'enumeration',
    },
    {
      id: '118320',
      name: 'deviceType',
      columnType: 'STRING_LIST',
      maximumSize: 8,
      maximumListLength: 2,
      facetType: 'enumeration',
    },
    {
      id: '120041',
      name: 'sensorType',
      columnType: 'STRING_LIST',
      maximumSize: 18,
      maximumListLength: 6,
      facetType: 'enumeration',
    },
    {
      id: '119930',
      name: 'dataCollectionMethod',
      columnType: 'STRING_LIST',
      maximumSize: 24,
      maximumListLength: 4,
      facetType: 'enumeration',
    },
    {
      id: '123866',
      name: 'devicePlatform',
      columnType: 'STRING_LIST',
      maximumSize: 9,
      maximumListLength: 6,
      facetType: 'enumeration',
    },
    {
      id: '120039',
      name: 'deviceLocation',
      columnType: 'STRING_LIST',
      maximumSize: 12,
      maximumListLength: 6,
      facetType: 'enumeration',
    },
    {
      id: '123225',
      name: 'reportedOutcome',
      columnType: 'STRING_LIST',
      maximumSize: 32,
      maximumListLength: 20,
      facetType: 'enumeration',
    },
    {
      id: '123873',
      name: 'digitalAssessmentCategory',
      columnType: 'STRING_LIST',
      maximumSize: 30,
      maximumListLength: 7,
      facetType: 'enumeration',
    },
    {
      id: '115316',
      name: 'dataAccessInstructions',
      columnType: 'STRING',
      maximumSize: 23,
    },
    {
      id: '126421',
      name: 'dataUsed',
      columnType: 'STRING_LIST',
      maximumSize: 150,
      maximumListLength: 8,
    },
    {
      id: '115329',
      name: 'dhPortalIndex',
      columnType: 'STRING',
      maximumSize: 5,
    },
    {
      id: '123865',
      name: 'digitalAssessmentDetails',
      columnType: 'STRING_LIST',
      maximumSize: 48,
      maximumListLength: 20,
    },
    {
      id: '123867',
      name: 'investigator',
      columnType: 'STRING_LIST',
      maximumSize: 40,
      maximumListLength: 4,
    },
    {
      id: '116304',
      name: 'isDHProject',
      columnType: 'STRING',
      maximumSize: 4,
    },
    {
      id: '125776',
      name: 'keywords',
      columnType: 'STRING_LIST',
      maximumSize: 27,
      maximumListLength: 15,
    },
    {
      id: '121026',
      name: 'numberParticipants',
      columnType: 'INTEGER',
      facetType: 'range',
    },
    {
      id: '123869',
      name: 'resourceType',
      columnType: 'STRING_LIST',
      maximumSize: 16,
      maximumListLength: 5,
    },
    {
      id: '123870',
      name: 'sensorDataType',
      columnType: 'STRING_LIST',
      maximumSize: 9,
      maximumListLength: 5,
    },
    {
      id: '169212',
      name: 'study',
      columnType: 'STRING',
      maximumSize: 80,
    },
    {
      id: '129708',
      name: 'studyDataDescriptionLocation',
      columnType: 'STRING',
      maximumSize: 30,
    },
    {
      id: '116307',
      name: 'studyDescription',
      columnType: 'STRING',
      maximumSize: 267,
    },
    {
      id: '116752',
      name: 'studyDescriptionLocation',
      columnType: 'STRING',
      maximumSize: 30,
    },
  ],
  facets: [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'collectionType',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'Observational Study',
          count: 7,
          isSelected: false,
        },
        {
          value: 'Analysis',
          count: 2,
          isSelected: false,
        },
        {
          value: 'Challenge',
          count: 2,
          isSelected: false,
        },
        {
          value: 'Interventional Study',
          count: 1,
          isSelected: false,
        },
        {
          value: 'Validation Study',
          count: 1,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'diagnosis',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'control',
          count: 10,
          isSelected: false,
        },
        {
          value: "Parkinson's Disease",
          count: 6,
          isSelected: false,
        },
        {
          value: 'multiple sclerosis',
          count: 2,
          isSelected: false,
        },
        {
          value: 'asthma',
          count: 1,
          isSelected: false,
        },
        {
          value: 'depression',
          count: 1,
          isSelected: false,
        },
        {
          value: 'endometriosis',
          count: 1,
          isSelected: false,
        },
        {
          value: 'melanoma',
          count: 1,
          isSelected: false,
        },
        {
          value: 'sleep related disorder',
          count: 1,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'intervention',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 12,
          isSelected: false,
        },
        {
          value: 'levodopa',
          count: 1,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'deviceType',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'handheld',
          count: 13,
          isSelected: false,
        },
        {
          value: 'wearable',
          count: 6,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'sensorType',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'accelerometer',
          count: 9,
          isSelected: false,
        },
        {
          value: 'gyroscope',
          count: 8,
          isSelected: false,
        },
        {
          value: 'touchscreen',
          count: 7,
          isSelected: false,
        },
        {
          value: 'magnetometer',
          count: 4,
          isSelected: false,
        },
        {
          value: 'microphone',
          count: 3,
          isSelected: false,
        },
        {
          value: 'camera',
          count: 2,
          isSelected: false,
        },
        {
          value: 'pedometer',
          count: 2,
          isSelected: false,
        },
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 1,
          isSelected: false,
        },
        {
          value: 'gps',
          count: 1,
          isSelected: false,
        },
        {
          value: 'oximeter',
          count: 1,
          isSelected: false,
        },
        {
          value: 'photosensor',
          count: 1,
          isSelected: false,
        },
        {
          value: 'spectrocolorimeter',
          count: 1,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'dataCollectionMethod',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'patient reported outcome',
          count: 13,
          isSelected: false,
        },
        {
          value: 'active',
          count: 10,
          isSelected: false,
        },
        {
          value: 'passive',
          count: 7,
          isSelected: false,
        },
        {
          value: 'clinical assessment',
          count: 4,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'devicePlatform',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'iOS',
          count: 12,
          isSelected: false,
        },
        {
          value: 'Android',
          count: 7,
          isSelected: false,
        },
        {
          value: 'GENEActiv',
          count: 2,
          isSelected: false,
        },
        {
          value: 'Pebble OS',
          count: 2,
          isSelected: false,
        },
        {
          value: 'Fitbit',
          count: 1,
          isSelected: false,
        },
        {
          value: 'Pantone',
          count: 1,
          isSelected: false,
        },
        {
          value: 'Shimmer',
          count: 1,
          isSelected: false,
        },
        {
          value: 'Windows',
          count: 1,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'deviceLocation',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'hand',
          count: 9,
          isSelected: false,
        },
        {
          value: 'pocket',
          count: 8,
          isSelected: false,
        },
        {
          value: 'wrist',
          count: 6,
          isSelected: false,
        },
        {
          value: 'flat surface',
          count: 3,
          isSelected: false,
        },
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 1,
          isSelected: false,
        },
        {
          value: 'back',
          count: 1,
          isSelected: false,
        },
        {
          value: 'face',
          count: 1,
          isSelected: false,
        },
        {
          value: 'finger',
          count: 1,
          isSelected: false,
        },
        {
          value: 'forearm',
          count: 1,
          isSelected: false,
        },
        {
          value: 'shank',
          count: 1,
          isSelected: false,
        },
        {
          value: 'waist',
          count: 1,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'reportedOutcome',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'medication report',
          count: 7,
          isSelected: false,
        },
        {
          value: 'demographics survey',
          count: 6,
          isSelected: false,
        },
        {
          value: 'MDS-UPDRS',
          count: 5,
          isSelected: false,
        },
        {
          value: 'dyskinesia',
          count: 4,
          isSelected: false,
        },
        {
          value: 'sleep report',
          count: 4,
          isSelected: false,
        },
        {
          value: 'bradykinesia',
          count: 3,
          isSelected: false,
        },
        {
          value: 'medical history',
          count: 3,
          isSelected: false,
        },
        {
          value: 'tremor',
          count: 3,
          isSelected: false,
        },
        {
          value: 'freezing of gait',
          count: 2,
          isSelected: false,
        },
        {
          value: 'PDQ-8',
          count: 2,
          isSelected: false,
        },
        {
          value: 'physical activity',
          count: 2,
          isSelected: false,
        },
        {
          value: 'quality of life',
          count: 2,
          isSelected: false,
        },
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 1,
          isSelected: false,
        },
        {
          value: 'activity report',
          count: 1,
          isSelected: false,
        },
        {
          value: 'asthma management',
          count: 1,
          isSelected: false,
        },
        {
          value: 'asthma symptoms',
          count: 1,
          isSelected: false,
        },
        {
          value: 'asthma triggers',
          count: 1,
          isSelected: false,
        },
        {
          value: 'AUDIT-C',
          count: 1,
          isSelected: false,
        },
        {
          value: 'blood pressure',
          count: 1,
          isSelected: false,
        },
        {
          value: 'cholesterol',
          count: 1,
          isSelected: false,
        },
        {
          value: 'diabetes',
          count: 1,
          isSelected: false,
        },
        {
          value: 'diet survey',
          count: 1,
          isSelected: false,
        },
        {
          value: 'disease risk',
          count: 1,
          isSelected: false,
        },
        {
          value: 'distance',
          count: 1,
          isSelected: false,
        },
        {
          value: 'EQ-5D',
          count: 1,
          isSelected: false,
        },
        {
          value: 'family history',
          count: 1,
          isSelected: false,
        },
        {
          value: 'fasting glucose',
          count: 1,
          isSelected: false,
        },
        {
          value: 'feedback survey',
          count: 1,
          isSelected: false,
        },
        {
          value: 'GAD-7',
          count: 1,
          isSelected: false,
        },
        {
          value: 'heart age',
          count: 1,
          isSelected: false,
        },
        {
          value: 'height',
          count: 1,
          isSelected: false,
        },
        {
          value: 'hypertension',
          count: 1,
          isSelected: false,
        },
        {
          value: 'inclusion survey',
          count: 1,
          isSelected: false,
        },
        {
          value: 'mole diameter',
          count: 1,
          isSelected: false,
        },
        {
          value: 'mole location',
          count: 1,
          isSelected: false,
        },
        {
          value: 'mood',
          count: 1,
          isSelected: false,
        },
        {
          value: 'NeuroQOL-Cognition',
          count: 1,
          isSelected: false,
        },
        {
          value: 'NeuroQOL-LowerExtremity',
          count: 1,
          isSelected: false,
        },
        {
          value: 'NeuroQOL-UpperExtremity',
          count: 1,
          isSelected: false,
        },
        {
          value: 'PAR-Q',
          count: 1,
          isSelected: false,
        },
        {
          value: 'phone usage',
          count: 1,
          isSelected: false,
        },
        {
          value: 'PHQ-2',
          count: 1,
          isSelected: false,
        },
        {
          value: 'PHQ-9',
          count: 1,
          isSelected: false,
        },
        {
          value: 'relapses report',
          count: 1,
          isSelected: false,
        },
        {
          value: 'research interest',
          count: 1,
          isSelected: false,
        },
        {
          value: 'resting heart rate',
          count: 1,
          isSelected: false,
        },
        {
          value: 'Sheehan Disability Scale (SDS)',
          count: 1,
          isSelected: false,
        },
        {
          value: 'step count',
          count: 1,
          isSelected: false,
        },
        {
          value: 'symptoms report',
          count: 1,
          isSelected: false,
        },
        {
          value: 'triggers report',
          count: 1,
          isSelected: false,
        },
        {
          value: 'vo2max',
          count: 1,
          isSelected: false,
        },
        {
          value: 'weight',
          count: 1,
          isSelected: false,
        },
        {
          value: 'ZIP code',
          count: 1,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'digitalAssessmentCategory',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'gait',
          count: 6,
          isSelected: false,
        },
        {
          value: 'cognition',
          count: 5,
          isSelected: false,
        },
        {
          value: 'action tremor',
          count: 3,
          isSelected: false,
        },
        {
          value: 'motor coordination',
          count: 3,
          isSelected: false,
        },
        {
          value: 'phonation',
          count: 3,
          isSelected: false,
        },
        {
          value: 'physical activity',
          count: 3,
          isSelected: false,
        },
        {
          value: 'cardiovascular',
          count: 2,
          isSelected: false,
        },
        {
          value: 'postural tremor',
          count: 2,
          isSelected: false,
        },
        {
          value: 'resting tremor',
          count: 2,
          isSelected: false,
        },
        {
          value: 'sleep',
          count: 2,
          isSelected: false,
        },
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 1,
          isSelected: false,
        },
        {
          value: 'cardiorespiratory fitness',
          count: 1,
          isSelected: false,
        },
        {
          value: 'dermatologic phenotype',
          count: 1,
          isSelected: false,
        },
        {
          value: 'mental health',
          count: 1,
          isSelected: false,
        },
        {
          value: 'mobility',
          count: 1,
          isSelected: false,
        },
        {
          value: 'mood',
          count: 1,
          isSelected: false,
        },
        {
          value: 'participant engagement',
          count: 1,
          isSelected: false,
        },
        {
          value: 'quality of life',
          count: 1,
          isSelected: false,
        },
        {
          value: 'respiratory',
          count: 1,
          isSelected: false,
        },
        {
          value: 'skin color',
          count: 1,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
      columnName: 'numberParticipants',
      facetType: 'range',
      columnMin: '29',
      columnMax: '26902',
    },
  ],
}

export const mockQueryPerCardResult: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  columnModels: [
    { id: '81721', name: 'id', columnType: 'ENTITYID' },
    {
      id: '81722',
      name: 'name',
      columnType: 'STRING',
      maximumSize: 256,
    },
    {
      id: '190401',
      name: 'study',
      columnType: 'STRING_LIST',
      maximumSize: 300,
      maximumListLength: 20,
      facetType: 'enumeration',
    },
    {
      id: '171338',
      name: 'dataType',
      columnType: 'STRING_LIST',
      maximumSize: 43,
      maximumListLength: 10,
      facetType: 'enumeration',
    },
    {
      id: '171339',
      name: 'assay',
      columnType: 'STRING_LIST',
      maximumSize: 40,
      maximumListLength: 10,
      facetType: 'enumeration',
    },
    {
      id: '168363',
      name: 'organ',
      columnType: 'STRING',
      maximumSize: 15,
      facetType: 'enumeration',
    },
    {
      id: '124190',
      name: 'tissue',
      columnType: 'STRING_LIST',
      maximumSize: 100,
      maximumListLength: 10,
      facetType: 'enumeration',
    },
    {
      id: '171340',
      name: 'species',
      columnType: 'STRING_LIST',
      maximumSize: 23,
      maximumListLength: 10,
      facetType: 'enumeration',
    },
    {
      id: '124191',
      name: 'sex',
      columnType: 'STRING_LIST',
      maximumSize: 12,
      maximumListLength: 2,
      facetType: 'enumeration',
    },
    {
      id: '121553',
      name: 'consortium',
      columnType: 'STRING',
      maximumSize: 40,
      facetType: 'enumeration',
    },
    {
      id: '124185',
      name: 'grant',
      columnType: 'STRING_LIST',
      maximumSize: 76,
      maximumListLength: 10,
    },
    {
      id: '151953',
      name: 'modelSystemName',
      columnType: 'STRING_LIST',
      maximumSize: 100,
      maximumListLength: 20,
      facetType: 'enumeration',
    },
    {
      id: '152365',
      name: 'treatmentType',
      columnType: 'STRING',
      maximumSize: 50,
    },
    {
      id: '81746',
      name: 'specimenID',
      columnType: 'STRING',
      maximumSize: 66,
    },
    {
      id: '85077',
      name: 'individualID',
      columnType: 'STRING',
      maximumSize: 40,
    },
    {
      id: '83061',
      name: 'individualIdSource',
      columnType: 'STRING',
      maximumSize: 50,
      facetType: 'enumeration',
    },
    {
      id: '81747',
      name: 'specimenIdSource',
      columnType: 'STRING',
      maximumSize: 19,
    },
    {
      id: '81770',
      name: 'resourceType',
      columnType: 'STRING',
      maximumSize: 16,
      facetType: 'enumeration',
    },
    {
      id: '124204',
      name: 'dataSubtype',
      columnType: 'STRING',
      maximumSize: 50,
      facetType: 'enumeration',
    },
    {
      id: '167131',
      name: 'metadataType',
      columnType: 'STRING',
      maximumSize: 22,
      facetType: 'enumeration',
    },
    {
      id: '117270',
      name: 'assayTarget',
      columnType: 'STRING',
      maximumSize: 8,
    },
    {
      id: '178414',
      name: 'analysisType',
      columnType: 'STRING',
      maximumSize: 55,
      facetType: 'enumeration',
    },
    {
      id: '124195',
      name: 'cellType',
      columnType: 'STRING_LIST',
      maximumSize: 75,
      maximumListLength: 5,
      facetType: 'enumeration',
    },
    {
      id: '82254',
      name: 'nucleicAcidSource',
      columnType: 'STRING',
      maximumSize: 14,
      facetType: 'enumeration',
    },
    {
      id: '114434',
      name: 'fileFormat',
      columnType: 'STRING',
      maximumSize: 23,
      facetType: 'enumeration',
    },
    {
      id: '86204',
      name: 'group',
      columnType: 'STRING',
      maximumSize: 13,
    },
    {
      id: '122223',
      name: 'isModelSystem',
      columnType: 'BOOLEAN',
      facetType: 'enumeration',
    },
    {
      id: '86209',
      name: 'isConsortiumAnalysis',
      columnType: 'BOOLEAN',
    },
    {
      id: '116145',
      name: 'isMultiSpecimen',
      columnType: 'BOOLEAN',
      facetType: 'enumeration',
    },
    { id: '81771', name: 'createdOn', columnType: 'DATE' },
    { id: '81761', name: 'createdBy', columnType: 'USERID' },
    { id: '81734', name: 'parentId', columnType: 'ENTITYID' },
    { id: '81729', name: 'currentVersion', columnType: 'INTEGER' },
    { id: '81731', name: 'benefactorId', columnType: 'ENTITYID' },
    { id: '81763', name: 'projectId', columnType: 'ENTITYID' },
    { id: '81764', name: 'modifiedOn', columnType: 'DATE' },
    { id: '81765', name: 'modifiedBy', columnType: 'USERID' },
    {
      id: '81733',
      name: 'dataFileHandleId',
      columnType: 'FILEHANDLEID',
    },
    {
      id: '152356',
      name: 'metaboliteType',
      columnType: 'STRING_LIST',
      maximumSize: 40,
      maximumListLength: 10,
      facetType: 'enumeration',
    },
    {
      id: '159027',
      name: 'chromosome',
      columnType: 'STRING',
      maximumSize: 15,
      facetType: 'enumeration',
    },
    {
      id: '171510',
      name: 'modelSystemType',
      columnType: 'STRING',
      maximumSize: 50,
      facetType: 'enumeration',
    },
    {
      id: '180380',
      name: 'libraryPrep',
      columnType: 'STRING',
      maximumSize: 50,
      facetType: 'enumeration',
    },
    {
      id: '112368',
      name: 'dataFileSizeBytes',
      columnType: 'INTEGER',
    },
  ],
  facets: [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'study',
      facetType: 'enumeration',
      facetValues: [
        { value: 'ROSMAP', count: 33340, isSelected: false },
        {
          value: 'WGS_Harmonization',
          count: 29432,
          isSelected: false,
        },
        { value: 'AD_CrossSpecies', count: 20630, isSelected: false },
        {
          value: 'rnaSeqReprocessing',
          count: 12344,
          isSelected: true,
        },
        { value: 'LBP', count: 7841, isSelected: false },
        { value: 'MSBB', count: 6881, isSelected: false },
        { value: 'TWAS', count: 6842, isSelected: false },
        { value: 'SUNYStrokeModel', count: 5954, isSelected: false },
        {
          value: 'VirusResilience_Mayo.MSBB.ROSMAP',
          count: 5656,
          isSelected: false,
        },
        { value: 'SEA-AD', count: 2368, isSelected: false },
        { value: 'SMIB-AD', count: 2160, isSelected: false },
        {
          value: 'MSBB_ArrayTissuePanel',
          count: 2120,
          isSelected: false,
        },
        { value: 'RR_APOE4', count: 2061, isSelected: false },
        { value: 'UCSF_MAC', count: 1974, isSelected: false },
        { value: 'StJude_BannerSun', count: 1831, isSelected: false },
        {
          value: 'ROSMAP_CognitiveResilience',
          count: 1565,
          isSelected: false,
        },
        { value: 'HBTRC', count: 1561, isSelected: false },
        { value: 'MayoRNAseq', count: 1214, isSelected: false },
        {
          value: 'Jax.IU.Pitt_MicrobiomePilot',
          count: 1155,
          isSelected: false,
        },
        {
          value: 'Jax.IU.Pitt_APOE4.Trem2.R47H',
          count: 921,
          isSelected: false,
        },
        { value: 'UCI_5XFAD', count: 893, isSelected: false },
        { value: 'SuperAgerEpiMap', count: 865, isSelected: false },
        { value: 'MCSA', count: 848, isSelected: false },
        { value: 'Banner', count: 749, isSelected: false },
        { value: 'BCM-DMAS', count: 739, isSelected: false },
        {
          value: 'Jax.IU.Pitt_hTau_Trem2',
          count: 603,
          isSelected: false,
        },
        { value: 'snRNAseqPFC_BA10', count: 591, isSelected: false },
        { value: 'APOE-TR', count: 581, isSelected: false },
        { value: 'FreshMicro', count: 581, isSelected: false },
        {
          value: 'EmoryDrosophilaTau',
          count: 515,
          isSelected: false,
        },
        {
          value: 'ROSMAP_CellTypeSpecificHA',
          count: 513,
          isSelected: false,
        },
        { value: 'AD-BXD', count: 481, isSelected: false },
        { value: 'AD_CrossSpecies ', count: 470, isSelected: false },
        { value: 'omicsADDS', count: 455, isSelected: false },
        { value: 'MOA-PAD', count: 449, isSelected: false },
        { value: 'UPP', count: 440, isSelected: false },
        {
          value: 'Jax.IU.Pitt_APP.PS1',
          count: 390,
          isSelected: false,
        },
        {
          value: 'ROSMAP_MammillaryBody',
          count: 388,
          isSelected: false,
        },
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 333,
          isSelected: false,
        },
        { value: 'UCI_3xTg-AD', count: 325, isSelected: false },
        { value: 'VMC', count: 307, isSelected: false },
        { value: 'ADAMTS7', count: 294, isSelected: false },
        { value: 'TAUAPPms', count: 258, isSelected: false },
        {
          value: 'Jax.IU.Pitt_StrainValidation',
          count: 254,
          isSelected: false,
        },
        {
          value: 'UCI_Trem2-R47H_NSS',
          count: 250,
          isSelected: false,
        },
        { value: 'Emory_Vascular', count: 217, isSelected: false },
        { value: 'MayoPilotRNAseq', count: 202, isSelected: false },
        { value: 'HBI_scRNAseq', count: 195, isSelected: false },
        { value: 'MC-CAA', count: 189, isSelected: false },
        {
          value: 'MODEL-AD_JAX_GWAS_Gene_Survey',
          count: 185,
          isSelected: false,
        },
        { value: 'snRNAseqAD_TREM2', count: 165, isSelected: false },
        { value: 'Jax.IU.Pitt_5XFAD', count: 162, isSelected: false },
        { value: 'ROSMAP-IN', count: 140, isSelected: false },
        {
          value: 'ROSMAP_nucleus_hashing',
          count: 127,
          isSelected: false,
        },
        { value: 'Plxnb1_KO', count: 126, isSelected: false },
        {
          value: 'VirusResilience_LCL',
          count: 124,
          isSelected: false,
        },
        {
          value: 'RNAseq_Harmonization',
          count: 117,
          isSelected: false,
        },
        { value: 'MayoHippocampus', count: 113, isSelected: false },
        { value: 'BLSA', count: 111, isSelected: false },
        { value: 'UCI_PrimaryScreen', count: 107, isSelected: false },
        {
          value: 'Jax.IU.Pitt.Proteomics_Metabolomics_Pilot',
          count: 105,
          isSelected: false,
        },
        {
          value: 'UCI_Trem2_Cuprizone',
          count: 105,
          isSelected: false,
        },
        { value: 'miR155', count: 101, isSelected: false },
        {
          value: 'scRNAseq_microglia_wild_ADmice',
          count: 101,
          isSelected: false,
        },
        { value: 'LillyMicroglia', count: 100, isSelected: false },
        { value: 'MSDM', count: 100, isSelected: false },
        { value: 'GJA1_deficiency', count: 99, isSelected: false },
        { value: 'TyrobpKO', count: 96, isSelected: false },
        { value: 'UCI_hAbeta_KI', count: 96, isSelected: false },
        { value: 'ACT', count: 72, isSelected: false },
        { value: 'Aging-PheWAS', count: 68, isSelected: false },
        { value: 'rnaSeqSampleSwap', count: 67, isSelected: false },
        { value: 'ADMC_ADNI1', count: 63, isSelected: false },
        {
          value: 'Jax.IU.Pitt_Levetiracetam_5XFAD',
          count: 58,
          isSelected: false,
        },
        { value: 'APOEPSC', count: 57, isSelected: false },
        { value: 'MCMPS', count: 57, isSelected: false },
        { value: 'TASTPM', count: 51, isSelected: false },
        { value: 'UFLOR_ABI3_GNGT2', count: 51, isSelected: false },
        {
          value: 'Jax.IU.Pitt_PrimaryScreen',
          count: 50,
          isSelected: false,
        },
        { value: 'Emory_ADRC', count: 48, isSelected: false },
        { value: 'ACOM', count: 45, isSelected: false },
        { value: 'HDAC1-cKOBrain', count: 43, isSelected: false },
        { value: 'MSSMiPSC', count: 38, isSelected: false },
        { value: 'DiCAD', count: 37, isSelected: false },
        { value: 'DiseasePseudotime', count: 36, isSelected: false },
        { value: 'MSMM', count: 34, isSelected: false },
        { value: 'SY5Y_Emory', count: 32, isSelected: false },
        {
          value: 'U1-70_PrimaryCellCulture',
          count: 29,
          isSelected: false,
        },
        { value: 'UPennPilot', count: 29, isSelected: false },
        { value: 'ADMC_ADNI2-GO', count: 28, isSelected: false },
        { value: 'Abeta_microglia', count: 27, isSelected: false },
        { value: 'iPSCMicroglia', count: 27, isSelected: false },
        {
          value: 'Jax.IU.Pitt_Verubecestat_5XFAD',
          count: 27,
          isSelected: false,
        },
        { value: 'iPSCAstrocytes', count: 26, isSelected: false },
        { value: 'TyrobpKO_AppPs1', count: 25, isSelected: false },
        { value: 'ADMC_UPenn', count: 24, isSelected: false },
        { value: 'TauD35', count: 22, isSelected: false },
        { value: 'UFL_Cxcl10', count: 21, isSelected: false },
        { value: 'mtDNA_AD', count: 19, isSelected: false },
        { value: 'BroadiPSC', count: 18, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'dataType',
      facetType: 'enumeration',
      facetValues: [
        { value: 'geneExpression', count: 12337, isSelected: false },
        { value: 'clinical', count: 5, isSelected: false },
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 2,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'assay',
      facetType: 'enumeration',
      facetValues: [
        { value: 'rnaSeq', count: 12337, isSelected: false },
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 7,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'organ',
      facetType: 'enumeration',
      facetValues: [
        { value: 'brain', count: 12320, isSelected: false },
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 24,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'tissue',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'dorsolateral prefrontal cortex',
          count: 3856,
          isSelected: false,
        },
        { value: 'temporal cortex', count: 1679, isSelected: false },
        { value: 'cerebellum', count: 1661, isSelected: false },
        {
          value: 'parahippocampal gyrus',
          count: 1356,
          isSelected: false,
        },
        { value: 'frontal pole', count: 1346, isSelected: false },
        {
          value: 'superior temporal gyrus',
          count: 1341,
          isSelected: false,
        },
        {
          value: 'inferior frontal gyrus',
          count: 1171,
          isSelected: false,
        },
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 26,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'species',
      facetType: 'enumeration',
      facetValues: [{ value: 'Human', count: 12344, isSelected: false }],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'sex',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 12344,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'consortium',
      facetType: 'enumeration',
      facetValues: [{ value: 'AMP-AD', count: 12344, isSelected: false }],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'modelSystemName',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 12344,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'individualIdSource',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'Mount Sinai NIH Brain and Tissue Repository',
          count: 5139,
          isSelected: false,
        },
        {
          value: "Rush Alzheimer's Disease Center",
          count: 3846,
          isSelected: false,
        },
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 3359,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'resourceType',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'experimentalData',
          count: 10075,
          isSelected: false,
        },
        { value: 'analysis', count: 2245, isSelected: false },
        { value: 'tool', count: 14, isSelected: false },
        { value: 'metadata', count: 10, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'dataSubtype',
      facetType: 'enumeration',
      facetValues: [
        { value: 'processed', count: 6666, isSelected: false },
        { value: 'raw', count: 5616, isSelected: false },
        { value: 'normalized', count: 36, isSelected: false },
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 26,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'metadataType',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 12334,
          isSelected: false,
        },
        { value: 'assay', count: 3, isSelected: false },
        { value: 'biospecimen', count: 3, isSelected: false },
        { value: 'individual', count: 3, isSelected: false },
        { value: 'data dictionary', count: 1, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'analysisType',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 10102,
          isSelected: false,
        },
        { value: 'quality control', count: 2218, isSelected: false },
        {
          value: 'covariate specification',
          count: 12,
          isSelected: false,
        },
        {
          value: 'differential expression',
          count: 11,
          isSelected: false,
        },
        { value: 'Enrichment analysis', count: 1, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'cellType',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 12344,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'nucleicAcidSource',
      facetType: 'enumeration',
      facetValues: [
        { value: 'bulk cell', count: 12317, isSelected: false },
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 27,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'fileFormat',
      facetType: 'enumeration',
      facetValues: [
        { value: 'fastq', count: 3402, isSelected: false },
        { value: 'tsv', count: 2251, isSelected: false },
        { value: 'csv', count: 2223, isSelected: false },
        { value: 'bam', count: 2214, isSelected: false },
        { value: 'tar', count: 2214, isSelected: false },
        { value: 'txt', count: 26, isSelected: false },
        { value: 'bash script', count: 7, isSelected: false },
        { value: 'gz', count: 2, isSelected: false },
        { value: 'R script', count: 2, isSelected: false },
        { value: 'pdf', count: 1, isSelected: false },
        { value: 'Python script', count: 1, isSelected: false },
        { value: 'RData', count: 1, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'isModelSystem',
      facetType: 'enumeration',
      facetValues: [{ value: 'false', count: 12344, isSelected: false }],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'isMultiSpecimen',
      facetType: 'enumeration',
      facetValues: [
        { value: 'false', count: 12259, isSelected: false },
        { value: 'true', count: 64, isSelected: false },
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 21,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'metaboliteType',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 12344,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'chromosome',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 12344,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'modelSystemType',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 12344,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'libraryPrep',
      facetType: 'enumeration',
      facetValues: [
        { value: 'polyAselection', count: 5940, isSelected: false },
        { value: 'rRNAdepletion', count: 4104, isSelected: false },
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 2300,
          isSelected: false,
        },
      ],
    },
  ],
}
