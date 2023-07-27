import { render } from '@testing-library/react'
import React from 'react'
import FeaturedDataTabs, { FeaturedDataTabsProps } from './FeaturedDataTabs'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import syn16787123Json from '../../mocks/query/syn16787123.json'
import SynapseClient from '../../synapse-client'

const data = syn16787123Json as QueryResultBundle

const renderComponent = (props: FeaturedDataTabsProps) => {
  return render(<FeaturedDataTabs {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('FeaturedDataTabs tests', () => {
  const props: FeaturedDataTabsProps = {
    rgbIndex: 0,
    sql: 'select * from syn11346063',
    configs: [
      {
        title: 'Human Studies',
        icon: 'PERSON',

        plotsConfig: {
          configs: [
            {
              facetsToPlot: ['dataType', 'assay'],
              selectFacetColumnName: 'study',
              selectFacetColumnValue: 'ROSMAP',
              detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn3219045',
              unitDescription: 'result',
            },
            {
              facetsToPlot: ['dataType', 'assay'],
              selectFacetColumnName: 'study',
              selectFacetColumnValue: 'MSBB',
              detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn3159438',
              unitDescription: 'result',
            },
          ],
        },
      },
    ],
  }

  beforeEach(() => {
    jest
      .spyOn(SynapseClient, 'getFullQueryTableResults')
      .mockResolvedValue(data)
  })

  it('Renders without crashing', () => {
    const { container } = renderComponent(props)

    expect(container.querySelector('.FeaturedDataTabs')).toBeDefined()
  })
})
