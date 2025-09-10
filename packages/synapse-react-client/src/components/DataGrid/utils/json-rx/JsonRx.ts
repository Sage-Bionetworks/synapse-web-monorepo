import JsonRxMessage from '@/components/DataGrid/utils/json-rx/JsonRxMessage'
import JsonRxNotification from '@/components/DataGrid/utils/json-rx/JsonRxNotification'
import JsonRxRequest from '@/components/DataGrid/utils/json-rx/JsonRxRequest'
import JsonRxResponse from '@/components/DataGrid/utils/json-rx/JsonRxResponse'
import JsonRxResponseComplete from '@/components/DataGrid/utils/json-rx/JsonRxResponseComplete'

// https://jsonjoy.com/specs/json-rx
export default class JsonRx {
  /**
   * Converts a JSON-Rx message (array) into the appropriate JsonRxMessage subclass
   *
   * For more information, see the JSON-Rx specification: https://jsonjoy.com/specs/json-rx
   * @param json
   */
  static fromJson(json: unknown): JsonRxMessage {
    if (!Array.isArray(json)) {
      throw new Error('Invalid JSON-Rx message: not an array')
    }
    const typeCode = json[0]

    if (typeof typeCode !== 'number') {
      throw new Error(
        `Invalid JSON-Rx message: type code is not a number, received ${typeCode}`,
      )
    }

    switch (typeCode) {
      case 0: {
        // Request
        const [_, requestId, methodName, payload] = json
        return new JsonRxRequest(requestId, methodName, payload)
      }
      case 4: {
        // Response
        const [_, subscriptionId, payload] = json
        return new JsonRxResponse(subscriptionId, payload)
      }
      case 5: {
        // ResponseComplete
        const [_, subscriptionId, payload] = json
        return new JsonRxResponseComplete(subscriptionId, payload)
      }
      case 8: {
        // Notification
        const [_, methodName, payload] = json
        return new JsonRxNotification(methodName, payload)
      }
      default:
        throw new Error(
          `Invalid JSON-Rx message: unknown type code ${typeCode}`,
        )
    }
  }
}
