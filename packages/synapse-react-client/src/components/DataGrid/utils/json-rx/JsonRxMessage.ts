export default class JsonRxMessage {
  protected typeCode: number

  constructor(typeCode: number) {
    this.typeCode = typeCode
  }

  public getJson() {
    throw new Error('Method should be implemented by subclass.')
  }
}
