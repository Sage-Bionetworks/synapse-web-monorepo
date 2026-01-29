import{E as s,S as a}from"./ErrorPage-C106M3sw.js";import"./iframe-DY1t7RUX.js";import"./index-Chi_LkuB.js";import"./useDOI-BVAx-aC6.js";import"./waitForAsyncResult-BSO7bq76.js";import"./useMessage-hAHUdzfh.js";import"./useUserBundle-DPIgGoEf.js";import"./useSuspenseQuery-xirJCFap.js";import"./ConfirmationDialog-Bj6eqrOC.js";import"./DialogBase-DO28beWj.js";import"./Close-CDgVbOyZ.js";import"./HelpPopover-C9D9Mwao.js";import"./MarkdownPopover-St2sJIEx.js";import"./LightTooltip-DVzuHePn.js";import"./MarkdownSynapse-BvADFsyz.js";import"./SkeletonButton-DnY8-1vA.js";import"./SkeletonInlineBlock-DZRcElE1.js";import"./SkeletonTable-Q2u-z5xw.js";import"./SkeletonParagraph-DFydk1yR.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
