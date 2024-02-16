import React from 'react'
import DetailsPage, {
  SplitStringToComponent,
} from '../../portal-components/DetailsPage/DetailsPage'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  DetailsPageTabProps,
  RowSynapseConfig,
} from '../../types/portal-util-types'
import syn16787123Json from '../../mocks/syn16787123.json'
import {
  AsynchronousJobStatus,
  ColumnMultiValueFunction,
  EntityHeader,
  PaginatedResults,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import * as SynapseComponentModule from '../../SynapseComponent'
import { MemoryRouter } from 'react-router-dom'
import {
  FullContextProvider,
  SynapseClientError,
  SynapseQueries,
} from 'synapse-react-client'
import { describe, expect, it, vi } from 'vitest'
import { UseQueryResult } from '@tanstack/react-query'

vi.mock('synapse-react-client', async (importActual) => {
  const actual = await importActual<typeof import('synapse-react-client')>()
  return {
    ...actual,
    SynapseQueries: {
      ...actual.SynapseQueries,
      useGetEntityHeaders: vi.fn(),
      useGetQueryResultBundleWithAsyncStatus: vi.fn(),
    },
  }
})

function renderWithContext(component) {
  return render(
    <MemoryRouter>
      <FullContextProvider
        synapseContext={{
          accessToken: 'abcd',
          utcTime: false,
          isInExperimentalMode: false,
          downloadCartPageUrl: '/DownloadCart',
        }}
      >
        {component}
      </FullContextProvider>
    </MemoryRouter>,
  )
}

const mockGetQueryTableResults = vi.mocked(
  SynapseQueries.useGetQueryResultBundleWithAsyncStatus,
)
const mockGetEntityHeaders = vi.mocked(SynapseQueries.useGetEntityHeaders)

mockGetQueryTableResults.mockResolvedValue({
  isLoading: false,
  error: null,
  data: {
    jobState: 'COMPLETE',
    responseBody: syn16787123Json as QueryResultBundle,
  } as AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
} as UseQueryResult<AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>, SynapseClientError>)

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
mockGetEntityHeaders.mockResolvedValue({ data: expected } as UseQueryResult<
  PaginatedResults<EntityHeader>,
  SynapseClientError
>)

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
    await screen.findByText('Synapse Component 1')
    expect(screen.queryByText('Synapse Component 2')).toBeNull()

    // Call under test - click tab 2 to reveal tab 2's contents and hide tab 1's contents
    await userEvent.click(tab2)

    await screen.findByText('Synapse Component 2')
    expect(screen.queryByText('Synapse Component 1')).toBeNull()

    // Call under test -- click back to tab 1
    await userEvent.click(tab1)

    await screen.findByText('Synapse Component 1')
    expect(screen.queryByText('Synapse Component 2')).toBeNull()
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
    expect(screen.queryByText('Synapse component in second subtab')).toBeNull()

    // Click the second subtab and which component is visible should switch
    await userEvent.click(await getSubtab2())

    await screen.findByText('Synapse component in second subtab')
    expect(screen.queryByText('Synapse component in first subtab')).toBeNull()

    // Click the first subtab and it should switch back
    await userEvent.click(await getSubtab1())

    await screen.findByText('Synapse component in first subtab')
    expect(screen.queryByText('Synapse component in second subtab')).toBeNull()

    // Click tab 2 and the subtabs and content should disappear
    await userEvent.click(await getTab2())

    await screen.findByText('Synapse component in second tab')
    expect(screen.queryByText('Subtab 1')).toBeNull()
    expect(screen.queryByText('Subtab 2')).toBeNull()
    expect(screen.queryByText('Synapse component in first subtab')).toBeNull()
    expect(screen.queryByText('Synapse component in second subtab')).toBeNull()

    // Click tab 1 and the subtabs should reappear
    await userEvent.click(await getTab1())
    await screen.findByText('Subtab 1')
    await screen.findByText('Subtab 2')
  })

  it('Test overrideSqlSourceTable', async () => {
    const mockSynapseComponent = vi
      .spyOn(SynapseComponentModule, 'SynapseComponent')
      .mockImplementation(() => {
        return <div>My Query Wrapper Plot Nav</div>
      })

    const queryPlotNavRowConfig: RowSynapseConfig = {
      name: 'QueryWrapperPlotNav',
      props: {
        sqlOperator: ColumnMultiValueFunction.HAS,
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
      sqlOperator: ColumnMultiValueFunction.HAS,
      rgbIndex: 6,
      name: 'Files',
      sql: '',
      visibleColumnCount: 7,
      tableConfiguration: { showAccessColumn: true, showDownloadColumn: true },
      shouldDeepLink: false,
    }
    renderWithContext(
      <SplitStringToComponent
        overrideSqlSourceTable={true}
        splitString="syn26843747"
        deepCloneOfProps={deepCloneOfProps}
        el={queryPlotNavRowConfig}
        columnName="id"
      />,
    )
    await waitFor(() => {
      screen.getByText('My Query Wrapper Plot Nav')
      expect(mockSynapseComponent).toHaveBeenLastCalledWith(
        expect.objectContaining({
          synapseConfig: expect.objectContaining({
            props: expect.objectContaining({
              sql: 'SELECT  *  FROM  syn26843747',
            }),
          }),
        }),
        expect.anything(),
      )
    })
  })
})
