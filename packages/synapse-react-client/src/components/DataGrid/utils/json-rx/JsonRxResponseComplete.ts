import JsonRxMessage from './JsonRxMessage'

export const RESPONSE_COMPLETE_TYPE_CODE = 5

export default class JsonRxResponseComplete<
  TPayload = unknown,
> extends JsonRxMessage {
  private subscriptionId: number
  private payload?: TPayload

  public getSubscriptionId(): number {
    return this.subscriptionId
  }

  public getPayload(): TPayload | undefined {
    return this.payload
  }
  constructor(subscriptionId: number, payload?: TPayload) {
    super(RESPONSE_COMPLETE_TYPE_CODE)
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
