import ImageCardGridWithLinks, {
  ImageCardGridWithLinksProps,
} from './ImageCardGridWithLinks'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'

jest.mock('../../synapse-queries/entity/useGetQueryResultBundle')
const mockUseGetQueryResultBundle = jest.mocked(useGetQueryResultBundle)

describe('ImageCardGridWithLinks Tests', () => {
  const mockProps: ImageCardGridWithLinksProps = {
    sql: 'SELECT * FROM syn123',
    title: 'Test title',
    summaryText: 'This is a summary.',
  }
})
