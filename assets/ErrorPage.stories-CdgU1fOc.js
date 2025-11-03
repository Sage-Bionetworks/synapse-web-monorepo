import{E as g,S as o}from"./ErrorPage-Hu3817-0.js";import"./iframe-DgbfDeQR.js";import"./index-r8ZA1smB.js";import"./useDOI-D2YNSV3s.js";import"./waitForAsyncResult-cEkzEf98.js";import"./useMessage-DaWdudIe.js";import"./ConfirmationDialog-BKHZua3P.js";import"./DialogBase-Bdu7Jetf.js";import"./Close-Uo8JW1Td.js";import"./HelpPopover-BOrP1Anu.js";import"./MarkdownPopover-BDg3J_sQ.js";import"./LightTooltip-B-8YX4RQ.js";import"./MarkdownSynapse-D4qxv4i6.js";import"./SkeletonButton-C3Hqevp6.js";import"./SkeletonInlineBlock-D8vr7qjb.js";import"./SkeletonTable-CkIMw70Y.js";import"./SkeletonParagraph-BtYiDY2A.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...(p=(t=r.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var n,m,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,y,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...(d=(y=a.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};const v=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,a as Unavailable,v as __namedExportsOrder,k as default};
