import{E as s,S as a}from"./ErrorPage-Cg1Eis8l.js";import"./iframe-B-rWBBOy.js";import"./index-Chi_LkuB.js";import"./useDOI-BN_7wt5o.js";import"./waitForAsyncResult-BegINeZL.js";import"./useMessage-Duzc6Lu0.js";import"./useUserBundle-rX-QoUXs.js";import"./useSuspenseQuery-BilXPZyB.js";import"./ConfirmationDialog-CTssCfny.js";import"./DialogBase-CPTrGtI1.js";import"./Close-CpX3wYP0.js";import"./HelpPopover-q5ekk2th.js";import"./MarkdownPopover-b-Sbeuph.js";import"./LightTooltip-BemyKtyu.js";import"./MarkdownSynapse-CjIEyYww.js";import"./SkeletonButton-C55ygy2r.js";import"./SkeletonInlineBlock-Cpev2ljV.js";import"./SkeletonTable-GTeIPnR6.js";import"./SkeletonParagraph-IppQ387m.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
