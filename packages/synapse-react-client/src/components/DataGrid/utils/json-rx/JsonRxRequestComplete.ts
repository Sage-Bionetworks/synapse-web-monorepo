import JsonRxMessage from './JsonRxMessage'

export default class JsonRxRequestComplete<
  TPayload = unknown,
> extends JsonRxMessage {
  public typeCode = 1
  public requestId: number
  public methodName: string
  public payload?: TPayload

  constructor(requestId: number, methodName: string, payload?: TPayload) {
    super()
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
