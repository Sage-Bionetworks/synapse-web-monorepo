import JsonRxMessage from './JsonRxMessage'

export default class JsonRxResponse<TPayload = unknown> extends JsonRxMessage {
  private typeCode = 4
  private subscriptionId: number
  private payload: TPayload

  public getPayload(): TPayload {
    return this.payload
  }

  constructor(subscriptionId: number, payload: TPayload) {
    super()
    this.subscriptionId = subscriptionId
    this.payload = payload
  }

  public getJson() {
    return [this.typeCode, this.subscriptionId, this.payload]
  }
}
