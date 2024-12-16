import {
  ColumnModel,
  ColumnTypeEnum,
  FileHandleAssociateType,
} from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'
import { cloneDeep } from 'lodash-es'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { mockFileViewEntity } from '../../mocks/entity/mockFileView'
import mockTableEntityData, {
  mockTableEntity,
} from '../../mocks/entity/mockTableEntity'
import {
  mockQueryBundleRequest,
  mockQueryResultBundle,
} from '../../mocks/mockFileViewQuery'
import { registerTableQueryResult } from '../../mocks/msw/handlers/tableQueryService'
import { server } from '../../mocks/msw/server'
import {
  MOCK_USER_ID,
  MOCK_USER_NAME,
} from '../../mocks/user/mock_user_profile'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { CardLink, TargetEnum } from '../CardContainerLogic'
import * as IconSvg from '../IconSvg/IconSvg'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper'
import QueryWrapper from '../QueryWrapper'
import * as FileHandleLinkModule from '../widgets/FileHandleLink'
import * as ImageFileHandleModule from '../widgets/ImageFileHandle'
import { GenericCardProps } from './GenericCard'
import GenericCard, {
  CARD_SHORT_DESCRIPTION_CSS,
  GenericCardSchema,
  getColumnIndex,
  getLinkParams,
  LongDescription,
  ShortDescription,
} from './index'

const renderComponent = (
  props: GenericCardProps,
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
        <GenericCard {...props} />
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    {
      wrapper: createWrapper(),
    },
  )
}

mockAllIsIntersecting(true)
const mockIconSvg = jest
  .spyOn(IconSvg, 'default')
  .mockImplementation(() => <div data-testid="IconSvg" />)

const mockFileHandleLink = jest
  .spyOn(FileHandleLinkModule, 'FileHandleLink')
  .mockImplementation(() => <div data-testid="FileHandleLink" />)

const mockImageFileHandle = jest
  .spyOn(ImageFileHandleModule, 'ImageFileHandle')
  .mockImplementation(() => <div data-testid="ImageFileHandle" />)

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
const genericCardSchema: GenericCardSchema = {
  ...commonProps,
  secondaryLabels: [labelOneColumnName, 'labelTwo'],
}
const genericCardSchemaHeader: GenericCardSchema = {
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
]

const propsForNonHeaderMode: GenericCardProps = {
  data,
  genericCardSchema,
  schema,
  secondaryLabelLimit: 3,
  selectColumns: [],
  columnModels: [],
}

const propsForHeaderMode: GenericCardProps = {
  data,
  iconOptions,
  schema,
  genericCardSchema: genericCardSchemaHeader,
  isHeader: true,
  selectColumns: [],
  columnModels: [],
}

describe('GenericCard tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
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

  test('renders the correct UI in non header mode', () => {
    const { container } = renderComponent(propsForNonHeaderMode, 'TableEntity')
    screen.getByRole('img')
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
      const mockFileHandleLink = jest
        .spyOn(FileHandleLinkModule, 'FileHandleLink')
        .mockImplementation(() => <div data-testid="FileHandleLink" />)
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

  describe('It renders markdown for the description', () => {
    const descriptionLinkConfig = {
      isMarkdown: true,
      showFullDescriptionByDefault: true,
    }
    const value = '# header [website](synapse.org)'
    test('hides the short description if descriptionConfig is specified', () => {
      const { container } = render(
        <ShortDescription
          description={value}
          hasClickedShowMore={false}
          descriptionSubTitle={''}
          descriptionConfig={descriptionLinkConfig}
          toggleShowMore={jest.fn()}
        />,
        { wrapper: createWrapper() },
      )
      expect(container.querySelectorAll('div')).toHaveLength(0)
    })
    test('shows the short description if descriptionConfig is not specified', () => {
      const { container } = render(
        <ShortDescription
          description={value}
          hasClickedShowMore={false}
          descriptionSubTitle={''}
          descriptionConfig={undefined}
          toggleShowMore={jest.fn()}
        />,
        { wrapper: createWrapper() },
      )
      expect(container.querySelectorAll('div')).toHaveLength(1)
    })
    test('hides the long description if descriptionConfig is specified', () => {
      const { container } = render(
        <LongDescription
          description={value}
          hasClickedShowMore={false}
          descriptionSubTitle={''}
          descriptionConfig={descriptionLinkConfig}
        />,
        { wrapper: createWrapper() },
      )
      const markdown = container.querySelector<HTMLElement>('.markdown')!
      within(markdown).getByText('header', { exact: false })
    })
  })

  describe('getColumnIndex', () => {
    const columnModels: ColumnModel[] = [
      { id: '1', name: 'foo', columnType: ColumnTypeEnum.STRING },
      { id: '2', name: 'bar', columnType: ColumnTypeEnum.DOUBLE },
    ]

    it('finds the column in the selectColumns', () => {
      expect(getColumnIndex('bar', columnModels, undefined)).toBe(1)
    })
    it('finds the column in the columnModels', () => {
      expect(getColumnIndex('bar', undefined, columnModels)).toBe(1)
    })
    it('does not include the column', () => {
      expect(getColumnIndex('baz', columnModels, undefined)).toBe(undefined)
    })
    it('the found column index is 0 (falsy)', () => {
      expect(getColumnIndex('foo', columnModels, undefined)).toBe(0)
    })
  })
})
