import PortalDOI from '@/components/GenericCard/PortalDOI/PortalDOI'
import CroissantButton from '@/components/GenericCard/CroissantButton/CroissantButton'
import {
  getCandidateDoiId,
  useShowDoiCardLabel,
} from '@/components/GenericCard/PortalDOI/PortalDOIUtils'
import IconSvg, * as IconSvgModule from '@/components/IconSvg/IconSvg'
import { mockFileViewEntity } from '@/mocks/entity/mockFileView'
import mockTableEntityData, {
  mockTableEntity,
} from '@/mocks/entity/mockTableEntity'
import {
  mockQueryBundleRequest,
  mockQueryResultBundle,
} from '@/mocks/mockFileViewQuery'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { MOCK_USER_ID, MOCK_USER_NAME } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  ColumnTypeEnum,
  FileHandleAssociateType,
} from '@sage-bionetworks/synapse-types'
import { act, fireEvent, render, screen, within } from '@testing-library/react'
import { cloneDeep } from 'lodash-es'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { beforeEach, describe, it, test, vi } from 'vitest'
import { EntityDownloadConfirmation } from '../EntityDownloadConfirmation'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper'
import { QueryWrapper } from '../QueryWrapper/QueryWrapper'
import { FileHandleLink } from '../widgets/FileHandleLink'
import { ImageFileHandle } from '../widgets/ImageFileHandle'
import { CARD_SHORT_DESCRIPTION_CSS } from './CollapsibleDescription'
import TableRowGenericCard, {
  TableRowGenericCardProps,
  TableToGenericCardMapping,
} from './TableRowGenericCard'

vi.mock('@/components/GenericCard/PortalDOI/PortalDOI', () => ({
  __esModule: true,
  default: vi.fn().mockReturnValue(<div data-testid="PortalDOI" />),
}))
vi.mock('@/components/GenericCard/PortalDOI/PortalDOIUtils')
vi.mock('@/components/GenericCard/CroissantButton/CroissantButton', () => ({
  __esModule: true,
  default: vi.fn().mockReturnValue(<div data-testid="CroissantButton" />),
}))
vi.mock('../widgets/FileHandleLink', () => ({
  FileHandleLink: vi.fn().mockReturnValue(<div data-testid="FileHandleLink" />),
}))
vi.mock('../widgets/ImageFileHandle', () => ({
  ImageFileHandle: vi
    .fn()
    .mockReturnValue(<img data-testid="ImageFileHandle" />),
}))
vi.mock('../EntityDownloadConfirmation', () => ({
  EntityDownloadConfirmation: vi
    .fn()
    .mockReturnValue(<div data-testid="EntityDownloadConfirmation" />),
}))
vi.mock('@/components/IconSvg/IconSvg', async importOriginal => ({
  ...(await importOriginal<typeof IconSvgModule>()),
  default: vi.fn().mockReturnValue(<img data-testid="IconSvg" />),
}))

const renderComponent = (
  props: TableRowGenericCardProps,
  tableType: 'TableEntity' | 'EntityView',
) => {
  const request = cloneDeep(mockQueryBundleRequest)
  if (tableType === 'TableEntity') {
    request.entityId = mockTableEntity.id
    request.query.sql = `SELECT * FROM ${mockTableEntity.id}`
  } else if (tableType === 'EntityView') {
    request.entityId = mockFileViewEntity.id
    request.query.sql = `SELECT * FROM ${mockFileViewEntity.id}`
  }

  return render(
    <QueryWrapper initQueryRequest={request}>
      <QueryVisualizationWrapper>
        <TableRowGenericCard {...props} />
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    {
      wrapper: createWrapper(),
    },
  )
}

// mockAllIsIntersecting(true)
const mockFileHandleLink = vi.mocked(FileHandleLink)
const mockImageFileHandle = vi.mocked(ImageFileHandle)
const mockGetCandidateDoiId = vi.mocked(getCandidateDoiId)
const mockUseShowPortalDoi = vi.mocked(useShowDoiCardLabel)
const mockEntityDownloadConfirmation = vi.mocked(EntityDownloadConfirmation)
const mockIconSvg = vi.mocked(IconSvg)
const mockCroissantButton = vi.mocked(CroissantButton)

const iconOptions = {
  'AMP-AD': 'MOCKED_IMG_SVG_STRING',
}

const subTitleColumnName = 'subTitle'
const labelOneColumnName = 'labelOne'

const commonProps = {
  type: 'PROGRAM',
  title: 'title',
  subTitle: subTitleColumnName,
  description: 'description',
  icon: 'icon',
  link: 'link',
}
const genericCardSchema: TableToGenericCardMapping = {
  ...commonProps,
  secondaryLabels: [labelOneColumnName, 'labelTwo'],
}
const genericCardSchemaHeader: TableToGenericCardMapping = {
  ...commonProps,
}
const schema = {
  title: 0,
  subTitle: 1,
  description: 2,
  icon: 3,
  labelOne: 4,
  labelTwo: 5,
  link: 6,
  id: 7,
  image: 8,
  userIdList: 9,
  type: 10,
  datasetAlias: 11,
  externalLink: 12,
}

const MOCKED_TITLE = 'MOCKED TITLE'
const MOCKED_SUBTITLE = 'MOCKED SUBTITLE'
const MOCKED_DESCRIPTION = 'MOCKED DESCRIPTION'
const MOCKED_ICON = 'dataset'
const MOCKED_LABELONE = 'MOCKED_LABELONE'
const MOCKED_LABELTWO = 'MOCKED_LABELONE'
const MOCKED_LINK = 'MOCKED_LINK'
const MOCKED_ID = 'MOCKED_ID'
const MOCKED_IMAGE_FILE_HANDLE_ID = 'MOCKED_IMAGE_FILE_HANDLE_ID'
const MOCKED_USER_ID = `[${MOCK_USER_ID}]`
const MOCKED_TYPE = 'folder'
const MOCKED_SYNAPSE_LINK = 'https://www.synapse.org/#!Synapse:syn52623570'
const MOCKED_INVALID_SYNAPSE_LINK = 'https://www.synapse.org/#!Synapse:1234560/'
const MOCKED_EXTERNAL_LINK = 'http://example.com'

const data = [
  MOCKED_TITLE,
  MOCKED_SUBTITLE,
  MOCKED_DESCRIPTION,
  MOCKED_ICON,
  MOCKED_LABELONE,
  MOCKED_LABELTWO,
  MOCKED_LINK,
  MOCKED_ID,
  MOCKED_IMAGE_FILE_HANDLE_ID,
  MOCKED_USER_ID,
  MOCKED_TYPE,
  MOCKED_SYNAPSE_LINK,
  MOCKED_EXTERNAL_LINK,
]

const propsForNonHeaderMode: TableRowGenericCardProps = {
  data,
  genericCardSchema,
  schema,
  secondaryLabelLimit: 3,
  selectColumns: [],
  columnModels: [],
}

const propsForHeaderMode: TableRowGenericCardProps = {
  data,
  iconOptions,
  schema,
  genericCardSchema: genericCardSchemaHeader,
  isHeader: true,
  selectColumns: [],
  columnModels: [],
}

describe('TableRowGenericCard tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    vi.clearAllMocks()
    registerTableQueryResult(
      {
        ...mockQueryBundleRequest.query,
        sql: `SELECT * FROM ${mockTableEntity.id}`,
      },
      mockQueryResultBundle,
    )
    registerTableQueryResult(
      {
        ...mockQueryBundleRequest.query,
        sql: `SELECT * FROM ${mockFileViewEntity.id}`,
      },
      mockQueryResultBundle,
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  test('renders the correct UI in non header mode', async () => {
    const { container } = renderComponent(propsForNonHeaderMode, 'TableEntity')
    await screen.findByRole('img')
    within(container.querySelector('div.SRC-type')!).getByText(commonProps.type)
    within(container.querySelector('a')!).getByText(data[0])
    within(
      container.querySelector(`.${CARD_SHORT_DESCRIPTION_CSS}`)!,
    ).getByText(MOCKED_DESCRIPTION)
    screen.getByTestId('CardFooter')
  })

  test('renders as a Header without crashing', () => {
    const { container } = renderComponent(propsForHeaderMode, 'TableEntity')
    within(container.querySelector('div.SRC-type')!).getByText(commonProps.type)
    within(container.querySelector('h3')!).getByText(data[0])
    expect(
      screen.queryByText('Show More', { exact: false }),
    ).not.toBeInTheDocument()
    within(container.querySelector('.SRC-font-size-base')!).getByText(data[2])
    screen.getByTestId('CardFooter')
  })

  describe('Renders UserCards when a UserId_List column is present', () => {
    const columnModelWithUserIdList = [
      {
        columnType: ColumnTypeEnum.USERID_LIST,
        id: 'MOCKID',
        name: 'userIdList',
      },
    ]
    test('Renders a UserCard with an EntityView associate type', async () => {
      renderComponent(
        {
          ...propsForNonHeaderMode,
          genericCardSchema: {
            ...genericCardSchema,
            secondaryLabels: ['userIdList'],
          },
          columnModels: columnModelWithUserIdList,
          titleLinkConfig: undefined,
        },
        'TableEntity',
      )

      await screen.findByText('@' + MOCK_USER_NAME)
    })
  })

  test('Renders expected entity type icon when useTypeColumnForIcon is set to true', () => {
    renderComponent(
      {
        ...propsForNonHeaderMode,
        useTypeColumnForIcon: true,
        titleLinkConfig: undefined,
      },
      'TableEntity',
    )
    screen.getByTestId('IconSvg')
    expect(mockIconSvg).toHaveBeenRenderedWithProps({ icon: 'folder' })
  })

  describe('Renders a FileHandleLink when the title is a file handle', () => {
    const columnModelWithFileHandleTitle = [
      {
        columnType: ColumnTypeEnum.FILEHANDLEID,
        id: 'MOCKID',
        name: 'link',
      },
    ]

    test('Renders a FileHandleLink with an EntityView associate type', async () => {
      renderComponent(
        {
          ...propsForNonHeaderMode,
          columnModels: columnModelWithFileHandleTitle,
          titleLinkConfig: undefined,
        },
        'EntityView',
      )
      await screen.findByTestId('FileHandleLink')
      expect(mockFileHandleLink).toHaveBeenRenderedWithProps({
        showDownloadIcon: true,
        fileHandleAssociation: {
          fileHandleId: MOCKED_LINK,
          associateObjectId: MOCKED_ID,
          associateObjectType: FileHandleAssociateType.FileEntity,
        },
        displayValue: MOCKED_TITLE,
      })
    })

    test('Renders a FileHandleLink with a table associate type', async () => {
      renderComponent(
        {
          ...propsForNonHeaderMode,
          columnModels: columnModelWithFileHandleTitle,
          titleLinkConfig: undefined,
        },
        'TableEntity',
      )
      await screen.findByTestId('FileHandleLink')
      expect(mockFileHandleLink).toHaveBeenRenderedWithProps({
        showDownloadIcon: true,
        fileHandleAssociation: {
          fileHandleId: MOCKED_LINK,
          associateObjectId: mockTableEntityData.id,
          associateObjectType: FileHandleAssociateType.TableEntity,
        },
        displayValue: MOCKED_TITLE,
      })
    })
  })

  describe('Renders a ImageFileHandle when imageFileHandleColumnName is set', () => {
    const FILE_HANDLE_COLUMN_TYPE = ColumnTypeEnum.FILEHANDLEID
    const columnModelWithFileHandle = [
      {
        columnType: FILE_HANDLE_COLUMN_TYPE,
        id: 'MOCKID',
        name: 'image',
      },
    ]
    test('Renders a ImageFileHandle with an EntityView associate type', async () => {
      renderComponent(
        {
          ...propsForNonHeaderMode,
          genericCardSchema: {
            ...genericCardSchema,
            imageFileHandleColumnName: 'image',
          },
          columnModels: columnModelWithFileHandle,
          titleLinkConfig: undefined,
        },
        'EntityView',
      )
      await screen.findByTestId('ImageFileHandle')
      expect(mockImageFileHandle).toHaveBeenRenderedWithProps({
        fileHandleAssociation: {
          fileHandleId: MOCKED_IMAGE_FILE_HANDLE_ID,
          associateObjectId: MOCKED_ID,
          associateObjectType: FileHandleAssociateType.FileEntity,
        },
      })
    })
    test('Renders a ImageFileHandle with a table associate type', async () => {
      renderComponent(
        {
          ...propsForNonHeaderMode,
          genericCardSchema: {
            ...genericCardSchema,
            imageFileHandleColumnName: 'image',
          },
          columnModels: columnModelWithFileHandle,
          titleLinkConfig: undefined,
        },
        'TableEntity',
      )
      await screen.findByTestId('ImageFileHandle')
      expect(mockImageFileHandle).toHaveBeenRenderedWithProps({
        fileHandleAssociation: {
          fileHandleId: MOCKED_IMAGE_FILE_HANDLE_ID,
          associateObjectId: mockTableEntityData.id,
          associateObjectType: FileHandleAssociateType.TableEntity,
        },
      })
    })
  })

  describe('creates a download cart button', () => {
    const props = {
      ...propsForNonHeaderMode,
      genericCardSchema: {
        ...genericCardSchema,
        downloadCartSynId: 'datasetAlias',
      },
    }

    it('renders the button', async () => {
      mockEntityDownloadConfirmation.mockImplementation(() => (
        <div data-testid="EntityDownloadConfirmation" />
      ))
      renderComponent(props, 'TableEntity')
      const button = await screen.findByRole('button', {
        name: /download/i,
      })
      fireEvent.click(button)
      expect(EntityDownloadConfirmation).toHaveBeenCalled()
    })

    it('does not render the button with invalid synID', () => {
      mockEntityDownloadConfirmation.mockImplementation(() => (
        <div data-testid="EntityDownloadConfirmation" />
      ))

      const dataForInvalidSynapseLink = cloneDeep(data)
      dataForInvalidSynapseLink[11] = MOCKED_INVALID_SYNAPSE_LINK

      renderComponent(
        {
          ...props,
          data: dataForInvalidSynapseLink,
          genericCardSchema: {
            ...genericCardSchema,
            downloadCartSynId: 'datasetAlias',
          },
        },
        'TableEntity',
      )
      const button = screen.queryByRole('button', {
        name: /download/i,
      })
      expect(button).not.toBeInTheDocument()
    })
  })

  describe('it creates a HOW TO DOWNLOAD label', () => {
    it('creates one label when downloadCartSynId is passed', async () => {
      renderComponent(
        {
          ...propsForNonHeaderMode,
          genericCardSchema: {
            ...genericCardSchema,
            downloadCartSynId: 'datasetAlias',
            customSecondaryLabelConfig: {
              key: 'How to Download',
              value: 'this text will be replaced',
              isVisible: (schema: Record<string, number>, data: string[]) => {
                return Boolean(
                  data[schema['externalLink']] || data[schema['datasetAlias']],
                )
              },
            },
          },
        },
        'TableEntity',
      )
      const howToDownloadLabel = await screen.findByText(/download cart/i, {})
      expect(howToDownloadLabel).toBeVisible()
    })

    it('creates one label when both downloadCartSynId is not passed', async () => {
      renderComponent(
        {
          ...propsForNonHeaderMode,
          genericCardSchema: {
            ...genericCardSchema,
            customSecondaryLabelConfig: {
              key: 'How to Download',
              value: 'Explain how to add to download cart',
              isVisible: (schema: Record<string, number>, data: string[]) => {
                return Boolean(
                  data[schema['externalLink']] || data[schema['datasetAlias']],
                )
              },
            },
          },
        },
        'TableEntity',
      )
      const howToDownloadLabel = await screen.findByText(
        /how to add to download cart/i,
        {},
      )
      expect(howToDownloadLabel).toBeVisible()
    })
  })

  describe('synapseEntityConfig', () => {
    it('derives entity identifiers from column sources', async () => {
      const entityIdColumnName = 'datasetEntityId'
      const entityVersionColumnName = 'datasetEntityVersion'
      const schemaWithEntityColumns = {
        ...schema,
        [entityIdColumnName]: data.length,
        [entityVersionColumnName]: data.length + 1,
      }
      const entityId = 'syn6000'
      const entityVersion = '4'
      const dataWithEntityColumns = [...data, entityId, entityVersion]

      renderComponent(
        {
          ...propsForNonHeaderMode,
          data: dataWithEntityColumns,
          schema: schemaWithEntityColumns,
          genericCardSchema: {
            ...genericCardSchema,
            synapseEntityConfig: {
              id: { source: 'column', columnName: entityIdColumnName },
              version: {
                source: 'column',
                columnName: entityVersionColumnName,
              },
            },
          },
        },
        'TableEntity',
      )

      const downloadButton = await screen.findByRole('button', {
        name: /download/i,
      })
      fireEvent.click(downloadButton)

      await screen.findByTestId('EntityDownloadConfirmation')

      const downloadConfirmationCall =
        mockEntityDownloadConfirmation.mock.calls[0]
      expect(downloadConfirmationCall?.[0]).toMatchObject({
        entityId,
        versionNumber: Number(entityVersion),
      })

      const croissantCall = mockCroissantButton.mock.calls[0]
      expect(croissantCall?.[0]).toMatchObject({
        datasetId: entityId,
        datasetVersionNumber: Number(entityVersion),
      })
    })

    it('allows downloadCartSynId to override the download entity while keeping the Croissant entity unchanged', async () => {
      const entityIdColumnName = 'datasetEntityId'
      const entityVersionColumnName = 'datasetEntityVersion'
      const croissantEntityId = 'syn6000'
      const croissantEntityVersion = '4'
      const downloadCartSynapseLink =
        'https://www.synapse.org/#!Synapse:syn9999.2'

      const dataWithOverrides = [...data]
      dataWithOverrides[schema.datasetAlias] = downloadCartSynapseLink

      const entityIdColumnIndex = dataWithOverrides.length
      dataWithOverrides.push(croissantEntityId)
      const entityVersionColumnIndex = dataWithOverrides.length
      dataWithOverrides.push(croissantEntityVersion)

      const schemaWithEntityColumns = {
        ...schema,
        [entityIdColumnName]: entityIdColumnIndex,
        [entityVersionColumnName]: entityVersionColumnIndex,
      }

      renderComponent(
        {
          ...propsForNonHeaderMode,
          data: dataWithOverrides,
          schema: schemaWithEntityColumns,
          genericCardSchema: {
            ...genericCardSchema,
            downloadCartSynId: 'datasetAlias',
            synapseEntityConfig: {
              id: { source: 'column', columnName: entityIdColumnName },
              version: {
                source: 'column',
                columnName: entityVersionColumnName,
              },
            },
          },
        },
        'TableEntity',
      )

      const downloadButton = await screen.findByRole('button', {
        name: /download/i,
      })
      fireEvent.click(downloadButton)

      await screen.findByTestId('EntityDownloadConfirmation')

      const downloadConfirmationCall =
        mockEntityDownloadConfirmation.mock.calls[0]
      expect(downloadConfirmationCall?.[0]).toMatchObject({
        entityId: 'syn9999',
        versionNumber: 2,
      })

      const croissantCall = mockCroissantButton.mock.calls[0]
      expect(croissantCall?.[0]).toMatchObject({
        datasetId: croissantEntityId,
        datasetVersionNumber: Number(croissantEntityVersion),
      })
    })
  })

  test('PortalDOI is shown based on hook result', async () => {
    mockGetCandidateDoiId.mockReturnValue('someDoiString')
    mockUseShowPortalDoi.mockReturnValue(true)

    renderComponent(
      {
        ...propsForNonHeaderMode,
        genericCardSchema: {
          ...genericCardSchema,
          portalDoiConfiguration: {
            resourceType: 'RESOURCE_TYPE',
            resourceIdKeyColumns: ['title', 'subTitle'],
            portalId: '12345',
            serializeDoiString: vi.fn(),
          },
        },
      },
      'TableEntity',
    )

    // Not shown until the intersection observer is triggered
    expect(screen.queryByText('DOI')).not.toBeInTheDocument()
    expect(screen.queryByTestId('PortalDOI')).not.toBeInTheDocument()

    act(() => {
      mockAllIsIntersecting(true)
    })

    await screen.findByText('DOI')
    await screen.findByTestId('PortalDOI')

    expect(PortalDOI).toHaveBeenRenderedWithProps({
      portalId: '12345',
      resourceId: 'someDoiString',
    })
  })

  test('PortalDOI is not shown when showDoiCardLabel is false', () => {
    mockGetCandidateDoiId.mockReturnValue('someDoiString')
    mockUseShowPortalDoi.mockReturnValue(false)

    renderComponent(
      {
        ...propsForNonHeaderMode,
        genericCardSchema: {
          ...genericCardSchema,
          portalDoiConfiguration: {
            resourceType: 'RESOURCE_TYPE',
            resourceIdKeyColumns: ['title', 'subTitle'],
            portalId: '12345',
            serializeDoiString: vi.fn(),
          },
        },
      },
      'TableEntity',
    )

    act(() => {
      mockAllIsIntersecting(true)
    })

    expect(screen.queryByText('DOI')).not.toBeInTheDocument()
    expect(screen.queryByTestId('PortalDOI')).not.toBeInTheDocument()

    expect(PortalDOI).not.toHaveBeenCalled()
  })
})
