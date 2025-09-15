import JsonRxMessage from './JsonRxMessage'

export const REQUEST_COMPLETE_TYPE_CODE = 1

export default class JsonRxRequestComplete<
  TPayload = unknown,
> extends JsonRxMessage {
  private requestId: number
  private methodName: string
  private payload?: TPayload

  public constructor(
    requestId: number,
    methodName: string,
    payload?: TPayload,
  ) {
    super(REQUEST_COMPLETE_TYPE_CODE)
    this.requestId = requestId
    this.methodName = methodName
    this.payload = payload
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
