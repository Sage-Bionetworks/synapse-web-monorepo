import{n as e}from"./chunk-jRWAZmH_.js";import{n as t,t as n}from"./FileUploadProgress-7UVqgVPE.js";var r,i,a,o,s,c,l,u,d;e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Synapse/Upload/FileUploadProgress`,component:n,args:{uploadedSizeInBytes:1024*1024*50,totalSizeInBytes:1024*1024*100,onCancel:r(),onPause:r(),onResume:r(),onRemove:r()},tags:[`autodocs`]},a={args:{fileName:`UploadingFile.jpg`,status:`UPLOADING`}},o={args:{fileName:`PreparingToUploadFile.fastq`,status:`PREPARING`,uploadedSizeInBytes:0}},s={args:{fileName:`path/to/paused.png`,status:`PAUSED`}},c={args:{fileName:`Cancelled.pdf`,status:`CANCELED_BY_USER`}},l={args:{fileName:`Failed.java`,status:`FAILED`,errorMessage:`Something went wrong.`}},u={args:{fileName:`Complete.tsx`,status:`COMPLETE`,uploadedSizeInBytes:1024*1024*100,totalSizeInBytes:1024*1024*100}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'UploadingFile.jpg',
    status: 'UPLOADING'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'PreparingToUploadFile.fastq',
    status: 'PREPARING',
    uploadedSizeInBytes: 0
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'path/to/paused.png',
    status: 'PAUSED'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'Cancelled.pdf',
    status: 'CANCELED_BY_USER'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'Failed.java',
    status: 'FAILED',
    errorMessage: 'Something went wrong.'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'Complete.tsx',
    status: 'COMPLETE',
    uploadedSizeInBytes: 1024 * 1024 * 100,
    totalSizeInBytes: 1024 * 1024 * 100
  }
}`,...u.parameters?.docs?.source}}},d=[`Uploading`,`Preparing`,`Paused`,`Cancelled`,`Failed`,`Complete`]}))();export{c as Cancelled,u as Complete,l as Failed,s as Paused,o as Preparing,a as Uploading,d as __namedExportsOrder,i as default};