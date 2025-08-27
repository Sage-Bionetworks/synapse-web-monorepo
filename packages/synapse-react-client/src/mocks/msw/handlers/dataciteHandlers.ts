import { http, HttpResponse } from 'msw'

export function getDataciteHandler() {
  return [
    http.post('https://api.datacite.org/graphql', () => {
      // const body = await request.json()

      // Default success payload
      return HttpResponse.json({
        data: {
          work: {
            citations: {
              nodes: [
                {
                  id: 'https://doi.org/10.1111/xyz',
                  titles: [{ title: 'A???B??C' }],
                  publisher: { name: 'My Publishing' },
                  publicationYear: 2025,
                  container: { title: 'Best Journal' },
                },
                {
                  id: 'https://doi.org/10.2222/xyz',
                  titles: [{ title: 'D???E??F' }],
                  publisher: { name: 'Other Publisher' },
                  publicationYear: 2025,
                  container: { title: 'Ok Journal' },
                },
              ],
            },
          },
        },
      })
    }),
  ]
}
