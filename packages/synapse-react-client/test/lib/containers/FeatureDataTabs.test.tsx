import { render } from '@testing-library/react'
import * as React from 'react'
import FeaturedDataTabs, {
  FeaturedDataTabsProps,
} from '../../../src/lib/containers/home_page/featured-data/FeaturedDataTabs'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { QueryResultBundle } from '../../../src/lib/utils/synapseTypes/'
import syn16787123Json from '../../../mocks/query/syn16787123'

const SynapseClient = require('../../../src/lib/utils/SynapseClient')
const data = syn16787123Json as QueryResultBundle
const token: string = '123444'

const renderComponent = (props: FeaturedDataTabsProps) => {
  return render(<FeaturedDataTabs {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('FeaturedDataTabs tests', () => {
  const props: FeaturedDataTabsProps = {
    rgbIndex: 0,
    token,
    sql: 'select * from syn11346063',
    explorePagePath: '/Explore/Studies',
    exploreObjectType: 'Studies',
    configs: [
      {
        title: 'Human Studies',
        icon: 'PERSON',
        exploreFacetColumnName: 'species',
        exploreFacetColumnValue: 'Human',

        plotsConfig: {
          configs: [
            {
              facetsToPlot: ['dataType', 'assay'],
              selectFacetColumnName: 'study',
              selectFacetColumnValue: 'ROSMAP',
              detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn3219045',
            },
            {
              facetsToPlot: ['dataType', 'assay'],
              selectFacetColumnName: 'study',
              selectFacetColumnValue: 'MSBB',
              detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn3159438',
            },
          ],
        },
      },
    ],
  }

  beforeEach(() => {
    SynapseClient.getFullQueryTableResults = jest.fn(() =>
      Promise.resolve(data),
    )
  })

  it('Renders without crashing', () => {
    const { container } = renderComponent(props)

    expect(container.querySelector('.FeaturedDataTabs')).toBeDefined()
  })
})
