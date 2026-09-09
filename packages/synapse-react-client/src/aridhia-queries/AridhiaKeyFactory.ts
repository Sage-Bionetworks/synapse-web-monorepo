import { hashCode } from '@/utils/functions/StringUtils'
import { QueryKey } from '@tanstack/react-query'

/**
 * Co-location of react-query keys for Aridhia (C-Path FAIR / RDCA-DAP) queries.
 *
 * Mirrors the session-isolation convention in `synapse-queries/KeyFactory.ts`: every key is
 * prefixed with a hash of the current Synapse access token (or the literal `'anonymous'`), so
 * one user's cached Aridhia data can never leak to the next user of the same browser tab.
 */
export class AridhiaKeyFactory {
  private readonly accessToken: string | undefined

  constructor(accessToken: string | undefined) {
    this.accessToken = accessToken
  }

  private getKey(...args: unknown[]): QueryKey {
    return [
      'aridhia',
      this.accessToken == null
        ? 'anonymous'
        : btoa(String(hashCode(this.accessToken))),
      ...args,
    ]
  }

  public all(): QueryKey {
    return this.getKey()
  }

  public requests(): QueryKey {
    return this.getKey('requests')
  }

  public request(code: string): QueryKey {
    return this.getKey('requests', code)
  }

  public datasetSettings(datasetCode: string): QueryKey {
    return this.getKey('dataset', datasetCode, 'settings')
  }

  public dictionaries(datasetCode: string): QueryKey {
    return this.getKey('dataset', datasetCode, 'dictionaries')
  }

  public workspaceLocations(datasetCode: string): QueryKey {
    return this.getKey('dataset', datasetCode, 'workspaces-locations')
  }

  public workspaces(
    datasetCode: string,
    location: string | undefined,
  ): QueryKey {
    return this.getKey('dataset', datasetCode, 'workspaces', location)
  }

  public catalogue(datasetCode: string): QueryKey {
    return this.getKey('dataset', datasetCode, 'catalogue')
  }

  public workflow(workflowKey: string): QueryKey {
    return this.getKey('workflow', workflowKey)
  }

  public workspaceRequestForm(): QueryKey {
    return this.getKey('workspaces-forms', 'workspace_request')
  }
}
