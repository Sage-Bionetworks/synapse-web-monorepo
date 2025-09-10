import JsonRxMessage from './JsonRxMessage'

export default class JsonRxResponseComplete<
  TPayload = unknown,
> extends JsonRxMessage {
  public typeCode = 5
  public subscriptionId: number
  public payload?: TPayload

  constructor(subscriptionId: number, payload?: TPayload) {
    super()
    this.subscriptionId = subscriptionId
    this.payload = payload
  }

  public getJson(): Array<unknown> {
    const json: Array<unknown> = [this.typeCode, this.subscriptionId]
    if (this.payload !== undefined) {
      json.push(this.payload)
    }
    return json
  }
}
