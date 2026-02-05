import{hP as t}from"./iframe-CmoSAPSB.js";import{P as i}from"./ProjectStorageLimitAlert-rS3kYG9h.js";import"./index-Chi_LkuB.js";const n={title:"Synapse/Upload/ProjectStorageLimitAlert",component:i,tags:["autodocs"]},e={args:{didUploadsExceedLimit:!1,usage:{storageLocationId:t,maxAllowedFileBytes:1024*1024*100,sumFileBytes:1024*1024*90,isOverLimit:!1}}},s={args:{didUploadsExceedLimit:!0,usage:{storageLocationId:t,maxAllowedFileBytes:1024*1024*100,sumFileBytes:1024*1024*90,isOverLimit:!1}}},a={args:{didUploadsExceedLimit:!1,usage:{storageLocationId:t,maxAllowedFileBytes:1024*1024*100,sumFileBytes:1024*1024*110,isOverLimit:!0}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    didUploadsExceedLimit: false,
    usage: {
      storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      maxAllowedFileBytes: 1024 * 1024 * 100,
      sumFileBytes: 1024 * 1024 * 90,
      isOverLimit: false
    }
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    didUploadsExceedLimit: true,
    usage: {
      storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      maxAllowedFileBytes: 1024 * 1024 * 100,
      sumFileBytes: 1024 * 1024 * 90,
      isOverLimit: false
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    didUploadsExceedLimit: false,
    usage: {
      storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      maxAllowedFileBytes: 1024 * 1024 * 100,
      sumFileBytes: 1024 * 1024 * 110,
      isOverLimit: true
    }
  }
}`,...a.parameters?.docs?.source}}};const m=["Warning","UploadsExceededLimit","OverLimit"];export{a as OverLimit,s as UploadsExceededLimit,e as Warning,m as __namedExportsOrder,n as default};
