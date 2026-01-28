import{a as p}from"./FileUploadProgress-IzVUILGc.js";import"./iframe-C9XoSndX.js";import"./index-Chi_LkuB.js";import"./Close-DQGHtad4.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,m={title:"Synapse/Upload/FileUploadProgress",component:p,args:{uploadedSizeInBytes:1024*1024*50,totalSizeInBytes:1024*1024*100,onCancel:e(),onPause:e(),onResume:e(),onRemove:e()},tags:["autodocs"]},a={args:{fileName:"UploadingFile.jpg",status:"UPLOADING"}},s={args:{fileName:"PreparingToUploadFile.fastq",status:"PREPARING",uploadedSizeInBytes:0}},r={args:{fileName:"path/to/paused.png",status:"PAUSED"}},o={args:{fileName:"Cancelled.pdf",status:"CANCELED_BY_USER"}},t={args:{fileName:"Failed.java",status:"FAILED",errorMessage:"Something went wrong."}},n={args:{fileName:"Complete.tsx",status:"COMPLETE",uploadedSizeInBytes:1024*1024*100,totalSizeInBytes:1024*1024*100}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'UploadingFile.jpg',
    status: 'UPLOADING'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'PreparingToUploadFile.fastq',
    status: 'PREPARING',
    uploadedSizeInBytes: 0
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'path/to/paused.png',
    status: 'PAUSED'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'Cancelled.pdf',
    status: 'CANCELED_BY_USER'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'Failed.java',
    status: 'FAILED',
    errorMessage: 'Something went wrong.'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'Complete.tsx',
    status: 'COMPLETE',
    uploadedSizeInBytes: 1024 * 1024 * 100,
    totalSizeInBytes: 1024 * 1024 * 100
  }
}`,...n.parameters?.docs?.source}}};const u=["Uploading","Preparing","Paused","Cancelled","Failed","Complete"];export{o as Cancelled,n as Complete,t as Failed,r as Paused,s as Preparing,a as Uploading,u as __namedExportsOrder,m as default};
