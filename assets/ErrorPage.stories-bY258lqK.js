import{E as g,S as o}from"./ErrorPage-CdkwdXBQ.js";import"./iframe-Ci1lmE8g.js";import"./index-r8ZA1smB.js";import"./useDOI-D81DvUAc.js";import"./waitForAsyncResult-3Lhx94bn.js";import"./useMessage-Dl8sLMrz.js";import"./ConfirmationDialog-C00Ejex4.js";import"./DialogBase-BYGdPH-i.js";import"./Close-CELbEfBf.js";import"./HelpPopover-Dp5xAO-J.js";import"./MarkdownPopover-C8x7eb7i.js";import"./LightTooltip-D8-ypvp8.js";import"./MarkdownSynapse-3G1qoarh.js";import"./SkeletonButton-CC-6gNoS.js";import"./SkeletonInlineBlock-B2RYwmUI.js";import"./SkeletonTable-DkbE7er9.js";import"./SkeletonParagraph-ITJPOI8x.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
