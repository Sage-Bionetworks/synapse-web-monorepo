import { getUseUtcTimeFromCookie } from '@/synapse-client'
import dayjs, { Dayjs } from 'dayjs'
import { formatDate } from './DateFormatter'

vi.mock(import('../../synapse-client/SynapseClient'), async importOriginal => {
  return {
    ...(await importOriginal()),
    getUseUtcTimeFromCookie: vi.fn(),
  }
})

vi.mock('dayjs', () => {
  const mockDayjsObject = {
    tz: vi.fn(),
    format: vi.fn().mockReturnValue('mockResultDate'),
  }
  mockDayjsObject.tz.mockReturnValue(mockDayjsObject)

  const mockDayjsInstance = vi.fn().mockReturnValue(mockDayjsObject)
  // @ts-expect-error - dayjs is a function, but we need to add properties to it
  mockDayjsInstance['extend'] = vi.fn()
  // @ts-expect-error - dayjs is a function, but we need to add properties to it
  mockDayjsInstance['tz'] = { guess: vi.fn().mockReturnValue('mockLocalTz') }

  return {
    __esModule: true,
    default: mockDayjsInstance,
  }
})

const mockGetUseUtcTimeFromCookie = vi.mocked(getUseUtcTimeFromCookie)

const mockDate = Symbol('mockDate') as unknown as Dayjs
const mockDayjs = vi.mocked(dayjs)

describe('DateFormatter', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  it('Shows local time', () => {
    mockGetUseUtcTimeFromCookie.mockReturnValue(false)
    const formattedDate = formatDate(mockDate)

    expect(mockDayjs).toHaveBeenCalledWith(mockDate)
    const mockDayjsObject = mockDayjs()
    expect(mockDayjsObject.tz).toHaveBeenCalledWith('mockLocalTz')
    expect(mockDayjs.tz.guess).toHaveBeenCalled()
    expect(mockDayjsObject.format).toHaveBeenCalledWith('M/D/YYYY h:mm A')

    expect(formattedDate).toEqual('mockResultDate')
  })
  it('Shows UTC time with timezone', () => {
    mockGetUseUtcTimeFromCookie.mockReturnValue(true)
    const formattedDate = formatDate(mockDate)

    expect(mockDayjs).toHaveBeenCalledWith(mockDate)
    const mockDayjsObject = mockDayjs()
    expect(mockDayjsObject.tz).toHaveBeenLastCalledWith('utc')
    expect(mockDayjs.tz.guess).not.toHaveBeenCalled()
    expect(mockDayjsObject.format).toHaveBeenCalledWith('M/D/YYYY h:mm A z')

    expect(formattedDate).toEqual('mockResultDate')
  })
  it('Works with a custom format', () => {
    const customFormat = 'YYYY-MM-DD'
    mockGetUseUtcTimeFromCookie.mockReturnValue(false)
    const formattedDate = formatDate(mockDate, customFormat)

    expect(mockDayjs).toHaveBeenCalledWith(mockDate)
    const mockDayjsObject = mockDayjs()
    expect(mockDayjsObject.tz).toHaveBeenCalledWith('mockLocalTz')
    expect(mockDayjs.tz.guess).toHaveBeenCalled()
    expect(mockDayjsObject.format).toHaveBeenCalledWith(customFormat)

    expect(formattedDate).toEqual('mockResultDate')
  })
})
