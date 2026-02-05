import{E as s,S as a}from"./ErrorPage-D9WnMrvl.js";import"./iframe-CS-qe6F5.js";import"./index-Chi_LkuB.js";import"./useDOI-gnXZhRWY.js";import"./waitForAsyncResult-Ce56D5r6.js";import"./useMessage-CmYJ6jQ1.js";import"./useUserBundle-BGH5snWH.js";import"./useSuspenseQuery-CKSmV4Hq.js";import"./ConfirmationDialog-C8o9i-8I.js";import"./DialogBase-DndsSZnx.js";import"./Close-ChktzVWU.js";import"./HelpPopover-BgVCOrU-.js";import"./MarkdownPopover-DjcyZTOi.js";import"./LightTooltip-Cbj-L_pp.js";import"./MarkdownSynapse-CpxRP6ef.js";import"./SkeletonButton-B9T2RRww.js";import"./SkeletonInlineBlock-BdSvJBN8.js";import"./SkeletonTable-BzgRcoI4.js";import"./SkeletonParagraph-B9Sr-CD_.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
