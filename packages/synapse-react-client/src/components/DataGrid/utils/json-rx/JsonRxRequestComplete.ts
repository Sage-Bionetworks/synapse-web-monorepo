import JsonRxMessage from './JsonRxMessage'

export const REQUEST_COMPLETE_TYPE_CODE = 1

export default class JsonRxRequestComplete<
  TPayload = unknown,
> extends JsonRxMessage {
  private requestId: number
  private methodName: string
  private payload?: TPayload

  constructor(methodName: string, payload?: TPayload) {
    super(REQUEST_COMPLETE_TYPE_CODE)
    this.methodName = methodName
    this.payload = payload
    this.requestId = -1
  }

  public setRequestId(requestId: number) {
    this.requestId = requestId
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
