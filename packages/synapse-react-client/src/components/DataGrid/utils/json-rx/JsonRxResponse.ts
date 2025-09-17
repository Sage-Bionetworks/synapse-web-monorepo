import JsonRxMessage from './JsonRxMessage'

export const RESPONSE_TYPE_CODE = 4

export default class JsonRxResponse<TPayload = unknown> extends JsonRxMessage {
  private subscriptionId: number
  private payload: TPayload

  public getPayload(): TPayload {
    return this.payload
  }

  constructor(subscriptionId: number, payload: TPayload) {
    super(RESPONSE_TYPE_CODE)
    this.subscriptionId = subscriptionId
    this.payload = payload
  }

  public getJson(): Array<unknown> {
    return [this.typeCode, this.subscriptionId, this.payload]
  }
}
