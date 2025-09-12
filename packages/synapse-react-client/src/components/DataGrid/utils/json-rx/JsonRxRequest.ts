import JsonRxMessage from './JsonRxMessage'

export const REQUEST_TYPE_CODE = 0

export default class JsonRxRequest<TPayload = unknown> extends JsonRxMessage {
  private requestId: number
  private methodName: string
  private payload?: TPayload

  constructor(requestId: number, methodName: string, payload?: TPayload) {
    super(REQUEST_TYPE_CODE)
    this.requestId = requestId
    this.methodName = methodName
    this.payload = payload
  }

  public getJson(): Array<unknown> {
    const json: Array<unknown> = [
      this.typeCode,
      this.requestId,
      this.methodName,
    ]
    if (this.payload !== undefined) {
      json.push(this.payload)
    }
    return json
  }
}
