/**
 * The message counter provides a unique integer that increments with each JSON-Rx message sent that must associate
 * a request with a response.
 */

const MAX_MESSAGE_COUNTER_VALUE = Math.pow(2, 31) - 1

export default class MessageCounter {
  private counter: number

  constructor() {
    this.counter = 1
  }

  public getNext(): number {
    const current = this.counter
    this.counter += 1
    if (this.counter > MAX_MESSAGE_COUNTER_VALUE) {
      // The server encodes this as a signed 32-bit integer, we need to ensure we don't exceed that limit.'
      this.counter = 1
    }
    return current
  }
}
