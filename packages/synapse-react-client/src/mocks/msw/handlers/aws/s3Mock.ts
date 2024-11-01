import { rest } from 'msw'

export const storageEndpoint = 'https://my-endpoint.fake'
export const s3UploadSuccessHandler = rest.put(
  `${storageEndpoint}/:bucketName/*`,
  async (req, res, ctx) => {
    return res(ctx.status(200))
  },
)
export const s3UploadErrorHandler = rest.put(
  `${storageEndpoint}/:bucketName/*`,
  async (req, res, ctx) => {
    return res(
      ctx.status(403),
      ctx.xml(`<?xml version="1.0" encoding="UTF-8"?>
          <Error>
            <Code>AccessDenied</Code>
          <Message>Access Denied</Message>
          <Resource>${req.params.bucketName}</Resource> 
          <RequestId>4442587FB7D0A2F9</RequestId>
          </Error>`),
    )
  },
)
