import React from 'react'
import DetailsPage, {
  SplitStringToComponent,
} from '../../portal-components/DetailsPage/DetailsPage'
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DetailsPageTabProps, RowSynapseConfig } from 'types/portal-util-types'
import { SynapseContextProvider } from 'synapse-react-client/dist/utils/SynapseContext'
import syn16787123Json from '../../mocks/syn16787123.json'
import { SynapseConfig } from 'types/portal-config'
import { assert } from 'console'
import {
  AsynchronousJobStatus,
  EntityHeader,
  PaginatedResults,
  QueryBundleRequest,
  QueryResultBundle,
} from 'synapse-react-client/dist/utils/synapseTypes'
import * as SynapseComponentModule from 'SynapseComponent'
import { MemoryRouter } from 'react-router-dom'
import * as SynapseClient from 'synapse-react-client/dist/utils/SynapseClient'

function renderWithContext(component) {
  return render(
    <MemoryRouter>
      <SynapseContextProvider
        synapseContext={{
          accessToken: 'abcd',
          utcTime: false,
          isInExperimentalMode: false,
          downloadCartPageUrl: '/DownloadCart'
        }}
      >
        {component}
      </SynapseContextProvider>
    </MemoryRouter>,
  )
}

// We have to mock fetching a table query result, but those details remain untested
// eslint-disable-next-line no-import-assign
jest.spyOn(SynapseClient, 'getQueryTableAsyncJobResults').mockResolvedValue({
  jobState: 'COMPLETE',
  responseBody: syn16787123Json as QueryResultBundle,
} as AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>)

const expected: PaginatedResults<EntityHeader> = {
  results: [
    {
      id: 'syn26843747',
      name: 'My Entity',
      type: 'org.sagebionetworks.repo.model.FileEntity',
      versionNumber: 1,
      versionLabel: '1',
      benefactorId: 122,
      createdOn: 'today',
      modifiedOn: 'earlier',
      createdBy: 'me',
      modifiedBy: 'you',
      isLatestVersion: true,
    },
  ],
}

jest.spyOn(SynapseClient, 'getEntityHeaders').mockResolvedValue(expected)

let getSynapseConfig: () => SynapseConfig

describe('DetailsPage tests', () => {
  it('Renders synapseConfigArray with no tabs', async () => {
    const synapseConfigArray: RowSynapseConfig[] = [
      {
        name: 'Markdown',
        standalone: true,
        props: {
          markdown: 'Synapse Component 1',
        },
      },
    ]
    renderWithContext(
      <DetailsPage synapseConfigArray={synapseConfigArray} sql="" />,
    )

    await waitFor(() => screen.getByText('Synapse Component 1'))
  })

  it('Renders one set of tabs and synapseConfigArray objects', async () => {
    const tabLayout: DetailsPageTabProps[] = [
      {
        title: 'Tab 1',
        uriValue: 'Tab1',
        synapseConfigArray: [
          {
            name: 'Markdown',
            standalone: true,
            props: {
              markdown: 'Synapse Component 1',
            },
          },
        ],
      },
      {
        title: 'Tab 2',
        uriValue: 'Tab2',
        synapseConfigArray: [
          {
            name: 'Markdown',
            standalone: true,
            props: {
              markdown: 'Synapse Component 2',
            },
          },
        ],
      },
    ]

    renderWithContext(<DetailsPage tabLayout={tabLayout} sql="" />)

    // Tab buttons should be visible
    const tab1 = await screen.findByText('Tab 1')
    const tab2 = await screen.findByText('Tab 2')

    // Component 1 should be visible at first, component 2 should not be visible
    const component1 = await screen.findByText('Synapse Component 1')
    expect(await screen.queryByText('Synapse Component 2')).toBeNull()

    // Call under test - click tab 2 to reveal tab 2's contents and hide tab 1's contents
    userEvent.click(tab2)

    await waitForElementToBeRemoved(component1)

    await screen.findByText('Synapse Component 2')

    // Call under test -- click back to tab 1
    userEvent.click(tab1)

    await screen.findByText('Synapse Component 1')
    expect(await screen.queryByText('Synapse Component 2')).toBeNull()
  })

  it('Renders two sets of tabs (subtabs) and synapseConfigArray objects', async () => {
    const tabLayout: DetailsPageTabProps[] = [
      {
        title: 'Tab 1',
        uriValue: 'Tab1',
        tabLayout: [
          {
            title: 'Subtab 1',
            uriValue: 'Subtab1',
            synapseConfigArray: [
              {
                name: 'Markdown',
                standalone: true,
                props: {
                  markdown: 'Synapse component in first subtab',
                },
              },
            ],
          },
          {
            title: 'Subtab 2',
            uriValue: 'Subtab2',
            synapseConfigArray: [
              {
                name: 'Markdown',
                standalone: true,
                props: {
                  markdown: 'Synapse component in second subtab',
                },
              },
            ],
          },
        ],
      },
      {
        title: 'Tab 2',
        uriValue: 'Tab2',
        synapseConfigArray: [
          {
            name: 'Markdown',
            standalone: true,
            props: {
              markdown: 'Synapse component in second tab',
            },
          },
        ],
      },
    ]
    renderWithContext(<DetailsPage tabLayout={tabLayout} sql="" />)

    const getTab1 = async () => await screen.findByText('Tab 1')
    const getTab2 = async () => await screen.findByText('Tab 2')
    const getSubtab1 = async () => await screen.findByText('Subtab 1')
    const getSubtab2 = async () => await screen.findByText('Subtab 2')

    // Tab buttons should be visible
    await getTab1()
    await getTab2()
    await getSubtab1()
    await getSubtab2()

    // Component in first subtab should be visible, second should not
    await screen.findByText('Synapse component in first subtab')
    expect(
      await screen.queryByText('Synapse component in second subtab'),
    ).toBeNull()

    // Click the second subtab and which component is visible should switch
    userEvent.click(await getSubtab2())

    await screen.findByText('Synapse component in second subtab')
    expect(
      await screen.queryByText('Synapse component in first subtab'),
    ).toBeNull()

    // Click the first subtab and it should switch back
    userEvent.click(await getSubtab1())

    await screen.findByText('Synapse component in first subtab')
    expect(
      await screen.queryByText('Synapse component in second subtab'),
    ).toBeNull()

    // Click tab 2 and the subtabs and content should disappear
    userEvent.click(await getTab2())

    await screen.findByText('Synapse component in second tab')
    expect(await screen.queryByText('Subtab 1')).toBeNull()
    expect(await screen.queryByText('Subtab 2')).toBeNull()
    expect(
      await screen.queryByText('Synapse component in first subtab'),
    ).toBeNull()
    expect(
      await screen.queryByText('Synapse component in second subtab'),
    ).toBeNull()

    // Click tab 1 and the subtabs should reappear
    userEvent.click(await getTab1())
    await screen.findByText('Subtab 1')
    await screen.findByText('Subtab 2')
  })

  it('Test overrideSqlSourceTable', async () => {
    jest
      .spyOn(SynapseComponentModule, 'SynapseComponent')
      .mockImplementation(({ synapseConfig }) => {
        getSynapseConfig = () => {
          return synapseConfig
        }
        return <div>My Query Wrapper Plot Nav</div>
      })

    const queryPlotNavRowConfig: RowSynapseConfig = {
      name: 'QueryWrapperPlotNav',
      props: {
        sqlOperator: 'HAS',
        name: 'Files',
        sql: 'select * from syn1',
        visibleColumnCount: 7,
        tableConfiguration: {
          showAccessColumn: true,
          showDownloadColumn: true,
        },
        shouldDeepLink: false,
      },
      overrideSqlSourceTable: true,
    }
    const deepCloneOfProps = {
      sqlOperator: 'HAS',
      rgbIndex: 6,
      name: 'Files',
      sql: '',
      visibleColumnCount: 7,
      tableConfiguration: { showAccessColumn: true, showDownloadColumn: true },
      shouldDeepLink: false,
    }
    renderWithContext(
      <SplitStringToComponent
        splitString="syn26843747"
        deepCloneOfProps={deepCloneOfProps}
        el={queryPlotNavRowConfig}
        columnName="id"
      />,
    )
    await waitFor(() => screen.getByText('My Query Wrapper Plot Nav'))
    const modifiedSynapseConfig = getSynapseConfig()
    assert(
      modifiedSynapseConfig!.props!['sql'] === 'SELECT  *  FROM  syn26843747',
    )
  })
})
