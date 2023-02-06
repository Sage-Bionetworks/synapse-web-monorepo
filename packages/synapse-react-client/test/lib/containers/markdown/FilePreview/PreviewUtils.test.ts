import {
  CODE_EXTENSIONS,
  getOriginalFileHandleRenderer,
  getPreviewFileHandleRenderer,
  IMAGE_CONTENT_TYPES,
  MARKDOWN_EXTENSIONS,
  VIDEO_EXTENSIONS,
} from '../../../../../src/lib/containers/FilePreview/PreviewUtils'
import { PreviewRendererType } from '../../../../../src/lib/containers/FilePreview/PreviewRendererType'
import {
  ProxyFileHandle,
  S3FileHandle,
} from '../../../../../src/lib/utils/synapseTypes'

const s3FileHandle: S3FileHandle = {
  bucketName: '',
  concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
  contentSize: 0,
  contentType: '',
  createdBy: '',
  createdOn: '',
  etag: '',
  fileName: '',
  id: '',
  isPreview: false,
  key: '',
  storageLocationId: 0,
}

describe('PreviewUtils', () => {
  describe('getOriginalFileHandleRenderer', () => {
    it('returns NONE if not an S3 file handle', () => {
      const proxyFileHandle: ProxyFileHandle = {
        contentSize: 0,
        contentType: '',
        createdBy: '',
        createdOn: '',
        etag: '',
        fileName: '',
        filePath: '',
        storageLocationId: 0,
        concreteType: 'org.sagebionetworks.repo.model.file.ProxyFileHandle',
        id: '123',
      }
      expect(getOriginalFileHandleRenderer(proxyFileHandle)).toBe(
        PreviewRendererType.NONE,
      )
    })
    it('returns VIDEO for files with video extensions', () => {
      const videoFileNames = VIDEO_EXTENSIONS.map(ext => `file${ext}`)

      videoFileNames.forEach(fileName => {
        expect(
          getOriginalFileHandleRenderer({ ...s3FileHandle, fileName }),
        ).toBe(PreviewRendererType.VIDEO)
      })
    })
    it('returns IPYNB for Python notebooks', () => {
      expect(
        getOriginalFileHandleRenderer({
          ...s3FileHandle,
          fileName: 'myNotebook.ipynb',
        }),
      ).toBe(PreviewRendererType.IPYNB)
    })
    it('returns IMAGE for image files', () => {
      IMAGE_CONTENT_TYPES.forEach(contentType => {
        expect(
          getOriginalFileHandleRenderer({
            ...s3FileHandle,
            fileName: 'myFile.ext',
            contentType,
          }),
        ).toBe(PreviewRendererType.IMAGE)
      })
    })

    it('returns HTML for HTML files', () => {
      expect(
        getOriginalFileHandleRenderer({
          ...s3FileHandle,
          fileName: 'myFile.html',
          contentType: 'text/html',
        }),
      ).toBe(PreviewRendererType.HTML)
    })

    it('returns PDF for PDF files', () => {
      expect(
        getOriginalFileHandleRenderer({
          ...s3FileHandle,
          fileName: 'myFile.pdf',
          contentType: 'application/pdf',
        }),
      ).toBe(PreviewRendererType.PDF)
    })

    it('returns CODE for code files', () => {
      const codeFileNames = CODE_EXTENSIONS.map(ext => `file${ext}`)

      codeFileNames.forEach(fileName => {
        expect(
          getOriginalFileHandleRenderer({
            ...s3FileHandle,
            fileName,
          }),
        ).toBe(PreviewRendererType.CODE)
      })
    })

    it('returns MARKDOWN for markdown files', () => {
      const codeFileNames = MARKDOWN_EXTENSIONS.map(ext => `file${ext}`)

      codeFileNames.forEach(fileName => {
        expect(
          getOriginalFileHandleRenderer({
            ...s3FileHandle,
            fileName,
          }),
        ).toBe(PreviewRendererType.MARKDOWN)
      })
    })

    it('returns TIFF for tiff files', () => {
      expect(
        getOriginalFileHandleRenderer({
          ...s3FileHandle,
          fileName: 'image.tiff',
          contentType: 'image/tiff',
        }),
      ).toBe(PreviewRendererType.TIFF)
    })

    it('returns NONE for no match', () => {
      expect(
        getOriginalFileHandleRenderer({
          ...s3FileHandle,
          fileName: 'image.zip',
          contentType: 'application/zip',
        }),
      ).toBe(PreviewRendererType.NONE)
    })
  })
  describe('getPreviewFileHandleRenderer', () => {
    it('returns NONE if the preview is not an S3 file handle', () => {
      const proxyFileHandle: ProxyFileHandle = {
        contentSize: 0,
        contentType: '',
        createdBy: '',
        createdOn: '',
        etag: '',
        fileName: '',
        filePath: '',
        storageLocationId: 0,
        concreteType: 'org.sagebionetworks.repo.model.file.ProxyFileHandle',
        id: '123',
      }
      expect(getPreviewFileHandleRenderer(proxyFileHandle, s3FileHandle)).toBe(
        PreviewRendererType.NONE,
      )
    })
    it('returns IMAGE if the preview is an image', () => {
      IMAGE_CONTENT_TYPES.forEach(contentType => {
        expect(
          getPreviewFileHandleRenderer(
            { ...s3FileHandle, contentType },
            s3FileHandle,
          ),
        ).toBe(PreviewRendererType.IMAGE)
      })
    })
    it('returns ZIP if the preview is a CSV and the original file is a zip', () => {
      const previewFileHandle: S3FileHandle = {
        ...s3FileHandle,
        contentType: 'text/csv',
      }
      const dataFileHandle: S3FileHandle = {
        ...s3FileHandle,
        contentType: 'application/zip',
      }
      expect(
        getPreviewFileHandleRenderer(previewFileHandle, dataFileHandle),
      ).toBe(PreviewRendererType.ZIP)
    })
    it('returns CSV if the preview is a CSV and the original file is not a zip', () => {
      const previewFileHandle: S3FileHandle = {
        ...s3FileHandle,
        contentType: 'text/csv',
      }
      const dataFileHandle: S3FileHandle = {
        ...s3FileHandle,
      }
      expect(
        getPreviewFileHandleRenderer(previewFileHandle, dataFileHandle),
      ).toBe(PreviewRendererType.CSV)
    })
    it('returns TAB if the preview is a tsv file', () => {
      const previewFileHandle: S3FileHandle = {
        ...s3FileHandle,
        contentType: 'text/tab-separated-values',
      }
      const dataFileHandle: S3FileHandle = {
        ...s3FileHandle,
      }
      expect(
        getPreviewFileHandleRenderer(previewFileHandle, dataFileHandle),
      ).toBe(PreviewRendererType.TAB)
    })
    it('returns PLAINTEXT if the preview is plaintext', () => {
      const previewFileHandle: S3FileHandle = {
        ...s3FileHandle,
        contentType: 'text/plain',
      }
      const dataFileHandle: S3FileHandle = {
        ...s3FileHandle,
      }
      expect(
        getPreviewFileHandleRenderer(previewFileHandle, dataFileHandle),
      ).toBe(PreviewRendererType.PLAINTEXT)
    })
    it('returns PDF if the preview is a PDF', () => {
      const previewFileHandle: S3FileHandle = {
        ...s3FileHandle,
        contentType: 'application/pdf',
      }
      const dataFileHandle: S3FileHandle = {
        ...s3FileHandle,
      }
      expect(
        getPreviewFileHandleRenderer(previewFileHandle, dataFileHandle),
      ).toBe(PreviewRendererType.PDF)
    })
    it('returns NONE if the preview file handle has no renderer', () => {
      const previewFileHandle: S3FileHandle = {
        ...s3FileHandle,
        contentType: 'application/octet-stream',
      }
      const dataFileHandle: S3FileHandle = {
        ...s3FileHandle,
      }
      expect(
        getPreviewFileHandleRenderer(previewFileHandle, dataFileHandle),
      ).toBe(PreviewRendererType.NONE)
    })
  })
})
