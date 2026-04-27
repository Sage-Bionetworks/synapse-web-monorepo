import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ColumnTypeEnum, SelectColumn } from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'
import { ColumnIconConfigs, LabelLinkConfig } from '../CardContainerLogic'
import { SynapseCardLabel } from './SynapseCardLabel'
import { EntityLink } from '../EntityLink'

vi.mock('../EntityLink', () => ({
  EntityLink: vi.fn(({ entity }) => (
    <a
      data-testid="EntityLink"
      href={`https://www.synapse.org/Synapse:${entity}`}
    >
      {entity}
    </a>
  )),
}))
const mockEntityLink = vi.mocked(EntityLink)

describe('SynapseCardLabel tests', () => {
  beforeEach(() => {
    mockEntityLink.mockClear()
  })

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
    {
      columnType: ColumnTypeEnum.STRING,
      id: 'b',
      name: 'override',
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
        rowData={[]}
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
        rowData={[]}
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
        rowData={[]}
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
        rowData={[]}
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
        rowData={[]}
      />,
      { wrapper: createWrapper() },
    )

    const markdown = container.querySelector<HTMLElement>('.markdown')!
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
    const value = '["[link],,(www.synapse.org)","[link2](w,,ww.synapse.org/)"]'
    const { container } = render(
      <SynapseCardLabel
        value={value}
        labelLink={labelLinkConfig[1]}
        isHeader={false}
        selectColumns={selectColumnsMultiString}
        columnModels={undefined}
        columnName={DATASETS}
        rowData={[]}
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
        rowData={[]}
      />,
      { wrapper: createWrapper() },
    )
    const link = screen.getByRole('link')
    expect(link.getAttribute('href')).toEqual(
      `https://www.synapse.org/Synapse:${value}`,
    )
  })

  it('overrideLinkURLColumnName', () => {
    const value = 'syn1234567'
    render(
      <SynapseCardLabel
        value={value}
        labelLink={{
          isMarkdown: false,
          matchColumnName: 'dataset',
          overrideLinkURLColumnName: 'override',
        }}
        isHeader={false}
        selectColumns={selectColumns}
        columnModels={undefined}
        columnName={DATASETS}
        rowData={[value, 'https://some-override-link.gov']}
      />,
      { wrapper: createWrapper() },
    )
    const link = screen.getByRole('link')
    expect(link.getAttribute('href')).toEqual(`https://some-override-link.gov`)
  })

  it('overrideLinkURLColumnName with transform', () => {
    const value = 'syn1234567'
    render(
      <SynapseCardLabel
        value={value}
        labelLink={{
          isMarkdown: false,
          matchColumnName: 'dataset',
          overrideLinkURLColumnName: 'override',
          overrideLinkURLColumnTransform: (columnValue: string) =>
            `https://${columnValue}.gov`,
        }}
        isHeader={false}
        selectColumns={selectColumns}
        columnModels={undefined}
        columnName={DATASETS}
        rowData={[value, 'some-override-link']}
      />,
      { wrapper: createWrapper() },
    )
    const link = screen.getByRole('link')
    expect(link.getAttribute('href')).toEqual(`https://some-override-link.gov`)
  })

  it('shows an icon before a single value when columnIconOptions matches', () => {
    const value = 'human'
    const columnIconOptions: ColumnIconConfigs = {
      columns: {
        [DATASETS]: {
          human: { icon: 'orcid' },
        },
      },
    }
    const { container } = render(
      <SynapseCardLabel
        value={value}
        labelLink={undefined}
        isHeader={false}
        selectColumns={selectColumns}
        columnModels={undefined}
        columnName={DATASETS}
        rowData={[]}
        columnIconOptions={columnIconOptions}
      />,
      { wrapper: createWrapper() },
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
    screen.getByText(value)
  })

  it('shows an icon per matching value in a STRING_LIST when columnIconOptions is provided', () => {
    const val1 = 'human'
    const val2 = 'mouse'
    const val3 = 'other'
    const value = `["${val1}","${val2}","${val3}"]`
    const columnIconOptions: ColumnIconConfigs = {
      columns: {
        [DATASETS]: {
          human: { icon: 'orcid' },
          mouse: { icon: 'email' },
          // 'other' has no icon
        },
      },
    }
    const { container } = render(
      <SynapseCardLabel
        value={value}
        labelLink={undefined}
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
        rowData={[]}
        columnIconOptions={columnIconOptions}
      />,
      { wrapper: createWrapper() },
    )
    // Only val1 and val2 have icon configs, so exactly 2 SVG icons should appear
    expect(container.querySelectorAll('svg')).toHaveLength(2)
    expect(container.textContent).toContain(val1)
    expect(container.textContent).toContain(val2)
    expect(container.textContent).toContain(val3)
  })

  it('maps a string to a React node with MapValueToReactNodeConfig', () => {
    const value = 'syn1234567'
    render(
      <SynapseCardLabel
        value={value}
        labelLink={{
          isMapValueToReactNodeConfig: true,
          matchColumnName: 'dataset',
          Component: ({ value, selectColumn }) => {
            return (
              <p>
                The value is {value} and the column is {selectColumn.name}
              </p>
            )
          },
        }}
        isHeader={false}
        selectColumns={selectColumns}
        columnModels={undefined}
        columnName={'dataset'}
        rowData={[value]}
      />,
      { wrapper: createWrapper() },
    )
    screen.getByText('The value is syn1234567 and the column is dataset')
  })

  it('renders an EntityLink for each item in an ENTITYID_LIST column', () => {
    const synId1 = 'syn111'
    const synId2 = 'syn222'
    const synId3 = 'syn333'
    const value = JSON.stringify([synId1, synId2, synId3])
    render(
      <SynapseCardLabel
        value={value}
        labelLink={undefined}
        isHeader={false}
        selectColumns={[
          {
            columnType: ColumnTypeEnum.ENTITYID_LIST,
            id: 'a',
            name: 'associatedDataset',
          },
        ]}
        columnModels={undefined}
        columnName={'associatedDataset'}
        rowData={[]}
      />,
      { wrapper: createWrapper() },
    )
    const links = screen.getAllByTestId('EntityLink')
    expect(links).toHaveLength(3)
    expect(links[0]).toHaveTextContent(synId1)
    expect(links[1]).toHaveTextContent(synId2)
    expect(links[2]).toHaveTextContent(synId3)
  })

  it('renders an EntityLink for a single ENTITYID column with no labelLink', () => {
    const synId = 'syn999'
    render(
      <SynapseCardLabel
        value={synId}
        labelLink={undefined}
        isHeader={false}
        selectColumns={[
          {
            columnType: ColumnTypeEnum.ENTITYID,
            id: 'a',
            name: 'associatedDataset',
          },
        ]}
        columnModels={undefined}
        columnName={'associatedDataset'}
        rowData={[]}
      />,
      { wrapper: createWrapper() },
    )
    const link = screen.getByTestId('EntityLink')
    expect(link).toHaveTextContent(synId)
  })
})
