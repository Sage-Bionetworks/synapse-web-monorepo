import{a as B}from"./FileUploadProgress-Rlqr40eO.js";import"./iframe-BUOdsTSh.js";import"./index-r8ZA1smB.js";import"./Close-U8nFtaRM.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,O={title:"Synapse/Upload/FileUploadProgress",component:B,args:{uploadedSizeInBytes:1024*1024*50,totalSizeInBytes:1024*1024*100,onCancel:e(),onPause:e(),onResume:e(),onRemove:e()},tags:["autodocs"]},a={args:{fileName:"UploadingFile.jpg",status:"UPLOADING"}},s={args:{fileName:"PreparingToUploadFile.fastq",status:"PREPARING",uploadedSizeInBytes:0}},r={args:{fileName:"path/to/paused.png",status:"PAUSED"}},o={args:{fileName:"Cancelled.pdf",status:"CANCELED_BY_USER"}},t={args:{fileName:"Failed.java",status:"FAILED",errorMessage:"Something went wrong."}},n={args:{fileName:"Complete.tsx",status:"COMPLETE",uploadedSizeInBytes:1024*1024*100,totalSizeInBytes:1024*1024*100}};var p,l,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    fileName: 'UploadingFile.jpg',
    status: 'UPLOADING'
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,c,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    fileName: 'PreparingToUploadFile.fastq',
    status: 'PREPARING',
    uploadedSizeInBytes: 0
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,g,S;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    fileName: 'path/to/paused.png',
    status: 'PAUSED'
  }
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,E,P;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    fileName: 'Cancelled.pdf',
    status: 'CANCELED_BY_USER'
  }
}`,...(P=(E=o.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var N,U,C;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    fileName: 'Failed.java',
    status: 'FAILED',
    errorMessage: 'Something went wrong.'
  }
}`,...(C=(U=t.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var I,F,_;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    fileName: 'Complete.tsx',
    status: 'COMPLETE',
    uploadedSizeInBytes: 1024 * 1024 * 100,
    totalSizeInBytes: 1024 * 1024 * 100
  }
}`,...(_=(F=n.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};const R=["Uploading","Preparing","Paused","Cancelled","Failed","Complete"];export{o as Cancelled,n as Complete,t as Failed,r as Paused,s as Preparing,a as Uploading,R as __namedExportsOrder,O as default};
