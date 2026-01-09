import{E as s,S as a}from"./ErrorPage-JSi9JkIj.js";import"./iframe-BCo6xRtR.js";import"./index-Chi_LkuB.js";import"./useDOI-CcJUwLSn.js";import"./waitForAsyncResult-Vqz9FRAb.js";import"./useMessage-Nc4CN5Ii.js";import"./useUserBundle-CtTpGbMF.js";import"./useSuspenseQuery-DtqIfE1u.js";import"./ConfirmationDialog-DI4QV0Bv.js";import"./DialogBase-CdXHsKxC.js";import"./Close-DWxxPOfT.js";import"./HelpPopover-COi1c2gB.js";import"./MarkdownPopover-xrdPtb-B.js";import"./LightTooltip-CCtrwSvI.js";import"./MarkdownSynapse-CwD5nz4r.js";import"./SkeletonButton-Di7WZDoT.js";import"./SkeletonInlineBlock-Oo_uHdtx.js";import"./SkeletonTable-CE_fO4U2.js";import"./SkeletonParagraph-BBZfUnUj.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
