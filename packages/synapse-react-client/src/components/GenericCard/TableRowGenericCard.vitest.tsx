import { CardLink } from '@/components/CardContainer/CardLink'
import { getLinkParams } from '@/components/GenericCard/CardUtils'
import PortalDOI from '@/components/GenericCard/PortalDOI/PortalDOI'
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
import { TargetEnum } from '@/utils/html/TargetEnum'
import { EntityDownloadConfirmation } from '../EntityDownloadConfirmation'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper'
import QueryWrapper from '../QueryWrapper'
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
    expect(mockIconSvg).toHaveBeenCalledWith(
      { icon: 'folder' },
      expect.anything(),
    )
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
      expect(mockFileHandleLink).toHaveBeenCalledWith(
        {
          showDownloadIcon: true,
          fileHandleAssociation: {
            fileHandleId: MOCKED_LINK,
            associateObjectId: MOCKED_ID,
            associateObjectType: FileHandleAssociateType.FileEntity,
          },
          displayValue: MOCKED_TITLE,
        },
        expect.anything(),
      )
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
      expect(mockFileHandleLink).toHaveBeenCalledWith(
        {
          showDownloadIcon: true,
          fileHandleAssociation: {
            fileHandleId: MOCKED_LINK,
            associateObjectId: mockTableEntityData.id,
            associateObjectType: FileHandleAssociateType.TableEntity,
          },
          displayValue: MOCKED_TITLE,
        },
        expect.anything(),
      )
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
      expect(mockImageFileHandle).toHaveBeenCalledWith(
        {
          fileHandleAssociation: {
            fileHandleId: MOCKED_IMAGE_FILE_HANDLE_ID,
            associateObjectId: MOCKED_ID,
            associateObjectType: FileHandleAssociateType.FileEntity,
          },
        },
        expect.anything(),
      )
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
      expect(mockImageFileHandle).toHaveBeenCalledWith(
        {
          fileHandleAssociation: {
            fileHandleId: MOCKED_IMAGE_FILE_HANDLE_ID,
            associateObjectId: mockTableEntityData.id,
            associateObjectType: FileHandleAssociateType.TableEntity,
          },
        },
        expect.anything(),
      )
    })
  })

  describe('it makes the correct URL for the title', () => {
    test('creates a link to synapse', () => {
      const synId = 'syn12345678'
      const synLink = `https://www.synapse.org/Synapse:${synId}`
      const { href, target } = getLinkParams(
        synId,
        undefined,
        undefined,
        undefined,
      )
      expect(href).toEqual(synLink)
      expect(target).toEqual(TargetEnum.CURRENT_WINDOW)
    })

    test('creates a DOI link', () => {
      const doi = '10.1093/neuonc/noy046'
      const doiLink = `https://dx.doi.org/${doi}`
      const { href, target } = getLinkParams(
        doi,
        undefined,
        undefined,
        undefined,
      )
      expect(href).toEqual(doiLink)
      expect(target).toEqual(TargetEnum.NEW_WINDOW)
    })

    test('creates a DOI link PORTALS-1801', () => {
      const doi = '10.1007/s00401-020-02230-x '
      const doiLink = `https://dx.doi.org/${doi.trim()}`
      const { href, target } = getLinkParams(
        doi,
        undefined,
        undefined,
        undefined,
      )
      expect(href).toEqual(doiLink)
      expect(target).toEqual(TargetEnum.NEW_WINDOW)
    })

    test('creates an internal parameterized link', () => {
      const value = '1234'
      const data = [value]
      const URLColumnName = 'Grant Number'
      const matchColumnName = 'Funder'
      const schema = {
        [matchColumnName]: 0,
      }
      const titleLinkConfig: CardLink = {
        isMarkdown: false,
        baseURL: 'Explore/Projects',
        matchColumnName,
        URLColumnName,
      }
      const expectedLink = `/${titleLinkConfig.baseURL}?${URLColumnName}=${value}`
      const { href, target } = getLinkParams('', titleLinkConfig, data, schema)
      expect(href).toEqual(expectedLink)
      expect(target).toEqual(TargetEnum.CURRENT_WINDOW)
    })

    test('creates an internal details page link', () => {
      const value = '1234+5+6'
      const data = [value]
      const URLColumnName = 'Grant Number'
      const matchColumnName = 'Funder'
      const schema = {
        [matchColumnName]: 0,
      }
      const titleLinkConfig: CardLink = {
        isMarkdown: false,
        baseURL: 'Explore/Programs/DetailsPage',
        matchColumnName,
        URLColumnName,
      }
      const expectedLink = `/${
        titleLinkConfig.baseURL
      }?${URLColumnName}=${encodeURIComponent(value)}`
      const { href: href1, target: target1 } = getLinkParams(
        '',
        titleLinkConfig,
        data,
        schema,
      )
      expect(href1).toEqual(expectedLink)
      // PORTALS-2254: Open DetailsPage links in a new window by default
      expect(target1).toEqual(TargetEnum.NEW_WINDOW)

      titleLinkConfig.target = TargetEnum.FULL_WINDOW_BODY
      const { href: href2, target: target2 } = getLinkParams(
        '',
        titleLinkConfig,
        data,
        schema,
      )
      expect(href2).toEqual(expectedLink)
      // PORTALS-2254: Verify we can override the target via the parameter in the CardLink config
      expect(target2).toEqual(TargetEnum.FULL_WINDOW_BODY)
    })

    it('uses another column value for link override', () => {
      const value = 'foo'
      const hrefOverrideValue = 'bar'
      const data = [value, hrefOverrideValue]
      const matchColumnName = 'Funder'
      const hrefOverrideColumnName = 'Override Col'
      const schema = {
        [matchColumnName]: 0,
        [hrefOverrideColumnName]: 1,
      }
      const titleLinkConfig: CardLink = {
        isMarkdown: false,
        matchColumnName,
        overrideLinkURLColumnName: hrefOverrideColumnName,
      }
      const expectedLink = hrefOverrideValue
      const { href, target } = getLinkParams('', titleLinkConfig, data, schema)
      expect(href).toEqual(expectedLink)
      expect(target).toEqual(TargetEnum.CURRENT_WINDOW)
    })

    it('uses another column value for link override with transform', () => {
      const value = 'foo'
      const hrefOverrideValue = 'bar'
      const data = [value, hrefOverrideValue]
      const matchColumnName = 'Funder'
      const hrefOverrideColumnName = 'Override Col'
      const transform = (value: string) => `https://example.com/${value}`
      const schema = {
        [matchColumnName]: 0,
        [hrefOverrideColumnName]: 1,
      }
      const titleLinkConfig: CardLink = {
        isMarkdown: false,
        matchColumnName,
        overrideLinkURLColumnName: hrefOverrideColumnName,
        overrideLinkURLColumnTransform: transform,
      }
      const expectedLink = 'https://example.com/bar'
      const { href, target } = getLinkParams('', titleLinkConfig, data, schema)
      expect(href).toEqual(expectedLink)
      expect(target).toEqual(TargetEnum.CURRENT_WINDOW)
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

    expect(PortalDOI).toHaveBeenCalledWith(
      {
        portalId: '12345',
        resourceId: 'someDoiString',
      },
      expect.anything(),
    )
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
