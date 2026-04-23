import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./synapse-client-DHdh8s5k.js";import{n,t as r}from"./ProjectStorageLimitAlert-DbZIy0pZ.js";var i,a,o,s,c;e((()=>{t(),n(),i={title:`Synapse/Upload/ProjectStorageLimitAlert`,component:r,tags:[`autodocs`]},a={args:{didUploadsExceedLimit:!1,usage:{storageLocationId:1,maxAllowedFileBytes:1024*1024*100,sumFileBytes:1024*1024*90,isOverLimit:!1}}},o={args:{didUploadsExceedLimit:!0,usage:{storageLocationId:1,maxAllowedFileBytes:1024*1024*100,sumFileBytes:1024*1024*90,isOverLimit:!1}}},s={args:{didUploadsExceedLimit:!1,usage:{storageLocationId:1,maxAllowedFileBytes:1024*1024*100,sumFileBytes:1024*1024*110,isOverLimit:!0}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    didUploadsExceedLimit: false,
    usage: {
      storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      maxAllowedFileBytes: 1024 * 1024 * 100,
      sumFileBytes: 1024 * 1024 * 90,
      isOverLimit: false
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    didUploadsExceedLimit: true,
    usage: {
      storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      maxAllowedFileBytes: 1024 * 1024 * 100,
      sumFileBytes: 1024 * 1024 * 90,
      isOverLimit: false
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    didUploadsExceedLimit: false,
    usage: {
      storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      maxAllowedFileBytes: 1024 * 1024 * 100,
      sumFileBytes: 1024 * 1024 * 110,
      isOverLimit: true
    }
  }
}`,...s.parameters?.docs?.source}}},c=[`Warning`,`UploadsExceededLimit`,`OverLimit`]}))();export{s as OverLimit,o as UploadsExceededLimit,a as Warning,c as __namedExportsOrder,i as default};