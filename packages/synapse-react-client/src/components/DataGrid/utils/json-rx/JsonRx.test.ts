import { describe, it, expect } from 'vitest'
import JsonRx from './JsonRx'
import JsonRxRequest, { REQUEST_TYPE_CODE } from './JsonRxRequest'
import JsonRxRequestComplete, {
  REQUEST_COMPLETE_TYPE_CODE,
} from './JsonRxRequestComplete'
import JsonRxResponse, { RESPONSE_TYPE_CODE } from './JsonRxResponse'
import JsonRxResponseComplete, {
  RESPONSE_COMPLETE_TYPE_CODE,
} from './JsonRxResponseComplete'
import JsonRxNotification, {
  NOTIFICATION_TYPE_CODE,
} from './JsonRxNotification'

describe('JsonRx serialization/deserialization', () => {
  it('serializes and deserializes JsonRxRequest', () => {
    const request = new JsonRxRequest(123, 'getData', { foo: 'bar' })
    const json = request.getJson()
    expect(json).toEqual([REQUEST_TYPE_CODE, 123, 'getData', { foo: 'bar' }])
    const parsed = JsonRx.fromJson(json)
    expect(parsed).toBeInstanceOf(JsonRxRequest)
    expect((parsed as JsonRxRequest).getJson()).toEqual(json)
  })

  it('serializes and deserializes JsonRxRequestComplete', () => {
    const requestComplete = new JsonRxRequestComplete(123, 'getData', {
      done: true,
    })
    const json = requestComplete.getJson()
    expect(json).toEqual([
      REQUEST_COMPLETE_TYPE_CODE,
      123,
      'getData',
      { done: true },
    ])
    const parsed = JsonRx.fromJson(json)
    expect(parsed).toBeInstanceOf(JsonRxRequestComplete)
    // The deserialized instance will have requestId = -1
    expect((parsed as JsonRxRequestComplete).getJson()).toEqual([
      REQUEST_COMPLETE_TYPE_CODE,
      123,
      'getData',
      { done: true },
    ])
  })

  it('serializes and deserializes JsonRxResponse', () => {
    const response = new JsonRxResponse(456, { result: 'ok' })
    const json = response.getJson()
    expect(json).toEqual([RESPONSE_TYPE_CODE, 456, { result: 'ok' }])
    const parsed = JsonRx.fromJson(json)
    expect(parsed).toBeInstanceOf(JsonRxResponse)
    expect((parsed as JsonRxResponse).getJson()).toEqual(json)
  })

  it('serializes and deserializes JsonRxResponseComplete', () => {
    const responseComplete = new JsonRxResponseComplete(789, { finished: true })
    const json = responseComplete.getJson()
    expect(json).toEqual([RESPONSE_COMPLETE_TYPE_CODE, 789, { finished: true }])
    const parsed = JsonRx.fromJson(json)
    expect(parsed).toBeInstanceOf(JsonRxResponseComplete)
    expect((parsed as JsonRxResponseComplete).getJson()).toEqual(json)
  })

  it('serializes and deserializes JsonRxNotification', () => {
    const notification = new JsonRxNotification('notify', { msg: 'hello' })
    const json = notification.getJson()
    expect(json).toEqual([NOTIFICATION_TYPE_CODE, 'notify', { msg: 'hello' }])
    const parsed = JsonRx.fromJson(json)
    expect(parsed).toBeInstanceOf(JsonRxNotification)
    expect((parsed as JsonRxNotification).getJson()).toEqual(json)
  })

  it('throws on invalid type code', () => {
    expect(() => JsonRx.fromJson([999, 'foo'])).toThrow()
  })

  it('throws on non-array input', () => {
    expect(() => JsonRx.fromJson('not-an-array' as any)).toThrow()
  })

  it('throws on non-number type code', () => {
    expect(() => JsonRx.fromJson(['foo', 'bar'])).toThrow()
  })
})
