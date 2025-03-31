import { Step, StepStateEnum } from '@/components/SynapseForm/types'
import {
  FileEntity,
  ListResponse,
  StatusEnum,
} from '@sage-bionetworks/synapse-types'
import _mockFormData from './mockDrugToolFormData.json'
import _mockFormDataComplexInvalid from './mockDrugToolFormDataComplexInvalid.json'
import _mockNavSchema from './mockDrugToolFormNavSchema.json'
import _mockFormSchema from './mockDrugToolFormSchema.json'
import _mockUiSchema from './mockDrugToolFormUiSchema.json'

export const mockFormData = _mockFormData
export const mockFormSchema = _mockFormSchema
export const mockNavSchema = _mockNavSchema
export const mockUiSchema = _mockUiSchema
export const mockInvalidScreenData = _mockFormDataComplexInvalid
export const steps: Step[] = [
  {
    id: 'toxicology _data',
    order: 60,
    title: 'Toxicology Data',
    default: 'ld50',
    static: true,
    inProgress: true,
    state: StepStateEnum.TODO,
    rules: [],
  },
  {
    id: 'ld50',
    order: 61,
    title: 'LD50',
    inProgress: false,
    default: 'acute_dosing',
    state: StepStateEnum.ERROR,
    child: false,
    excluded: false,
    rules: [],
  },
  {
    id: 'acute_dosing',
    order: 62,
    title: 'Acute Dosing',
    default: 'chronic_dosing',
    child: false,
    excluded: false,
    static: false,
    inProgress: false,
    final: true,
    state: StepStateEnum.COMPLETED,
    rules: [],
  },
]

export const stepsWithChildren: Step[] = [
  {
    id: 'toxicology _data',
    order: 60,
    title: 'Toxicology Data',
    default: 'ld50',
    static: true,
    inProgress: true,
    state: StepStateEnum.TODO,
    rules: [],
    children: ['ld50', 'acute_dosing'],
  },
  {
    id: 'ld50',
    order: 61,
    title: 'LD50',
    inProgress: false,
    default: 'acute_dosing',
    state: StepStateEnum.ERROR,
    child: true,
    excluded: false,
    rules: [],
  },
  {
    id: 'acute_dosing',
    order: 62,
    title: 'Acute Dosing',
    default: 'chronic_dosing',
    child: true,
    excluded: false,
    static: false,
    inProgress: false,
    state: StepStateEnum.COMPLETED,
    rules: [],
  },
  {
    id: 'acute_dosing_not_child',
    order: 63,
    title: 'Acute Dosing Not Child',
    default: 'chronic_dosing',
    child: false,
    excluded: true,
    static: false,
    inProgress: false,
    state: StepStateEnum.COMPLETED,
    rules: [],
  },
]

export const stepsWithUserData: Step[] = [
  {
    id: 'efficacy',
    order: 61,
    title: 'Efficacy',
    inProgress: false,
    default: 'binding',
    state: StepStateEnum.COMPLETED,
    child: true,
    excluded: false,
    rules: [],
  },
  {
    id: 'basic',
    order: 62,
    title: 'Basic',
    default: 'naming',
    child: true,
    excluded: false,
    static: false,
    inProgress: false,
    state: StepStateEnum.COMPLETED,
    rules: [],
  },
  {
    id: 'naming',
    order: 63,
    title: 'Naming',
    default: 'chronic_dosing',
    child: false,
    excluded: true,
    static: false,
    inProgress: false,
    state: StepStateEnum.COMPLETED,
    rules: [],
  },
]
export const stepWithCustomValidationRules: Step = {
  id: 'in_vivo_data',
  order: 40,
  title: 'In Vivo Data!',
  default: 'pharmacokinetics',
  excluded: false,
  inProgress: true,
  child: true,
  state: StepStateEnum.PROGRESS,
  validationRules: [
    {
      conditions: {
        all: [
          {
            fact: 'in_vivo_data',
            operator: 'greaterThan',
            path: '.experiments[*].age_range.age_range_min',
            value: {
              fact: 'in_vivo_data',
              path: '.experiments[*].age_range.age_range_max',
            },
          },
        ],
      },
      event: {
        type: 'validation',
        params: {
          message: 'minimum age should be less than maximum age',
          name: 'range',
          property: '.in_vivo_data.experiments[*].age_range',
        },
      },
      'priority:': 1,
    },
    {
      conditions: {
        all: [
          {
            fact: 'in_vivo_data',
            operator: 'greaterThan',
            path: '.experiments[*].dose_range.dose_range_min',
            value: {
              fact: 'in_vivo_data',
              path: '.experiments[*].dose_range.dose_range_max',
            },
          },
        ],
      },
      event: {
        type: 'validation',
        params: {
          message: 'minimum dose should be less than maximum dose ',
          name: 'range',
          property: '.in_vivo_data.experiments[*].dose_range',
        },
      },
      'priority:': 1,
    },
  ],
}

export const formListDataInProgress: ListResponse = {
  nextPageToken: '123',
  page: [
    {
      formDataId: '25',
      etag: '10977a7f-e3a4-11e9-94e2-02c936c5ff9c',
      groupId: '9',
      name: 'AlinaNewAPIProdTest.json',
      createdBy: '3391841',
      createdOn: '2019-09-30T17:01:51.622Z',
      modifiedOn: '2019-09-30T17:02:20.399Z',
      dataFileHandleId: '43485087',
      submissionStatus: { state: StatusEnum.WAITING_FOR_SUBMISSION },
    },
  ],
}

export const formListDataSubmitted = {
  page: [
    {
      formDataId: '33',
      etag: '11240522-e403-11e9-94e2-02c936c5ff9c',
      groupId: '9',
      name: 'd.json',
      createdBy: '3391841',
      createdOn: '2019-10-01T04:22:13.755Z',
      modifiedOn: '2019-10-01T04:22:13.755Z',
      dataFileHandleId: '43505207',
      submissionStatus: {
        submittedOn: '2019-10-01T04:22:23.511Z',
        state: StatusEnum.SUBMITTED_WAITING_FOR_REVIEW,
      },
    },
    {
      formDataId: '32',
      etag: 'df863d6c-e402-11e9-94e2-02c936c5ff9c',
      groupId: '9',
      name: 'zxcz.json',
      createdBy: '3391841',
      createdOn: '2019-10-01T04:18:27.523Z',
      modifiedOn: '2019-10-01T04:18:27.523Z',
      dataFileHandleId: '43504979',
      submissionStatus: {
        submittedOn: '2019-10-01T04:21:00.269Z',
        state: StatusEnum.SUBMITTED_WAITING_FOR_REVIEW,
      },
    },
    {
      formDataId: '31',
      etag: 'a057855f-e401-11e9-94e2-02c936c5ff9c',
      groupId: '9',
      name: 'Full data submit only.json',
      createdBy: '3391841',
      createdOn: '2019-10-01T04:11:43.660Z',
      modifiedOn: '2019-10-01T04:11:56.364Z',
      dataFileHandleId: '43504590',
      submissionStatus: {
        submittedOn: '2019-10-01T04:12:04.769Z',
        state: StatusEnum.SUBMITTED_WAITING_FOR_REVIEW,
      },
    },
    {
      formDataId: '29',
      etag: '32e85704-e400-11e9-94e2-02c936c5ff9c',
      groupId: '9',
      name: 'Jeremy Lambert.json',
      createdBy: '3391841',
      createdOn: '2019-10-01T03:54:10.880Z',
      modifiedOn: '2019-10-01T03:54:10.880Z',
      dataFileHandleId: '43503572',
      submissionStatus: {
        submittedOn: '2019-10-01T04:01:51.672Z',
        state: StatusEnum.SUBMITTED_WAITING_FOR_REVIEW,
      },
    },
  ],
}

export const mockFileEntityWithVersion: FileEntity = {
  id: 'syn123',
  parentId: 'syn12034',
  dataFileHandleId: '123332',
  name: 'my file name',
  concreteType: 'org.sagebionetworks.repo.model.FileEntity',
  versionNumber: 3,
}
