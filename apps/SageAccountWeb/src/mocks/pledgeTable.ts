import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import { registerTableQueryResult } from 'synapse-react-client/mocks/msw/handlers/tableQueryService'
import { FILE_HANDLE_BATCH } from 'synapse-react-client/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from 'synapse-react-client/utils/functions/getEndpoint'
import { worker } from './browser'

export const PLEDGE_TABLE_ID = import.meta.env
  .VITE_TERMS_AND_CONDITIONS_TABLE_ID
export const PLEDGE_TABLE_VERSION = import.meta.env
  .VITE_TERMS_AND_CONDITIONS_TABLE_VERSION

export const PLEDGE_ICON_FILE_HANDLE_ID = '9999'

const backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const iconPresignedUrl = 'https://mock-presigned-url.synapse.org/icon.svg'
const iconSvg = '<svg width="24" height="24" role="presentation" />'

export type PledgeItem = {
  label: string
  description: string
}

/**
 * Serves an icon for `PLEDGE_ICON_FILE_HANDLE_ID` so pledge items resolve their
 * icon through the real presigned-URL query path.
 */
export function mockPledgeItemIcon() {
  worker.use(
    http.post(`${backendOrigin}${FILE_HANDLE_BATCH}`, () =>
      HttpResponse.json(
        {
          requestedFiles: [
            {
              fileHandleId: PLEDGE_ICON_FILE_HANDLE_ID,
              fileHandle: {
                concreteType:
                  'org.sagebionetworks.repo.model.file.S3FileHandle',
                id: PLEDGE_ICON_FILE_HANDLE_ID,
                contentType: 'image/svg+xml',
                fileName: 'icon.svg',
              },
              preSignedURL: iconPresignedUrl,
            },
          ],
        },
        { status: 201 },
      ),
    ),
    http.get(iconPresignedUrl, () => HttpResponse.text(iconSvg)),
  )
}

/**
 * Makes the app's configured pledge table resolve to `items`, so components
 * under test run the TermsAndConditions success branch (rendered checkboxes)
 * rather than the "table not found" fallback.
 */
export function mockPledgeTable(items: PledgeItem[]) {
  const bundle: QueryResultBundle = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        tableId: PLEDGE_TABLE_ID,
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        etag: 'etag',
        headers: [
          { name: 'icon', columnType: 'STRING' },
          { name: 'label', columnType: 'STRING' },
          { name: 'description', columnType: 'STRING' },
        ],
        rows: items.map(({ label, description }) => ({
          values: [PLEDGE_ICON_FILE_HANDLE_ID, label, description],
        })),
      },
    },
    // `getFullQueryTableResults` pages until a page comes back shorter than
    // `maxRowsPerPage`; without it the mock table service pages forever.
    maxRowsPerPage: 100,
  }

  registerTableQueryResult(
    {
      sql: `SELECT * FROM ${PLEDGE_TABLE_ID}.${PLEDGE_TABLE_VERSION} ORDER BY order asc`,
    },
    bundle,
  )
  mockPledgeItemIcon()
}
