export const MOCK_SHORT_IO_URL = 'https://short.io/abc123'
export const mockShortIoResponse: any = (
  originalURL: string,
  domain: string,
) => {
  return {
    id: '123456',
    originalURL,
    shortURL: MOCK_SHORT_IO_URL,
    domain,
  }
}
