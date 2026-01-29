import{E as s,S as a}from"./ErrorPage-BBfFebNt.js";import"./iframe-DOA--ypP.js";import"./index-Chi_LkuB.js";import"./useDOI-COXO75B-.js";import"./waitForAsyncResult-CukCkTkm.js";import"./useMessage-DPswz1LS.js";import"./useUserBundle-CMLYFODb.js";import"./useSuspenseQuery-CH8JGQoS.js";import"./ConfirmationDialog-Bx9ardy9.js";import"./DialogBase-COBCl3WL.js";import"./Close-SOWXhUL2.js";import"./HelpPopover-CQR-J_g5.js";import"./MarkdownPopover-ByIhHE6X.js";import"./LightTooltip-Cp9tv2pP.js";import"./MarkdownSynapse-CorLAqOX.js";import"./SkeletonButton-SLwBY3oR.js";import"./SkeletonInlineBlock-BSyES9P5.js";import"./SkeletonTable-BN8TQIoy.js";import"./SkeletonParagraph-CKHoRTTC.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
