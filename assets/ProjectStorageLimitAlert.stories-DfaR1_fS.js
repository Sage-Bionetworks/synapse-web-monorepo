import{hN as t}from"./iframe-DVXODLNu.js";import{P as L}from"./ProjectStorageLimitAlert-tNYr5dCZ.js";import"./index-r8ZA1smB.js";const A={title:"Synapse/Upload/ProjectStorageLimitAlert",component:L,tags:["autodocs"]},e={args:{didUploadsExceedLimit:!1,usage:{storageLocationId:t,maxAllowedFileBytes:1024*1024*100,sumFileBytes:1024*1024*90,isOverLimit:!1}}},s={args:{didUploadsExceedLimit:!0,usage:{storageLocationId:t,maxAllowedFileBytes:1024*1024*100,sumFileBytes:1024*1024*90,isOverLimit:!1}}},a={args:{didUploadsExceedLimit:!1,usage:{storageLocationId:t,maxAllowedFileBytes:1024*1024*100,sumFileBytes:1024*1024*110,isOverLimit:!0}}};var i,r,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    didUploadsExceedLimit: false,
    usage: {
      storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      maxAllowedFileBytes: 1024 * 1024 * 100,
      sumFileBytes: 1024 * 1024 * 90,
      isOverLimit: false
    }
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var d,n,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    didUploadsExceedLimit: true,
    usage: {
      storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      maxAllowedFileBytes: 1024 * 1024 * 100,
      sumFileBytes: 1024 * 1024 * 90,
      isOverLimit: false
    }
  }
}`,...(m=(n=s.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var l,c,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    didUploadsExceedLimit: false,
    usage: {
      storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      maxAllowedFileBytes: 1024 * 1024 * 100,
      sumFileBytes: 1024 * 1024 * 110,
      isOverLimit: true
    }
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const S=["Warning","UploadsExceededLimit","OverLimit"];export{a as OverLimit,s as UploadsExceededLimit,e as Warning,S as __namedExportsOrder,A as default};
