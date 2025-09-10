import JsonRxMessage from './JsonRxMessage'

export default class JsonRxNotification<
  TPayload = unknown,
> extends JsonRxMessage {
  private typeCode = 8
  private methodName: string
  private payload?: TPayload

  public getMethodName() {
    return this.methodName
  }

  public getPayload() {
    return this.payload
  }

  constructor(methodName: string, payload?: TPayload) {
    super()
    this.methodName = methodName
    this.payload = payload
  }

  public getJson() {
    const json: Array<unknown> = [this.typeCode, this.methodName]
    if (this.payload !== undefined) {
      json.push(this.payload)
    }

    return json
  }
}
