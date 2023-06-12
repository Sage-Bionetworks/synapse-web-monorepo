// Note: The PreviewRendererType is copied from SWC's PreviewWidget.PreviewFileType
// Not all of these are supported by SRC, but we do need to support all of them for preview widget feature parity

/**
 * Types of files that can be previewed. The PreviewFileType of a file handle can be determined based on its MIME type.
 * Each value corresponds to a particular renderer.
 */
export enum PreviewRendererType {
  PLAINTEXT = 'PLAINTEXT',
  CODE = 'CODE',
  ZIP = 'ZIP',
  CSV = 'CSV',
  IMAGE = 'IMAGE',
  NONE = 'NONE',
  TAB = 'TAB',
  HTML = 'HTML',
  PDF = 'PDF',
  IPYNB = 'IPYNB',
  VIDEO = 'VIDEO',
  MARKDOWN = 'MARKDOWN',
  TIFF = 'TIFF',
}
