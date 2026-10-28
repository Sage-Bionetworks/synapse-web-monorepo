import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { IdList } from '@sage-bionetworks/synapse-client'
import { renderHook, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { useGetTeamList } from './useTeamList'

const backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

describe('useGetTeamList', () => {
  it('requests the teams in sorted ID order', async () => {
    const onRequest = vi.fn()
    server.use(
      http.post<never, IdList>(
        `${backendOrigin}/repo/v1/teamList`,
        async ({ request }) => {
          onRequest((await request.json()).list)
          return HttpResponse.json({ list: [] })
        },
      ),
    )

    const { result } = renderHook(() => useGetTeamList(['3', '1', '2']), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(onRequest).toHaveBeenCalledWith(['1', '2', '3'])
  })
})
