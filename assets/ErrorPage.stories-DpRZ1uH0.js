import{S as a,E as s}from"./ErrorPage-BZdlMrMB.js";import"./iframe-vLBQZPS1.js";import"./index-Chi_LkuB.js";import"./useDOI-DCUtWUZO.js";import"./waitForAsyncResult-D6E-CFAq.js";import"./useMessage-DYSslO1W.js";import"./useUserBundle-BzYdunjk.js";import"./queryOptions-C9woPjwX.js";import"./ConfirmationDialog-DhT3Kl3D.js";import"./DialogBase-MXOqe2PM.js";import"./Close-w9C8mbRP.js";import"./HelpPopover-BDS7EbF2.js";import"./MarkdownPopover-DJzEVvrc.js";import"./LightTooltip-FFjGpbV1.js";import"./MarkdownSynapse-LkluOMjb.js";import"./SkeletonButton-Bpq0DUhs.js";import"./SkeletonInlineBlock-Ck9MEOcu.js";import"./SkeletonTable-vLDxttH1.js";import"./SkeletonParagraph-BdLk36IL.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
