import { getUseUtcTimeFromCookie } from '../../synapse-client'
import { formatDate } from './DateFormatter'
import dayjs, { Dayjs } from 'dayjs'

jest.mock('../../synapse-client', () => {
  return {
    getUseUtcTimeFromCookie: jest.fn(),
  }
})

jest.mock('dayjs', () => {
  const mockDayjsObject = {
    tz: jest.fn(),
    format: jest.fn().mockReturnValue('mockResultDate'),
  }
  mockDayjsObject.tz.mockReturnValue(mockDayjsObject)
  const mockDayjsInstance = jest
    .fn()
    .mockReturnValue(mockDayjsObject) as unknown as jest.Mocked<typeof dayjs>
  mockDayjsInstance.extend = jest.fn()
  // @ts-expect-error tz is readonly but we need to mock it
  mockDayjsInstance.tz = { guess: jest.fn().mockReturnValue('mockLocalTz') }

  return {
    __esModule: true,
    default: mockDayjsInstance,
  }
})

const mockGetUseUtcTimeFromCookie = jest.mocked(getUseUtcTimeFromCookie)

const mockDate = Symbol('mockDate') as unknown as Dayjs
const mockDayjs = jest.mocked(dayjs)

describe('DateFormatter', () => {
  beforeEach(() => {
    jest.clearAllMocks()
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
    expect(mockDayjsObject.tz).toHaveBeenCalledWith('utc')
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
