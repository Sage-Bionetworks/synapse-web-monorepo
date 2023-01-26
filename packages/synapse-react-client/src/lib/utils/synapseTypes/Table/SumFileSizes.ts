export type SumFileSizes = {
  sumFileSizesBytes: number // 	The sum of the file size in bytes.
  greaterThan: boolean //  When true, the actual sum of the files sizes is greater than the value provided with 'sumFileSizesBytes'. When false, the actual sum of the files sizes is equlas the value provided with 'sumFileSizesBytes'
}
