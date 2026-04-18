import{S as a,E as s}from"./ErrorPage-BgrpMWF4.js";import"./iframe-BFoBHJbY.js";import"./index-Chi_LkuB.js";import"./useDOI-DdOA7FfI.js";import"./waitForAsyncResult-DNKGQs1Z.js";import"./useMessage-Bop6JYsF.js";import"./useUserBundle-DpjLlelW.js";import"./queryOptions-C9woPjwX.js";import"./ConfirmationDialog-DQ7ZhkXi.js";import"./DialogBase-BYig5ial.js";import"./Close-C6cmQXhi.js";import"./HelpPopover-C6OrfbQU.js";import"./MarkdownPopover-Dm2f1BST.js";import"./LightTooltip-Dnju38Ge.js";import"./MarkdownSynapse-CTY9rgWg.js";import"./SkeletonButton-RWaImhZL.js";import"./SkeletonInlineBlock-BH9IFr_J.js";import"./SkeletonTable-DpdP1ZU-.js";import"./SkeletonParagraph-CxOMNOR8.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
