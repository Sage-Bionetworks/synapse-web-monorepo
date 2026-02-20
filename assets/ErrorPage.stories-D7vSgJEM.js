import{E as s,S as a}from"./ErrorPage-DhT5XGOV.js";import"./iframe-CKbLOTsP.js";import"./index-Chi_LkuB.js";import"./useDOI-D0ZtrEGY.js";import"./waitForAsyncResult-B9_zNpXM.js";import"./useMessage-CBqMTDkI.js";import"./useUserBundle-iM-7ZdVq.js";import"./useSuspenseQuery-uKlZGoJr.js";import"./ConfirmationDialog-Cpo9FRDD.js";import"./DialogBase-Yec6-9FP.js";import"./Close-BeDMsUE7.js";import"./HelpPopover-BR9cC52u.js";import"./MarkdownPopover-6_Y0Co8e.js";import"./LightTooltip-CgnSmSvt.js";import"./MarkdownSynapse-DMmwxLiP.js";import"./SkeletonButton-8Vj3L_5j.js";import"./SkeletonInlineBlock-D5PXFjGc.js";import"./SkeletonTable-DmfimDzq.js";import"./SkeletonParagraph-Kah2Bnvf.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
