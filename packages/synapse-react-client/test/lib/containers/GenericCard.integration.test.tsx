import { render, screen, within } from '@testing-library/react'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import {
  CardLink,
  LabelLinkConfig,
  TargetEnum,
} from '../../../src/lib/containers/CardContainerLogic'
import GenericCard, {
  CARD_SHORT_DESCRIPTION_CSS,
  GenericCardProps,
  GenericCardSchema,
  getLinkParams,
  LongDescription,
  ShortDescription,
  SynapseCardLabel,
} from '../../../src/lib/containers/GenericCard'
import * as IconSvg from '../../../src/lib/containers/IconSvg'
import * as FileHandleLinkModule from '../../../src/lib/containers/widgets/FileHandleLink'
import * as ImageFileHandleModule from '../../../src/lib/containers/widgets/ImageFileHandle'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  ColumnTypeEnum,
  FileHandleAssociateType,
  SelectColumn,
} from '../../../src/lib/utils/synapseTypes'
import { server } from '../../../mocks/msw/server'
import {
  MOCK_USER_ID,
  MOCK_USER_NAME,
} from '../../../mocks/user/mock_user_profile'
import { QueryVisualizationContextProvider } from '../../../src/lib/containers/QueryVisualizationWrapper'

const renderComponent = (props: GenericCardProps) => {
  return render(
    <GenericCard
      {...props}
      queryVisualizationContext={{
        getColumnDisplayName: jest.fn().mockImplementation(col => col),
      }}
    />,
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

const tableId = 'TABLE_ID_MOCK'

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
  queryContext: {
    entity: {
      id: tableId,
      concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
    },
  },
}

const propsForHeaderMode: GenericCardProps = {
  data,
  iconOptions,
  schema,
  genericCardSchema: genericCardSchemaHeader,
  isHeader: true,
  selectColumns: [],
  columnModels: [],
  queryContext: {
    entity: {
      id: tableId,
      concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
    },
  },
}

describe('GenericCard tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())
  test('renders the correct UI in non header mode', () => {
    const { container } = renderComponent(propsForNonHeaderMode)
    screen.getByRole('img')
    within(container.querySelector('div.SRC-type')!).getByText(commonProps.type)
    within(container.querySelector('a')!).getByText(data[0])
    within(
      container.querySelector(`.${CARD_SHORT_DESCRIPTION_CSS}`)!,
    ).getByText(MOCKED_DESCRIPTION)
    screen.getByTestId('CardFooter')
  })

  test('renders as a Header without crashing', () => {
    const { container } = renderComponent(propsForHeaderMode)
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
      renderComponent({
        ...propsForNonHeaderMode,
        genericCardSchema: {
          ...genericCardSchema,
          secondaryLabels: ['userIdList'],
        },
        queryContext: {
          entity: {
            id: tableId,
            concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
          },
        },
        columnModels: columnModelWithUserIdList,
        titleLinkConfig: undefined,
        tableId,
      })

      await screen.findByText('@' + MOCK_USER_NAME)
    })
  })

  test('Renders expected entity type icon when useTypeColumnForIcon is set to true', () => {
    renderComponent({
      ...propsForNonHeaderMode,
      queryContext: {
        entity: {
          id: tableId,
          concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
        },
      },
      useTypeColumnForIcon: true,
      titleLinkConfig: undefined,
      tableId,
    })
    screen.getByTestId('IconSvg')
    expect(mockIconSvg).toHaveBeenCalledWith(
      { icon: 'folder' },
      expect.anything(),
    )
  })

  describe('Renders a FileHandleLink when the title is a file handle', () => {
    const FILE_HANDLE_COLUMN_TYPE = ColumnTypeEnum.FILEHANDLEID
    const tableId = 'TABLE_ID_MOCK'
    const columnModelWithFileHandleTitle = [
      {
        columnType: FILE_HANDLE_COLUMN_TYPE,
        id: 'MOCKID',
        name: 'link',
      },
    ]

    test('Renders a FileHandleLink with an EntityView associate type', () => {
      const mockFileHandleLink = jest
        .spyOn(FileHandleLinkModule, 'FileHandleLink')
        .mockImplementation(() => <div data-testid="FileHandleLink" />)
      renderComponent({
        ...propsForNonHeaderMode,
        queryContext: {
          entity: {
            id: tableId,
            concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
          },
        },
        columnModels: columnModelWithFileHandleTitle,
        titleLinkConfig: undefined,
        tableId,
      })
      screen.getByTestId('FileHandleLink')
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

    test('Renders a FileHandleLink with a table associate type', () => {
      renderComponent({
        ...propsForNonHeaderMode,
        queryContext: {
          entity: {
            id: tableId,
            concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
          },
        },
        columnModels: columnModelWithFileHandleTitle,
        titleLinkConfig: undefined,
        tableId,
      })
      screen.getByTestId('FileHandleLink')
      expect(mockFileHandleLink).toHaveBeenCalledWith(
        {
          showDownloadIcon: true,
          fileHandleAssociation: {
            fileHandleId: MOCKED_LINK,
            associateObjectId: tableId,
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
    const tableId = 'TABLE_ID_MOCK'
    const columnModelWithFileHandle = [
      {
        columnType: FILE_HANDLE_COLUMN_TYPE,
        id: 'MOCKID',
        name: 'image',
      },
    ]
    test('Renders a ImageFileHandle with an EntityView associate type', () => {
      renderComponent({
        ...propsForNonHeaderMode,
        genericCardSchema: {
          ...genericCardSchema,
          imageFileHandleColumnName: 'image',
        },
        queryContext: {
          entity: {
            id: tableId,
            concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
          },
        },
        columnModels: columnModelWithFileHandle,
        titleLinkConfig: undefined,
        tableId,
      })
      screen.getByTestId('ImageFileHandle')
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
    test('Renders a ImageFileHandle with a table associate type', () => {
      renderComponent({
        ...propsForNonHeaderMode,
        genericCardSchema: {
          ...genericCardSchema,
          imageFileHandleColumnName: 'image',
        },
        queryContext: {
          entity: {
            id: tableId,
            concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
          },
        },
        columnModels: columnModelWithFileHandle,
        titleLinkConfig: undefined,
        tableId,
      })
      screen.getByTestId('ImageFileHandle')
      expect(mockImageFileHandle).toHaveBeenCalledWith(
        {
          fileHandleAssociation: {
            fileHandleId: MOCKED_IMAGE_FILE_HANDLE_ID,
            associateObjectId: tableId,
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
      const synLink = `https://www.synapse.org/#!Synapse:${synId}`
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
      const value = '1234'
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
      const expectedLink = `/${titleLinkConfig.baseURL}?${URLColumnName}=${value}`
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
  })
  describe('it makes the correct URL for the secondary labels', () => {
    const DATASETS = 'datasets'
    const datasetBaseURL = 'Explore/Datasets'
    const labelLinkConfig: LabelLinkConfig = [
      {
        isMarkdown: false,
        baseURL: datasetBaseURL,
        URLColumnName: DATASETS,
        matchColumnName: 'dataset',
      },
      {
        isMarkdown: true,
        matchColumnName: 'dataset',
      },
    ]
    const selectColumns: SelectColumn[] = [
      {
        columnType: ColumnTypeEnum.STRING,
        id: 'a',
        name: 'dataset',
      },
    ]

    test('works with a single value', () => {
      const value = 'syn1234567'
      const { container } = render(
        <SynapseCardLabel
          value={value}
          labelLink={labelLinkConfig[0]}
          isHeader={false}
          selectColumns={selectColumns}
          columnModels={undefined}
          columnName={DATASETS}
        />,
        { wrapper: createWrapper() },
      )

      const link = container.querySelector('a')!
      expect(link.getAttribute('href')).toEqual(
        `/${datasetBaseURL}?${DATASETS}=${value}`,
      )
    })

    test('works with a header', () => {
      const value = 'syn1234567'
      const { container } = render(
        <SynapseCardLabel
          value={value}
          labelLink={labelLinkConfig[0]}
          isHeader={true}
          selectColumns={selectColumns}
          columnModels={undefined}
          columnName={DATASETS}
        />,
        { wrapper: createWrapper() },
      )
      const link = container.querySelector('a')!
      expect(link).toBeDefined()
    })

    test('works with a multi string value', () => {
      // add commas to ensure its not piecing those out
      const val1 = 'syn12,,34567'
      const val2 = 'syn1234,568'
      const val3 = 'syn,,12345,69'
      const value = `["${val1}","${val2}","${val3}"]`
      const { container } = render(
        <SynapseCardLabel
          value={value}
          labelLink={labelLinkConfig[0]}
          isHeader={false}
          selectColumns={[
            {
              columnType: ColumnTypeEnum.STRING_LIST,
              id: 'a',
              name: DATASETS,
            },
          ]}
          columnModels={undefined}
          columnName={DATASETS}
        />,
        { wrapper: createWrapper() },
      )
      const links = container.querySelectorAll('a')!
      expect(links).toHaveLength(3)
      expect(links[0].getAttribute('href')).toEqual(
        `/${datasetBaseURL}?${DATASETS}=${val1}`,
      )
      expect(links[1].getAttribute('href')).toEqual(
        `/${datasetBaseURL}?${DATASETS}=${val2}`,
      )
      expect(links[2].getAttribute('href')).toEqual(
        `/${datasetBaseURL}?${DATASETS}=${val3}`,
      )
    })

    test('works with a comma separated value', () => {
      const val1 = 'syn1234567'
      const val2 = 'syn1234568'
      const val3 = 'syn1234569'
      const value = `${val1},${val2},${val3}`
      const { container } = render(
        <SynapseCardLabel
          value={value}
          labelLink={labelLinkConfig[0]}
          isHeader={false}
          selectColumns={selectColumns}
          columnModels={undefined}
          columnName={DATASETS}
        />,
        { wrapper: createWrapper() },
      )
      const links = container.querySelectorAll('a')
      expect(links).toHaveLength(3)
      expect(links[0].getAttribute('href')).toEqual(
        `/${datasetBaseURL}?${DATASETS}=${val1}`,
      )
      expect(links[1].getAttribute('href')).toEqual(
        `/${datasetBaseURL}?${DATASETS}=${val2}`,
      )
      expect(links[2].getAttribute('href')).toEqual(
        `/${datasetBaseURL}?${DATASETS}=${val3}`,
      )
    })

    test('works with a markdown link', () => {
      const value = '[link](www.synapse.org)'
      const { container } = render(
        <SynapseCardLabel
          value={value}
          labelLink={labelLinkConfig[1]}
          isHeader={false}
          selectColumns={undefined}
          columnModels={undefined}
          columnName=""
        />,
        { wrapper: createWrapper() },
      )

      const markdown = container.querySelector('.markdown')!
      // double check the html elements show up correctly from the markdown component
      expect(within(markdown).queryByRole('paragraph')).not.toBeInTheDocument()
      within(markdown).getByRole('link')
    })

    test('works with a multi string markdown link', () => {
      const selectColumnsMultiString: SelectColumn[] = [
        {
          name: DATASETS,
          id: 'a',
          columnType: ColumnTypeEnum.STRING_LIST,
        },
      ]
      // make sure it doesn't parse out the extra commas
      const value =
        '["[link],,(www.synapse.org)","[link2](w,,ww.synapse.org/#!)"]'
      const { container } = render(
        <SynapseCardLabel
          value={value}
          labelLink={labelLinkConfig[1]}
          isHeader={false}
          selectColumns={selectColumnsMultiString}
          columnModels={undefined}
          columnName={DATASETS}
        />,
        { wrapper: createWrapper() },
      )
      const markdown = container.querySelectorAll('.markdown')
      expect(markdown).toHaveLength(2)
    })

    it('auto-links a single Synapse ID value', () => {
      const value = 'syn1234567'
      render(
        <SynapseCardLabel
          value={value}
          labelLink={undefined}
          isHeader={false}
          selectColumns={selectColumns}
          columnModels={undefined}
          columnName={DATASETS}
        />,
        { wrapper: createWrapper() },
      )
      const link = screen.getByRole('link')
      expect(link.getAttribute('href')).toEqual(
        `https://www.synapse.org/#!Synapse:${value}`,
      )
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
      const markdown = container.querySelector('.markdown')!
      within(markdown).getByText('header', { exact: false })
    })
  })
})
