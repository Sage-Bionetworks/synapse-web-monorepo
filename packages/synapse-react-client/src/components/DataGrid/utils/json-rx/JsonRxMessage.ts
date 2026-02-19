export default abstract class JsonRxMessage {
  protected typeCode: number

  constructor(typeCode: number) {
    this.typeCode = typeCode
  }

  public abstract getJson(): unknown[]
}
