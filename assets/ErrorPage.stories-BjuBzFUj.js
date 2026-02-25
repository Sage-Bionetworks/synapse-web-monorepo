import{E as s,S as a}from"./ErrorPage-R3039w3i.js";import"./iframe-C0jSrR5c.js";import"./index-Chi_LkuB.js";import"./useDOI-B-3Ei6Xe.js";import"./waitForAsyncResult-BysiyZ8q.js";import"./useMessage-BDHY8uUG.js";import"./useUserBundle-OwQNCmCR.js";import"./useSuspenseQuery-CHrCTvKw.js";import"./ConfirmationDialog-BQA9hOtu.js";import"./DialogBase-DJJeOMKc.js";import"./Close-DWJA7LvA.js";import"./HelpPopover-k-mGSl5L.js";import"./MarkdownPopover-HA7m-95B.js";import"./LightTooltip-C3dz3Fkz.js";import"./MarkdownSynapse-EAeKywnO.js";import"./SkeletonButton-Da-HHa43.js";import"./SkeletonInlineBlock-kvwMQbuJ.js";import"./SkeletonTable-83ELoSn8.js";import"./SkeletonParagraph-C_qcfR_9.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...o.parameters?.docs?.source}}};const A=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,o as Unavailable,A as __namedExportsOrder,U as default};
