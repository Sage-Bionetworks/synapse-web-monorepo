import{E as s,S as o}from"./ErrorPage-COknH961.js";import"./iframe-CztmM481.js";import"./index-Chi_LkuB.js";import"./useDOI-C1d4ikKu.js";import"./waitForAsyncResult-BHkURaIQ.js";import"./useMessage-CMzQ1HEo.js";import"./useUserBundle-BsSVCPoC.js";import"./ConfirmationDialog-CRTgjSct.js";import"./DialogBase-DuknWYoH.js";import"./Close-DsRX1MCV.js";import"./HelpPopover-DvC80QRo.js";import"./MarkdownPopover-eu3zF-im.js";import"./LightTooltip-BA9BIuJJ.js";import"./MarkdownSynapse-B_NDi4bv.js";import"./SkeletonButton-BWr_w7rt.js";import"./SkeletonInlineBlock-BafzGMgM.js";import"./SkeletonTable-D62IODcw.js";import"./SkeletonParagraph-RQGRwxXl.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...a.parameters?.docs?.source}}};const U=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,a as Unavailable,U as __namedExportsOrder,f as default};
