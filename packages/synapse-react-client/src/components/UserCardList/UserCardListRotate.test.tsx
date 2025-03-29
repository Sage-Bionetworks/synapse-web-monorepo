import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render } from '@testing-library/react'
import UserCardListRotate, {
  getDisplayIds,
  UserCardListRotateProps,
} from './UserCardListRotate'

const STORED_UID_KEY = 'sage_rotate_uids'
function renderComponent(props: UserCardListRotateProps) {
  return render(<UserCardListRotate {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('UserCardListRotate Component Testing', () => {
  const prop: UserCardListRotateProps = {
    sql: 'SELECT * FROM syn22096112 where feature=true',
    count: 3,
  }

  const set = 3
  const data = ['1', '2', '3', '4', '5', '6', '7']
  const data_even = ['1', '2', '3', '4', '5', '6']
  const storage_name = 'sage_rotate_uids'

  afterEach(() => {
    localStorage.removeItem(storage_name)
  })

  it('Should create the component', () => {
    const { container } = renderComponent(prop)
    expect(container).toBeDefined()
  })

  it('Should save the correct ids in storage', () => {
    const saved = getDisplayIds(data, set, STORED_UID_KEY)
    expect(saved).toEqual(['1', '2', '3'])
  })

  it('Should rotate back to the beginning once it reaches the end - case 1', () => {
    localStorage.setItem(
      storage_name,
      JSON.stringify(['1', '2', '3', '4', '5', '6']),
    )
    const saved = getDisplayIds(data_even, set, STORED_UID_KEY)
    expect(saved).toEqual(['1', '2', '3'])
  })

  it('Should rotate back to the beginning once it reaches the end - case 2', () => {
    localStorage.setItem(
      storage_name,
      JSON.stringify(['1', '2', '3', '4', '5', '6']),
    )
    const saved = getDisplayIds(data, set, STORED_UID_KEY)
    expect(saved).toEqual(['7', '1', '2'])
  })
})
