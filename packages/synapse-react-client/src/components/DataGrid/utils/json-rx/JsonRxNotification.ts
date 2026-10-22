import JsonRxMessage from './JsonRxMessage'

export const NOTIFICATION_TYPE_CODE = 8

export default class JsonRxNotification<
  TPayload = unknown,
> extends JsonRxMessage {
  private readonly methodName: string
  private readonly payload?: TPayload

  public getMethodName() {
    return this.methodName
  }

  public getPayload() {
    return this.payload
  }

  constructor(methodName: string, payload?: TPayload) {
    super(NOTIFICATION_TYPE_CODE)
    this.methodName = methodName
    this.payload = payload
  }

  public getJson(): Array<unknown> {
    const json: Array<unknown> = [this.typeCode, this.methodName]
    if (this.payload !== undefined) {
      json.push(this.payload)
    }

    return json
  }
}
