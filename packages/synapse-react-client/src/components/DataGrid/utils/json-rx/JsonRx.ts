import JsonRxMessage from '@/components/DataGrid/utils/json-rx/JsonRxMessage'
import JsonRxNotification, {
  NOTIFICATION_TYPE_CODE,
} from '@/components/DataGrid/utils/json-rx/JsonRxNotification'
import JsonRxRequest, {
  REQUEST_TYPE_CODE,
} from '@/components/DataGrid/utils/json-rx/JsonRxRequest'
import JsonRxResponse, {
  RESPONSE_TYPE_CODE,
} from '@/components/DataGrid/utils/json-rx/JsonRxResponse'
import JsonRxResponseComplete, {
  RESPONSE_COMPLETE_TYPE_CODE,
} from '@/components/DataGrid/utils/json-rx/JsonRxResponseComplete'
import JsonRxRequestComplete, {
  REQUEST_COMPLETE_TYPE_CODE,
} from './JsonRxRequestComplete'

/**
 * Static utility methods intended to implement the JSON-Rx communication protocol
 * Spec: https://jsonjoy.com/specs/json-rx
 */
export default class JsonRx {
  /**
   * Converts a JSON-encoded JSON-Rx message (which is always an array) into the appropriate JsonRxMessage subclass
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
      case REQUEST_TYPE_CODE: {
        // Request
        const [_, requestId, methodName, payload] = json
        return new JsonRxRequest(requestId, methodName, payload)
      }
      case REQUEST_COMPLETE_TYPE_CODE: {
        const [_, requestId, methodName, payload] = json
        const message = new JsonRxRequestComplete(
          requestId,
          methodName,
          payload,
        )
        return message
      }
      case RESPONSE_TYPE_CODE: {
        // Response
        const [_, requestId, payload] = json
        return new JsonRxResponse(requestId, payload)
      }
      case RESPONSE_COMPLETE_TYPE_CODE: {
        // ResponseComplete
        const [_, requestId, payload] = json
        return new JsonRxResponseComplete(requestId, payload)
      }
      case NOTIFICATION_TYPE_CODE: {
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
